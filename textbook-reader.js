/* Display selected passages from a locally opened copy of the class textbook. */
const TextbookReader = (() => {
  "use strict";

  const scriptUrl = document.currentScript?.src || document.baseURI;
  const bookFingerprint = "1437402ecd22cf09355c7ec8674a7385";
  const chunkSize = 256 * 1024;
  const scale = 2.3;
  const cssScale = 0.8;
  const records = new WeakMap();
  let library;
  let session = null;
  let view = null;
  let observer;
  let resizeObserver;
  let layoutFrame;
  let viewId = 0;
  let busy = 0;
  const pending = new Set();

  function pdfLibrary() {
    if (!library) {
      library = import(new URL("pdf.min.mjs", scriptUrl).href).then(pdf => {
        pdf.GlobalWorkerOptions.workerSrc = new URL("pdf.worker.min.mjs", scriptUrl).href;
        return pdf;
      }).catch(error => {
        library = null;
        throw error;
      });
    }
    return library;
  }

  function abortError() {
    return new DOMException("The selected textbook changed.", "AbortError");
  }

  function invalidateView() {
    viewId++;
    observer?.disconnect();
    resizeObserver?.disconnect();
    if (layoutFrame) cancelAnimationFrame(layoutFrame);
    pending.clear();
  }

  function restore(element) {
    const entry = records.get(element);
    if (!entry) return;
    element.replaceChildren(...entry.original);
    element.style.minHeight = entry.minHeight;
    element.removeAttribute("aria-busy");
    delete element.dataset.readerState;
    records.delete(element);
  }

  function clear() {
    invalidateView();
    if (view) view.root.querySelectorAll(".book-excerpt[data-excerpt]").forEach(restore);
    const old = session;
    session = null;
    if (old) {
      old.cancelled = true;
      old.cancelOpening?.();
      old.surfaces.clear();
      old.drawing.clear();
      old.openTask?.destroy().catch(() => {});
    }
  }

  async function attach(file) {
    clear();
    const state = { matched: false, cancelled: false, surfaces: new Map(), drawing: new Map() };
    session = state;
    try {
      const pdf = await pdfLibrary();
      const first = new Uint8Array(await file.slice(0, chunkSize).arrayBuffer());
      if (state.cancelled) throw abortError();
      const header = new TextDecoder("ascii").decode(first.subarray(0, 1024));
      if (!header.includes("%PDF-")) throw new Error("Choose a readable PDF of the textbook.");

      let rejectRead;
      const readFailure = new Promise((_, reject) => { rejectRead = reject; });
      const transport = new pdf.PDFDataRangeTransport(file.size, first, false, file.name);
      transport.requestDataRange = (begin, end) => {
        file.slice(begin, end).arrayBuffer().then(data => {
          if (!state.cancelled) transport.onDataRange(begin, new Uint8Array(data));
        }).catch(error => {
          rejectRead(error);
          state.openTask?.destroy().catch(() => {});
        });
      };
      state.openTask = pdf.getDocument({
        range: transport,
        rangeChunkSize: chunkSize,
        disableStream: true,
        disableAutoFetch: true,
        isEvalSupported: false,
        useWorkerFetch: false,
        useWasm: false
      });
      const changed = new Promise((_, reject) => { state.cancelOpening = () => reject(abortError()); });
      state.pdf = await Promise.race([state.openTask.promise, readFailure, changed]);
      state.cancelOpening = null;
      if (state.cancelled) throw abortError();
      const pages = state.pdf.numPages;
      state.matched = pages === 766 && state.pdf.fingerprints[0] === bookFingerprint;
      if (!state.matched) {
        await state.openTask.destroy();
        state.openTask = null;
        state.pdf = null;
      } else if (view) {
        refresh(view.root, view.getPassages, view.offsetForPrinted);
      }
      return { pages, matched: state.matched };
    } catch (error) {
      if (session === state) clear();
      throw error;
    }
  }

  async function renderPage(state, number) {
    const page = await state.pdf.getPage(number);
    if (state.cancelled) throw abortError();
    const viewport = page.getViewport({ scale });
    const surface = document.createElement("canvas");
    surface.width = Math.ceil(viewport.width);
    surface.height = Math.ceil(viewport.height);
    try {
      await page.render({ canvas: surface, viewport, background: "white" }).promise;
      if (state.cancelled) throw abortError();
      return surface;
    } finally {
      page.cleanup();
    }
  }

  function pageSurface(state, number) {
    const cache = state.surfaces;
    if (cache.has(number)) {
      const surface = cache.get(number);
      cache.delete(number);
      cache.set(number, surface);
      return surface;
    }
    // Keep in-flight work outside the LRU so a slow render can still be shared.
    if (state.drawing.has(number)) return state.drawing.get(number);
    const task = renderPage(state, number).then(surface => {
      if (!state.cancelled) {
        cache.set(number, surface);
        if (cache.size > 3) cache.delete(cache.keys().next().value);
      }
      return surface;
    }).finally(() => state.drawing.delete(number));
    state.drawing.set(number, task);
    return task;
  }

  function pixelRect(rect, surface) {
    const width = surface.width / 10000, height = surface.height / 10000;
    const left = Math.max(0, Math.floor(rect[0] * width));
    const top = Math.max(0, Math.floor(rect[1] * height));
    const right = Math.min(surface.width, Math.ceil(rect[2] * width));
    const bottom = Math.min(surface.height, Math.ceil(rect[3] * height));
    const cuts = (rect[4] || []).map(x => Math.round(x * width)).filter(x => x > left && x < right);
    return { left, top, width: right - left, height: bottom - top, cuts };
  }

  // Manual table selections can contain several very wide lines. On phones, find the
  // blank rows and word spaces in the reader's scan so the text can wrap at native size.
  function tableLines(surface, rect) {
    const {left, top, width, height} = rect;
    const pixels = surface.getContext("2d").getImageData(left, top, width, height).data;
    const ink = (x, y) => {
      const off = (y * width + x) * 4;
      return pixels[off] + pixels[off + 1] + pixels[off + 2] < 444 && pixels[off + 3] > 127;
    };
    const spans = [];
    let start = -1, last = -1;
    for (let y = 0; y < height; y++) {
      let count = 0;
      for (let x = 0; x < width && count < 2; x++) if (ink(x, y)) count++;
      if (count < 2) continue;
      if (start < 0) start = y;
      else if (y - last > 3) { spans.push([start, last]); start = y; }
      last = y;
    }
    if (start >= 0) spans.push([start, last]);
    if (!spans.length || spans.some(([a,b]) => b - a > surface.width * 0.036)) return [rect];
    return spans.map(([a,b]) => {
      const cuts = [];
      const minGap = Math.max(4, Math.round(surface.width * 0.004));
      let firstInk = -1, lastInk = -1;
      for (let x = 0; x < width; x++) {
        let dark = false;
        for (let y = a; y <= b && !dark; y++) dark = ink(x, y);
        if (!dark) continue;
        if (firstInk < 0) firstInk = x;
        else if (x - lastInk > minGap) cuts.push(left + Math.round((x + lastInk) / 2));
        lastInk = x;
      }
      const x0 = Math.max(0, firstInk - 1), x1 = Math.min(width, lastInk + 2);
      const y0 = Math.max(0, a - 1), y1 = Math.min(height, b + 2);
      return {left: left + x0, top: top + y0, width: x1 - x0, height: y1 - y0, cuts};
    });
  }

  function cropRows(surface, rects, limit) {
    if (rects.every(r => r.width <= limit)) {
      const left = Math.min(...rects.map(r => r.left));
      return rects.map(r => {
        const indent = r.left - left;
        const x = indent < surface.width * 0.021 && indent + r.width <= limit ? indent : 0;
        return {width: x + r.width, height: r.height, parts: [{rect:r, x}]};
      });
    }
    const lines = rects.flatMap(r => r.width > limit && !r.cuts.length ? tableLines(surface, r) : [r]);
    const rows = [];
    let row = {width:0,height:0,parts:[]};
    const flush = () => {
      if (row.parts.length) rows.push(row);
      row = {width:0,height:0,parts:[]};
    };
    for (const r of lines) {
      if (!r.cuts.length && r.width > limit) {
        flush();
        rows.push({width:r.width,height:r.height,parts:[{rect:r,x:0}]});
        continue;
      }
      let left = r.left;
      let gap = row.parts.length ? Math.max(2, Math.round(r.height * .23)) : 0;
      for (const right of [...r.cuts, r.left + r.width]) {
        const width = right - left;
        if (width <= 0) continue;
        if (row.parts.length && row.width + gap + width > limit) { flush(); gap = 0; }
        row.parts.push({rect:{left,top:r.top,width,height:r.height},x:row.width + gap});
        row.width += width + gap;
        row.height = Math.max(row.height,r.height);
        left = right;
        gap = 0;
      }
    }
    flush();
    return rows;
  }

  function drawBlock(surface, block, available, label) {
    const [printed, naturalWidth, ...coordinates] = block;
    const rects = coordinates.map(rect => pixelRect(rect, surface)).filter(r => r.width > 0 && r.height > 0);
    if (!rects.length) throw new Error("This reference has no visible lines.");
    const colWidth = Math.max(1, Math.round(naturalWidth * surface.width / 10000));
    const limit = Math.max(1, Math.min(Math.round(available / cssScale), Math.max(colWidth,...rects.map(r=>r.width))));
    const rows = cropRows(surface, rects, limit);
    // A little leading between lines keeps adjacent ascenders and descenders distinct.
    const leading = Math.max(2, Math.round(surface.width * .0034));
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1,...rows.map(r => r.width));
    canvas.height = Math.max(1, rows.reduce((sum,r) => sum + r.height, 0) + leading * (rows.length - 1));
    const ctx = canvas.getContext("2d", {alpha:false});
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    let y = 0;
    for (const row of rows) {
      for (const {rect:r, x} of row.parts) {
        const dy = y + Math.round((row.height - r.height) / 2);
        ctx.drawImage(surface,r.left,r.top,r.width,r.height,x,dy,r.width,r.height);
      }
      y += row.height + leading;
    }
    canvas.style.display = "block";
    canvas.style.width = Math.min(available, Math.ceil(canvas.width * cssScale)) + "px";
    canvas.style.maxWidth = "100%";
    canvas.style.height = "auto";
    canvas.setAttribute("role","img");
    canvas.setAttribute("aria-label", (label || "Textbook passage") + ", printed page " + printed);
    return canvas;
  }

  function widthOf(element) {
    return Math.max(1,Math.floor(element.clientWidth || element.getBoundingClientRect().width || 420));
  }

  async function fill(element, id) {
    const state = session, entry = records.get(element), active = view;
    const current = () => state === session && !state.cancelled && id === viewId && active.root.contains(element);
    if (!entry || !current()) return;
    entry.running = id;
    const width = widthOf(element);
    const docFrag = document.createDocumentFragment();
    try {
      for (const block of entry.blocks) {
        const viewerPage = block[0] + Number(active.offsetForPrinted(block[0]) || 0);
        const page = await pageSurface(state, viewerPage);
        if (!current()) return;
        docFrag.append(drawBlock(page, block, width, element.getAttribute("aria-label")));
      }
      if (current()) {
        element.replaceChildren(docFrag);
        element.dataset.readerState = "ready";
        element.removeAttribute("aria-busy");
        element.style.minHeight = entry.minHeight;
        entry.finished = true;
        observer?.unobserve(element);
      }
    } catch {
      if (current()) {
        element.textContent = "Open the printed page to read this passage.";
        element.dataset.readerState = "error";
        element.style.minHeight = entry.minHeight;
        element.removeAttribute("aria-busy");
        observer?.unobserve(element);
      }
    } finally {
      if (entry.running === id) entry.running = null;
    }
  }

  function pump() {
    while (busy < 2 && pending.size) {
      const el = pending.values().next().value;
      pending.delete(el);
      busy++;
      fill(el, viewId).finally(() => { busy--; pump(); });
    }
  }

  function refresh(root, getPassages, offsetForPrinted = () => 0) {
    invalidateView();
    view = {root,getPassages,offsetForPrinted};
    if (!session?.matched || !root) return;
    const id = viewId;
    if (typeof IntersectionObserver === "function") {
      observer = new IntersectionObserver(entries => {
        if (viewId !== id) return;
        for (const item of entries) {
          const entry = records.get(item.target);
          if (!entry || entry.finished) continue;
          if (item.isIntersecting && entry.running !== id) pending.add(item.target);
          else pending.delete(item.target);
        }
        pump();
      }, {rootMargin:"220px 0px"});
    } else observer = null;
    const rootWidth = root.clientWidth;
    if (typeof ResizeObserver === "function") {
      resizeObserver = new ResizeObserver(() => {
        if (id !== viewId || Math.abs(root.clientWidth - rootWidth) < 2) return;
        if (layoutFrame) cancelAnimationFrame(layoutFrame);
        layoutFrame = requestAnimationFrame(() => {
          if (id === viewId) refresh(root,getPassages,offsetForPrinted);
        });
      });
      resizeObserver.observe(root);
    }
    root.querySelectorAll(".book-excerpt[data-excerpt]").forEach(element => {
      const key = element.dataset.excerpt;
      const blocks = getPassages(key);
      if (!blocks?.length) return;
      const width = widthOf(element);
      const signature = key + "|" + width + "|" + blocks.map(b => offsetForPrinted(b[0]) || 0).join(",");
      let entry = records.get(element);
      if (entry?.finished && entry.signature === signature) return;
      if (!entry) {
        entry = {original:[...element.childNodes], minHeight:element.style.minHeight};
        records.set(element, entry);
      }
      Object.assign(entry, {blocks,signature,finished:false});
      element.dataset.readerState = "waiting";
      element.setAttribute("aria-busy","true");
      // Keep deep links stable as passages above them finish loading.
      const reserved = blocks.reduce((sum,[,col,...rects]) => {
        const wrap = Math.max(1, Math.min(3, col * 0.107 / width));
        return sum + rects.reduce((height, r) => height + (r[3] - r[1]) * .155 + 3, 0) * wrap;
      },0);
      element.style.minHeight = Math.ceil(reserved) + "px";
      if (observer) observer.observe(element); else pending.add(element);
    });
    pump();
  }

  return {
    attach, clear, refresh,
    get active() { return session?.matched === true; }
  };
})();

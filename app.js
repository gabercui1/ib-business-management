(function revisionDesk() {
  "use strict";

  const main = document.getElementById("main-content");
  const searchDialog = document.getElementById("search-dialog");
  const searchInput = document.getElementById("search-input");
  const escape = value => String(value ?? "").replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]);
  const slug = value => value.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/&/g, " and ").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  const icons = {
    bookmark: '<path d="M6 3.5h12v17l-6-4-6 4z"/>',
    book: '<path d="M12 5.8C9.3 4 6.4 3.7 2.5 4.3v14c3.9-.6 6.8-.3 9.5 1.5 2.7-1.8 5.6-2.1 9.5-1.5v-14c-3.9-.6-6.8-.3-9.5 1.5zM12 6v13"/>',
    arrow: '<path d="M4 12h15m-6-6 6 6-6 6"/>',
    arrowUp: '<path d="M6 18 18 6M7 6h11v11"/>',
    shuffle: '<path d="M4.3 9a8 8 0 0 1 13.9-2l1.7 2.3M20 4.5v5.2h-5.2m4.8 5.3a8 8 0 0 1-13.9 2L4 14.7M4 19.5v-5.2h5.2"/>',
    layers: '<path d="m3 8 9-5 9 5-9 5zM3 12l9 5 9-5M3 16l9 5 9-5"/>',
    chart: '<path d="M3.5 3.5v17h17M7 16v-4m5 4V8m5 8V5"/>',
    check: '<path d="m4 12 5 5L20 6"/>'
  };
  const icon = (name, size = 18) => `<svg class="icon" width="${size}" height="${size}" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round">${icons[name]}</svg>`;
  const notes = Object.entries(NOTES).flatMap(([topic, items]) => items.map(item => {
    const id = slug(item.title);
    return { ...item, topic, id, key: `${topic}/${id}`, href: `#/topic/${topic}/term/${id}` };
  }));
  const byTopic = Object.fromEntries(Object.keys(TOPICS).map(id => [id, notes.filter(note => note.topic === id)]));
  const byKey = new Map(notes.map(note => [note.key, note]));
  const firstByTitle = title => notes.find(note => note.title.toLowerCase() === title.toLowerCase());
  const levelNames = { core: "SL & HL", hl: "HL only" };

  function readLocal(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key) ?? JSON.stringify(fallback)); }
    catch { return fallback; }
  }
  function writeLocal(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* The current session remains usable. */ }
  }
  const legacyKeys = {
    "4.3/qualitative-forecasting": "4.3/market-research-and-test-marketing",
    "4.4/sampling-frame-and-bias": "4.4/population-sampling-frame-and-bias"
  };
  const storedBookmarks = readLocal("bm-revision-saved-v1", []);
  const saved = new Set((Array.isArray(storedBookmarks) ? storedBookmarks : [])
    .map(key => legacyKeys[key] || key).filter(key => byKey.has(key)));
  const topicIds = Object.keys(TOPICS);
  let browseLevel = "all";
  let renderedLesson = "";
  let deck = null;
  let lastSearchOpener = null;

  function badge(level) {
    return `<span class="level-badge ${level === "hl" ? "hl" : ""}">${escape(levelNames[level])}</span>`;
  }
  function route() {
    return (location.hash.startsWith("#/") ? location.hash.slice(2) : "").split("/").filter(Boolean);
  }
  function crumbs(parts) {
    return `<nav class="crumbs" aria-label="Breadcrumb"><a href="#/">Lessons</a>${parts.map(part => `<span aria-hidden="true">/</span>${part.href ? `<a href="${part.href}">${escape(part.name)}</a>` : `<span aria-current="page">${escape(part.name)}</span>`}`).join("")}</nav>`;
  }
  function filterControls() {
    const levels = [["all", "All content"], ["core", "SL & HL core"], ["hl", "HL only"]];
    return `<div class="segments" role="group" aria-label="Filter by syllabus level">${levels.map(([id, label]) => `<button type="button" data-filter="${id}" aria-pressed="${browseLevel === id}">${escape(label)}</button>`).join("")}</div>`;
  }
  function matchesLevel(note) {
    return browseLevel === "all" || note.level === browseLevel;
  }
  function topicLink(id) {
    return `#/topic/${id}${browseLevel === "all" ? "" : "/" + browseLevel}`;
  }
  function rowsForUnit(unitId, detailed = false) {
    const topicIds = UNITS[unitId].topics.filter(id => byTopic[id].some(matchesLevel));
    return topicIds.map(id => {
      const meta = TOPICS[id];
      const hasCore = byTopic[id].some(note => note.level === "core");
      const hasHL = byTopic[id].some(note => note.level === "hl");
      const tag = !hasCore || browseLevel === "hl" ? badge("hl") : "";
      const count = new Set(byTopic[id].filter(matchesLevel).map(n => n.group)).size;
      return `<a class="topic-row${detailed ? " detailed" : ""}" href="${topicLink(id)}">
        <span class="topic-code">${id}</span><span class="row-content"><span class="row-title">${escape(meta.name)}</span>${detailed ? `<span class="row-desc">${escape(meta.description)}</span><span class="row-meta">${count} ${count === 1 ? "section" : "sections"} · ${browseLevel === "core" ? "SL &amp; HL core" : hasCore && hasHL && browseLevel === "all" ? "Shared content and HL additions" : hasCore && browseLevel !== "hl" ? "SL &amp; HL" : "HL only"}</span>` : ""}</span>${tag}<span class="row-arrow" aria-hidden="true">↗</span></a>`;
    }).join("");
  }
  function unitCard(id) {
    const u = UNITS[id];
    const topicCount = u.topics.filter(t => byTopic[t].some(matchesLevel)).length;
    if (!topicCount) return "";
    return `<article class="unit-card"><div class="unit-card-head">
      <div class="unit-meta"><span class="unit-label">${icon(id === "1" ? "layers" : "chart", 18)} Unit ${id}</span><span>${topicCount} ${topicCount === 1 ? "subtopic" : "subtopics"}</span></div>
      <h3><a href="#/unit/${id}">${escape(u.name)}</a></h3>
      <p>${escape(u.description)}</p></div><div class="unit-rows">${rowsForUnit(id)}</div>
      <a href="#/unit/${id}" class="unit-open">Open unit ${id} ${icon("arrow", 16)}</a></article>`;
  }

  const initialSelection = [4, 11, 17, 19, 28, 34, 38, 45];
  let selection = new Set(initialSelection);
  function drawSample() {
    const pool = Array.from({ length: 48 }, (_, i) => i);
    for (let i = 0; i < 8; i++) {
      const other = i + Math.floor(Math.random() * (48 - i));
      [pool[i], pool[other]] = [pool[other], pool[i]];
    }
    selection = new Set(pool.slice(0, 8));
    const grid = document.querySelector(".sample-grid");
    if (grid) {
      [...grid.children].forEach((dot, i) => dot.classList.toggle("selected", selection.has(i)));
      document.getElementById("status").textContent = `New sample of eight customers: ${[...selection].map(i => i + 1).sort((a, b) => a - b).join(", ")}.`;
    }
  }
  function spotlight() {
    const n = firstByTitle("Random sampling");
    return `<aside class="spotlight" aria-label="Random sampling demonstration">
      <div class="spot-meta"><span class="spot-kicker"><span class="white-dot"></span> Sampling demonstration</span><span>4.4 / Market research</span></div>
      <div class="sample-plot"><div class="sample-grid" role="img" aria-label="Eight selected customers in a population of forty-eight">${Array.from({ length: 48 }, (_, i) => `<i class="${selection.has(i) ? "selected" : ""}"></i>`).join("")}</div>
      <div class="plot-legend"><span><i></i> Population <b>48</b></span><span><i></i> Sample <b>8</b></span></div></div>
      <div class="spot-content"><a href="${n.href}" class="spot-title">Random sampling ${icon("arrowUp", 19)}</a>
      <button type="button" id="draw-sample" class="redraw" aria-label="Draw another random sample of 8 customers">${icon("shuffle", 15)} Draw again</button></div>
    </aside>`;
  }
  function home() {
    return `<section class="hero home-hero"><div class="hero-copy">
      <p class="kicker"><span class="kicker-line"></span> IB Diploma Programme · SL and HL</p>
      <h1>Business<br>Management<span class="title-dot">.</span></h1>
      <p class="deck">Choose a unit and subtopic to read the textbook definitions, advantages and disadvantages. Use the flashcards to practise recall.</p></div>
      <aside class="home-example"><p class="kicker">From lesson 4.1 · Market share</p>
      <h2>Sales grew. Why did market share fall?</h2>
      <table><thead><tr><th></th><th>Year 1</th><th>Year 2</th></tr></thead><tbody>
      <tr><th scope="row">Company sales</th><td>$2.0m</td><td>$2.2m</td></tr><tr><th scope="row">Market share</th><td>20.0%</td><td>17.6%</td></tr></tbody></table>
      <a class="source-link" href="#/topic/4.1/all/case">Read the worked example ${icon("arrow",16)}</a></aside></section>
      <section class="course-index" id="course-index"><div class="section-line"><div class="section-title"><h2>Lessons by unit</h2><span>2 units <b>·</b> ${topicIds.length} subtopics</span></div>${filterControls()}</div>
      <div class="unit-grid">${unitCard("1")}${unitCard("4")}</div></section>`;
  }
  function unitView(id) {
    const u = UNITS[id];
    const rows = rowsForUnit(id, true);
    return `${crumbs([{name: `Unit ${id}`}])}<section class="page-intro"><p class="kicker"><span class="kicker-line"></span> Unit ${id}</p><h1>${escape(u.name)}</h1><p class="deck">${escape(u.description)}</p></section>
      <section class="unit-section"><div class="section-line"><div class="section-title"><h2>Subtopics</h2></div>${filterControls()}</div>
      <div class="unit-detail-list">${rows || `<div class="empty"><h3>These subtopics are shared.</h3><p>Students at both levels study all five Unit 1 subtopics in this guide.</p><button data-filter="core" type="button" class="light-button">Show SL &amp; HL content</button></div>`}</div></section>`;
  }
  function groupNotes(list) {
    const result = new Map();
    list.forEach(note => {
      if (!result.has(note.group)) result.set(note.group, []);
      result.get(note.group).push(note);
    });
    return result;
  }
  function lessonSectionHref(id, level, group) {
    return `#/topic/${id}/${level}/section/${slug(group)}`;
  }
  function lessonContents(id, level, groups) {
    const links = [...groups.keys()].map(group => `<a href="${lessonSectionHref(id,level,group)}">${escape(group)}</a>`).join("");
    const terms = [...groups.values()].flat().sort((a,b) => a.title.localeCompare(b.title));
    return `<aside class="side lesson-side"><details class="contents-menu" ${matchMedia("(min-width: 801px)").matches ? "open" : ""}><summary>In this lesson</summary>
      <nav aria-label="Sections in this lesson">${links}<a href="#/topic/${id}/${level}/case">Worked case</a></nav>
      <details class="term-index"><summary>Find a term <span>${terms.length}</span></summary><nav aria-label="Terms in this lesson">
      ${terms.map(n=>`<a href="#/topic/${id}/${level}/term/${n.id}">${escape(n.title)}</a>`).join("")}</nav></details></details></aside>`;
  }
  function saveButton(note) {
    const isSaved = saved.has(note.key);
    return `<button class="save-note${isSaved ? " is-saved" : ""}" type="button" data-save="${escape(note.key)}" aria-pressed="${isSaved}" aria-label="${isSaved ? "Remove saved concept" : "Save concept"}">${icon(isSaved ? "check" : "bookmark", 15)}<span>${isSaved ? "Saved" : "Save"}</span></button>`;
  }
  function formatPages(pages) {
    const runs = [];
    for (const page of [...new Set(pages)].sort((a,b) => a-b)) {
      const last = runs[runs.length - 1];
      if (last && last[1] + 1 === page) last[1] = page;
      else runs.push([page, page]);
    }
    const label = runs.length === 1 && runs[0][0] === runs[0][1] ? "p." : "pp.";
    return label + " " + runs.map(([a,b]) => a === b ? a : `${a}–${b}`).join(", ");
  }

  function textbookTable(table) {
    const headings = table.headers.map(text => `<th scope="col">${escape(text)}</th>`).join("");
    const rows = table.rows.map(cells => `<tr><th scope="row">${escape(cells[0])}</th>${cells.slice(1).map(text => `<td>${escape(text)}</td>`).join("")}</tr>`).join("");
    return `<div class="book-table-wrap"><table class="book-table">${table.caption ? `<caption>${escape(table.caption)}</caption>` : ""}<thead><tr>${headings}</tr></thead><tbody>${rows}</tbody></table></div>`;
  }

  function textbookFor(note) {
    const entry = TEXTBOOK[note.title];
    const pages = entry.d.flatMap(part => part.pages);
    const definition = entry.d.map(part => part.table ? textbookTable(part.table) : `<p>${escape(part.text)}</p>`).join("");
    const lists = (entry.lists || []).map(({heading, items}) => {
      const allPages = [...new Set(items.flatMap(item => item.pages))];
      const bullets = items.map(item => {
        const start = item.point ? `<strong class="point-title">${escape(item.point)}</strong><br>` : "";
        const ref = allPages.length > 1 ? ` <span class="book-page">${formatPages(item.pages)}</span>` : "";
        return `<li>${start}<span class="point-body">${escape(item.text)}</span>${ref}</li>`;
      }).join("");
      return `<section class="source-list" aria-label="${escape(heading)}"><div class="source-heading"><h4>${escape(heading)}</h4><span class="book-page">${formatPages(allPages)}</span></div><ul>${bullets}</ul></section>`;
    }).join("");
    return `<div class="textbook-content"><div class="source-heading"><span class="definition-label">${escape(entry.kind || "Definition")}</span><cite class="book-page">Hoang, ${formatPages(pages)}</cite></div><div class="source-definition">${definition}</div>${lists}</div>`;
  }

  function sourceSearchText(note) {
    const entry = TEXTBOOK[note.title];
    const parts = entry.d.map(part => part.text || [part.table.caption, ...part.table.headers, ...part.table.rows.flat()].join(" "));
    for (const group of entry.lists || []) {
      parts.push(group.heading);
      for (const item of group.items) parts.push(item.point || "", item.text);
    }
    return parts.join(" ");
  }


  function termPassage(note) {
    return `<div class="reading-term" id="term-${note.id}">
      <div class="term-heading"><h3 tabindex="-1">${escape(note.title)}</h3>${note.level === "hl" ? badge("hl") : ""}</div>
      ${textbookFor(note)}
      ${note.formula ? `<p class="reading-formula">${escape(note.formula)}</p>` : ""}
      <details class="practice-inline"><summary>Practice example</summary><p>${escape(note.application)}</p></details>
      <div class="term-tools">${saveButton(note)}</div></div>`;
  }
  const mixBreaks = {
    Product: {"Product": "The offer", "Product life cycle": "The product life cycle", "Product portfolio": "Managing a portfolio", "Extension strategies": "Extending a product and building a brand"},
    Price: {"Price": "Setting and using prices", "Dynamic pricing": "Higher level pricing decisions"},
    Promotion: {"Promotion": "Choosing a promotional approach", "Sales promotion": "Promotional methods and channels", "Word-of-mouth promotion": "How a message spreads"},
    Place: {"Place and distribution channels": "The route from producer to customer", "Specialist distributors": "Choosing intermediaries and channels"}
  };
  function sectionPassages(id, group, entries) {
    const breaks = id === "4.5" && mixBreaks[group];
    if (!breaks) return entries.map(termPassage).join("");
    const chunks = [];
    let heading = "";
    for (const entry of byTopic[id].filter(n=>n.group === group)) {
      if (breaks[entry.title]) heading = breaks[entry.title];
      if (!entries.includes(entry)) continue;
      if (chunks.at(-1)?.title !== heading) chunks.push({title:heading, notes:[]});
      chunks.at(-1).notes.push(entry);
    }
    return chunks.map(c=>`<div class="reading-part"><h3 class="part-title">${escape(c.title)}</h3>${c.notes.map(termPassage).join("")}</div>`).join("");
  }
  function caseExample(c, label) {
    return `<div class="case-example">${label ? `<p class="field-title">${escape(label)}</p>` : ""}
      <p>${escape(c.context)}</p><p class="case-question">${escape(c.question)}</p>
      <details class="answer"><summary>Show model answer <span aria-hidden="true">+</span></summary><p>${escape(c.answer)}</p></details></div>`;
  }
  function practice(id, level) {
    const t=TOPICS[id];
    return `<section class="practice lesson-case" id="worked-case"><p class="kicker">Paper 2 application</p><h2 tabindex="-1">Worked case</h2>
      ${level !== "hl" || !t.hlCase ? caseExample(t.case,"") : ""}
      ${t.hlCase && level !== "core" ? caseExample(t.hlCase,"HL extension") : ""}</section>`;
  }
  function lessonNav(id, level) {
    const ids=topicIds.filter(t=>byTopic[t].some(n=>level==="all" || n.level===level));
    const i=ids.indexOf(id);
    const link=(t,label)=>t?`<a href="#/topic/${t}${level==="all"?"":"/"+level}"><small>${label}</small>${t} · ${escape(TOPICS[t].name)}</a>`:"";
    return `<nav class="chapter-nav" aria-label="Continue studying"><div>${link(ids[i-1],"← Previous lesson")}</div><div>${link(ids[i+1],"Next lesson →")}</div></nav>`;
  }
  function topicView(id, level) {
    const meta=TOPICS[id], all=byTopic[id];
    const groups=groupNotes(all.filter(n=>level==="all" || n.level===level));
    const mixed=all.some(n=>n.level==="core") && all.some(n=>n.level==="hl");
    const levels=mixed ? [["all","Full lesson"],["core","SL & HL core"],["hl","HL only"]] : [];
    const levelBar=levels.length ? `<nav class="level-tabs" aria-label="Lesson coverage">${levels.map(([key,title])=>`<a class="level-tab" href="#/topic/${id}/${key}" ${level===key?'aria-current="true"':""}>${title}</a>`).join("")}</nav>` : badge(all[0].level);
    const sections=[...groups].map(([group,entries])=>{
      return `<section class="teaching-section" id="section-${slug(group)}"><h2 tabindex="-1">${escape(group)}</h2>
        ${id==="4.4" && group==="Sampling methods" ? spotlight() : ""}
        ${sectionPassages(id,group,entries)}</section>`;
    }).join("");
    return `${crumbs([{name:`Unit ${id[0]}`,href:`#/unit/${id[0]}`},{name:`Lesson ${id}`}])}
      <header class="page-intro topic-intro"><p class="kicker"><span class="kicker-line"></span> Lesson ${id}</p>
      <h1>${escape(meta.name)}</h1></header>
      <div class="levels-row">${levelBar}<span class="lesson-edition">Hoang, 5th edition · pp. ${escape(meta.pages)}</span></div>
      <div class="study-layout">${lessonContents(id,level,groups)}<article class="lesson-text">
      ${sections}${practice(id,level)}
      <a class="lesson-recall" href="#/flashcards/${id}/${level}">Practise this lesson with flashcards ${icon("arrow",17)}</a>
      ${lessonNav(id,level)}</article></div>`;
  }
  function resultRow(n) {
    return `<a class="result" href="${n.href}"><span class="result-code">${escape(n.topic)}</span><span class="result-text"><b>${escape(n.title)}</b><small>${escape(TOPICS[n.topic].name)} · ${escape(n.group)}</small></span>${badge(n.level)}<span class="result-arrow" aria-hidden="true">↗</span></a>`;
  }
  function savedPage() {
    const kept = notes.filter(n => saved.has(n.key));
    return `${crumbs([{ name: "Saved concepts" }])}<section class="page-intro"><p class="kicker"><span class="kicker-line"></span> Your revision list</p><h1>Saved terms<span class="title-dot">.</span></h1><p class="deck">Jump back to bookmarked terms in their lessons, or review them as flashcards.</p></section>
      <section class="saved-list">${kept.length ? '<a class="light-button saved-review" href="#/flashcards/saved">Practise saved flashcards →</a>' : ""}${kept.length ? `${kept.map(n => `<div class="saved-row">${resultRow(n)}${saveButton(n)}</div>`).join("")}` : `<div class="empty">${icon("bookmark", 28)}<h2>Your list is empty.</h2><p>Use Save beside a term in a lesson or on a flashcard to keep it here.</p><a href="#/" class="light-button">Browse the course ${icon("arrow", 15)}</a></div>`}</section>`;
  }
  function references() {
    return `${crumbs([{ name: "Textbook & syllabus" }])}<section class="page-intro"><p class="kicker"><span class="kicker-line"></span> Reading references</p><h1>Textbook &amp; syllabus<span class="title-dot">.</span></h1><p class="deck">Sources for the lessons, flashcards and syllabus levels.</p></section>
      <div class="references-grid"><section><span class="unit-label">${icon("book")} Textbook</span><h2>Business Management</h2><p>Paul Hoang · 5th edition · IBID Press, 2022</p><p>Definitions and evaluation points follow the fifth edition. Printed page numbers appear beside each passage or list. Practice examples and Paper 2 cases are written for this guide.</p><div class="ref-links"><a href="${REFERENCES.publisher}" target="_blank" rel="noopener">Publisher’s edition ↗</a><a href="${REFERENCES.contents}" target="_blank" rel="noopener">Contents by chapter ↗</a></div></section>
      <section><span class="unit-label">${icon("layers")} Syllabus</span><h2>IB Diploma Programme</h2><p>Business management · First assessment 2024</p><p>This guide covers 1.1–1.5 and 4.1–4.6. The shared core applies to both levels. HL students also study the concepts marked HL only.</p><p>Read a full lesson from the unit index, or use Flashcards to practise recall by subtopic.</p><div class="ref-links"><a href="${REFERENCES.sl}" target="_blank" rel="noopener">SL subject brief ↗</a><a href="${REFERENCES.hl}" target="_blank" rel="noopener">HL subject brief ↗</a></div></section></div>`;
  }
  function deckSettings(parts) {
    const requested=parts[1];
    const scope=Object.hasOwn(TOPICS,requested) || Object.hasOwn(UNITS,requested) || requested==="saved" ? requested : "all";
    const level=["core","hl"].includes(parts[2]) ? parts[2] : "all";
    return {scope,level,key:scope+"/"+level};
  }
  function flashCard() {
    if (!deck.items.length) {
      const message=deck.scope==="saved" ? "Save a term while reading a lesson or reviewing a flashcard to build a personal deck." : "This selection has no cards at this level. Choose another topic or level.";
      return `<div class="empty"><h2>No matching flashcards</h2><p>${escape(message)}</p><a class="light-button" href="#/flashcards">All flashcards ${icon("arrow",15)}</a></div>`;
    }
    const n=deck.items[deck.index], number=deck.index+1, total=deck.items.length;
    const answer=deck.revealed ? `<div class="flash-answer">${textbookFor(n)}
      ${n.formula ? `<p class="reading-formula">${escape(n.formula)}</p>`:""}<p><strong>Practice example</strong> ${escape(n.application)}</p></div>` : `<p class="recall-prompt">Explain the term and give a business example.</p>`;
    return `<section class="flashcard"><div class="flash-card-top"><span class="kicker">${n.topic} · ${escape(n.group)}</span>${badge(n.level)}</div>
      <h2 tabindex="-1" id="flash-title">${escape(n.title)}</h2>${answer}
      <div class="flash-actions"><button type="button" class="light-button" data-flash="flip" aria-expanded="${deck.revealed}">${deck.revealed?"Hide answer":"Show answer"}</button>
      ${saveButton(n)}<a class="read-flash-link" href="${n.href}">Read in lesson ↗</a></div></section>
      <div class="flash-navigation"><button type="button" data-flash="previous" ${number===1?"disabled":""}>← Previous</button><span>${number} of ${total}</span>${number===total?'<button type="button" data-flash="restart">Start again ↺</button>':'<button type="button" data-flash="next">Next →</button>'}</div>`;
  }
  function flashView(parts) {
    const settings=deckSettings(parts);
    if (!deck || deck.key!==settings.key || settings.scope==="saved" && deck.savedVersion!==[...saved].join("|")) {
      const items=notes.filter(n=>(settings.scope==="all" || n.topic===settings.scope || n.topic[0]===settings.scope || settings.scope==="saved" && saved.has(n.key)) && (settings.level==="all" || n.level===settings.level));
      deck={...settings, items, index:0, revealed:false, savedVersion:[...saved].join("|")};
    }
    const unit=UNITS[settings.scope] ? settings.scope : TOPICS[settings.scope] ? settings.scope[0] : settings.scope;
    const option=(value,label,selected)=>`<option value="${escape(value)}" ${value===selected?"selected":""}>${escape(label)}</option>`;
    const topics=UNITS[unit]?.topics || topicIds;
    return `${crumbs([{name:"Flashcards"}])}<header class="page-intro"><p class="kicker"><span class="kicker-line"></span> Active recall</p><h1>Flashcards<span class="title-dot">.</span></h1><p class="deck">Choose a unit or subtopic and test yourself before revealing the answer.</p></header>
      <div class="flash-layout"><aside class="deck-controls" aria-label="Choose a flashcard deck">
      <label for="flash-unit">Unit or collection</label><select id="flash-unit">${option("all","All units",unit)}${Object.entries(UNITS).map(([id,u])=>option(id,`Unit ${id} · ${u.name}`,unit)).join("")}${option("saved",`Saved terms (${saved.size})`,unit)}</select>
      ${unit!=="saved"?`<label for="flash-topic">Subtopic</label><select id="flash-topic">${option("all","All subtopics",TOPICS[settings.scope]?settings.scope:"all")}${topics.map(id=>option(id,`${id} · ${TOPICS[id].name}`,settings.scope)).join("")}</select>`:""}
      <label for="flash-level">Level</label><select id="flash-level">${option("all","All content",settings.level)}${option("core","SL & HL core",settings.level)}${option("hl","HL only",settings.level)}</select>
      <button type="button" class="deck-shuffle" data-flash="shuffle" ${deck.items.length<2?"disabled":""}>${icon("shuffle",15)} Shuffle deck</button><a class="source-link" href="#/saved">View saved terms →</a></aside>
      <div class="flash-working" id="flash-working">${flashCard()}</div></div>`;
  }
  function updateFlash(action) {
    if (!deck || !deck.items.length) return;
    if (action==="flip") deck.revealed=!deck.revealed;
    else {
      if (action==="shuffle") {
        for (let i=deck.items.length-1;i>0;i--) {
          const j=Math.floor(Math.random()*(i+1));
          [deck.items[i],deck.items[j]]=[deck.items[j],deck.items[i]];
        }
      }
      deck.index=action==="next" ? Math.min(deck.items.length-1,deck.index+1) : action==="previous" ? Math.max(0,deck.index-1) : 0;
      deck.revealed=false;
    }
    const working=document.getElementById("flash-working");
    working.innerHTML=flashCard();
    (action==="flip" ? working.querySelector('[data-flash="flip"]') : document.getElementById("flash-title"))?.focus({preventScroll:true});
    document.getElementById("status").textContent=action==="flip" ? (deck.revealed?"Answer shown.":"Answer hidden.") : `Card ${deck.index+1} of ${deck.items.length}.`;
  }
  function activeLesson(parts) {
    const id=parts[1], requested=parts[2];
    const hasLevel=["all","core","hl"].includes(requested);
    let level=hasLevel?requested:"all";
    if (level!=="all" && !byTopic[id].some(n=>n.level===level)) level="all";
    const rest=parts.slice(hasLevel?3:2);
    let target="";
    if (rest[0]==="case") target="worked-case";
    else if (rest[0]==="section" && rest[1]) target="section-"+rest[1];
    else if (rest.length) {
      const term=rest[0]==="term"?rest[1]:rest[0];
      const key=legacyKeys[id+"/"+term] || id+"/"+term;
      const n=byKey.get(key);
      if (n) {
        target="term-"+n.id;
        if (level!=="all" && n.level!==level) level="all";
      }
    }
    return {id,level,target};
  }
  function scrollToLesson(target) {
    const el=document.getElementById(target);
    if (!el) return false;
    el.scrollIntoView({block:"start"});
    el.querySelector("h2,h3")?.focus({preventScroll:true});
    return true;
  }
  function render(options = {}) {
    const parts=route();
    const inLesson=parts[0]==="topic" && Object.hasOwn(TOPICS,parts[1]);
    let output,name,anchor="";
    if (inLesson) {
      const {id,level,target}=activeLesson(parts);
      const key=id+"/"+level;
      if (key!==renderedLesson || options.refresh) output=topicView(id,level);
      renderedLesson=key;
      anchor=target;
      name=`${id} · ${TOPICS[id].name}`;
    } else {
      renderedLesson="";
      if (parts[0]==="unit" && Object.hasOwn(UNITS,parts[1])) {
        output=unitView(parts[1]); name=`Unit ${parts[1]} · ${UNITS[parts[1]].name}`;
      } else if (parts[0]==="flashcards") {
        output=flashView(parts); name="Flashcards";
      } else if (parts[0]==="saved") {
        output=savedPage(); name="Saved terms";
      } else if (parts[0]==="references") {
        output=references(); name="Textbook & syllabus";
      } else {
        output=home(); name="IB Business Management";
      }
    }
    if (output!==undefined) main.innerHTML=output;
    document.title=`${name} | Revision Desk`;
    for (const [id,active] of [["nav-index",!parts.length || inLesson || parts[0]==="unit"],["nav-flashcards",parts[0]==="flashcards" || parts[0]==="saved"]]) {
      const link=document.getElementById(id);
      link.toggleAttribute("data-active",active);
      if(active) link.setAttribute("aria-current","page"); else link.removeAttribute("aria-current");
    }
    main.querySelectorAll(".lesson-side a").forEach(a=>{
      if(a.hash===location.hash) a.setAttribute("aria-current","location"); else a.removeAttribute("aria-current");
    });
    if (!options.keepPosition && !(anchor && scrollToLesson(anchor))) {
      window.scrollTo(0,0);
      if(options.navigated) main.focus({preventScroll:true});
    }
  }

  function cleanSearch(text) {
    return text.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9. ]/g, " ").replace(/\s+/g, " ").trim();
  }
  const searchableText = new Map(notes.map(note => [note.key, cleanSearch(`${sourceSearchText(note)} ${note.application} ${note.formula || ""}`)]));

  function searchResults() {
    const search = cleanSearch(searchInput.value);
    const words = search.split(" ").filter(Boolean);
    const sectionsFound = search ? topicIds.flatMap(id => [...new Set(byTopic[id].map(n => n.group))]
      .filter(group => cleanSearch(group).includes(search))
      .map(group => ({id,group,title:group}))) : [];
    const topicsFound = search ? Object.entries(TOPICS).filter(([id, t]) => cleanSearch(`${id} ${t.name}`).includes(search)) : [];
    let found;
    if (search) {
      found = notes.map(n => {
        const name = cleanSearch(n.title), tags = cleanSearch(`${n.topic} ${TOPICS[n.topic].name} ${n.group} ${n.title}`);
        const text = searchableText.get(n.key);
        const hits = words.every(w => tags.includes(w) || text.includes(w));
        const rank = name === search ? 0 : name.startsWith(search) ? 1 : name.includes(search) ? 2 : words.every(w => tags.includes(w)) ? 3 : 4;
        return { n, rank, hits };
      }).filter(x => x.hits).sort((a, b) => a.rank - b.rank).map(x => x.n);
    } else {
      found = ["Random sampling", "Sole trader", "Market orientation", "Franchising", "Penetration pricing"].map(firstByTitle).filter(Boolean);
    }
    const topicRows = topicsFound.map(([id, t]) => `<a class="result" href="#/topic/${id}"><span class="result-code">${id}</span><span class="result-text"><b>${escape(t.name)}</b><small>Open subtopic</small></span><span class="result-arrow" aria-hidden="true">↗</span></a>`);
    const sectionRows=sectionsFound.map(s=>`<a class="result" href="${lessonSectionHref(s.id,"all",s.group)}"><span class="result-code">${s.id}</span><span class="result-text"><b>${escape(s.title)}</b><small>Lesson section · ${escape(s.group)}</small></span><span aria-hidden="true">↗</span></a>`);
    document.getElementById("search-results").innerHTML = [...topicRows, ...sectionRows, ...found.map(resultRow)].join("") || `<p class="no-results">Try a topic number such as 4.4, or a shorter term such as “pricing”.</p>`;
    const count=topicRows.length+sectionRows.length+found.length;
    document.getElementById("search-status").textContent=search ? `${count} ${count===1?"result":"results"}` : "Suggested terms";
  }
  function openSearch() {
    lastSearchOpener = document.activeElement;
    searchInput.value = "";
    searchResults();
    searchDialog.showModal();
    searchInput.focus();
  }
  document.getElementById("open-search").addEventListener("click", openSearch);
  document.getElementById("close-search").addEventListener("click", () => searchDialog.close());
  searchDialog.addEventListener("close", () => lastSearchOpener?.focus?.({ preventScroll: true }));
  searchInput.addEventListener("input", searchResults);
  searchInput.addEventListener("keydown", e => {
    if (e.key === "ArrowDown") { e.preventDefault(); document.querySelector("#search-results a")?.focus(); }
  });
  document.getElementById("search-results").addEventListener("click", e => {
    if (e.target.closest("a")) searchDialog.close();
  });

  document.querySelectorAll("dialog").forEach(dialog => dialog.addEventListener("click", e => {
    if (e.target !== dialog) return;
    const r = dialog.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close();
  }));

  main.addEventListener("change",e=>{
    if (!["flash-unit","flash-topic","flash-level"].includes(e.target.id)) return;
    const unit=document.getElementById("flash-unit").value;
    const topic=document.getElementById("flash-topic")?.value;
    const scope=e.target.id!=="flash-unit" && topic && topic!=="all" ? topic : unit;
    location.hash=`/flashcards/${scope}/${document.getElementById("flash-level").value}`;
  });
  document.addEventListener("click", e => {
    const link=e.target.closest('a[href^="#/topic/"]');
    if (link && link.hash===location.hash && !e.ctrlKey && !e.metaKey) {
      const parts=route(), target=activeLesson(parts).target;
      if (target) scrollToLesson(target);
    }
    const el = e.target.closest("button");
    if (!el) return;
    if (el.dataset.flash) {
      updateFlash(el.dataset.flash);
    } else if (el.dataset.filter) {
      browseLevel = el.dataset.filter;
      render({ keepPosition: true });
      document.querySelector(`[data-filter="${browseLevel}"][aria-pressed]`)?.focus({ preventScroll: true });
    } else if (el.dataset.save) {
      const key = el.dataset.save, wasSaved = saved.has(key);
      if (wasSaved) saved.delete(key); else saved.add(key);
      writeLocal("bm-revision-saved-v1", [...saved]);
      document.getElementById("status").textContent = `${byKey.get(key).title} ${wasSaved ? "removed from" : "added to"} saved concepts.`;
      if (route()[0] === "flashcards") {
        render({ keepPosition: true });
        (main.querySelector("[data-save]") || main).focus({preventScroll:true});
      } else if (route()[0] === "saved") {
        render({ keepPosition: true });
        (document.querySelector(".saved-row .save-note") || main).focus({ preventScroll: true });
      } else {
        const holder = el.parentElement;
        el.outerHTML = saveButton(byKey.get(key));
        holder.querySelector("[data-save]")?.focus({ preventScroll: true });
      }
    } else if (el.id === "draw-sample") {
      drawSample();
    }
  });
  document.querySelector(".skip").addEventListener("click", e => { e.preventDefault(); main.focus(); main.scrollIntoView(); });
  document.addEventListener("keydown", e => {
    if (e.key === "/" && !e.altKey && !e.ctrlKey && !e.metaKey && !document.querySelector("dialog[open]") && !/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) {
      e.preventDefault(); openSearch();
    }
  });
  window.addEventListener("hashchange", () => { if (searchDialog.open) searchDialog.close(); render({ navigated: true }); });
  render();
})();


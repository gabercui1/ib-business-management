"use strict";

const UNITS = {
  "1": {
    name: "Introduction to business management",
    description: "How businesses start, choose objectives and grow.",
    topics: ["1.1", "1.2", "1.3", "1.4", "1.5"]
  },
  "4": {
    name: "Marketing",
    description: "How businesses understand customers and take products to market.",
    topics: ["4.1", "4.2", "4.3", "4.4", "4.5", "4.6"]
  }
};

const TOPICS = {
  "1.1": {
    name: "What is a business?", chapter: "1", pages: "11–20",
    description: "Follow resources from inputs to outputs and examine the risks of starting a business.",
    case: {
      context: "Two students buy plain cotton bags for $4 each and sell their printed bags for $11. Ink costs $1 per bag. They also pay a monthly fee for studio space.",
      question: "Calculate the added value per bag and explain why the owners cannot treat this figure as profit.",
      answer: "The bought-in materials cost $5 per bag, so printing adds $11 − $5 = $6 of value per bag. Part of the $6 must cover studio rent and other operating costs before the owners can make a profit."
    }
  },
  "1.2": {
    name: "Types of business entities", chapter: "2", pages: "21–38",
    description: "Compare ownership, liability and purpose across private, public and social enterprises.",
    case: {
      context: "A sole trader wants to open a second bicycle shop. A mechanic is willing to invest, but the owner wants the shops to remain under family control.",
      question: "Explain one advantage and one disadvantage of becoming a privately held company.",
      answer: "Selling a stake to the mechanic could fund the second shop, and the family could retain a voting majority. The mechanic would also acquire shareholder rights, so the owner would give up some control over decisions previously made alone."
    }
  },
  "1.3": {
    name: "Business objectives", chapter: "3", pages: "39–52",
    description: "Connect a business’s purpose to measurable targets and competing priorities.",
    case: {
      context: "A café chain promises to cut food waste by 30% within two years. Its managers receive bonuses based on monthly profit.",
      question: "Explain one potential conflict between these objectives and propose a way to address it.",
      answer: "Buying stock-tracking software would cost money immediately, which could lower monthly profit and discourage managers from adopting it. Including food waste per meal in the bonus calculation would reward action on the longer-term objective. Tracking waste per meal also accounts for changes in sales volume."
    }
  },
  "1.4": {
    name: "Stakeholders", chapter: "4", pages: "53–64",
    description: "Identify whose interests a decision affects and explain why those interests can conflict.",
    case: {
      context: "A bakery wants night deliveries so its shops can open with fresh bread. Residents live above the unloading bay.",
      question: "Explain the conflict and suggest a compromise that addresses both groups’ interests.",
      answer: "Earlier deliveries could protect shop sales by preventing stockouts at opening time, but trolley noise could disturb residents’ sleep. A trial with quiet trolleys and a fixed delivery window would let the bakery compare complaints and missed sales before committing."
    }
  },
  "1.5": {
    name: "Growth and evolution", chapter: "5", pages: "65–88",
    description: "Weigh the benefits of scale and compare ways to expand or stay small.",
    case: {
      context: "A profitable neighbourhood gym has a waiting list. A franchisee offers to finance a second location, but members say personal coaching is why they stay.",
      question: "Would franchising suit this gym? Support a judgement using the case.",
      answer: "Franchising could meet excess demand without the gym funding the whole second site. Uneven coaching at the franchise could still harm the original gym’s reputation. A single-site trial with coach training and member-retention targets would test whether the brand can grow while preserving the service members value."
    }
  },
  "4.1": {
    name: "Introduction to marketing", chapter: "23", pages: "341–352",
    description: "Compare market and product orientation, then use sales figures to measure market position.",
    case: {
      context: "A reusable-cup company’s sales rise from $2 million to $2.2 million. Over the same period, the total market grows from $10 million to $12.5 million.",
      question: "Calculate its market share in both years and explain what changed.",
      answer: "Its share was ($2m ÷ $10m) × 100 = 20%. It then fell to ($2.2m ÷ $12.5m) × 100 = 17.6%, a fall of 2.4 percentage points. The company sold more by value, but its sales grew more slowly than the market."
    },
    hlCase: {
      context: "The market leader sells 45% of all reusable cups. It offers a supermarket a discount for prominent shelf space. A smaller rival already earns more profit per cup.",
      question: "Explain one benefit of market leadership and one reason the smaller rival might avoid matching the discount.",
      answer: "The leader’s sales volume makes its brand attractive to the supermarket. Prominent shelf space could raise sales further. Matching the discount would reduce the smaller rival’s profit per cup. It would need enough extra sales to recover that loss, which is uncertain if its shelf position stays the same."
    }
  },
  "4.2": {
    name: "Marketing planning", chapter: "24", pages: "353–370",
    description: "Divide markets into segments, choose a target customer and decide how to stand apart.",
    case: {
      context: "A sportswear start-up has a small advertising budget. Commuters in its city say they want waterproof jackets that pack into a work bag.",
      question: "Explain why targeting this niche could suit the start-up and identify a limit to growth.",
      answer: "The start-up could reach cyclists through commuter groups and demonstrate its jacket at cycle stations, concentrating its small budget on likely buyers. If few commuters will pay the price needed to cover waterproof fabric, even a high share of this niche may generate too little profit."
    }
  },
  "4.3": {
    name: "Sales forecasting", chapter: "25", pages: "371–376",
    description: "Use past sales to estimate demand and judge how much confidence to place in a forecast.",
    case: {
      context: "A stationery shop sold 900, 1,050 and 1,200 notebooks over three months. A nearby school will close for renovation next month.",
      question: "Use the average monthly sales to estimate the next order. Explain one benefit and one limitation of this forecast.",
      answer: "The average is (900 + 1,050 + 1,200) ÷ 3 = 1,050 notebooks. It gives the buyer a starting quantity based on actual sales and smooths monthly variation. The school was open throughout those three months. The shop could reduce its order according to the share of usual purchases made by pupils and the length of the closure."
    }
  },
  "4.4": {
    name: "Market research", chapter: "26", pages: "377–392",
    description: "Choose evidence, frame a research question and select a sample you can defend.",
    case: {
      context: "A sports hall wants to change its weekend hours. It has a complete list of 1,200 members. A manager proposes interviewing the first 30 people arriving at 8 a.m.",
      question: "Explain one reason to use random sampling and one limitation that could remain.",
      answer: "Drawing 30 distinct member IDs at random gives even the members who cannot attend at 8 a.m. a chance of being interviewed. This is more relevant to a decision about weekend hours than asking only early arrivals. If late-shift workers rarely reply, their preferences may still be underrepresented."
    }
  },
  "4.5": {
    name: "The seven Ps of the marketing mix", chapter: "27–33", pages: "393–464",
    description: "Connect product, price, promotion, place, people, processes and physical evidence.",
    case: {
      context: "A dental clinic charges premium prices. Patients praise the dentists but complain that booking takes several calls and appointments run late.",
      question: "Recommend a change to one element of the marketing mix and explain its effect on another.",
      answer: "The clinic could change its processes by introducing online booking with realistic appointment lengths. Shorter waits would make its premium price easier for patients to justify. The clinic could compare waiting times and repeat bookings before and after the change to see whether patients value the improvement."
    },
    hlCase: {
      context: "A laundry has spare machine time on Tuesdays. A hotel offers $260 for an extra order. Detergent, electricity and extra staff time would cost $180. Its fixed costs are already covered by regular business.",
      question: "Calculate the contribution from the order and evaluate whether the laundry should accept this price.",
      answer: "The order would contribute $260 − $180 = $80. Accepting it would raise profit by $80 if Tuesday’s capacity is genuinely spare and the cost estimate includes the full extra workload. If the order displaced a higher-contribution booking or set a price the hotel expected every week, keeping the capacity available could be more profitable."
    }
  },
  "4.6": {
    name: "International marketing", chapter: "34", pages: "465–474",
    description: "Assess entering an overseas market and decide how far the marketing mix should change.",
    case: {
      context: "A granola maker plans to enter a new country. Local retailers say shoppers prefer smaller packs, but the factory’s large pack is cheaper to fill per gram.",
      question: "Evaluate whether the firm should adapt its product for this market.",
      answer: "A smaller pack could lower the price per purchase and persuade first-time shoppers to try the brand. A new packaging run would raise unit costs, especially at low volumes. Testing both sizes in comparable stores would let the maker compare profit per shelf metre and repeat purchases before changing production."
    }
  }
};

const MIX_CHAPTERS = {
  Product: ["27", "393–410"], Price: ["28", "411–424"], Promotion: ["29", "425–442"],
  Place: ["30", "443–452"], People: ["31", "453–456"], Processes: ["32", "457–460"],
  "Physical evidence": ["33", "461–464"]
};

const REFERENCES = {
  publisher: "https://www.ibid.com.au/products/business-management-5th-edition-ebook",
  contents: "https://cdn.shopify.com/s/files/1/0598/6444/9174/files/Contents_5th_Edition_8700eb1e-29de-4737-90fc-bc0f96cb57c0.pdf?v=1672742214",
  sl: "https://www.ibo.org/globalassets/new-structure/programmes/dp/pdfs/business-management-sl-subject-brief-en.pdf",
  hl: "https://www.ibo.org/globalassets/new-structure/programmes/dp/pdfs/business-management-hl-subject-brief-en.pdf"
};

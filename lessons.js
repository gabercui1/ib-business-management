"use strict";

const LESSONS = {
  "1.1": {
    opening: "A bicycle workshop buys parts, pays mechanics and returns working bikes to customers. Follow one repair through the workshop to see what a business produces, where its value comes from and what a new owner has to organize.",
    sections: {
      "Business activity": ["From inputs to added value", "Suppose a customer pays $45 for a repair that uses $12 of bought-in parts. The workshop adds $33 of value. The owner still owes wages and rent from that $33, so it is too early to call it profit. Marketing has to bring in customers, operations has to deliver the repair, finance has to fund it, and human resources has to find people with the right skills."],
      "Economic sectors": ["Follow a product through the economy", "Trace an aluminium bicycle frame backwards. A mine extracts ore, a manufacturer shapes the metal and a retailer sells the bike. An engineering lab that develops a lighter alloy contributes specialist knowledge. Classify each activity by the work performed. One business may carry out more than one activity."],
      "Starting a business": ["Deciding whether to start", "An entrepreneur who sees a queue outside the workshop has spotted a possible opportunity. Before renting a second site, estimate how many customers would actually pay, how long a repair takes and how much cash is needed before the first bills fall due. Those estimates give the business plan something concrete to test."]
    }
  },
  "1.2": {
    opening: "Two businesses may sell the same service and give their owners very different rights and risks. Start by identifying who owns each business, who answers for its debts and what it does with a surplus.",
    sections: {
      "Ownership and risk": ["Who owns the business and who bears the risk?", "A city-owned bus operator belongs to the public sector. A bus company whose shares trade on an exchange can still belong to the private sector. To assess liability, ask a different question: if the business fails, who can the lender pursue for the money?"],
      "Commercial organizations": ["Choosing a commercial structure", "Imagine a shop opening its second branch. A partner can contribute cash and expertise, but may also acquire a say over decisions. Incorporation separates the company from its owners. Issuing shares can finance further growth, while changing who receives profits and voting rights."],
      "Social enterprises": ["Purpose, ownership and surplus", "A café employs people who have struggled to find work. Sales can finance training and keep the café operating. To identify its structure, look at who controls it, whether it trades for a social purpose and how the surplus is used. A social purpose alone does not establish its legal form."]
    }
  },
  "1.3": {
    opening: "A statement such as ‘make the city easier to cycle around’ gives a business direction. It leaves the manager with a practical question. What should the team do this term, and what evidence would show that it worked?",
    sections: {
      "Direction and planning": ["From purpose to a measurable objective", "A bike-share operator can translate its vision into a target of reaching 300 weekday rentals by June. Opening near a railway station is one possible strategy. Offering trial rides during the first week is a tactic. The number of rentals and the deadline let the manager assess the result."],
      "Common objectives": ["When objectives compete", "A company could cut prices to increase sales volume while earning less profit on each sale. A shareholder who needs dividends may question that decision. In a case answer, name the objective, explain whose interests it serves and identify the time period over which you would judge success."],
      "Responsibility": ["Turning an ethical commitment into action", "A purchasing policy can require checks on supplier working conditions. Paying for those checks raises a present cost. If the checks change a supplier’s practices, workers benefit and the buyer may face fewer disruptions. The policy, the action and its consequences are separate pieces of evidence."]
    }
  },
  "1.4": {
    opening: "A bakery plans to switch to night deliveries. The same change can raise morning sales, alter drivers’ hours and wake nearby residents. Stakeholder analysis follows each consequence back to the group that experiences it.",
    sections: {
      "Identifying stakeholders": ["Draw the boundary of the business", "Begin with people inside the organization, then look beyond its boundary for people who can influence the decision or feel its effects. A customer, supplier or lender can have considerable influence without being part of the management team."],
      "Stakeholder interests": ["Explain what each group stands to gain or lose", "Use a specific outcome for each group. Fresh bread at opening time may help customers. A guaranteed overnight delivery contract may help a supplier plan its shifts. Residents living above the unloading bay may bear the noise costs without receiving either benefit."],
      "Resolving conflict": ["Weigh influence and find a workable compromise", "A fixed delivery window and quiet trolleys address different parts of the conflict. A short trial lets the bakery track complaints alongside stockouts. Stakeholder mapping helps decide who needs to be involved in designing the trial and who needs updates."]
    }
  },
  "1.5": {
    opening: "A full order book makes expansion tempting. Before choosing how to grow, separate three questions. Is there sustained demand, will average costs fall at the larger scale, and who will control the expanded business?",
    sections: {
      "Growth decisions": ["Grow internally, acquire capacity or stay small", "Opening a second workshop lets the owners train staff their way. Buying a competitor can give them an established team immediately, along with its existing obligations. Staying small may make sense when personal service is the reason customers return."],
      "Economies of scale": ["Why average cost can fall", "If a kitchen pays $1,200 monthly rent, producing 300 meals allocates $4 of rent to each meal. At 600 meals the rent per meal falls to $2 if the same kitchen can handle the extra work. Other economies come from bulk buying, specialist staff and financing. In each case, identify what changes and how it affects cost per unit."],
      "Diseconomies of scale": ["When expansion raises average cost", "A larger chain may need extra supervisors, and a purchasing mistake can reach every branch. Look for a mechanism linking size to higher cost per unit. Then distinguish problems inside the business from pressures that affect the whole local industry."],
      "Combining businesses": ["Growth through integration", "A bakery buying a flour mill gains control further back in its supply chain. Buying another bakery at the same stage is horizontal integration. The direction tells you where the two firms operate. Whether the deal is a merger or a takeover concerns how ownership and control change."],
      "Working with partners": ["Ways to grow with another business", "A gym can license its brand to a franchisee, work with another business on a promotion, or jointly own a new facility. Compare who commits the capital, who can make operating decisions and who bears the loss if demand falls short."],
      "Growth toolkit": ["Using the Ansoff matrix", "Classify the product and the market separately as existing or new to the business. A bakery selling more of its current loaves to the same customers is pursuing market penetration. Launching a new catering service for corporate clients changes both dimensions and introduces two sources of uncertainty."]
    }
  },
  "4.1": {
    opening: "A firm can increase its sales and still lose ground to rivals. Marketing connects what a business offers with the people it intends to serve. Market measures let you test how well that approach is working.",
    sections: {
      "Orientation": ["Where product decisions start", "A cinema that surveys parents before adding a morning screening starts with customer needs. A manufacturer that first perfects a projector and then seeks buyers starts with the capabilities of the product. Either choice still depends on customers valuing the offer enough to pay."],
      "Market measures": ["Read the numerator and the denominator", "If a firm sells $2 million in a $10 million market, its value share is 20%. That share changes when either number changes. Use the same period, market boundary and basis of measurement for both figures. A share measured in units can differ from one measured in revenue."],
      "Competitive position": ["What market leadership lets a firm do", "A leading brand may secure better shelf space or negotiate lower unit costs because retailers expect high sales. Market leadership does not guarantee high profit. Ask what the firm spent to win that share and whether customers would stay if prices rose."]
    }
  },
  "4.2": {
    opening: "A small jacket maker cannot afford to advertise to everybody. Its plan must connect a chosen buyer, a reason for that buyer to choose the jacket and a way to tell whether the spending worked.",
    sections: {
      "The marketing plan": ["Start with an objective and a budget", "A goal of 100 commuter-jacket sales in six weeks gives the team a target. The marketing audit checks current customers, rivals and available resources. The plan then assigns spending and a date to review orders against the target."],
      "Selecting customers": ["Segment first, then choose a target", "Dividing buyers into commuters and competitive cyclists is segmentation. Choosing commuters because the maker can supply waterproof workday jackets is targeting. A segment being large is only one reason it might be attractive."],
      "Positioning": ["Plot how customers see the options", "Ask commuters to rate jackets for waterproofing and packability. Plot competing brands on the same two axes. An empty area on the map might reveal an opportunity, but it could also be empty because too few commuters want that combination."],
      "Market coverage": ["Niche or mass market?", "One commuter segment can be reached through cycle stations and employer newsletters. This concentrates a small budget, while limiting the number of possible buyers. A mass-market approach requires an offer and distribution network that can reach many more people."],
      "Differentiation": ["Give the buyer a reason to choose", "If every rival already sells a waterproof jacket, saying ‘waterproof’ gives the buyer little reason to switch. A jacket that packs into its own reflective commuter pouch offers a specific difference. Test whether that difference matters to buyers and is difficult to copy."]
    }
  },
  "4.3": {
    opening: "Sales forecasts inform purchasing, staffing and cash planning. An estimate becomes useful when a manager understands how it was produced and what could make it wrong.",
    sections: {
      "Forecasting sales": ["Choose evidence that fits the decision", "A stationery shop can look at last term’s sales before ordering notebooks. A new product has no sales history, so a small test launch may be more informative. In either case, record the assumptions used to turn evidence into an order quantity."],
      "Forecasting tools": ["Estimate a pattern in the data", "A time series records sales over successive periods. Regression can relate sales to another variable, such as event attendance. A fitted pattern is more informative when the new circumstances resemble the observations used to estimate it."],
      "Interpreting forecasts": ["Allow for seasonality and unexpected change", "A predictable September peak may justify extra stock each year. A one-off school closure needs a different adjustment. Compare the costs of ordering too much with the cost of a stockout before deciding how closely to follow the forecast."]
    }
  },
  "4.4": {
    opening: "A sports centre must decide whether to stay open later. Asking the easiest people to reach could produce a quick answer from the wrong customers. A research design connects the business decision to the evidence needed to make it.",
    sections: {
      "Research design": ["Start with the decision", "Booking records show when current members attend. They cannot tell the manager who stays away because the centre closes too early. Those two questions call for different evidence, so the manager can use existing records to decide what new information to collect."],
      "Sampling methods": ["Choose whose views will count", "The population is the group the centre wants to understand. Its membership list is a possible sampling frame. A random draw gives every listed member an equal chance. A quota controls how many responses come from chosen groups. Interviewing whoever happens to arrive is convenient but ties the results to that time and place."],
      "Types of data": ["How many, and why?", "A survey might show that 40% of respondents want later hours. Interviews could reveal whether this reflects shift work, childcare or travel time. The percentage helps estimate the size of the opportunity. The explanations help design a timetable people would actually use."],
      "Primary methods": ["Choose how to collect new evidence", "Observing the evening queue measures behaviour directly. An interview can reveal why somebody left it. A questionnaire reaches more people with comparable questions. Choose the method that answers the uncertainty facing the manager, within the available time and budget."],
      "Secondary sources": ["Check whether existing evidence transfers", "A national participation survey might be credible and recent yet still say little about late shifts in this neighbourhood. Check who collected the evidence, when, from whom and for what purpose before using it to justify a local decision."]
    }
  },
  "4.5": {
    opening: "A dental clinic can advertise premium service and still disappoint patients if appointments routinely run late. The seven Ps describe decisions that customers experience together. Work through each one, then test whether the choices support the same promise.",
    sections: {
      "Marketing mix": ["Put the seven Ps together", "Begin with a particular customer and an intended position. For a premium clinic, the quality of treatment, fee, booking channels, promotion, staff behaviour, booking process and physical setting must give patients a consistent reason to return."],
      "Product": ["Product, life cycle and brand", "A new product can use cash before it generates dependable sales. As growth slows, a business may extend its life or fund a replacement from an established line. The life cycle tracks one product over time. The BCG matrix compares products in a portfolio using market growth and relative market share."],
      "Price": ["Choose a price that serves the objective", "A repair shop could price from its costs, from what rivals charge or from the value customers place on a same-day repair. Evaluate a pricing decision against its objective. A low launch price may build trial but provide too little contribution to pay the rent."],
      "Promotion": ["Match the message and the audience", "A citywide advertisement can build awareness, while a sample at the station can prompt an immediate trial. A coordinated campaign connects the two and tracks whether attention turns into sales. The choice depends on whom the business needs to reach and what it wants them to do."],
      "Place": ["Choose a route to the customer", "Selling directly gives a producer control of ordering and customer data, while a retailer can offer immediate access to shoppers. An intermediary earns a margin in return for functions such as storage, distribution or selling. Compare the cost of giving up margin with the cost of doing those jobs yourself."],
      "People": ["How staff shape a service", "A dental receptionist can calm an anxious patient and explain the next step. Training affects how consistently staff do this. Expectations about greetings, privacy or directness can vary, so observations and feedback help a clinic adapt its service."],
      "Processes": ["Design the experience from booking to follow-up", "Map a patient’s visit through booking, arrival, treatment and payment. A short appointment may still create a long wait if bookings are entered twice or changes never reach reception. Locate the delay before paying for a new system."],
      "Physical evidence": ["Make a service easier to judge", "Patients cannot inspect a treatment before buying it. Clean equipment, clear signage and an itemized treatment plan give them observable evidence. These cues can reduce uncertainty when the experience that follows matches the promise."]
    }
  },
  "4.6": {
    opening: "A firm that sells profitably at home may face unfamiliar customers, distribution costs and currencies abroad. An international marketing decision weighs the potential additional sales against the cost and risk of serving them.",
    sections: {
      "Opportunities and threats": ["Estimate the return on an overseas sale", "Work from the price the foreign customer will pay back to the amount the exporter will receive. Deduct shipping, tariffs if applicable, distributor fees and local promotion. A rise in foreign sales can still leave the firm with lower profit per unit."],
      "International strategy": ["Decide what to adapt", "Using one design across countries can spread development costs over more units. Smaller pack sizes might suit the local customer’s budget and retail shelves. Compare the extra contribution from local demand with the cost of changing production and packaging."],
      "Market entry": ["Choose how much control to keep", "A distributor can introduce the product through an established network, while a joint venture can give the producer greater local involvement. Compare the speed of entry, the investment at risk and how much say the producer needs over promotion and customer relationships."]
    }
  }
};

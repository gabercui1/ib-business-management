"use strict";

const NOTES = {
  "1.1": [
    {
      "title": "Business activity",
      "group": "Business activity",
      "level": "core",
      "application": "A cycle workshop combines mechanics, tools and spare parts to sell a repair service to commuters.",
      "page": "11–12"
    },
    {
      "title": "Needs and wants",
      "group": "Business activity",
      "level": "core",
      "application": "A food shop sells basic drinking water and premium fruit-infused water. Both can hydrate a customer, while the premium line also meets a preference for flavour.",
      "page": "12, 20"
    },
    {
      "title": "Goods and services",
      "group": "Business activity",
      "level": "core",
      "application": "A bike shop sells a replacement wheel and charges a mechanic’s fee to fit it. The customer can buy the good and the service separately.",
      "page": "12, 20"
    },
    {
      "title": "Customers and consumers",
      "group": "Business activity",
      "level": "core",
      "application": "A parent pays for a child’s badminton racket. The parent compares price and durability, while the child tests the grip and weight.",
      "page": "12, 20"
    },
    {
      "title": "Factors of production",
      "group": "Business activity",
      "level": "core",
      "application": "On a fruit farm the soil is land, pickers supply labour, the irrigation system is capital and the founder supplies enterprise.",
      "page": "19, 477"
    },
    {
      "title": "Added value",
      "group": "Business activity",
      "level": "core",
      "application": "A maker sells a custom racket grip for $16 after spending $6 on bought-in inputs. It adds $10 per grip before paying its own workers and other expenses.",
      "formula": "Added value per unit = selling price − cost of bought-in inputs per unit",
      "page": "12"
    },
    {
      "title": "Business functions",
      "group": "Business activity",
      "level": "core",
      "application": "Before a bakery starts home delivery, marketing estimates orders, operations sets routes, finance budgets for vans and HR trains drivers.",
      "page": "12–13"
    },
    {
      "title": "Primary sector",
      "group": "Economic sectors",
      "level": "core",
      "application": "A timber business growing and harvesting trees supplies logs to furniture workshops.",
      "page": "14"
    },
    {
      "title": "Secondary sector",
      "group": "Economic sectors",
      "level": "core",
      "application": "A workshop buys logs and turns them into fitted desks. The desk-making belongs in the secondary sector.",
      "page": "14"
    },
    {
      "title": "Tertiary sector",
      "group": "Economic sectors",
      "level": "core",
      "application": "A shop that sells finished desks and delivers them to offices earns revenue from retail and delivery services.",
      "page": "14–15"
    },
    {
      "title": "Quaternary sector",
      "group": "Economic sectors",
      "level": "core",
      "application": "A research team sells a material-testing report to furniture makers choosing a durable coating.",
      "page": "15"
    },
    {
      "title": "Chain of production",
      "group": "Economic sectors",
      "level": "core",
      "application": "A grower sells cotton to a fabric mill. A clothing factory turns it into shirts, and a retailer makes the shirts available to shoppers.",
      "page": "15"
    },
    {
      "title": "Entrepreneurship",
      "group": "Starting a business",
      "level": "core",
      "application": "A student discovers that local teams need same-day racket restringing, books a workshop and buys a machine with savings.",
      "page": "11, 20"
    },
    {
      "title": "Start-up opportunities and challenges",
      "group": "Starting a business",
      "level": "core",
      "application": "A refill shop sees queues at the only competing store. It tests weekend sales before agreeing to a year-long lease.",
      "page": "16–18"
    },
    {
      "title": "Business plan",
      "group": "Starting a business",
      "level": "core",
      "application": "A coach estimates court hire, fees and expected enrolment before applying for a loan to run badminton classes.",
      "page": "19, 641"
    }
  ],
  "1.2": [
    {
      "title": "Private sector",
      "group": "Ownership and risk",
      "level": "core",
      "application": "A family buys buses and runs a commuter service using its own capital. Its ownership puts it in the private sector.",
      "page": "21"
    },
    {
      "title": "Public sector",
      "group": "Ownership and risk",
      "level": "core",
      "application": "A city owns a bus operator and requires it to serve a low-density district, even when ticket revenue is modest.",
      "page": "21"
    },
    {
      "title": "Limited liability",
      "group": "Ownership and risk",
      "level": "core",
      "application": "A founder pays $5,000 for fully paid shares. If the company closes owing more, the investment is at risk. A separate personal loan guarantee would create an additional obligation.",
      "page": "26"
    },
    {
      "title": "Unlimited liability",
      "group": "Ownership and risk",
      "level": "core",
      "application": "A sole trader closes a café with an outstanding supplier balance. Personal savings may be needed if selling the café equipment raises too little.",
      "page": "24"
    },
    {
      "title": "Incorporation",
      "group": "Ownership and risk",
      "level": "core",
      "application": "Two founders incorporate their studio before signing a long lease. The company becomes the tenant and owns its equipment.",
      "page": "26, 37"
    },
    {
      "title": "Sole trader",
      "group": "Commercial organizations",
      "level": "core",
      "application": "A photographer owns a studio, hires an assistant and personally chooses which events to accept.",
      "page": "23–24"
    },
    {
      "title": "Partnership",
      "group": "Commercial organizations",
      "level": "core",
      "application": "A baker and an accountant sign a deed of partnership for their café. It records each contribution, their roles, how profits are split and what happens if one leaves.",
      "page": "25"
    },
    {
      "title": "Privately held company",
      "group": "Commercial organizations",
      "level": "core",
      "application": "A family incorporates its furniture business and sells a minority stake to a known investor to fund a workshop.",
      "page": "26"
    },
    {
      "title": "Publicly held company",
      "group": "Commercial organizations",
      "level": "core",
      "application": "A growing manufacturer issues shares to the public to help finance a second factory.",
      "page": "29"
    },
    {
      "title": "Initial public offering (IPO)",
      "group": "Commercial organizations",
      "level": "core",
      "application": "A manufacturer issues new shares at its IPO to pay for an assembly line. Some founders also sell existing shares to investors.",
      "page": "37"
    },
    {
      "title": "For-profit social enterprise",
      "group": "Social enterprises",
      "level": "core",
      "application": "A repair business charges for fixing laptops. Its surplus pays for tools and supervised training places for people seeking work.",
      "page": "31, 38"
    },
    {
      "title": "Private-sector social enterprise",
      "group": "Social enterprises",
      "level": "core",
      "application": "A founder-owned catering firm sells office lunches and pays trainees who face barriers to employment.",
      "page": "31"
    },
    {
      "title": "Public-sector social enterprise",
      "group": "Social enterprises",
      "level": "core",
      "application": "A city-owned company rents affordable workspaces and uses part of the rental income to subsidize places for new enterprises.",
      "page": "32"
    },
    {
      "title": "Cooperative",
      "group": "Social enterprises",
      "level": "core",
      "application": "Small dairy farmers form a cooperative to buy a shared chilling tank and negotiate jointly with retailers.",
      "page": "33"
    },
    {
      "title": "Non-governmental organization (NGO)",
      "group": "Social enterprises",
      "level": "core",
      "application": "A literacy NGO combines grants, donations and bookshop income to fund after-school reading groups.",
      "page": "35"
    }
  ],
  "1.3": [
    {
      "title": "Vision statement",
      "group": "Direction and planning",
      "level": "core",
      "application": "A bike-share operator's vision is a city where every resident can reach work by bicycle. It uses this aspiration to consider long-term expansion.",
      "page": "39"
    },
    {
      "title": "Mission statement",
      "group": "Direction and planning",
      "level": "core",
      "application": "The bike-share operator defines its mission as providing dependable, low-cost journeys between rail stations and nearby homes.",
      "page": "39"
    },
    {
      "title": "Strategic objectives",
      "group": "Direction and planning",
      "level": "core",
      "application": "A regional grocer aims to earn a quarter of sales online within four years. It commits funds to delivery systems and distribution space.",
      "page": "45"
    },
    {
      "title": "Tactical objectives",
      "group": "Direction and planning",
      "level": "core",
      "application": "To support the grocer's online strategy, the operations team aims to reduce picking time per order from 15 to 12 minutes this term.",
      "page": "45"
    },
    {
      "title": "Strategy and tactics",
      "group": "Direction and planning",
      "level": "core",
      "application": "To achieve regional sales growth, a roaster chooses a wholesale strategy. Its sales team offers trial deliveries to ten cafés in March as one tactic.",
      "page": "45, 52"
    },
    {
      "title": "SMART objectives",
      "group": "Direction and planning",
      "level": "core",
      "application": "The café owner and the lunch team agree to raise daily sales from 80 lunches to 92 by the end of June. Spare kitchen capacity makes the target realistic.",
      "page": "41, 353"
    },
    {
      "title": "Growth objective",
      "group": "Common objectives",
      "level": "core",
      "application": "A gym wants to grow paying membership from 600 to 750 in one year. It uses membership because it directly drives subscription revenue.",
      "page": "42"
    },
    {
      "title": "Profit objective",
      "group": "Common objectives",
      "level": "core",
      "application": "A bakery forecasts $16,000 in sales and $13,000 in total costs for a month. It compares its expected $3,000 profit with its monthly target.",
      "formula": "Profit = total revenue − total costs",
      "page": "42"
    },
    {
      "title": "Protecting shareholder value",
      "group": "Common objectives",
      "level": "core",
      "application": "Directors compare a special dividend today with using that cash to replace unreliable equipment that threatens future earnings.",
      "page": "42"
    },
    {
      "title": "Ethical objectives",
      "group": "Common objectives",
      "level": "core",
      "application": "A clothing retailer sets a deadline for verifying wage payments at every contracted factory and follows up if checks find unpaid overtime.",
      "page": "42–43"
    },
    {
      "title": "Ethical code of practice",
      "group": "Responsibility",
      "level": "core",
      "application": "A purchasing team gives bidders a policy on gifts, declares personal links to bidders and records the reasons for awarding each contract.",
      "page": "52"
    },
    {
      "title": "Survival objective",
      "group": "Common objectives",
      "level": "core",
      "application": "A seasonal activity centre negotiates a shorter lease and tracks weekly cash balances until bookings recover.",
      "page": "45"
    },
    {
      "title": "Corporate social responsibility (CSR)",
      "group": "Responsibility",
      "level": "core",
      "application": "A delivery firm redesigns routes to cut emissions and changes delivery windows so that drivers can take breaks. It measures both outcomes.",
      "page": "47–48"
    }
  ],
  "1.4": [
    {
      "title": "Stakeholders",
      "group": "Identifying stakeholders",
      "level": "core",
      "application": "Before moving a workshop, managers identify owners, employees, customers, suppliers and residents who would face different consequences.",
      "page": "53"
    },
    {
      "title": "Internal stakeholders",
      "group": "Identifying stakeholders",
      "level": "core",
      "application": "Employees ask for predictable shifts, managers need enough staff at peak time and shareholders want a sustainable return.",
      "page": "53–54"
    },
    {
      "title": "External stakeholders",
      "group": "Identifying stakeholders",
      "level": "core",
      "application": "A warehouse expansion affects suppliers' delivery schedules, the lender's risk and residents' exposure to lorry noise.",
      "page": "55"
    },
    {
      "title": "Owners and shareholders",
      "group": "Stakeholder interests",
      "level": "core",
      "application": "A family with voting control supports retaining profit for a new workshop, while another investor wants a dividend this year.",
      "page": "54"
    },
    {
      "title": "Managers and employees",
      "group": "Stakeholder interests",
      "level": "core",
      "application": "A manager plans an evening shift to use machinery more fully. Skilled operators request a shift premium and transport home.",
      "page": "53"
    },
    {
      "title": "Customers",
      "group": "Stakeholder interests",
      "level": "core",
      "application": "A bakery's regular buyers report long queues, prompting the owner to introduce collection times for pre-orders.",
      "page": "55"
    },
    {
      "title": "Suppliers and lenders",
      "group": "Stakeholder interests",
      "level": "core",
      "application": "A café asks its wholesaler for 45 days to pay and its bank for a loan to buy ovens. Each evaluates the café's ability to pay.",
      "page": "55"
    },
    {
      "title": "Government and local communities",
      "group": "Stakeholder interests",
      "level": "core",
      "application": "A proposed distribution centre offers jobs and tax revenue, while neighbours expect more night-time traffic.",
      "page": "56–57"
    },
    {
      "title": "Pressure groups",
      "group": "Stakeholder interests",
      "level": "core",
      "application": "A river conservation group publishes water-quality data and asks a factory to improve wastewater treatment.",
      "page": "55–56"
    },
    {
      "title": "Competitors",
      "group": "Stakeholder interests",
      "level": "core",
      "application": "When a gym launches a cheaper off-peak membership, a nearby club compares its own cancellations before changing its offer.",
      "page": "56"
    },
    {
      "title": "Stakeholder conflict",
      "group": "Resolving conflict",
      "level": "core",
      "application": "A factory considers automation. Owners expect lower unit costs, employees fear losing jobs and customers expect shorter delivery times. Managers cost retraining before deciding.",
      "page": "58–59"
    },
    {
      "title": "Stakeholder mapping",
      "group": "Resolving conflict",
      "level": "core",
      "application": "For a new depot, the project team works closely with the planning authority, keeps interested residents informed and monitors whether a residents’ coalition gains influence.",
      "page": "62, 64"
    }
  ],
  "1.5": [
    {
      "title": "Reasons to grow",
      "group": "Growth decisions",
      "level": "core",
      "application": "A bicycle repair chain considers a second site because its first has a waiting list and central booking costs could be shared.",
      "page": "72–73"
    },
    {
      "title": "Reasons to stay small",
      "group": "Growth decisions",
      "level": "core",
      "application": "A tailor turns down a second shop after finding that customers pay a premium for fittings with the founder.",
      "page": "74–75"
    },
    {
      "title": "Internal growth (organic growth)",
      "group": "Growth decisions",
      "level": "core",
      "application": "A retailer leases a second store and trains its own team using the first store's procedures.",
      "page": "69–70"
    },
    {
      "title": "External growth",
      "group": "Growth decisions",
      "level": "core",
      "application": "A food producer reaches a distant market by buying an established local distributor that already serves supermarkets.",
      "page": "71"
    },
    {
      "title": "Internal economies of scale",
      "group": "Economies of scale",
      "level": "core",
      "application": "A bottler spending $18,000 a month on a line raises output from 6,000 to 9,000 bottles. Fixed cost per bottle falls from $3 to $2.",
      "formula": "Average cost per unit = total cost ÷ quantity produced",
      "page": "65–66"
    },
    {
      "title": "Purchasing economies",
      "group": "Economies of scale",
      "level": "core",
      "application": "A retailer orders 10,000 boxes for $0.60 each instead of paying $0.80 on small orders. It compares $2,000 in gross savings with storage costs.",
      "page": "67"
    },
    {
      "title": "Technical and managerial economies",
      "group": "Economies of scale",
      "level": "core",
      "application": "A larger bakery can fill an automated oven each shift and hire a scheduling specialist to reduce overtime.",
      "page": "66–67"
    },
    {
      "title": "Financial economies",
      "group": "Economies of scale",
      "level": "core",
      "application": "If a bank lowers the rate on a manufacturer’s $200,000 one-year loan from 7% to 5%, annual simple interest falls by $4,000 at the same balance.",
      "page": "66"
    },
    {
      "title": "Marketing economies",
      "group": "Economies of scale",
      "level": "core",
      "application": "A chain uses one $12,000 campaign for 20 branches. The promotional cost averages $600 per branch before any local advertising.",
      "page": "67"
    },
    {
      "title": "Specialization economies",
      "group": "Economies of scale",
      "level": "core",
      "application": "A busy bicycle factory assigns wheel-building to a trained team. Higher output per hour lets labour cost per wheel fall.",
      "page": "67"
    },
    {
      "title": "Risk-bearing economies",
      "group": "Economies of scale",
      "level": "core",
      "application": "A sports group uses common research facilities for cycling and running products. Stronger cycling sales help cover shared costs during a weak running season.",
      "page": "67, 87"
    },
    {
      "title": "Optimal level of output",
      "group": "Economies of scale",
      "level": "core",
      "application": "A firm’s average cost is $9 at 1,000 units, $7 at 2,000 and $8 at 3,000. Of these choices, 2,000 gives the lowest unit cost.",
      "page": "65–66"
    },
    {
      "title": "External economies of scale",
      "group": "Economies of scale",
      "level": "core",
      "application": "Several electronics businesses attract specialist testing labs to the area. A small local producer can now test components nearby for less.",
      "page": "67"
    },
    {
      "title": "Internal diseconomies of scale",
      "group": "Diseconomies of scale",
      "level": "core",
      "application": "As a chain adds branches, repair requests need three approvals. Breakdown delays reduce output per paid hour.",
      "page": "68"
    },
    {
      "title": "External diseconomies of scale",
      "group": "Diseconomies of scale",
      "level": "core",
      "application": "New distribution centres crowd an industrial estate. The original operator must pay drivers more and loses trips to traffic.",
      "page": "69"
    },
    {
      "title": "Merger",
      "group": "Combining businesses",
      "level": "core",
      "application": "Two regional delivery companies combine their networks and remove overlapping depots to reduce empty return journeys.",
      "page": "76"
    },
    {
      "title": "Acquisition",
      "group": "Combining businesses",
      "level": "core",
      "application": "An online sports shop’s board agrees to sell a controlling stake to a retailer. The retailer gains the shop’s customers, warehouse system and team.",
      "page": "77"
    },
    {
      "title": "Takeover",
      "group": "Combining businesses",
      "level": "core",
      "application": "A food group wins enough voting shares to control a rival despite its board advising shareholders to reject the offer.",
      "page": "79"
    },
    {
      "title": "Horizontal integration",
      "group": "Combining businesses",
      "level": "core",
      "application": "A regional dairy buys another milk processor serving adjacent towns so one chilled distribution network can serve both.",
      "page": "77"
    },
    {
      "title": "Vertical integration",
      "group": "Combining businesses",
      "level": "core",
      "application": "A roaster buying a coffee farm integrates backward. Buying a chain of cafés integrates forward.",
      "page": "77"
    },
    {
      "title": "Lateral integration",
      "group": "Combining businesses",
      "level": "core",
      "application": "A climbing-shoe manufacturer buys a maker of climbing harnesses. The products serve similar customers but meet different needs.",
      "page": "77, 87"
    },
    {
      "title": "Conglomerate integration",
      "group": "Combining businesses",
      "level": "core",
      "application": "A refrigeration-equipment company buys a chain of language schools to diversify its sources of earnings.",
      "page": "78, 86"
    },
    {
      "title": "Synergy",
      "group": "Combining businesses",
      "level": "core",
      "application": "Two couriers combine half-empty routes. Serving the same customers now takes eight van trips instead of twelve, saving four trips’ fuel and driver time.",
      "page": "77, 87"
    },
    {
      "title": "Demerger",
      "group": "Combining businesses",
      "level": "core",
      "application": "A group separates a factory from a retail division after managers find that their customers, investment needs and routines seldom overlap.",
      "page": "86"
    },
    {
      "title": "Joint venture",
      "group": "Working with partners",
      "level": "core",
      "application": "A sportswear firm and a sensor maker jointly fund a company to develop a smart training shirt.",
      "page": "80–81"
    },
    {
      "title": "Strategic alliance",
      "group": "Working with partners",
      "level": "core",
      "application": "A rail company and a hotel chain create a joint booking offer, each continuing to sell its own services.",
      "page": "82"
    },
    {
      "title": "Franchising",
      "group": "Working with partners",
      "level": "core",
      "application": "A noodle chain licenses a local owner who funds a new branch, follows recipes and pays a percentage of sales.",
      "page": "83–84"
    },
    {
      "title": "Ansoff matrix",
      "group": "Growth toolkit",
      "level": "core",
      "application": "A stationery maker compares selling more existing pens to current customers with developing a new product for an unfamiliar market.",
      "page": "611–612"
    },
    {
      "title": "Market penetration",
      "group": "Growth toolkit",
      "level": "core",
      "application": "A gym offers existing local members a discounted second weekly class to fill spare places.",
      "page": "611"
    },
    {
      "title": "Market development",
      "group": "Growth toolkit",
      "level": "core",
      "application": "A reusable-bottle maker that sells to hikers offers the same bottles to schools through a new distributor.",
      "page": "612"
    },
    {
      "title": "Product development",
      "group": "Growth toolkit",
      "level": "core",
      "application": "A running brand develops a winter training shoe for its existing club customers and tests prototypes with those clubs.",
      "page": "612"
    },
    {
      "title": "Diversification",
      "group": "Growth toolkit",
      "level": "core",
      "application": "A textbook printer develops event ticketing software for sports venues. Both the service and the buyers are unfamiliar.",
      "page": "612"
    }
  ],
  "4.1": [
    {
      "title": "Marketing",
      "page": "341–342, 352",
      "group": "Orientation",
      "level": "core",
      "application": "A cinema learns that parents avoid late screenings, adds an early family showing and compares attendance with the previous month."
    },
    {
      "title": "Market orientation",
      "page": "342",
      "group": "Orientation",
      "level": "core",
      "application": "A badminton shop learns that beginners find racket weights confusing. It tests a starter range with clearly marked weights and a trial session."
    },
    {
      "title": "Product orientation",
      "page": "343",
      "group": "Orientation",
      "level": "core",
      "application": "An audio company develops a small speaker using a new acoustic design, then demonstrates it to potential buyers."
    },
    {
      "title": "Market size",
      "page": "344, 352",
      "group": "Market measures",
      "level": "core",
      "application": "During one year, three local repair firms earn $180,000, $120,000 and $100,000 from bicycle repairs. If they are the only sellers, the local market is worth $400,000."
    },
    {
      "title": "Market share",
      "page": "344–345",
      "group": "Market measures",
      "level": "core",
      "application": "A shop earns $120,000 of the $800,000 spent on rackets in its city this year. Its value share is $120,000 ÷ $800,000 × 100 = 15%. A rise from 12% to 15% is 3 percentage points.",
      "formula": "Market share by value (%) = business sales revenue ÷ total market sales revenue × 100"
    },
    {
      "title": "Market growth",
      "page": "345, 352",
      "group": "Market measures",
      "level": "core",
      "application": "Citywide racket sales increase from 20,000 to 23,000 units in a year. Growth is 3,000 ÷ 20,000 × 100 = 15%. A shop growing by only 5% loses volume share.",
      "formula": "Market growth (%) = (new market sales − previous market sales) ÷ previous market sales × 100"
    },
    {
      "title": "Market leadership and the importance of share",
      "page": "346",
      "group": "Competitive position",
      "level": "hl",
      "application": "A breakfast brand with 32% of local cereal sales leads its nearest rival at 27%. It uses its sales volume to negotiate more supermarket shelf space."
    },
    {
      "title": "Market concentration ratio",
      "page": "346, 352",
      "group": "Market measures",
      "level": "hl",
      "application": "The three largest local cinemas have revenue shares of 32%, 25% and 18%. The three-firm concentration ratio is 75%.",
      "formula": "Three-firm concentration ratio (%) = share of largest firm + share of second-largest firm + share of third-largest firm"
    }
  ],
  "4.2": [
    {
      "title": "Marketing planning",
      "page": "353–354",
      "group": "The marketing plan",
      "level": "core",
      "application": "A swim school wants 40 additional weekday bookings in eight weeks. It budgets $600 for a local campaign and checks bookings against the target every Friday."
    },
    {
      "title": "Marketing audit",
      "page": "353–354, 370",
      "group": "The marketing plan",
      "level": "core",
      "application": "A swim school compares bookings, local competitors’ timetables and feedback from parents. It finds empty morning lessons alongside a waiting list for evenings."
    },
    {
      "title": "Market segmentation",
      "page": "354–355",
      "group": "Selecting customers",
      "level": "core",
      "application": "A cycle shop uses purchase histories to separate daily commuters from weekend riders. It tests a fast weekday repair slot with commuters."
    },
    {
      "title": "Targeting and the target market",
      "page": "354–355, 360",
      "group": "Selecting customers",
      "level": "core",
      "application": "A repair shop compares 600 commuters near a station with 100 local racing enthusiasts. It targets commuters whose bikes it can service during a workday."
    },
    {
      "title": "Market positioning",
      "page": "354, 360, 370",
      "group": "Positioning",
      "level": "core",
      "application": "A bakery promises a three-minute breakfast for commuters, locates its counter near the station entrance and displays collection times."
    },
    {
      "title": "Position map (perceptual map)",
      "page": "360",
      "group": "Positioning",
      "level": "core",
      "application": "A café asks students to rate local outlets on price and waiting time. It labels both axes, plots each outlet and investigates an empty low-price, fast-service corner."
    },
    {
      "title": "Niche marketing",
      "page": "363",
      "group": "Market coverage",
      "level": "core",
      "application": "A small shoemaker sells extra-wide dance shoes to dancers who struggle to find a suitable fit."
    },
    {
      "title": "Mass marketing",
      "group": "Market coverage",
      "level": "core",
      "application": "A paper supplier makes one standard pack of printer paper and distributes it through national supermarkets.",
      "page": "364–365"
    },
    {
      "title": "Unique selling proposition (USP)",
      "page": "365",
      "group": "Differentiation",
      "level": "core",
      "application": "A phone-repair shop promises a battery swap in 30 minutes or the labour charge is refunded. Nearby shops offer only next-day collection."
    },
    {
      "title": "Differentiation",
      "page": "366",
      "group": "Differentiation",
      "level": "core",
      "application": "A lunch-delivery company prints a verified, meal-specific ingredient list on every box for customers with dietary requirements."
    }
  ],
  "4.3": [
    {
      "title": "Sales forecasting",
      "page": "371, 373–374",
      "group": "Forecasting sales",
      "level": "hl",
      "application": "A sports shop expects 120 team orders in September at $35 each, so it forecasts $4,200 of sales revenue. Its stock order still has to allow for existing inventory.",
      "formula": "Forecast sales revenue = forecast quantity × expected selling price"
    },
    {
      "title": "Trend extrapolation",
      "page": "371, 721",
      "group": "Forecasting sales",
      "level": "hl",
      "application": "A lunch stall sells 220, 240 and 260 meals in successive comparable weeks. Extending the increase of 20 gives a forecast of 280 meals for week four."
    },
    {
      "title": "Time-series analysis",
      "page": "372, 376",
      "group": "Forecasting tools",
      "level": "hl",
      "application": "A tutoring centre charts monthly bookings over three years. It compares each September with earlier Septembers before deciding whether its new course increased demand."
    },
    {
      "title": "Seasonality",
      "group": "Interpreting forecasts",
      "level": "hl",
      "application": "A uniform shop usually sells 40% more in August than in a typical month. If its baseline is 500 shirts, its seasonal estimate is 500 × 1.40 = 700.",
      "page": "372, 376"
    },
    {
      "title": "Cyclical and random variations",
      "page": "372, 376",
      "group": "Interpreting forecasts",
      "level": "hl",
      "application": "A furniture maker separates slower sales during an economic downturn from an isolated month when flooding closed its showroom."
    },
    {
      "title": "Simple linear regression",
      "page": "376, 717",
      "group": "Forecasting tools",
      "level": "hl",
      "application": "A food stall plots event attendance against meals sold. Its fitted line predicts 30 + 0.12 × attendance. At 1,000 visitors the estimate is 150 meals.",
      "formula": "Predicted sales = intercept + slope × explanatory variable"
    },
    {
      "title": "Market research and test marketing",
      "group": "Forecasting sales",
      "level": "hl",
      "application": "Before making 2,000 club shirts, a supplier offers two comparable clubs the new design at $30. It uses paid orders and the clubs’ membership figures to estimate likely demand elsewhere.",
      "page": "371, 375–376"
    }
  ],
  "4.4": [
    {
      "title": "Market research",
      "page": "377–378, 391",
      "group": "Research design",
      "level": "core",
      "application": "A cinema must decide whether to add early screenings. It checks past bookings, asks nearby families about timing, then trials one screening before extending the schedule."
    },
    {
      "title": "Primary research",
      "page": "378",
      "group": "Research design",
      "level": "core",
      "application": "A juice bar wants to choose between two recipes. It runs a blind taste test and records which version each participant would buy at the proposed price."
    },
    {
      "title": "Secondary research",
      "page": "382–383",
      "group": "Research design",
      "level": "core",
      "application": "Before paying for interviews, a footwear retailer compares its sales records with a published report on local sports participation."
    },
    {
      "title": "Random sampling",
      "page": "388",
      "group": "Sampling methods",
      "level": "core",
      "application": "A sports centre numbers all 1,200 active members and uses a random-number generator to select 120 distinct IDs for a survey on opening hours."
    },
    {
      "title": "Quota sampling",
      "page": "388",
      "group": "Sampling methods",
      "level": "core",
      "application": "A cinema wants its 100 responses to reflect its audience, 60% students and 40% other customers. Staff recruit 60 students and 40 other customers at the exit."
    },
    {
      "title": "Convenience sampling",
      "page": "389",
      "group": "Sampling methods",
      "level": "core",
      "application": "A bakery asks the first 25 people available at its counter on Monday morning to taste a new roll."
    },
    {
      "title": "Population, sampling frame and bias",
      "group": "Sampling methods",
      "level": "core",
      "application": "A shop wants all customers’ views but initially samples only loyalty-card holders. It also recruits cash-paying visitors to hear from occasional buyers.",
      "page": "388–389"
    },
    {
      "title": "Qualitative research",
      "page": "386",
      "group": "Types of data",
      "level": "core",
      "application": "A shop asks people who left their baskets behind to describe what happened. Several mention an unexpected delivery charge."
    },
    {
      "title": "Quantitative research",
      "page": "387",
      "group": "Types of data",
      "level": "core",
      "application": "A website tests two delivery pages. Of 500 visitors to each, 60 complete a purchase on page A and 80 on B, giving conversion rates of 12% and 16%."
    },
    {
      "title": "Surveys and questionnaires",
      "page": "379–380",
      "group": "Primary methods",
      "level": "core",
      "application": "A café sends the same three questions about price, portion and waiting time to a sample of weekday and weekend buyers."
    },
    {
      "title": "Interviews",
      "page": "381",
      "group": "Primary methods",
      "level": "core",
      "application": "A supplier interviews purchasing managers who declined its tender and asks which parts of the delivery terms were difficult for them."
    },
    {
      "title": "Focus groups",
      "page": "381–382",
      "group": "Primary methods",
      "level": "core",
      "application": "A snack maker shows two packs to a small group of parents and asks them to discuss which information they can find quickly."
    },
    {
      "title": "Observation",
      "group": "Primary methods",
      "level": "core",
      "application": "A supermarket counts how many shoppers abandon each checkout queue at lunchtime before and after opening an extra till.",
      "page": "382, 391"
    },
    {
      "title": "Market analyses",
      "page": "383, 391",
      "group": "Secondary sources",
      "level": "core",
      "application": "A start-up reads a trade association’s report on city bicycle sales before choosing which customer segment to interview."
    },
    {
      "title": "Academic journals",
      "page": "383–384, 391",
      "group": "Secondary sources",
      "level": "core",
      "application": "A canteen reads a study of how shelf position affects snack choices and uses it to design a trial at its own tills."
    },
    {
      "title": "Government publications",
      "group": "Secondary sources",
      "level": "core",
      "application": "A tutoring centre compares official counts of school-age residents across districts before shortlisting rental locations.",
      "page": "384, 391"
    },
    {
      "title": "Media articles",
      "group": "Secondary sources",
      "level": "core",
      "application": "A florist reads local reporting about a proposed wedding venue and contacts the venue to verify the opening date before ordering more stock.",
      "page": "385, 391"
    },
    {
      "title": "Online content",
      "group": "Secondary sources",
      "level": "core",
      "application": "A hostel reviews guests’ existing comments on nearby properties and checks competitors’ posted prices before redesigning its late check-in service.",
      "page": "385–386"
    }
  ],
  "4.5": [
    {
      "title": "The seven Ps of the marketing mix",
      "group": "Marketing mix",
      "level": "core",
      "application": "A commuter bike workshop offers a same-day repair, charges for speed, advertises near the station and accepts bikes there. Trained mechanics, timed bookings and a signed repair record help deliver that promise.",
      "page": "453, 462–463"
    },
    {
      "title": "Product",
      "group": "Product",
      "level": "core",
      "application": "A lunchbox maker fits a removable seal after customers report that soup leaks into school bags. It tests the new lid with the same customers before a full run.",
      "page": "393"
    },
    {
      "title": "Product life cycle",
      "group": "Product",
      "level": "core",
      "application": "A speaker maker plots quarterly unit sales and checks whether two weak quarters reflect long-term decline or a seasonal dip before cutting its promotion budget.",
      "page": "394"
    },
    {
      "title": "Research and development stage",
      "group": "Product",
      "level": "core",
      "application": "A racket maker spends $8,000 testing three grips with junior players and discards the version that slips when wet.",
      "page": "395"
    },
    {
      "title": "Introduction stage",
      "group": "Product",
      "level": "core",
      "application": "A bakery launches oat rolls in two branches and offers samples there. It pays for display signs before enough customers know the product.",
      "page": "395"
    },
    {
      "title": "Growth stage",
      "group": "Product",
      "level": "core",
      "application": "A maker of folding helmets adds two retailers as weekly orders rise from 80 to 150. It buys materials before those retailers settle their invoices.",
      "page": "395"
    },
    {
      "title": "Maturity stage",
      "group": "Product",
      "level": "core",
      "application": "A kettle maker has stable volume and little need for new machinery. It uses cash from its standard kettle to design a travel version.",
      "page": "395, 400"
    },
    {
      "title": "Decline stage",
      "group": "Product",
      "level": "core",
      "application": "A camera shop cuts orders of a declining model, supports existing owners and compares the return from one final promotion with the value of freeing the shelf space.",
      "page": "396"
    },
    {
      "title": "Product life cycle, profit and cash flow",
      "group": "Product",
      "level": "core",
      "application": "A growing helmet maker records $6,000 in credit sales with $4,000 of costs paid this month. Its profit on those sales is $2,000, but before its retailer pays, cash from these transactions is down $4,000.",
      "page": "399–400"
    },
    {
      "title": "Product portfolio",
      "group": "Product",
      "level": "core",
      "application": "A stationery firm uses cash from repeat notebook orders to test reusable planners. It checks whether planner buyers are new or simply switching from its notebooks.",
      "page": "396"
    },
    {
      "title": "Boston Consulting Group (BCG) matrix",
      "group": "Product",
      "level": "core",
      "application": "A drinks maker compares its sales share with the largest rival’s in each category, then plots category growth. It considers funding a growing line with cash from a mature one.",
      "page": "396, 635"
    },
    {
      "title": "Star",
      "group": "Product",
      "level": "core",
      "application": "A top-selling fast-charger line operates in a rapidly expanding market. Its maker negotiates extra shelf space while demand is growing.",
      "page": "396"
    },
    {
      "title": "Cash cow",
      "group": "Product",
      "level": "core",
      "application": "A leading brand of plain exercise books pays for a small trial of erasable notebooks from its recurring cash surplus.",
      "page": "396"
    },
    {
      "title": "Question mark",
      "group": "Product",
      "level": "core",
      "application": "A small supplier of refillable deodorant trials one pharmacy chain before paying for a national launch in a rapidly expanding category.",
      "page": "396"
    },
    {
      "title": "Dog",
      "group": "Product",
      "level": "core",
      "application": "A repair shop sells few parts for an older console. It checks the margin on repairs that need those parts before closing the line.",
      "page": "396"
    },
    {
      "title": "Extension strategies",
      "group": "Product",
      "level": "core",
      "application": "After sales of its home storage boxes level off, a supplier adds removable dividers and demonstrates the boxes to art teachers. It tests repeat school orders before a wider relaunch.",
      "page": "397–398"
    },
    {
      "title": "Branding",
      "group": "Product",
      "level": "core",
      "application": "A soap maker uses one distinctive wrapper across its bars and promises a refill at each market stall. Customers can recognise the product and know what service to expect.",
      "page": "401, 404–405"
    },
    {
      "title": "Brand awareness",
      "group": "Product",
      "level": "core",
      "application": "Before and after an advertising campaign, a snack maker asks comparable samples to name lunchbox brands unaided and then recognise its logo. If 54 of 90 recognise it, aided awareness is 60%.",
      "page": "401",
      "formula": "Aided brand awareness (%) = people who recognise the brand ÷ valid responses × 100"
    },
    {
      "title": "Brand development",
      "group": "Product",
      "level": "core",
      "application": "A running-shoe repairer launches branded care kits for runners who already trust its workshop and checks repeat sales before extending the range.",
      "page": "402"
    },
    {
      "title": "Brand loyalty",
      "group": "Product",
      "level": "core",
      "application": "A tea shop checks whether members keep buying its blends when a competing shop offers a discount. It distinguishes preference from purchases driven solely by coupons.",
      "page": "402"
    },
    {
      "title": "Brand value",
      "group": "Product",
      "level": "core",
      "application": "Buyers value a plain canvas bag at $24 and the same bag with a trusted maker’s label at $32. The $8 difference measures the suggested brand premium for that group.",
      "page": "403"
    },
    {
      "title": "Price",
      "group": "Price",
      "level": "core",
      "application": "A sports shop considers a $12 racket restring against an $18 same-day service. It estimates how many players value speed before adopting the higher price.",
      "page": "411"
    },
    {
      "title": "Cost-plus pricing",
      "group": "Price",
      "level": "core",
      "application": "A lamp costs $40 per unit including allocated overheads. A 25% mark-up adds $10, giving a $50 price. That $10 is 20% of the selling price.",
      "formula": "For a percentage mark-up, selling price = unit cost × (1 + mark-up % ÷ 100)",
      "page": "412"
    },
    {
      "title": "Penetration pricing",
      "group": "Price",
      "level": "core",
      "application": "A new meal-kit firm charges $18 per box during a subscriber’s first month against rivals’ $24. It measures how many subscribers stay once the introductory price ends.",
      "page": "412–413"
    },
    {
      "title": "Loss-leader pricing",
      "group": "Price",
      "level": "core",
      "application": "A grocer pays $1.20 per loaf and sells it for $0.90. A shopper who also buys spreads generating $1.10 of contribution adds $0.80 overall before fixed costs.",
      "page": "413"
    },
    {
      "title": "Predatory pricing",
      "group": "Price",
      "level": "core",
      "application": "A dominant delivery firm charges less than each delivery costs only in a new rival’s district. Rival exit followed by a fee rise would support a predatory interpretation.",
      "page": "413"
    },
    {
      "title": "Premium pricing",
      "group": "Price",
      "level": "core",
      "application": "A small instrument maker charges $900 for a hand-finished guitar with a personal fitting and repair guarantee. Those services help explain the premium.",
      "page": "414"
    },
    {
      "title": "Dynamic pricing",
      "group": "Price",
      "level": "hl",
      "application": "A climbing gym with 40 evening spaces charges more as popular sessions fill and offers lower midweek prices when walls would otherwise stand empty.",
      "page": "415"
    },
    {
      "title": "Competitive pricing",
      "group": "Price",
      "level": "hl",
      "application": "Two nearby copy shops charge $0.10 per page. A third matches them for standard copies and checks whether its faster finishing service supports a separate premium.",
      "page": "416"
    },
    {
      "title": "Contribution pricing",
      "group": "Price",
      "level": "hl",
      "application": "A printer has an idle press. A special order at $7 per poster with $4 variable cost produces $3 per poster, or $600 on 200 posters, before any extra fixed costs.",
      "formula": "Contribution per unit = selling price − variable cost per unit",
      "page": "416–417"
    },
    {
      "title": "Price elasticity of demand (PED)",
      "group": "Price",
      "level": "hl",
      "application": "A cinema cuts a $10 ticket to $9 (−10%). Weekly sales rise from 200 to 240 (+20%), so PED = +20% ÷ −10% = −2. Magnitude 2 means elastic demand. Revenue rises from $2,000 to $2,160.",
      "formula": "PED = percentage change in quantity demanded ÷ percentage change in price",
      "page": "417–418"
    },
    {
      "title": "Promotion",
      "group": "Promotion",
      "level": "core",
      "application": "A plant nursery demonstrates how to care for an unfamiliar herb, then reminds previous buyers when another batch is ready.",
      "page": "425–426"
    },
    {
      "title": "Above-the-line promotion (ATL)",
      "group": "Promotion",
      "level": "core",
      "application": "A local cinema buys regional radio spots before reopening. It measures awareness across the area and uses one offer code to track some ticket purchases.",
      "page": "426"
    },
    {
      "title": "Below-the-line promotion (BTL)",
      "group": "Promotion",
      "level": "core",
      "application": "A bike shop emails a service offer to customers who bought a commuter bike one year ago, using a code to measure bookings.",
      "page": "430"
    },
    {
      "title": "Through-the-line promotion (TTL)",
      "group": "Promotion",
      "level": "core",
      "application": "A book festival announces an author by radio. Listeners visit a campaign page, select a genre and opt in to an email with seats for a matching workshop.",
      "page": "436–437"
    },
    {
      "title": "Social media marketing",
      "group": "Promotion",
      "level": "core",
      "application": "A badminton shop posts short grip demonstrations, answers questions and issues a video-specific code. It compares the profit on extra orders with filming and ad costs.",
      "page": "437"
    },
    {
      "title": "Sales promotion",
      "group": "Promotion",
      "level": "core",
      "application": "A new cereal brand offers a coupon at checkout and measures full-price repeat purchases in the following month.",
      "page": "431"
    },
    {
      "title": "Personal selling",
      "group": "Promotion",
      "level": "core",
      "application": "At a furniture showroom, an adviser measures a customer’s room and demonstrates two desk layouts before preparing a quote.",
      "page": "431"
    },
    {
      "title": "Public relations and publicity",
      "group": "Promotion",
      "level": "core",
      "application": "A repair café invites a local reporter to meet households using its service. The reporter decides what, if anything, to publish.",
      "page": "432"
    },
    {
      "title": "Sponsorship",
      "group": "Promotion",
      "level": "core",
      "application": "A running shop supplies race-day water stations and places its name on the race map. It tracks redemptions of a participant-only fitting voucher.",
      "page": "433"
    },
    {
      "title": "Direct marketing",
      "group": "Promotion",
      "level": "core",
      "application": "A pottery studio invites past beginners to a glazing class and records bookings through a dedicated link.",
      "page": "430"
    },
    {
      "title": "Point-of-sale promotion",
      "group": "Promotion",
      "level": "core",
      "application": "A racket shop puts sample grips beside its stringing counter with a price and a sign inviting customers to try the texture.",
      "page": "432"
    },
    {
      "title": "Trade shows",
      "group": "Promotion",
      "level": "core",
      "application": "A supplier of science apparatus invites school buyers at a teaching exhibition to test its compact microscope and book a later demonstration.",
      "page": "432–433"
    },
    {
      "title": "Word-of-mouth promotion",
      "group": "Promotion",
      "level": "core",
      "application": "After a laptop repair, a customer tells three classmates how the shop recovered their files. The owner asks new visitors how they heard about the shop.",
      "page": "434"
    },
    {
      "title": "Guerrilla marketing",
      "group": "Promotion",
      "level": "core",
      "application": "A puzzle café gets permission to display a playable window puzzle overlooking a busy queue. People enter the café for the final clue.",
      "page": "434–435"
    },
    {
      "title": "Packaging as promotion",
      "group": "Promotion",
      "level": "core",
      "application": "A stationery shop tests a reusable sleeve that shows how its water-resistant notebook survives a spill. It compares sales and packaging cost per unit with its paper band.",
      "page": "435, 462"
    },
    {
      "title": "AIDA",
      "group": "Promotion",
      "level": "core",
      "application": "A language school tracks video views, course-page visits, trial-class requests and paid enrolments. Many views but few trial requests suggest the course message needs work.",
      "page": "437"
    },
    {
      "title": "Place and distribution channels",
      "group": "Place",
      "level": "core",
      "application": "A dumpling maker compares selling at its stall, through grocery shops or on a marketplace that takes orders for a fee. It checks freshness, customer reach and the margin left on each sale.",
      "page": "443–444"
    },
    {
      "title": "Direct distribution (zero intermediaries)",
      "group": "Place",
      "level": "core",
      "application": "A ceramicist takes orders through her own website, sets the price, packs each piece and pays a courier to deliver it. She remains the seller.",
      "page": "444"
    },
    {
      "title": "Retail distribution (one intermediary)",
      "group": "Place",
      "level": "core",
      "application": "A local card-game designer supplies a toy shop at $12 per game. The shop demonstrates it and sells it to families for $20.",
      "page": "444, 446"
    },
    {
      "title": "Wholesale distribution (two intermediaries)",
      "group": "Place",
      "level": "core",
      "application": "A snack maker sells pallets to a wholesaler. The wholesaler splits them into cartons for 60 independent corner shops.",
      "page": "444–445"
    },
    {
      "title": "Specialist distributors",
      "group": "Place",
      "level": "core",
      "application": "A microscope maker supplies a distributor that demonstrates instruments to schools and stocks spare parts locally.",
      "page": "446"
    },
    {
      "title": "Agents and brokers",
      "group": "Place",
      "level": "core",
      "application": "A speciality tea producer appoints an agent who knows hotel buyers. The agent negotiates orders and the producer ships the tea to the hotels.",
      "page": "446"
    },
    {
      "title": "Multichannel distribution",
      "group": "Place",
      "level": "core",
      "application": "A shoe maker lets buyers order standard sizes online and try specialist fits at partner shops. It coordinates stock and returns across both routes.",
      "page": "449"
    },
    {
      "title": "E-commerce as a distribution channel",
      "group": "Place",
      "level": "core",
      "application": "A ceramics studio sells mugs through its own web shop and tests a marketplace for international orders. It compares fees, shipping damage and the cost of winning each buyer.",
      "page": "448"
    },
    {
      "title": "Vending machines",
      "group": "Place",
      "level": "core",
      "application": "A sports centre stocks shuttlecocks in a machine beside its courts so players can buy replacements after reception closes.",
      "page": "448–449"
    },
    {
      "title": "Mail order",
      "group": "Place",
      "level": "core",
      "application": "A seed supplier mails a seasonal catalogue and order form to gardeners in areas with limited internet access.",
      "page": "449"
    },
    {
      "title": "People and the customer experience",
      "group": "People",
      "level": "core",
      "application": "A badminton centre trains reception staff to ask a beginner about experience before recommending a class and to resolve booking mistakes immediately.",
      "page": "454"
    },
    {
      "title": "Cultural variation in service",
      "group": "People",
      "level": "core",
      "application": "A guesthouse offers visitors a choice of written check-in instructions or a face-to-face welcome, and staff check how each guest wants to be addressed.",
      "page": "455"
    },
    {
      "title": "Service delivery processes",
      "group": "Processes",
      "level": "core",
      "application": "A repair shop records the fault at drop-off, obtains approval of a quote, tests the repair and texts when collection is possible.",
      "page": "457–458"
    },
    {
      "title": "Changing a service process",
      "group": "Processes",
      "level": "core",
      "application": "A salon trials online check-in for one month, keeps a staffed option and compares average waiting time and abandoned bookings before and after.",
      "page": "459"
    },
    {
      "title": "Physical evidence",
      "group": "Physical evidence",
      "level": "core",
      "application": "A bike workshop displays a tidy repair bench, labelled parts and a dated service sheet showing which checks were completed.",
      "page": "461"
    }
  ],
  "4.6": [
    {
      "title": "International marketing",
      "page": "465–466",
      "group": "Opportunities and threats",
      "level": "hl",
      "application": "A maker of insulated bottles faces slow growth at home. It compares demand, distributor fees and delivery costs abroad before entering a second market."
    },
    {
      "title": "Market standardisation",
      "group": "International strategy",
      "level": "hl",
      "application": "A helmet maker uses the same brand and core design in two cycling markets after confirming local safety requirements.",
      "page": "466, 470"
    },
    {
      "title": "Local adaptation and glocalisation",
      "group": "International strategy",
      "level": "hl",
      "application": "A café chain keeps its name and shop format but tests two less-sweet drinks and local-language ordering in its new market.",
      "page": "468, 470–471"
    },
    {
      "title": "Exporting through a distributor",
      "group": "Market entry",
      "level": "hl",
      "application": "A small sportswear maker tests overseas demand by selling one shipment to a distributor that already supplies local clubs.",
      "page": "446, 466"
    },
    {
      "title": "Local joint venture",
      "page": "80–81, 471",
      "group": "Market entry",
      "level": "hl",
      "application": "A chilled-food producer and an overseas supermarket group jointly launch a local meal range. One provides recipes, the other refrigeration and shelf space."
    },
    {
      "title": "Exchange-rate exposure",
      "group": "Opportunities and threats",
      "level": "hl",
      "application": "An exporter invoices €10,000. At $1.10 per euro it expects $11,000. If the rate is $1.02 when paid, it receives $10,200, an $800 shortfall.",
      "page": "470"
    },
    {
      "title": "Barriers to market entry",
      "page": "467",
      "group": "Opportunities and threats",
      "level": "hl",
      "application": "A toy exporter compares the cost of local safety testing, translated packaging and a retailer listing fee with the contribution expected from first-year orders."
    }
  ]
};

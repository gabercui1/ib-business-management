"use strict";

const NOTES = {
  "1.1": [
    {
      "title": "Business activity",
      "group": "Business activity",
      "level": "core",
      "definition": "Business activity combines people, equipment and finance to turn inputs into goods or services that satisfy customers’ needs and wants.",
      "application": "A cycle workshop combines mechanics, tools and spare parts to sell a repair service to commuters.",
      "advantage": "Identifying the output and its customers helps managers decide which resources are worth buying.",
      "disadvantage": "A service can meet a genuine need and still struggle if customers cannot pay enough to cover its costs.",
      "tradeoffLabels": [
        "Why it matters",
        "What to check"
      ],
      "page": "11–12"
    },
    {
      "title": "Needs and wants",
      "group": "Business activity",
      "level": "core",
      "definition": "Needs are essentials for survival. Wants are goods, services or experiences people would like to have beyond those essentials.",
      "application": "A food shop sells basic drinking water and premium fruit-infused water. Both can hydrate a customer, while the premium line also meets a preference for flavour.",
      "advantage": "Distinguishing the basic benefit from optional features helps the shop decide which customers might pay a premium.",
      "disadvantage": "A strong desire does not establish demand at a particular price. Customers must also be able and willing to pay.",
      "tradeoffLabels": [
        "What the distinction reveals",
        "What it cannot predict"
      ],
      "page": "12, 20"
    },
    {
      "title": "Goods and services",
      "group": "Business activity",
      "level": "core",
      "definition": "A good is a physical product. A service is an activity or experience delivered to a customer. A business can sell both together.",
      "application": "A bike shop sells a replacement wheel and charges a mechanic’s fee to fit it. The customer can buy the good and the service separately.",
      "advantage": "Bundling a product with skilled work adds convenience and can increase revenue per customer.",
      "disadvantage": "A wheel can wait in stock. A mechanic’s unused appointment time is lost, so the shop needs to schedule its service capacity.",
      "tradeoffLabels": [
        "Value of offering both",
        "Capacity trade-off"
      ],
      "page": "12, 20"
    },
    {
      "title": "Customers and consumers",
      "group": "Business activity",
      "level": "core",
      "definition": "The customer makes the purchase and the consumer uses the product. The same person can take both roles.",
      "application": "A parent pays for a child’s badminton racket. The parent compares price and durability, while the child tests the grip and weight.",
      "advantage": "Knowing who pays and who uses the product helps a business design both the sales message and the product features.",
      "disadvantage": "A survey of buyers alone could miss a feature that matters to users, making repeat purchases less likely.",
      "tradeoffLabels": [
        "Use in a case",
        "Risk of overlooking one group"
      ],
      "page": "12, 20"
    },
    {
      "title": "Factors of production",
      "group": "Business activity",
      "level": "core",
      "definition": "Land supplies natural resources, labour supplies human effort, capital supplies productive equipment, and enterprise brings these inputs together and bears risk.",
      "application": "On a fruit farm the soil is land, pickers supply labour, the irrigation system is capital and the founder supplies enterprise.",
      "advantage": "Separating the inputs helps a manager identify a bottleneck, such as too few pickers at harvest.",
      "disadvantage": "Adding more of one input may achieve little while another is scarce. More irrigation equipment cannot pick a ripe crop.",
      "tradeoffLabels": [
        "What it reveals",
        "What limits output"
      ],
      "page": "19, 477"
    },
    {
      "title": "Added value",
      "group": "Business activity",
      "level": "core",
      "definition": "Added value measures how much a business increases the value of bought-in materials and services when it sells its output.",
      "application": "A maker sells a custom racket grip for $16 after spending $6 on bought-in inputs. It adds $10 per grip before paying its own workers and other expenses.",
      "advantage": "Customization can raise the price a customer accepts and give a small producer room to cover skilled work.",
      "disadvantage": "Added value still has to cover wages, rent and other costs. A high figure alone does not establish profitability.",
      "formula": "Added value per unit = selling price − cost of bought-in inputs per unit",
      "page": "12"
    },
    {
      "title": "Business functions",
      "group": "Business activity",
      "level": "core",
      "definition": "Human resources manages people, finance and accounts manages money and records, marketing identifies and reaches customers, and operations produces and delivers the output.",
      "application": "Before a bakery starts home delivery, marketing estimates orders, operations sets routes, finance budgets for vans and HR trains drivers.",
      "advantage": "Coordinating the four functions prevents a sales campaign from promising more deliveries than the bakery can handle.",
      "disadvantage": "Departmental targets can compete. A cheaper delivery budget might leave operations too few drivers to meet the advertised deadline.",
      "tradeoffLabels": [
        "Benefit of coordination",
        "Possible conflict"
      ],
      "page": "12–13"
    },
    {
      "title": "Primary sector",
      "group": "Economic sectors",
      "level": "core",
      "definition": "Primary activities obtain raw materials directly from nature, including farming, fishing, forestry and mining.",
      "application": "A timber business growing and harvesting trees supplies logs to furniture workshops.",
      "advantage": "Control of a scarce or distinctive resource can give a producer a reliable place in a supply chain.",
      "disadvantage": "Weather, stock depletion or commodity price changes can reduce the income earned from a harvest.",
      "page": "14"
    },
    {
      "title": "Secondary sector",
      "group": "Economic sectors",
      "level": "core",
      "definition": "Secondary activities transform raw materials or components into manufactured goods, or use them in construction.",
      "application": "A workshop buys logs and turns them into fitted desks. The desk-making belongs in the secondary sector.",
      "advantage": "Design and processing can raise the price customers will pay above the cost of the inputs.",
      "disadvantage": "Machinery and premises create costs even when a fall in orders leaves equipment idle.",
      "page": "14"
    },
    {
      "title": "Tertiary sector",
      "group": "Economic sectors",
      "level": "core",
      "definition": "Tertiary activities provide services to households or other organizations, including retail, transport and financial services.",
      "application": "A shop that sells finished desks and delivers them to offices earns revenue from retail and delivery services.",
      "advantage": "A convenient service can attract repeat customers even when rivals sell similar goods.",
      "disadvantage": "Many services depend on staff time. Unused delivery slots today cannot be stored and sold next week.",
      "page": "14–15"
    },
    {
      "title": "Quaternary sector",
      "group": "Economic sectors",
      "level": "core",
      "definition": "The quaternary sector is the knowledge-intensive part of the service sector. Its activities create, analyse or share specialist information, including research and data analysis.",
      "application": "A research team sells a material-testing report to furniture makers choosing a durable coating.",
      "advantage": "Specialist findings can guide decisions across many factories and support a premium fee.",
      "disadvantage": "Employing skilled researchers can be expensive, and a research project may produce no commercially useful result.",
      "page": "15"
    },
    {
      "title": "Chain of production",
      "group": "Economic sectors",
      "level": "core",
      "definition": "The chain of production follows a product from the original raw materials through processing and services to the final consumer.",
      "application": "A grower sells cotton to a fabric mill. A clothing factory turns it into shirts, and a retailer makes the shirts available to shoppers.",
      "advantage": "Tracing the sequence shows where value is added and which supplier disruption could delay a customer order.",
      "disadvantage": "A simple chain can hide multiple suppliers, returned products and services used at several stages.",
      "tradeoffLabels": [
        "What it reveals",
        "Limit of the model"
      ],
      "page": "15"
    },
    {
      "title": "Entrepreneurship",
      "group": "Starting a business",
      "level": "core",
      "definition": "Entrepreneurship is the combination of skills, knowledge and experience that a founder uses to spot an opportunity, organize resources and take a business risk.",
      "application": "A student discovers that local teams need same-day racket restringing, books a workshop and buys a machine with savings.",
      "advantage": "The founder can respond quickly to an underserved group and keep the rewards if the idea succeeds.",
      "disadvantage": "The founder commits time and capital before knowing whether repeat demand will cover costs.",
      "page": "11, 20"
    },
    {
      "title": "Start-up opportunities and challenges",
      "group": "Starting a business",
      "level": "core",
      "definition": "Starting a firm can let a founder serve an unmet need, pursue a personal interest, work independently and earn a return. Challenges include attracting customers, securing finance, managing cash and establishing reliable operations.",
      "application": "A refill shop sees queues at the only competing store. It tests weekend sales before agreeing to a year-long lease.",
      "advantage": "A low-cost trial gives the founder evidence of willingness to pay and time to adjust the offer.",
      "disadvantage": "Early sales may come from curiosity. Upfront rent and supplier payments can still exhaust cash before regular demand develops.",
      "page": "16–18"
    },
    {
      "title": "Business plan",
      "group": "Starting a business",
      "level": "core",
      "definition": "A business plan is a written proposal setting out the idea, market, objectives, resources and financial forecasts, and how the business expects to achieve its aims.",
      "application": "A coach estimates court hire, fees and expected enrolment before applying for a loan to run badminton classes.",
      "advantage": "The forecast exposes how many paying students the coach needs and gives a lender evidence to examine.",
      "disadvantage": "A well-presented forecast is still an estimate. If school holidays cut enrolment, the coach will need to update the plan.",
      "page": "19, 641"
    }
  ],
  "1.2": [
    {
      "title": "Private sector",
      "group": "Ownership and risk",
      "level": "core",
      "definition": "The private sector consists of organizations owned and controlled by individuals, families or other non-government owners. It includes both commercial firms and organizations with social aims.",
      "application": "A family buys buses and runs a commuter service using its own capital. Its ownership puts it in the private sector.",
      "advantage": "Owners can change routes quickly to attract more passengers and earn a return.",
      "disadvantage": "A socially useful route may close if fares cannot cover its costs and no other funding is available.",
      "page": "21"
    },
    {
      "title": "Public sector",
      "group": "Ownership and risk",
      "level": "core",
      "definition": "The public sector consists of organizations owned or controlled by government at national, regional or local level.",
      "application": "A city owns a bus operator and requires it to serve a low-density district, even when ticket revenue is modest.",
      "advantage": "Public funding can keep socially valuable services available to people who would otherwise lose access.",
      "disadvantage": "Budget limits or changes in government priorities can delay investment, even when service demand grows.",
      "page": "21"
    },
    {
      "title": "Limited liability",
      "group": "Ownership and risk",
      "level": "core",
      "definition": "With limited liability, a shareholder's exposure to company debts is generally confined to the amount invested or still due on their shares.",
      "application": "A founder pays $5,000 for fully paid shares. If the company closes owing more, the investment is at risk. A separate personal loan guarantee would create an additional obligation.",
      "advantage": "Capping exposure can make it easier to attract owners willing to finance a new company.",
      "disadvantage": "A lender may require security or a personal guarantee before lending to a young company with little collateral.",
      "page": "26"
    },
    {
      "title": "Unlimited liability",
      "group": "Ownership and risk",
      "level": "core",
      "definition": "Unlimited liability means that a business owner may have to use personal assets to settle unpaid business debts.",
      "application": "A sole trader closes a café with an outstanding supplier balance. Personal savings may be needed if selling the café equipment raises too little.",
      "advantage": "Personal exposure signals commitment to a creditor and can encourage the owner to monitor borrowing closely.",
      "disadvantage": "A business loss may threaten household assets as well as the money invested in the business.",
      "tradeoffLabels": [
        "Effect on decisions",
        "Risk to the owner"
      ],
      "page": "24"
    },
    {
      "title": "Incorporation",
      "group": "Ownership and risk",
      "level": "core",
      "definition": "Incorporation gives a company its own legal identity, separate from its shareholders. The company can own assets, make contracts and owe debts in its own name.",
      "application": "Two founders incorporate their studio before signing a long lease. The company becomes the tenant and owns its equipment.",
      "advantage": "The company can continue when a shareholder leaves, and the limited-company structure normally limits each shareholder’s exposure.",
      "disadvantage": "Formation and ongoing reporting need time and money. Lenders can also request a personal guarantee from a founder.",
      "page": "26, 37"
    },
    {
      "title": "Sole trader",
      "group": "Commercial organizations",
      "level": "core",
      "definition": "A sole trader is one person who owns and controls an unincorporated business, keeps its profits and usually bears unlimited liability. A sole trader can employ staff.",
      "application": "A photographer owns a studio, hires an assistant and personally chooses which events to accept.",
      "advantage": "One owner can make decisions quickly and keep the profit after expenses.",
      "disadvantage": "The owner's capital, time and borrowing power can constrain expansion, while business debts can reach personal assets.",
      "page": "23–24"
    },
    {
      "title": "Partnership",
      "group": "Commercial organizations",
      "level": "core",
      "definition": "A partnership is a business owned by two or more partners who share resources, decisions, profits and responsibilities according to their agreement.",
      "application": "A baker and an accountant sign a deed of partnership for their café. It records each contribution, their roles, how profits are split and what happens if one leaves.",
      "advantage": "Partners can pool capital and complementary skills, reducing reliance on one person's expertise.",
      "disadvantage": "Disagreements can delay decisions. In an ordinary general partnership, personal exposure to debt is also a concern.",
      "page": "25"
    },
    {
      "title": "Privately held company",
      "group": "Commercial organizations",
      "level": "core",
      "definition": "A privately held company is an incorporated business whose shares are held privately. Owners generally have limited liability, and share transfers may be restricted.",
      "application": "A family incorporates its furniture business and sells a minority stake to a known investor to fund a workshop.",
      "advantage": "The family can raise equity while retaining substantial control over who owns shares.",
      "disadvantage": "A smaller pool of buyers can make it harder to raise large sums or sell shares quickly.",
      "page": "26"
    },
    {
      "title": "Publicly held company",
      "group": "Commercial organizations",
      "level": "core",
      "definition": "A publicly held company can offer shares to the general public. Its shareholders normally have limited liability, and listed shares trade on a stock exchange.",
      "application": "A growing manufacturer issues shares to the public to help finance a second factory.",
      "advantage": "Access to a wide investor base can raise large amounts of long-term equity capital.",
      "disadvantage": "Issuing more shares can dilute existing owners' control, and public reporting adds cost and scrutiny.",
      "page": "29"
    },
    {
      "title": "Initial public offering (IPO)",
      "group": "Commercial organizations",
      "level": "core",
      "definition": "An initial public offering is the first sale of a company’s shares to public investors. It can include newly issued shares and shares sold by existing owners.",
      "application": "A manufacturer issues new shares at its IPO to pay for an assembly line. Some founders also sell existing shares to investors.",
      "advantage": "Newly issued shares raise capital without scheduled loan repayments. A public market also gives existing shareholders a way to sell.",
      "disadvantage": "Preparation and disclosure are expensive. New shares can dilute control, and proceeds from founders’ existing shares go to those sellers.",
      "page": "37"
    },
    {
      "title": "For-profit social enterprise",
      "group": "Social enterprises",
      "level": "core",
      "definition": "A for-profit social enterprise trades with a social or environmental purpose and directs its surplus towards that purpose.",
      "application": "A repair business charges for fixing laptops. Its surplus pays for tools and supervised training places for people seeking work.",
      "advantage": "Earned income can fund the mission repeatedly and reduce reliance on donations.",
      "disadvantage": "A high-margin contract may divert staff from beneficiaries, forcing managers to balance income and impact.",
      "page": "31, 38"
    },
    {
      "title": "Private-sector social enterprise",
      "group": "Social enterprises",
      "level": "core",
      "definition": "A private-sector social enterprise is privately owned, trades to earn a surplus and uses that surplus to advance its social or environmental mission.",
      "application": "A founder-owned catering firm sells office lunches and pays trainees who face barriers to employment.",
      "advantage": "Managers can tailor the business model to local needs and adjust the menu when trading conditions change.",
      "disadvantage": "Pressure from investors to earn returns can conflict with the cost of mentoring trainees.",
      "page": "31"
    },
    {
      "title": "Public-sector social enterprise",
      "group": "Social enterprises",
      "level": "core",
      "definition": "A public-sector social enterprise is a government-owned or controlled trading organization that uses commercial income to pursue a public or social purpose.",
      "application": "A city-owned company rents affordable workspaces and uses part of the rental income to subsidize places for new enterprises.",
      "advantage": "A public mandate plus recurring trading income can keep facilities accessible to priority users.",
      "disadvantage": "Political priorities may change, while low user fees can leave too little cash for maintenance.",
      "page": "32"
    },
    {
      "title": "Cooperative",
      "group": "Social enterprises",
      "level": "core",
      "definition": "A cooperative is an organization jointly owned and democratically governed by members who share its benefits. Consumer cooperatives serve customers, worker cooperatives serve employees and producer cooperatives serve independent producers.",
      "application": "Small dairy farmers form a cooperative to buy a shared chilling tank and negotiate jointly with retailers.",
      "advantage": "Pooling output gives members bargaining power and access to equipment they could struggle to afford alone.",
      "disadvantage": "Members may disagree over prices or reinvestment, slowing decisions when buyers demand a quick response.",
      "page": "33"
    },
    {
      "title": "Non-governmental organization (NGO)",
      "group": "Social enterprises",
      "level": "core",
      "definition": "An NGO is an organization independent of government that works for a public or social cause. In this syllabus, the focus is on non-profit NGOs that reinvest any surplus in their mission.",
      "application": "A literacy NGO combines grants, donations and bookshop income to fund after-school reading groups.",
      "advantage": "Independence can help it focus on a community's needs and build trust with beneficiaries.",
      "disadvantage": "Short grant cycles and funding conditions can interrupt a programme or shift attention towards donor priorities.",
      "page": "35"
    }
  ],
  "1.3": [
    {
      "title": "Vision statement",
      "group": "Direction and planning",
      "level": "core",
      "definition": "A vision statement describes the future an organization hopes to create or the position it aspires to reach.",
      "application": "A bike-share operator's vision is a city where every resident can reach work by bicycle. It uses this aspiration to consider long-term expansion.",
      "advantage": "A clear destination can align employees and investors behind a long-term direction.",
      "disadvantage": "An ambitious vision gives little guidance on which neighbourhood to serve first or how to fund it.",
      "page": "39"
    },
    {
      "title": "Mission statement",
      "group": "Direction and planning",
      "level": "core",
      "definition": "A mission statement sets out an organization's current purpose, core values and the people it serves.",
      "application": "The bike-share operator defines its mission as providing dependable, low-cost journeys between rail stations and nearby homes.",
      "advantage": "The mission helps managers judge whether a proposal, such as late-night station pickups, serves their core users.",
      "disadvantage": "A broad promise can be interpreted differently by different departments and needs measurable objectives to guide action.",
      "page": "39"
    },
    {
      "title": "Strategic objectives",
      "group": "Direction and planning",
      "level": "core",
      "definition": "Strategic objectives are major, organization-wide outcomes that guide long-term decisions and resource allocation.",
      "application": "A regional grocer aims to earn a quarter of sales online within four years. It commits funds to delivery systems and distribution space.",
      "advantage": "A common long-term priority helps departments coordinate investment that takes several years to pay off.",
      "disadvantage": "Committing early can be costly if customer behaviour or technology changes before the project is complete.",
      "page": "45"
    },
    {
      "title": "Tactical objectives",
      "group": "Direction and planning",
      "level": "core",
      "definition": "Tactical objectives are shorter-term, specific goals that teams or departments pursue to help deliver a broader strategy.",
      "application": "To support the grocer's online strategy, the operations team aims to reduce picking time per order from 15 to 12 minutes this term.",
      "advantage": "A specific target makes progress visible and lets managers correct a delivery problem early.",
      "disadvantage": "Focusing only on faster picking may encourage mistakes, undermining the broader aim of keeping online customers.",
      "page": "45"
    },
    {
      "title": "Strategy and tactics",
      "group": "Direction and planning",
      "level": "core",
      "definition": "A strategy is the broad plan for reaching a longer-term objective. Tactics are shorter-term actions used to put a plan into practice.",
      "application": "To achieve regional sales growth, a roaster chooses a wholesale strategy. Its sales team offers trial deliveries to ten cafés in March as one tactic.",
      "advantage": "The distinction helps a manager connect a day-to-day action to the outcome the business is pursuing.",
      "disadvantage": "A tactic that wins short-term orders may undermine the strategy if repeated discounting makes wholesale margins too thin.",
      "page": "45, 52"
    },
    {
      "title": "SMART objectives",
      "group": "Direction and planning",
      "level": "core",
      "definition": "Hoang uses SMART for a target that is specific, measurable, agreed, realistic and time-bound. The people responsible agree on a result they can track against a deadline.",
      "application": "The café owner and the lunch team agree to raise daily sales from 80 lunches to 92 by the end of June. Spare kitchen capacity makes the target realistic.",
      "advantage": "A number, deadline and realistic baseline give the manager a clear basis for reviewing the result.",
      "disadvantage": "People may pursue what is easiest to measure. A lunch-volume target can encourage discounting that reduces profit.",
      "page": "41, 353"
    },
    {
      "title": "Growth objective",
      "group": "Common objectives",
      "level": "core",
      "definition": "A growth objective aims to increase business size, commonly measured through sales or market share. Managers can also track indicators such as workforce or branch numbers.",
      "application": "A gym wants to grow paying membership from 600 to 750 in one year. It uses membership because it directly drives subscription revenue.",
      "advantage": "Greater scale can spread an existing fixed cost, such as a lease, across more paying customers.",
      "disadvantage": "Growth can strain capacity. An overcrowded gym may lose members or need an expensive second site.",
      "page": "42"
    },
    {
      "title": "Profit objective",
      "group": "Common objectives",
      "level": "core",
      "definition": "A profit objective sets a target for the surplus of revenue over costs, either as an amount or as a proportion of sales.",
      "application": "A bakery forecasts $16,000 in sales and $13,000 in total costs for a month. It compares its expected $3,000 profit with its monthly target.",
      "advantage": "A profit target gives the owner a basis for assessing whether sales cover costs and generate funds for reinvestment.",
      "disadvantage": "A short-term target can tempt the owner to cut training or quality checks and damage future sales.",
      "formula": "Profit = total revenue − total costs",
      "page": "42"
    },
    {
      "title": "Protecting shareholder value",
      "group": "Common objectives",
      "level": "core",
      "definition": "Protecting shareholder value means safeguarding owners' financial interest in the business, including the value of their shares and potential dividends.",
      "application": "Directors compare a special dividend today with using that cash to replace unreliable equipment that threatens future earnings.",
      "advantage": "Considering future earnings alongside dividends can support investment that preserves owners' wealth over time.",
      "disadvantage": "Shareholders may have different time horizons. Investors seeking immediate income may resist a project with a long payback.",
      "page": "42"
    },
    {
      "title": "Ethical objectives",
      "group": "Common objectives",
      "level": "core",
      "definition": "Ethical objectives set targets based on principles of responsible conduct, such as fair treatment of workers or transparent dealings with customers.",
      "application": "A clothing retailer sets a deadline for verifying wage payments at every contracted factory and follows up if checks find unpaid overtime.",
      "advantage": "Clear targets make it easier to check conduct and can strengthen relationships with workers and customers.",
      "disadvantage": "Supplier checks cost time and money, and incomplete records may leave managers with a misleading impression.",
      "page": "42–43"
    },
    {
      "title": "Ethical code of practice",
      "group": "Responsibility",
      "level": "core",
      "definition": "An ethical code of practice states the standards of conduct an organization expects employees and business partners to follow.",
      "application": "A purchasing team gives bidders a policy on gifts, declares personal links to bidders and records the reasons for awarding each contract.",
      "advantage": "A written standard gives staff a consistent basis for handling offers and makes decisions easier to review.",
      "disadvantage": "Publishing a code costs little by itself. Without training, reporting and follow-up, staff may still disregard it.",
      "page": "52"
    },
    {
      "title": "Survival objective",
      "group": "Common objectives",
      "level": "core",
      "definition": "A survival objective gives priority to keeping a business operating through a start-up period or financial difficulty.",
      "application": "A seasonal activity centre negotiates a shorter lease and tracks weekly cash balances until bookings recover.",
      "advantage": "Preserving cash buys time to rebuild demand and prevents an otherwise viable venture from running out of money.",
      "disadvantage": "Cutting promotion or delaying maintenance for too long can weaken the eventual recovery.",
      "page": "45"
    },
    {
      "title": "Corporate social responsibility (CSR)",
      "group": "Responsibility",
      "level": "core",
      "definition": "CSR is the way a business builds responsibility for its social and environmental effects into decisions and relationships with stakeholders.",
      "application": "A delivery firm redesigns routes to cut emissions and changes delivery windows so that drivers can take breaks. It measures both outcomes.",
      "advantage": "Lower fuel use and staff turnover can offset some costs while improving outcomes for affected stakeholders.",
      "disadvantage": "Vehicles and new scheduling systems require upfront cash, and customers may resist changes to delivery times.",
      "page": "47–48"
    }
  ],
  "1.4": [
    {
      "title": "Stakeholders",
      "group": "Identifying stakeholders",
      "level": "core",
      "definition": "Stakeholders are people or groups that can influence an organization's decisions or experience their effects.",
      "application": "Before moving a workshop, managers identify owners, employees, customers, suppliers and residents who would face different consequences.",
      "advantage": "Identifying affected groups exposes costs that a financial forecast can miss, such as losing skilled workers to a longer commute.",
      "disadvantage": "Being affected does not guarantee influence. Residents with little bargaining power may still bear substantial costs.",
      "tradeoffLabels": [
        "What it reveals",
        "What to check"
      ],
      "page": "53"
    },
    {
      "title": "Internal stakeholders",
      "group": "Identifying stakeholders",
      "level": "core",
      "definition": "Internal stakeholders are members of the business, including owners or shareholders, directors, managers and employees.",
      "application": "Employees ask for predictable shifts, managers need enough staff at peak time and shareholders want a sustainable return.",
      "advantage": "Consulting these groups can reveal practical barriers before a decision is implemented.",
      "disadvantage": "Their interests can diverge. Higher wages improve employee income but can reduce funds available for dividends.",
      "tradeoffLabels": [
        "Value of consultation",
        "Potential conflict"
      ],
      "page": "53–54"
    },
    {
      "title": "External stakeholders",
      "group": "Identifying stakeholders",
      "level": "core",
      "definition": "External stakeholders are groups outside the business that have a direct interest in its activities, including customers, suppliers, creditors, competitors, pressure groups, government and local residents.",
      "application": "A warehouse expansion affects suppliers' delivery schedules, the lender's risk and residents' exposure to lorry noise.",
      "advantage": "Early consultation can identify changes, such as daytime deliveries, that reduce opposition and delays.",
      "disadvantage": "Groups may press for incompatible outcomes, and consulting many parties uses management time.",
      "tradeoffLabels": [
        "Value of consultation",
        "Potential conflict"
      ],
      "page": "55"
    },
    {
      "title": "Owners and shareholders",
      "group": "Stakeholder interests",
      "level": "core",
      "definition": "Owners provide equity and hold an ownership interest. Shareholders own shares in incorporated businesses and may receive dividends and voting rights.",
      "application": "A family with voting control supports retaining profit for a new workshop, while another investor wants a dividend this year.",
      "advantage": "Patient owners can approve investment that takes time to generate cash.",
      "disadvantage": "Pressure for immediate distributions can leave less money to replace equipment or develop products.",
      "tradeoffLabels": [
        "Possible contribution",
        "Possible tension"
      ],
      "page": "54"
    },
    {
      "title": "Managers and employees",
      "group": "Stakeholder interests",
      "level": "core",
      "definition": "Managers coordinate people and resources. Employees supply labour and skills in return for pay and typically seek security and fair working conditions.",
      "application": "A manager plans an evening shift to use machinery more fully. Skilled operators request a shift premium and transport home.",
      "advantage": "Operators can flag safety or scheduling problems that managers may overlook, improving implementation.",
      "disadvantage": "A change that meets a productivity target can disrupt employees' routines and lead to resistance.",
      "tradeoffLabels": [
        "Possible contribution",
        "Possible tension"
      ],
      "page": "53"
    },
    {
      "title": "Customers",
      "group": "Stakeholder interests",
      "level": "core",
      "definition": "Customers buy a business's output and have an interest in its price, quality, reliability and service.",
      "application": "A bakery's regular buyers report long queues, prompting the owner to introduce collection times for pre-orders.",
      "advantage": "Repeat purchases and feedback can lower the cost of finding customers and guide service improvements.",
      "disadvantage": "A demand for both lower prices and quicker service may squeeze margins if extra staff are needed.",
      "tradeoffLabels": [
        "Possible contribution",
        "Possible tension"
      ],
      "page": "55"
    },
    {
      "title": "Suppliers and lenders",
      "group": "Stakeholder interests",
      "level": "core",
      "definition": "Suppliers provide inputs and may offer trade credit. Lenders provide borrowed funds and expect repayment with interest under the agreed terms.",
      "application": "A café asks its wholesaler for 45 days to pay and its bank for a loan to buy ovens. Each evaluates the café's ability to pay.",
      "advantage": "Reliable relationships can improve access to stock and finance during expansion.",
      "disadvantage": "Delayed payments or excessive borrowing can weaken both relationships, causing tighter credit terms.",
      "tradeoffLabels": [
        "Possible contribution",
        "Possible tension"
      ],
      "page": "55"
    },
    {
      "title": "Government and local communities",
      "group": "Stakeholder interests",
      "level": "core",
      "definition": "Government sets rules, collects taxes and may support investment. Local communities experience effects such as employment, congestion, noise and environmental change.",
      "application": "A proposed distribution centre offers jobs and tax revenue, while neighbours expect more night-time traffic.",
      "advantage": "Listening to residents can produce a workable delivery schedule and sustain support for the business.",
      "disadvantage": "Some impacts cannot be resolved cheaply. A restricted delivery window may limit the warehouse's capacity.",
      "tradeoffLabels": [
        "Possible contribution",
        "Possible tension"
      ],
      "page": "56–57"
    },
    {
      "title": "Pressure groups",
      "group": "Stakeholder interests",
      "level": "core",
      "definition": "Pressure groups organize around a cause and seek to influence decisions, often through public campaigns or dialogue.",
      "application": "A river conservation group publishes water-quality data and asks a factory to improve wastewater treatment.",
      "advantage": "The group can bring specialist information and draw attention to impacts that managers underweight.",
      "disadvantage": "Disagreement over the evidence or the pace of change can create public conflict and delay an agreement.",
      "tradeoffLabels": [
        "Possible contribution",
        "Possible tension"
      ],
      "page": "55–56"
    },
    {
      "title": "Competitors",
      "group": "Stakeholder interests",
      "level": "core",
      "definition": "Competitors are rival organizations seeking some of the same customers. A firm’s decisions can affect their prices, sales and market share.",
      "application": "When a gym launches a cheaper off-peak membership, a nearby club compares its own cancellations before changing its offer.",
      "advantage": "Watching rivals can reveal a service gap or show whether the business is losing customers on price.",
      "disadvantage": "Automatically matching a price cut can start a price war and harm both firms’ margins.",
      "tradeoffLabels": [
        "Value of monitoring competitors",
        "Possible response risk"
      ],
      "page": "56"
    },
    {
      "title": "Stakeholder conflict",
      "group": "Resolving conflict",
      "level": "core",
      "definition": "Stakeholder conflict arises when a decision advances the interests of one group while threatening another group's objectives.",
      "application": "A factory considers automation. Owners expect lower unit costs, employees fear losing jobs and customers expect shorter delivery times. Managers cost retraining before deciding.",
      "advantage": "Negotiating a phased rollout with training can retain experienced staff and reduce disruption.",
      "disadvantage": "Compromise can reduce the immediate cost saving. Some employees may still face redundancy if available roles require different skills.",
      "tradeoffLabels": [
        "Benefit of managing conflict",
        "Cost of a compromise"
      ],
      "page": "58–59"
    },
    {
      "title": "Stakeholder mapping",
      "group": "Resolving conflict",
      "level": "core",
      "definition": "Stakeholder mapping places groups on a matrix according to their interest in a decision and their power to influence it. This helps managers plan consultation.",
      "application": "For a new depot, the project team works closely with the planning authority, keeps interested residents informed and monitors whether a residents’ coalition gains influence.",
      "advantage": "The map guides limited consultation time towards stakeholders who can shape the decision and highlights people who need information.",
      "disadvantage": "Power and interest can change. A low-power group can suffer serious harm, so the map alone cannot justify overlooking it.",
      "page": "62, 64"
    }
  ],
  "1.5": [
    {
      "title": "Reasons to grow",
      "group": "Growth decisions",
      "level": "core",
      "definition": "Growth increases a firm's scale. Common motives include gaining market share, spreading fixed costs, securing supplies and reducing dependence on one product or market.",
      "application": "A bicycle repair chain considers a second site because its first has a waiting list and central booking costs could be shared.",
      "advantage": "A second location can reach customers beyond the first shop's catchment and spread the cost of the booking team.",
      "disadvantage": "Expanding too soon ties cash up in rent and stock. The new site needs enough demand of its own.",
      "page": "72–73"
    },
    {
      "title": "Reasons to stay small",
      "group": "Growth decisions",
      "level": "core",
      "definition": "Staying small is a deliberate choice to limit expansion to protect control, personal service, flexibility or a profitable niche.",
      "application": "A tailor turns down a second shop after finding that customers pay a premium for fittings with the founder.",
      "advantage": "The owner can protect quality and adjust each order personally without adding layers of management.",
      "disadvantage": "Capacity depends heavily on the founder, and a small order volume may limit bargaining power with fabric suppliers.",
      "page": "74–75"
    },
    {
      "title": "Internal growth (organic growth)",
      "group": "Growth decisions",
      "level": "core",
      "definition": "Internal growth increases a business's scale using its own operations, for example by opening branches, adding capacity or developing products.",
      "application": "A retailer leases a second store and trains its own team using the first store's procedures.",
      "advantage": "A gradual rollout gives managers control over the pace of investment and the customer experience.",
      "disadvantage": "It takes time to recruit staff and attract customers. A rival could secure the best sites first.",
      "page": "69–70"
    },
    {
      "title": "External growth",
      "group": "Growth decisions",
      "level": "core",
      "definition": "External growth expands a business through a transaction or arrangement with another organization, such as an acquisition, joint venture or franchise agreement.",
      "application": "A food producer reaches a distant market by buying an established local distributor that already serves supermarkets.",
      "advantage": "An existing partner or target can provide customers, staff or distribution more quickly than building from scratch.",
      "disadvantage": "Due diligence, integration and sharing decisions can add cost or reduce control over how growth happens.",
      "page": "71"
    },
    {
      "title": "Internal economies of scale",
      "group": "Economies of scale",
      "level": "core",
      "definition": "Internal economies of scale occur when a firm’s own expansion lowers its long-run average cost per unit. Sources include specialist staff and equipment, bulk purchasing, cheaper finance and spreading marketing costs.",
      "application": "A bottler spending $18,000 a month on a line raises output from 6,000 to 9,000 bottles. Fixed cost per bottle falls from $3 to $2.",
      "advantage": "A lower unit cost can widen the margin or support a lower selling price.",
      "disadvantage": "The installed capacity must be used. An expensive line operating well below capacity can raise average cost.",
      "formula": "Average cost per unit = total cost ÷ quantity produced",
      "page": "65–66"
    },
    {
      "title": "Purchasing economies",
      "group": "Economies of scale",
      "level": "core",
      "definition": "Purchasing economies are internal cost savings from buying inputs in large quantities or negotiating better terms as a major customer.",
      "application": "A retailer orders 10,000 boxes for $0.60 each instead of paying $0.80 on small orders. It compares $2,000 in gross savings with storage costs.",
      "advantage": "A lower input price cuts cost per sale while the retailer keeps its selling price.",
      "disadvantage": "Cash is tied up in inventory. Damaged or obsolete boxes can use up the saving.",
      "page": "67"
    },
    {
      "title": "Technical and managerial economies",
      "group": "Economies of scale",
      "level": "core",
      "definition": "Technical economies arise when greater output makes more efficient equipment viable. Managerial economies arise when scale supports specialists whose work raises efficiency.",
      "application": "A larger bakery can fill an automated oven each shift and hire a scheduling specialist to reduce overtime.",
      "advantage": "Lower waste and labour time can reduce average cost as production expands.",
      "disadvantage": "The oven and specialist create fixed commitments. A fall in orders makes those resources expensive per loaf.",
      "page": "66–67"
    },
    {
      "title": "Financial economies",
      "group": "Economies of scale",
      "level": "core",
      "definition": "Large firms can sometimes borrow on better terms because lenders see less risk or compete for their business.",
      "application": "If a bank lowers the rate on a manufacturer’s $200,000 one-year loan from 7% to 5%, annual simple interest falls by $4,000 at the same balance.",
      "advantage": "Cheaper finance can reduce the cost of equipment used across a large number of units.",
      "disadvantage": "Size alone cannot secure a low rate. Heavy borrowing or uncertain cash flow may outweigh the firm’s scale.",
      "page": "66"
    },
    {
      "title": "Marketing economies",
      "group": "Economies of scale",
      "level": "core",
      "definition": "Marketing economies arise when scale spreads promotion or selling costs across more units or cuts the cost of each transaction.",
      "application": "A chain uses one $12,000 campaign for 20 branches. The promotional cost averages $600 per branch before any local advertising.",
      "advantage": "Reusing creative work or selling a large order to one customer can lower the selling cost per unit.",
      "disadvantage": "A common message may be ineffective in some locations, and adapting it can reduce the saving.",
      "page": "67"
    },
    {
      "title": "Specialization economies",
      "group": "Economies of scale",
      "level": "core",
      "definition": "Division of labour can lower unit costs when a large enough operation lets workers focus on tasks they can perform efficiently.",
      "application": "A busy bicycle factory assigns wheel-building to a trained team. Higher output per hour lets labour cost per wheel fall.",
      "advantage": "Practice and specialist training can improve speed and reduce the number of faulty units.",
      "disadvantage": "Highly repetitive roles or reliance on a single skilled team can undermine motivation or hold up the line.",
      "page": "67"
    },
    {
      "title": "Risk-bearing economies",
      "group": "Economies of scale",
      "level": "core",
      "definition": "A larger business with different products or markets can spread risk and share certain overheads across its operations.",
      "application": "A sports group uses common research facilities for cycling and running products. Stronger cycling sales help cover shared costs during a weak running season.",
      "advantage": "Income from one product can support the business while another is temporarily underperforming.",
      "disadvantage": "The protection is weaker when demand across all products falls together or management overstretches itself.",
      "page": "67, 87"
    },
    {
      "title": "Optimal level of output",
      "group": "Economies of scale",
      "level": "core",
      "definition": "The optimal scale of production is the output at which average cost per unit reaches its lowest point.",
      "application": "A firm’s average cost is $9 at 1,000 units, $7 at 2,000 and $8 at 3,000. Of these choices, 2,000 gives the lowest unit cost.",
      "advantage": "Comparing average cost at different outputs helps identify when further expansion stops improving cost efficiency.",
      "disadvantage": "The lowest-cost output may exceed the quantity customers will buy. A profit decision also needs revenue and demand data.",
      "page": "65–66"
    },
    {
      "title": "External economies of scale",
      "group": "Economies of scale",
      "level": "core",
      "definition": "External economies of scale are reductions in a firm’s unit costs that arise outside it, often through industry growth or a favourable location with specialist suppliers, infrastructure or skills.",
      "application": "Several electronics businesses attract specialist testing labs to the area. A small local producer can now test components nearby for less.",
      "advantage": "Even a small firm can benefit from industry infrastructure without paying to create it alone.",
      "disadvantage": "Local rivals can enjoy the same saving, so it may give the firm little relative cost advantage.",
      "page": "67"
    },
    {
      "title": "Internal diseconomies of scale",
      "group": "Diseconomies of scale",
      "level": "core",
      "definition": "Internal diseconomies of scale occur when a firm's own expansion causes long-run average cost to rise, often through communication problems, bureaucracy or weaker motivation.",
      "application": "As a chain adds branches, repair requests need three approvals. Breakdown delays reduce output per paid hour.",
      "advantage": "Tracking approval delays and rework can show where local decision-making would save money.",
      "disadvantage": "Extra management layers and slower decisions can raise the cost of each sale even as total revenue grows.",
      "tradeoffLabels": [
        "How to diagnose it",
        "Effect on the business"
      ],
      "page": "68"
    },
    {
      "title": "External diseconomies of scale",
      "group": "Diseconomies of scale",
      "level": "core",
      "definition": "External diseconomies of scale are increases in a firm's unit costs caused by expansion of the industry around it, such as congestion or competition for labour and land.",
      "application": "New distribution centres crowd an industrial estate. The original operator must pay drivers more and loses trips to traffic.",
      "advantage": "Comparing wages and journey times across sites helps managers distinguish a regional problem from poor internal scheduling.",
      "disadvantage": "The firm may need to absorb higher costs or relocate even if its own operations are well managed.",
      "tradeoffLabels": [
        "How to diagnose it",
        "Effect on the business"
      ],
      "page": "69"
    },
    {
      "title": "Merger",
      "group": "Combining businesses",
      "level": "core",
      "definition": "A merger is an agreed combination in which two or more businesses bring their operations together to form a single organization.",
      "application": "Two regional delivery companies combine their networks and remove overlapping depots to reduce empty return journeys.",
      "advantage": "A larger network can share facilities and give customers more destinations through one provider.",
      "disadvantage": "Integrating pay scales, software and management roles takes time and can trigger staff departures.",
      "page": "76"
    },
    {
      "title": "Acquisition",
      "group": "Combining businesses",
      "level": "core",
      "definition": "In Hoang’s terminology, an acquisition is a purchase of a controlling stake that the target company’s board accepts. The acquired business can keep its brand.",
      "application": "An online sports shop’s board agrees to sell a controlling stake to a retailer. The retailer gains the shop’s customers, warehouse system and team.",
      "advantage": "The buyer obtains a functioning operation and can enter the market faster than building one internally.",
      "disadvantage": "Paying too much or losing key employees can wipe out the expected benefit.",
      "page": "77"
    },
    {
      "title": "Takeover",
      "group": "Combining businesses",
      "level": "core",
      "definition": "In this textbook, a takeover is a purchase that gives one company control of another without the target board’s prior agreement. The bid is hostile to the board.",
      "application": "A food group wins enough voting shares to control a rival despite its board advising shareholders to reject the offer.",
      "advantage": "The buyer can direct the target's assets and strategy once it has control.",
      "disadvantage": "A contested bid can require a high offer price and damage cooperation after the deal.",
      "page": "79"
    },
    {
      "title": "Horizontal integration",
      "group": "Combining businesses",
      "level": "core",
      "definition": "Horizontal integration joins businesses operating at the same stage of production in the same industry.",
      "application": "A regional dairy buys another milk processor serving adjacent towns so one chilled distribution network can serve both.",
      "advantage": "Combining similar activities can spread fixed costs and strengthen bargaining with supermarkets.",
      "disadvantage": "Overlapping roles may cause redundancies, while competition concerns can delay a large deal.",
      "page": "77"
    },
    {
      "title": "Vertical integration",
      "group": "Combining businesses",
      "level": "core",
      "definition": "Vertical integration extends ownership along a supply chain. Backward integration moves towards suppliers and forward integration moves towards customers.",
      "application": "A roaster buying a coffee farm integrates backward. Buying a chain of cafés integrates forward.",
      "advantage": "Owning a supplier can improve reliability. Owning outlets can improve access to customers and their feedback.",
      "disadvantage": "Capital becomes tied up in a new stage where the firm may lack expertise or where an independent specialist was more efficient.",
      "page": "77"
    },
    {
      "title": "Lateral integration",
      "group": "Combining businesses",
      "level": "core",
      "definition": "Lateral integration brings together firms with related activities or products that do not compete directly with each other.",
      "application": "A climbing-shoe manufacturer buys a maker of climbing harnesses. The products serve similar customers but meet different needs.",
      "advantage": "The group can cross-sell complementary products through the same specialist shops and share some promotional costs.",
      "disadvantage": "Customers may still prefer specialist brands, and staff may know little about the other product’s design requirements.",
      "page": "77, 87"
    },
    {
      "title": "Conglomerate integration",
      "group": "Combining businesses",
      "level": "core",
      "definition": "Conglomerate integration brings together businesses in unrelated industries, creating a group with different products and markets.",
      "application": "A refrigeration-equipment company buys a chain of language schools to diversify its sources of earnings.",
      "advantage": "A downturn in equipment orders may be offset by school income if demand in the two markets moves differently.",
      "disadvantage": "The buyer may have little expertise in education, and few operations may be shared across the two businesses.",
      "page": "78, 86"
    },
    {
      "title": "Synergy",
      "group": "Combining businesses",
      "level": "core",
      "definition": "Synergy is the extra value or efficiency that two operations can generate together beyond what they could produce separately.",
      "application": "Two couriers combine half-empty routes. Serving the same customers now takes eight van trips instead of twelve, saving four trips’ fuel and driver time.",
      "advantage": "A genuine saving or new source of revenue can help justify the cost of combining the operations.",
      "disadvantage": "Expected gains may be overstated. Combining booking systems or losing customers can absorb the saving.",
      "page": "77, 87"
    },
    {
      "title": "Demerger",
      "group": "Combining businesses",
      "level": "core",
      "definition": "A demerger separates part of a company into an independent business, for example when a previous combination creates persistent conflict or weakens efficiency.",
      "application": "A group separates a factory from a retail division after managers find that their customers, investment needs and routines seldom overlap.",
      "advantage": "Separate management can respond to each business’s priorities and make performance easier for owners to judge.",
      "disadvantage": "Each business may have to replace shared finance or purchasing functions, increasing costs.",
      "page": "86"
    },
    {
      "title": "Joint venture",
      "group": "Working with partners",
      "level": "core",
      "definition": "In Hoang’s treatment of a joint venture, independent businesses set up a separate legal entity for a project and share control, investment, risk and returns.",
      "application": "A sportswear firm and a sensor maker jointly fund a company to develop a smart training shirt.",
      "advantage": "The partners combine complementary expertise and each bears only part of the development cost.",
      "disadvantage": "Disagreement over design rights or the timing of the launch can stall the project.",
      "page": "80–81"
    },
    {
      "title": "Strategic alliance",
      "group": "Working with partners",
      "level": "core",
      "definition": "A strategic alliance is an agreement in which independent businesses cooperate on shared objectives while keeping their own identities. The partnership can run through a contract.",
      "application": "A rail company and a hotel chain create a joint booking offer, each continuing to sell its own services.",
      "advantage": "Each gains access to the other's customers without paying for a merger or a jointly owned business.",
      "disadvantage": "A poor hotel stay may harm perceptions of the rail brand even though the railway cannot manage the hotel.",
      "page": "82"
    },
    {
      "title": "Franchising",
      "group": "Working with partners",
      "level": "core",
      "definition": "A franchisor permits a franchisee to run an outlet using its name and business system under agreed conditions, usually in return for fees or royalties.",
      "application": "A noodle chain licenses a local owner who funds a new branch, follows recipes and pays a percentage of sales.",
      "advantage": "The franchisor can expand with franchisees' capital. The franchisee gains a known brand and training.",
      "disadvantage": "The franchisor depends on outlet quality. The franchisee sacrifices flexibility and pays fees even when margins are thin.",
      "page": "83–84"
    },
    {
      "title": "Ansoff matrix",
      "group": "Growth toolkit",
      "level": "core",
      "definition": "The Ansoff matrix classifies growth directions by whether the products and markets involved are existing or new to the firm.",
      "application": "A stationery maker compares selling more existing pens to current customers with developing a new product for an unfamiliar market.",
      "advantage": "The four routes make it easier to identify which market knowledge or product capability a proposal requires.",
      "disadvantage": "The matrix alone cannot show demand, cost or profitability. Managers need case evidence before ranking the options.",
      "page": "611–612"
    },
    {
      "title": "Market penetration",
      "group": "Growth toolkit",
      "level": "core",
      "definition": "Market penetration aims to sell more of an existing product in an existing market, for example by winning rival customers or increasing purchase frequency.",
      "application": "A gym offers existing local members a discounted second weekly class to fill spare places.",
      "advantage": "The firm knows its customers and can use its current facilities to generate extra sales.",
      "disadvantage": "Discounts can reduce margins or simply reward customers who would have paid the full price.",
      "page": "611"
    },
    {
      "title": "Market development",
      "group": "Growth toolkit",
      "level": "core",
      "definition": "Market development takes an existing product to a new market, such as a new geographic area or customer segment.",
      "application": "A reusable-bottle maker that sells to hikers offers the same bottles to schools through a new distributor.",
      "advantage": "An established product can generate new revenue without a full redesign.",
      "disadvantage": "A new segment may have different budgets or buying criteria, and a distributor may demand a margin.",
      "page": "612"
    },
    {
      "title": "Product development",
      "group": "Growth toolkit",
      "level": "core",
      "definition": "Product development introduces a new or substantially improved product to a market the business already serves.",
      "application": "A running brand develops a winter training shoe for its existing club customers and tests prototypes with those clubs.",
      "advantage": "Existing customer relationships can lower the cost of testing the idea and reaching early buyers.",
      "disadvantage": "Design and tooling costs are committed before demand is certain, and the new model may replace sales of an existing shoe.",
      "page": "612"
    },
    {
      "title": "Diversification",
      "group": "Growth toolkit",
      "level": "core",
      "definition": "In the Ansoff matrix, diversification means offering a new product to a market that is also new to the business.",
      "application": "A textbook printer develops event ticketing software for sports venues. Both the service and the buyers are unfamiliar.",
      "advantage": "A successful move creates a new income source and can reduce dependence on the original market.",
      "disadvantage": "The firm must learn about both the product and its buyers, increasing the chance of expensive mistakes.",
      "page": "612"
    }
  ],
  "4.1": [
    {
      "title": "Marketing",
      "page": "341–342, 352",
      "group": "Orientation",
      "level": "core",
      "definition": "Marketing identifies and anticipates customer needs, then coordinates the product, price, promotion and distribution decisions used to satisfy those needs and meet the organisation’s objectives.",
      "application": "A cinema learns that parents avoid late screenings, adds an early family showing and compares attendance with the previous month.",
      "advantage": "Changing the timetable addresses a reason families stay away. Extra tickets may be sold using a screen the cinema already owns.",
      "disadvantage": "The early showing only pays if the additional ticket and snack income covers staff and cleaning costs."
    },
    {
      "title": "Market orientation",
      "page": "342",
      "group": "Orientation",
      "level": "core",
      "definition": "A market-oriented business starts with evidence about customer needs and uses it to shape the offer.",
      "application": "A badminton shop learns that beginners find racket weights confusing. It tests a starter range with clearly marked weights and a trial session.",
      "advantage": "The trial addresses a specific barrier to purchase, which can increase first-time sales.",
      "disadvantage": "Surveying existing shoppers may miss beginners who avoid the shop altogether. Acting on that evidence alone could favour experienced players."
    },
    {
      "title": "Product orientation",
      "page": "343",
      "group": "Orientation",
      "level": "core",
      "definition": "A product-oriented business starts with what it can design or make particularly well, then seeks buyers for it.",
      "application": "An audio company develops a small speaker using a new acoustic design, then demonstrates it to potential buyers.",
      "advantage": "Technical expertise can produce an improvement customers would have struggled to describe in a survey.",
      "disadvantage": "The engineering team could spend a year perfecting features listeners will pay little extra to obtain."
    },
    {
      "title": "Market size",
      "page": "344, 352",
      "group": "Market measures",
      "level": "core",
      "definition": "Market size is the combined sales of all sellers in a defined market over a stated period. It can be measured in money or units.",
      "application": "During one year, three local repair firms earn $180,000, $120,000 and $100,000 from bicycle repairs. If they are the only sellers, the local market is worth $400,000.",
      "advantage": "The total gives a shop a denominator for calculating market share and a starting point for estimating potential sales.",
      "disadvantage": "Including bicycle sales or excluding mobile mechanics changes the total. The product, geography and time period must match the decision.",
      "tradeoffLabels": [
        "What it shows",
        "What it misses"
      ]
    },
    {
      "title": "Market share",
      "page": "344–345",
      "group": "Market measures",
      "level": "core",
      "definition": "Market share is the percentage of a defined market’s sales revenue earned by one business. It can also be measured by the percentage of units sold when a case gives sales volumes.",
      "application": "A shop earns $120,000 of the $800,000 spent on rackets in its city this year. Its value share is $120,000 ÷ $800,000 × 100 = 15%. A rise from 12% to 15% is 3 percentage points.",
      "advantage": "Share gives the owner a way to measure performance against competing sellers even when the whole market is growing.",
      "disadvantage": "Discounts can win enough orders to raise share while cutting profit per racket. Check profit margins before concluding that the shop is better off.",
      "formula": "Market share by value (%) = business sales revenue ÷ total market sales revenue × 100",
      "tradeoffLabels": [
        "What it shows",
        "What it misses"
      ]
    },
    {
      "title": "Market growth",
      "page": "345, 352",
      "group": "Market measures",
      "level": "core",
      "definition": "Market growth measures the percentage change in total sales across a market between two periods.",
      "application": "Citywide racket sales increase from 20,000 to 23,000 units in a year. Growth is 3,000 ÷ 20,000 × 100 = 15%. A shop growing by only 5% loses volume share.",
      "advantage": "The market growth rate gives the shop a benchmark for interpreting its own increase in sales.",
      "disadvantage": "In a calculation based on sales revenue, inflation can lift the result even when the number of rackets sold is flat.",
      "formula": "Market growth (%) = (new market sales − previous market sales) ÷ previous market sales × 100",
      "tradeoffLabels": [
        "What it shows",
        "What it misses"
      ]
    },
    {
      "title": "Market leadership and the importance of share",
      "page": "346",
      "group": "Competitive position",
      "level": "hl",
      "definition": "A market leader has the largest share of a defined market. The value of that position depends on how it affects costs, bargaining power and profit.",
      "application": "A breakfast brand with 32% of local cereal sales leads its nearest rival at 27%. It uses its sales volume to negotiate more supermarket shelf space.",
      "advantage": "More shelf space can make the brand easier to find, defending its sales and strengthening future bargaining power.",
      "disadvantage": "Funding deep discounts to defend a five-point lead can cost more than the extra sales earn. Compare margin and repeat purchases before recommending them."
    },
    {
      "title": "Market concentration ratio",
      "page": "346, 352",
      "group": "Market measures",
      "level": "hl",
      "definition": "A concentration ratio is the combined market share of a specified number of the largest firms in a market.",
      "application": "The three largest local cinemas have revenue shares of 32%, 25% and 18%. The three-firm concentration ratio is 75%.",
      "advantage": "A cinema considering entry can see how much of the market the leading chains already control and investigate their buying or advertising power.",
      "disadvantage": "The same 75% could describe three equally strong chains or one dominant chain and two smaller ones. The ratio also hides differences between towns.",
      "formula": "Three-firm concentration ratio (%) = share of largest firm + share of second-largest firm + share of third-largest firm",
      "tradeoffLabels": [
        "What it shows",
        "What it misses"
      ]
    }
  ],
  "4.2": [
    {
      "title": "Marketing planning",
      "page": "353–354",
      "group": "The marketing plan",
      "level": "core",
      "definition": "Marketing planning sets a marketing objective, chooses a strategy for reaching it, allocates a budget and decides how to measure progress. The marketing plan records those decisions.",
      "application": "A swim school wants 40 additional weekday bookings in eight weeks. It budgets $600 for a local campaign and checks bookings against the target every Friday.",
      "advantage": "A measurable target lets the manager stop spending on an advertisement that attracts clicks but produces few bookings.",
      "disadvantage": "A timetable built around spare pool capacity becomes unrealistic if a lane closes for repairs. The plan needs a review point."
    },
    {
      "title": "Marketing audit",
      "page": "353–354, 370",
      "group": "The marketing plan",
      "level": "core",
      "definition": "A marketing audit reviews a firm’s marketing activities and its internal and external conditions before managers decide what to change.",
      "application": "A swim school compares bookings, local competitors’ timetables and feedback from parents. It finds empty morning lessons alongside a waiting list for evenings.",
      "advantage": "The school can try a timetable change before paying for advertising that would bring more enquiries at the wrong time.",
      "disadvantage": "Collecting fresh competitor and customer data takes time. Findings could change when a rival opens another pool."
    },
    {
      "title": "Market segmentation",
      "page": "354–355",
      "group": "Selecting customers",
      "level": "core",
      "definition": "Segmentation divides a broad market into groups who may respond to different offers. A consumer profile describes a group’s typical characteristics, such as location, age, lifestyle or buying habits.",
      "application": "A cycle shop uses purchase histories to separate daily commuters from weekend riders. It tests a fast weekday repair slot with commuters.",
      "advantage": "Commuters value a predictable collection time. Matching the offer to that need makes the promotion more relevant.",
      "disadvantage": "A customer can commute and race. Rigid segments can hide demand for both services and produce misleading estimates."
    },
    {
      "title": "Targeting and the target market",
      "page": "354–355, 360",
      "group": "Selecting customers",
      "level": "core",
      "definition": "Targeting means selecting the customer group or groups a business will serve after comparing their attractiveness and its own resources.",
      "application": "A repair shop compares 600 commuters near a station with 100 local racing enthusiasts. It targets commuters whose bikes it can service during a workday.",
      "advantage": "Focusing a limited advertising budget at the station reaches potential customers at a relevant moment.",
      "disadvantage": "Depending on commuters exposes the shop to a rise in remote working. The number of potential customers alone does not establish profitability."
    },
    {
      "title": "Market positioning",
      "page": "354, 360, 370",
      "group": "Positioning",
      "level": "core",
      "definition": "Positioning is how customers see an offer relative to competing offers on attributes they value. Repositioning is a deliberate effort to change that perception.",
      "application": "A bakery promises a three-minute breakfast for commuters, locates its counter near the station entrance and displays collection times.",
      "advantage": "A clear promise gives commuters a reason to choose the bakery when several stalls sell similar food.",
      "disadvantage": "Long queues would undermine the promised speed. Promotion can create expectations that operations must meet."
    },
    {
      "title": "Position map (perceptual map)",
      "page": "360",
      "group": "Positioning",
      "level": "core",
      "definition": "A position map plots competing offers on two attributes using customers’ perceptions. It helps a business compare how buyers see the alternatives.",
      "application": "A café asks students to rate local outlets on price and waiting time. It labels both axes, plots each outlet and investigates an empty low-price, fast-service corner.",
      "advantage": "A visible gap directs the café towards a specific question to test with customers.",
      "disadvantage": "The gap could reflect the cost of fast service. Two axes can also hide an attribute such as taste that drives the final purchase."
    },
    {
      "title": "Niche marketing",
      "page": "363",
      "group": "Market coverage",
      "level": "core",
      "definition": "Niche marketing serves a narrow segment whose particular requirements justify a specialised offer.",
      "application": "A small shoemaker sells extra-wide dance shoes to dancers who struggle to find a suitable fit.",
      "advantage": "Customers with few suitable alternatives may pay enough to cover small production runs.",
      "disadvantage": "The number of potential orders is limited. Losing one dance-school contract could leave skilled staff underused."
    },
    {
      "title": "Mass marketing",
      "group": "Market coverage",
      "level": "core",
      "definition": "Mass marketing offers a broadly similar product to a wide market, relying on needs shared across many customer groups.",
      "application": "A paper supplier makes one standard pack of printer paper and distributes it through national supermarkets.",
      "advantage": "Large runs of one pack reduce machine changeovers and can lower production cost per pack.",
      "disadvantage": "Serving supermarkets requires scale and competitive prices. A small supplier may be unable to earn enough on each pack.",
      "page": "364–365"
    },
    {
      "title": "Unique selling proposition (USP)",
      "page": "365",
      "group": "Differentiation",
      "level": "core",
      "definition": "A USP is a specific benefit that gives the target customer a reason to choose one offer over competing alternatives.",
      "application": "A phone-repair shop promises a battery swap in 30 minutes or the labour charge is refunded. Nearby shops offer only next-day collection.",
      "advantage": "A measurable promise is easy for customers to compare and for the shop to advertise.",
      "disadvantage": "A competitor can copy the guarantee, and missed deadlines cost the shop money. The promise lasts only while technicians can consistently deliver it."
    },
    {
      "title": "Differentiation",
      "page": "366",
      "group": "Differentiation",
      "level": "core",
      "definition": "Differentiation makes an offer distinct in ways target buyers value, through features, design, service, distribution or reputation.",
      "application": "A lunch-delivery company prints a verified, meal-specific ingredient list on every box for customers with dietary requirements.",
      "advantage": "Reliable information can encourage repeat orders and reduce the need to compete through discounts.",
      "disadvantage": "Keeping lists accurate across recipe changes takes staff time. A poorly controlled change could erase customers’ trust."
    }
  ],
  "4.3": [
    {
      "title": "Sales forecasting",
      "page": "371, 373–374",
      "group": "Forecasting sales",
      "level": "hl",
      "definition": "A sales forecast estimates the quantity or value a business expects to sell in a future period. It draws on past results, current information and explicit assumptions.",
      "application": "A sports shop expects 120 team orders in September at $35 each, so it forecasts $4,200 of sales revenue. Its stock order still has to allow for existing inventory.",
      "advantage": "Purchasing and finance can coordinate stock and cash before the school season begins.",
      "disadvantage": "If two schools cancel, money is tied up in unsold kit. Test a lower-sales scenario before committing the full budget.",
      "formula": "Forecast sales revenue = forecast quantity × expected selling price"
    },
    {
      "title": "Trend extrapolation",
      "page": "371, 721",
      "group": "Forecasting sales",
      "level": "hl",
      "definition": "Extrapolation extends a pattern observed in past sales into a future period. Its reliability depends on the pattern continuing.",
      "application": "A lunch stall sells 220, 240 and 260 meals in successive comparable weeks. Extending the increase of 20 gives a forecast of 280 meals for week four.",
      "advantage": "A short forecast helps the owner order ingredients using a visible pattern that can be checked against actual sales.",
      "disadvantage": "A competing stall opening in week four changes local demand. The old trend may then overstate the number of meals needed."
    },
    {
      "title": "Time-series analysis",
      "page": "372, 376",
      "group": "Forecasting tools",
      "level": "hl",
      "definition": "Time-series analysis uses sales recorded at regular intervals to identify the underlying trend and recurring fluctuations.",
      "application": "A tutoring centre charts monthly bookings over three years. It compares each September with earlier Septembers before deciding whether its new course increased demand.",
      "advantage": "Comparing equivalent months helps the manager separate a recurring exam-season peak from growth that could justify another permanent tutor.",
      "disadvantage": "A change in the exam timetable can break the old pattern. Three years of observations still may not reflect next year’s demand."
    },
    {
      "title": "Seasonality",
      "group": "Interpreting forecasts",
      "level": "hl",
      "definition": "Seasonality is a recurring calendar-related pattern in sales, such as stronger demand in a particular month or day of the week.",
      "application": "A uniform shop usually sells 40% more in August than in a typical month. If its baseline is 500 shirts, its seasonal estimate is 500 × 1.40 = 700.",
      "advantage": "Recognising the peak lets the shop bring in temporary staff and stock before customers arrive.",
      "disadvantage": "A school moving its term date can shift the peak. Applying last year’s uplift mechanically could leave stock in the wrong month.",
      "tradeoffLabels": [
        "How it helps",
        "Where it can mislead"
      ],
      "page": "372, 376"
    },
    {
      "title": "Cyclical and random variations",
      "page": "372, 376",
      "group": "Interpreting forecasts",
      "level": "hl",
      "definition": "Cyclical variations are swings in sales associated with the wider economic cycle and may span several years. Random variations are irregular changes caused by unexpected events.",
      "application": "A furniture maker separates slower sales during an economic downturn from an isolated month when flooding closed its showroom.",
      "advantage": "Distinguishing a longer decline from a one-off closure helps it decide whether to cut next year’s capacity or wait for trading to resume.",
      "disadvantage": "A short series may contain only one downturn. It gives little evidence of the length of the next cycle or the timing of another flood.",
      "tradeoffLabels": [
        "How it helps",
        "Where it can mislead"
      ]
    },
    {
      "title": "Simple linear regression",
      "page": "376, 717",
      "group": "Forecasting tools",
      "level": "hl",
      "definition": "Simple linear regression fits a straight line to paired observations to estimate how an outcome varies with one explanatory variable.",
      "application": "A food stall plots event attendance against meals sold. Its fitted line predicts 30 + 0.12 × attendance. At 1,000 visitors the estimate is 150 meals.",
      "advantage": "The plotted points and line provide an estimate that can be checked against how tightly earlier events cluster around the line.",
      "disadvantage": "Weather may affect attendance and food sales together. Predicting for a crowd much larger than any observed also increases uncertainty.",
      "formula": "Predicted sales = intercept + slope × explanatory variable"
    },
    {
      "title": "Market research and test marketing",
      "group": "Forecasting sales",
      "level": "hl",
      "definition": "A business can estimate future sales by researching buyers or introducing a product in a limited market. A test market provides evidence of actual orders at a chosen price.",
      "application": "Before making 2,000 club shirts, a supplier offers two comparable clubs the new design at $30. It uses paid orders and the clubs’ membership figures to estimate likely demand elsewhere.",
      "advantage": "Testing the design and price together gives a new product a sales estimate when there is no previous sales history.",
      "disadvantage": "Two enthusiastic clubs could overstate demand elsewhere. A wider trial takes longer and alerts competing suppliers to the launch.",
      "page": "371, 375–376"
    }
  ],
  "4.4": [
    {
      "title": "Market research",
      "page": "377–378, 391",
      "group": "Research design",
      "level": "core",
      "definition": "Market research gathers and analyses evidence about buyers and markets to inform decisions. Ad hoc research answers a particular question once. Continuous research tracks change over time.",
      "application": "A cinema must decide whether to add early screenings. It checks past bookings, asks nearby families about timing, then trials one screening before extending the schedule.",
      "advantage": "Combining customers’ stated preferences with observed ticket sales reduces the chance of hiring staff for an empty screen.",
      "disadvantage": "Research takes time and money. If only a few seats are at risk, a small trial may cost less than a large survey."
    },
    {
      "title": "Primary research",
      "page": "378",
      "group": "Research design",
      "level": "core",
      "definition": "Primary research gathers new, first-hand information for the specific decision a business is making.",
      "application": "A juice bar wants to choose between two recipes. It runs a blind taste test and records which version each participant would buy at the proposed price.",
      "advantage": "The bar can compare its own recipes under the exact conditions that matter for its choice.",
      "disadvantage": "Recruitment and testing cost time. People accepting free samples may differ from customers who would buy a full drink."
    },
    {
      "title": "Secondary research",
      "page": "382–383",
      "group": "Research design",
      "level": "core",
      "definition": "Secondary research uses information that already exists, whether it comes from the business’s own records or an outside source.",
      "application": "Before paying for interviews, a footwear retailer compares its sales records with a published report on local sports participation.",
      "advantage": "The retailer can narrow its questions quickly and use its fieldwork budget where published evidence is weak.",
      "disadvantage": "Last year’s national participation rate may say little about this year’s demand in the retailer’s neighbourhood."
    },
    {
      "title": "Random sampling",
      "page": "388",
      "quote": "Random sampling involves giving everyone in the population an equal chance of being selected.",
      "group": "Sampling methods",
      "level": "core",
      "definition": "In simple random sampling, chance decides who is chosen from a complete list of the target population. Each member has the same chance of selection.",
      "application": "A sports centre numbers all 1,200 active members and uses a random-number generator to select 120 distinct IDs for a survey on opening hours.",
      "advantage": "With a complete member list, the centre can draw 120 names in seconds. Every member has a 10% chance of selection, so staff preferences cannot determine who is invited.",
      "disadvantage": "Chance could leave very few late-night users in the sample. Inviting more members can improve coverage, but collecting and following up their responses takes time and money."
    },
    {
      "title": "Quota sampling",
      "page": "388",
      "group": "Sampling methods",
      "level": "core",
      "definition": "Quota sampling sets target numbers for selected groups. Researchers then choose available participants within each group until every quota is filled.",
      "application": "A cinema wants its 100 responses to reflect its audience, 60% students and 40% other customers. Staff recruit 60 students and 40 other customers at the exit.",
      "advantage": "Staff can quickly fill both quotas at the exit, giving the cinema student and non-student views on the price change without needing a complete customer list.",
      "disadvantage": "If staff work only at the evening screening, their choices can still overrepresent evening visitors within both quotas."
    },
    {
      "title": "Convenience sampling",
      "page": "389",
      "group": "Sampling methods",
      "level": "core",
      "definition": "Convenience sampling collects responses from the people a researcher can reach most easily.",
      "application": "A bakery asks the first 25 people available at its counter on Monday morning to taste a new roll.",
      "advantage": "The owner can get feedback cheaply in one morning, then decide whether the recipe deserves a larger trial before committing to a full batch.",
      "disadvantage": "Weekday morning customers may have different tastes from families visiting at weekends. The result is weak evidence for a chain-wide launch."
    },
    {
      "title": "Population, sampling frame and bias",
      "group": "Sampling methods",
      "level": "core",
      "definition": "The population is everyone the business wants to study. The sampling frame is the list or source used to select a sample. Bias can arise if that source systematically excludes part of the population.",
      "application": "A shop wants all customers’ views but initially samples only loyalty-card holders. It also recruits cash-paying visitors to hear from occasional buyers.",
      "advantage": "Checking who is missing can reveal why apparent demand for a subscriber discount is unusually high.",
      "disadvantage": "Adding more loyalty-card holders would still exclude visitors without cards, even if the resulting sample were much larger.",
      "tradeoffLabels": [
        "Why check coverage",
        "What size cannot fix"
      ],
      "page": "388–389"
    },
    {
      "title": "Qualitative research",
      "page": "386",
      "group": "Types of data",
      "level": "core",
      "definition": "Qualitative research gathers descriptive evidence, such as explanations, opinions and accounts of customer experiences.",
      "application": "A shop asks people who left their baskets behind to describe what happened. Several mention an unexpected delivery charge.",
      "advantage": "The explanations suggest a specific change to test, such as displaying the delivery charge earlier.",
      "disadvantage": "Six customers’ accounts cannot establish how common the problem is. A larger count or trial is needed for that decision."
    },
    {
      "title": "Quantitative research",
      "page": "387",
      "group": "Types of data",
      "level": "core",
      "definition": "Quantitative research uses numerical measurements or counts to identify patterns and compare groups.",
      "application": "A website tests two delivery pages. Of 500 visitors to each, 60 complete a purchase on page A and 80 on B, giving conversion rates of 12% and 16%.",
      "advantage": "The four-percentage-point difference gives the retailer a measurable outcome to investigate and repeat.",
      "disadvantage": "The figures alone cannot explain why buyers completed their orders. Different visitor groups could also affect the comparison."
    },
    {
      "title": "Surveys and questionnaires",
      "page": "379–380",
      "group": "Primary methods",
      "level": "core",
      "definition": "A survey collects answers to a set of questions. A questionnaire is the instrument used to record them. Closed questions give comparable categories, while open questions let respondents explain an answer.",
      "application": "A café sends the same three questions about price, portion and waiting time to a sample of weekday and weekend buyers.",
      "advantage": "Standard questions make it practical to compare results across many customers and trading periods.",
      "disadvantage": "A leading question such as “How much did you enjoy our quick service?” can produce flattering figures even when the queue is a problem."
    },
    {
      "title": "Interviews",
      "page": "381",
      "group": "Primary methods",
      "level": "core",
      "definition": "An interview is a conversation in which a researcher asks an individual questions and can follow up on their answers.",
      "application": "A supplier interviews purchasing managers who declined its tender and asks which parts of the delivery terms were difficult for them.",
      "advantage": "Follow-up questions can reveal a precise obstacle, such as an unacceptable minimum order, that a short questionnaire would miss.",
      "disadvantage": "Skilled interviewing and analysis take time, and a buyer may give a polite explanation that hides the real reason."
    },
    {
      "title": "Focus groups",
      "page": "381–382",
      "group": "Primary methods",
      "level": "core",
      "definition": "A focus group is a moderated discussion in which a small group reacts to an idea or product and to one another’s views.",
      "application": "A snack maker shows two packs to a small group of parents and asks them to discuss which information they can find quickly.",
      "advantage": "One person’s observation can prompt others to explain a problem they had overlooked, helping the designer improve the label.",
      "disadvantage": "A confident speaker can draw others towards the same answer. Agreement within one discussion is weak evidence of market-wide demand."
    },
    {
      "title": "Observation",
      "group": "Primary methods",
      "level": "core",
      "definition": "Observation records what people actually do in a setting, such as their route through a shop or the moment they leave a queue.",
      "application": "A supermarket counts how many shoppers abandon each checkout queue at lunchtime before and after opening an extra till.",
      "advantage": "Direct behaviour gives the manager evidence even when customers cannot remember how long they waited.",
      "disadvantage": "The count alone cannot reveal whether shoppers left because of the queue, a missing item or an appointment.",
      "page": "382, 391"
    },
    {
      "title": "Market analyses",
      "page": "383, 391",
      "group": "Secondary sources",
      "level": "core",
      "definition": "A published market analysis brings together existing estimates of industry size, customer segments, competitors or trends.",
      "application": "A start-up reads a trade association’s report on city bicycle sales before choosing which customer segment to interview.",
      "advantage": "One report can reveal competitor concentration and market growth that a small start-up could not economically measure itself.",
      "disadvantage": "A specialist subscription may be expensive and its estimates can date quickly. An association covering only its members may also undercount independent sellers."
    },
    {
      "title": "Academic journals",
      "page": "383–384, 391",
      "group": "Secondary sources",
      "level": "core",
      "definition": "Academic journals publish research, often peer reviewed, that a business can consult for evidence about buying behaviour or research methods.",
      "application": "A canteen reads a study of how shelf position affects snack choices and uses it to design a trial at its own tills.",
      "advantage": "A study that describes its sample and method allows the manager to judge how convincing the findings are.",
      "disadvantage": "A study conducted in university cafés may transfer poorly to a canteen serving younger children."
    },
    {
      "title": "Government publications",
      "group": "Secondary sources",
      "level": "core",
      "definition": "Government agencies publish data such as census results, household expenditure surveys and trade statistics that firms can use as secondary research.",
      "application": "A tutoring centre compares official counts of school-age residents across districts before shortlisting rental locations.",
      "advantage": "A consistent regional dataset makes district comparisons possible at little acquisition cost.",
      "disadvantage": "An old census can understate demand in a newly built neighbourhood, and resident counts reveal little about willingness to pay.",
      "page": "384, 391"
    },
    {
      "title": "Media articles",
      "group": "Secondary sources",
      "level": "core",
      "definition": "News and trade-media articles report developments that may affect a market, such as competitor openings, emerging trends or supply changes.",
      "application": "A florist reads local reporting about a proposed wedding venue and contacts the venue to verify the opening date before ordering more stock.",
      "advantage": "Local reporting may identify an opportunity before it appears in annual statistics.",
      "disadvantage": "The plan could be delayed or the story could rely on the promoter’s estimates. A headline alone is a poor basis for committing cash.",
      "page": "385, 391"
    },
    {
      "title": "Online content",
      "group": "Secondary sources",
      "level": "core",
      "definition": "Existing online content includes competitor listings, published reviews, public posts and other digital material a business can analyse.",
      "application": "A hostel reviews guests’ existing comments on nearby properties and checks competitors’ posted prices before redesigning its late check-in service.",
      "advantage": "Reviews and listings can reveal current complaints and price differences quickly and at low cost.",
      "disadvantage": "Reviewers select themselves, platforms may contain fake posts and a listed price may differ from the amount guests paid.",
      "page": "385–386"
    }
  ],
  "4.5": [
    {
      "title": "The seven Ps of the marketing mix",
      "group": "Marketing mix",
      "level": "core",
      "definition": "The marketing mix is the set of decisions about product, price, promotion, place, people, processes and physical evidence that a business combines for a target market.",
      "application": "A commuter bike workshop offers a same-day repair, charges for speed, advertises near the station and accepts bikes there. Trained mechanics, timed bookings and a signed repair record help deliver that promise.",
      "advantage": "When the seven decisions fit together, buyers can see what they are paying for and experience the benefit the promotion promised.",
      "disadvantage": "One weak link can undermine the whole offer. If too few mechanics cover the morning rush, extra advertising can lengthen queues and damage repeat business.",
      "page": "453, 462–463"
    },
    {
      "title": "Product",
      "group": "Product",
      "level": "core",
      "definition": "A product is a good or service offered to satisfy a customer need. Its features, quality, design, packaging and support shape the benefits the customer receives.",
      "application": "A lunchbox maker fits a removable seal after customers report that soup leaks into school bags. It tests the new lid with the same customers before a full run.",
      "advantage": "Solving a specific problem gives buyers a reason to choose the revised design, which can support a higher price.",
      "disadvantage": "A custom seal raises tooling costs. The extra sales or margin must cover that investment.",
      "page": "393"
    },
    {
      "title": "Product life cycle",
      "group": "Product",
      "level": "core",
      "definition": "The product life cycle is a model of how a product’s sales typically change through development, introduction, growth, maturity and decline.",
      "application": "A speaker maker plots quarterly unit sales and checks whether two weak quarters reflect long-term decline or a seasonal dip before cutting its promotion budget.",
      "advantage": "The model links a sales pattern to decisions about investment, promotion and distribution. A mature line can help finance a launch.",
      "disadvantage": "Actual products can skip stages or recover. A falling sales figure alone cannot establish why demand changed.",
      "tradeoffLabels": [
        "How it helps",
        "Where it can mislead"
      ],
      "page": "394"
    },
    {
      "title": "Research and development stage",
      "group": "Product",
      "level": "core",
      "definition": "Before launch, the business designs, prototypes and tests an idea. The product typically earns no sales revenue while its development uses cash.",
      "application": "A racket maker spends $8,000 testing three grips with junior players and discards the version that slips when wet.",
      "advantage": "Testing before mass production can prevent a costly redesign or batch of returns.",
      "disadvantage": "Development uses cash before any sales arrive, and a technically successful prototype may still attract few buyers.",
      "tradeoffLabels": [
        "Opportunity",
        "Financial risk"
      ],
      "page": "395"
    },
    {
      "title": "Introduction stage",
      "group": "Product",
      "level": "core",
      "definition": "At launch the product first reaches buyers. Sales are usually low, while setup, distribution and awareness-building costs often keep profit low or negative.",
      "application": "A bakery launches oat rolls in two branches and offers samples there. It pays for display signs before enough customers know the product.",
      "advantage": "A limited launch lets the bakery adjust the recipe using feedback while the batch size is small.",
      "disadvantage": "Promotion and small production runs raise unit costs. Even rising sales may do little to restore cash initially.",
      "tradeoffLabels": [
        "Opportunity",
        "Financial risk"
      ],
      "page": "395"
    },
    {
      "title": "Growth stage",
      "group": "Product",
      "level": "core",
      "definition": "During growth, sales rise rapidly as more customers buy the product. Greater volume can reduce unit costs and raise profit.",
      "application": "A maker of folding helmets adds two retailers as weekly orders rise from 80 to 150. It buys materials before those retailers settle their invoices.",
      "advantage": "Wider availability can win customers and spread fixed production costs across more units.",
      "disadvantage": "Stock and credit sales can absorb cash faster than customers pay. Rapid sales growth can strain a profitable business.",
      "tradeoffLabels": [
        "Opportunity",
        "Financial risk"
      ],
      "page": "395"
    },
    {
      "title": "Maturity stage",
      "group": "Product",
      "level": "core",
      "definition": "At maturity a product is established and sales growth slows. At saturation, sales approach their peak or begin to slip as buyers have many substitutes.",
      "application": "A kettle maker has stable volume and little need for new machinery. It uses cash from its standard kettle to design a travel version.",
      "advantage": "A mature line with strong margins and modest investment needs can fund other products in the portfolio.",
      "disadvantage": "Rivals can offer close substitutes. Discounts that defend sales volume may reduce profit per unit.",
      "tradeoffLabels": [
        "Opportunity",
        "Risk"
      ],
      "page": "395, 400"
    },
    {
      "title": "Decline stage",
      "group": "Product",
      "level": "core",
      "definition": "During decline, a sustained fall in sales can follow changing tastes, newer technology or stronger substitutes.",
      "application": "A camera shop cuts orders of a declining model, supports existing owners and compares the return from one final promotion with the value of freeing the shelf space.",
      "advantage": "Reducing purchases early releases cash and can prevent unwanted stock accumulating.",
      "disadvantage": "Withdrawal sacrifices any profitable niche demand. Unsold stock may have to be marked down.",
      "tradeoffLabels": [
        "Possible response",
        "Risk"
      ],
      "page": "396"
    },
    {
      "title": "Product life cycle, profit and cash flow",
      "group": "Product",
      "level": "core",
      "definition": "Investment often puts cash flow under pressure during development and launch. Sales and profit tend to rise in growth. A mature line may generate cash for new products, while declining sales can reduce profit and cash inflows.",
      "application": "A growing helmet maker records $6,000 in credit sales with $4,000 of costs paid this month. Its profit on those sales is $2,000, but before its retailer pays, cash from these transactions is down $4,000.",
      "advantage": "Checking both figures reveals whether a promising launch needs short-term finance before customers pay.",
      "disadvantage": "The stage gives a broad guide only. Actual cash depends on payment terms, spending plans and when invoices fall due.",
      "tradeoffLabels": [
        "What it reveals",
        "Limitation"
      ],
      "page": "399–400"
    },
    {
      "title": "Product portfolio",
      "group": "Product",
      "level": "core",
      "definition": "A product portfolio is the collection of goods and services a business offers. Managers consider their different sales patterns, cash needs and relationships.",
      "application": "A stationery firm uses cash from repeat notebook orders to test reusable planners. It checks whether planner buyers are new or simply switching from its notebooks.",
      "advantage": "Having products at different stages reduces reliance on a single line and can provide cash for future launches.",
      "disadvantage": "More lines tie up stock and promotion budgets. Overlapping products can take sales from one another.",
      "page": "396"
    },
    {
      "title": "Boston Consulting Group (BCG) matrix",
      "group": "Product",
      "level": "core",
      "definition": "The BCG matrix compares a product’s relative market share with growth in its market. The four positions are stars, cash cows, question marks and dogs.",
      "application": "A drinks maker compares its sales share with the largest rival’s in each category, then plots category growth. It considers funding a growing line with cash from a mature one.",
      "advantage": "The two axes make competing investment needs visible when several products share a limited budget.",
      "disadvantage": "Market definition changes both inputs. Share and growth alone reveal little about margins or links between products.",
      "tradeoffLabels": [
        "Decision it supports",
        "Limitation"
      ],
      "page": "396, 635"
    },
    {
      "title": "Star",
      "group": "Product",
      "level": "core",
      "definition": "In the BCG matrix, a star has high relative share in a fast-growing market. It may require substantial investment to defend its position.",
      "application": "A top-selling fast-charger line operates in a rapidly expanding market. Its maker negotiates extra shelf space while demand is growing.",
      "advantage": "Reinvesting can protect leadership and may create a future cash cow when market growth slows.",
      "disadvantage": "Keeping pace with fast-growing demand ties up cash in stock and production capacity.",
      "tradeoffLabels": [
        "Opportunity",
        "Risk"
      ],
      "page": "396"
    },
    {
      "title": "Cash cow",
      "group": "Product",
      "level": "core",
      "definition": "A cash cow has high relative market share in a slow-growing market. An established position can allow it to generate more cash than it needs to maintain sales.",
      "application": "A leading brand of plain exercise books pays for a small trial of erasable notebooks from its recurring cash surplus.",
      "advantage": "Cash from the established line can finance investment without borrowing.",
      "disadvantage": "Cutting support too deeply can weaken distribution or quality and shrink the surplus.",
      "tradeoffLabels": [
        "Opportunity",
        "Risk"
      ],
      "page": "396"
    },
    {
      "title": "Question mark",
      "group": "Product",
      "level": "core",
      "definition": "A question mark has low relative share in a fast-growing market. Managers must decide whether the product merits further investment.",
      "application": "A small supplier of refillable deodorant trials one pharmacy chain before paying for a national launch in a rapidly expanding category.",
      "advantage": "A successful trial can identify a route to greater share while the market is expanding.",
      "disadvantage": "Acquiring customers may cost more than the extra contribution they generate, leaving little cash for other lines.",
      "tradeoffLabels": [
        "Opportunity",
        "Risk"
      ],
      "page": "396"
    },
    {
      "title": "Dog",
      "group": "Product",
      "level": "core",
      "definition": "A dog is a product with low relative share in a slow-growing market. A manager may retain, harvest or discontinue it.",
      "application": "A repair shop sells few parts for an older console. It checks the margin on repairs that need those parts before closing the line.",
      "advantage": "Removing an unprofitable line can release shelf space, staff time and working capital.",
      "disadvantage": "A low-share product may still earn a margin or support another service. Withdrawing it could cost more than it saves.",
      "tradeoffLabels": [
        "Possible response",
        "Risk"
      ],
      "page": "396"
    },
    {
      "title": "Extension strategies",
      "group": "Product",
      "level": "core",
      "definition": "An extension strategy changes a product or its marketing to sustain demand and delay a sales decline. A business might redesign it, introduce a variant, lower the price or promote it to new buyers.",
      "application": "After sales of its home storage boxes level off, a supplier adds removable dividers and demonstrates the boxes to art teachers. It tests repeat school orders before a wider relaunch.",
      "advantage": "An established design and supplier network can make a relaunch cheaper than developing a completely new product.",
      "disadvantage": "Repackaging alone may do little if the product has lost its usefulness. Relaunch spending then reduces cash without restoring demand.",
      "page": "397–398"
    },
    {
      "title": "Branding",
      "group": "Product",
      "level": "core",
      "definition": "Branding builds a recognisable identity and a set of associations around a product or business through elements such as its name, design and customer experience.",
      "application": "A soap maker uses one distinctive wrapper across its bars and promises a refill at each market stall. Customers can recognise the product and know what service to expect.",
      "advantage": "A familiar identity can reduce search time and make the product easier to choose among close substitutes.",
      "disadvantage": "A single poor experience can damage trust in every product carrying the same brand.",
      "page": "401, 404–405"
    },
    {
      "title": "Brand awareness",
      "group": "Product",
      "level": "core",
      "definition": "Brand awareness describes how readily potential customers recognise a brand or recall it when thinking about a product category.",
      "application": "Before and after an advertising campaign, a snack maker asks comparable samples to name lunchbox brands unaided and then recognise its logo. If 54 of 90 recognise it, aided awareness is 60%.",
      "advantage": "Tracking recall helps judge whether the campaign made the brand come to mind at the point of purchase.",
      "disadvantage": "A customer may recognise a brand because of a complaint or dislike the product. Awareness alone does not establish demand.",
      "tradeoffLabels": [
        "What it reveals",
        "What it misses"
      ],
      "page": "401",
      "formula": "Aided brand awareness (%) = people who recognise the brand ÷ valid responses × 100"
    },
    {
      "title": "Brand development",
      "group": "Product",
      "level": "core",
      "definition": "Brand development is the long-term work of building a brand’s identity and reach to increase its sales and share of the market.",
      "application": "A running-shoe repairer launches branded care kits for runners who already trust its workshop and checks repeat sales before extending the range.",
      "advantage": "An established reputation can lower the cost of introducing a related product to current customers.",
      "disadvantage": "Building the desired reputation takes time and money. One poorly made extension can undo some of that investment.",
      "page": "402"
    },
    {
      "title": "Brand loyalty",
      "group": "Product",
      "level": "core",
      "definition": "Brand loyalty is a customer’s lasting preference for one brand, shown in repeat buying and a willingness to choose it when alternatives are available.",
      "application": "A tea shop checks whether members keep buying its blends when a competing shop offers a discount. It distinguishes preference from purchases driven solely by coupons.",
      "advantage": "If tea buyers stay even when a rival discounts, the shop can defend its market share and margin without matching every price cut.",
      "disadvantage": "Repeated purchases may reflect convenience. A new nearby competitor can expose how little loyalty the business actually has.",
      "tradeoffLabels": [
        "Business benefit",
        "Measurement limit"
      ],
      "page": "402"
    },
    {
      "title": "Brand value",
      "group": "Product",
      "level": "core",
      "definition": "Brand value is the extra amount a buyer would pay for a product because it carries a particular brand name.",
      "application": "Buyers value a plain canvas bag at $24 and the same bag with a trusted maker’s label at $32. The $8 difference measures the suggested brand premium for that group.",
      "advantage": "Evidence of a sustainable premium can justify spending to maintain product quality and the brand’s reputation.",
      "disadvantage": "A stated willingness to pay may differ from actual spending. A fair comparison also needs to hold materials, quality and service constant.",
      "tradeoffLabels": [
        "Why it matters",
        "Measurement limit"
      ],
      "page": "403"
    },
    {
      "title": "Price",
      "group": "Price",
      "level": "core",
      "definition": "Price is the amount a customer pays for a good or service. It influences demand, revenue and how buyers judge the quality or status of the offer.",
      "application": "A sports shop considers a $12 racket restring against an $18 same-day service. It estimates how many players value speed before adopting the higher price.",
      "advantage": "Different prices can reflect benefits that buyers value and help cover the cost of providing them.",
      "disadvantage": "A fee above customers’ willingness to pay loses orders. A fee too low to cover costs can increase sales while weakening profit.",
      "page": "411"
    },
    {
      "title": "Cost-plus pricing",
      "group": "Price",
      "level": "core",
      "definition": "Under cost-plus pricing the business starts with a unit cost and adds a mark-up, either a fixed sum or a percentage of that cost.",
      "application": "A lamp costs $40 per unit including allocated overheads. A 25% mark-up adds $10, giving a $50 price. That $10 is 20% of the selling price.",
      "advantage": "The calculation is quick and gives a consistent starting point when costs and expected volume are reliable.",
      "disadvantage": "A mark-up ignores willingness to pay. If sales fall short, fixed cost per unit may exceed the amount used to set the price.",
      "formula": "For a percentage mark-up, selling price = unit cost × (1 + mark-up % ÷ 100)",
      "page": "412"
    },
    {
      "title": "Penetration pricing",
      "group": "Price",
      "level": "core",
      "definition": "Penetration pricing sets a low introductory price to encourage trial and build sales volume or market share quickly.",
      "application": "A new meal-kit firm charges $18 per box during a subscriber’s first month against rivals’ $24. It measures how many subscribers stay once the introductory price ends.",
      "advantage": "A visible price advantage can build recognition and persuade price-sensitive buyers to try a new entrant. High volume helps offset the small initial margin.",
      "disadvantage": "Each early sale earns less contribution. Buyers attracted by price may leave when the introductory offer ends.",
      "page": "412–413"
    },
    {
      "title": "Loss-leader pricing",
      "group": "Price",
      "level": "core",
      "definition": "A loss leader is a selected item sold below cost to draw buyers who are expected to purchase additional profitable items.",
      "application": "A grocer pays $1.20 per loaf and sells it for $0.90. A shopper who also buys spreads generating $1.10 of contribution adds $0.80 overall before fixed costs.",
      "advantage": "A frequently bought item can increase store visits and profitable sales across the basket.",
      "disadvantage": "Shoppers who buy only the bread create a loss. The grocer needs basket data to judge the offer.",
      "page": "413"
    },
    {
      "title": "Predatory pricing",
      "group": "Price",
      "level": "core",
      "definition": "Predatory pricing involves deliberately setting unsustainably low prices, often below cost, to force rivals out, with the aim of raising prices after competition weakens.",
      "application": "A dominant delivery firm charges less than each delivery costs only in a new rival’s district. Rival exit followed by a fee rise would support a predatory interpretation.",
      "advantage": "If rivals withdraw and entry remains difficult, the dominant firm could gain market power and later recover its losses.",
      "disadvantage": "Losses may outlast the firm’s cash reserves. Harm to competition can also trigger scrutiny from regulators.",
      "tradeoffLabels": [
        "Possible gain to the firm",
        "Costs and risks"
      ],
      "page": "413"
    },
    {
      "title": "Premium pricing",
      "group": "Price",
      "level": "core",
      "definition": "Premium pricing maintains a relatively high price to reflect or signal superior quality, exclusivity or status.",
      "application": "A small instrument maker charges $900 for a hand-finished guitar with a personal fitting and repair guarantee. Those services help explain the premium.",
      "advantage": "Buyers who value craftsmanship may accept a higher margin that funds skilled labour and support.",
      "disadvantage": "A high price narrows the potential market. Poor service or workmanship makes the premium hard to defend.",
      "page": "414"
    },
    {
      "title": "Dynamic pricing",
      "group": "Price",
      "level": "hl",
      "definition": "Dynamic pricing, also called surge or real-time pricing, changes what buyers pay as market conditions shift. For services, demand and available capacity often determine the rate.",
      "application": "A climbing gym with 40 evening spaces charges more as popular sessions fill and offers lower midweek prices when walls would otherwise stand empty.",
      "advantage": "Charging more when places are scarce can raise revenue, while off-peak discounts can fill spare capacity.",
      "disadvantage": "Unexplained price changes can seem unfair to regular customers. Errors in demand estimates can also leave capacity unused.",
      "page": "415"
    },
    {
      "title": "Competitive pricing",
      "group": "Price",
      "level": "hl",
      "definition": "Competitive pricing, also called going-rate pricing, uses rivals’ prices as the reference. A business may match the going rate or set its price a little above or below it.",
      "application": "Two nearby copy shops charge $0.10 per page. A third matches them for standard copies and checks whether its faster finishing service supports a separate premium.",
      "advantage": "Benchmarking keeps a comparable product within the price range customers expect.",
      "disadvantage": "Matching rivals gives buyers little price-based reason to switch. The copy shop may need to pay for faster service, even if its rivals already have lower costs.",
      "page": "416"
    },
    {
      "title": "Contribution pricing",
      "group": "Price",
      "level": "hl",
      "definition": "Contribution pricing starts with the variable cost of supplying each unit and adds an amount towards fixed costs. Sales generate profit once their total contribution covers those costs.",
      "application": "A printer has an idle press. A special order at $7 per poster with $4 variable cost produces $3 per poster, or $600 on 200 posters, before any extra fixed costs.",
      "advantage": "With spare capacity and no additional fixed costs, an order with positive contribution can improve total profit.",
      "disadvantage": "Sharing overheads among products requires judgement. The printer must also check whether a special order would displace one with a higher contribution.",
      "formula": "Contribution per unit = selling price − variable cost per unit",
      "page": "416–417"
    },
    {
      "title": "Price elasticity of demand (PED)",
      "group": "Price",
      "level": "hl",
      "definition": "PED measures how responsive quantity demanded is to a change in price, assuming other influences stay the same. A magnitude above 1 is elastic, below 1 is inelastic and equal to 1 is unit elastic.",
      "application": "A cinema cuts a $10 ticket to $9 (−10%). Weekly sales rise from 200 to 240 (+20%), so PED = +20% ÷ −10% = −2. Magnitude 2 means elastic demand. Revenue rises from $2,000 to $2,160.",
      "advantage": "When demand is elastic, a price cut can raise revenue. With inelastic demand and few substitutes, a price rise can raise revenue. Hoang uses the arithmetic to practise interpreting the pricing decision.",
      "disadvantage": "A popular new film could explain some of the increase. Higher revenue also tells the cinema little about profit until it checks costs.",
      "formula": "PED = percentage change in quantity demanded ÷ percentage change in price",
      "tradeoffLabels": [
        "How it helps",
        "Where it can mislead"
      ],
      "page": "417–418"
    },
    {
      "title": "Promotion",
      "group": "Promotion",
      "level": "core",
      "definition": "Promotion communicates with existing or potential buyers to inform, persuade or remind them about an offer. It can also attract attention and build awareness of a brand.",
      "application": "A plant nursery demonstrates how to care for an unfamiliar herb, then reminds previous buyers when another batch is ready.",
      "advantage": "A demonstration can remove uncertainty and turn interest into a first purchase.",
      "disadvantage": "Paying to reach people outside the target market wastes money. Evaluate incremental orders against campaign cost.",
      "page": "425–426"
    },
    {
      "title": "Above-the-line promotion (ATL)",
      "group": "Promotion",
      "level": "core",
      "definition": "Above-the-line promotion pays independent mass media to carry a message to a broad audience. Examples include radio spots, cinema or television adverts, magazines and billboards.",
      "application": "A local cinema buys regional radio spots before reopening. It measures awareness across the area and uses one offer code to track some ticket purchases.",
      "advantage": "A single campaign can build awareness quickly across a large audience.",
      "disadvantage": "Many listeners may live too far away or have little interest in cinema. Attributing later sales to the advert can be difficult.",
      "page": "426"
    },
    {
      "title": "Below-the-line promotion (BTL)",
      "group": "Promotion",
      "level": "core",
      "definition": "Below-the-line promotion reaches a chosen group directly or through targeted activities the business controls. Examples include demonstrations, direct emails and in-store offers.",
      "application": "A bike shop emails a service offer to customers who bought a commuter bike one year ago, using a code to measure bookings.",
      "advantage": "The message reaches people with a plausible need, and responses can be tracked against spending.",
      "disadvantage": "An incomplete list limits reach. Frequent messages can prompt customers to unsubscribe.",
      "page": "430"
    },
    {
      "title": "Through-the-line promotion (TTL)",
      "group": "Promotion",
      "level": "core",
      "definition": "Through-the-line promotion coordinates broad-reach and targeted activity as one campaign, linking public awareness to a follow-up action.",
      "application": "A book festival announces an author by radio. Listeners visit a campaign page, select a genre and opt in to an email with seats for a matching workshop.",
      "advantage": "Mass reach attracts new people while targeted follow-up gives them a relevant reason to book.",
      "disadvantage": "Buying broad media space and running a targeted follow-up can stretch a small budget. Overlapping audiences also make it hard to count unique responders.",
      "page": "436–437"
    },
    {
      "title": "Social media marketing",
      "group": "Promotion",
      "level": "core",
      "definition": "Social media marketing uses platform content, advertising or conversations with users to reach, engage and influence a target audience.",
      "application": "A badminton shop posts short grip demonstrations, answers questions and issues a video-specific code. It compares the profit on extra orders with filming and ad costs.",
      "advantage": "Demonstrations can reach a narrow interest group, be shared and generate rapid feedback.",
      "disadvantage": "A popular post can attract viewers who never buy. Platform changes or public complaints can reduce reach or damage trust.",
      "page": "437"
    },
    {
      "title": "Sales promotion",
      "group": "Promotion",
      "level": "core",
      "definition": "Sales promotion is a short-term incentive intended to encourage immediate purchase, such as a coupon, trial pack or limited-time offer.",
      "application": "A new cereal brand offers a coupon at checkout and measures full-price repeat purchases in the following month.",
      "advantage": "Reducing the cost of trying the cereal can persuade shoppers to switch brands temporarily.",
      "disadvantage": "Frequent coupons reduce margin and may train buyers to wait for a deal.",
      "page": "431"
    },
    {
      "title": "Personal selling",
      "group": "Promotion",
      "level": "core",
      "definition": "Personal selling is direct, two-way interaction in which a salesperson explains an offer and responds to an individual buyer’s needs or objections.",
      "application": "At a furniture showroom, an adviser measures a customer’s room and demonstrates two desk layouts before preparing a quote.",
      "advantage": "Tailored advice can overcome uncertainty about a complex or expensive purchase.",
      "disadvantage": "Specialist staff spend time with each prospect, so cost per sale rises when few consultations convert.",
      "page": "431"
    },
    {
      "title": "Public relations and publicity",
      "group": "Promotion",
      "level": "core",
      "definition": "Public relations manages relationships with groups that influence an organisation’s reputation. One possible outcome is unpaid media coverage, known as publicity.",
      "application": "A repair café invites a local reporter to meet households using its service. The reporter decides what, if anything, to publish.",
      "advantage": "Independent coverage can give a new service credibility with people who would ignore a paid advert.",
      "disadvantage": "The business controls neither the tone nor the timing of the report. Organising the event still uses staff time.",
      "page": "432"
    },
    {
      "title": "Sponsorship",
      "group": "Promotion",
      "level": "core",
      "definition": "In sponsorship a business supplies money, equipment or services to an event, individual or organisation in return for association with it and agreed exposure.",
      "application": "A running shop supplies race-day water stations and places its name on the race map. It tracks redemptions of a participant-only fitting voucher.",
      "advantage": "A well-matched event can connect the brand with people already interested in its products.",
      "disadvantage": "Exposure may generate few purchases, and a poorly run event can reflect badly on the sponsor.",
      "page": "433"
    },
    {
      "title": "Direct marketing",
      "group": "Promotion",
      "level": "core",
      "definition": "Direct marketing contacts identifiable customers or prospects with a tailored message and a way to respond, such as an email offering a booking.",
      "application": "A pottery studio invites past beginners to a glazing class and records bookings through a dedicated link.",
      "advantage": "The studio can connect each booking to the invitation, making it easier to compare campaign income and cost.",
      "disadvantage": "Outdated contact information or irrelevant targeting produces few bookings and can irritate former customers.",
      "page": "430"
    },
    {
      "title": "Point-of-sale promotion",
      "group": "Promotion",
      "level": "core",
      "definition": "Point-of-sale promotion puts a message, display or offer where the customer makes a purchase decision.",
      "application": "A racket shop puts sample grips beside its stringing counter with a price and a sign inviting customers to try the texture.",
      "advantage": "People already arranging a racket repair can immediately add a related product to the transaction.",
      "disadvantage": "Counter space is scarce. Giving it to grips may displace a higher-margin accessory.",
      "page": "432"
    },
    {
      "title": "Trade shows",
      "group": "Promotion",
      "level": "core",
      "definition": "A trade show brings exhibitors together to demonstrate products to an audience with an interest in the industry.",
      "application": "A supplier of science apparatus invites school buyers at a teaching exhibition to test its compact microscope and book a later demonstration.",
      "advantage": "Staff can meet several relevant buyers in one day and answer practical questions while the equipment is in use.",
      "disadvantage": "Stand fees, travel and staff time are committed upfront. Competing suppliers can demonstrate alternatives a few metres away.",
      "page": "432–433"
    },
    {
      "title": "Word-of-mouth promotion",
      "group": "Promotion",
      "level": "core",
      "definition": "Word of mouth spreads information and recommendations about a product when people share experiences with others.",
      "application": "After a laptop repair, a customer tells three classmates how the shop recovered their files. The owner asks new visitors how they heard about the shop.",
      "advantage": "A personal recommendation can carry trust and create demand with little direct media spending.",
      "disadvantage": "A poor experience can spread just as quickly, and the shop has limited control over what people repeat.",
      "page": "434"
    },
    {
      "title": "Guerrilla marketing",
      "group": "Promotion",
      "level": "core",
      "definition": "Guerrilla marketing uses an unexpected, creative promotion to attract attention on a modest budget.",
      "application": "A puzzle café gets permission to display a playable window puzzle overlooking a busy queue. People enter the café for the final clue.",
      "advantage": "A distinctive experience can earn attention and sharing that the café could not afford through an advertising campaign.",
      "disadvantage": "People may remember the puzzle but forget the café. An idea that irritates passers-by can damage its reputation.",
      "page": "434–435"
    },
    {
      "title": "Packaging as promotion",
      "group": "Promotion",
      "level": "core",
      "definition": "Packaging can promote a product by drawing attention, displaying the brand or communicating a benefit at the point of purchase and afterwards.",
      "application": "A stationery shop tests a reusable sleeve that shows how its water-resistant notebook survives a spill. It compares sales and packaging cost per unit with its paper band.",
      "advantage": "A visible demonstration helps shoppers understand the benefit without a salesperson.",
      "disadvantage": "More elaborate wrapping can raise unit costs and create unnecessary waste. Extra purchases must justify the change.",
      "page": "435, 462"
    },
    {
      "title": "AIDA",
      "group": "Promotion",
      "level": "core",
      "definition": "AIDA is a way to assess how promotion attracts attention, develops interest, creates desire and prompts action such as a purchase.",
      "application": "A language school tracks video views, course-page visits, trial-class requests and paid enrolments. Many views but few trial requests suggest the course message needs work.",
      "advantage": "Following several stages helps locate where prospective customers stop responding.",
      "disadvantage": "The stages simplify actual buying behaviour. A returning customer may enrol directly, and a view alone gives little evidence of genuine interest.",
      "page": "437"
    },
    {
      "title": "Place and distribution channels",
      "group": "Place",
      "level": "core",
      "definition": "Place concerns how and where customers can obtain a product. A distribution channel is the route from producer to final customer, including any intermediaries.",
      "application": "A dumpling maker compares selling at its stall, through grocery shops or on a marketplace that takes orders for a fee. It checks freshness, customer reach and the margin left on each sale.",
      "advantage": "A well-chosen channel makes the product available where target customers want to buy it.",
      "disadvantage": "Adding intermediaries can reduce the producer’s margin and control over presentation or handling.",
      "page": "443–444"
    },
    {
      "title": "Direct distribution (zero intermediaries)",
      "group": "Place",
      "level": "core",
      "definition": "The producer sells straight to the final customer, for example through its own shop, website or sales team.",
      "application": "A ceramicist takes orders through her own website, sets the price, packs each piece and pays a courier to deliver it. She remains the seller.",
      "advantage": "Direct orders reveal customers’ preferences and let the maker retain control over pricing and service.",
      "disadvantage": "The maker must pay for customer acquisition, packaging, returns and delivery arrangements. Those costs can offset the retailer margin saved.",
      "page": "444"
    },
    {
      "title": "Retail distribution (one intermediary)",
      "group": "Place",
      "level": "core",
      "definition": "The producer sells to a retailer, which sells to final customers. The retailer may operate a physical store or an online shop.",
      "application": "A local card-game designer supplies a toy shop at $12 per game. The shop demonstrates it and sells it to families for $20.",
      "advantage": "Access to the retailer’s customers and demonstrations can grow sales without the designer opening a store.",
      "disadvantage": "The retailer takes part of the selling price and may move the game to a less visible shelf.",
      "page": "444, 446"
    },
    {
      "title": "Wholesale distribution (two intermediaries)",
      "group": "Place",
      "level": "core",
      "definition": "A wholesaler typically buys a producer’s goods in bulk and supplies smaller quantities to retailers, which sell to final customers.",
      "application": "A snack maker sells pallets to a wholesaler. The wholesaler splits them into cartons for 60 independent corner shops.",
      "advantage": "One large order and delivery can reach many outlets that buy too little for the producer to serve individually.",
      "disadvantage": "The wholesaler controls which lines to promote. Each extra mark-up also affects the final price, and shoppers’ feedback may reach the snack maker slowly.",
      "page": "444–445"
    },
    {
      "title": "Specialist distributors",
      "group": "Place",
      "level": "core",
      "definition": "A specialist distributor takes a manufacturer’s products into a particular market, often buying and reselling them while providing services such as demonstrations or technical support.",
      "application": "A microscope maker supplies a distributor that demonstrates instruments to schools and stocks spare parts locally.",
      "advantage": "Expert sales and service can reassure schools and reach buyers the manufacturer has little capacity to support directly.",
      "disadvantage": "The distributor demands a margin and may control much of the customer relationship, limiting feedback to the maker.",
      "page": "446"
    },
    {
      "title": "Agents and brokers",
      "group": "Place",
      "level": "core",
      "definition": "An agent or broker arranges sales between a producer and buyers, often for commission and usually without taking ownership of the goods.",
      "application": "A speciality tea producer appoints an agent who knows hotel buyers. The agent negotiates orders and the producer ships the tea to the hotels.",
      "advantage": "Local contacts can open doors more quickly than building a new sales team.",
      "disadvantage": "Commission reduces the margin, and the agent may prioritise the supplier offering the best commission.",
      "page": "446"
    },
    {
      "title": "Multichannel distribution",
      "group": "Place",
      "level": "core",
      "definition": "Multichannel distribution makes an offer available through more than one sales route, such as a producer’s website and independent stores.",
      "application": "A shoe maker lets buyers order standard sizes online and try specialist fits at partner shops. It coordinates stock and returns across both routes.",
      "advantage": "Customers can select the buying method that suits them, increasing convenience and potential reach.",
      "disadvantage": "The maker’s online discounts can upset retailers. Duplicate stock or mismatched inventory records can raise costs.",
      "page": "449"
    },
    {
      "title": "E-commerce as a distribution channel",
      "group": "Place",
      "level": "core",
      "definition": "E-commerce means buying and selling through an electronic network, usually the internet. A producer can sell directly through its own site or use a marketplace or online retailer.",
      "application": "A ceramics studio sells mugs through its own web shop and tests a marketplace for international orders. It compares fees, shipping damage and the cost of winning each buyer.",
      "advantage": "Online orders reach customers beyond the shop’s opening hours and location.",
      "disadvantage": "Fragile goods require costly packaging. Buyers who cannot handle the product before ordering may return more items.",
      "page": "448"
    },
    {
      "title": "Vending machines",
      "group": "Place",
      "level": "core",
      "definition": "Vending machines are automated points of sale that hold a limited range of products and dispense them after payment.",
      "application": "A sports centre stocks shuttlecocks in a machine beside its courts so players can buy replacements after reception closes.",
      "advantage": "The centre can serve a time-sensitive purchase without staffing a sales desk throughout the evening.",
      "disadvantage": "A breakdown prevents sales, and slow-moving stock ties up space in a machine with limited capacity.",
      "page": "448–449"
    },
    {
      "title": "Mail order",
      "group": "Place",
      "level": "core",
      "definition": "Mail order allows a customer to select goods from a catalogue or listing and place an order remotely by post for later delivery.",
      "application": "A seed supplier mails a seasonal catalogue and order form to gardeners in areas with limited internet access.",
      "advantage": "Illustrated listings can reach customers far from a shop and make repeat seasonal ordering convenient.",
      "disadvantage": "Printing and postage add cost. Changed prices or unavailable stock may make a printed catalogue inaccurate.",
      "page": "449"
    },
    {
      "title": "People and the customer experience",
      "group": "People",
      "level": "core",
      "definition": "In the services marketing mix, people are the employees who interact with customers to provide the service. Their knowledge, behaviour and communication influence how customers judge it.",
      "application": "A badminton centre trains reception staff to ask a beginner about experience before recommending a class and to resolve booking mistakes immediately.",
      "advantage": "A well-matched class and a quick resolution can turn a nervous first-time visitor into a returning customer.",
      "disadvantage": "Recruitment and training cost money. Different staff may still deliver inconsistent service during busy shifts.",
      "page": "454"
    },
    {
      "title": "Cultural variation in service",
      "group": "People",
      "level": "core",
      "definition": "Customers can have different expectations about language, formality, personal space or how complaints should be handled. Service staff can adapt by asking about individual preferences.",
      "application": "A guesthouse offers visitors a choice of written check-in instructions or a face-to-face welcome, and staff check how each guest wants to be addressed.",
      "advantage": "Offering a choice can reduce misunderstandings and make more guests comfortable asking for help.",
      "disadvantage": "Generalising from nationality can lead to stereotyping. Supporting several service options also takes training and time.",
      "page": "455"
    },
    {
      "title": "Service delivery processes",
      "group": "Processes",
      "level": "core",
      "definition": "Processes are the steps and systems through which a customer receives a service. These include booking, waiting times, payment, delivery and after-sales care.",
      "application": "A repair shop records the fault at drop-off, obtains approval of a quote, tests the repair and texts when collection is possible.",
      "advantage": "A clear sequence reduces missed handovers and keeps customers informed about the status of their order.",
      "disadvantage": "Rigid procedures can slow unusual requests or prevent an employee from resolving a simple issue on the spot.",
      "page": "457–458"
    },
    {
      "title": "Changing a service process",
      "group": "Processes",
      "level": "core",
      "definition": "Changing a process means redesigning how a service is delivered, for example by removing steps, introducing self-service or changing where a task happens.",
      "application": "A salon trials online check-in for one month, keeps a staffed option and compares average waiting time and abandoned bookings before and after.",
      "advantage": "Moving routine details online can shorten queues and release staff for consultations.",
      "disadvantage": "Setup costs and staff learning time reduce the immediate gain. Some customers may need help with the new system.",
      "page": "459"
    },
    {
      "title": "Physical evidence",
      "group": "Physical evidence",
      "level": "core",
      "definition": "Physical evidence consists of visible or tangible cues customers use to judge an otherwise intangible service, such as facilities, staff appearance, equipment and documents.",
      "application": "A bike workshop displays a tidy repair bench, labelled parts and a dated service sheet showing which checks were completed.",
      "advantage": "Observable cues help a first-time customer assess professionalism before they can judge the repair itself.",
      "disadvantage": "An impressive setting is expensive and cannot establish technical quality. A bike returned with the same fault will weaken trust despite the polished surroundings.",
      "page": "461"
    }
  ],
  "4.6": [
    {
      "title": "International marketing",
      "page": "465–466",
      "group": "Opportunities and threats",
      "level": "hl",
      "definition": "International marketing involves finding and serving customers across national borders and deciding how the offer should work in each market.",
      "application": "A maker of insulated bottles faces slow growth at home. It compares demand, distributor fees and delivery costs abroad before entering a second market.",
      "advantage": "Additional orders can spread design costs across more bottles. Sales in a second country can also reduce reliance on one market.",
      "disadvantage": "Freight, local advertising and an established rival could absorb the extra revenue. Estimate the profit on a delivered bottle before expanding."
    },
    {
      "title": "Market standardisation",
      "group": "International strategy",
      "level": "hl",
      "definition": "Standardisation keeps important parts of a marketing mix consistent across national markets where customers have similar needs.",
      "application": "A helmet maker uses the same brand and core design in two cycling markets after confirming local safety requirements.",
      "advantage": "Longer production runs and reusable campaign material can lower cost per helmet and build a consistent identity.",
      "disadvantage": "If the second market needs different sizing or a different certification, the common design may sell poorly or require redesign.",
      "page": "466, 470"
    },
    {
      "title": "Local adaptation and glocalisation",
      "group": "International strategy",
      "level": "hl",
      "definition": "Local adaptation changes elements of the mix to fit a market. Glocalisation combines a recognisable global identity with selected local changes.",
      "application": "A café chain keeps its name and shop format but tests two less-sweet drinks and local-language ordering in its new market.",
      "advantage": "Relevant flavours and easier ordering can encourage first visits while the familiar identity reassures travellers.",
      "disadvantage": "Separate recipes, ingredients and training increase costs. An adapted drink has to generate enough extra orders to justify them.",
      "page": "468, 470–471"
    },
    {
      "title": "Exporting through a distributor",
      "group": "Market entry",
      "level": "hl",
      "definition": "Exporting involves selling a home-produced good abroad. A local distributor is an independent specialist that represents a limited range of producers and can handle sales to buyers in that market.",
      "application": "A small sportswear maker tests overseas demand by selling one shipment to a distributor that already supplies local clubs.",
      "advantage": "The maker gains access to existing buyers and avoids the upfront cost of opening its own shops abroad.",
      "disadvantage": "The distributor takes a margin and controls part of the customer relationship. Slow feedback can leave the maker ordering unpopular sizes.",
      "page": "446, 466"
    },
    {
      "title": "Local joint venture",
      "page": "80–81, 471",
      "group": "Market entry",
      "level": "hl",
      "definition": "A joint venture brings businesses together to form a jointly owned enterprise for a specific project. The partners share resources, risks, control and returns.",
      "application": "A chilled-food producer and an overseas supermarket group jointly launch a local meal range. One provides recipes, the other refrigeration and shelf space.",
      "advantage": "Local distribution and market knowledge can reduce the time and cost of getting a perishable product to customers.",
      "disadvantage": "The partners may disagree over premium pricing when the supermarket prioritises turnover. Shared control can delay a response."
    },
    {
      "title": "Exchange-rate exposure",
      "group": "Opportunities and threats",
      "level": "hl",
      "definition": "Exchange-rate exposure is the possibility that currency movements will change a firm’s costs or the home-currency value of overseas receipts.",
      "application": "An exporter invoices €10,000. At $1.10 per euro it expects $11,000. If the rate is $1.02 when paid, it receives $10,200, an $800 shortfall.",
      "advantage": "A stronger currency in the customer’s market can increase the exporter’s home-currency receipts if the invoiced foreign price stays fixed.",
      "disadvantage": "An adverse movement can wipe out a thin margin. Its impact depends on the invoice currency and any foreign-currency costs.",
      "tradeoffLabels": [
        "Potential gain",
        "Potential loss"
      ],
      "page": "470"
    },
    {
      "title": "Barriers to market entry",
      "page": "467",
      "group": "Opportunities and threats",
      "level": "hl",
      "definition": "Entry barriers are conditions that make it harder or costlier to serve an overseas market, including import duties, product rules and established competitors.",
      "application": "A toy exporter compares the cost of local safety testing, translated packaging and a retailer listing fee with the contribution expected from first-year orders.",
      "advantage": "Identifying fixed entry costs before launch helps the exporter estimate the volume it must sell to make entry worthwhile.",
      "disadvantage": "Approval delays and a rival’s response can change the calculation. Small test orders may be too costly once fixed costs are included.",
      "tradeoffLabels": [
        "Why analyse them",
        "Where estimates can fail"
      ]
    }
  ]
};

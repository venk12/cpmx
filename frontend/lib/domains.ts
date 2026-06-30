export type ApiEndpointItem = {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  path: string;
  description: string;
};

export type DomainCategory = "Energy" | "Commercial" | "Payments" | "Operations";

export type Domain = {
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  category: DomainCategory;
  featured?: boolean;
  useCases: string[];
  examplePartners?: string[];
  apiEndpoints: ApiEndpointItem[];
  codeExample: {
    title: string;
    code: string;
  };
};

export const domainCategories: DomainCategory[] = ["Energy", "Commercial", "Payments", "Operations"];

export const domains: Domain[] = [
  {
    slug: "energy-management-systems",
    name: "Energy Management Systems",
    shortDescription:
      "Optimise energy flows across sites by connecting GreenFlux smart charging to EMS platforms — enabling dynamic capacity management, renewable alignment, and multi-asset coordination.",
    fullDescription:
      "Every site with charging infrastructure also has an energy budget — a grid connection with finite capacity shared between charging, HVAC, lighting, production, and other loads. As charging networks grow, managing that budget becomes the defining operational challenge. Energy Management Systems (EMS) are the software layer that optimises energy flows across a site or portfolio. GreenFlux and an EMS are natural partners: GreenFlux knows the real-time state of every charger on a site, and the EMS knows the overall energy picture. Together, they can do things neither can do alone. GreenFlux exposes a Smart Charging API that accepts capacity constraints and charging schedules from external systems. Data APIs deliver real-time session data, meter values, and charge station status via webhooks.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    category: "Energy",
    featured: true,
    useCases: [
      "Prevent peak demand charges at garages with hundreds of simultaneous charging sessions.",
      "Guarantee fleet charging overnight without exceeding the site's industrial grid connection.",
      "Maximise the share of green energy delivered through chargers, reducing Scope 2 emissions.",
    ],
    examplePartners: [
      "Building and industrial EMS providers",
      "Grid management software for utilities and DSOs",
      "Solar and battery storage management systems (BESS integrators)",
    ],
    apiEndpoints: [
      { method: "GET",  path: "/smartcharging/capacitygroups",                               description: "List all capacity groups for the CPO" },
      { method: "POST", path: "/smartcharging/capacitygroups",                               description: "Create a new capacity group with a site power limit" },
      { method: "PUT",  path: "/smartcharging/capacitygroups/{id}/algorithms/default",       description: "Set maximum capacity and algorithm parameters" },
      { method: "POST", path: "/smartcharging/capacitygroups/{id}/scenarios/dynamic",        description: "Create day-of-week capacity scenarios (e.g. off-peak windows)" },
      { method: "GET",  path: "/smartcharging/capacitygroups/{id}/allocationgraph",          description: "Retrieve real-time power allocation across all EVSEs" },
      { method: "GET",  path: "/metervalues",                                                description: "Real-time meter values per connector (30 s – 15 min frequency)" },
    ],
    codeExample: {
      title: "Create a 50 kW capacity group and apply dynamic scenarios",
      code: `# 1. Create a capacity group for a site
POST /smartcharging/capacitygroups
{
  "name": "Parking Garage A – Level 2",
  "maxCapacity": 50,
  "unit": "kW"
}

# Response: { "id": "cg-abc123", "name": "Parking Garage A – Level 2" }

# 2. Apply a day-of-week dynamic scenario (lower limit on weekdays 08–18)
POST /smartcharging/capacitygroups/cg-abc123/scenarios/dynamic
{
  "dayOfWeek": ["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY"],
  "startTime": "08:00",
  "endTime": "18:00",
  "maxCapacity": 30
}

# 3. Read live allocation data for the dashboard
GET /smartcharging/capacitygroups/cg-abc123/allocationgraph`,
    },
  },
  {
    slug: "crm-commercial-platforms",
    name: "CRM & Commercial Platforms",
    shortDescription:
      "Unify driver accounts, fleet records, charge cards, and session data in a single commercial system — eliminating the gap between CPMS and CRM that causes revenue leakage.",
    fullDescription:
      "GreenFlux manages tens of thousands of drivers, fleet accounts, charge cards, and customer subscriptions on behalf of its operator customers. Most operators already have a CRM or ERP system at the centre of their commercial operations. The gap between those systems and the CPMS is where revenue leaks and service quality suffers. GreenFlux provides a dedicated CRM API on the EMSP side covering customer and driver record management, token/RFID card provisioning and lifecycle, and access group and tariff group assignment. The Data API suite (CDR, Session, Location) provides session-level records that CRM systems can consume to build usage dashboards and billing inputs.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
    category: "Commercial",
    useCases: [
      "Automate subscriber lifecycle from signup to renewal for EMSPs managing thousands of driver accounts.",
      "Give fleet managers full visibility of charge activity per vehicle, per driver, and per cost centre.",
      "Enable reseller networks to provision RFID cards and report usage through a single platform.",
    ],
    examplePartners: [
      "Salesforce ISVs and system integrators",
      "Microsoft Dynamics partners serving energy and utilities",
      "HubSpot and Pipedrive integrations for growth-stage EMSPs",
    ],
    apiEndpoints: [
      { method: "GET", path: "/crm/customers",                 description: "List all customers for the eMSP" },
      { method: "PUT", path: "/crm/customers/{customerId}",    description: "Create or update a customer record" },
      { method: "GET", path: "/crm/drivers",                   description: "List all drivers under the eMSP" },
      { method: "PUT", path: "/crm/tokens/{tokenId}",          description: "Create or update a driver RFID token" },
      { method: "GET", path: "/cdrs",                          description: "Fetch charge detail records (near real-time, max 1000 per response)" },
      { method: "GET", path: "/sessions",                      description: "List completed charging sessions (stored up to one month)" },
    ],
    codeExample: {
      title: "Provision a new fleet driver and RFID token",
      code: `# 1. Create or update the driver record
PUT /crm/drivers/driver-7891
{
  "firstName": "Anna",
  "lastName": "Schmidt",
  "email": "anna.schmidt@fleetco.de",
  "customerId": "customer-101",
  "costCentre": "logistics-berlin"
}

# 2. Register her RFID card
PUT /crm/tokens/tok-rfid-4421
{
  "driverId": "driver-7891",
  "type": "RFID",
  "uid": "04:A3:C2:1B:8F:00:80",
  "validFrom": "2026-01-01T00:00:00Z",
  "validTo": "2027-01-01T00:00:00Z"
}

# 3. Pull CDRs for the driver to build usage report
GET /cdrs?driverId=driver-7891&dateFrom=2026-06-01&dateTo=2026-06-30`,
    },
  },
  {
    slug: "day-ahead-intraday-markets",
    name: "Day-Ahead & Intraday Energy Markets",
    shortDescription:
      "Turn EV charging into a price-responsive load — schedule sessions against EPEX SPOT prices, participate in balancing markets, and reduce energy costs by 20–40% for fleet operators.",
    fullDescription:
      "EV charging is one of the most price-elastic loads on the European electricity grid. A charge session that starts at 22:00 instead of 20:00 can cost half as much depending on day-ahead market prices. At scale, a network of managed chargers is effectively a large, schedulable load that can be optimised against electricity market prices in real time. GreenFlux's Smart Charging API accepts external scheduling signals, making it straightforward for a market-optimisation layer to push charging schedules derived from price forecasts. Session and MeterValues APIs provide the consumption data needed for settlement and reconciliation. With the ACER Network Code on Demand Response submitted to the European Commission in 2025, EV charging load will increasingly be eligible to participate in balancing and imbalance markets.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    category: "Energy",
    useCases: [
      "Shift fleet charging to low-cost, high-renewable periods — reducing energy costs and carbon footprint.",
      "Enable energy retailers to offer green tariffs scheduling sessions around renewable generation forecasts.",
      "Pre-position large overnight charging needs against next-day market prices, saving 20–40% vs unmanaged charging.",
    ],
    examplePartners: [
      "Energy trading and optimisation platforms (day-ahead, intraday, balancing)",
      "Market facilitation and aggregation software vendors",
      "ETRM systems with EV load modules",
    ],
    apiEndpoints: [
      { method: "POST", path: "/smartcharging/capacitygroups/{id}/scenarios/datetime",  description: "Push a market-derived charging schedule for a specific date/time window" },
      { method: "GET",  path: "/smartcharging/capacitygroups/{id}/scenarios/datetime",  description: "Retrieve all date-time capacity scenarios for a capacity group" },
      { method: "GET",  path: "/smartcharging/capacitygroups/{id}/allocationgraph",     description: "Real-time allocation data for settlement verification" },
      { method: "GET",  path: "/metervalues",                                           description: "Granular meter readings for imbalance settlement (30 s – 15 min)" },
      { method: "GET",  path: "/cdrs",                                                  description: "Completed session records for energy reconciliation" },
    ],
    codeExample: {
      title: "Push a day-ahead market schedule for off-peak charging",
      code: `# Market optimiser pushes a low-price window schedule at 14:00 for the next day
POST /smartcharging/capacitygroups/cg-fleet-depot/scenarios/datetime
{
  "startDateTime": "2026-07-01T22:00:00Z",
  "endDateTime":   "2026-07-02T06:00:00Z",
  "maxCapacity": 120,
  "comment": "EPEX spot low-price window €28/MWh"
}

# During peak hours — restrict to minimum guaranteed fleet charge
POST /smartcharging/capacitygroups/cg-fleet-depot/scenarios/datetime
{
  "startDateTime": "2026-07-02T07:00:00Z",
  "endDateTime":   "2026-07-02T21:00:00Z",
  "maxCapacity": 20,
  "comment": "Peak period — balancing market participation"
}

# Pull meter values for settlement reconciliation
GET /metervalues?capacityGroupId=cg-fleet-depot&from=2026-07-01T22:00:00Z`,
    },
  },
  {
    slug: "tariff-management",
    name: "Tariff Management",
    shortDescription:
      "Handle multi-dimensional pricing — per-kWh, time-based, idle penalties, promotional overrides — and connect the GreenFlux tariff engine to external billing, ERP, and regulatory compliance systems.",
    fullDescription:
      "Charging tariffs are the commercial model for EV infrastructure and they are far more complex than a single price per kWh. Operators charge differently by customer type, time of day, location, session duration, power level, and commercial arrangement with eMSPs. GreenFlux's platform supports tariffs combining per-kWh energy fees, time-based fees, session initiation fees, idle/overstay penalties, and promotional overrides. The EU's AFIR regulation introduces requirements for ad-hoc pricing transparency, price-per-kWh display, and contactless payment at public chargers. Tariff configurations are managed through the GreenFlux EV Portal and can be pushed and pulled via API. The CDR API provides session-level data for invoicing, revenue recognition, and dispute resolution.",
    icon: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z",
    category: "Commercial",
    useCases: [
      "Manage hundreds of commercial agreements across CPO, eMSP, and fleet customers from a single source of truth.",
      "Mirror variable electricity tariffs in public charging pricing, auto-adjusting rates when wholesale prices spike.",
      "Run loyalty and subscription programmes where members pay discounted rates alongside ad-hoc public pricing.",
    ],
    examplePartners: [
      "Billing and revenue management platforms for utilities and telcos",
      "Dynamic pricing engines with real-time market data feeds",
      "ERP systems with energy sector billing modules (SAP IS-U, Microsoft Dynamics, Oracle Utilities)",
    ],
    apiEndpoints: [
      { method: "GET",  path: "/tariff/{appToken}/evse/{locationId}/{evseUid}",          description: "Calculate tariff for a specific token and connector before session starts" },
      { method: "GET",  path: "/tariff/evse/{locationId}/{evseUid}",                     description: "Calculate default public tariff for a connector" },
      { method: "POST", path: "/bulktariff/{appToken}/{method}/{id}",                    description: "Bulk tariff calculation across multiple EVSEs" },
      { method: "GET",  path: "/crm/retailpackages",                                     description: "List retail packages (subscription tiers) for the eMSP" },
      { method: "GET",  path: "/cdrs",                                                   description: "Charge detail records for invoicing and revenue recognition" },
    ],
    codeExample: {
      title: "Pre-session tariff lookup and post-session CDR retrieval",
      code: `# 1. Show the driver their tariff before they plug in
GET /tariff/tok-rfid-4421/evse/loc-amsterdam-001/evse-3

# Response:
# {
#   "currency": "EUR",
#   "elements": [
#     { "type": "ENERGY",    "price": 0.39, "unit": "kWh" },
#     { "type": "TIME",      "price": 0.05, "unit": "min" },
#     { "type": "IDLE",      "price": 0.10, "unit": "min", "gracePeriod": 15 }
#   ]
# }

# 2. After the session, fetch the CDR for invoicing
GET /cdrs?locationId=loc-amsterdam-001&dateFrom=2026-06-30

# CDR contains energy delivered, duration, cost breakdown, and eMSP settlement data`,
    },
  },
  {
    slug: "flexibility-demand-response",
    name: "Flexibility & Demand Response",
    shortDescription:
      "Monetise idle charging capacity through flexibility markets — respond to grid signals from aggregators and DSOs, avoid congestion charges, and participate in VPP programmes.",
    fullDescription:
      "Europe's electricity grids are under growing stress — more renewable generation creates volatility, and more EVs create new peaks. Grid operators, aggregators, and utilities are increasingly willing to pay for controllable loads that can shift demand in response to grid signals. GreenFlux's Power Management API enables operators to monetise the flexibility in their networks, shifting charging load up or down in response to signals from an aggregator or grid operator. In the Netherlands, the Localflex Continuous NL market (operating via GOPACS since 2023) centralises congestion management offers from DSO-connected assets. GreenFlux-managed networks can participate through compatible aggregation platforms. As vehicle-to-grid technology matures, the same control interface used for demand response becomes the foundation for bidirectional charging.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
    category: "Energy",
    useCases: [
      "Parking operators with large public networks receive payments from grid operators for reducing output during stress events.",
      "Logistics companies enrol overnight fleet charging capacity in day-ahead flexibility markets for additional revenue.",
      "Utilities build VPP offerings combining EV charging load with battery storage and industrial demand response.",
    ],
    examplePartners: [
      "Jedlix, Equigy, Ampere Energy, Vandebron Energy",
      "Virtual power plant (VPP) operators",
      "DSO congestion management platforms",
    ],
    apiEndpoints: [
      { method: "PUT",  path: "/smartcharging/capacitygroups/{id}/algorithms/default",   description: "Adjust site power limit in real time (aggregator setpoint signal)" },
      { method: "POST", path: "/smartcharging/capacitygroups/{id}/evses/{uid}/priority", description: "Send a priority charge request for a specific EVSE" },
      { method: "GET",  path: "/smartcharging/capacitygroups/{id}/activeevses",          description: "Instantaneous list of active EVSEs (for flexibility baseline measurement)" },
      { method: "GET",  path: "/smartcharging/capacitygroups/{id}/priorityrequests",     description: "Retrieve pending and completed priority requests" },
      { method: "POST", path: "/remotecommands/change-configuration",                    description: "Push configuration change to charge station (OCPP)" },
    ],
    codeExample: {
      title: "Aggregator reduces site capacity in response to a DSO signal",
      code: `# DSO signals congestion — aggregator reduces site to 30 kW for 15 minutes
PUT /smartcharging/capacitygroups/cg-parking-north/algorithms/default
{
  "maxCapacity": 30,
  "reason": "GOPACS congestion signal — event #NL-2026-07-01-1423"
}

# Monitor active EVSEs to confirm curtailment is applied
GET /smartcharging/capacitygroups/cg-parking-north/activeevses

# Response shows each EVSE's current allocated power (should sum to ≤ 30 kW)

# After 15 min — restore normal limit
PUT /smartcharging/capacitygroups/cg-parking-north/algorithms/default
{
  "maxCapacity": 80,
  "reason": "Congestion event resolved"
}`,
    },
  },
  {
    slug: "payment-service-providers",
    name: "Payment Service Providers",
    shortDescription:
      "Cover every payment scenario — contactless ad-hoc (AFIR-compliant), in-app wallet, RFID, SEPA fleet invoicing — across 38 countries with a single CPMS-integrated PSP connection.",
    fullDescription:
      "Every charging session is a commercial transaction. In public charging, that transaction happens between a stranger and a machine — which means it must be frictionless, secure, and support every payment method the driver expects. GreenFlux supports multiple payment models and is designed to integrate with Europe's leading PSPs at two levels: terminal-side (PSP manages the payment terminal; GreenFlux initiates and terminates the session) and CPMS-side (GreenFlux manages the full payment flow via PSP API, covering tokenisation, authorisation, capture, and refund). Operating across 38 European countries means handling iDEAL, Bancontact, SEPA Direct Debit, and regional card schemes alongside Visa and Mastercard. The CDR API provides session-level records as input for invoicing, reconciliation, and chargeback management.",
    icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
    category: "Payments",
    featured: true,
    useCases: [
      "Large CPO networks process millions of transactions per month across multiple countries via a single PSP integration.",
      "Hospitality and retail CPOs enable guests to pay for charging with the same contactless terminal used at reception.",
      "Fleet EMSPs issue consolidated invoices to corporate customers with per-vehicle breakdowns from CDR data.",
    ],
    examplePartners: [
      "Adyen, Worldline, Checkout.com (pan-European)",
      "Stripe, Mollie (developer-friendly, fast integration)",
      "Paygasus and specialist EV payment providers",
    ],
    apiEndpoints: [
      { method: "POST", path: "/v2.1/token",                          description: "Register a PSP payment token in the GreenFlux platform" },
      { method: "GET",  path: "/payment/{appToken}/wallet",           description: "Retrieve all registered payment methods for a driver" },
      { method: "PUT",  path: "/payment/{appToken}/external",         description: "Add a PSP payment method (tokenised card, wallet, SEPA)" },
      { method: "PUT",  path: "/payment/{appToken}/chargecard",       description: "Store a physical RFID charge card in the driver's wallet" },
      { method: "GET",  path: "/tariff/{appToken}/evse/{loc}/{evse}", description: "Pre-session tariff lookup — show price before authorisation" },
      { method: "GET",  path: "/cdrs",                                description: "Post-session CDRs for PSP reconciliation and chargeback management" },
    ],
    codeExample: {
      title: "Register a PSP payment method and look up the tariff pre-authorisation",
      code: `# 1. Register a tokenised card from Adyen/Stripe/Mollie in GreenFlux
PUT /payment/app-tok-driver-8812/external
{
  "provider": "adyen",
  "providerToken": "8415XXXXXXXXXXXX",
  "cardBrand": "VISA",
  "last4": "4242",
  "expiryMonth": 12,
  "expiryYear": 2028
}

# 2. Before session: show the driver the price
GET /tariff/app-tok-driver-8812/evse/loc-brussels-042/evse-1

# 3. Start the session — GreenFlux authorises against the stored PSP token
POST /v2.1/session/start
{
  "appToken": "app-tok-driver-8812",
  "evseUid": "evse-1",
  "locationId": "loc-brussels-042"
}

# 4. After session: pull CDR for PSP settlement
GET /cdrs?appToken=app-tok-driver-8812&sessionId=sess-9931`,
    },
  },
  {
    slug: "customer-support-field-operations",
    name: "Customer Support & Field Operations",
    shortDescription:
      "Turn GreenFlux webhook alerts into auto-created support tickets, enable remote diagnostics before escalating to field teams, and track uptime SLAs across every charger in your network.",
    fullDescription:
      "A charge point network only generates revenue when the chargers work. Uptime is the most operationally critical metric for any CPO — and at scale, maintaining uptime requires systematic monitoring, incident management, and field operations. GreenFlux delivers Charge Station Notification events via webhook — fault codes, offline status, connectivity loss — the moment they occur. GreenFlux's Management API enables remote commands: reboot a charger, unlock a connector, push a firmware update, trigger a diagnostic report. When integrated into a helpdesk workflow, a support agent can attempt remote resolution before escalating to a field visit, reducing truck rolls and resolution time. Session data, meter values, and station status records feed operational dashboards that track availability KPIs per charger, per site, per operator.",
    icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
    category: "Operations",
    useCases: [
      "National CPO networks use GreenFlux webhook alerts to auto-create tickets in Zendesk, with L1 support attempting remote reboot before escalating to field teams.",
      "Fleet charging operators integrate GreenFlux uptime data into SLA dashboards, triggering escalation when availability drops below threshold.",
      "Service partners managing multi-site portfolios optimise technician routing, cutting unnecessary site visits.",
    ],
    examplePartners: [
      "Zendesk, Freshdesk, Jira Service Management",
      "ServiceNow (with field service module)",
      "Salesforce Field Service, Microsoft Dynamics Field Service",
    ],
    apiEndpoints: [
      { method: "GET",  path: "/chargestationnotifications",             description: "Poll OCPP status notifications from all charge stations" },
      { method: "GET",  path: "/chargestationnotifications/{stationId}", description: "Get notifications for a single charge station" },
      { method: "POST", path: "/remotecommands/reset",                   description: "Hard reset a charge station remotely (OCPP reset command)" },
      { method: "POST", path: "/remotecommands/unlock-connector",        description: "Unlock a stuck connector without a field visit" },
      { method: "POST", path: "/remotecommands/stop-session",            description: "Remotely stop an active charging session" },
      { method: "POST", path: "/chargestationconfigurations/batch",      description: "Push configuration updates to hundreds of stations simultaneously" },
    ],
    codeExample: {
      title: "Ingest a fault alert and attempt remote resolution",
      code: `# 1. Webhook delivers a fault notification (configured via GreenFlux portal)
# POST https://your-helpdesk.com/webhooks/greenflux
{
  "event": "ChargeStationStatusNotification",
  "chargeStationId": "cs-amsterdam-042",
  "connectorId": 1,
  "status": "Faulted",
  "errorCode": "GroundFailure",
  "timestamp": "2026-06-30T14:23:11Z"
}

# 2. Support agent polls for full notification history
GET /chargestationnotifications/cs-amsterdam-042

# 3. Attempt L1 remote resolution — hard reset the station
POST /remotecommands/reset
{
  "chargeStationId": "cs-amsterdam-042",
  "type": "Hard"
}

# 4. If fault persists — unlock connector to free driver's vehicle
POST /remotecommands/unlock-connector
{
  "chargeStationId": "cs-amsterdam-042",
  "connectorId": 1
}

# 5. Escalate to field team if unresolved (create work order in FSM system)`,
    },
  },
];

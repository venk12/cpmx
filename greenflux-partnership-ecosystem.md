# GreenFlux Partnership Ecosystem
## Research Report & Website Copy Source Material

---

## Executive Summary

GreenFlux is one of Europe's leading Charge Point Management System (CPMS) providers — a SaaS platform that powers the operations of Charge Point Operators (CPOs) and eMobility Service Providers (EMSPs) across 38 countries. With more than 1 million charge points under management, a 14-year track record, and the backing of DKV Mobility Group, GreenFlux sits at the centre of Europe's electric vehicle infrastructure.

The next phase of GreenFlux's growth is not just about more charge points — it is about becoming the connective tissue of a broader energy and mobility ecosystem. That means opening the platform to best-in-class partners: energy management systems that can optimise load, CRM platforms that unify customer data, energy markets that turn EV fleets into grid assets, tariff engines that unlock new business models, flexibility aggregators that monetise idle capacity, payment providers that handle every checkout scenario, and support tools that keep networks running at scale.

This report maps the full landscape of those partnership opportunities, providing the strategic rationale, technical integration logic, and real-world use cases for each domain. It is written to serve as source material for the GreenFlux Partnership Ecosystem website.

---

## Company & Platform Overview

### Who GreenFlux Is

Founded in Amsterdam in 2011, GreenFlux pioneered many of the open standards that define EV charging today — including early adoption of OCPP and pan-European roaming via OCPI. The company was acquired by DKV Mobility Group in 2021, giving it access to DKV's pan-European logistics network, fleet card infrastructure, and deep relationships with Europe's largest fleet operators.

By July 2025, GreenFlux's roaming network crossed 1 million charge points — covering 38 countries, representing 80% of European states, with near-complete coverage in the Netherlands, Germany, Belgium, France, Ireland, and Austria.

### What the Platform Does

The GreenFlux platform serves two primary customer types:

- **Charge Point Operators (CPOs):** businesses that own and operate charging infrastructure — from parking operators like Q-Park and Interparking, to energy companies like Eneco and EDP, to retailers like Aldi Nord.
- **eMobility Service Providers (EMSPs):** businesses that sell charging access to drivers, fleets, and corporate customers — often running branded apps and charge cards.

The platform handles the full operational stack:

| Capability | What it covers |
|---|---|
| Asset management | Commission, monitor, and control thousands of charge points remotely |
| Smart charging | Proprietary algorithms for capacity management and renewable alignment |
| Roaming | OCPI and OICP-based connections to 1M+ charge points across Europe |
| Tariff & billing | Flexible pricing structures, eMSP settlement, custom billing engine |
| Driver experience | White-label apps, charge cards, real-time session data |
| APIs | Comprehensive developer portal for custom integrations |

### Why Partnerships Matter

The GreenFlux platform is deliberately API-first and hardware-agnostic. It supports all versions of OCPP and connects to any compliant charger. This openness is intentional: the EV charging market is too diverse for any single vendor to own the full stack. The most successful operators assemble a best-of-breed ecosystem — and GreenFlux is engineered to be the platform that orchestrates it.

---

## Partnership Ecosystem: 7 Integration Domains

---

### 1. Energy Management Systems (EMS)

#### The Opportunity

Every site with charging infrastructure also has an energy budget — a grid connection with finite capacity shared between charging, HVAC, lighting, production, and other loads. As charging networks grow, managing that budget becomes the defining operational challenge. Energy Management Systems (EMS) are the software layer that optimises energy flows across a site or portfolio.

GreenFlux and an EMS are natural partners: GreenFlux knows the real-time state of every charger on a site, and the EMS knows the overall energy picture. Together, they can do things neither can do alone.

#### What Integration Enables

**Capacity management at the grid connection point.** GreenFlux's smart charging algorithms can dynamically allocate charging power across all active sessions, keeping total site consumption below the contracted grid limit. When connected to an EMS, this becomes fully dynamic — the EMS signals available headroom, and GreenFlux redistributes it across chargers in real time.

**Renewable alignment.** Sites with on-site solar or wind generation can instruct GreenFlux to ramp charging up when generation exceeds demand, and throttle it down when the grid is the only source. EMS partners provide the generation and consumption telemetry; GreenFlux adjusts charger setpoints via its Smart Charging API.

**Multi-asset optimisation.** For sites with battery storage, the EMS orchestrates the interplay between solar, battery, building load, and EV charging. GreenFlux participates as a controllable load — predictable, schedulable, and responsive to external signals.

#### Technical Integration

GreenFlux exposes a Smart Charging API that accepts capacity constraints and charging schedules from external systems. Data APIs deliver real-time session data, meter values, and charge station status via webhooks. EMS vendors can also receive Charge Station Notification events to react to charger state changes without polling.

#### Ideal EMS Partner Profile

- Building and industrial EMS providers (BMS integration layer)
- Grid management software for utilities and DSOs
- Smart home / residential energy platforms
- Solar and battery storage management systems (BESS integrators)

#### Use Cases

- **Parking operators:** Prevent peak demand charges at garages with hundreds of simultaneous charging sessions.
- **Logistics hubs:** Guarantee fleet charging overnight without exceeding the site's industrial grid connection.
- **Mixed-use developments:** Balance EV charging against building loads in office parks, shopping centres, and residential complexes.
- **Renewable-first operators:** Maximise the share of green energy delivered through the charger, reducing Scope 2 emissions for corporate clients.

---

### 2. CRM & Commercial Platforms

#### The Opportunity

GreenFlux manages tens of thousands of drivers, fleet accounts, charge cards, and customer subscriptions on behalf of its operator customers. That data is mission-critical for commercial operations — customer onboarding, account management, usage reporting, invoicing, and renewal. Most operators already have a CRM or ERP system at the centre of their commercial operations. The gap between those systems and the CPMS is where revenue leaks and service quality suffers.

CRM integration closes that gap.

#### What Integration Enables

**Unified customer view.** When a driver's charge session data, subscription status, charge card records, and support tickets all appear in the same CRM record, customer service teams can resolve issues faster and identify upsell opportunities automatically.

**Automated onboarding.** Fleet operators signing up for charging services trigger automated workflows: charge card provisioning, access rights configuration, tariff assignment, and welcome communications — all without manual CPMS administration.

**Subscription and contract management.** GreenFlux's CRM API surfaces customer, driver, and token records to external systems. CRM partners can write changes back — activating or deactivating cards, updating tariff groups, managing fleet hierarchies — making the CPMS an extension of the commercial system rather than a separate silo.

**Revenue operations.** Linking charging session data (CDRs) to CRM account records enables accurate revenue attribution, commission calculations for resellers, and usage-based renewal triggers.

#### Technical Integration

GreenFlux provides a dedicated **CRM API** on the EMSP side, covering:
- Customer and driver record management
- Token / RFID card provisioning and lifecycle
- Access group and tariff group assignment

The Data API suite (CDR, Session, Location) provides session-level records that CRM systems can consume to build usage dashboards and billing inputs.

#### Ideal CRM Partner Profile

- Salesforce ISVs and system integrators building EV charging apps on the platform
- Microsoft Dynamics partners serving energy and utilities customers
- HubSpot and Pipedrive integrations for growth-stage EMSPs
- Custom ERP vendors in fleet management and mobility services

#### Use Cases

- **EMSPs** managing thousands of residential and corporate driver accounts, automating subscriber lifecycle from signup to renewal.
- **Fleet managers** needing full visibility of charge activity per vehicle, per driver, and per cost centre — surfaced in the tools their finance teams already use.
- **Reseller networks** where local partners manage their own customer base but need to provision RFID cards and report usage through the platform.

---

### 3. Day-Ahead & Intraday Energy Markets

#### The Opportunity

EV charging is one of the most price-elastic loads on the European electricity grid. A charge session that starts at 22:00 instead of 20:00 can cost half as much — or less — depending on day-ahead market prices. At scale, a network of managed chargers is effectively a large, schedulable load that can be optimised against electricity market prices in real time.

This creates a significant opportunity for partners who operate at the intersection of energy markets and charging infrastructure.

#### What Integration Enables

**Price-responsive charging schedules.** By ingesting day-ahead prices from EPEX SPOT (or national variants), a scheduling layer can instruct GreenFlux to pre-charge vehicles during low-price hours and avoid peak periods. EPEX SPOT is moving from hourly to 15-minute price intervals — a change that dramatically increases the optimisation value for smart charging systems.

**Market-facing load participation.** With the ACER Network Code on Demand Response submitted to the European Commission in 2025 (national enforcement expected around 2027), EV charging load will increasingly be eligible to participate in balancing and imbalance markets. Partners that aggregate GreenFlux-managed charging load can bid that flexibility into these markets.

**National market facilitator connections.** GreenFlux already connects to national market infrastructure through eMSP roaming partners including Mobi-E (Portugal), EIPA (Poland), and AVERE (France). Energy market partners can extend this to electricity procurement and settlement.

**Imbalance market participation.** For operators with predictable charging profiles — fleet depots, overnight residential charging — the difference between the actual and scheduled charging load can be traded in real-time balancing markets, generating additional revenue from infrastructure that was already planned.

#### Technical Integration

GreenFlux's Smart Charging API accepts external scheduling signals, making it straightforward for a market-optimisation layer to push charging schedules derived from price forecasts. Session and MeterValues APIs provide the consumption data needed for settlement and reconciliation.

#### Ideal Partner Profile

- Energy trading and optimisation platforms (day-ahead, intraday, balancing)
- Market facilitation and aggregation software vendors
- ETRM (Energy Trading and Risk Management) systems with EV load modules
- Utilities with proprietary trading desks looking to incorporate EV charging as a managed load

#### Use Cases

- **Utilities** that supply electricity and operate charging infrastructure can automatically shift charging load to low-cost, high-renewable periods, reducing both energy cost and carbon footprint.
- **Energy retailers** offering green tariffs that guarantee renewable-sourced charging by scheduling sessions around renewable generation forecasts.
- **Corporate fleet operators** with large overnight charging needs that can pre-position load against next-day market prices, reducing energy costs by 20–40% compared to unmanaged charging.

---

### 4. Tariff Management

#### The Opportunity

Charging tariffs are the commercial model for EV infrastructure — and they are far more complex than a single price per kWh. Operators charge differently by customer type (public, fleet, subscriber), by time of day, by location, by session duration, by power level, and by the commercial arrangement with eMSPs. Getting tariffs right is the difference between a profitable network and one that subsidises its users.

GreenFlux includes a powerful tariff engine, and the most sophisticated operators need to integrate that engine with external billing, ERP, and pricing management systems.

#### What Integration Enables

**Multi-dimensional tariff structures.** The GreenFlux platform supports tariffs combining:
- Per-kWh energy fees
- Time-based fees (per minute, per hour)
- Session initiation fees
- Idle/overstay penalties
- Promotional overrides by location or time window

These structures can be managed natively or driven by external tariff management systems that reflect commercial contracts, regulatory requirements, or dynamic pricing strategies.

**eMSP settlement.** GreenFlux supports predefined tariff codes that flow through roaming connections to eMSPs, enabling automated settlement across commercial agreements. Integration with billing platforms enables this to feed directly into accounts receivable workflows.

**Regulatory compliance.** The EU's AFIR regulation introduces requirements for ad-hoc pricing transparency, price-per-kWh display, and contactless payment at public chargers. Tariff management integrations can help operators maintain compliance at scale across diverse infrastructure.

**Dynamic and time-of-use pricing.** As electricity costs become more volatile (driven by renewable intermittency and market liberalisation), operators increasingly want tariffs that reflect real-time energy cost. A tariff management integration that connects energy procurement to charging prices enables true cost-plus pricing.

#### Technical Integration

Tariff configurations are managed through the GreenFlux EV Portal and can be pushed and pulled via API. The CDR (Charge Detail Record) API provides the session-level data that billing systems need for invoicing, revenue recognition, and dispute resolution.

#### Ideal Partner Profile

- Billing and revenue management platforms for utilities and telcos
- Dynamic pricing engines with real-time market data feeds
- Regulatory compliance tools for AFIR and national charging frameworks
- ERP systems with energy sector billing modules (SAP IS-U, Microsoft Dynamics, Oracle Utilities)

#### Use Cases

- **Large CPO networks** with hundreds of commercial agreements across CPO, eMSP, and fleet customers — each with different tariff structures — needing a single source of truth that flows into their invoicing system.
- **Utilities** that want to mirror their variable electricity tariffs in their public charging pricing, automatically adjusting public rates when wholesale prices spike.
- **Commercial parking operators** running loyalty and subscription programmes, where members pay a discounted rate while public users pay ad-hoc prices.

---

### 5. Flexibility & Demand Response

#### The Opportunity

Europe's electricity grids are under growing stress — more renewable generation creates volatility, and more EVs create new peaks. Grid operators, aggregators, and utilities are increasingly willing to pay for controllable loads that can shift demand in response to grid signals. A well-managed network of EV chargers is exactly such a load.

GreenFlux's Power Management capability is the gateway to this market.

#### What Integration Enables

**Flexibility monetisation.** GreenFlux's Power Management API enables operators to monetise the flexibility in their networks — shifting charging load up or down in response to signals from an aggregator or grid operator. This turns charging infrastructure from a cost centre into a revenue-generating asset.

**Congestion avoidance.** By working with distribution system operators (DSOs) and flexibility markets, GreenFlux-powered networks can respond to local grid congestion signals, reducing charging output at peak times and avoiding costly grid reinforcement. This is directly valuable for operators who want to deploy more chargers on existing grid connections without expensive upgrades.

**Virtual power plant (VPP) participation.** Aggregators can pool GreenFlux-managed charging capacity alongside other flexible assets (batteries, industrial loads, heat pumps) to bid into balancing markets. The GreenFlux Smart Charging API provides the control interface; the aggregator handles the market participation.

**GOPACS and Localflex integration.** In the Netherlands, the Localflex Continuous NL market (operating via GOPACS since 2023) centralises congestion management offers from DSO-connected assets. GreenFlux-managed networks in the Netherlands can participate through compatible aggregation platforms.

**V2G readiness.** As vehicle-to-grid technology matures, the same control interface used for demand response becomes the foundation for bidirectional charging — where EVs discharge to the grid during peak periods. GreenFlux's architecture is designed to support V2G when the hardware ecosystem is ready.

#### Technical Integration

The Smart Charging API accepts setpoint signals from external aggregators, specifying target power levels per charger or per group. Real-time session and meter data provide the measurement basis for flexibility verification and settlement.

#### Ideal Partner Profile

- Flexibility aggregators (Jedlix, Equigy, Ampere Energy, Vandebron Energy)
- Virtual power plant (VPP) operators
- DSO congestion management platforms
- Grid balancing and ancillary services providers
- National and cross-border TSO flexibility programmes

#### Use Cases

- **Parking operators** with large public charging networks participate in flexibility programmes, receiving payments from their grid operator for reducing charging output during grid stress events.
- **Logistics companies** with fleet depots enrol their overnight charging capacity in day-ahead flexibility markets, generating revenue from capacity that is idle during peak grid hours.
- **Utilities** build VPP offerings that include EV charging load alongside battery storage and industrial demand response, creating a fully optimised flexibility product for the balancing market.

---

### 6. Payment Service Providers (PSPs)

#### The Opportunity

Every charging session is a commercial transaction. In public charging, that transaction happens between a stranger and a machine — which means it must be frictionless, secure, and support every payment method the driver expects. In managed and fleet charging, it means reliable invoicing, credit management, and reconciliation. Payment is not peripheral to the charging experience — it is part of it.

GreenFlux supports multiple payment models and is designed to integrate with Europe's leading PSPs.

#### What Integration Enables

**CPMS-integrated payment control.** When payment is handled at the CPMS level (rather than the terminal level), the operator gains centralised control over pricing, session management, and reporting. A single payment integration covers the full network — no per-terminal payment contracts, no fragmented reporting.

**Ad-hoc contactless payment.** For public charging under AFIR requirements, contactless card payment (via NFC terminal) must be available without prior registration. GreenFlux supports terminal-side and CPMS-side integration patterns, enabling operators to choose the architecture that fits their hardware and commercial model.

**App-based and RFID payment.** White-label apps built on the GreenFlux Charge Assist API support in-app payment flows, subscription management, and wallet top-ups — covering the full range of driver payment preferences.

**Multi-currency and local payment methods.** Operating across 38 European countries means handling iDEAL (Netherlands), Bancontact (Belgium), SEPA Direct Debit (pan-European), and regional card schemes alongside Visa and Mastercard. PSP partners with strong European local method coverage are particularly valuable.

**Fleet billing and invoicing.** Fleet operators expect consolidated monthly invoices, not per-transaction receipts. GreenFlux's CDR data feeds fleet billing workflows in partner systems, enabling automated invoice generation per cost centre, per vehicle, or per driver.

#### Technical Integration

GreenFlux's payment integration operates at two levels:
1. **Terminal-side:** PSP manages the payment terminal and authorisation; GreenFlux initiates and terminates the session.
2. **CPMS-side:** GreenFlux manages the full payment flow via PSP API, covering tokenisation, authorisation, capture, and refund — with the terminal acting as a simple NFC reader.

The CDR API provides session-level records as input for invoicing, reconciliation, and chargeback management in partner systems.

#### Ideal Partner Profile

- **Pan-European PSPs:** Adyen, Worldline, Checkout.com (strong multi-country infrastructure)
- **Growth-market PSPs:** Stripe, Mollie (developer-friendly, fast integration)
- **Specialist EV payment providers:** Paygasus and others with EV-specific terminal and CPMS integration expertise
- **Fleet expense management platforms:** tools that consolidate EV charging spend alongside fuel and travel costs

#### Use Cases

- **Large CPO networks** processing millions of transactions per month across multiple countries use a single PSP integration via GreenFlux, with centralised reporting and reconciliation instead of per-country payment contracts.
- **Hospitality and retail CPOs** (hotels, shopping centres) enable guests to pay for charging with the same contactless terminal they use at the hotel bar or car park barrier — powered by a shared PSP integration.
- **Fleet EMSPs** issue consolidated invoices to corporate customers for all charging activity across the GreenFlux network, with per-vehicle breakdowns generated automatically from CDR data.

---

### 7. Customer Support & Field Operations Tools

#### The Opportunity

A charge point network only generates revenue when the chargers work. Uptime is the most operationally critical metric for any CPO — and at scale (hundreds or thousands of chargers across multiple sites), maintaining uptime requires a systematic approach to monitoring, incident management, and field operations. Customer support teams need real-time visibility; field technicians need work orders routed intelligently; managers need SLA dashboards.

GreenFlux provides the raw operational data and remote control capabilities. Support and field operations partners provide the workflow layer on top.

#### What Integration Enables

**Real-time alerting.** GreenFlux delivers Charge Station Notification events via webhook — fault codes, offline status, connectivity loss — the moment they occur. Support platforms can ingest these events and auto-create incidents, assign them to field teams, and track resolution time against SLA commitments.

**Remote diagnostics and resolution.** GreenFlux's Management API enables remote commands: reboot a charger, unlock a connector, push a firmware update, trigger a diagnostic report. When integrated into a helpdesk workflow, a support agent can attempt remote resolution before escalating to a field visit — reducing truck rolls and resolution time.

**Firmware and configuration management at scale.** Batch commands via the GreenFlux platform allow operators to push firmware updates or configuration changes across hundreds of chargers simultaneously. Integration with change management tools ensures updates are tracked, tested, and rolled back if needed.

**Field service routing.** When remote resolution fails, the incident needs to become a field service work order — with the right technician, the right parts, and the right priority. Field service management (FSM) integrations can receive incident data from GreenFlux-triggered alerts and automatically generate optimised work orders.

**Uptime and SLA reporting.** Session data, meter values, and station status records from GreenFlux feed into operational dashboards that track availability KPIs — per charger, per site, per operator. This data underpins the SLA commitments operators make to their site hosts and fleet customers.

#### Technical Integration

GreenFlux provides:
- **Webhook-based event streaming** for Charge Station Notifications, Session events, and CDRs — enabling real-time incident creation in external systems.
- **Management API** for remote commands (reboot, unlock, firmware push) that can be triggered from within a helpdesk ticket.
- **Data APIs** (Location, Session, MeterValues) for historical and aggregate operational reporting.

#### Ideal Partner Profile

- Helpdesk and ticketing platforms: Zendesk, Freshdesk, Jira Service Management
- IT service management (ITSM): ServiceNow (with field service module)
- Field service management: Salesforce Field Service, Microsoft Dynamics Field Service, ClickSoftware
- IoT monitoring and observability platforms with EV or industrial device management modules

#### Use Cases

- **National CPO networks** operating 24/7 public charging use GreenFlux webhook alerts to auto-create tickets in Zendesk, with L1 support attempting remote reboot before escalating to field teams — reducing mean time to resolution from hours to minutes.
- **Fleet charging operators** integrate GreenFlux uptime data into their customer SLA dashboards, giving fleet managers real-time visibility of charger availability at each depot and triggering escalation workflows when availability drops below threshold.
- **Service partners and system integrators** managing GreenFlux deployments on behalf of CPO customers use a field service integration to optimise technician routing across multi-site portfolios, cutting unnecessary site visits and improving first-fix rates.

---

## Why Partner with GreenFlux

### 1. Reach at European Scale
With 1 million+ charge points across 38 countries, partnering with GreenFlux means instant access to a significant and growing share of Europe's active charging infrastructure. A single integration reaches CPOs and EMSPs operating in every major European market.

### 2. The DKV Mobility Network
GreenFlux is part of DKV Mobility — one of Europe's largest providers of payment solutions for commercial transport, serving more than 200,000 customers across the continent. This gives GreenFlux partners access to fleet relationships, logistics networks, and commercial infrastructure that no pure-play EV software company can match.

### 3. API-First Architecture
Every GreenFlux capability is accessible via documented API. The developer portal at [developer.greenflux.com](https://developer.greenflux.com) provides complete API documentation, enabling partners to build deep, production-grade integrations without custom development from GreenFlux's side.

### 4. Open Standards, No Lock-In
GreenFlux's commitment to OCPP, OCPI, and OICP means partners are integrating with industry standards, not proprietary protocols. Hardware manufacturers, roaming hubs, and energy market platforms can all connect using the same standards that govern the wider EV charging market.

### 5. Flexible Deployment Models
Partners can work with GreenFlux at the level that fits their product:
- **White-label** — embed GreenFlux capabilities under your brand
- **API-first** — build a completely custom user experience on top of GreenFlux infrastructure
- **Platform add-on** — integrate as a featured capability within the GreenFlux EV Portal

### 6. Proven at Scale
GreenFlux has managed large-scale migrations and deployments for some of Europe's most demanding operators — Eneco (3,500 stations), Equans (2,500+ stations in Amsterdam), Q-Park (1,700 charge points), and TotalEnergies. Partners inherit the confidence of a platform that has been stress-tested in real-world European operations.

---

## Technical Integration Models

| Model | Description | Best For |
|---|---|---|
| **API Integration** | Full access to GreenFlux APIs via the developer portal. Build your own UI, workflows, and data pipelines on top of GreenFlux infrastructure. | Tech-native partners with development capacity |
| **Webhook Streaming** | Subscribe to real-time event streams from GreenFlux (session start/stop, station faults, CDRs) to drive workflows in external systems. | Monitoring, alerting, and support platforms |
| **White-Label Portal** | Rebrand the GreenFlux EV Portal and Charge Assist app under your own brand, with custom configuration. | Partners who want a complete product without building one |
| **Co-branded Add-On** | Appear as a featured integration within the GreenFlux EV Portal, accessible to all operator customers. | ISVs and SaaS partners seeking distribution |

All integrations are documented at **developer.greenflux.com**.

---

## Getting Started

GreenFlux is actively building its partner ecosystem and welcomes integration discussions across all seven domains covered in this report.

**For technical integrations:** Start with the Developer Portal at [developer.greenflux.com](https://developer.greenflux.com) — full API documentation, authentication guides, and sandbox access.

**For commercial partnership discussions:** Contact the GreenFlux partnerships team to explore co-marketing, distribution, and commercial arrangements.

**For system integrators:** GreenFlux works with regional system integrators (such as PROTASIS in Greece and ICT Group in the Netherlands) who provide end-to-end deployment services for GreenFlux-powered charging networks.

---

*This report was prepared as source material for the GreenFlux Partnership Ecosystem website. All partnership claims and integration capabilities are based on publicly available GreenFlux documentation, developer portal content, and industry research as of June 2026.*

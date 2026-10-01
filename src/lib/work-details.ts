/** Detailed career copy for the website; the PDF resume stays independent. */
export type RoleDetailSection = { title: string; items: string[] }
export type RoleDetail = { summary: string; sections: RoleDetailSection[] }

export const ROLE_DETAILS: Record<string, RoleDetail> = {
  '2025-05-08': {
    summary:
      'I lead engineering for Ariya, a generative AI platform for pharma marketing and medical teams. I design the architecture, write code, set engineering standards, and lead delivery across eight client deployments.',
    sections: [
      {
        title: 'Platform and team',
        items: [
          'Restructured Ariya into core API, portal, and authoring applications. Defined their boundaries and set up a common CI and release process across client deployments.',
          'Reviewed code and coordinated changes across shared services and client applications so deployments stayed consistent.',
          'Wrote onboarding docs, contribution standards, and the architecture plan in the engineering wiki. The team uses them to develop and release the platform.',
        ],
      },
      {
        title: 'LLM content generation',
        items: [
          'Designed Content Compose as three LLM stages: rank relevant brand content, prepare references from retrieved sources, and write the medical email. Each stage handles a separate part of content selection or citation processing.',
          'Built hybrid text and vector retrieval on Azure AI Search. Checked which fields support filtering and added a text-only fallback when embedding fails.',
          'Rebuilt the bibliography after generation from retrieved sources and inline citation markers. Generated subject lines and preheaders separately and standardized citation formatting for reviewers.',
          'Built a separate validator with 14 checks at four severity levels. It checks for missing content, citation errors, placeholder links, retrieval relevance, and generation cost and latency before editorial review.',
          'Added support for hierarchical and flat brand-content schemas so both use the same generation pipeline.',
        ],
      },
      {
        title: 'Conversational AI',
        items: [
          'Took a white-label RAG assistant over 551 medical publications from a Turborepo migration through staging, UAT, and production. Deployed it on Azure Container Apps with secrets managed in Key Vault.',
          'Built PIN and JWT access, citation chips that open source PDFs, an agent-step panel, token reporting, and feedback. Added an admin console for users, conversations, feedback, and audit logs, with operational analytics in Application Insights.',
          'Built the Speech Avatar with the Azure Speech SDK, Django, and the portal UI. It handles speech and ICE credentials, streaming chat, avatar configuration, conversation logs, and post-call analysis.',
          "Added admin statistics and thread filters to a teammate's FastAPI and LangGraph agent service. Corrected UTC aggregation and resolved user identities for usage reports.",
        ],
      },
      {
        title: 'Authoring product',
        items: [
          'Moved the Content Wizard from hardcoded steps to API configuration for channels, variants, content types, and forms. Clients can change authoring flows without changes to their UI code.',
          'Added per-instance theming and delegated template administration so clients can manage branding and approvals on the shared codebase.',
          'Built localization across the portal and backend. A central service manages translation rules, the database defines available languages, and an in-browser HTML translator saves versioned content inside the authoring flow.',
          'Built predefined-intent management in the client admin portal and started the Enterprise Data Management catalog, which teammates extended.',
        ],
      },
      {
        title: 'Regulated content lifecycle',
        items: [
          'Built the content lifecycle around the AI Content Wizard: authoring, multi-stage approval, compliance checks, and distribution for pharmaceutical teams in regulated markets.',
          'Designed LLM orchestration with prompts, context injection, retrieval, embeddings, and tool calling. It supports traceable generation across content types and markets.',
        ],
      },
      {
        title: 'Enterprise integrations',
        items: [
          "Integrated Veeva CRM and Salesforce Marketing Cloud into Ariya's campaign workflows so pharma teams can use its content and engagement features within their existing enterprise systems.",
          'Supported omnichannel campaigns across client tenants and incorporated compliance requirements into the integration workflows.',
        ],
      },
      {
        title: 'Data catalog and access',
        items: [
          'Led the Data Catalog work. Business and engineering teams can find available data through its metadata.',
          'Added data observability and self-service access to the catalog so teams can inspect data operations and use the data they find.',
        ],
      },
      {
        title: 'Data engineering',
        items: [
          'Designed structured-data ingestion with Bronze, Silver, and Gold layers on Azure Blob Storage. Added a DBML schema registry, run tracking, and CLI tools for schema conversion, migrations, and secrets management.',
          'Fixed production Gold-layer failures caused by Unicode data, schema mismatches, text overflow, missing key guards, platform encoding, and stale-file retries. Added deterministic hashed keys for repeatable UPSERTs and fixed a parser bug that dropped nullable columns.',
          'Enforced utf8mb4 when creating tables as well as opening connections so new tables can store Unicode data.',
          'Built the HCP and SFMC email-data APIs for the Daily Sales Brief. A teammate built its WhatsApp delivery integration.',
        ],
      },
      {
        title: 'Security',
        items: [
          'Built a repeatable SonarQube scanning and remediation workflow with hotspot exports and baseline comparisons. Applied 20 fixes to the core API and portal across three client release lines.',
          'Replaced static-IV AES-CBC with AES-GCM and random nonces, restricted JWT algorithms, replaced weak hashes with SHA-256, parameterized SQL, restored webhook CSRF controls, narrowed Docker build inputs, and added cryptographic randomness in the portal.',
          'Encrypted user phone numbers at rest, automated dependency security audits that open issues, and coordinated database SSL certificate rotation across seven environments and four services.',
        ],
      },
      {
        title: 'Delivery',
        items: [
          'Set up reusable deployment workflows for staging, UAT, and production across client and internal environments.',
          'Added uv and Docker layer caching to Python builds. Coordinated dependency fixes across client deployments to keep builds efficient and releases consistent.',
          'Built a JSON-to-PPTX service with Bun, Elysia, and pptxgenjs. The same implementation runs as a server or an Azure Function.',
          'Built content-metrics APIs and cached event reports for administrators, with filters for author, status, content subtype, and date range.',
        ],
      },
    ],
  },
  '2023-10-01': {
    summary:
      "I was technical lead for MobiLytix Rewards, Comviva's multi-tenant loyalty platform. I owned the member-targeting services and shared backend packages, and coordinated releases with in-house and vendor engineers.",
    sections: [
      {
        title: 'Platform rewrite',
        items: [
          'Led the rewrite of MobiLytix Rewards as a cloud-agnostic, multi-tenant SaaS platform for telecom and retail customers. Owned full-stack architecture across its microservices.',
          'Built product features and backend services in TypeScript, React, and FeathersJS, with PostgreSQL, Delta Lake, and vector databases for the data layer.',
        ],
      },
      {
        title: 'Campaign processing and personalization',
        items: [
          'Owned the Kafka campaign-processing pipeline for reward and loyalty workflows. Used asynchronous processing and caching to handle high-throughput execution.',
          'Delivered AI/ML personalization and segmentation for loyalty targeting alongside the rule-based segmentation service.',
        ],
      },
      {
        title: 'Platform observability',
        items: [
          'Introduced platform observability and monitoring so engineers can inspect service behavior during releases and in production.',
          'Used the monitoring to make deployments more reliable and diagnose and resolve production incidents faster.',
        ],
      },
      {
        title: 'Releases',
        items: [
          'Led upgrades and production releases across six loyalty services, coordinating the rollout across the platform.',
          'Coordinated features, bug fixes, static-analysis findings, and penetration-test remediation with in-house and vendor engineers across services.',
        ],
      },
      {
        title: 'Segmentation service',
        items: [
          'Designed and built the loyalty segmentation service. It turns rule-builder JSON into PostgreSQL queries across 26 operators, including 11 date operators for time-sensitive campaigns.',
          'Queried core member fields directly and custom attributes from JSON. Clients can add targeting criteria without database schema changes.',
          'Built one-time, cron, and fixed-date execution with run states, error history, and stale-run detection. Operators can see when scheduled targeting fails or stalls.',
        ],
      },
      {
        title: 'Loyalty core',
        items: [
          'Made club provisioning transactional across membership, member, and segment data so partial setup rolls back. Added member status, support history, and segment-run history to the tenant model.',
          'Used Kafka to recompute segments when they are created or updated so targeting reflects the current campaign rules.',
        ],
      },
      {
        title: 'Shared packages',
        items: [
          'Wrote the shared PostgreSQL and Redis clients used by five services, plus JWT helpers for service-to-service authentication.',
          'Led development of the shared member package for enrollment, membership validation, attribute updates, segmentation checks, and Redis caching.',
          'Moved the S3 storage package to TypeScript and automated connector publishing in GitLab CI. Services can use typed storage interfaces and published package versions.',
        ],
      },
      {
        title: 'Testing',
        items: [
          'Introduced Jest tests and coverage gates for segmentation, scheduling, and tier services. The segmentation suite has 48 cases, including 17 for query translation, where a mistake changes which members a campaign targets.',
          'Set coverage targets of 65-80% and measured the scheduler and tier baselines so the team could see the gaps and track improvements.',
        ],
      },
    ],
  },
  '2021-12-01': {
    summary:
      'I led engineering at Factoreal, an omnichannel marketing platform for ecommerce, sports, and other businesses. My work covered email, SMS, WhatsApp, push, social, segmentation, customer journeys, commerce, and analytics.',
    sections: [
      {
        title: 'Fan Maturity Model',
        items: [
          "Designed the Fan Maturity Model for Factoreal's sports vertical. It combines email, SMS, app, web, commerce, and WhatsApp engagement into four audience tiers using weights each customer can configure.",
          'Built daily scoring and portal configuration. Separated channel scores from rollups and automated query creation, deletion, and rescheduling so teams can manage engagement targeting without SQL.',
        ],
      },
      {
        title: 'Commerce',
        items: [
          'Rebuilt the Shopify integration for its App Store relaunch, including installation, signup, store provisioning, and OAuth permissions. Expanded webhook coverage from 17 to 40 topics and added GraphQL subscriptions for app and billing events. A teammate built the billing plans.',
          'Upgraded the Shopify API integration as its versions changed so commerce ingestion stayed compatible.',
          'Fixed duplicate customer identities caused by inconsistent international phone formats. Used libphonenumber for country-aware normalization and contact matching.',
          'Created the ticketing integration service and built SeatGeek synchronization. Added WhatsApp cart activity and order attribution to commerce data capture.',
        ],
      },
      {
        title: 'Analytics at scale',
        items: [
          'Built and expanded BigQuery analytics for a platform handling 10 billion transactions. Customer engagement and commerce data feed its reports and audience scoring.',
          'Automated dataset provisioning and scoring schedules across 71 customer datasets and 998 scheduled queries for recurring tenant reports.',
          'Automated GoodData cache invalidation and built social-follower reports and a Jira-to-BigQuery reporting sync.',
        ],
      },
      {
        title: 'Shared code and data operations',
        items: [
          'Moved contact operations into a shared package used by five production services and built plan-entitlement logic used by twelve. Services use the same customer and subscription rules.',
          'Automated customer retirement across tenant data and wrote contact-cleanup routines so the team can repeat these maintenance operations.',
          'Changed contact queries from broad JSONB containment to key equality and selected only required fields. This reduced unnecessary work in a frequently used data-access path.',
        ],
      },
      {
        title: 'Account security',
        items: [
          'Added tenant-configurable session expiry with idle detection and reCAPTCHA Enterprise risk scoring on signup to control account access and trial registration.',
          'Reviewed penetration-test remediation with the implementing engineer and checked the fixes against existing authentication and application flows.',
        ],
      },
    ],
  },
  '2020-06-01': {
    summary:
      "I worked across Factoreal's core API, React portal, and backend services. I built the data pipelines, integrations, and channel support that feed its analytics and campaign workflows.",
    sections: [
      {
        title: 'Analytics pipeline',
        items: [
          'Built the PostgreSQL and Cassandra-to-BigQuery sync engine across 24 entity workflows for contacts, commerce, campaigns, journeys, and omnichannel events. Added incremental sync and Cassandra pagination as data volumes grew.',
          'Automated dataset provisioning at signup so new customers receive their reporting infrastructure without manual database setup.',
          'Built email delivery and engagement KPI APIs and embedded GoodData dashboards in the portal. Customers can see deliverability, audience response, and unsubscribe rates.',
        ],
      },
      {
        title: 'Commerce and payments',
        items: [
          'Made Shopify order ingestion safe under webhook retries with application-level idempotency and database uniqueness constraints. Both prevent duplicate order records.',
          'Built abandoned-cart detection with Redis state, Kafka events, and tenant-configurable timeouts. Incomplete purchases trigger customer journeys.',
          'Integrated Razorpay payment ingestion and published order and payment events to Kafka for downstream marketing workflows.',
        ],
      },
      {
        title: 'Tracking and channels',
        items: [
          'Added Redis-backed page deduplication and tenant-specific event exclusions so repeated page views no longer inflate the event catalog. Useful tracking signals remain available.',
          'Fixed first-visit double counting in the customer tracking snippet so reporting and segmentation use accurate visit data.',
          'Built web-push subscriptions and mobile SDK registration and events in the core API to support customer engagement on the web and in apps.',
        ],
      },
      {
        title: 'Signup and growth',
        items: [
          'Built verified email-domain onboarding, branded confirmation messages, and trial signup to take customers from the website into the product.',
          'Built HubSpot contact migration with SES status notifications so customers can import existing audiences and track progress.',
          "Added analytics, advertising pixels, and conversational capture to Factoreal's website to measure acquisition activity.",
        ],
      },
    ],
  },
}

export type SelectedSystem = {
  title: string
  context: string
  problem: string
  built: string
  result: string
  stack: string[]
}

export const SELECTED_SYSTEMS: SelectedSystem[] = [
  {
    title: 'Content Compose',
    context: 'Phamax',
    problem:
      'Pharma teams need generated emails with references a reviewer can check. An LLM can invent bibliography entries that do not appear in the retrieved material.',
    built:
      'Split content selection, reference preparation, and email generation into three stages on Azure OpenAI and Azure AI Search. Used hybrid retrieval with a text fallback, rebuilt bibliographies from source-linked citation markers, and added a separate 14-check validator.',
    result:
      'Each reference points to a retrieved source. The validator flags citation, completeness, and link errors before editorial review. The same pipeline supports different brand-content schemas.',
    stack: ['Python', 'Azure OpenAI', 'Azure AI Search', 'Django'],
  },
  {
    title: 'Publications assistant',
    context: 'Phamax',
    problem:
      'A client needed a branded assistant over 551 medical publications. Reviewers needed to inspect its sources, and administrators needed access controls and oversight.',
    built:
      'Took the Turborepo migration through production. Built PIN and JWT access, in-app source PDFs, an agent-step panel, token reports, feedback, and an admin console with audit logs. Set up CI/CD for each environment on Azure Container Apps with Key Vault.',
    result:
      'Released the assistant to staging, UAT, and production. Reviewers can open source publications, and administrators can inspect usage, feedback, and conversations.',
    stack: [
      'React',
      'Turborepo',
      'FastAPI',
      'LangGraph',
      'Azure Container Apps',
    ],
  },
  {
    title: 'Structured ingestion',
    context: 'Phamax',
    problem:
      'CRM and email files in Blob Storage had inconsistent schemas, Unicode content, and repeated load attempts. The platform needed those files in relational tables.',
    built:
      'Designed Bronze, Silver, and Gold processing with a DBML registry, run tracking, and migration tools. Added deterministic keys for repeatable UPSERTs, enforced Unicode support in tables, and corrected parser and retry behavior.',
    result:
      'Fixed six causes of production load failures. Repeated loads update existing records so downstream APIs and reports can use the ingested data.',
    stack: ['Python', 'Pandas', 'SQLAlchemy', 'Azure Blob Storage', 'MySQL'],
  },
  {
    title: 'Platform security',
    context: 'Phamax',
    problem:
      'The core API and portal needed repeatable security checks, with fixes applied consistently across client release lines.',
    built:
      'Built SonarQube scans, hotspot exports, and baseline comparisons. Fixed encryption, JWT validation, hashing, SQL access, webhook CSRF controls, Docker build scope, and browser randomness.',
    result:
      'Applied 20 security fixes across three client release lines. The team can reuse the scanning and comparison workflow for later changes.',
    stack: ['PowerShell', 'SonarQube', 'Docker', 'Django', 'React'],
  },
  {
    title: 'Segmentation engine',
    context: 'Comviva',
    problem:
      'Loyalty campaigns need client-specific member attributes and relative date rules. A new targeting criterion should not require a database schema change.',
    built:
      'Built a JSON-to-PostgreSQL rule engine with 26 operators for core fields and custom JSON attributes. Added scheduled runs, run-state tracking, stale-run detection, and Kafka-triggered recomputation when rules change.',
    result:
      'Clients can target new attributes without schema migrations. Operators can inspect run history and identify failed or stalled segments.',
    stack: ['TypeScript', 'PostgreSQL', 'Knex', 'Kafka', 'Jest'],
  },
  {
    title: 'Fan Maturity Model',
    context: 'Factoreal · Sports vertical',
    problem:
      'Sports customers needed to identify fan engagement across marketing and commerce channels and use it to target campaigns.',
    built:
      'Combined six channel scores with customer-configurable weights into four engagement tiers. Separated base scoring from rollups and built daily BigQuery scheduling with portal controls for configuration and rescheduling.',
    result:
      'Teams get updated fan tiers each day and use them in campaign segments without writing scoring queries.',
    stack: ['BigQuery', 'Python', 'Flask', 'Node.js', 'React'],
  },
  {
    title: 'BigQuery analytics pipeline',
    context: 'Factoreal',
    problem:
      'An omnichannel platform handling 10 billion transactions needed customer reports and audience insights from data in PostgreSQL and Cassandra.',
    built:
      'Built entity-level sync with incremental processing and pagination, automated dataset provisioning at signup, and added KPI APIs and embedded GoodData dashboards. Added scoring schedules and dashboard-cache invalidation as usage grew.',
    result:
      'The analytics system supports 71 customer datasets and 998 scheduled queries. Engagement and commerce data feed recurring dashboards and audience scoring.',
    stack: ['Node.js', 'BigQuery', 'PostgreSQL', 'Cassandra', 'GoodData'],
  },
]

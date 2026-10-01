/** Detailed career copy for the website; the PDF resume stays independent. */
export type RoleDetailSection = { title: string; items: string[] }
export type RoleDetail = { summary: string; sections: RoleDetailSection[] }

export const ROLE_DETAILS: Record<string, RoleDetail> = {
  '2025-05-08': {
    summary:
      'Lead engineering for Ariya, a generative-AI platform for pharma marketing and medical teams, with ownership of architecture, hands-on implementation, engineering standards, and delivery across eight client deployments.',
    sections: [
      {
        title: 'Platform and team',
        items: [
          'Restructured the platform into core API, portal, and authoring applications, defining application boundaries and a consistent CI and release process across client deployments.',
          'Guided implementation through code reviews and coordinated changes across shared services and client applications to keep platform behavior consistent.',
          'Established onboarding documentation, contribution standards, and an architecture plan in the engineering wiki, giving the team a shared basis for development and delivery.',
        ],
      },
      {
        title: 'LLM content generation',
        items: [
          'Architected Content Compose as a three-stage pipeline for source-backed medical emails: rank relevant brand content, prepare references from retrieved sources, and generate the email. Separating these stages makes content selection and citation handling explicit.',
          'Designed hybrid text and vector retrieval on Azure AI Search, with validated filter capabilities and a text-only fallback that keeps generation available when embedding fails.',
          'Made reference integrity deterministic: rebuild the bibliography from retrieved sources and inline citation markers after generation. Generate subject lines and preheaders independently, and format citations consistently for review.',
          'Built an independent validator with 14 checks across four severity levels to surface missing content, citation errors, placeholder links, retrieval relevance, and generation cost and latency before editorial review.',
          'Extended the pipeline to support both hierarchical and flat brand-content schemas, allowing different brands to share the same generation architecture.',
        ],
      },
      {
        title: 'Conversational AI',
        items: [
          'Delivered a white-label RAG assistant over 551 medical publications, carrying it from a Turborepo migration through staging, UAT, and production on Azure Container Apps with Key Vault-managed secrets.',
          'Built the product controls around the assistant: PIN and JWT access, source PDFs opened from citation chips, agent-step visibility, token usage, and feedback. Added an admin console for users, conversations, feedback, and audit logs, with Application Insights for operational analytics.',
          'Built the Speech Avatar across the Azure Speech SDK, Django, and portal UI, covering speech and ICE credentials, streaming chat, avatar configuration, conversation logs, and post-call analysis.',
          'Extended a teammate’s FastAPI and LangGraph agent service with admin statistics and thread filters, using UTC-correct aggregation and resolved user identities to make usage reporting reliable.',
        ],
      },
      {
        title: 'Authoring product',
        items: [
          'Replaced hardcoded authoring steps with an API-driven configuration model for channels, variants, content types, and forms, allowing the Content Wizard to evolve through configuration instead of client-specific UI logic.',
          'Implemented per-instance theming and delegated template administration so a shared codebase could support client branding and local approval workflows.',
          'Designed localization across the portal and backend, with centrally managed translation rules, database-defined languages, and an in-browser HTML translator with versioned saves inside the authoring workflow.',
          'Built predefined-intent management in the client admin portal and established the Enterprise Data Management catalog that teammates extended.',
        ],
      },
      {
        title: 'Regulated content lifecycle',
        items: [
          'Built the content lifecycle around the AI Content Wizard, connecting authoring, multi-stage approval, compliance checks, and distribution for pharmaceutical teams working across regulated markets.',
          'Designed LLM orchestration across prompts, context injection, retrieval, embeddings, and tool calling to support traceable content generation across content types and markets.',
        ],
      },
      {
        title: 'Enterprise integrations',
        items: [
          'Integrated Veeva CRM and Salesforce Marketing Cloud into Ariya’s campaign workflows, connecting content and engagement capabilities to the enterprise systems pharmaceutical teams already use.',
          'Supported omnichannel campaign execution across client tenants with compliance requirements carried into the integration workflows.',
        ],
      },
      {
        title: 'Data catalog and access',
        items: [
          'Led the Data Catalog initiative, establishing metadata-based discovery so business and engineering teams could find the data available to them.',
          'Extended the catalog’s scope to data observability and self-service access, connecting discovery with visibility into data operations and use.',
        ],
      },
      {
        title: 'Data engineering',
        items: [
          'Architected structured-data ingestion around Bronze, Silver, and Gold layers on Azure Blob Storage, with a DBML schema registry, run tracking, and CLI tools for schema conversion, migrations, and secrets management.',
          'Stabilized production Gold-layer ingestion by resolving Unicode failures, schema mismatches, text overflow, missing key guards, platform encoding errors, and stale-file retries. Introduced deterministic hashed keys for repeatable UPSERTs and fixed nullable-column loss in the schema parser.',
          'Enforced utf8mb4 at table creation as well as connection setup, making Unicode support part of the data model rather than a recurring ingestion fix.',
          'Built the HCP and SFMC email-data APIs powering the Daily Sales Brief, supplying the data foundation for a teammate’s WhatsApp delivery integration.',
        ],
      },
      {
        title: 'Security',
        items: [
          'Established a repeatable SonarQube assessment and remediation workflow with automated scans, exported hotspots, and baseline comparisons; applied 20 fixes across the core API and portal to three client release lines.',
          'Strengthened encryption, authentication, and data access: replaced static-IV AES-CBC with AES-GCM and random nonces, restricted JWT algorithms, replaced weak hashes with SHA-256, parameterized SQL, restored webhook CSRF controls, narrowed Docker build inputs, and introduced cryptographic randomness in the portal.',
          'Encrypted user phone numbers at rest, automated dependency security audits with issue creation, and coordinated database SSL certificate rotation across seven environments and four services.',
        ],
      },
      {
        title: 'Delivery',
        items: [
          'Standardized deployment workflows across staging, UAT, and production for client and internal environments, giving the team a reusable path from development to release.',
          'Introduced uv and Docker layer caching into Python builds and coordinated dependency fixes across client deployments to improve build efficiency and release consistency.',
          'Built a JSON-to-PPTX service with Bun, Elysia, and pptxgenjs, supporting both server and Azure Function deployment from the same implementation.',
          'Built content-metrics APIs and cached event reporting for administrators, exposing activity by author, status, content subtype, and date range.',
        ],
      },
    ],
  },
  '2023-10-01': {
    summary:
      'Technical lead for MobiLytix Rewards, Comviva’s multi-tenant loyalty platform, owning member-targeting services, shared backend foundations, and release coordination across in-house and vendor engineering teams.',
    sections: [
      {
        title: 'Platform rewrite',
        items: [
          'Led the rewrite of MobiLytix Rewards into a cloud-agnostic, multi-tenant SaaS platform for telecom and retail customers, owning full-stack architecture across the distributed microservices system.',
          'Built across TypeScript, React, FeathersJS, PostgreSQL, Delta Lake, and vector databases, connecting customer-facing features with the service and data foundations of the loyalty platform.',
        ],
      },
      {
        title: 'Campaign processing and personalization',
        items: [
          'Owned the Kafka campaign-processing pipeline for reward and loyalty workflows, using asynchronous processing and caching to support high-throughput execution.',
          'Delivered AI/ML personalization and segmentation capabilities for loyalty targeting, complementing the rule-based segmentation service with personalized campaign experiences.',
        ],
      },
      {
        title: 'Platform observability',
        items: [
          'Introduced observability and monitoring across the platform to give engineers visibility into service behavior during releases and production operations.',
          'Used that operational visibility to support more reliable deployments and faster production-incident diagnosis and resolution.',
        ],
      },
      {
        title: 'Releases',
        items: [
          'Led release delivery across six loyalty services, coordinating service upgrades and production rollout as a connected platform.',
          'Aligned in-house and vendor engineers on feature delivery, defect resolution, static-analysis findings, and penetration-test remediation across service boundaries.',
        ],
      },
      {
        title: 'Segmentation service',
        items: [
          'Designed and implemented the loyalty segmentation service, translating rule-builder JSON into PostgreSQL across 26 operators, including 11 date operators for time-sensitive campaign targeting.',
          'Combined direct queries for core member fields with JSON-backed custom attributes, allowing clients to introduce new targeting criteria without database schema changes.',
          'Built one-time, cron, and fixed-date execution with explicit run states, error history, and stale-run detection, making scheduled targeting failures visible and recoverable.',
        ],
      },
      {
        title: 'Loyalty core',
        items: [
          'Made club provisioning transactional across membership, member, and segment data, so partial setup rolls back instead of leaving an incomplete tenant. Extended the tenant model with member status, support history, and segment-run history.',
          'Connected segment creation and updates to Kafka-driven recomputation, keeping targeting results aligned with changes to campaign rules.',
        ],
      },
      {
        title: 'Shared packages',
        items: [
          'Authored the shared PostgreSQL and Redis clients used by five services, along with JWT helpers for service-to-service authentication, establishing common infrastructure behavior across the platform.',
          'Led development of the shared member domain package, centralizing enrollment, membership validation, attribute updates, segmentation checks, and Redis caching.',
          'Moved the S3 storage package to TypeScript and automated connector publishing in GitLab CI, strengthening shared-package contracts and distribution.',
        ],
      },
      {
        title: 'Testing',
        items: [
          'Established automated tests for segmentation, scheduling, and tier services with Jest and coverage gates. The segmentation suite included 48 cases, with 17 focused on query translation—the core of targeting correctness.',
          'Set service coverage targets of 65–80% and measured the scheduler and tier baselines, making test gaps visible and defining a concrete standard for subsequent improvements.',
        ],
      },
    ],
  },
  '2021-12-01': {
    summary:
      'Led engineering across Factoreal’s omnichannel marketing platform, spanning email, SMS, WhatsApp, push, social, segmentation, customer journeys, commerce, and analytics. Built shared platform capabilities for ecommerce, sports, and other customer verticals.',
    sections: [
      {
        title: 'Fan Maturity Model',
        items: [
          'Designed the Fan Maturity Model for Factoreal’s sports vertical, translating engagement across email, SMS, app, web, commerce, and WhatsApp into four actionable audience tiers using customer-configurable weights.',
          'Built daily scoring orchestration and portal configuration, separating channel-level scores from rollups and automating query creation, deletion, and rescheduling so teams could manage engagement targeting without SQL.',
        ],
      },
      {
        title: 'Commerce',
        items: [
          'Rebuilt the Shopify integration for its App Store relaunch, covering installation, signup, store provisioning, and OAuth permissions. Expanded webhook coverage from 17 to 40 topics and added GraphQL subscriptions for app and billing events alongside a teammate’s billing-plan implementation.',
          'Maintained Shopify API compatibility through successive upgrades, keeping commerce ingestion aligned with the platform’s evolving integration contracts.',
          'Resolved duplicate customer identities caused by inconsistent international phone formats, introducing country-aware normalization with libphonenumber for reliable contact matching.',
          'Established a dedicated ticketing integration service with SeatGeek synchronization, and extended commerce data capture to WhatsApp cart activity and order attribution.',
        ],
      },
      {
        title: 'Analytics at scale',
        items: [
          'Built and evolved the BigQuery analytics foundation for a platform handling 10 billion transactions, bringing customer engagement and commerce data into reporting and audience-scoring workflows.',
          'Automated customer dataset provisioning and scoring schedules for an analytics estate spanning 71 customer datasets and 998 scheduled queries, supporting recurring reporting across tenants.',
          'Connected analytics to operational decisions through automated GoodData cache invalidation, social-follower reporting, and a Jira-to-BigQuery reporting sync.',
        ],
      },
      {
        title: 'Shared code and data operations',
        items: [
          'Centralized contact operations in a shared package used by five production services and delivered plan-entitlement logic used by twelve, keeping customer and subscription behavior consistent across the platform.',
          'Automated customer retirement across tenant data and built contact-cleanup routines, turning cross-service data maintenance into repeatable operations.',
          'Refined contact queries by replacing broad JSONB containment with key equality and selecting only required fields, reducing unnecessary work in a frequently used data-access path.',
        ],
      },
      {
        title: 'Account security',
        items: [
          'Implemented tenant-configurable session expiry with idle detection and risk-scored signup protection through reCAPTCHA Enterprise, strengthening account access and trial-entry controls.',
          'Reviewed penetration-test remediation with the implementing engineer, assessing fixes within the platform’s existing authentication and application flows.',
        ],
      },
    ],
  },
  '2020-06-01': {
    summary:
      'Built the data, commerce, and channel foundations of Factoreal’s marketing automation platform across its core API, React portal, and backend services, connecting customer activity to analytics and campaign workflows.',
    sections: [
      {
        title: 'Analytics pipeline',
        items: [
          'Built the PostgreSQL and Cassandra-to-BigQuery sync engine across 24 entity workflows covering contacts, commerce, campaigns, journeys, and omnichannel events. Added incremental synchronization and Cassandra pagination to handle growing data volumes without relying solely on full reloads.',
          'Automated analytics dataset provisioning at signup, making customer onboarding include its reporting infrastructure without manual database setup.',
          'Built the KPI service for email delivery and engagement metrics and embedded GoodData dashboards in the portal, giving customers visibility into deliverability, audience response, and unsubscribe rates.',
        ],
      },
      {
        title: 'Commerce and payments',
        items: [
          'Made Shopify order ingestion safe under webhook retries through application-level idempotency and database uniqueness constraints, preventing duplicate order records at both boundaries.',
          'Built abandoned-cart detection with Redis state, Kafka events, and tenant-configurable timeouts, turning incomplete purchases into triggers for customer journeys.',
          'Integrated Razorpay payment ingestion and published order and payment events to Kafka, connecting commerce transactions to downstream marketing workflows.',
        ],
      },
      {
        title: 'Tracking and channels',
        items: [
          'Introduced Redis-backed page deduplication and tenant-specific event exclusions, keeping repeated page views from inflating the event catalog while preserving useful tracking signals.',
          'Corrected first-visit double counting in the customer tracking snippet, improving the accuracy of the behavioral data feeding reporting and segmentation.',
          'Built web-push subscription handling and mobile SDK registration and events, extending the platform’s customer-engagement capabilities across web and app channels.',
        ],
      },
      {
        title: 'Signup and growth',
        items: [
          'Built verified email-domain onboarding with branded confirmation messages and a trial-signup flow, connecting website acquisition to product access.',
          'Built HubSpot contact migration with SES status notifications, helping customers bring existing audiences into the platform with visibility into import progress.',
          'Integrated analytics, advertising pixels, and conversational capture into Factoreal’s website, connecting acquisition activity to marketing measurement.',
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
      'Medical marketing teams need generated content with references they can verify. Model-generated bibliographies can introduce citations that have no basis in the retrieved material.',
    built:
      'Separated selection, reference preparation, and email generation into three stages on Azure OpenAI and Azure AI Search. Used hybrid retrieval with a text fallback, rebuilt bibliographies deterministically from source-linked citation markers, and added an independent 14-check output validator.',
    result:
      'References map to retrieved sources, and automated checks surface citation, completeness, and link issues before editorial review. A shared pipeline supports different brand-content schemas.',
    stack: ['Python', 'Azure OpenAI', 'Azure AI Search', 'Django'],
  },
  {
    title: 'Publications assistant',
    context: 'Phamax',
    problem:
      'A client needed a branded assistant over 551 medical publications, with inspectable sources, controlled access, and administrative oversight.',
    built:
      'Carried a Turborepo migration through production delivery, implementing PIN and JWT access, in-app source PDFs, agent-step visibility, token reporting, feedback, and an audit-enabled admin console. Established environment-specific CI/CD on Azure Container Apps with Key Vault.',
    result:
      'Delivered the assistant across staging, UAT, and production, giving reviewers direct access to source publications and administrators visibility into usage, feedback, and conversations.',
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
      'CRM and email files in Blob Storage needed to become relational data despite inconsistent schemas, Unicode content, and repeated ingestion attempts.',
    built:
      'Designed Bronze, Silver, and Gold processing with a DBML schema registry, run tracking, and migration tooling. Added deterministic keys for repeatable UPSERTs, enforced Unicode-compatible tables, and corrected schema-parser and retry behavior.',
    result:
      'Resolved six production failure causes and made repeated loads update existing records, providing a more dependable data foundation for downstream APIs and reporting.',
    stack: ['Python', 'Pandas', 'SQLAlchemy', 'Azure Blob Storage', 'MySQL'],
  },
  {
    title: 'Platform security',
    context: 'Phamax',
    problem:
      'The core API and portal needed a repeatable way to identify security weaknesses and carry remediations consistently across client release lines.',
    built:
      'Established SonarQube scanning, hotspot export, and baseline comparisons. Remediated encryption, JWT validation, hashing, SQL access, webhook CSRF controls, Docker build scope, and browser randomness.',
    result:
      'Applied 20 security fixes across three client release lines and gave the team a reusable assessment workflow for subsequent changes.',
    stack: ['PowerShell', 'SonarQube', 'Docker', 'Django', 'React'],
  },
  {
    title: 'Segmentation engine',
    context: 'Comviva',
    problem:
      'Loyalty targeting needed to support client-specific member attributes and relative date rules without requiring schema changes for every new campaign criterion.',
    built:
      'Designed a JSON-to-PostgreSQL rule engine with 26 operators, combining core fields with JSON-backed attributes. Added scheduled execution, run-state tracking, stale-run detection, and Kafka-triggered recomputation when rules change.',
    result:
      'Clients can target new member attributes without schema migrations, while operators can inspect execution history and identify failed or stalled segment runs.',
    stack: ['TypeScript', 'PostgreSQL', 'Knex', 'Kafka', 'Jest'],
  },
  {
    title: 'Fan Maturity Model',
    context: 'Factoreal · Sports vertical',
    problem:
      'Sports customers needed to turn fragmented engagement across marketing and commerce channels into audiences they could act on.',
    built:
      'Combined six channel scores with customer-configurable weights into four engagement tiers. Separated base scoring from rollups and built daily BigQuery orchestration with portal controls for configuration and rescheduling.',
    result:
      'Teams receive refreshed fan tiers each day and can use them for campaign segmentation without writing scoring queries themselves.',
    stack: ['BigQuery', 'Python', 'Flask', 'Node.js', 'React'],
  },
  {
    title: 'BigQuery analytics pipeline',
    context: 'Factoreal',
    problem:
      'An omnichannel platform handling 10 billion transactions needed to turn PostgreSQL and Cassandra data into customer-specific reporting and audience insights.',
    built:
      'Built entity-level synchronization with incremental processing and pagination, automated dataset provisioning at signup, and delivered KPI APIs and embedded GoodData dashboards. Added scoring schedules and dashboard-cache invalidation as the analytics estate grew.',
    result:
      'Supported an analytics estate of 71 customer datasets and 998 scheduled queries, connecting engagement and commerce data to recurring dashboards and audience scoring.',
    stack: ['Node.js', 'BigQuery', 'PostgreSQL', 'Cassandra', 'GoodData'],
  },
]

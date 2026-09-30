import type { ExperienceStat } from '@/components/work-experience'

/**
 * Long-form detail for the Work page, keyed by role startDate in resume.json.
 * resume.json highlights stay short for the PDF resume; these are the fuller,
 * site-only write-up. Every figure here was counted from the private git
 * history of that role (all branches, deduplicated by SHA, merges separated
 * from code I wrote). Work I only reviewed and merged is described as review.
 */
export type RoleDetailSection = {
  title: string
  items: string[]
}

export type RoleDetail = {
  stats: ExperienceStat[]
  sections: RoleDetailSection[]
  /** Where the figures come from, in one line. */
  evidence: string
}

export const ROLE_DETAILS: Record<string, RoleDetail> = {
  '2025-05-08': {
    stats: [
      { value: '729', label: 'commits I wrote, across 16 repos' },
      { value: '185', label: 'teammate PRs reviewed and merged' },
      { value: '8', label: 'client deployments' },
      { value: '35 days', label: 'RAG assistant, migration to production' },
    ],
    sections: [
      {
        title: 'Platform and team',
        items: [
          'Wrote the codebase restructuring plan in May 2025 and carried it out within about eight weeks. On 17 July I stood up the new core API, portal, and wizard repositories with their imports and CI; on 28 July I moved deployment from tag-based to branch-based releases.',
          'Reviewed and merged 373 pull requests across 9 repositories, 185 of them written by teammates. On the big shared repos I am deliberately a minority author: 136 of 1,234 non-merge commits in the portal and 124 of 943 in the core API.',
          "Wrote the team's onboarding docs, GitHub workflow conventions, and the restructuring plan in the engineering wiki.",
        ],
      },
      {
        title: 'LLM content generation',
        items: [
          'Designed Content Compose, the email pipeline for medical content that has to cite its sources, and wrote 23 of the 26 commits on it. It makes three LLM calls: a selection pass (temperature 0.1) that ranks brand content, a bibliography pass that turns retrieved source chunks into reference entries, and a generation pass that writes the email.',
          'Retrieval is hybrid text and vector search on Azure AI Search. Filters are applied only on fields confirmed filterable, and search falls back to text-only if embedding fails.',
          'The LLM never writes the reference list. It is rebuilt after generation from the inline citation markers, so every reference points at a source that was actually retrieved. Subject line and preheader are generated as separate blocks, and adjacent citation markers are formatted as superscript.',
          'Built a no-backend validator that runs 14 checks at four severity levels on each output: reference block populated, every enabled block generated, subject and preheader present, citation placement and order, placeholder URLs, relevance of retrieved chunks, generation time, and token usage.',
          'Added a second brand-schema variant alongside the original, so brands with a flat content structure could use the same pipeline.',
        ],
      },
      {
        title: 'Conversational AI',
        items: [
          'Took a white-label RAG assistant over 551 medical publications from a Turborepo migration to production in five weeks: staging CI on day 4, UAT on day 15, production CI/CD with Key Vault and Container Apps on day 35. I wrote 146 of the 156 commits after the migration.',
          "Built its user-facing pieces: PIN + JWT sign-in, citation chips that open the source PDF in an in-app viewer, a panel that shows the agent's reasoning steps, a token-usage badge, and a feedback flow. Built the client's admin console for users, feedback, threads, and audit logs, and moved its analytics from Log Analytics to Application Insights.",
          'Built the Speech Avatar end to end in about two and a half weeks: six endpoints on the Azure Speech SDK (speech and ICE tokens, streaming chat, post-call conversation analysis, avatar config, conversation logs), two Django models, and the portal UI.',
          'Added the admin statistics API (UTC-correct aggregation, user-ID resolution) and thread filters to the FastAPI + LangGraph agent service a teammate built.',
        ],
      },
      {
        title: 'Authoring product',
        items: [
          'Moved the Content Wizard from steps hardcoded per content type to configuration served by the API: two Django config apps with 18 migrations between them, modelling channels, variants, content types, and their forms.',
          'Built per-instance theming and delegated admins who can approve or delete templates, so one codebase serves every client.',
          'Built the localization system: 32 of the 33 commits on the portal side and all of the backend. Translation rules live in a Django service, languages come from the database rather than code, and an in-browser HTML translator with versioned saves sits inside the Content Wizard.',
          'Built the predefined-intent flow in the client admin portal (18 of its 29 commits), and started the Enterprise Data Management catalog, which teammates then extended.',
        ],
      },
      {
        title: 'Data engineering',
        items: [
          "Wrote Ariya's structured-data ingestion (41 of its 42 commits): a Bronze/Silver/Gold pipeline on Azure Blob Storage with a DBML-driven schema registry, 8 tracking models, and 7 CLI tools for schema conversion, migrations, and secrets. The medallion runner was in place five days after the first commit.",
          'When Gold-layer loads started failing in production, I fixed six separate problems in one pass: emoji in email subjects (MySQL error 1366), unmapped column names (1054), a text column overflowing VARCHAR(255) (1406), a missing surrogate-key guard, a Windows encoding crash, and retry spam from stale blob entries. Same day, I generated deterministic hashed keys so loads could UPSERT, and fixed a DBML parser bug that silently dropped nullable columns.',
          'The encoding fix needed a second pass: in May 2026 I moved utf8mb4 enforcement to table creation, because fixing it on the connection alone had not covered new tables.',
          'Wrote the HCP and SFMC email-data APIs behind the Daily Sales Brief; a teammate built its WhatsApp delivery.',
        ],
      },
      {
        title: 'Security',
        items: [
          'Built a SonarQube scanning kit in four days (PowerShell runner with four modules, SonarQube on Docker Compose, hotspot export to JSON, a baseline-versus-patched workflow), then used it on the core API and portal: 20 fixes in three days, applied to three client release lines.',
          "The fixes: replaced AES-CBC with a static IV by AES-GCM with a random nonce; allow-listed JWT algorithms, since the token's own alg header had been trusted; moved 19 MD5/SHA-1 call sites to SHA-256; replaced f-string SQL with parameterised queries; removed CSRF exemptions from two webhooks; replaced a blanket `COPY .` with explicit paths in 8 client Docker images; and replaced `Math.random` with a crypto-safe helper in the portal.",
          'Earlier: encrypted user phone numbers at rest, added a scheduled dependency security audit that opens issues, and rotated database SSL certificates across 7 environments and 4 services in about ten days.',
        ],
      },
      {
        title: 'Delivery',
        items: [
          'Wrote about 30 GitHub Actions workflows across 11 repositories covering staging, UAT, and production for four clients and our own environments; I am the top workflow author in the portal repo. Teammates replicated the pattern for the other clients.',
          'Switched Python builds to uv and Docker layer caching. When a dependency broke, pushed the same fix to six client branches the same day.',
          'Built a JSON-to-PPTX service in two days (Bun, Elysia, pptxgenjs) that runs as a server or an Azure Function.',
          'Built the content-metrics API (last N days or explicit ranges, grouped by author, status, and subtype) and the events reader and cache behind the admin event dashboard.',
        ],
      },
    ],
    evidence:
      'Source: git history on all branches, deduplicated by SHA, 12 May 2025 – 3 Jul 2026. 454 of my 1,183 commits are merges; the 729 above leave them out. Durations come from commit dates.',
  },
  '2023-10-01': {
    stats: [
      { value: '17 / 17', label: 'release merges to main, v5.7 – 5.8.2' },
      { value: '4', label: 'tagged releases in 30 days' },
      { value: '26', label: 'rule operators in the segment engine' },
      { value: '5', label: 'services on my DB and cache packages' },
    ],
    sections: [
      {
        title: 'Releases',
        items: [
          'Ran the release train from 5.7.0 to 5.8.2: every release-to-main merge across six services between 30 January and 3 March 2025 (17 of 17) was mine, including four tagged releases of the core loyalty service in 30 days.',
          'Integrated 50 feature, fix, SAST, and VAPT branches into release branches across 7 repositories, from about 8 in-house and vendor engineers.',
        ],
      },
      {
        title: 'Segmentation service',
        items: [
          'Wrote the segmentation service that drives loyalty targeting (24 of its 28 non-merge commits). It converts rule-builder JSON into PostgreSQL queries across 26 operators, 11 of them date-based: current day, week, or month, X days ago, in X days, and so on.',
          'Fixed columns such as email and status are queried directly; any other field is read from the member JSON column, so new segment fields need no schema change.',
          'Segments run once, on a cron schedule, or on fixed dates. Each run is recorded as pending, success, or failed with its error, and a run stuck in pending is marked failed.',
        ],
      },
      {
        title: 'Loyalty core',
        items: [
          "Built club onboarding in the core loyalty service: a hook that creates each club's membership, member, and segment-mapping tables inside a transaction that rolls back if any step fails. Later added per-club member-status and support-history tables and the tenant's segment-run history.",
          'Added a Kafka hook so creating or editing a segment triggers recomputation in the segment service. My first version sent the segment ID under the wrong key; I caught and fixed it.',
        ],
      },
      {
        title: 'Shared packages',
        items: [
          'Sole author of the shared Postgres (Knex) and Redis client packages that 5 services build on, and of the JWT helpers for service-to-service calls.',
          'Primary author of the member business-logic package (27 of its 32 commits): enrollment, membership validation, attribute updates, segment checks, and Redis caching, taken from 1.1.0 to 2.0.1.',
          'Moved the S3 storage package to TypeScript and set up npm publishing for the connectors package in GitLab CI.',
        ],
      },
      {
        title: 'Testing',
        items: [
          'Added the first tests to three services that had none (segment, scheduler, tier) over two weeks in February 2025, moving from Mocha to Jest with coverage thresholds. The segment service got 48 cases, 17 of them for the query builder alone.',
          'Honest baseline: the thresholds (65–80%) were the target, not the state. Measured coverage where I committed a report was 15% for the scheduler and 19% for tiers.',
        ],
      },
    ],
    evidence:
      'Source: git history of the mr-* repositories on all branches, deduplicated by SHA, May 2024 – Mar 2025. 117 of my 240 commits there are merges. Work I merged but did not write (tier expiry, notifications, tenant isolation, SAST fixes) is not listed as mine.',
  },
  '2021-12-01': {
    stats: [
      { value: '998', label: 'scheduled BigQuery queries across 71 customers' },
      { value: '17 → 40', label: 'Shopify webhook topics handled' },
      { value: '4', label: 'fan tiers scored from 6 channels' },
      { value: '5', label: 'services on the shared package I created' },
    ],
    sections: [
      {
        title: 'Fan Maturity Model',
        items: [
          'Designed and built the Fan Maturity Model (March to July 2023), which scores every fan so teams can segment by engagement. Six channels (email, SMS, app recency, web recency, store spend, WhatsApp) each score 1, 10, or 100; a weighted sum with per-customer weights places each fan in one of four tiers: Inactive, Marginal, Casual, or Fanatic.',
          'It runs as about 18 daily BigQuery scheduled queries over 19 tables per customer: the base scores at 00:15 in append mode, the rollups at 00:40–00:45. I wrote 93% of the Python scheduling module that creates, deletes, and reschedules those queries, plus the configuration UI in the portal.',
        ],
      },
      {
        title: 'Commerce',
        items: [
          'Rebuilt the Shopify app for the 2022 App Store relaunch: install from the store, signup, per-store table creation, and OAuth access scopes. Took webhook handling from 17 topics to 40 in one change and added GraphQL subscriptions for the app-subscription and billing webhooks; a teammate built the billing plans.',
          'Kept the integration current by upgrading the Shopify Admin API from version 2020-01 to 2022-04, then to 2023-04.',
          'Fixed duplicate Shopify contacts: the same person arrived with phone numbers in different international formats, so matches failed. Normalized every number to national number plus country code with libphonenumber.',
          'Created the ticketing integrations service in June 2023 and wrote its SeatGeek sync. Added WhatsApp commerce data (cart events and order source) to the platform.',
        ],
      },
      {
        title: 'Analytics at scale',
        items: [
          "Kept growing the per-customer BigQuery schema from 57 tables to 86, plus 49 views. I made 23 of the 32 commits on its table config and all 8 on the generator that builds a new customer's dataset.",
          'By January 2023 the platform ran 998 BigQuery scheduled queries across 71 customer datasets, most of them daily. I built the provisioning, the fan-scoring schedule, and a Jira-to-BigQuery report sync; the query count describes the system, not queries I wrote one by one.',
          'Automated GoodData dashboard-cache invalidation, and added social-follower dashboard queries in August 2023.',
        ],
      },
      {
        title: 'Shared code and data operations',
        items: [
          'Created the shared contact-operations npm package in November 2022 and wrote it through January 2023. Five production services depend on it; ten repositories have at some point. Also shipped the 1.0.0 release of the plan-entitlements package, which twelve services use.',
          'Wrote the script that retires a customer across about 119 Postgres tables, and ran contact cleanups such as email normalization.',
          'Rewrote contact lookups from JSONB containment to key equality and trimmed SELECT * to the columns needed. I did not record timings, so I claim the change, not a speedup.',
        ],
      },
      {
        title: 'Account security',
        items: [
          'Added per-customer session timeouts (60 minutes by default) with idle detection in the portal, and reCAPTCHA Enterprise on website signup, which rejects anything that is not a signup action with a risk score above 0.5.',
          'Reviewed and merged the 2022 penetration-test remediation branches; a teammate wrote those fixes.',
        ],
      },
    ],
    evidence:
      'Source: git history of 106 repositories on all branches, deduplicated by SHA, Dec 2021 – Sep 2023: 703 non-merge commits plus 515 merges. The scheduled-query count comes from a production export of 19 Jan 2023 (984 succeeded, 14 failed, 2 running at that moment).',
  },
  '2020-06-01': {
    stats: [
      { value: '220 / 230', label: 'commits in the BigQuery sync engine' },
      { value: '24', label: 'per-entity sync jobs into BigQuery' },
      { value: '25 → 57', label: 'BigQuery tables per customer, 2021' },
      { value: '10', label: 'email KPIs, every line mine' },
    ],
    sections: [
      {
        title: 'Analytics pipeline',
        items: [
          'Wrote the sync engine that copies Postgres and Cassandra data into BigQuery (220 of its 230 commits). It runs 24 per-entity jobs covering contacts, carts, campaigns, journeys, lists, and SMS, email, WhatsApp, mobile, and web events; I added 7 incremental variants in late 2021 and Cassandra pagination for large tables. It runs daily at 23:00.',
          "Made each customer's BigQuery dataset provision itself at signup. I created the table config in February 2021 with 25 tables; it had 57 by December.",
          'Created the KPI service in October 2020 and wrote all 1,011 lines of its email-KPI module: open, click, click-to-open, hard and soft bounce, deferred, deliverability, engagement, and unsubscribe rates. Embedded GoodData dashboards in the React portal to show them.',
        ],
      },
      {
        title: 'Commerce and payments',
        items: [
          'Built Shopify webhook ingestion in the Strapi API. When Shopify retries created duplicate orders, I first added an idempotency check on the order ID, then a week later made it impossible at the database level with unique indexes on three per-customer tables.',
          'Built abandoned-cart detection: a Redis hash and a Kafka listener fire an event after a timeout that defaults to 3 hours and is configurable per customer. My first version concatenated the Redis timestamp as a string instead of adding to it; I caught and fixed it three days later.',
          'Added Razorpay: a new payments module in the API and webhook handling that publishes order and payment events to Kafka.',
        ],
      },
      {
        title: 'Tracking and channels',
        items: [
          'Stopped page views from flooding the events catalog: a Redis key per customer, domain, and page title means each page is recorded once instead of on every view. Added per-customer exclusion rules to custom-event ingestion.',
          'Fixed double-counted first visits in the tracking snippet customers embed: the first page load was sending a visit and creating one.',
          'Built web push subscription and event handling, and mobile-app SDK registration and events, in the core API.',
        ],
      },
      {
        title: 'Signup and growth',
        items: [
          'Built email-domain verification with branded confirmation emails (July 2021) and the website trial-signup flow (November 2021).',
          "Wrote the HubSpot contact import used to migrate customers' contacts, with status emails over SES.",
          'Instrumented factoreal.com (WordPress) with Google Analytics, LinkedIn Insight, Google Ads, Facebook Pixel, and the Instabot widget.',
        ],
      },
    ],
    evidence:
      'Source: git history on all branches, deduplicated by SHA, Jul 2020 – Nov 2021: 683 non-merge commits. Across my tenure I am the 4th-largest committer of about 76 to the core Strapi API.',
  },
}

export type SelectedSystem = {
  title: string
  /** Company and period, shown beside the title. */
  context: string
  problem: string
  built: string
  result: string
  evidence: string
  stack: string[]
}

export const SELECTED_SYSTEMS: SelectedSystem[] = [
  {
    title: 'Content Compose',
    context: 'Phamax · 2026',
    problem:
      'Pharma teams need marketing email that cites its sources. A model that writes its own reference list will sooner or later cite something that was never retrieved.',
    built:
      'A three-pass pipeline on Azure OpenAI and Azure AI Search: rank brand content, turn retrieved chunks into reference entries, then write the email. The reference list is rebuilt from inline citation markers after generation instead of being written by the model. A separate 14-check validator QA-checks every output.',
    result:
      'Every reference in an email maps to a retrieved source. The validator flags missing references, misplaced citations, and placeholder links before anyone reviews the content.',
    evidence:
      'I wrote 23 of the 26 commits on the pipeline; first commit 13 Apr 2026, bibliography pass 15 Jun 2026.',
    stack: ['Python', 'Azure OpenAI', 'Azure AI Search', 'Django'],
  },
  {
    title: 'Publications assistant',
    context: 'Phamax · 2026',
    problem:
      'A client wanted a branded assistant that answers questions from 551 medical publications, with sources a medical reviewer can check.',
    built:
      "Migrated the widget to a Turborepo monorepo, then built PIN + JWT access, citation chips that open the source PDF, a panel showing the agent's reasoning steps, token usage per answer, and an admin console with audit logs.",
    result:
      'Staging on day 4, UAT on day 15, production CI/CD on day 35 after the migration.',
    evidence:
      '146 of 156 commits after the migration are mine (21 May – 3 Jul 2026).',
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
    context: 'Phamax · 2026',
    problem:
      'Client CRM and email data arrived as files in Blob Storage with no schema discipline, and the platform needed it in clean relational tables.',
    built:
      'A Bronze/Silver/Gold pipeline with a DBML schema registry, run tracking, and CLI tools for schema conversion and migrations.',
    result:
      'Gold-layer loads failed in production on emoji, unmapped columns, and overflowing text. I fixed six causes in one pass and made loads idempotent with hashed keys. The encoding fix needed a second round two months later.',
    evidence:
      '41 of 42 commits mine; medallion runner five days after the first commit (Feb 2026).',
    stack: ['Python', 'Pandas', 'SQLAlchemy', 'Azure Blob Storage', 'MySQL'],
  },
  {
    title: 'Security pass',
    context: 'Phamax · May 2026',
    problem:
      'The core API had no routine static analysis, and nobody knew how many weak-crypto and injection patterns it carried.',
    built:
      'A SonarQube kit that scans any branch from a fresh clone and exports hotspots as JSON, built in four days.',
    result:
      'Twenty fixes in the next three days: AES-GCM instead of static-IV CBC, JWT algorithm allow-list, SHA-256 in 19 places, parameterised SQL, no CSRF exemptions on webhooks. Applied to three client release lines.',
    evidence:
      'Kit: 7 commits, 10–13 May 2026. Fixes: 11 in the core API, 9 in the portal.',
    stack: ['PowerShell', 'SonarQube', 'Docker', 'Django', 'React'],
  },
  {
    title: 'Segmentation engine',
    context: 'Comviva · 2024–25',
    problem:
      'Loyalty campaigns target members by attributes that change per client, and date rules like "joined this week" or "expires in 30 days".',
    built:
      'A service that turns rule-builder JSON into PostgreSQL across 26 operators, reads custom attributes from a JSON column, and runs segments once, on a cron, or on fixed dates, with run history.',
    result:
      'New segment fields need no schema change, and a Kafka hook recomputes a segment as soon as it is edited.',
    evidence:
      '24 of 28 non-merge commits mine, Dec 2024 – Mar 2025; 48 test cases.',
    stack: ['TypeScript', 'PostgreSQL', 'Knex', 'Kafka', 'Jest'],
  },
  {
    title: 'Fan Maturity Model',
    context: 'Factoreal · 2023',
    problem:
      'Sports teams wanted to know which fans were drifting away and which were their most engaged, across every channel they used.',
    built:
      'Rule-based scoring over six channels, combined with per-team weights into four tiers from Inactive to Fanatic. It runs as daily BigQuery scheduled queries over 19 tables per team, which a Python service creates and reschedules, with a configuration view in the portal.',
    result:
      'Every fan gets a tier each night, and teams segment campaigns by it without writing SQL.',
    evidence:
      'Built March–July 2023; I wrote 93% of the scheduling module and the portal configuration view.',
    stack: ['BigQuery', 'Python', 'Flask', 'Node.js', 'React'],
  },
  {
    title: 'BigQuery analytics pipeline',
    context: 'Factoreal · 2020–23',
    problem:
      'Customer dashboards needed data spread across Postgres and Cassandra, and every new customer needed its own analytics dataset.',
    built:
      'A sync engine with 24 per-entity jobs and incremental variants, per-customer dataset provisioning at signup, and a KPI service for email metrics feeding embedded GoodData dashboards.',
    result:
      'The per-customer schema grew from 25 tables to 86 plus 49 views. By January 2023 the platform ran 998 scheduled queries across 71 customer datasets.',
    evidence:
      '220 of 230 commits in the sync engine are mine; I created the KPI service and wrote its email-KPI module.',
    stack: ['Node.js', 'BigQuery', 'PostgreSQL', 'Cassandra', 'GoodData'],
  },
]

export const HOW_COUNTED: string[] = [
  "Commits come from each employer's git history across all branches, deduplicated by commit SHA. The repositories are private, so client, colleague, and product names are left out.",
  'Merge commits are counted separately. They show review and release work, not code I wrote: 454 of my 1,183 commits at Phamax are merges, 117 of 240 on MobiLytix Rewards, and 668 of 2,054 at Factoreal.',
  'Lines of code are left out on purpose. Git sums them once per branch and includes bulk imports and lockfiles, so they overstate.',
  'Where a teammate wrote something and I merged it, it is described as review or release work, not listed as mine.',
  "Durations such as 'five weeks' are computed from commit dates. They show when code landed, not when the thinking started.",
]

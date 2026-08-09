---
title: "Agítalo Suave: a bartending blog built to grow"
project: "agitalo-suave"
summary: "A bartending blog I designed, built and grow end to end — brand, Astro site, headless CMS and content strategy."
role: "Solo developer, designer & content creator"
timeline: "Ongoing"
year: 2026
stack: ["Astro", "Tailwind CSS", "Strapi", "Supabase", "Cloudinary", "Netlify"]
highlights:
  - "Brand, design, build and content — everything from zero."
  - "Custom Astro Content Layer loaders pulling from a headless Strapi CMS via REST."
  - "Automatic rebuilds on publish through a Netlify build hook."
metrics:
  - label: "Repositories"
    value: "2"
  - label: "Static delivery"
    value: "100%"
  - label: "Content categories"
    value: "4"
  - label: "Services"
    value: "5"
links:
  demo: "https://agitalosuave.com"
  repos:
    - label: "Site"
      url: "https://github.com/scorcherfjk/agitalo-suave"
    - label: "CMS"
      url: "https://github.com/Scorcherfjk/agitalo-suave-cms"
---

## Overview

Agítalo Suave is a personal platform and blog about cocktails, built and operated end to end — brand, design, frontend, CMS, content strategy and distribution. It started as a record of my mixology learning and grew into a CMS-driven publishing system that keeps the public site statically generated.

Where Climbing Academy proved the static-first, content-driven approach, this project took it further: it is a product I maintain over time, so the architecture had to support growth — content, SEO, testing, infrastructure and a publishing workflow — without the operational overhead of a traditional dynamic application.

The central decision of the project is **dynamic authoring, static delivery**: content is managed through a headless CMS, but the public website remains statically generated and does not depend on the CMS at request time.

## The idea

The site exists to document my learning process in cocktails: recipes I have learned, techniques I practice, tips that come from experimentation, lessons from courses, and progress over time.

The content naturally split into categories:

```text
Content
├── Recipes
├── Technique
├── Tips
└── Bitácora
```

The key shift compared with Climbing Academy: there, the blog was one feature of a larger marketing site; here, **the content is the product**.

## From static to CMS-driven

### The initial architecture

The first version reused the foundation from Climbing Academy: content stored in the project, generated into static pages at build time.

```text
Content → Astro → Static generation → Netlify → Public website
```

Simple, fast, and adequate while the volume of content was small: write an entry, add images, commit, deploy.

### When the workflow stopped scaling

As the site grew, publishing became increasingly manual:

1. Write or edit a Markdown/MDX entry.
2. Prepare and upload images to Cloudinary.
3. Copy the resulting URLs into the content.
4. Commit the changes.
5. Trigger a new deployment.

None of these steps is hard individually; the problem was the workflow as a whole. The site had become a real publishing project, while its content workflow was still designed around a developer editing source files.

That raised the question that drove the architecture:

> Could I separate content management from the frontend without giving up the performance benefits of static generation?

### The architectural decision

Instead of replacing Astro with a fully dynamic application, I kept the public website static and introduced a CMS behind the scenes:

```text
                    ┌───────────────┐
                    │    Strapi     │
                    │      CMS      │
                    └───────┬───────┘
                            │
                            │ Webhook
                            ▼
                    ┌───────────────┐
                    │    Netlify    │
                    │     Build     │
                    └───────┬───────┘
                            │
                            ▼
                    ┌───────────────┐
                    │     Astro     │
                    │ Static Build  │
                    └───────┬───────┘
                            │
                            ▼
                    ┌───────────────┐
                    │ Public Website│
                    └───────────────┘

        ┌──────────────┐       ┌──────────────┐
        │  Supabase    │       │  Cloudinary  │
        │  PostgreSQL  │       │    Media     │
        └──────────────┘       └──────────────┘
```

The key trade-off is separating **content authoring** from **content delivery**: the CMS can be dynamic without making the public website dynamic.

## Architecture & Content

### CMS integration

I chose **Strapi** as the CMS. The frontend consumes it through a dedicated integration layer, isolated in its own module:

```text
src/lib/cms/
├── client.ts     # REST client with pagination and timeouts
├── constants.ts
├── index.ts
├── loader.ts     # Custom Astro Content Layer loaders
├── mappers.ts    # CMS → application data mapping
└── types.ts
```

The integration is implemented as a custom **Astro Content Layer loader**: `src/content.config.ts` registers the `blog` and `legal` collections backed by `strapiBlogLoader()` and `strapiLegalLoader()`. At build time the loader fetches the Strapi REST API (`/api/blogs`, `/api/legals`), paginates the responses, maps each entry into the application's own data shape, and validates it against a Zod schema before it reaches the pages.

The mapper layer is the important boundary: the external CMS data model never leaks into the presentation layer. Components work with the application's expected data structures instead of being coupled to Strapi's response format.

### Content loading flow

```text
Strapi → CMS client → Loader → Mappers → Typed, validated data → Astro pages
```

### Static delivery

When content changes, the CMS triggers a webhook that starts a new Netlify build:

```text
Edit content in Strapi → Save → Webhook → Netlify build → Astro fetches content → Static pages → Deployed
```

The CMS never sits in the request path: a visitor reads the site without depending on the CMS being available at that moment.

The URL structure was part of the migration too: `netlify.toml` defines 301 redirects from the old numbered URLs (`/blog/recetas/01-mojito-clasico`) to clean slugs (`/blog/recetas/mojito-clasico`), so existing links kept working.

### Frontend

The component library expanded well beyond Climbing Academy — 20 components covering layout, cards, forms, share buttons, pagination and timeline (for example `BlogCard`, `Pagination`, `ShareButtons`, `NewsletterForm`).

Content is organized into typed routes by category, each with pagination, plus a dynamic post route and legal pages:

```text
src/pages/
├── blog/[...page].astro      blog/[...slug].astro
├── recetas/[...page].astro   tecnica/[...page].astro
├── tips/[...page].astro      bitacora/[...page].astro
└── legal/[...slug].astro
```

The routes stay aligned with the content model instead of treating every article as an isolated page.

## Infrastructure

Each service has a narrow responsibility:

* **Strapi (Render)** — the CMS, deployed via `render.yaml` on a dedicated subdomain. Because it is only needed for authoring and builds, it does not have to be always-on for the public site to function.
* **Supabase (PostgreSQL)** — the database backing Strapi, connected through a `DATABASE_URL` connection string with SSL.
* **Cloudinary** — media hosting. The Strapi upload provider converts images to AVIF on upload, so optimized formats are produced as part of the content workflow rather than as a manual step.
* **Netlify** — hosting, builds and form handling for the public site.
* **Cloudflare** — DNS for the custom domain.

A deliberate constraint was keeping operational cost near zero. Because the CMS is consumed at build time rather than at request time, it can run on a minimal instance, and the remaining services sit on free or near-free tiers. The cost-conscious choice and the architecture support each other.

## SEO, forms & performance

### SEO and discoverability

The site is a public content platform, so search visibility is a core requirement:

* Canonical URLs, Open Graph and Twitter metadata in a shared `BaseHead` layout.
* Structured data (JSON-LD): `BlogPosting`/`Recipe` post schema with breadcrumbs, plus site, organization and author schemas — centralized in `src/utils/seo.ts`.
* Sitemap generation (`@astrojs/sitemap`) and an RSS feed (`@astrojs/rss`).
* Search Console integration to monitor indexing.

### Forms without a backend

Contact and newsletter forms use Netlify's form handling (`data-netlify`, with a honeypot for spam), avoiding a dedicated backend just to process submissions.

### Performance

The public site stays statically generated with a minimal client-side footprint: no framework runtime, images served as AVIF from Cloudinary, and content processed at build time. This is an architectural constraint, not a benchmark claim.

## Validation & testing

The project includes automated tests with **Vitest**, focused on the logic most likely to break silently as the project evolves:

```text
src/schemas/__tests__/blog.test.ts
src/utils/__tests__/formatDate.test.ts
src/utils/__tests__/readingTime.test.ts
src/utils/__tests__/seo.test.ts
```

Content schema validation, date formatting, reading-time calculation and SEO helpers are covered — a step toward treating the site as a maintained software project rather than a static experiment.

## Engineering decisions and challenges

* **Dynamic authoring, static delivery.** The core trade-off: give authors a real editing workflow while keeping the performance and availability properties of static generation. A visitor never depends on the CMS at request time; the CMS only needs to be available during builds and authoring.
* **Boundaries around external systems.** Custom Content Layer loaders and a mapper layer keep Strapi's data model and API details out of the presentation code. Abstractions like this pay off as the number of moving parts grows.
* **Avoiding premature complexity.** The initial Markdown-based architecture was the right solution for the project's early requirements. It was replaced when the requirements changed, not preemptively.
* **Maintenance is part of the project.** The project has gone through multiple Astro upgrades (currently Astro 7, including a `pnpm patch` for a framework issue) and stays current as the framework evolves.
* **Incremental migration.** The CMS migration included preserving URLs through 301 redirects, so existing links and search equity were not lost.

## Analytics & distribution

The operational side of a public site includes:

* **Google Tag Manager** and **Google Analytics** for traffic visibility.
* **Google Search Console** for indexing and discoverability.
* **Google AdSense** as part of ongoing monetization work, not a finished outcome.

Social channels (Facebook, Instagram, TikTok) are used as distribution channels. The website remains the canonical source; the platforms point back to it.

## Outcome

Agítalo Suave evolved from a static Astro blog into a complete personal publishing platform: content is authored in Strapi, media is handled by Cloudinary, and publishing is a save-then-publish flow that triggers a static rebuild — while visitors still receive a statically generated site.

It is an **ongoing project**. Current work spans content creation, SEO, analytics, monetization, framework updates and content distribution. The architecture is not presented as a final state; it keeps changing as the requirements change.

## What I learned

* **Architecture should evolve with the problem** — the initial solution was right for the initial requirements; when they changed, I changed the architecture instead of adding complexity preemptively.
* **Static does not mean inflexible** — a dynamic publishing workflow and static page delivery are compatible, and the separation between how content is managed and how it is delivered is a useful one.
* **Boundaries become valuable as complexity grows** — dedicated loaders, mappers, types and schemas kept external service details from spreading through the application.
* **Infrastructure can be intentionally small** — narrow responsibilities, managed services and build-time content consumption keep the operational surface small.
* **Maintenance is part of the project** — framework upgrades, compatibility fixes and SEO are recurring work for a live product.

## What came next

The progression from Climbing Academy to Agítalo Suave was not about learning another framework. It was about taking an architecture that worked, using it in a real personal project, observing where it became limiting, and evolving it without abandoning the principles that worked.

```text
Climbing Academy → Static-first architecture → Agítalo Suave → Growing content requirements → CMS integration → Ongoing platform
```

## Final thoughts

Agítalo Suave started as a simple personal blog. It grew into a publishing platform — and it is still evolving. The most valuable part has not been any individual technology, but the ability to recognize when the current solution is no longer the right one, understand why, and evolve the system without adding complexity for its own sake.

**The project started with Markdown. It grew into a publishing platform. And it is still evolving.**

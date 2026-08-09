---
title: "Climbing Academy: a marketing site built to convert"
project: "climbing-academy"
summary: "A complete marketing site concept for a climbing academy — homepage, membership plans, services, blog and contact — designed, built and deployed with a static-first Astro architecture."
role: "Solo developer"
timeline: "Feb 5 – Apr 25, 2025"
year: 2025
stack: ["Astro", "TypeScript", "Tailwind CSS", "MDX", "Netlify"]
highlights:
  - "Evaluated Astro against the requirements of a real content-heavy product and adopted a static-first architecture."
  - "Content-driven pages: 7 MDX blog posts and 4 legal pages generated from Content Collections via dynamic [slug] routes."
  - "Optimized AVIF asset pipeline with no client-side framework runtime."
metrics:
  - label: "Pages"
    value: "13"
  - label: "Blog posts"
    value: "7"
  - label: "Stack"
    value: "JAMstack"
  - label: "Project duration"
    value: "2.5 mo"
links:
  demo: "https://climbing-academy.netlify.app/"
  repo: "https://github.com/Scorcherfjk/climbing-academy"
---

## Overview

Climbing Academy is a self-initiated project: a complete marketing website for a climbing academy, designed, built and deployed as a realistic alternative to the academy's existing site.

The scope covered the pages a real academy needs — homepage, academy information, membership plans, services, trial classes, open climbing sessions, FAQs, reviews, a contact form, legal pages and a content-driven blog.

Beyond the product, I used the project as a practical way to evaluate **Astro** against the requirements of a real content-heavy website: static-first rendering, minimal client-side JavaScript, and a content layer that separates management from presentation.

## The idea

The project started with a real-world observation: the climbing academy where I trained had a website that was visually dated and functionally limited.

Rather than just noticing the problem, I used it as an opportunity to design something better and to evaluate the tooling involved.

> I can build something better — and use the opportunity to evaluate a new technology stack.

The evaluation followed this path:

```text
Real-world observation
        ↓
Opportunity to improve the experience
        ↓
Technology research
        ↓
Astro + static-first architecture
        ↓
Implementation
        ↓
Content architecture
        ↓
Performance optimization
        ↓
Deployment
```

I researched approaches for building fast, content-focused sites, with particular interest in the JAMstack model and static generation. Astro stood out because most of the site could be generated at build time and served as static assets, while its component model, Markdown/MDX support and Content Collections covered the content-heavy requirements without a per-request backend.

## Goals

The project had two parallel sets of goals.

**Product** — a realistic marketing site: a strong landing page, academy information, membership plans, services, trial classes, open climbing, FAQs, reviews, a contact form, a blog, legal documentation, responsive layouts and optimized assets.

**Technical** — evaluate Astro and the surrounding tooling (TypeScript, MDX, Content Collections, Tailwind CSS, PNPM, Netlify) in the context of a real product rather than isolated exercises.

The plan was to show the finished concept to the academy's instructors as a starting point for a real website.

## Technology stack

* **Astro** — static-first web framework; most pages rendered at build time.
* **TypeScript** — typed data structures shared across components (`src/interfaces`).
* **Tailwind CSS** — utility-first styling (v4 via the Vite plugin).
* **MDX** — blog and legal content authoring.
* **PNPM** — local package management, with `pnpm-lock.yaml` committed for reproducible installs.
* **Netlify** — hosting and deployment.
* **AVIF** — optimized image assets through Astro's asset pipeline.

The site has no backend or database: content is generated statically at build time.

One decision worth noting: I initially configured the `@astrojs/solid-js` integration to evaluate reactive islands for interactive components. The final implementation needed almost no client interactivity — the FAQ accordion uses native `<details>` and the mobile navigation uses a small inline script — so no framework runtime ships to the browser. This is why SolidJS does not appear in the final stack.

## Architecture & Content

The project evolved from a set of static pages into a content-driven application, organized by responsibility:

```text
src/
├── assets/        # Optimized images
├── components/    # Reusable UI components
├── content/       # Blog and legal content (MDX)
├── icons/         # SVG icons
├── interfaces/    # TypeScript contracts
├── layouts/       # Shared page layouts
├── pages/         # Routes and dynamic pages
├── styles/        # Global and blog styles
└── utils/         # Shared utilities
```

### Static pages and components

The initial implementation started with the main pages as static routes — homepage, academy, membership plans, services, open climbing, trial classes, FAQs, contact, blog, legal and a custom 404 page.

As the structure emerged, recurring UI was extracted into reusable components:

```text
src/components/
├── Accordion.astro   BlogCard.astro     BlogEntries.astro
├── CallToAction.astro  ContactForm.astro  Hero.astro
├── PlanCard.astro    Plans.astro        Reviews.astro
└── layout/           Analytics.astro    Footer.astro    Navbar.astro
```

Recurring data got explicit contracts instead of unstructured objects:

```text
src/interfaces/
├── CTA.ts   FAQ.ts   plan.ts   review.ts
```

This gave components typed inputs and kept data structures consistent as the project grew.

### Content Collections and MDX

The largest architectural step was moving from manually created pages to content-driven pages. Blog posts and legal documents live as MDX files with frontmatter validated by a Zod schema in `src/content/config.ts`, and dynamic routes generate the pages:

```text
src/pages/blog/post/[slug].astro
src/pages/legal/[slug].astro
```

```text
MDX content → Content Collection → [slug] route → static HTML
```

* 7 blog posts in `src/content/blog`, each with an AVIF cover image.
* 4 legal documents in `src/content/legal` (about, liability waiver, privacy policy, terms and conditions).

Adding a post means adding an MDX file — no new route required. Content becomes the source of truth while routes control presentation. The content layer keeps the performance characteristics of static generation while separating content management from presentation.

## Performance & Optimization

Performance shaped several decisions:

* **Static-first rendering** — most routes are rendered at build time and delivered as static assets, so there is no per-request rendering cost and no server to operate.
* **Minimal client-side JavaScript** — interactivity was kept to native and vanilla patterns, so the site ships no framework runtime.
* **AVIF asset pipeline** — I adopted AVIF for suitable images (hero, calls to action, services, trial classes, blog covers, 404 page) and served them through Astro's asset pipeline, reducing image payloads while maintaining visual quality.
* **Sitemap** — `@astrojs/sitemap` generates `sitemap.xml` from the built routes.
* **Analytics** — Google Tag Manager is injected once through `src/components/layout/Analytics.astro`.

Performance is not only about the framework: images, JavaScript, CSS, routing and architecture all contribute to the final experience.

## Deployment

The site is deployed to **Netlify**. A `netlify.toml` drives the build:

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

The flow is: source → `astro build` → static output in `dist` → Netlify → production site.

Because the site is statically generated, there was no application server to manage, which made Netlify a natural fit for the architecture.

## Engineering decisions and challenges

The main challenge was not a single technical problem but evaluating a framework and a new content model in parallel while keeping the result coherent.

Key decisions:

* **Static generation over a dynamic backend.** For a marketing site whose content changes infrequently, build-time rendering was the right trade-off: zero runtime cost and no server to operate, while content stays structured and editable. A real-time content requirement would have pointed toward server-side rendering or a headless CMS.
* **Iterative architecture.** I started with static pages, then introduced reusable components, typed data structures, and finally a validated content layer. The architecture was discovered through implementation rather than designed up front — adopting a framework by building something real forces decisions about routing, typing, content validation, assets and deployment to be made in context.
* **Deliberate tooling choices.** Astro, TypeScript, Tailwind, MDX, PNPM and Netlify were evaluated against the requirements of the site — performance, static output, low client-side JS, developer experience, content management and deployability without a traditional server.
* The project was developed through documentation, research and direct experimentation, without generative AI assistance.

## Outcome

The project was never adopted by the academy. It was self-initiated, intended as a realistic alternative I planned to show to the instructors — but I stopped practicing there before presenting it. It is not, and was never meant to be, the academy's production system.

What it did deliver was a complete, deployed concept:

* 13 routes, including dynamic blog and legal pages.
* Reusable components and typed data structures.
* A validated MDX content layer with 7 blog posts and 4 legal documents.
* An optimized AVIF asset pipeline and a framework-free runtime.
* Contact form, Google Tag Manager analytics and a custom 404 page, deployed to Netlify.

More importantly, it validated the static-first, content-driven architecture I have used since.

## What I learned

* **Evaluating technology against requirements** — Astro was chosen because it matched the needs of a content-heavy site, not because it was new or popular.
* **Content vs. presentation** — a typed content layer keeps a static site maintainable: content is edited where it lives, templates render it, and schemas validate it.
* **Where static architecture fits** — build-time generation is a strong default for content-heavy sites, and the trade-off becomes clear when content needs to change at runtime.
* **Performance as an architectural concern** — asset formats, image handling and the JavaScript budget were decisions made during design, not cleanups after the fact.
* **The surrounding tooling** — TypeScript contracts, Tailwind, PNPM and Netlify deployment all became part of my default frontend toolkit.

## What came next

Climbing Academy became the foundation for **Agítalo Suave** (2026), a content-driven blog built on the same decisions: Astro, static-first rendering, a content architecture, performance optimization and Netlify deployment. By then the focus had shifted from evaluating the framework to the product itself — brand, design, content strategy and a headless CMS.

## Final thoughts

Climbing Academy started with a simple idea: **I thought I could build a better website.**

What it became was a complete, deployed concept — and the foundation for how I approach content-driven engineering. The academy never adopted it, but that was never the point. It turned a problem I noticed into an opportunity to learn by building, and that is the part that lasted.

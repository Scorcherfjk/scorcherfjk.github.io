---
title: "Climbing Academy: a marketing site built to convert"
project: "climbing-academy"
summary: "A complete marketing site for a climbing academy — courses, membership plans, blog and contact, built with Astro and SolidJS."
role: "Solo developer"
timeline: "Feb 5 – Apr 25, 2025"
year: 2025
stack: ["Astro", "SolidJS", "Tailwind CSS", "Netlify"]
highlights:
  - "Content architecture built to grow."
  - "Courses, membership plans, blog and contact sections."
  - "Deployed and iterated on Netlify."
metrics:
  - label: "Stack"
    value: "JAMstack"
  - label: "Pages"
    value: "13"
  - label: "Blog posts"
    value: "7"
  - label: "Project duration"
    value: "2.5 mo"
links:
  demo: "https://climbing-academy.netlify.app/"
  repo: "https://github.com/Scorcherfjk/climbing-academy"
---

## Overview

Climbing Academy was a self-initiated project born from a simple observation: the website of the climbing academy where I practiced was not providing the kind of experience I thought it could.

At the same time, I wanted to learn **Astro** and explore how modern static-first websites could be built with a strong focus on performance, maintainability, and content management.

Instead of creating another tutorial project, I decided to combine both goals.

I designed and developed a complete website concept for a climbing academy, including its main pages, membership plans, services, FAQs, contact form, reviews, legal pages, and a content-driven blog.

The project became a practical environment where I could learn Astro by building something that resembled a real product rather than following isolated examples.

## The idea

I was practicing climbing at an academy whose website had significant room for improvement.

I thought:

> I can build something better, and I can use the opportunity to learn a new technology.

I started researching solutions for building fast, content-focused websites. One of my goals was to understand the **Jamstack** approach and learn how static generation could be used to create an efficient website without requiring a traditional backend for every page request.

Astro quickly stood out as a good fit.

Its static-first architecture, component model, content capabilities, and minimal client-side JavaScript made it particularly interesting for the type of website I wanted to build.

I enrolled in an Astro course, learned the fundamentals, and started applying them directly to the project.

## Goals

The project had two main objectives.

### Learning objectives

I wanted to:

* Learn Astro from the ground up.
* Understand static site generation.
* Explore the Jamstack approach.
* Learn how to build reusable Astro components.
* Work with Markdown and MDX content.
* Learn Astro's content collections.
* Improve my understanding of web performance.
* Experiment with optimized image formats.
* Learn PNPM.
* Deploy an Astro application to Netlify.
* Structure a frontend project using TypeScript.

### Product objectives

I also wanted to create a realistic website for a climbing academy that could include:

* A strong landing page.
* Academy information.
* Membership plans.
* Services.
* Trial classes.
* Open climbing sessions.
* FAQs.
* Reviews.
* Contact information and a contact form.
* A blog.
* Legal documentation.
* Responsive layouts.
* Optimized assets.

The idea was to eventually show the finished project to the instructors at the academy and potentially use it as a starting point for a real website.

## Why Astro?

Before starting the implementation, I researched several approaches for building content-heavy websites.

I was particularly interested in:

* Performance.
* Static generation.
* Simplicity.
* Low client-side JavaScript overhead.
* A good developer experience.
* Easy content management.
* The ability to deploy without managing a traditional server.

Astro aligned very well with those requirements.

Its static-first approach meant that most of the website could be generated during the build process and delivered as static assets.

This was particularly appropriate for a website where most content did not need to be generated dynamically on every request.

After learning the fundamentals through an Astro course, I decided to use the project as a practical way to deepen my understanding of the framework.

## Technology stack

The project was built with:

* **Astro** — Static-first web framework.
* **SolidJS** — Reactive islands for interactive components via the `@astrojs/solid-js` integration.
* **TypeScript** — Type safety and shared data structures.
* **Tailwind CSS** — Utility-first styling.
* **MDX** — Blog and content authoring.
* **PNPM** — Package management.
* **Netlify** — Deployment and hosting.
* **AVIF** — Optimized image assets.

The project did not use a backend or database because the majority of its content could be generated statically.

## Architecture

The project evolved from a collection of static pages into a structured, content-driven Astro application.

The source code was organized around several clear responsibilities:

```text
src/
├── assets/        # Optimized images and visual assets
├── components/    # Reusable UI components
├── content/       # Blog and legal content
├── icons/         # SVG icons
├── interfaces/    # TypeScript interfaces
├── layouts/       # Shared page layouts
├── pages/         # Routes and dynamic pages
├── styles/        # Global and blog-specific styles
└── utils/         # Shared utilities
```

This separation allowed the project to keep presentation, content, routing, types, styles, and utilities relatively independent from each other.

## Starting with static pages

The initial implementation started with the site's main pages.

At this stage, the primary goal was understanding Astro's component model and getting the overall structure of the website working.

The project included pages for:

* The homepage.
* The academy.
* Membership plans.
* Services.
* Open climbing.
* Trial classes.
* FAQs.
* Contact.
* Blog.
* Legal documentation.
* A custom 404 page.

The initial pages were built statically, allowing me to focus on understanding Astro before introducing a more sophisticated content architecture.

## Component architecture

As the project grew, I began extracting recurring pieces of the interface into reusable Astro components.

The component structure included elements such as:

```text
src/components/
├── Accordion.astro
├── BlogCard.astro
├── BlogEntries.astro
├── CallToAction.astro
├── ContactForm.astro
├── Hero.astro
├── PlanCard.astro
├── Plans.astro
├── Reviews.astro
└── layout/
    ├── Analytics.astro
    ├── Footer.astro
    └── Navbar.astro
```

This allowed common UI patterns to be reused across different pages instead of duplicating markup.

For example, membership plans could be represented using reusable `PlanCard` components, while blog previews could use `BlogCard` components.

This also made the pages themselves more focused on composition rather than implementation details.

## TypeScript and data structures

I also wanted to avoid treating recurring application data as unstructured objects.

The project therefore included dedicated TypeScript interfaces:

```text
src/interfaces/
├── CTA.ts
├── FAQ.ts
├── index.ts
├── plan.ts
└── review.ts
```

These interfaces defined the expected shape of recurring data used throughout the application.

This gave the components explicit contracts and helped keep the data structures consistent as the project grew.

It was also an opportunity to practice combining Astro components with TypeScript in a real project rather than only using TypeScript for isolated exercises.

## From static pages to content-driven pages

One of the biggest steps in the project was moving beyond manually created pages.

The academy's existing website included a blog, which gave me a realistic use case for learning Astro's content capabilities.

Instead of creating an individual Astro page for every article, I started storing the content separately and allowing Astro to generate the corresponding pages.

This led to a dedicated content structure:

```text
src/content/
├── blog/
│   ├── images/
│   │   ├── post-01.avif
│   │   ├── post-02.avif
│   │   └── ...
│   ├── page-01.mdx
│   ├── page-02.mdx
│   └── ...
├── config.ts
└── legal/
    ├── about.mdx
    ├── liability-waiver.mdx
    ├── privacy-policy.mdx
    └── terms-and-conditions.mdx
```

This was one of the most important architectural changes in the project.

## Content Collections

The project used Astro's content system to define and manage structured content.

The `src/content/config.ts` file provided the configuration for the content collections.

This allowed the content to have a predictable structure while keeping it separate from the UI.

The approach provided several benefits:

* Content could be edited without changing page templates.
* New blog posts could be added without creating new route files.
* Metadata could be defined alongside the content.
* Content could be validated against a known structure.
* The same rendering logic could be reused for multiple entries.

This was an important step in understanding the difference between **content and presentation**.

## MDX-powered blog

The blog content was stored as `.mdx` files rather than being hardcoded directly into Astro pages.

The project used a dynamic route:

```text
src/pages/blog/post/[slug].astro
```

This route generated the individual blog pages based on the content entries.

The resulting flow was:

```text
MDX content
     ↓
Astro Content Collection
     ↓
Dynamic [slug] route
     ↓
Static page generation
     ↓
HTML delivered to the browser
```

This meant that adding a new article did not require creating a new Astro page.

The content itself became the source of truth, while the route controlled how that content was presented.

## Legal content

I applied the same concept to the site's legal documentation.

Instead of creating separate hardcoded pages, legal documents were stored as MDX content:

```text
src/content/legal/
├── about.mdx
├── liability-waiver.mdx
├── privacy-policy.mdx
└── terms-and-conditions.mdx
```

They were rendered through a dynamic route:

```text
src/pages/legal/[slug].astro
```

This allowed the same content-driven approach used by the blog to be applied to another part of the website.

It also reinforced the idea that a static website can still have a structured content architecture.

## Image optimization

Performance was one of the reasons I chose Astro in the first place, so I also wanted to pay attention to the assets being delivered to the browser.

The project used **AVIF** for many of its images.

The asset structure included images for:

* Hero sections.
* Calls to action.
* Academy pages.
* Services.
* Trial classes.
* Blog posts.
* Error pages.

For example:

```text
src/assets/
├── 404.avif
├── cta-academy-1.avif
├── cta-academy-3.avif
├── cta-academy-4.avif
├── cta-index-1.avif
├── cta-index-2.avif
├── cta-service-2.avif
├── cta-trial-1.avif
├── cta-trial-2.avif
├── cta-trial-3.avif
└── hero.avif
```

Working on the project helped me understand that performance is not only about the framework itself.

Images, JavaScript, CSS, routing, and architecture all contribute to the final experience.

## Tailwind CSS

For styling, I used **Tailwind CSS**.

Rather than designing every component entirely from scratch, I researched existing Tailwind-based component patterns and used them as references.

This allowed me to focus my learning effort on Astro while simultaneously becoming more comfortable with utility-first CSS.

The project eventually developed a reusable visual system around components such as cards, navigation, accordions, calls to action, reviews, and pricing plans.

## PNPM

This was also the project where I started using **PNPM** instead of NPM.

I wanted to learn how an alternative package manager handled dependencies and its shared package store.

Using PNPM throughout the project gave me practical experience with:

* Installing dependencies.
* Running project scripts.
* Managing the dependency tree.
* Working with the PNPM store.
* Using a `pnpm-lock.yaml` file for reproducible installations.

It became another tool that I later carried into other JavaScript and TypeScript projects.

## Deployment

The project was deployed to **Netlify**.

The repository included a dedicated:

```text
netlify.toml
```

configuration file, while Astro handled the production build.

The overall deployment flow was:

```text
Source code
     ↓
PNPM
     ↓
Astro build
     ↓
Static output
     ↓
Netlify
     ↓
Production website
```

Because the project was primarily statically generated, there was no need to manage a traditional application server for the core website.

This made Netlify a natural fit for the architecture I had chosen.

## No generative AI

One distinctive aspect of this project is that it was built **without generative AI assistance**.

At the time, I was deliberately using the project as a learning exercise.

I relied on:

* Course material.
* Documentation.
* Research.
* Experimentation.
* Debugging.
* My own implementation.

This meant that the project was not simply about producing a working website.

I wanted to understand why the pieces worked and how they fit together.

That distinction was particularly valuable because the project became the foundation for my later use of Astro in other projects.

## Challenges

The biggest challenge was not any single technical problem.

It was learning several concepts simultaneously while trying to turn them into a coherent application.

I was learning:

* A new web framework.
* A new content architecture.
* Static generation.
* MDX.
* Content collections.
* Component-based development.
* TypeScript data structures.
* Image optimization.
* PNPM.
* Netlify deployment.

The project therefore became an iterative process.

I started with simple static pages, learned more about Astro, and gradually introduced more structured approaches as I understood what the framework could do.

This progression was important because I was not designing the final architecture from day one.

I was discovering it through implementation.

## Project structure

The final project structure reflected that evolution:

```text
├── README.md
├── astro.config.mjs
├── netlify.toml
├── package.json
├── pnpm-lock.yaml
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/
│   │   ├── blog/
│   │   ├── config.ts
│   │   └── legal/
│   ├── icons/
│   ├── interfaces/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   └── utils/
├── tailwind.config.js
└── tsconfig.json
```

The result was a small but structured frontend application rather than a collection of disconnected pages.

## What I learned

### Astro

I gained practical experience with:

* Astro components.
* Static site generation.
* Dynamic routes.
* Layouts.
* Content collections.
* MDX.
* Asset handling.
* Project configuration.
* Production builds.

### Content architecture

The project taught me how to separate content from presentation and use structured content as the source for generated pages.

This became one of the most valuable lessons of the project.

### Frontend architecture

I learned how to break a website into:

* Reusable components.
* Shared layouts.
* Typed data structures.
* Content collections.
* Dynamic routes.
* Utility functions.

### Web performance

Working with a static-first framework and optimized image formats helped me start thinking about performance as an architectural concern rather than something to optimize only after the application was finished.

### Package management

I gained practical experience with PNPM and its dependency management model.

### Deployment

I learned how straightforward it can be to take a statically generated Astro application and deploy it to a production hosting platform such as Netlify.

## Outcome

The project ultimately did not become the official website of the climbing academy.

I eventually stopped practicing at the academy, so I never had the opportunity to present the finished project to the instructors or explore whether they wanted to adopt it.

However, the project achieved its original purpose.

I set out to learn Astro by building something real, and the result became a complete website concept with:

* Multiple production-style pages.
* Reusable components.
* TypeScript interfaces.
* Static generation.
* Dynamic routes.
* MDX-based content.
* Astro content collections.
* A structured blog.
* Dynamic legal pages.
* Optimized image assets.
* Responsive styling.
* Contact functionality.
* Analytics integration.
* A custom 404 page.
* Netlify deployment.

More importantly, the project gave me a practical foundation for working with Astro and content-driven websites.

## What came next

Climbing Academy became one of the projects that introduced me to Astro as a serious option for content-focused websites.

The knowledge I gained here later influenced the architecture of **Agítalo Suave**, my cocktail-focused blog.

The difference was that, by then, I was no longer learning Astro from scratch.

I was applying the concepts I had already explored:

```text
Climbing Academy
       ↓
Learning Astro
       ↓
Static-first architecture
       ↓
Components
       ↓
Content Collections
       ↓
MDX
       ↓
Performance optimization
       ↓
Netlify deployment
       ↓
Agítalo Suave
```

The project therefore became more than a redesign exercise.

It was the first step in a broader evolution toward building content-driven applications with a strong emphasis on performance and maintainability.

## Final thoughts

Climbing Academy started with a simple idea:

**I thought I could build a better website.**

What I actually built was a practical learning environment.

Instead of learning Astro through isolated tutorials, I used a real-world scenario to force myself to understand the framework, component architecture, content management, static generation, performance optimization, package management, and deployment.

The project was never officially adopted by the academy, but it succeeded in the way that mattered most at the time:

**it turned a problem I noticed into an opportunity to learn by building.**


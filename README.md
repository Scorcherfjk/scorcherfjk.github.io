# FJavier De Freitas — Portfolio

A developer portfolio built with **Astro**, **Tailwind CSS v4** and **astro-icon**. Fully static, deployed to GitHub Pages.

## Stack

- [Astro](https://astro.build) (static output)
- [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite`
- [astro-icon](https://astro.build/guides/integrations-guide/astro-icon) with local SVGs in `src/icons/`
- [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap)
- Content collections with `zod` schemas (`src/content/`)
- Self-hosted fonts: Inter Variable + JetBrains Mono Variable

## Getting started

```sh
pnpm install     # install dependencies
pnpm dev         # start dev server at http://localhost:4321
pnpm build       # production build → dist/
pnpm preview     # preview the production build
pnpm check       # run astro check (typecheck)
```

## Content

Most content lives in `src/content/` as a single typed JSON file per collection. Only `case-studies` keeps Markdown files (they have long-form bodies):

| Collection       | Path                       | Format | Purpose                            |
| ---------------- | -------------------------- | ------ | ---------------------------------- |
| `projects`       | `content/projects/projects.json`       | JSON   | Project cards (name, stack, links) |
| `caseStudies`    | `content/case-studies/`    | Markdown | Long-form project breakdowns     |
| `experience`     | `content/experience/experience.json`   | JSON   | Work history timeline              |
| `certifications` | `content/certifications/certifications.json` | JSON | Certs linked to PDFs       |
| `courses`        | `content/courses/courses.json`         | JSON   | Courses, specializations & Udemy   |
| `hobbies`        | `content/hobbies/hobbies.json`         | JSON   | Hobbies + skills gained            |
| `education`      | `content/education/education.json`     | JSON   | University degree                  |

Each JSON file is an array of entries; every entry needs an `id` field (Astro's `file()` loader uses it as the entry id).

### Certifications (PDFs)

The `pdf` field in each certification points to a file in `public/certifications/`.
Drop the real PDFs there following the naming convention in
`public/certifications/README.md`. They are served at
`https://scorcherfjk.github.io/certifications/<file>.pdf` and open in a new tab.

### Case studies

Every case study is a Markdown file whose **body** is rendered on
`/case-studies/<slug>`. Use `##` headings and standard Markdown — styling is
provided by `.md-body` in `src/styles/global.css`.

## Theme

The palette (dark charcoal + gold, with a light variant) is defined with
Tailwind v4 `@theme` tokens in `src/styles/global.css`:

- `background`, `surface`, `surface-alt`, `border`
- `primary`, `muted` (text)
- `accent`, `accent-soft`, `focus`

A dark/light toggle is included in the navbar (persisted in `localStorage`,
defaulting to the OS preference).

## Deploying to GitHub Pages

1. In the repo settings go to **Settings → Pages**.
2. Set **Source** to **GitHub Actions** (this replaces the old branch-based deploy).
3. Push to `master` — `.github/workflows/deploy.yml` builds `dist/` and deploys it.
4. The site is served at `https://scorcherfjk.github.io`.

## Editing

- Global text/branding: `src/consts.ts`
- Navigation & social links: `src/consts.ts`
- Page copy: `src/pages/*.astro`
- Colors & fonts: `src/styles/global.css`

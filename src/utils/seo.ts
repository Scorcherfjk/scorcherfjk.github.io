import { NAME, ROLE, SITE_DESCRIPTION, SKILLS } from "../consts";

const ALTERNATE_NAMES = [
  "Senior Full Stack Developer",
  "Senior Backend Engineer",
  "Full Stack Engineer",
];

const KNOWS_ABOUT = [
  ...SKILLS.languages,
  ...SKILLS.frontend,
  ...SKILLS.backend,
  ...SKILLS.databases,
  ...SKILLS.engineering,
  ...SKILLS.cloud,
];

export function getPersonJsonLd(site: URL): string {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: NAME,
    jobTitle: ROLE,
    alternateName: ALTERNATE_NAMES,
    description: SITE_DESCRIPTION,
    knowsAbout: KNOWS_ABOUT,
    url: site.origin,
    sameAs: [
      "https://github.com/scorcherfjk",
      "https://www.linkedin.com/in/fjavier-de-freitas",
    ],
  };
  return JSON.stringify(jsonLd);
}

export function getWebSiteJsonLd(site: URL): string {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: NAME,
    url: site.origin,
  };
  return JSON.stringify(jsonLd);
}

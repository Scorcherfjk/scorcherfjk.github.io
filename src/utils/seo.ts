import { NAME, ROLE, SITE_DESCRIPTION } from "../consts";

export function getPersonJsonLd(site: URL): string {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: NAME,
    jobTitle: ROLE,
    description: SITE_DESCRIPTION,
    url: site.origin,
    sameAs: [
      "https://github.com/scorcherfjk",
      "https://www.linkedin.com/in/fjavierdefreitas",
      "https://twitter.com/fjdfreitas",
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

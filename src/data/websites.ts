export interface WebsiteItem {
  id: string;
  title: string;
  url: string;
  domain: string;
  summary: string;
}

export const websites: WebsiteItem[] = [
  {
    id: "metabuilder",
    title: "Metabuilder",
    url: "https://metabuildersolutions.org/",
    domain: "metabuildersolutions.org",
    summary:
      "Corporate landing for Metabuilder Solutions Limited — the parent studio architecting the AI-native sovereign stack.",
  },
  {
    id: "trustscout",
    title: "TrustScout",
    url: "https://trustscout.dev/",
    domain: "trustscout.dev",
    summary:
      "Africa's first buyer-initiated forensic vendor verification engine for social commerce, powered by the Voight-Kampff multi-agent framework.",
  },
  {
    id: "nichy",
    title: "Nichy",
    url: "https://nichy.vercel.app/",
    domain: "nichy.vercel.app",
    summary:
      "A niche discovery and micro-community platform within the Metabuilder venture portfolio.",
  },
  {
    id: "afriflow",
    title: "AfriFlow",
    url: "https://afriflowfund.vercel.app/",
    domain: "afriflowfund.vercel.app",
    summary:
      "Capital-flow infrastructure venture — connecting African founders to funding rails.",
  },
  {
    id: "jayralis",
    title: "Jayralis",
    url: "https://www.jayralis.fyi/",
    domain: "www.jayralis.fyi",
    summary: "Company site built for Jayralis — brand, product, and story surface.",
  },
];

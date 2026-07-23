import portrait from "@/assets/portrait.webp";
import logo from "@/assets/logo.jpg";
import rabbit from "@/assets/rabbit.jpg";

export type ShowcaseCategory = "web" | "video" | "logo" | "other";

export interface ShowcaseItem {
  id: string;
  title: string;
  category: ShowcaseCategory;
  media: { type: "image" | "video"; src: string; poster?: string };
  caption?: string;
  href?: string;
  span?: "sm" | "md" | "lg";
  placeholder?: boolean;
}

export const showcaseItems: ShowcaseItem[] = [
  {
    id: "trustscout",
    title: "TrustScout — Forensic Commerce",
    category: "web",
    media: { type: "image", src: portrait },
    caption: "Voight-Kampff multi-agent verification engine. Placeholder — swap with screenshot.",
    href: "https://trustscout.dev",
    span: "lg",
    placeholder: true,
  },
  {
    id: "sharp-title",
    title: "S.H.A.R.P. — Title Sequence",
    category: "video",
    media: { type: "image", src: rabbit },
    caption: "AI-generated title sequence, Episode 1. Placeholder still.",
    span: "md",
    placeholder: true,
  },
  {
    id: "mdl-mark",
    title: "Metabuilder Mark",
    category: "logo",
    media: { type: "image", src: logo },
    caption: "Primary identity mark, Metabuilder Solutions Limited.",
    span: "sm",
  },
  {
    id: "athena-reel",
    title: "ATHENA — Editorial Reel",
    category: "video",
    media: { type: "image", src: portrait },
    caption: "AI-tools stress-test reel. Placeholder still.",
    span: "md",
    placeholder: true,
  },
  {
    id: "metabuilder-site",
    title: "Metabuilder — Company Site",
    category: "web",
    media: { type: "image", src: logo },
    caption: "Corporate site refresh. Placeholder.",
    span: "sm",
    placeholder: true,
  },
  {
    id: "sovereign-stack",
    title: "Sovereign Stack Deck",
    category: "other",
    media: { type: "image", src: rabbit },
    caption: "Venture-grade proposal system. Placeholder cover.",
    span: "sm",
    placeholder: true,
  },
];

export const showcaseFilters: { id: ShowcaseCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "web", label: "Websites" },
  { id: "video", label: "AI Video" },
  { id: "logo", label: "Logos & Identity" },
  { id: "other", label: "Other" },
];

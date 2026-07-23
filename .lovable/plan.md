
# Machine-Delusions-Inspired Overhaul + Bio Update + Showcase

Two things combined: (1) the full visual overhaul into the dark hex-mesh / magenta-circuit panel aesthetic, and (2) content updates — new professional bio, revised title (Chief AI Officer), and a new Showcase section for creative work.

This is an inspired reinterpretation, not a copy of machinedelusions.com's assets or code.

## Design system (magenta circuit)

Palette:
- Background `#0a0710`, panel `#160a1a`, deep plum `#3a1030`, accent magenta `#d946ef`
- Mesh line `rgba(217,70,239,0.12)`

Typography:
- Display / labels: Chakra Petch (angular tech) via Google Fonts — uppercase, wide tracking
- Body: keep DM Sans
- Retire Syne

Textures (CSS/SVG, no external images):
- Site-wide hex-mesh background (repeating SVG hex pattern, ~2% opacity)
- Reusable `<PanelDivider />` — thin scan-line band with drifting glyph/circuit strip and faint magenta chromatic line
- Soft magenta radial glow per panel
- Retire cyan glows

Motion:
- Section labels: subtle flicker/glitch on reveal
- Divider glyph strip: slow horizontal drift

## Layout — stacked panels

Each section becomes a full-width panel (~85vh min on desktop), with a giant muted outlined section label on the left and content on the right, bracketed by scan-line dividers.

Panel map:
1. Hero — name lockup, new title **"Chief AI Officer · Metabuilder Solutions Limited"**, portrait in hex frame, magenta status pill
2. About — giant "ABOUT" label + rewritten bio (see Content below)
3. Services — "SERVICES" label + service tiles restyled magenta
4. Projects — "PORTFOLIO" label + existing ventures (TrustScout, S.H.A.R.P., Nichy & AfriFlow)
5. **Showcase (new)** — "SHOWCASE" label + tabbed/filtered gallery grid for creative work
6. Speaking — "STAGE" label + talks list
7. Testimonials — "SIGNAL" label + terminal-style quote cards
8. CTA — "CONNECT" label + magenta rabbit button, Calendly/mail/LinkedIn
9. Footer — compact, magenta hairline top border

Navbar: slim, uppercase Chakra Petch links, magenta hover underline, add "Showcase" link, keep rabbit CTA (recolored).

## Content updates

About section — replace the current three intro paragraphs with the new bio (verbatim from the user):
- Para 1: "David Akanimoh is a creative technologist, systems integrator, and the Chief AI Officer of Metabuilder Solutions Limited. Bridging a foundational background in political science and diplomacy with agile, self-taught engineering, David specializes in modern web development, AI video content creation, and architecting autonomous AI agent orchestration workflows and forensic verification solutions like the Voight-Kampff framework."
- Para 2: "Operating out of Abuja, he combines deep systems thinking with cutting-edge digital craftsmanship to drive innovative software and multimedia projects. As an ecosystem builder and educator, he actively shapes the tech landscape across institutions like the University of Abuja and Veritas University, while scaling enterprise solutions through Metabuilder."
- Keep the SIGMA Framework card and credentials list
- Update the "Co-Founder" credential to "Chief AI Officer" and add "University of Abuja & Veritas University — Ecosystem Educator"

Hero — role line changes to "Chief AI Officer · Metabuilder Solutions Limited · Abuja, Nigeria". Update short pitch to match new bio tone.

Navbar / Footer wording — reflect new title.

## Showcase section (new)

`src/components/portfolio/Showcase.tsx` + placeholder items in `src/data/showcase.ts`.

Structure:
- Section label "SHOWCASE", subtitle "Selected creative work — web, AI video, identity."
- Filter pills: **All · Websites · AI Video · Logos & Identity · Other**
- Bento-style grid (2-3 columns, mixed tile sizes) rendering items with:
  - Thumbnail (image or looping muted mp4/webm for video)
  - Overlay on hover: title, category tag, short caption, optional external link
  - Video tiles autoplay muted/looped/inline; a small magenta "▶ VIDEO" corner tag
- Empty-state placeholders shipped so the section looks complete; user can drop real media into `src/assets/showcase/` and swap entries in `showcase.ts`

Data shape:
```ts
type ShowcaseItem = {
  id: string;
  title: string;
  category: "web" | "video" | "logo" | "other";
  media: { type: "image" | "video"; src: string; poster?: string };
  caption?: string;
  href?: string;
  span?: "sm" | "md" | "lg"; // grid span
};
```

Seed with 6 placeholder tiles (3 web, 2 AI video, 1 logo) using existing portrait/logo/rabbit assets as stand-ins, clearly labeled as placeholders in captions so the user knows to replace them.

## Files

Edit:
- `src/index.css` — new tokens, hex-mesh + scan-line utilities, flicker/drift keyframes, font import swap
- `tailwind.config.ts` — add `font-display` (Chakra Petch)
- `src/components/portfolio/Navbar.tsx` — restyle + add Showcase link
- `src/components/portfolio/Hero.tsx` — panel treatment + new title/pitch
- `src/components/portfolio/About.tsx` — new bio paragraphs + updated credentials + panel styling
- `src/components/portfolio/Services.tsx`, `Projects.tsx`, `Speaking.tsx`, `Testimonials.tsx`, `CTA.tsx`, `Footer.tsx` — panel styling, magenta accents
- `src/pages/Index.tsx` — insert Showcase after Projects, wrap with dividers
- `index.html` — title/description refresh

Create:
- `src/components/portfolio/PanelDivider.tsx`
- `src/components/portfolio/PanelSection.tsx`
- `src/components/portfolio/Showcase.tsx`
- `src/data/showcase.ts`

## Out of scope

- No backend, routes, or business logic changes
- No assets copied from machinedelusions.com
- Real showcase media is placeholder until user provides files

## Restructure Portfolio + Add Websites, IG Reels, and Socials

### 1. Reorder sections
`src/pages/Index.tsx`: move Portfolio to appear right after About. New order:
Hero → About → **Portfolio** → Services → Speaking → Testimonials → CTA → Footer.
Delete the standalone `Showcase` section and its divider from the page.

### 2. Deprecate Showcase, merge into Portfolio
- Delete `src/components/portfolio/Showcase.tsx` and `src/data/showcase.ts`.
- Rebuild `src/components/portfolio/Projects.tsx` as the new Portfolio with two sub-sections inside a single `PanelSection` (label "Portfolio"):
  1. **Websites** — filter/tab or simply a titled subgrid
  2. **AI Video** — titled subgrid
  Remove the Logos & Identity and Other categories entirely.

### 3. Websites subsection
New data file `src/data/websites.ts` with entries:

| Title | URL | Summary |
|---|---|---|
| Metabuilder | metabuildersolutions.org | Corporate landing for Metabuilder Solutions Limited — the parent studio architecting the AI-native sovereign stack. |
| TrustScout | trustscout.dev | Africa's first buyer-initiated forensic vendor verification engine for social commerce, powered by the Voight-Kampff multi-agent framework. |
| Nichy | nichy.vercel.app | A niche discovery and micro-community platform in the Metabuilder venture portfolio. |
| AfriFlow | afriflowfund.vercel.app | Capital-flow infrastructure venture — connecting African founders to funding rails. |
| Jayralis | jayralis.fyi | Company site built for Jayralis — brand, product, and story surface. |

Card design (magenta panel style, matches existing tiles):
- Thumbnail: live screenshot via **Microlink's free screenshot API** — `https://api.microlink.io/?url={url}&screenshot=true&meta=false&embed=screenshot.url`. No key required, cached at their edge. Fallback: Google favicon service `https://www.google.com/s2/favicons?domain={host}&sz=128` shown as an icon chip in the top-left of every card regardless.
- Title, one-line summary, external-link arrow, opens site in new tab.
- Grid: `md:grid-cols-2 lg:grid-cols-3`, aspect-video thumbnails.

### 4. AI Video subsection
Description line (professional rewrite of the user's copy):
> "These AI-generated films showcase my work in avatar creation, narrative storytelling, and sustained visual consistency for brand-grade output."

Data file `src/data/aiVideos.ts`:
- Video 1 — Runway Model — `instagram.com/reel/DbDMbcJuon1/`
- Video 2 — Final Form — `instagram.com/reel/DbB0GIWuehX/`
- Video 3 — Blending Style — `instagram.com/reel/Da7-MFRsEq8/`
- Video 4 — Avatar Kanye — `instagram.com/reel/Da5VK7KMkLz/`

In-page player approach (no redirect): use **Instagram's official embed** via `<blockquote class="instagram-media" data-instgrm-permalink="...">` and lazy-load `https://www.instagram.com/embed.js`, then call `window.instgrm.Embeds.process()`. This renders each reel inline with IG's own player — user can watch without leaving the page. First frame acts as the thumbnail.

New component `src/components/portfolio/InstagramReel.tsx` handling the blockquote + one-time script load. Rendered in a responsive 3-col grid (or 2-col on md). Small magenta "▶ REEL" corner tag preserved for aesthetic consistency.

Trade-off noted: IG embeds require their script and network access to instagram.com; if the client blocks it, the blockquote falls back to a link to the reel. This is the best in-page option without hosting the video files locally.

### 5. Connect / CTA — add X and Instagram
`src/components/portfolio/CTA.tsx`: extend the revealed rabbit-hole options with two new pill buttons matching existing style:
- **X** → `https://x.com/Morpheos_sc`
- **IG** → `https://www.instagram.com/morpheos_sc`
Keep Calendly, Email, LinkedIn. Wrap in `flex-wrap` so mobile stacks cleanly.

### Files

Edit:
- `src/pages/Index.tsx` — reorder, drop Showcase
- `src/components/portfolio/Projects.tsx` — full rewrite as Portfolio (Websites + AI Video)
- `src/components/portfolio/CTA.tsx` — add X + IG

Create:
- `src/data/websites.ts`
- `src/data/aiVideos.ts`
- `src/components/portfolio/InstagramReel.tsx`

Delete:
- `src/components/portfolio/Showcase.tsx`
- `src/data/showcase.ts`

Navbar: remove the "Showcase" link if present; keep "Portfolio" pointing to `#projects`.

### Out of scope
- No backend changes, no self-hosted video files, no design-system changes beyond reusing existing magenta panel tokens.



## Akanimoh David — Portfolio Website (React Conversion + Updates)

Convert the uploaded HTML portfolio into a full React app with the following sections and changes:

### Assets
- **MetaBuilder logo** (uploaded logo.jpg) — used in navbar and footer
- **White rabbit logo** (uploaded Morpheus rabbit image) — used in CTA section button

### Sections & Components

1. **Navbar** — Fixed nav with MetaBuilder logo, section links (About, Services, Projects, Speaking, Reviews), and rabbit button to scroll to CTA

2. **Hero Section** — Name, role ("AI Strategist & Ecosystem Architect"), bio, action buttons, stats (Ventures, Countries, etc.), portrait area with "Available for Engagements" tag

3. **Who I Am (About)** — Company description, personal background, SIGMA Framework card, credentials list
   - **Add**: "ElevenLabs Partner" as a new credential item

4. **Services** — 3 service cards:
   - **AI Workshops & Training**: Change price to **$50 per session**
   - **Proposals & Pitch Decks**: Change price to **$20 per document**
   - AI Strategy Consulting (unchanged)

5. **The Sovereign Stack (Projects)** — Updated intro: *"A portfolio of AI-native ventures architected under or in collaboration with Metabuilder Solutions Limited."*
   - **TrustScout**: Change status badge to **"Beta"**, funding to **"Pre-Seed"**
   - **S.H.A.R.P.**: Change status badge to **"Production"**
   - **Nichy & AfriFlow**: Update description to *"Two upcoming ventures within the Metabuilder & Automagikal sovereign stack. Nichy and AfriFlow are being architected as part of a deliberate infrastructure play for Africa's AI-native economy — alongside Small Axe, the fifth pillar of the stack."*

6. **Speaking & Facilitation** — Update all dates from 2025 to **2026**
   - S.H.A.R.P. Episode 1: Change to **"Abacus AI & Veta Origin feat. Ismail Waziri (Veta Origin)"**

7. **Testimonials** — 6 review cards (unchanged)

8. **CTA Section** — "Ready to Go Down the Rabbit Hole?"
   - Button uses the **white rabbit (Morpheus) image**
   - On click: rabbit does a **hopping-away animation**, then reveals 3 contact options (Calendly, Email, LinkedIn)

9. **Footer** — MetaBuilder logo, copyright, social links

### Design System
- Dark navy theme (#080E1C, #0D1628, #131E35)
- Cyan accent (#00B4FF)
- Fonts: Syne (headings) + DM Sans (body)
- Custom cursor, noise overlay, scroll-reveal animations
- Responsive (mobile-friendly grid collapses)

### Technical Approach
- Split into reusable React components (Navbar, Hero, About, Services, Projects, Speaking, Testimonials, CTA, Footer)
- Tailwind CSS for styling matching the existing design system
- Scroll-reveal via Intersection Observer hook
- Rabbit hop animation via CSS keyframes + React state toggle


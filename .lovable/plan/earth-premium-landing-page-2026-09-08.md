# EARTH — Premium Landing Page

A single, cinematic landing page for Earth: a global import/export and natural-resource trading business. This is a fresh build in this project (currently an empty starter), positioned as a brand evolution away from "Farm Connects" — agriculture becomes one category among energy, minerals, metals, forestry and raw materials.

## Art direction

- Palette: warm off-white paper, deep charcoal/near-black, stone and sand neutrals, a deep forest-green anchor, and a restrained muted gold accent. No bright agritech green, no purple gradients.
- Type: an editorial display serif for the big headlines paired with a clean grotesque for body, navigation, labels and metadata. Tight tracking on display sizes, small uppercase metadata labels with wide tracking.
- Layout: editorial and asymmetric — generous margins, full-bleed cinematic photography, uneven card sizes, numbered categories, hairline rules, sharp-ish corners rather than pill-soft SaaS cards.
- Motion: controlled and cinematic — text reveals on load, image scale/mask reveals on scroll, sticky storytelling, slow parallax, subtle hover zooms. Nothing bouncy.

## Page sections

1. **Navigation** — Earth wordmark, minimal links (Resources, Trade, About, Insights), transparent over the hero, condensing to a solid bar on scroll.
2. **Hero** — full-bleed cinematic image, headline built on "From Earth to market", one line of supporting copy, primary CTA ("Explore resources") plus a quiet secondary link, and a small metadata strip.
3. **Resource categories** — editorial image-led composition with uneven tiles and category numbers: Agriculture, Energy, Minerals, Metals, Forestry, Raw Materials.
4. **Earth story** — large-type statement section ("Everything the world builds starts somewhere") with a vertical flow: Resource → Extraction → Processing → Trade → Industry → People.
5. **Product discovery** — premium catalogue strip (gold, crude oil, cocoa, cashew, copper, lithium, timber, natural gas) with Category / Origin / Market metadata, clearly labelled as sample/illustrative.
6. **Global trade & reach** — an elegant conceptual world map with origin and destination markers and animated trade arcs, labelled as conceptual, plus a SOURCE → EXPORT → DESTINATION → MARKET flow.
7. **Why Earth** — Source / Connect / Trade / Opportunity, written as confident qualitative copy.
8. **Vision** — editorial statement with a supporting cinematic image.
9. **Final CTA** — dark full-width band inviting sourcing or export enquiries.
10. **Footer** — minimal, wordmark, short link columns, contact placeholder.

## Content honesty

No invented statistics, customers, partnerships, volumes or certifications. Trust is communicated qualitatively (transparency, traceability, quality, global connectivity). Any market/product data shown is presented as illustrative. Contact details will be placeholders for you to replace with the real ones.

## Imagery

Custom-generated cinematic images in a single consistent grade: aerial landscape, mining/geology, oil infrastructure at dusk, a container port, timber, and agricultural land. No random stock look; each image serves the resource narrative.

## Technical notes

- TanStack Start route at `/` (replacing the placeholder), built from focused section components under `src/components/earth/`.
- Design tokens (colors, radii, shadows) defined in `src/styles.css` under the existing `@theme inline` system; no hardcoded color classes.
- Fonts loaded via a `<link>` in the root route head.
- Motion via `motion` (Framer Motion) with reduced-motion respected.
- Fully responsive: mobile-first with a drawer nav; SEO head with an Earth-specific title, description and social tags.

## Not included

No dashboards, auth, marketplace flows or product detail pages — landing page only.

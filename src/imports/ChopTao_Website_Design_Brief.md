# ChopTao — Website Design & Content Brief

## Overview

A modern, appetite-driven website for **ChopTao** — a small chops and snacks brand ("Chop Tao Chop Life"), founded by Taaooma (Maryam Apaokagi). The site should feel warm, premium, and craveable — similar in spirit to the reference bakery UI (soft gradients, generous product photography, rounded cards) but adapted to ChopTao's own identity and colors.

**Important constraint: do NOT use gold/caramel/amber tones anywhere in the design.** Use the palette below instead.

---

## Brand Palette (No Gold)

| Role | Color | Notes |
|---|---|---|
| Primary / Hijab tone | Deep Maroon `#7A3B3E` | From the packaging — use for primary CTAs, headings accents |
| Secondary / Collar tone | Royal Blue `#1E4A8C` | Use for secondary buttons, links, badges |
| Background (light) | Warm Cream `#F5EFE6` | Main page background, matches packaging base |
| Background (soft accent) | Blush Pink `#F3D9D6` | For gradient hero sections, promo tiles (replaces the reference UI's pink/purple gradient, without gold) |
| Neutral dark | Deep Charcoal `#2B2320` | Body text, dark CTA sections |
| Neutral light | Off-white `#FFFDFB` | Card backgrounds |

**Gradient direction (for hero/promo banners):** blend Blush Pink → Deep Maroon, or Blush Pink → Royal Blue — never introduce yellow/amber/gold into any gradient.

## Typography

- **Headings:** A confident, rounded sans-serif (similar spirit to the reference UI's clean display font) — avoid anything overly formal/corporate
- **Body:** Clean, readable sans-serif
- **Accent/script (optional):** A script font matching the logo's wordmark style, used sparingly for section intros or the tagline, not for body content

---

## Page Structure (adapted from reference UI)

### 1. Header
- Logo (left)
- Nav: Home | Menu | About | Order | Contact
- Prominent dark "Order Now" button (right), styled like the reference UI's dark pill CTA button — in Charcoal or Maroon, not black

### 2. Hero Section (large gradient banner, matches reference UI's top hero)
- Gradient background: Blush Pink → Maroon (diagonal, soft)
- Large product photography: a signature ChopTao item (spring rolls / small chops) styled prominently, similar to the reference's cake-on-pedestal treatment
- Headline: "Delicious Small Chops, Made With Love"
- Subheadline: "Freshly made, beautifully packaged, delivered to your doorstep."
- CTA button: "Order Now"
- Small trust row beneath (matches reference UI pattern): customer avatars + "500+ Happy Customers" or similar social proof line

### 3. Secondary Promo Banner (second big gradient block, same pattern as reference UI's second hero-style section)
- Alternate gradient: Blush Pink → Royal Blue
- Feature a seasonal or bundle offer: "Party Pack Bundle" or "Weekend Special"
- Small "New" or "Popular" badge, top-right corner (matches reference UI badge pattern)
- CTA: "View Bundle"

### 4. Featured Products Grid (3-column, matches reference UI's 3-card row)
Three signature items as cards — each with:
- Product photo (cream/blush/maroon-tinted card background, rotating like the reference UI's alternating tile colors)
- Item name
- "Popular" badge on at least one card
- Small CTA button

Example items: Spring Rolls, Chicken Puff, Samosa (adjust to actual ChopTao menu)

### 5. "Coastal Nothing Fantasies" — style section (reference UI's 3-card feature row with description text)
Adapt as: **"This Week's Favorites"**
- 3 cards, each with product image + name + 1-sentence description + CTA button, alternating card background colors from the palette (cream / blush / maroon-tinted, never gold-toned)

### 6. Story/Feature Split Section (matches reference UI's image + text side-by-side block)
- Large product photo (left)
- Right side: heading "Every Box, Made With Intention" + short paragraph about ChopTao's story/quality + CTA button ("Learn Our Story" or "See Full Menu")

### 7. Blog/Content Teaser (optional, matches reference UI's small blog card row)
- If ChopTao wants a content angle (behind-the-scenes, recipes, event catering stories): a 2-card row, image + short excerpt + "Read More"

### 8. Dark CTA Banner (matches reference UI's dark full-width strip near the bottom)
- Background: Charcoal (not black)
- Heading: "Craving Something Delicious?"
- Two CTAs: "Order Now" (Maroon button) / "View Menu" (outline button)

### 9. Footer
- Logo + tagline ("Chop Tao Chop Life")
- Quick links: Home, Menu, About, Order, Contact
- Social icons (Instagram, TikTok, Facebook)
- Contact/order info (WhatsApp or order form link)
- Copyright line

---

## Layout & Interaction Notes (from reference UI)

- **Rounded corners throughout** — cards, buttons, images all use soft, generous border-radius, matching the reference UI's soft aesthetic
- **Alternating card background colors** — rotate through Cream, Blush Pink, and a muted Maroon-tint across product grids, the way the reference UI rotates pink/grey/orange tones — but substitute every warm-neutral slot with these approved tones instead of any yellow/gold
- **Badges** ("Popular", "New") — small dark pill badges in the top corner of feature cards, matching the reference UI's badge placement
- **Hero gradients** — soft diagonal blends only between Blush Pink, Maroon, and Royal Blue — confirmed no gold/amber/yellow at any point

## Scalability Note

Build the product card (image + name + badge + CTA) as one reusable component with variants (with/without badge, alternating background color) — this will be reused across the Featured Products grid, This Week's Favorites, and any future menu expansion sections.

## Responsive Requirement

Reference UI shows a clear desktop two-column layout (main content + sidebar-style secondary column) — for mobile, stack everything into a single column in this order: Hero → Secondary Promo → Featured Products → This Week's Favorites → Story Section → Dark CTA → Footer.

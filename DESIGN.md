# Ariel Bunao — Option B: The Exhibition · Rev 3

## Project interpretation

Ariel paints people, places, and moments of Hawaiʻi in acrylic on canvas. This is an alternate concept for her first website, with purchase inquiries rather than checkout. The hero uses the precise supplied line. Business name, titles, availability, prices, bio, image publication approval, and sales logistics remain unconfirmed. The design uses her name provisionally and identifies photos descriptively rather than inventing artwork titles.

## 01 — Visual concept

Contemporary gallery / intimate / dramatic / painterly. This option treats the home page like a small exhibition opening: dark wall, one spotlighted work, then a bright viewing room. It deliberately differs from Option A's warm paper, green, split hero, offset three-work gallery, and conventional section rhythm.

## 02 — Typography

- Signature display: Caveat, a handwritten script, used only for “Ariel Bunao.” Its informal gesture suggests the artist's hand. Fallback: cursive.
- Editorial headings: Cormorant Garamond, medium weight, large optical scale; fallback Georgia.
- Body and navigation: DM Sans, 400–600; fallback Arial. Hawaiian text remains in this family; verify the actual font glyphs and fallback on devices.
- Name about `clamp(5.3rem, 15vw, 13rem)`; section headings 3–6.5rem; body at least 1rem. Headings near 1.0 line height, body 1.55–1.7. Reading width around 62 characters. Navigation is widely tracked uppercase.

## 03 — Color roles

| Role | Value | Purpose |
| --- | --- | --- |
| Dark gallery wall | `#28202a` | Hero, header, closing invitation |
| Light canvas | `#f7f2eb` | Viewing room |
| Surface | `#fffdf9` | Art mats and paper panels |
| Primary text | `#28202a` | Light sections |
| Light text | `#f7f2eb` | Dark sections |
| Secondary text | `#5f565f` | Descriptions |
| Brand accent | `#c77b68` | Small details and active states |
| Soft lilac | `#ddd1db` | Artist section |
| Border | `#c7bcb8` | Artwork labels and dividers |
| CTA | Light text with fine light border on dark; dark text and border on light |
| Focus | `#edab7b` | Strong visible outline |

The paintings supply the saturated color. Accent is used sparingly, never as body text on a pale background without verifying contrast.

## 04 — Spacing

An 8px base with 16/24/32/48/72/96/128px roles. Name and descriptor group tightly. Artwork gets broad margins. Section spacing on desktop is roughly 96–140px, reducing to 64–88px on mobile. This system favors breathing room over cards.

## 05 — Layout

Max content width 1360px, main reading width 640px. Centered masthead and singular framed painting replace Option A's split hero. A three-column by two-row exhibition grid gives six framed works even spacing on desktop; tablet uses two columns and mobile uses one. The artist section uses an edge-to-edge documentary image with a compact text panel. The closing inquiry uses a centered, dark typographic composition.

## 06 — Surfaces

Square framed artwork with pale mats, narrow borders, and no drop shadows. A single rounded-outline inquiry button is a deliberate change from Option A's solid square button. No gradients, floating tiles, or stock illustration.

## 07 — Imagery

The floral acrylic is the featured hero painting. Six supplied framed artwork mockups appear in the viewing room. Process photos show Ariel at an easel and outdoors. Gallery work is contained without cropping. The hero art is also shown whole. Photographs can crop with subject-aware positioning. Source images are converted to optimized WebP with intrinsic dimensions.

## 08 — Graphics

The script wordmark, thin rules, framed art mats, and restrained gallery labels carry the visual language. No generic icons or emoji. The temporary favicon uses an A letterform; final identity awaits Ariel.

## 09 — Buttons and links

Navigation lives in a thin horizontal bar below the script identity on desktop, becoming a wrapped, centered row on mobile. CTA is a fine outlined lozenge with a subtle fill on hover/focus. Artwork inquiries are simple underlined text. Every actionable element has a visible focus state and at least a 44px touch height where possible. Active navigation uses target-aware color for anchor destinations.

## 10 — Motion

Only subtle line and background transitions on hover/focus. No scroll reveal, parallax, or animated paintings. `prefers-reduced-motion` removes smooth scroll and transitions.

## 11 — Responsive art direction

On mobile, the signature scales down and the featured painting stays whole, with the descriptor before it. Exhibition works become a single-column sequence. On tablet, the gallery uses two columns but removes large alignment offsets. On laptop and desktop, asymmetry returns; the page caps at 1360px on large screens. Navigation is always visible with no hamburger dependency.

## Reference interpretation

The supplied galleries suggest presenting artwork prominently and offering a clear route to inquire or shop. This concept borrows no copy, design asset, specific component, or page composition from LIK Fine Art, Margaret Rice Studio, Aloha de Mele, or Kris Hawaiʻi.

## Rev 3 interaction

Artwork images open a native dialog with the work’s placeholder metadata and inquiry link. A subtle zoom signals interactivity. Muted process footage under a dark overlay adds motion behind the artist-at-work heading and the two foreground photographs without expanding the section. Reduced motion displays a still image.

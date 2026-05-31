# Portfolio Design System

## Core Principle
Black/white high-contrast. No em dashes. Human, personal voice.

---

## Color Tokens (CSS Variables)

| Token | Value | Usage |
|---|---|---|
| `--black` | `#111111` | Primary dark, all black backgrounds |
| `--white` | `#ffffff` | Primary light, text on dark backgrounds |
| `--off-white` | `#f8f8f8` | Project visual placeholders |
| `--gray-light` | `#f0f0f0` | Subtle fills |
| `--gray-text` | `#888888` | Secondary/muted text on white backgrounds only |
| `--border` | `#e8e8e8` | Dividers on white sections |
| `--gold` | `#111111` | (alias for --black) |
| `--gold-light` | `#e0e0e0` | Subtle accents |

---

## Text Color Rule

**Text on black backgrounds must always be white.**

| Context | Color |
|---|---|
| Text on `--black` background | `var(--white)` = `#ffffff` |
| Secondary/meta text on black | `rgba(255,255,255,0.8)` — labels, descriptions, supporting text |
| Decorative/ghost text on black | `rgba(255,255,255,0.04)` — oversized background numbers only |
| Muted/disabled text on black | `rgba(255,255,255,0.3)` — only for truly disabled states |
| Text on `--white` background | `var(--black)` = `#111111` |
| Secondary text on white | `var(--gray-text)` = `#888888` |

---

## Black Background Sections

These sections use `background: var(--black)`:
- **Hero right panel** — `.hero-panel-right` / `linear-gradient` right half
- **Marquee ticker** — `.marquee-wrap`
- **Works / Selected Work** — `.works` section (full-width)
- **Footer** — `footer`
- **Card labels** — `.ab-label` inside about cards
- **Floating CTA** — `.float-cta`
- **Hi badge** — `.hi-badge`

---

## Nav Rule
`nav` always has `background: var(--white)` — it's sticky and scrolls over black sections.

---

## Typography

| Role | Size | Weight | Notes |
|---|---|---|---|
| Hero title | 52px / 38px mobile | 700 | `letter-spacing: -0.03em` |
| Section headline | clamp(32px, 3.8vw, 52px) | 700 | |
| Project title | 36px | 700 | |
| Body | 16px | 400 | `line-height: 1.75` |
| Label / tag | 11px | 600 | `letter-spacing: 0.12em`, uppercase |
| Meta / small | 12–13px | 400–500 | |

Font: **Inter** (300, 400, 500, 600, 700)

---

## Spacing & Shape

- `--radius`: `20px` (card corners)
- `--radius-sm`: `12px`
- Container max-width: `1280px`, padding: `0 64px` (desktop), `0 28px` (mobile)
- `--shadow`: `0 4px 24px rgba(0,0,0,.06), 0 1px 3px rgba(0,0,0,.04)`

---

## Copywriting Rules

- No em dashes (—). Use periods, commas, or colons instead.
- Write in a human, personal voice for case studies and bio.
- Project hooks: direct and specific. Not vague.

---

## Sections Overview

| Section | Background | Text |
|---|---|---|
| Nav | white | dark |
| Hero left | white | dark |
| Hero right | black (#111) | white |
| Marquee | black | white |
| Skills | white | dark |
| Works | black | white |
| About cards | white | dark, with black card labels |
| Footer | black | white |

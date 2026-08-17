# Skills & Engineering Standards: High-Converting Local Business Sites

This document outlines the core skills, architectural patterns, and design philosophies utilized in building the **Reformation Body Fitness** web application.

---

## 1. Modern Semantic HTML & Local SEO Architecture

* **Semantic Hierarchy:** Single `<h1>` per page, hierarchical `<section>`, `<header>`, `<nav>`, `<main>`, and `<footer>` layout tags.
* **Schema.org JSON-LD:** Implementation of `ExerciseGym` / `SportsClub` structured data markup with geolocation coordinates, opening hours matrix, and social cross-references (`sameAs`) to boost Google Maps 3-Pack rankings.
* **Resource Prioritization:** Critical hero image tagged with `fetchpriority="high"`, Google Fonts preconnected with `preconnect`, and secondary images loaded asynchronously via `loading="lazy"`.

---

## 2. Vanilla CSS Design System & Visual Aesthetics

* **Zero-Dependency Architecture:** Pure Vanilla CSS3 with zero runtime overhead or CSS bundle bloat.
* **CSS Custom Properties (Tokens):** Cohesive color tokens for dark obsidian surfaces (`--bg-darkest`, `--bg-card`), energetic crimson accents (`--accent-crimson`), amber gold glows (`--accent-amber`), and emerald green action cues (`--accent-green`).
* **Glassmorphism & Micro-Interactions:** Hardware-accelerated `backdrop-filter: blur()`, glowing borders, and interactive hover transitions.
* **Mobile-First Responsive Layouts:** Fluid CSS grid and flexbox systems scaling smoothly across screen widths (`360px`, `600px`, `860px`, `1024px`, `1240px`).

---

## 3. Client-Side JavaScript & Conversion Engineering

* **Reactive Lead Generation Widgets:** Real-time BMI and Caloric calculation via the Mifflin-St Jeor equation, dynamically mapping user input into personalized fitness tracks.
* **Dynamic WhatsApp Integration:** Automated encoding and formatting of user stats, trial passcodes, and membership selections into direct `https://wa.me/` URLs to eliminate lead drop-off.
* **Live Operating Hours Engine:** Client-side time calculation checking day-of-week and hourly windows to provide dynamic gym status indicators (`OPEN NOW`, `OPENS AT 5:00 PM`, `CLOSED`).
* **Accessible Modal Dialogs & Accordions:** Native keyboard escape handling, click-outside dismissal, and ARIA state management (`aria-expanded`).

---

## 4. Performance & Core Web Vitals (CWV)

* **Largest Contentful Paint (LCP):** Preloaded critical assets and inlined critical styles for instant visual delivery.
* **Interaction to Next Paint (INP):** Lightweight event listeners with non-blocking DOM operations.
* **Cumulative Layout Shift (CLS):** Explicit aspect ratios and image dimensions to eliminate visual layout reflows during page render.

---

## 5. Continuous Deployment & Edge Hosting (Netlify)

* **Edge Caching Policy:** Immutable long-term caching for static assets (`/assets/*` with `max-age=31536000`), and daily cache revalidation for HTML/CSS/JS.
* **Security Headers:** Strict headers configured via `netlify.toml` (`X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`).

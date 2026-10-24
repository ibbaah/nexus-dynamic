# Nexus Dynamics — Next-Generation AI & Digital Experience Studio

> A complete, modern, visually stunning, and fully responsive enterprise website architected with vanilla HTML5, CSS3 design tokens, and modular ES6+ JavaScript.

---

## 🌟 Live Preview & Architecture Overview

- **Brand Concept**: **Nexus Dynamics (Nexus Studios)** — Next-Generation AI & Digital Experience Studio
- **Design Aesthetic**: High-end Obsidian Dark Mode & Luxe Light Mode with subtle glassmorphic backdrop filters, tailored cyan/violet gradient glows, dynamic typography, and responsive micro-interactions.
- **Visuals**: Hyper-detailed high-resolution custom visual assets for hero neural networks, SaaS AI telemetry, FinTech platforms, visionOS spatial computing, and studio workspaces.

---

## 🚀 Quick Start (Running Locally)

The website is completely self-contained and zero-dependency.

### Option 1: Built-in PowerShell Server (Recommended on Windows)
Run in PowerShell:
```powershell
powershell -ExecutionPolicy Bypass -File .\server.ps1 -Port 8080
```
Then navigate to: **`http://localhost:8080`**

### Option 2: Any Standard Web Server
You can also serve using any standard HTTP server (Python, Nginx, or live server):
```bash
python -m http.server 8080
# or
npx serve .
```

---

## 💎 Key Features & Section Breakdown

### 1. Navigation Header
- **Glassmorphic Sticky Header**: Dynamically blurs and transitions background opacity upon scrolling.
- **Active Scroll Spy**: Dynamically detects the viewport position and illuminates the active navigation item.
- **Theme Switcher**: Instant toggle between **Obsidian Dark** and **Luxe Light** mode, persisting in `localStorage`.
- **Responsive Mobile Drawer**: Smooth slide-down glass drawer with touch-friendly navigation.

### 2. Hero Section
- **Announcement Pill**: Interactive product release badge with pulse animation.
- **Typographic Headline**: Fluid typography (`clamp()`) with multi-color gradient masking.
- **Interactive Neural Network Canvas**: Custom particle system with node attraction, distance synapse lines, and interactive mouse gravity well running at 60 FPS.
- **Live Telemetry HUD**: Real-time edge node stats, latency telemetry (`8.5ms`), and status indicators.
- **Dual CTAs**: "Launch Your Project" with smooth scroll anchor, and "Watch Showreel" which launches a cinematic modal player.
- **Live Trust Metrics Ticker**: Key credibility metrics ($240M+ Value, 99.8% Retention, 45+ Awards, 180+ Ships).

### 3. Infinite Partner Marquee
- Continuous CSS marquee ticker highlighting enterprise brand partners.

### 4. About Studio Section
- **Interactive Story & Mission**: Explains the studio's philosophy, engineering principles, and global impact.
- **Tabbed Interface**: Smooth tab switching between *Our Philosophy*, *Tech Stack & Craft*, and *Global Impact*.
- **Studio Showcase**: High-res architectural photography of the studio HQ with floating badge.
- **4 Core Engineering Pillars**: Autonomy, Velocity, Resilience, and Aesthetic Mastery.

### 5. Solutions & Services Section
- **Filterable Category Tabs**: Instant filtering by *All*, *Artificial Intelligence*, *Platform Engineering*, and *Design & UX*.
- **Interactive Solution Cards**: Includes feature checklists, status badges, and interactive triggers:
  - *Explore Architecture*: Launches a detailed modal with comprehensive technical specs.
  - *Select*: Automatically pre-selects the solution in the contact form and scrolls smoothly to it.

### 6. Work & Case Studies Gallery
- **Filterable Showcase**: Filter by *AI Systems*, *FinTech*, *Spatial UI*, and *Cloud & Infra*.
- **High-Resolution Mockups**: Generated custom imagery showing real SaaS dashboards, spatial apps, and cloud meshes.
- **Interactive Case Study Modal**: Displays the project overview, key metrics, architecture deliverables, tech tags, and verified client quote.

### 7. Engagement & Pricing Models
- **Interactive Billing Switch**: Toggle between Monthly and Annual billing (with automatic 20% discount recalculation).
- **Three Structured Tiers**:
  - *Sprint Studio* ($4,900/mo or $3,920/mo)
  - *Growth Scale* ($9,800/mo or $7,840/mo — Featured)
  - *Enterprise Dedicated* ($19,500/mo or $15,600/mo)
- **Direct Plan Selection**: Clicking any plan auto-populates the contact form budget range and details.

### 8. Client Testimonials Carousel
- Full carousel slider with verified executive endorsements, 5-star ratings, company roles, and glowing avatar badges.
- Auto-rotating every 7 seconds, with previous/next arrow buttons, swipe support, and indicator dots.

### 9. Interactive FAQ Section
- **Instant Search Bar**: Filter questions in real-time as you type.
- **Smooth Accordion**: Expanding and collapsing FAQ items with rotating indicators.

### 10. Interactive Contact & Consultation Form
- **Direct Channels**: Physical HQ addresses, direct email, guaranteed < 2hr SLA indicator, and active capacity badge.
- **Real-Time Field Validation**: Real-time validation for full name, business email format, solution selection, and project details.
- **Character Counter**: Live indicator on the project brief textarea (up to 500 characters).
- **Loading State & Confirmation**: Displays an animated button loading spinner upon submission followed by an engagement reference ticket confirmation.

### 11. Footer & Newsletter
- Multi-column layout with quick links, social media channels, and legal links.
- **Newsletter Subscription**: Real-time email validation with instant toast notification.
- **System Status Badge**: Live operational uptime monitor.
- **Back to Top Floating Button**: Smoothly returns to the top of the page.

---

## 📁 File Structure

```text
├── index.html                   # Semantic, accessible HTML5 structure & Schema.org data
├── css/
│   ├── variables.css            # Color palettes (Dark & Light), gradients, typography tokens
│   ├── base.css                 # Reset, fluid typography, layout utilities, animations
│   ├── components.css           # Buttons, glass cards, form controls, modals, toasts, accordion
│   ├── sections.css             # Section-specific styles (hero, about, services, pricing, etc.)
│   └── responsive.css           # Breakpoints for desktop, tablet, and mobile devices
├── js/
│   ├── data.js                  # Data store (projects, services, testimonials, FAQs, pricing)
│   ├── canvas.js                # Interactive neural network particle canvas simulation
│   └── app.js                   # Master controller (navigation, theme, modals, filters, forms)
├── assets/
│   └── images/                  # High-resolution generated project assets
│       ├── hero_neural_ai.jpg
│       ├── project_ai_analytics.jpg
│       ├── project_fintech_nexus.jpg
│       ├── project_spatial_vision.jpg
│       ├── project_cloud_mesh.jpg
│       └── studio_nexus_hq.jpg
└── server.ps1                   # Lightweight PowerShell HTTP server
```

---

## ♿ Accessibility & SEO Best Practices
- **Semantic HTML5**: Native `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` landmarks.
- **Single `<h1>` Tag**: Clear visual and heading hierarchy throughout.
- **ARIA Attributes**: `aria-expanded`, `aria-label`, `aria-selected`, `role="tab"`, and `role="dialog"`.
- **Keyboard Navigation**: All interactive elements, buttons, and modals are fully keyboard accessible with `Escape` key close handlers.
- **Performance**: High frame-rate canvas animations automatically pause when offscreen or blurred, and images load lazily.

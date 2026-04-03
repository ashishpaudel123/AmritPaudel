# Amrit Paudel Portfolio Website

A modern personal portfolio and service website built with React, TypeScript, Vite, Tailwind CSS v4, Radix UI primitives, and AOS animations.

This project presents:

- Personal branding and hero/about sections
- Service catalog and detailed service pages
- Digital marketing and graphic design portfolio showcases
- Blog listing and rich blog detail pages
- Testimonial carousel and collaboration logos
- Contact section, reusable consultation modal, and floating WhatsApp CTA
- Light/dark/system theme switching

## 1. Project Summary

This is a single-page-first portfolio experience with route-based detail views.

Main user journeys:

- Visit home page and scroll through sections
- Open service details from the services area
- Navigate to portfolio category pages
- Open blog detail pages and return to preserved scroll position
- Submit contact/consultation forms
- Trigger direct WhatsApp chat

## 2. Tech Stack

- Framework: React 19 + TypeScript
- Build Tool: Vite 7
- Styling: Tailwind CSS v4, tw-animate-css, custom CSS utilities
- UI Primitives: Radix UI (dropdown-menu, navigation-menu, tabs, slot)
- Icons: lucide-react
- Routing: react-router-dom v7
- Animation: AOS (Animate On Scroll)
- Utility Helpers: clsx, class-variance-authority, tailwind-merge

## 3. Commands

Install dependencies:

```bash
npm install
```

Run dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

Lint:

```bash
npm run lint
```

## 4. Routing and View Architecture

Top-level routes:

- `/` -> Home page composition (hero, about, services, portfolio, collaboration, testimonials, blog, contact)
- `/portfolio/digital-marketing` -> Digital marketing case study page
- `/portfolio/graphics-design` -> Graphic design gallery page
- `/blog/:postId` -> Blog detail page

Home route composition is done in `src/App.tsx` with reusable section components.

## 5. State and Interaction Model

Core interaction patterns:

- Theme state via `ThemeProvider` with localStorage persistence
- Contact modal global state via React Context in `use-contact-modal.tsx`
- In-page anchor scrolling for section navigation
- Session scroll restore for blog-return flow using `sessionStorage`
- Local UI state in feature components (filters, slides, category tabs, pseudo form submission)

## 6. File-by-File Documentation

### Root Files

#### `package.json`

- Defines scripts: dev, build, lint, preview
- Declares React + UI + Tailwind + routing + animation dependencies

#### `components.json`

- shadcn-style UI configuration
- Alias mapping (`@/components`, `@/lib`, `@/hooks`)

#### `eslint.config.js`

- Flat config setup
- TypeScript + React Hooks + Vite React Refresh lint rules

#### `tsconfig.json`

- Project references for app and node configs
- Path alias setup for `@/*`

#### `tsconfig.app.json`

- Browser app compiler settings (strict mode, bundler resolution)

#### `tsconfig.node.json`

- Node-side config mainly for Vite config typing/checking

#### `vite.config.ts`

- Vite config with React plugin, Tailwind Vite plugin, `@` path alias

#### `index.html`

- Root HTML shell
- Mount point (`#root`) and favicon/title metadata

#### `README.md`

- Detailed project documentation (this file)

### Public Assets

#### `public/hero.png`

- Used in About section and favicon reference target

#### `public/video/hero.gif`

- Hero section animated visual

#### `public/collab/*`

- Collaboration partner logos

#### `public/project/*`

- Digital marketing analytics screenshots used in portfolio modal/gallery

#### `public/hiring/*`, `public/festival/*`

- Graphic design portfolio images

### App Entry and Global Styles

#### `src/main.tsx`

- Initializes AOS global settings
- Renders app into root

#### `src/App.tsx`

- Main app router and page composition
- Includes `ThemeProvider`, header/footer, modal, WhatsApp button
- Defines helper page components:
  - `HomePage`
  - `DigitalMarketingPage`
  - `GraphicsDesignPage`
  - `BlogDetailPage`
  - `AppContent`

#### `src/index.css`

- Tailwind imports and design tokens
- CSS variables for light/dark theme semantics
- Global utility and animation classes (blob, gradient, float, line clamp, grid backgrounds)

#### `src/App.css`

- Mostly legacy Vite template styling; minimal active impact

### Components

#### `src/components/header.tsx`

- Sticky responsive header with:
  - Desktop navigation menu
  - Mobile menu with dropdown services
  - Theme toggle
  - CTA and call button
- Handles section-scroll behavior depending on current route

#### `src/components/hero-section.tsx`

- Hero layout with animated backgrounds, CTA buttons, skill badges, and scroll indicator

#### `src/components/about-section.tsx`

- About content with image, certifications, and CTA

#### `src/components/services-section.tsx`

- Service cards from shared `services` data
- "View all services" reveal behavior
- Includes process timeline block

#### `src/components/service-router.tsx`

- Local router-like state switch between service list and detailed service page

#### `src/components/service-detail.tsx`

- Large data-driven detail page for services
- Includes features, process, benefits, case study, testimonial, CTA sidebar

#### `src/components/portfolio-section.tsx`

- Portfolio category selector cards (digital marketing vs graphic design)

#### `src/components/portfolio-router.tsx`

- Local state router version for portfolio views (not currently used in `App.tsx` route tree)

#### `src/components/digital-marketing-portfolio.tsx`

- Case-study heavy portfolio page
- Category filtering
- Analytics dashboard modal with extensive metric cards
- Fullscreen screenshot viewer
- CTA to consultation modal

#### `src/components/graphics-design-portfolio.tsx`

- Category-filtered design gallery
- Skills/tooling badges and CTA section

#### `src/components/collab-section.tsx`

- Partner/company logo section with simple pagination dots

#### `src/components/testimonials-section.tsx`

- Main testimonial carousel
- Infinite horizontal auto-scroll testimonial cards
- Manual controls and pause-on-hover behavior

#### `src/components/blog-section.tsx`

- Search, category filtering, and dynamic listing
- "Load more" behavior and empty-state UX

#### `src/components/blog-router.tsx`

- Navigates to blog detail while persisting scroll position

#### `src/components/blog-detail.tsx`

- Rich article detail page with:
  - Dynamic post data
  - TOC with scroll helpers
  - Social actions and author block
  - Related posts and newsletter section
- Renders article body through `dangerouslySetInnerHTML`

#### `src/components/contact-section.tsx`

- Contact form with local success state
- No API integration currently (console logs only)

#### `src/components/contact-modal.tsx`

- Reusable consultation modal form
- Simulated async submission and success state

#### `src/components/footer.tsx`

- Contact info, services links, quick links, social links, back-to-top

#### `src/components/whatsapp-button.tsx`

- Floating WhatsApp CTA with configurable phone/message

#### `src/components/mode-toggle.tsx`

- Theme switch menu (light/dark/system)

#### `src/components/theme-provider.tsx`

- Theme context provider using localStorage and system preference fallback

### UI Primitive Wrappers

#### `src/components/ui/button.tsx`

- Variant-based button component using CVA

#### `src/components/ui/badge.tsx`

- Variant-based badge component using CVA

#### `src/components/ui/dropdown-menu.tsx`

- Radix dropdown wrappers with custom styles

#### `src/components/ui/navigation-menu.tsx`

- Radix navigation menu wrappers with trigger/content/viewport helpers

#### `src/components/ui/tabs.tsx`

- Radix tabs wrappers

### Hooks and Library

#### `src/hooks/use-contact-modal.tsx`

- Global context for opening/closing modal with dynamic title

#### `src/lib/utils.ts`

- `cn` class merge utility
- Shared data catalogs:
  - services
  - portfolioCategories
  - testimonials

## 7. Data Sources and Data Flow

All business/content data is currently static and embedded in components or `src/lib/utils.ts`.

There is no backend/API integration yet. Forms are simulated client-side.

## 8. Current Strengths

- Strong visual direction and motion system
- Reusable primitive + variant component pattern
- Clear section modularization
- Rich portfolio storytelling and analytics presentation
- Good mobile support in most high-traffic sections

## 9. Improvement Opportunities

1. Form Integration

- Connect contact forms to a real backend/email service

2. Data Externalization

- Move blog/services/portfolio content into CMS or JSON layer

3. Type Model Centralization

- Define explicit interfaces/types for service/blog/project/testimonial models

4. Accessibility

- Improve keyboard/focus behavior for custom interactive areas
- Add stricter semantic/ARIA passes for all navigation and card-click areas

5. Security and Rendering Hygiene

- Sanitize or strongly control HTML source used by `dangerouslySetInnerHTML`

6. Cleanup

- Remove unused `portfolio-router.tsx` if no longer needed
- Remove leftover Vite template styles from `src/App.css` if not required

## 10. Development Notes

- Theme is stored via localStorage key: `vite-ui-theme`
- AOS initialized globally in `src/main.tsx`
- Blog list -> detail scroll restoration uses sessionStorage key: `blogScrollPosition`
- Service and portfolio details combine route-level and state-level navigation patterns

## 11. Quick Start Checklist

1. Install dependencies with `npm install`
2. Run dev server with `npm run dev`
3. Open app in browser and verify:
   - Header navigation section scrolling
   - Theme switch behavior
   - Service detail opening/closing
   - Portfolio route pages
   - Blog open/back behavior
   - Contact modal and WhatsApp button

## 12. License / Ownership

This repository appears to be a personal/professional portfolio website for Amrit Paudel.
Confirm licensing and image/content ownership policy before public redistribution.

# Adan "Adam" Fernandez - Software Engineering Portfolio

Personal portfolio focused on professional experience building and operating e-commerce platforms, backend services, and enterprise integrations.

## What the site covers

- Professional experience across a multi-brand commerce organization.
- Sanitized case studies for commerce architecture, order integrations, and production reliability.
- Technical skills grouped by frontend, backend, data, integrations, and operations.
- A focused selection of personal products: VitalCoach, GiftSwap Mobile, and Shirt Customizer.
- An ATS-friendly downloadable resume.

## Stack

- React 18 and Create React App
- Tailwind CSS
- GSAP for non-scroll hero and skills interactions
- EmailJS for the contact form
- React GA for analytics

## Local development

```bash
npm install
npm start
```

The app runs at `http://localhost:3000`.

## Production build

```bash
npm run build
```

The optimized static site is generated in `build/` and is configured for `https://adamdev.me/`.

## Performance and accessibility decisions

- Native browser scrolling is preserved without scroll interception, scroll snapping, or ScrollTrigger.
- Horizontal overflow uses `clip` so the page does not create a competing nested scroll container.
- Motion is minimized when `prefers-reduced-motion` is enabled.
- Semantic sections, descriptive alternative text, visible focus styles, and labeled controls are used throughout.
- Metadata includes canonical, Open Graph, and Person structured data.

## Content privacy

Professional case studies describe responsibilities and system boundaries without exposing proprietary code, credentials, customer data, or confidential architecture.

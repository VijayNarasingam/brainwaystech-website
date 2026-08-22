# BrainwaysTech LLP — React Site

A modern React + Vite multi-page website for BrainwaysTech LLP (Home, About, Services, Contact) featuring:

- Animated hero canvas (neural-network particle background)
- Interactive tilting hero panel with 3 tabbed mini-mockups (Web/App, Marketing, Video)
- Dark/light mode toggle (top-right of navbar)
- Custom cursor (dot + lagging ring, grows on hover)
- Interactive tech-stack cards (scroll-reveal, hover lift, click-pulse) on Home + Services
- Auto-scrolling "Trusted by" client marquee (About)
- Scroll-reveal testimonial cards, "What our clients say" (About)
- Floating WhatsApp chat widget (every page)
- Contact form wired to submit to a Google Form (see below)
- Synapse-line signature divider, alternating light/dark sections throughout

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

The `dist/` folder is what you deploy to your host.

## Connecting the contact form to Google Forms

The form in `src/components/ContactForm.jsx` is fully wired but points at placeholder
values until you connect a real Google Form. Follow these steps:

1. Create a Google Form with 5 fields matching ContactForm.jsx:
   Full name (Short answer), Email (Short answer), Phone number (Short answer),
   Service interested in (Dropdown with: Web &amp; App Development, Digital Marketing,
   Video Editing, Something else), Project details (Paragraph).

2. Form menu (⋮) → **Get pre-filled link** → fill dummy answers → copy the link.
   The link looks like:
   ```
   https://docs.google.com/forms/d/e/.../viewform?entry.123=...
   ```

3. Open `src/components/ContactForm.jsx` and update:
   - `GOOGLE_FORM_ACTION` — paste the link, then **change `/viewform` to `/formResponse`**
   - `ENTRY_MAP` — extract the `entry.NNNNNNNNNN` IDs from the pre-filled link for each
     field and update the map. For the phone field, set its entry ID on the
     `REPLACE_WITH_PHONE_ENTRY_ID` placeholder.

4. In the Form's **Responses** tab → ⋮ → **Get email notifications for new responses**,
   so submissions land in your inbox.

Until this is connected, clicking "Send message" shows a friendly warning instead of
silently failing.

## WhatsApp number

Set in `src/components/WhatsAppWidget.jsx` — update the `WHATSAPP_NUMBER` constant
(currently `919361061592`, i.e. +91 93610 61592) if that number changes.

## Project structure

```
src/
  main.jsx            entry point, router + global CSS
  App.jsx              routes + shared layout (navbar, footer, widgets)
  context/ThemeContext.jsx   dark/light state
  hooks/useReveal.js         scroll-reveal IntersectionObserver hook
  data/                      tech stack, testimonials, trusted clients
  components/                Navbar, Footer, HeroCanvas, HeroPanel, TechGrid,
                              TrustedMarquee, Testimonials, ContactForm,
                              WhatsAppWidget, CustomCursor, SynapseDivider, ScrollToTop
  pages/                      Home, About, Services, Contact
  styles/global.css           full design system (colors, type, components)
```

All contact details (email, phone, office address) currently reflect what's publicly
available for BrainwaysTech LLP — update `src/pages/Contact.jsx` and `src/components/Footer.jsx`
if you have more accurate details on hand.

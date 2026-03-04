# Cape Cod Makers Website

The official website for [Cape Cod Makers](https://capecodmakers.org) — a community makerspace at 204 Sisson Road, Harwich, MA 02645.

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com), hosted on [GitHub Pages](https://pages.github.com).

## Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Type-check + production build
npm run build

# Preview production build locally
npm run preview
```

## Adding Content

### Adding an Event

Create a new `.md` file in `src/content/events/`. Use the date in the filename (e.g., `2025-06-15-workshop.md`):

```markdown
---
title: "Your Event Title"
date: 2025-06-15T14:00:00
endDate: 2025-06-15T17:00:00
location: "204 Sisson Road, Harwich, MA 02645"
description: "A short description of the event."
tags: ["workshop", "community"]
registrationUrl: "https://example.com/register"  # optional
---

Full event description goes here in Markdown.
```

### Adding a Blog Post

Create a new `.md` file in `src/content/blog/`:

```markdown
---
title: "Post Title"
pubDate: 2025-06-15
description: "A short description."
author: "Cape Cod Makers"
tags: ["announcement"]
draft: false
---

Post content in Markdown.
```

### Updating Content

All pages with placeholder content are marked with `<!-- TODO -->` comments. Search the `src/` directory for `TODO` to find all items that need real content.

Key items to update before launch:
- [ ] Mission statement and history (`src/pages/about.astro`, `src/pages/index.astro`)
- [ ] Membership tiers and pricing (`src/pages/membership.astro`)
- [ ] Equipment list (`src/pages/facilities.astro`)
- [ ] Social media URLs (`src/components/Footer.astro`, `src/pages/contact.astro`)
- [ ] Formspree ID for contact form (`src/components/ContactForm.astro`)
- [ ] Donation platform links (`src/components/DonateSection.astro`)
- [ ] Logo file (`public/images/logo.svg` or update `src/components/Header.astro`)
- [ ] Favicon (`public/favicon.svg`)
- [ ] Brand colors (`tailwind.config.mjs`)

## Deployment

The site auto-deploys to GitHub Pages on every push to `main` via GitHub Actions.

### Initial Setup

1. Create a GitHub repository and push this code
2. Go to **Settings > Pages** and set Source to **GitHub Actions**
3. Set Custom Domain to `capecodmakers.org`
4. At your DNS registrar, add these A records for `@`:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
5. Add a CNAME record: `www` → `capecodmakers.org`
6. Enable **Enforce HTTPS** in GitHub Pages settings once DNS propagates

### Contact Form

The contact form uses [Formspree](https://formspree.io):
1. Create a free account at formspree.io
2. Create a new form and copy the form ID
3. Replace `YOUR_FORMSPREE_ID` in `src/components/ContactForm.astro`

## Project Structure

```
src/
├── content/       # Markdown content (events, blog posts)
├── components/    # Reusable Astro components
├── layouts/       # Page layout templates
├── pages/         # One file per URL route
├── styles/        # Global CSS (Tailwind directives)
└── utils/         # Helper functions

public/            # Static assets (images, favicon, CNAME)
.github/workflows/ # GitHub Actions CI/CD
```

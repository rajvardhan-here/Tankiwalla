# TANKIWALLA — Premium Water Tank Cleaning Services

A modern, mobile-first business website for **TANKIWALLA**, a water tank cleaning service based in Indore, Madhya Pradesh, India.

The website is designed to help residential, commercial, institutional and industrial customers understand the services and quickly contact the business.

## Business Information

| Detail | Information |
|---|---|
| Business | TANKIWALLA |
| Location | Indore, Madhya Pradesh, India |
| Phone / WhatsApp | +91 92441 04593 |
| Email | tankiwalla@gmail.com |

## Website Goals

- Present TANKIWALLA as a professional, trustworthy service brand.
- Make calling and WhatsApp enquiries easy, especially on mobile.
- Showcase residential, commercial, institutional and industrial tank-cleaning services.
- Display authentic before-and-after work photographs.
- Collect service enquiries through a simple contact form.
- Help local customers discover the business through search engines.

## Planned Technology

The implementation is intended to use:

- **Next.js** with the App Router
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** for restrained, accessible motion
- **Lucide React** for icons
- **Vercel** for deployment

Exact dependency versions will be selected during project setup and recorded in `package.json` and the lockfile.

## Getting Started

### Prerequisites

Install the current compatible LTS version of Node.js and Git.

Check your installation:

```bash
node --version
npm --version
git --version
```

### Clone the repository

```bash
git clone https://github.com/rajvardhan-here/tankiwalla-website.git
cd tankiwalla-website
```

### Install dependencies and run locally

Once the Next.js application and `package.json` have been added:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> This repository was initially created empty. The application source code still needs to be added before the install and run commands can work.

## Contact & Conversion Features

The website should provide:

- Tap-to-call using `tel:+919244104593`
- WhatsApp enquiries using [https://wa.me/919244104593](https://wa.me/919244104593)
- Email contact using `mailto:tankiwalla@gmail.com`
- Service-specific prefilled WhatsApp messages
- A validated enquiry form with clear success and error states

Form delivery must be connected to a real provider (for example, Web3Forms) and tested before launch. Never display a success message unless the provider confirms submission.

## Content & Image Guidelines

- Use authentic TANKIWALLA project photographs for actual work, before-and-after comparisons and testimonials.
- Clearly treat generated or stock images as illustrative imagery; never present them as completed customer projects.
- Do not publish invented reviews, ratings, customer counts, certifications, guarantees, government contracts or years of experience.
- Keep image assets optimized (prefer WebP/AVIF where appropriate) and use responsive image sizes.

Suggested asset location:

```text
public/
  images/
    hero/
    about/
    gallery/
    services/
    process/
    reviews/
    backgrounds/
```

## Configuration & Secrets

- Keep business contact details in one centralized configuration module.
- Store provider keys and other secrets in local environment variables.
- Use `.env.local` for local development and configure production variables in the hosting dashboard.
- Never commit `.env.local`, API keys, access tokens or credentials.
- Provide an `.env.example` containing variable names and safe placeholder values only.

## Design Principles

- Mobile-first layouts, tested at common phone, tablet and desktop widths.
- Premium water-inspired visual identity with strong text/background contrast.
- Glass effects used selectively so content remains readable.
- Smooth, purposeful animations with support for `prefers-reduced-motion`.
- Fast loading, accessible controls and no horizontal overflow.

## Deployment

The intended hosting platform is Vercel.

1. Import this private GitHub repository into Vercel.
2. Configure the required environment variables in Vercel.
3. Deploy the production branch.
4. Test the live website, contact form, phone links and WhatsApp links.
5. Connect a custom domain when ready.

The GitHub repository can remain **private** while the deployed website is **public**.

## Privacy & Security

- Do not store customer enquiry data in public source files.
- Collect only the information needed to respond to an enquiry.
- Add a clear privacy notice before collecting personal information.
- Validate form inputs and use appropriate spam protection.
- Keep dependencies updated and review production build output.

## Project Status

**Status: Initial repository setup**

- [x] Private GitHub repository created
- [x] Project README added
- [ ] Next.js application scaffold
- [ ] Responsive website sections and animations
- [ ] Contact form integration
- [ ] SEO, accessibility and performance checks
- [ ] Production deployment and domain setup

---

**TANKIWALLA** — Clean Tanks. Safer Water. Healthier Spaces.

For service enquiries: **+91 92441 04593** · **tankiwalla@gmail.com**

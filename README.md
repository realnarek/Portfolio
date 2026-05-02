# Narek Tamazyan — Portfolio

A minimal, editorial portfolio site. Black and white, strong typography, no clutter.

Built with **Next.js 15 (App Router)**, **Tailwind CSS**, and **TypeScript**.

---

## Quick start

```bash
# install
npm install

# run dev server
npm run dev

# production build
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deploy to Vercel

The fastest path:

1. Push this folder to a new GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Accept the defaults — Vercel auto-detects Next.js. Click **Deploy**.

That's it. No environment variables, no build configuration needed.

CLI alternative:

```bash
npm i -g vercel
vercel
```

---

## Replace the profile photo

The file `public/profile.jpg` is a placeholder showing the initials "NT". Replace it with your own photo:

1. Drop your photo into `/public` and name it `profile.jpg` (overwrite the existing file).
2. Recommended: square format, at least 800×800px, clean background.
3. Commit and redeploy.

If you prefer a different filename, update the `src` in `components/Hero.tsx`.

---

## Project structure

```
app/
  layout.tsx       Root layout, fonts, SEO metadata
  page.tsx         Composes all sections
  globals.css      Tailwind + base styles
components/
  Hero.tsx         Name, photo, tagline
  About.tsx        Bio
  Projects.tsx     Three case studies
  Skills.tsx       Skills + tools, two columns
  Contact.tsx      Phone, LinkedIn, location
public/
  profile.jpg      Profile photo (replace this)
tailwind.config.ts
tsconfig.json
next.config.mjs
postcss.config.mjs
```

---

## Editing content

All copy lives directly in the components — no CMS, no content layer. Edit the relevant `.tsx` file and the change is immediate in dev.

- **Name & tagline**: `components/Hero.tsx`
- **Bio**: `components/About.tsx`
- **Projects**: `components/Projects.tsx` — array at the top of the file
- **Skills & tools**: `components/Skills.tsx` — arrays at the top of the file
- **Contact info**: `components/Contact.tsx`
- **SEO meta tags**: `app/layout.tsx`

---

## Type system

The site uses **Fraunces** (variable serif, Google Fonts) for display, **Geist** for body, and **Geist Mono** for labels and small caps. All loaded via `next/font/google` — zero CLS, no external requests at runtime.

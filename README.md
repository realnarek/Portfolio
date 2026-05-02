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

## Replace the Selected Work thumbnails

The three images in `public/work/` (`svet-nails.jpg`, `yso.jpg`, `films-by-nar.jpg`) are styled placeholders. Replace each with a real screenshot or content preview:

- 4:5 portrait aspect ratio looks best (the grid is set to `aspect-[4/5]`)
- ~1000×1250px is plenty
- Keep filenames identical or update the `image` field in the `work` array inside `components/SelectedWork.tsx`

To add or remove items, edit the `work` array at the top of `components/SelectedWork.tsx`. The grid auto-flows: 1 column on mobile, 2 on tablet, 3 on desktop.

---

## Project structure

```
app/
  layout.tsx       Root layout, fonts, SEO metadata
  page.tsx         Composes all sections
  globals.css      Tailwind + base styles
components/
  Hero.tsx           Name, photo, tagline
  About.tsx          Bio
  SelectedWork.tsx   Visual grid of live work, links out
  Projects.tsx       Three text case studies
  Skills.tsx         Skills + tools, two columns
  Contact.tsx        Phone, LinkedIn, location
public/
  profile.jpg        Profile photo (replace this)
  work/
    svet-nails.jpg   Thumbnail (replace)
    yso.jpg          Thumbnail (replace)
    films-by-nar.jpg Thumbnail (replace)
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
- **Selected Work (visual grid)**: `components/SelectedWork.tsx` — `work` array at the top
- **Case studies**: `components/Projects.tsx` — `projects` array at the top
- **Skills & tools**: `components/Skills.tsx` — arrays at the top of the file
- **Contact info**: `components/Contact.tsx`
- **SEO meta tags**: `app/layout.tsx`

---

## Type system

The site uses **Fraunces** (variable serif, Google Fonts) for display, **Geist** for body, and **Geist Mono** for labels and small caps. All loaded via `next/font/google` — zero CLS, no external requests at runtime.

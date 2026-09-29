# Caleb Payán — Portfolio

Personal portfolio of **Caleb Payán Inzunza**, Fullstack Engineer (React · Next.js · TypeScript).

Built with Next.js (App Router), TypeScript and plain CSS — no UI framework. Design based on a
Claude Design mockup (Hero B · Cards B), made fully responsive from 320px up.

## Development

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Editing content

All copy lives in [`src/content/profile.ts`](src/content/profile.ts): projects, experience, stack,
education and links. Styles and design tokens (colors, accent, spacing) are in
[`src/app/globals.css`](src/app/globals.css) — change `--accent` to re-theme the whole site.

### Before publishing

- [ ] Add your CV as `public/cv.pdf`
- [ ] Set your LinkedIn and GitHub URLs in `profile.links`
- [ ] Optional: add a photo to `public/` and set `profile.photo`
- [ ] Fill in the `[bracketed]` placeholders for projects 01–03 and the Sperantus outcome
- [ ] Add `live` / `code` URLs and an `image` screenshot for each project

## Structure

```
src/
  app/          layout, page, global styles, favicon
  components/   Nav, Hero, Projects (carousel + detail dialog), Experience, Stack, Education, Contact
  content/      profile.ts — the single source of site content
```

## Deploy

Deploys as-is to [Vercel](https://vercel.com/new): import the repo, no configuration needed.

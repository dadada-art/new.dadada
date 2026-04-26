# Next.js Developer Portfolio

Single-page developer portfolio built with Next.js and no database.

## Run

```bash
npm.cmd install
npm.cmd run dev
```

Open `http://localhost:3000`.

## Deploy

This project pins Node.js to `24.x` and npm to `11.12.1` for Vercel deployments.
Vercel installs dependencies with `npm ci`, so keep `package-lock.json` committed.

## Customize

- Edit hero text, skills, and project data in `app/page.tsx`
- Update colors and layout in `app/globals.css`
- Update SEO metadata in `app/layout.tsx`

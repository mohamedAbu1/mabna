# Mabna

Mabna is a construction-materials storefront built with Next.js and React.

## Requirements

- Node.js `>=22.13.0`
- npm

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in a browser.

## Production build

```bash
npm run build
npm start
```

The build uses the standard Next.js Webpack pipeline and produces the `.next`
directory used by Vercel.

## Deployment

Import the GitHub repository into Vercel and keep the framework preset as
Next.js. Vercel will use the `build` and `start` scripts from `package.json`.

## Project structure

- `app/` — Next.js App Router pages and styles
- `components/` — reusable UI components
- `public/` — static assets
- `lib/` — shared utilities and optional connector helpers
- `db/` — optional Drizzle schema helpers

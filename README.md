# Wei Dong Portfolio

Game programmer portfolio built with Astro, TypeScript, and plain CSS.

Requires Node.js 22.12 or later and pnpm 11.

## Commands

| Command | Action |
| --- | --- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start the local development server |
| `pnpm check` | Run Astro and TypeScript checks |
| `pnpm build` | Check and build the production site |
| `pnpm preview` | Preview the production build |

## Project structure

- `src/pages/index.astro`: page composition
- `src/components`: reusable interface components
- `src/data/portfolio.ts`: projects, experience, and skills
- `src/i18n/copy.ts`: bilingual page copy
- `src/scripts/site.ts`: language, reveal, and dialog behavior
- `src/styles/global.css`: global visual system
- `public`: static files copied directly to the build

The site deploys to `https://nooobad.com` through GitHub Actions and GitHub Pages.

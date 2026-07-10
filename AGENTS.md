# Portfolio Project Context

## Project goal

This repository is Wei Dong's bilingual game programmer portfolio. It targets UE5 gameplay
programmer and game client programmer roles. The site should present production engineering
experience, gameplay systems work, rendering projects, and performance optimization clearly to
recruiters and technical interviewers.

Identity and links:

- English name: Wei Dong
- Chinese name: 董玮
- GitHub: `Away1615`
- Email: `isalexpro1615@qq.com`
- Repository: `https://github.com/Away1615/away1615.github.io`
- Production domain: `https://nooobad.com`
- GitHub Pages fallback: `https://away1615.github.io`

## Current stack

- Astro `7.0.7`
- TypeScript `5.9.3` with Astro strict configuration
- Plain CSS
- pnpm `11.7.0`
- Node.js `>=22.12.0`
- GitHub Actions and GitHub Pages

Do not add React, Vue, Tailwind, a CMS, or another runtime unless the user explicitly requests it
and there is a concrete need.

## Source structure

- `src/pages/index.astro`: page composition and section order
- `src/components/SiteHeader.astro`: navigation, language switch, and resume entry
- `src/components/ProjectCard.astro`: reusable project cards
- `src/components/ProjectDialog.astro`: native project detail dialogs
- `src/data/portfolio.ts`: authoritative project, experience, and skill data
- `src/i18n/copy.ts`: authoritative bilingual page copy
- `src/scripts/site.ts`: language persistence, reveal animation, and dialog interaction
- `src/styles/global.css`: visual system and responsive layout
- `public/assets/resume/Wei-Dong-Resume-CN.pdf`: current Chinese resume
- `public/CNAME`: custom GitHub Pages domain
- `.github/workflows/deploy.yml`: automatic deployment from `main`

When editing factual content, update `portfolio.ts` or `copy.ts` instead of hard-coding duplicate
text in Astro components.

## Design direction

- Person-first dark portfolio with large introductory typography.
- Project media cards are the primary visual structure.
- Project cards show readable technology tags such as C++, UE5, GAS, DirectX 12, and HLSL.
- Keep project names and technology names in their conventional English form in both languages.
- English and Simplified Chinese switch on one static page. The selected language is stored under
  the `portfolio-language` localStorage key.
- Use restrained reveal and hover transitions only. Do not add heavy animation.
- Do not restore the discarded engineering-diagram, grid-line, or `AWAY / 1615` notebook style.
- Preserve responsive behavior at desktop, tablet, 390px mobile, and 320px narrow mobile widths.
- Real project screenshots or GIFs should replace the marked media placeholders when supplied.

## Content context

Current featured work:

- Rift: UE5/C++, GAS, LAN multiplayer, replicated combat, AI encounters, and boss phases.
- DX12-FPS: custom DirectX 12 renderer, HLSL, data-driven levels, gameplay, and GPU instancing.
- Software Rasterizer: AVX SIMD, multithreading, tile scheduling, and CPU rendering optimization.
- UE5 Vehicle Combat: six-person team project, gameplay VFX, dynamic weather, Niagara, materials,
  and a Blueprint-facing C++ particle component.

Background:

- MSc Games Engineering at the University of Warwick, 2025-2027.
- iOS Client Engineer at ByteDance, 2021-2024, working on Feishu and Doubao.
- BSc Software Engineering at Wuhan University of Technology, 2017-2021.

The current English mode still links to the Chinese resume because no English PDF has been
provided yet.

## Deployment state

The `main` branch deploys automatically through the official Astro GitHub Action. Astro's `site`
is `https://nooobad.com`, and `public/CNAME` contains `nooobad.com`.

As of 2026-07-10:

- GitHub Pages is enabled and Actions deployments succeed.
- The apex domain has all four GitHub Pages A records.
- `www.nooobad.com` is a CNAME to `away1615.github.io`.
- GitHub domain verification TXT is configured.
- GitHub reported the custom TLS certificate active but still propagating globally.
- `Enforce HTTPS` must be enabled in repository Pages settings when the checkbox becomes available.

Treat this status as time-sensitive and recheck it before making assumptions.

## Development workflow

```bash
pnpm install --frozen-lockfile
pnpm dev
pnpm check
pnpm build
```

Before pushing a user-facing change:

1. Run `pnpm check` and `pnpm build`.
2. Test English and Chinese switching, language persistence, and all four project dialogs.
3. Check for horizontal overflow at 1440px, 390px, and 320px.
4. Confirm the resume URL returns successfully.
5. Keep generated screenshots, `dist`, `.astro`, `node_modules`, and `.pnpm-store` out of Git.

Pushes to `main` publish directly to production, so commit only validated work.

## Next priorities

1. Continue polishing Chinese and English copy without changing the established structure.
2. Replace media placeholders with authentic project screenshots, gameplay GIFs, or video covers.
3. Replace the `WD` header mark with the user's personal icon when the source asset is provided.
4. Add a separate English resume and select the correct PDF for each language.
5. Verify HTTPS enforcement and root/`www` redirects after certificate propagation completes.

Keep changes scoped. Do not invent project facts, performance numbers, screenshots, employment
details, or responsibilities; ask the user when source information is missing.

# NexCore — Company Profile Website

A modern, production-grade company profile website built with **Next.js 15** and ready to deploy to **Vercel**.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS + inline styles with CSS variables
- **Animations**: CSS transitions & Canvas API (particle network)
- **Fonts**: Syne (display) + DM Sans (body) via Google Fonts

## Sections
1. **Hero** — Animated particle network background, headline, CTA, stats row
2. **About** — Company story with animated milestone timeline
3. **Services** — 6-service grid with hover interactions
4. **Team** — 6-member team cards with avatar initials
5. **Contact** — Split layout with contact info + working form

## Getting Started

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Deploy to Vercel

### Option 1: Vercel CLI (Fastest)
```bash
npm install -g vercel
vercel
```
Follow the prompts — it auto-detects Next.js.

### Option 2: GitHub + Vercel Dashboard
1. Push this repo to GitHub
2. Go to https://vercel.com/new
3. Import your GitHub repo
4. Click **Deploy** — zero config needed

## Customization
- Edit company name/content in each component under `src/components/`
- Colors are defined as CSS variables in `src/app/globals.css`
- Swap team members, services, stats in the respective component files


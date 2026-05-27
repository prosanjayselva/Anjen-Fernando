# Game2Grow Base Setup

## Apps
- `apps/web`: React + TypeScript + Tailwind + Zustand (frontend-only)

## Run
1. Install dependencies at root: `npm install`
2. Start Web: `npm run dev` (or `npm run dev:web`)

## Deploy to GitHub Pages
1. Build + publish:
   - `npm run deploy`
2. In GitHub repo settings:
   - `Settings -> Pages`
   - Source: `Deploy from a branch`
   - Branch: `gh-pages` and folder `/ (root)`
3. Site URL:
   - `https://prosanjayselva.github.io/Anjen-Fernando/#/`

Notes:
- Program filtering and enquiry capture are frontend-only.
- Enquiries are saved in browser local storage (`game2grow_enquiries`) and then sent via WhatsApp flow.

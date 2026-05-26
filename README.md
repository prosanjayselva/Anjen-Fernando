# Game2Grow Base Setup

## Apps
- `apps/web`: React + TypeScript + Tailwind + Zustand (frontend-only)

## Run
1. Install dependencies at root: `npm install`
2. Start Web: `npm run dev` (or `npm run dev:web`)

## Deploy to Vercel (Private GitHub Repo Supported)
1. Keep repo private in GitHub (this is supported by Vercel).
2. Import repo in Vercel and connect GitHub account access.
3. Vercel will use `vercel.json` from project root:
   - Install: `npm install`
   - Build: `npm run build --workspace @game2grow/web`
   - Output: `apps/web/dist`
4. Redeploy.

Notes:
- Program filtering and enquiry capture are frontend-only.
- Enquiries are saved in browser local storage (`game2grow_enquiries`) and then sent via WhatsApp flow.

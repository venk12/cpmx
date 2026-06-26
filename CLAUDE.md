# CPMX — Dev & Deploy Guide

## Project Structure

```
cpmx/
├── backend/     FastAPI (Python) — deployed on Railway
│   ├── main.py              API routes
│   ├── requirements.txt     Python dependencies
│   └── .env.example         Local env template
└── frontend/    Next.js 14 — deployed on Vercel
    ├── app/                 Pages and layouts
    ├── lib/api.ts           Typed fetch wrapper
    └── .env.local           Local env (not committed)
```

---

## Local Development

### Prerequisites
- Python 3.12+
- Node.js 18+

### 1. Backend (runs on http://localhost:8000)

```bash
cd backend

# First time only
python -m venv .venv
source .venv/bin/activate       # Windows: .venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env            # creates your local env file

# Every time
source .venv/bin/activate       # Windows: .venv\Scripts\activate
uvicorn main:app --reload
```

### 2. Frontend (runs on http://localhost:3000)

```bash
cd frontend

# First time only
npm install

# Every time
npm run dev
```

`frontend/.env.local` already has `NEXT_PUBLIC_API_URL=http://localhost:8000` — no extra setup needed.

Open http://localhost:3000 to see the app. The page fetches live from the local backend.

---

## Making Changes

### Backend — adding a new endpoint

1. Open `backend/main.py`
2. Add a new route:
   ```python
   @app.get("/your-endpoint")
   async def your_endpoint():
       return {"key": "value"}
   ```
3. The server reloads automatically (`--reload` flag).
4. Test it at http://localhost:8000/your-endpoint or http://localhost:8000/docs (auto-generated Swagger UI).

### Frontend — calling the new endpoint

Use the `apiFetch` utility in `frontend/lib/api.ts`:

```ts
// In any server component (app/some-page/page.tsx)
const data = await apiFetch<{ key: string }>("/your-endpoint", {
  cache: "no-store",
});
```

For client components, use `useEffect` with `apiFetch` inside.

### Frontend — adding a new page

Create `frontend/app/your-page/page.tsx`. Next.js App Router maps the file path to the URL automatically.

---

## Deploying to Production

Both services deploy **automatically** when you push to `main`. There are no manual deploy steps.

```bash
git add .
git commit -m "describe your change"
git push
```

- **Vercel** picks up the push, rebuilds the frontend, deploys to https://next-view.nl
- **Railway** picks up the push, rebuilds the backend, deploys to https://api.next-view.nl

### Checking the deploy

- Vercel: https://vercel.com/dashboard → your project → Deployments tab
- Railway: https://railway.app/dashboard → your project → Deployments tab

Both show build logs in real time if something fails.

---

## Environment Variables

### Frontend

| Variable | Where set | Value |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | `frontend/.env.local` (local) | `http://localhost:8000` |
| `NEXT_PUBLIC_API_URL` | Vercel dashboard (production) | `https://api.next-view.nl` |

Variables prefixed `NEXT_PUBLIC_` are embedded at build time and visible in the browser.

### Backend

| Variable | Where set | Value |
|---|---|---|
| `FRONTEND_URL` | `backend/.env` (local) | `http://localhost:3000` |
| `FRONTEND_URL` | Railway dashboard (production) | `https://next-view.nl,https://www.next-view.nl` |
| `ENVIRONMENT` | Railway dashboard (production) | `production` |
| `PORT` | Railway dashboard (production) | set automatically by Railway |

`backend/.env` is gitignored. Copy `.env.example` to get started.

---

## First-time Production Setup (one-time)

If deploying to a fresh Railway/Vercel project, set these once in the dashboards:

**Railway** → your service → Variables:
```
FRONTEND_URL=https://next-view.nl,https://www.next-view.nl
ENVIRONMENT=production
```

**Vercel** → your project → Settings → Environment Variables (set for all environments):
```
NEXT_PUBLIC_API_URL=https://api.next-view.nl
```

After saving, both platforms redeploy automatically.

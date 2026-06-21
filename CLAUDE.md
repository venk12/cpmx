# CPMX Developer Guide

## Structure

```
cpmx/
├── backend/    FastAPI — deployed on Railway
└── frontend/   Next.js 14 — deployed on Vercel
```

## Local Development

**Backend** (runs on port 8000):
```bash
cd backend
python -m venv .venv && source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

**Frontend** (runs on port 3000):
```bash
cd frontend
npm install
npm run dev
```

Frontend `.env.local` already points `NEXT_PUBLIC_API_URL` at `http://localhost:8000` — no extra setup needed.

## Environment Variables

### Frontend (Next.js)

| Variable | Local (`.env.local`) | Production (Vercel dashboard) |
|---|---|---|
| `NEXT_PUBLIC_API_URL` | `http://localhost:8000` | `https://api.next-view.nl` |

### Backend (FastAPI)

| Variable | Local (`backend/.env`) | Production (Railway dashboard) |
|---|---|---|
| `FRONTEND_URL` | `http://localhost:3000` | `https://next-view.nl,https://www.next-view.nl` |
| `PORT` | `8000` | set automatically by Railway |

Copy `backend/.env.example` → `backend/.env` to override locally.

## Deploy

Both services deploy automatically when you push to `main`:
- **Vercel** watches the repo and rebuilds the frontend on every push
- **Railway** watches the repo and rebuilds the backend on every push

```bash
git add .
git commit -m "your message"
git push
```

That's it. No manual deploy steps.

## Adding New API Endpoints

1. Add route in `backend/main.py`
2. Call it from frontend via `apiFetch` in `frontend/lib/api.ts`:
   ```ts
   const data = await apiFetch<YourType>("/your-endpoint");
   ```

## Checklist: First-time Production Setup

- [ ] Railway → Variables → `FRONTEND_URL=https://next-view.nl,https://www.next-view.nl`
- [ ] Vercel → Settings → Env Vars → `NEXT_PUBLIC_API_URL=https://api.next-view.nl` (all environments)

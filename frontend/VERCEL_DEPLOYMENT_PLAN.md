# Vercel Deployment Plan for CPMX Frontend

## 🎯 Deployment Overview
Deploy the Next.js frontend application to Vercel and connect it to the custom domain **www.next-view.nl**

---

## 📋 Pre-Deployment Checklist

### 1. Prerequisites
- [ ] Vercel account created (https://vercel.com/signup)
- [ ] GitHub/GitLab/Bitbucket repository set up
- [ ] Domain ownership verified for www.next-view.nl
- [ ] Next.js app builds successfully locally (`npm run build`)

### 2. Local Testing
```bash
# Ensure production build works
cd frontend
npm run build
npm run start
```

---

## 📁 Required Deployment Files

### 1. **vercel.json** Configuration
Create `frontend/vercel.json` for deployment settings:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["ams1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ],
  "redirects": [],
  "rewrites": []
}
```

### 2. **Environment Variables** (.env.example)
Create `frontend/.env.example` for environment configuration:
```bash
# API Configuration
NEXT_PUBLIC_API_URL=https://api.next-view.nl
NEXT_PUBLIC_APP_URL=https://www.next-view.nl

# App Configuration
NEXT_PUBLIC_APP_NAME=CPMX
NEXT_PUBLIC_APP_VERSION=0.1.0

# Feature Flags (optional)
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_MAINTENANCE_MODE=false
```

### 3. **Update .gitignore**
Ensure `frontend/.gitignore` includes:
```gitignore
# Existing entries...

# Vercel
.vercel
*.tsbuildinfo

# Environment files
.env*.local
.env.local
.env.development.local
.env.test.local
.env.production.local
```

---

## 🚀 Deployment Steps

### Step 1: Prepare Repository
```bash
# Commit all changes
git add .
git commit -m "Add Vercel deployment configuration"
git push origin main
```

### Step 2: Connect to Vercel

#### Option A: Via Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from frontend directory
cd frontend
vercel

# Follow prompts:
# - Set up and deploy? Y
# - Which scope? [Your account]
# - Link to existing project? N
# - Project name? cpmx-frontend
# - Directory? ./
# - Override settings? N
```

#### Option B: Via Vercel Dashboard
1. Go to https://vercel.com/new
2. Import Git repository
3. Select your repository
4. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`

### Step 3: Configure Environment Variables
In Vercel Dashboard:
1. Go to **Settings** → **Environment Variables**
2. Add production variables:
   ```
   NEXT_PUBLIC_API_URL = https://api.next-view.nl
   NEXT_PUBLIC_APP_URL = https://www.next-view.nl
   ```
3. Set scope to **Production**, **Preview**, and **Development**

### Step 4: Configure Custom Domain

#### In Vercel Dashboard:
1. Go to **Settings** → **Domains**
2. Add domain: `www.next-view.nl`
3. Add root domain: `next-view.nl` (redirect to www)

#### DNS Configuration:
Add these records to your DNS provider:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 76.76.21.21 | 3600 |
| CNAME | www | cname.vercel-dns.com | 3600 |

**Alternative (if using Vercel DNS):**
| Type | Name | Value |
|------|------|-------|
| A | @ | 76.76.21.21 |
| AAAA | @ | 2606:4700:3034::6815:1515 |
| CNAME | www | cname.vercel-dns.com |

### Step 5: SSL Configuration
- Vercel automatically provisions SSL certificates via Let's Encrypt
- No action needed - wait 10-30 minutes after DNS propagation

---

## 🔧 Post-Deployment Configuration

### 1. Performance Optimizations
Update `frontend/next.config.mjs`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.next-view.nl'],
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
```

### 2. Analytics Setup (Optional)
Add Vercel Analytics to `frontend/app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

// In RootLayout component
<body>
  {children}
  <Analytics />
  <SpeedInsights />
</body>
```

Install packages:
```bash
npm install @vercel/analytics @vercel/speed-insights
```

### 3. Monitoring & Alerts
In Vercel Dashboard:
1. Enable **Web Vitals** monitoring
2. Set up **Deployment Protection**
3. Configure **Email notifications** for failed deployments

---

## 📊 Deployment Validation

### Health Checks
After deployment, verify:
- [ ] Site loads at https://www.next-view.nl
- [ ] SSL certificate is active (padlock in browser)
- [ ] Redirects work (next-view.nl → www.next-view.nl)
- [ ] All pages render correctly
- [ ] Console has no errors
- [ ] Performance score > 90 (use Lighthouse)

### Testing Commands
```bash
# Test deployment
curl -I https://www.next-view.nl

# Check SSL
openssl s_client -connect www.next-view.nl:443

# DNS verification
nslookup www.next-view.nl
```

---

## 🔄 Continuous Deployment

### GitHub Integration
Automatic deployments on:
- **Production**: Push to `main` branch
- **Preview**: Pull requests

### Deployment Workflow
```yaml
# Optional: GitHub Actions (.github/workflows/deploy.yml)
name: Vercel Production Deployment
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          working-directory: ./frontend
```

---

## 🚨 Rollback Strategy

### Quick Rollback
1. Go to Vercel Dashboard → **Deployments**
2. Find previous working deployment
3. Click **...** → **Promote to Production**

### CLI Rollback
```bash
# List deployments
vercel ls

# Rollback to specific deployment
vercel rollback [deployment-url]
```

---

## 📝 Maintenance Mode

### Enable Maintenance
Create `frontend/app/maintenance/page.tsx`:
```typescript
export default function Maintenance() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1>Under Maintenance - Back Soon!</h1>
    </div>
  );
}
```

Update `frontend/middleware.ts`:
```typescript
import { NextResponse } from 'next/server';

export function middleware(request) {
  const maintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true';
  
  if (maintenanceMode && !request.nextUrl.pathname.startsWith('/maintenance')) {
    return NextResponse.redirect(new URL('/maintenance', request.url));
  }
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
```

---

## 📞 Support & Resources

### Documentation
- [Vercel Docs](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Domain Configuration](https://vercel.com/docs/concepts/projects/domains)

### Troubleshooting
- **Build Failures**: Check build logs in Vercel Dashboard
- **Domain Issues**: Verify DNS propagation (can take up to 48h)
- **SSL Errors**: Usually resolve within 30 minutes
- **404 Errors**: Check `vercel.json` rewrites/redirects

### Contact Vercel Support
- Dashboard → Help → Support
- Twitter: @vercel
- Status: https://www.vercel-status.com/

---

## ✅ Deployment Complete!
Once all steps are completed, your Next.js app will be live at:
- 🌐 **Production**: https://www.next-view.nl
- 🔗 **Vercel URL**: https://cpmx-frontend.vercel.app

**Next Steps:**
1. Monitor performance in Vercel Dashboard
2. Set up error tracking (Sentry)
3. Configure CDN caching rules
4. Implement A/B testing (if needed)
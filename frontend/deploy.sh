#!/bin/bash

# CPMX Frontend Deployment Script
# This script helps deploy the frontend to Vercel

echo "🚀 CPMX Frontend Deployment Script"
echo "=================================="

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm i -g vercel
fi

# Check if we're in the frontend directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Not in frontend directory"
    echo "Please run this script from the frontend directory"
    exit 1
fi

# Build the project locally first to catch errors
echo "📦 Building project locally..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix errors before deploying."
    exit 1
fi

echo "✅ Build successful!"

# Deploy to Vercel
echo "🌍 Deploying to Vercel..."

# Check for production flag
if [ "$1" == "--prod" ]; then
    echo "Deploying to PRODUCTION..."
    vercel --prod
else
    echo "Deploying to PREVIEW..."
    echo "Use './deploy.sh --prod' for production deployment"
    vercel
fi

echo "✅ Deployment complete!"
echo ""
echo "📝 Next steps:"
echo "1. Check deployment at https://vercel.com/dashboard"
echo "2. Configure domain at Settings > Domains"
echo "3. Add environment variables at Settings > Environment Variables"
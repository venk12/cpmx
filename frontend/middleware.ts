import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if maintenance mode is enabled
  const maintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true';
  
  // Allow access to maintenance page itself and static assets
  const isMaintenancePage = request.nextUrl.pathname === '/maintenance';
  const isStaticAsset = request.nextUrl.pathname.startsWith('/_next') || 
                        request.nextUrl.pathname.startsWith('/api') ||
                        request.nextUrl.pathname.includes('.');
  
  // Redirect to maintenance page if maintenance mode is on
  if (maintenanceMode && !isMaintenancePage && !isStaticAsset) {
    return NextResponse.redirect(new URL('/maintenance', request.url));
  }
  
  // Redirect from maintenance page if maintenance mode is off
  if (!maintenanceMode && isMaintenancePage) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  
  // Add security headers
  const response = NextResponse.next();
  
  // Security headers (these will be overridden by vercel.json in production)
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  return response;
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
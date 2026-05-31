// middleware.ts

import { NextResponse } from "next/server";

export function middleware(request) {
  const adminCookie = request.cookies.get("admin")?.value;

  // Allow access to static files
  const pathname = request.nextUrl.pathname;

  if (
    pathname.startsWith("/coming-soon") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/images") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  if (adminCookie !== "true") {
    return NextResponse.redirect(
      new URL("/coming-soon", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
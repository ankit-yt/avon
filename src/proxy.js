import { NextResponse } from "next/server";

export function proxy(request) {
  const adminCookie = request.cookies.get("admin")?.value;
  console.log(adminCookie)
  if (
    request.nextUrl.pathname === "/coming-soon" ||
    request.nextUrl.pathname.startsWith("/_next")
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
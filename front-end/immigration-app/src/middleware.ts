import { NextRequest, NextResponse } from "next/server";
import { clerkMiddleware, ClerkMiddlewareAuth, createRouteMatcher  } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(['/']);

export default clerkMiddleware(async (auth: ClerkMiddlewareAuth, req: NextRequest) => {
  let hostname = req.headers
  .get("host")!
  .replace(".localhost:3000", `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`);
  const url = req.nextUrl;
  const searchParams = req.nextUrl.searchParams.toString();
  const path = `${url.pathname}${searchParams.length > 0 ? `?${searchParams}` : ""}`;
  const { userId } = await auth();

  // Handle dashboard subdomain
  if (hostname === `app.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`) {
    const newUrl = new URL(`/app${path === "/" ? "/home" : path}`, req.url);
    if (!userId && isProtectedRoute(req)) {
      return (await auth()).redirectToSignIn();
    }

    return NextResponse.rewrite(newUrl);
  }

  if (hostname === `dashboard.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`) {
    const newUrl = new URL(`/app${path === "/" ? "/home" : path}`, req.url);
    if (!userId && isProtectedRoute(req)) {
      return (await auth()).redirectToSignIn({returnBackUrl: newUrl.toString()});
    }
    return NextResponse.rewrite(newUrl);
  }

  if (hostname === `playground.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`) {
    return NextResponse.rewrite(
      new URL(`/playground${path === "/" ? "" : path}`, req.url),
    );
  }

  if (
    hostname === "localhost:3000" ||
    hostname === process.env.NEXT_PUBLIC_ROOT_DOMAIN
  ) {
    return NextResponse.rewrite(
      new URL(`/home${path === "/" ? "" : path}`, req.url),
    );
  }

  return NextResponse.rewrite(new URL(`/${hostname}${path}`, req.url));
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
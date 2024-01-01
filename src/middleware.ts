import createMiddleware from "next-intl/middleware";
import { pathnames, locales, localePrefix, defaultLocale } from "./config";

export default createMiddleware({
  defaultLocale,
  locales,
  pathnames,
  localePrefix,
  localeDetection: false,
});

export const config = {
  matcher: [
    "/",
    "/(en|ru|uz)/:path*",
    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
};

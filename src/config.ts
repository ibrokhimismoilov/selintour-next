import { Pathnames } from "next-intl/navigation";

export const locales = ["en", "ru", "uz"] as const;
export const defaultLocale = "en" as const;

export const pathnames = {
  "/": "/",
} satisfies Pathnames<typeof locales>;

export const localePrefix = "always";

export type AppPathnames = keyof typeof pathnames;

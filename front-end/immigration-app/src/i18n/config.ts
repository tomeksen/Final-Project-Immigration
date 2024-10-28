export type Locale = (typeof locales)[number];

export const locales = ['en', 'es', 'pt', 'jp'] as const;
export const defaultLocale: Locale = 'en';
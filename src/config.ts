import { Pathnames } from 'next-intl/navigation';
export const locales = ['pt', 'en'] as const;
export const pathnames = {
  '/': '/',

  '/rota-exemplo': {
    en: '/exemplo-en',
    pt: '/exemplo-pt'
  }
} satisfies Pathnames<typeof locales>;

export type AppPathnames = keyof typeof pathnames;

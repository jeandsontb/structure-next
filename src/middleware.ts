import createMiddleware from 'next-intl/middleware';

import { locales, pathnames } from 'config';

export default createMiddleware({
  defaultLocale: 'pt',
  localePrefix: 'as-needed',
  locales,
  pathnames
});

export const config = {
  // Match only internationalized pathnames
  // matcher: ['/', '/(pt|en)/:path*']

  matcher: [
    // Match all pathnames except for
    // - … if they start with `/api`, `/_next` or `/_vercel`
    // - … the ones containing a dot (e.g. `favicon.ico`)
    '/((?!api|_next|_vercel|.*\\..*).*)',
    // However, match all pathnames within `/users`, optionally with a locale prefix
    '/([\\w-]+)?/users/(.+)'
  ]
};

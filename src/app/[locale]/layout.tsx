import type { Metadata, Viewport } from 'next';
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

import StyledComponentsRegistry from 'lib/registry';
import { dictionary } from 'messages/languages';

import { Providers } from './provider';

export const metadata: Metadata = {
  title: 'CFO',
  description: 'Shopping'
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
};

const locales = ['pt', 'en'];

export default function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!locales.includes(locale)) notFound();

  let messages;

  try {
    messages = dictionary(locale) as AbstractIntlMessages | undefined;
  } catch (err) {
    notFound();
  }

  const timeZone = 'America';

  return (
    <html lang={locale}>
      <NextIntlClientProvider
        locale={locale}
        timeZone={timeZone}
        messages={messages}
      >
        <body>
          <StyledComponentsRegistry>
            <Providers>{children}</Providers>
          </StyledComponentsRegistry>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}

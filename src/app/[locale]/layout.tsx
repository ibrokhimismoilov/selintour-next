import { Roboto } from "next/font/google";
import { unstable_setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider, useMessages } from "next-intl";

import { Layout } from "_/components";
import StyledComponentsRegistry from "_/lib/AntdRegistry";
import { MainContextPriveder } from "../_/context";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

interface IProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default function RootLayout({ children, params: { locale } }: IProps) {
  unstable_setRequestLocale(locale);
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={roboto.className}>
        <StyledComponentsRegistry>
          <NextIntlClientProvider messages={messages}>
            <Layout>
              <MainContextPriveder locale={locale}>
                {children}
              </MainContextPriveder>
            </Layout>
          </NextIntlClientProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

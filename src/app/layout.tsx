import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SelinTourInc",
  description: "SelinTourInc application",
  icons: {
    icon: [
      {
        media: "(max-width: 767px)",
        url: "./favicon/favicon.ico",
        href: "./favicon/favicon.ico",
        sizes: "64x64 32x32 24x24 16x16",
        type: "image/x-icon",
      },
      {
        media: "(min-width: 767px)",
        url: "./favicon/logo192.png",
        href: "./favicon/logo192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        media: "(min-width: 1920px)",
        url: "./favicon/logo512.png",
        href: "./favicon/logo512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};

interface IProps {
  children: React.ReactNode;
}

import "@/assets/styles/main.scss";
import { Layout } from "@/components";

export default function RootLayout({ children }: IProps) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

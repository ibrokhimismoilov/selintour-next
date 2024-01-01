import type { Metadata } from "next";

interface IProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "SelinTourInc",
  description: "SelinTourInc application",
  icons: {
    icon: [
      {
        media: "(max-width: 767px)",
        url: "/favicon/favicon.ico",
        href: "/favicon/favicon.ico",
        sizes: "64x64 32x32 24x24 16x16 8x8",
        type: "image/x-icon",
      },
      {
        media: "(min-width: 767px)",
        url: "/favicon/logo192.png",
        href: "/favicon/logo192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        media: "(min-width: 1920px)",
        url: "/favicon/logo512.png",
        href: "/favicon/logo512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};

import "@/assets/styles/main.scss";

export default function RootLayout({ children }: IProps) {
  return children;
}

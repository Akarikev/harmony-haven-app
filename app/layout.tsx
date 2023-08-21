import "./globals.css";

import Head from "next/head";
import { Toaster } from "@/components/ui/toaster";
import ThemeProvider from "@/components/ui/theme-provider";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Harmony Haven Ghana",
  description: "Journey to Wellbeing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body className={`${inter.variable} font-sans`}>
        {children}

        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}

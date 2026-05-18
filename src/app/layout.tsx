import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const siteUrl = "https://ai-automation-landing-one.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "NeuralOps | AI Automation Agency for B2B Scale",
  description: "Reclaim 20+ hours a week with custom AI automation systems. We build autonomous workflows for business owners, operators, and founders.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "NeuralOps | AI Automation Agency for B2B Scale",
    description: "Reclaim 20+ hours a week with custom AI automation systems.",
    url: siteUrl,
    siteName: "NeuralOps",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "NeuralOps AI Automation Agency",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuralOps | AI Automation Agency for B2B Scale",
    description: "Reclaim 20+ hours a week with custom AI automation systems.",
    images: [`${siteUrl}/og-image.png`],
  },
};

import { SpotlightCursor } from "@/components/SpotlightCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#030014] text-white selection:bg-accent/30">
        <SpotlightCursor />
        {children}
        <Analytics />
      </body>
    </html>
  );
}


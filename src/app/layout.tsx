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

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL 
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` 
  : 'https://neuralops-ai.vercel.app';

export const metadata: Metadata = {
  title: "NeuralOps | AI Automation Agency for B2B Scale",
  description: "Reclaim 20+ hours a week with custom AI automation systems. We build autonomous workflows for business owners, operators, and founders.",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: '/',
  },
  keywords: ["AI Automation", "B2B Automation", "Autonomous Workflows", "Business Efficiency", "NeuralOps", "AI Agency"],
  authors: [{ name: "NeuralOps Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "NeuralOps",
    title: "NeuralOps | AI Automation Agency",
    description: "Reclaim 20+ hours a week with custom AI automation systems. Autonomous workflows for B2B scale.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NeuralOps - AI Automation Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuralOps | AI Automation Agency",
    description: "Reclaim 20+ hours a week with custom AI automation systems.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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


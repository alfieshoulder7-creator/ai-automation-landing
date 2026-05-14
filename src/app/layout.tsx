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
  metadataBase: new URL("https://ai-automation-landing-one.vercel.app"),
  title: "NeuralOps | AI Automation Agency for B2B Scale",
  description: "Reclaim 20+ hours a week with custom AI automation systems. We build autonomous workflows for business owners, operators, and founders.",
  openGraph: {
    images: [
      {
        url: "https://ai-automation-landing-one.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "NeuralOps AI Automation Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://ai-automation-landing-one.vercel.app/og-image.png"],
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


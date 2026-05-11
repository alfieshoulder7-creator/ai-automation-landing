import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NeuralOps | AI Automation Agency for B2B Scale",
  description: "Reclaim 20+ hours a week with custom AI automation systems. We build autonomous workflows for business owners, operators, and founders.",
};

import { ScrollProgress } from "@/components/ScrollProgress";
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
        <ScrollProgress />
        <SpotlightCursor />
        {children}
      </body>
    </html>
  );
}


# Implementation Plan: Metadata & Social Preview Optimization

This plan outlines the steps to resolve the "blank preview" issue and establish a robust, professional metadata strategy for NeuralOps.

## 1. Goal
- **Fix Social Previews**: Replace the blank URL preview with a high-end, branded image.
- **Robust SEO & Meta**: Implement a complete suite of metadata tags for SEO and social platform consistency.
- **Premium Branding**: Ensure the site looks elite when shared on LinkedIn, X (Twitter), and Facebook.

## 2. Technical Strategy

### A. Metadata Configuration
We will use the Next.js `Metadata` API in `src/app/layout.tsx` to define:
- **Basic SEO**: Refined title and description.
- **Open Graph (OG)**: Standard tags for Facebook, LinkedIn, etc.
- **Twitter Cards**: Optimized for X/Twitter with `summary_large_image`.
- **Robots & Icons**: Explicit instructions for search engines and high-res icons.

### B. Social Preview Asset (OG Image)
Instead of a simple screenshot, we will create a **premium social preview image** (`og-image.png`) that captures the essence of NeuralOps:
- **Visuals**: Dark glassmorphism, glowing accents (matching the site's `#030014` and accent colors), and AI-themed abstract elements.
- **Branding**: Clear "NeuralOps" logo/typography and the core value prop: *"Autonomous Workflows for B2B Scale"*.
- **Specs**: 1200 x 630 pixels (standard for social previews).

## 3. Proposed Metadata Object
```typescript
export const metadata: Metadata = {
  title: "NeuralOps | AI Automation Agency for B2B Scale",
  description: "Reclaim 20+ hours a week with custom AI automation systems. We build autonomous workflows for business owners, operators, and founders.",
  keywords: ["AI Automation", "B2B Automation", "Autonomous Workflows", "Business Efficiency", "NeuralOps"],
  authors: [{ name: "NeuralOps Team" }],
  creator: "NeuralOps",
  publisher: "NeuralOps",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://neuralops.ai", // Replace with actual domain
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
```

## 4. Implementation Steps

1.  **Image Generation**:
    - Use AI to create a professional 1200x630 branding image for NeuralOps.
    - Save the generated image as `public/og-image.png`.
2.  **Code Update**:
    - Modify `src/app/layout.tsx` to include the expanded `metadata` object.
    - Ensure all paths (icons, images) are correctly referenced.
3.  **Verification**:
    - Confirm the image exists in the public directory.
    - (Optional) Use local tools or metadata checkers to verify tags.

## 5. Timeline
This can be executed immediately after approval.

---
*Created by Antigravity*

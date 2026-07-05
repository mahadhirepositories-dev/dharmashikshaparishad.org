import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Alegreya_Sans,
  Noto_Serif_Devanagari,
} from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const alegreyaSans = Alegreya_Sans({
  variable: "--font-alegreya",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

const notoDevanagari = Noto_Serif_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari"],
  weight: ["500", "600"],
});

const SITE_URL = "https://dharmashikshaparishad.org";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Dharma Shiksha Parishad — Preserving, Educating & Upholding Sanatana Dharma",
    template: "%s | Dharma Shiksha Parishad",
  },
  description:
    "Dharma Shiksha Parishad is a professional non-profit volunteer organization dedicated to preserving traditional dharmic knowledge, educating Hindus about their heritage, and nurturing future torchbearers of Sanatana Dharma. No fees, no donations — only service.",
  keywords: [
    "Dharma Shiksha Parishad",
    "Sanatana Dharma",
    "Hindu dharma education",
    "dharmic education",
    "Sanatana Dharma volunteer organization",
    "Hindu non-profit organization India",
    "dharma volunteers",
    "Hindu heritage education",
    "dharmic knowledge preservation",
    "Sanatana Dharma awareness",
  ],
  authors: [{ name: "Dharma Shiksha Parishad" }],
  category: "education",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Dharma Shiksha Parishad",
    title:
      "Dharma Shiksha Parishad — Preserving, Educating & Upholding Sanatana Dharma",
    description:
      "A professional non-profit volunteer organization building a disciplined Pan-India network of committed volunteers dedicated to safeguarding Sanatana Dharma for future generations.",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 445,
        alt: "Dharma Shiksha Parishad — golden Sengol emblem encircled by dharma chakras",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dharma Shiksha Parishad",
    description:
      "Preserving, Educating & Upholding Sanatana Dharma. A volunteer-driven non-profit — no fees, no fundraising, only seva.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Dharma Shiksha Parishad",
  alternateName: "DSP",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  slogan: "Preserving, Educating & Upholding Sanatana Dharma",
  description:
    "Dharma Shiksha Parishad is a professional non-profit organization dedicated to the preservation, education, and upholding of Sanatana Dharma through volunteer-driven educational programs, publications, and awareness initiatives across Bharat.",
  foundingLocation: {
    "@type": "Place",
    address: { "@type": "PostalAddress", addressCountry: "IN" },
  },
  areaServed: "IN",
  nonprofitStatus: "Nonprofit",
  knowsAbout: [
    "Sanatana Dharma",
    "Hindu heritage education",
    "Dharmic knowledge preservation",
    "Volunteer training",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Dharma Shiksha Parishad",
  url: SITE_URL,
  inLanguage: "en-IN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorant.variable} ${alegreyaSans.variable} ${notoDevanagari.variable} antialiased`}
    >
      <body className="min-h-screen">
        <script
          // Applies the saved/system theme before paint to avoid a flash
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;if(d)document.documentElement.classList.add("dark");}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}

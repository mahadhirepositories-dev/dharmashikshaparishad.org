import type { Metadata } from "next";
import { EB_Garamond, Crimson_Text } from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
});

const crimsonText = Crimson_Text({
  variable: "--font-crimson-text",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dharma Shiksha Parishad",
  description: "Preserving, Educating, and Upholding Sanatana Dharma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${crimsonText.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-text bg-brand-bg text-brand-text">{children}</body>
    </html>
  );
}

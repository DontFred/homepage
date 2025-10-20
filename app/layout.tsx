import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";
import "./globals.css";

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frederik Grimm",
  description: "IT-Freelancer, Web Developer and Designer.",
  facebook: {
    appId: "1355074016289296",
  },
  openGraph: {
    type: "website",
    title: "Frederik Grimm",
    description: "IT-Freelancer, Web Developer and Designer.",
    siteName: "Frederik Grimm",
    url: "https://fwgrimm.com/",
    images: [
      {
        url: "https://fwgrimm.com/opengraph.png",
        width: 1200,
        height: 630,
        alt: "Frederik Grimm",
      },
    ],
  },
  other: {
    "facebook-domain-verification": "bjhy7t158mkfc9nc8xc5l11qkjj54i",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inconsolata.variable} dark`}>{children}</body>
    </html>
  );
}

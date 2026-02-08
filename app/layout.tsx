import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import Header from "./components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "gigdevos — Building modern web apps at startup speed",
  description:
    "Gig-focused developer. Frontend & full-stack development for fast-moving teams. Available for freelance and side gigs.",
  keywords: ["freelance developer", "full-stack", "Next.js", "React", "gig"],
  authors: [{ name: "gigdevos" }],
  openGraph: {
    title: "gigdevos — Building modern web apps at startup speed",
    description:
      "Frontend & full-stack development for fast-moving teams. Available for gigs.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "gigdevos — Building modern web apps at startup speed",
    description: "Frontend & full-stack development for fast-moving teams.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

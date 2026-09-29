import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profile } from "@/content/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Fullstack engineer (React, Next.js, TypeScript) with 4+ years shipping web products for real clients — now focused on AI-powered products.";

export const metadata: Metadata = {
  title: `${profile.fullName} — ${profile.role}`,
  description,
  authors: [{ name: profile.fullName }],
  openGraph: {
    title: `${profile.fullName} — ${profile.role}`,
    description,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Fraunces, Space_Mono, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "900"],
  style: ["normal", "italic"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const notoDevanagari = Noto_Sans_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari"],
  weight: ["700", "900"],
});

export const metadata: Metadata = {
  title: "HH Goa 2026 — ID Card Generator",
  description:
    "Generate your Hacker House Goa 2026 ID card. Upload a photo, add your name and stack, download, and share with #FrameInGoa.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${spaceMono.variable} ${notoDevanagari.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#07281d]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

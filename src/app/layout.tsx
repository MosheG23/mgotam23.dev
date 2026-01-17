import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Moshe Gotam | Full-Stack Developer",
  description:
    "Full-Stack Team Leader & Developer building scalable systems. Expert in React, Next.js, Python, and cloud architecture.",
  keywords: [
    "Full-Stack Developer",
    "Team Leader",
    "React",
    "Next.js",
    "Python",
    "Software Engineering",
    "Portfolio",
  ],
  authors: [{ name: "Moshe Gotam" }],
  openGraph: {
    title: "Moshe Gotam | Full-Stack Developer",
    description:
      "Leading projects using Python & React. Building scalable, high-performance web applications.",
    type: "website",
    locale: "en_US",
    url: "https://mgotam23.dev",
    siteName: "Moshe Gotam Portfolio",
    images: [
      {
        url: "/og-image.png", // Assuming you'll have an OG image
        width: 1200,
        height: 630,
        alt: "Moshe Gotam - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moshe Gotam | Full-Stack Developer",
    description:
      "Full-Stack Team Leader building scalable systems with React & Python.",
    images: ["/og-image.png"],
    creator: "@mgotam23", // Replace if different
  },
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
        {children}
      </body>
    </html>
  );
}

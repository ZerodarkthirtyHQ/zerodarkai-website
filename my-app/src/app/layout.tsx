import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpenClaw | AI Agent Platform for Hobbyists & Enthusiasts",
  description: "Deploy powerful AI agents for hobbyists and enthusiasts. OpenClaw transforms your personal projects with autonomous AI agents. No code required.",
  keywords: ["OpenClaw", "AI agents", "automation", "hobbyists", "makers", "CLI", "no-code"],
  authors: [{ name: "Zero Dark AI" }],
  openGraph: {
    title: "OpenClaw - AI Agent Platform",
    description: "Deploy powerful AI agents for hobbyists and enthusiasts",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

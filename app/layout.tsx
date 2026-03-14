import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kian Ranjbar | Full-Stack Engineer",
  description:
    "Full-Stack Engineer based in Los Angeles. Specializing in scalable web applications, AI integrations, and developer tooling.",
  keywords: [
    "Kian Ranjbar",
    "Full-Stack Engineer",
    "Software Engineer",
    "React",
    "Next.js",
    "Los Angeles",
  ],
  authors: [{ name: "Kian Ranjbar" }],
  openGraph: {
    title: "Kian Ranjbar | Full-Stack Engineer",
    description: "Full-Stack Engineer based in Los Angeles.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="scanlines">{children}</body>
    </html>
  );
}

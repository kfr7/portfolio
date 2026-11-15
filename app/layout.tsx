import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kian Ranjbar | Software Engineer",
  description:
    "Software Engineer based in Los Angeles building distributed services, data infrastructure, and AI-powered products across the stack.",
  keywords: [
    "Kian Ranjbar",
    "Software Engineer",
    "Full-Stack Engineer",
    "React",
    "Next.js",
    "Los Angeles",
  ],
  authors: [{ name: "Kian Ranjbar" }],
  openGraph: {
    title: "Kian Ranjbar | Software Engineer",
    description: "Software Engineer based in Los Angeles.",
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

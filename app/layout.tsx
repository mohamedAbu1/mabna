import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MABNA | Build with better materials",
  description: "Steel, cement and building tools for stronger projects.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { WelcomeExperience } from "@/components/welcome-experience";
import "./globals.css";

export const metadata: Metadata = {
  title: "MABNA | Build with better materials",
  description: "Steel, cement and building tools for stronger projects.",
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
      <body className="antialiased"><WelcomeExperience />{children}</body>
    </html>
  );
}

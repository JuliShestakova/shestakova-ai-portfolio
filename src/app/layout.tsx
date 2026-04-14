import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Juli Shestakova | AI/Frontend Portfolio",
  description: "Advanced Neural HUD & AI Orchestration Showcase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

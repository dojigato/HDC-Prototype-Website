import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NexCore — Engineering the Future",
  description: "NexCore is a next-generation technology company building infrastructure, AI systems, and digital products that scale.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

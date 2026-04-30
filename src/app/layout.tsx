import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HDC Dental Clinic — Klinik Gigi Cirebon",
  description: "Klinik gigi terpercaya di Cirebon. Layanan Scalling, Behel, Implant, Veneer, Gigi Tiruan dan lainnya. Dipercaya lebih dari 10.000 warga Cirebon.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}

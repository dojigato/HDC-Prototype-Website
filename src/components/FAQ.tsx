"use client";
import { useState } from "react";

const faqs = [
  { q: "Berapa biaya pasien perawatan gigi di HDC Dental Clinic?", a: "Biaya perawatan bervariasi tergantung jenis layanan. Konsultasi awal gratis. Untuk estimasi biaya, hubungi kami di 0812-2234-6161 atau datang langsung ke klinik." },
  { q: "Perawatan gigi apa saja yang ditangani di HDC Dental Clinic?", a: "HDC melayani berbagai perawatan termasuk Scalling, Behel Gigi, Gigi Tiruan, Cabut Gigi, Bleaching, Implant, Veneer, dan pemeriksaan umum. Semua ditangani dokter berpengalaman." },
  { q: "Dimana saja HDC Dental Clinic?", a: "HDC Dental Clinic berlokasi di Jl. Siliwangi No.119, Kebonbaru, Kec. Kejaksan, Kota Cirebon, Jawa Barat 45121. Mudah diakses dari berbagai area di Cirebon." },
  { q: "Apakah HDC Dental Clinic menerima asuransi dari BPJS?", a: "Saat ini HDC menerima berbagai asuransi kesehatan termasuk BNI Life, BRIlife, FWD, Avrist, dan ACA Asuransi. Untuk informasi BPJS, silakan hubungi kami terlebih dahulu." },
  { q: "Apakah booking via online menggantikan reservasi langsung?", a: "Booking online berfungsi untuk mengamankan jadwal Anda. Tetap diperlukan konfirmasi dan kedatangan langsung ke klinik sesuai jadwal yang telah dibuat." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="artikel" style={{ background: "#ffffff", padding: "5rem 0" }}>
      <div className="pg-container">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ fontSize: "0.8rem", color: "#1D4ED8", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>FAQ</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "#111827" }}>
            Pertanyaan yang sering ditanyakan
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ border: "1.5px solid #e5e7eb", borderRadius: "12px", overflow: "hidden", transition: "border-color 0.2s", borderColor: open === i ? "#BFDBFE" : "#e5e7eb" }}>
              <button onClick={() => setOpen(open === i ? null : i)}
                style={{ width: "100%", background: open === i ? "#EFF6FF" : "#fff", border: "none", padding: "1.1rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", fontFamily: "inherit", transition: "background 0.2s" }}>
                <span style={{ fontWeight: 600, fontSize: "0.95rem", color: "#111827", textAlign: "left" }}>{faq.q}</span>
                <span style={{ fontSize: "1.2rem", color: "#1D4ED8", marginLeft: "1rem", flexShrink: 0, transition: "transform 0.2s", transform: open === i ? "rotate(45deg)" : "rotate(0)" }}>+</span>
              </button>
              {open === i && (
                <div style={{ padding: "0 1.5rem 1.25rem", background: "#EFF6FF" }}>
                  <p style={{ fontSize: "0.9rem", color: "#374151", lineHeight: 1.7 }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

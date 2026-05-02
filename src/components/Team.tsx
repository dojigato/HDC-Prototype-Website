"use client";
import { useState } from "react";

const doctors = [
  { name: "drg. Dian Ika Kurnia", cred: "MARS", days: "Senin – Jumat", hours: "09.00 – 17.00", initials: "DI", color: "#1D4ED8" },
  { name: "drg. Hilda Daftarani", cred: "MARS, FDG", days: "Senin – Sabtu", hours: "13.00 – 20.00", initials: "HD", color: "#7C3AED" },
  { name: "drg. Annisa Eva Nur", cred: "", days: "Selasa – Sabtu", hours: "09.00 – 15.00", initials: "AE", color: "#059669" },
  { name: "drg. Nabila Tasika", cred: "", days: "Senin – Jumat", hours: "14.00 – 20.00", initials: "NT", color: "#DC2626" },
  { name: "drg. Ita Yuni Irianti", cred: "", days: "Rabu – Minggu", hours: "09.00 – 16.00", initials: "IY", color: "#D97706" },
  { name: "drg. Fitriani Rahayu", cred: "", days: "Senin – Sabtu", hours: "16.00 – 21.00", initials: "FR", color: "#0891B2" },
];

export default function Team() {
  return (
    <section id="dokter" style={{ background: "#ffffff", padding: "5rem 0" }}>
      <div className="pg-container">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ fontSize: "0.8rem", color: "#1D4ED8", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>TIM DOKTER</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "#111827", marginBottom: "0.75rem" }}>
            Pilih Dokter & Jadwal Sesukamu
          </h2>
          <p style={{ color: "#6B7280", maxWidth: "460px", margin: "0 auto", lineHeight: 1.6 }}>
            Perawatan gigi terbaik yang bisa dijangkau semua kalangan. Sesuaikan jadwalnya, dan datang tepat waktu.
          </p>
        </div>

        <div className="doctors-grid">
          {doctors.map((doc) => (
            <DoctorCard key={doc.name} doc={doc} />
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <button style={{ background: "none", border: "2px solid #1D4ED8", borderRadius: "10px", padding: "0.75rem 2rem", color: "#1D4ED8", fontWeight: 700, fontSize: "0.95rem", cursor: "pointer", fontFamily: "inherit", transition: "all 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#1D4ED8"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "#1D4ED8"; }}>
            Lihat Dokter Lainnya
          </button>
        </div>
      </div>
      <style>{`.doctors-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem}@media(max-width:900px){.doctors-grid{grid-template-columns:repeat(2,1fr)!important}}@media(max-width:500px){.doctors-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

function DoctorCard({ doc }: { doc: typeof doctors[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background: "#fff", borderRadius: "14px", padding: "1.5rem", border: `1.5px solid ${hovered ? doc.color + "40" : "#e5e7eb"}`, transition: "border-color 0.2s, box-shadow 0.2s", boxShadow: hovered ? "0 8px 24px rgba(0,0,0,0.08)" : "none" }}>
      <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: doc.color + "18", border: `2px solid ${doc.color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "1.1rem", color: doc.color, marginBottom: "1rem" }}>
        {doc.initials}
      </div>
      <h3 style={{ fontWeight: 700, fontSize: "0.95rem", color: "#111827", marginBottom: "0.25rem" }}>{doc.name}</h3>
      {doc.cred && <p style={{ fontSize: "0.8rem", color: doc.color, fontWeight: 600, marginBottom: "0.75rem" }}>{doc.cred}</p>}
      <div style={{ fontSize: "0.8rem", color: "#6B7280", marginTop: doc.cred ? "0" : "0.75rem", lineHeight: 1.7 }}>
        <div>📅 {doc.days}</div>
        <div>🕐 {doc.hours}</div>
      </div>
      <button style={{ marginTop: "1rem", width: "100%", background: doc.color, border: "none", borderRadius: "8px", padding: "0.55rem", color: "#fff", fontWeight: 600, fontSize: "0.83rem", cursor: "pointer", fontFamily: "inherit", transition: "opacity 0.2s" }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
        Buat Janji
      </button>
    </div>
  );
}

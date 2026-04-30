"use client";

const services = [
  { name: "Scalling", desc: "Membersihkan karang gigi dan plak untuk menjaga kesehatan gusi.", icon: "🦷", bg: "#EFF6FF" },
  { name: "Behel Gigi", desc: "Merapikan susunan gigi dengan kawat gigi yang estetik dan nyaman.", icon: "✨", bg: "#F0FDF4" },
  { name: "Gigi Tiruan", desc: "Penggantian gigi yang hilang dengan protesa yang natural dan fungsional.", icon: "😁", bg: "#FFF7ED" },
  { name: "Cabut Gigi", desc: "Pencabutan gigi dengan teknik minimal invasif untuk mengurangi rasa sakit.", icon: "⚕️", bg: "#FFF1F2" },
  { name: "Bleaching", desc: "Pemutihan gigi profesional untuk senyum yang lebih cerah dan percaya diri.", icon: "💎", bg: "#F5F3FF" },
  { name: "Implant", desc: "Penggantian gigi permanen dengan implan titanium yang kuat dan alami.", icon: "🔬", bg: "#ECFEFF" },
  { name: "Veneer", desc: "Lapisan porselen tipis untuk memperbaiki bentuk dan warna gigi secara estetik.", icon: "⭐", bg: "#FEFCE8" },
  { name: "Pemeriksaan Umum", desc: "Pemeriksaan menyeluruh kesehatan gigi dan mulut oleh dokter berpengalaman.", icon: "📋", bg: "#F0FDF4" },
];

export default function Services() {
  return (
    <section id="layanan" style={{ background: "#f8fafc", padding: "5rem 2rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ fontSize: "0.8rem", color: "#1D4ED8", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>LAYANAN KAMI</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "#111827", marginBottom: "0.75rem" }}>
            Layanan Gigi Lengkap di Satu Tempat
          </h2>
          <p style={{ color: "#6B7280", maxWidth: "500px", margin: "0 auto", lineHeight: 1.6 }}>
            Scalling, Bleaching, Behel, Implant, sampai Veneer. Semua ada di HDC Cirebon. Ditangani dokter spesialis, teknologi terkini, pasti terjangkau.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <div key={s.name} className="service-card" style={{ background: "#fff", borderRadius: "14px", padding: "1.5rem", border: "1.5px solid #e5e7eb", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 28px rgba(0,0,0,0.08)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}>
              <div style={{ width: "52px", height: "52px", borderRadius: "12px", background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", marginBottom: "1rem" }}>{s.icon}</div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem", color: "#111827", marginBottom: "0.5rem" }}>{s.name}</h3>
              <p style={{ fontSize: "0.83rem", color: "#6B7280", lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <button style={{ background: "none", border: "2px solid #1D4ED8", borderRadius: "10px", padding: "0.75rem 2rem", color: "#1D4ED8", fontWeight: 700, fontSize: "0.95rem", cursor: "pointer", fontFamily: "inherit", transition: "all 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#1D4ED8"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "#1D4ED8"; }}>
            Lihat Selengkapnya
          </button>
        </div>
      </div>
      <style>{`.services-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.25rem}@media(max-width:900px){.services-grid{grid-template-columns:repeat(2,1fr)!important}}@media(max-width:480px){.services-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

"use client";

export default function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" style={{
      minHeight: "100vh", paddingTop: "72px",
      background: "linear-gradient(135deg, #1D4ED8 0%, #1E40AF 40%, #1e3a8a 100%)",
      display: "flex", alignItems: "center", overflow: "hidden", position: "relative",
    }}>
      {/* Decorative circles */}
      <div style={{ position: "absolute", width: "400px", height: "400px", borderRadius: "50%", background: "rgba(255,255,255,0.05)", top: "-100px", right: "20%", pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: "250px", height: "250px", borderRadius: "50%", background: "rgba(255,255,255,0.06)", bottom: "10%", right: "10%", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "4rem 2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center", width: "100%" }}>
        {/* Left: text */}
        <div>
          <div style={{ display: "inline-block", background: "rgba(255,255,255,0.15)", borderRadius: "100px", padding: "0.4rem 1rem", marginBottom: "1.5rem", fontSize: "0.8rem", color: "#fff", fontWeight: 600, letterSpacing: "0.05em" }}>
            ✨ Klinik Gigi Terpercaya di Cirebon
          </div>
          <h1 style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)", fontWeight: 800, color: "#ffffff", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "1.25rem" }}>
            Klinik Gigi Cirebon yang Bikin Senyummu Makin Percaya Diri
          </h1>
          <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.82)", lineHeight: 1.7, marginBottom: "2rem", maxWidth: "480px" }}>
            Perawatan gigi terbaik yang bisa dijangkau semua kalangan. Dokter berpengalaman, alat modern, harga terjangkau.
          </p>
          <button onClick={() => scrollTo("booking")}
            style={{ background: "#ffffff", border: "none", borderRadius: "10px", padding: "0.9rem 2rem", color: "#1D4ED8", fontWeight: 700, fontSize: "1rem", cursor: "pointer", fontFamily: "inherit", boxShadow: "0 4px 20px rgba(0,0,0,0.15)", transition: "transform 0.2s, box-shadow 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.2)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)"; }}>
            Reservasi Sekarang →
          </button>

          {/* Stats */}
          <div style={{ display: "flex", gap: "2rem", marginTop: "3rem", flexWrap: "wrap" }}>
            {[
              { value: "10.000+", label: "Pasien Puas" },
              { value: "6+", label: "Dokter Spesialis" },
              { value: "10+", label: "Layanan Tersedia" },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#ffffff" }}>{s.value}</div>
                <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.7)", marginTop: "2px" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: image placeholder */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end" }}>
          <div style={{
            width: "100%", maxWidth: "440px", height: "480px", borderRadius: "24px",
            background: "linear-gradient(160deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 100%)",
            border: "1.5px solid rgba(255,255,255,0.2)",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            gap: "1rem", backdropFilter: "blur(4px)",
          }}>
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="40" fill="rgba(255,255,255,0.12)" />
              <path d="M40 18C34 18 29 21.5 26 27C23 21.5 18 18 14 18V30C14 38.5 19 43 24 45.5V62H29V44C29 41 32 38.5 35 38.5H45C48 38.5 51 41 51 44V62H56V45.5C61 43 66 38.5 66 30V18C62 18 57 21.5 54 27C51 21.5 46 18 40 18Z" fill="white" opacity="0.9" />
            </svg>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.85rem", textAlign: "center", padding: "0 2rem" }}>
              Foto dokter / pasien akan ditampilkan di sini
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section#hero > div { grid-template-columns: 1fr !important; }
          section#hero > div > div:last-child { display: none !important; }
        }
      `}</style>
    </section>
  );
}

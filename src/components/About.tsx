"use client";
export default function About() {
  return (
    <section id="tentang" style={{ background: "#0F172A", padding: "5rem 2rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
        <div>
          <p style={{ fontSize: "0.8rem", color: "#60A5FA", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>TENTANG HDC</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, color: "#ffffff", lineHeight: 1.2, marginBottom: "1.25rem" }}>
            Klinik Gigi Cirebon yang Bikin Senyummu Makin Percaya Diri
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: "1rem", fontSize: "1rem" }}>
            HDC Dental Clinic hadir untuk memberikan perawatan gigi terbaik yang bisa dijangkau semua kalangan di Cirebon dan sekitarnya. Kami berkomitmen memberikan layanan berkualitas tinggi dengan dokter berpengalaman dan teknologi modern.
          </p>
          <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "2rem" }}>
            Dengan lebih dari 10.000 pasien yang telah mempercayakan kesehatan giginya kepada kami, HDC Dental Clinic terus berkembang dan berinovasi untuk memberikan pelayanan terbaik.
          </p>
          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
            {[{ v: "10.000+", l: "Pasien Puas" }, { v: "6+", l: "Dokter Spesialis" }, { v: "2016", l: "Berdiri Sejak" }].map((s) => (
              <div key={s.l}>
                <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#60A5FA" }}>{s.v}</div>
                <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", marginTop: "2px" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "100%", maxWidth: "420px", height: "380px", borderRadius: "20px", background: "linear-gradient(135deg, rgba(96,165,250,0.15), rgba(29,78,216,0.1))", border: "1.5px solid rgba(96,165,250,0.2)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
            <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
              <circle cx="36" cy="36" r="36" fill="rgba(96,165,250,0.15)" />
              <path d="M36 12C30 12 25 15.5 22 21C19 15.5 14 12 10 12V24C10 32.5 15 37 20 39.5V56H25V38C25 35 28 32.5 31 32.5H41C44 32.5 47 35 47 38V56H52V39.5C57 37 62 32.5 62 24V12C58 12 53 15.5 50 21C47 15.5 42 12 36 12Z" fill="rgba(96,165,250,0.6)" />
            </svg>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", textAlign: "center", padding: "0 2rem" }}>Foto klinik / tim dokter</p>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){section#tentang>div{grid-template-columns:1fr!important}section#tentang>div>div:last-child{display:none!important}}`}</style>
    </section>
  );
}

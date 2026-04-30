"use client";
export default function PromoBanners() {
  return (
    <section style={{ background: "#f8fafc", padding: "3rem 2rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
        {/* Banner 1 */}
        <div style={{
          background: "linear-gradient(135deg, #1D4ED8, #2563EB)",
          borderRadius: "16px", padding: "2rem", display: "flex", alignItems: "center",
          justifyContent: "space-between", overflow: "hidden", position: "relative", minHeight: "140px",
        }}>
          <div style={{ position: "absolute", width: "180px", height: "180px", borderRadius: "50%", background: "rgba(255,255,255,0.07)", top: "-60px", right: "-40px" }} />
          <div>
            <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.7)", fontWeight: 600, marginBottom: "0.5rem", letterSpacing: "0.08em" }}>PROGRAM KELUARGA</div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#fff", lineHeight: 1.3, marginBottom: "1rem" }}>
              Senyum Sehat,<br />Dimulai dari Keluarga
            </h3>
            <button style={{ background: "#fff", border: "none", borderRadius: "8px", padding: "0.5rem 1.2rem", color: "#1D4ED8", fontWeight: 700, fontSize: "0.85rem", cursor: "pointer", fontFamily: "inherit" }}>
              Pelajari Lebih →
            </button>
          </div>
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" style={{ flexShrink: 0, opacity: 0.85 }}>
            <circle cx="32" cy="22" r="14" fill="rgba(255,255,255,0.2)" />
            <path d="M14 54C14 44.6 22.3 37 32 37C41.7 37 50 44.6 50 54" stroke="rgba(255,255,255,0.4)" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>

        {/* Banner 2 */}
        <div style={{
          background: "linear-gradient(135deg, #0F172A, #1E293B)",
          borderRadius: "16px", padding: "2rem", display: "flex", alignItems: "center",
          justifyContent: "space-between", overflow: "hidden", position: "relative", minHeight: "140px",
        }}>
          <div style={{ position: "absolute", width: "180px", height: "180px", borderRadius: "50%", background: "rgba(29,78,216,0.15)", bottom: "-60px", left: "-40px" }} />
          <div>
            <div style={{ fontSize: "0.75rem", color: "#60A5FA", fontWeight: 600, marginBottom: "0.5rem", letterSpacing: "0.08em" }}>PROMO SPESIAL</div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#fff", lineHeight: 1.3, marginBottom: "0.5rem" }}>
              Senyum Cerah<br />Lebih Terjangkau
            </h3>
            <div style={{ fontSize: "2rem", fontWeight: 800, color: "#60A5FA", marginBottom: "0.75rem" }}>Rp 255<span style={{ fontSize: "1rem" }}>.000</span></div>
            <button style={{ background: "#1D4ED8", border: "none", borderRadius: "8px", padding: "0.5rem 1.2rem", color: "#fff", fontWeight: 700, fontSize: "0.85rem", cursor: "pointer", fontFamily: "inherit" }}>
              Reservasi Sekarang →
            </button>
          </div>
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" style={{ flexShrink: 0, opacity: 0.7 }}>
            <path d="M32 8C26 8 21 11 18 16C15 11 10 8 7 8V20C7 29 13 34 19 36.5V56H25V35C25 32 28 30 31 30H33C36 30 39 32 39 35V56H45V36.5C51 34 57 29 57 20V8C54 8 49 11 46 16C43 11 38 8 32 8Z" fill="rgba(96,165,250,0.3)" />
          </svg>
        </div>
      </div>

      <style>{`@media(max-width:640px){section > div[style*="grid-template-columns: 1fr 1fr"]{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

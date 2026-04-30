"use client";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "#0F172A", color: "#94A3B8", padding: "4rem 2rem 2rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "3rem", marginBottom: "3rem" }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="8" fill="#1D4ED8" />
                <path d="M16 6C13.5 6 11.5 7.2 10 9C8.5 7.2 6.5 6 5 6V12C5 15.5 7 17.5 9 18.5V26H11V18C11 16.5 12.5 15 14 15H18C19.5 15 21 16.5 21 18V26H23V18.5C25 17.5 27 15.5 27 12V6C25.5 6 23.5 7.2 22 9C20.5 7.2 18.5 6 16 6Z" fill="white" />
              </svg>
              <div>
                <span style={{ fontWeight: 800, fontSize: "1.1rem", color: "#fff" }}>HDC</span>
                <span style={{ fontWeight: 500, fontSize: "0.8rem", color: "#60A5FA", marginLeft: "4px" }}>Dental Clinic</span>
              </div>
            </div>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.7, maxWidth: "280px", marginBottom: "1.5rem" }}>
              Klinik gigi terpercaya di Cirebon. Perawatan gigi terbaik yang bisa dijangkau semua kalangan.
            </p>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {["📘", "📸", "🐦", "▶️"].map((icon, i) => (
                <a key={i} href="#" style={{ width: "36px", height: "36px", borderRadius: "8px", background: "rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.9rem", textDecoration: "none", transition: "background 0.2s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.12)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.06)")}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 700, fontSize: "0.9rem", marginBottom: "1.25rem" }}>Menu</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {["Tentang Kami", "Layanan", "Dokter", "Artikel"].map((l) => (
                <a key={l} href="#" style={{ color: "#94A3B8", textDecoration: "none", fontSize: "0.88rem", transition: "color 0.2s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#94A3B8")}>
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 700, fontSize: "0.9rem", marginBottom: "1.25rem" }}>Layanan</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {["Scalling", "Behel Gigi", "Gigi Tiruan", "Bleaching", "Implant", "Veneer"].map((l) => (
                <a key={l} href="#" style={{ color: "#94A3B8", textDecoration: "none", fontSize: "0.88rem", transition: "color 0.2s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#94A3B8")}>
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 700, fontSize: "0.9rem", marginBottom: "1.25rem" }}>Lainnya</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {["Kebijakan Privasi", "Syarat & Ketentuan", "FAQ", "Hubungi Kami"].map((l) => (
                <a key={l} href="#" style={{ color: "#94A3B8", textDecoration: "none", fontSize: "0.88rem", transition: "color 0.2s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#94A3B8")}>
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "1.5rem", textAlign: "center", fontSize: "0.83rem" }}>
          © {year} HDC Dental Clinic. All rights reserved.
        </div>
      </div>
      <style>{`.footer-grid{grid-template-columns:2fr 1fr 1fr 1fr!important}@media(max-width:768px){.footer-grid{grid-template-columns:1fr 1fr!important}}@media(max-width:480px){.footer-grid{grid-template-columns:1fr!important}}`}</style>
    </footer>
  );
}

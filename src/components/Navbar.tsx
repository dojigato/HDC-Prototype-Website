"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Tentang Kami", href: "tentang" },
  { label: "Layanan", href: "layanan" },
  { label: "Dokter", href: "dokter" },
  { label: "Artikel", href: "artikel" },
];

const ctaGradient = "linear-gradient(180deg, #4588BF 0%, #26589B 100%)";
const ctaGradientHover = "linear-gradient(180deg, #5499CF 0%, #2E67AD 100%)";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      height: "72px", display: "flex", alignItems: "center",
      padding: "0 150px",
      background: "#ffffff",
      boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.10)" : "0 1px 0 #e5e7eb",
      transition: "box-shadow 0.3s",
    }}>

      {/* Logo — kiri */}
      <div onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{ cursor: "pointer", flexShrink: 0 }}>
        <img
          src="/hdc-logo-color.svg"
          alt="HDC Health Dental Care"
          style={{ height: "52px", width: "auto", objectFit: "contain", display: "block" }}
        />
      </div>

      {/* Nav links — tengah, distribute */}
      <div className="nav-links" style={{
        display: "flex", alignItems: "center",
        justifyContent: "space-evenly",
        flex: 1,
        padding: "0 2rem",
      }}>
        {navLinks.map((l) => (
          <button key={l.href} onClick={() => scrollTo(l.href)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              fontSize: "0.95rem", fontWeight: 500, color: "#374151",
              padding: "0.4rem 0", fontFamily: "inherit", transition: "color 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#26589B")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#374151")}>
            {l.label}
          </button>
        ))}
      </div>

      {/* CTA — kanan */}
      <button onClick={() => scrollTo("booking")} className="nav-links"
        style={{
          background: ctaGradient,
          border: "none", borderRadius: "100px",
          padding: "0.65rem 1.6rem", color: "#fff", fontWeight: 600,
          fontSize: "0.9rem", cursor: "pointer", fontFamily: "inherit",
          flexShrink: 0,
          transition: "background 0.2s, box-shadow 0.2s",
          boxShadow: "0 2px 10px rgba(38,88,155,0.35)",
          whiteSpace: "nowrap",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = ctaGradientHover;
          e.currentTarget.style.boxShadow = "0 4px 16px rgba(38,88,155,0.45)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = ctaGradient;
          e.currentTarget.style.boxShadow = "0 2px 10px rgba(38,88,155,0.35)";
        }}>
        Reservasi Sekarang
      </button>

      {/* Mobile hamburger */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger"
        style={{ display: "none", background: "none", border: "1px solid #e5e7eb", borderRadius: "8px", padding: "0.5rem 0.6rem", cursor: "pointer", flexDirection: "column", gap: "4px", marginLeft: "auto" }}>
        {[0, 1, 2].map((i) => (
          <span key={i} style={{ display: "block", width: "22px", height: "2px", background: "#374151", borderRadius: "2px" }} />
        ))}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ position: "fixed", top: "72px", left: 0, right: 0, background: "#fff", borderBottom: "1px solid #e5e7eb", padding: "1.5rem 20px", display: "flex", flexDirection: "column", gap: "1.25rem", zIndex: 999, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}>
          {navLinks.map((l) => (
            <button key={l.href} onClick={() => scrollTo(l.href)}
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1rem", fontWeight: 600, color: "#111827", textAlign: "left", fontFamily: "inherit", padding: "0.25rem 0" }}>
              {l.label}
            </button>
          ))}
          <button onClick={() => scrollTo("booking")}
            style={{ background: ctaGradient, border: "none", borderRadius: "100px", padding: "0.75rem 1.5rem", color: "#fff", fontWeight: 600, fontSize: "1rem", cursor: "pointer", fontFamily: "inherit", textAlign: "center" }}>
            Reservasi Sekarang
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 1280px) { nav { padding-left: 80px !important; padding-right: 80px !important; } }
        @media (max-width: 1024px) { nav { padding-left: 48px !important; padding-right: 48px !important; } }
        @media (max-width: 768px) {
          nav { padding-left: 20px !important; padding-right: 20px !important; }
          .nav-links { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}

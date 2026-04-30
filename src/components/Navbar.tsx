"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Tentang Kami", href: "tentang" },
  { label: "Layanan", href: "layanan" },
  { label: "Dokter", href: "dokter" },
  { label: "Artikel", href: "artikel" },
];

function ToothIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="#1D4ED8" />
      <path d="M16 6C13.5 6 11.5 7.2 10 9C8.5 7.2 6.5 6 5 6V12C5 15.5 7 17.5 9 18.5V26H11V18C11 16.5 12.5 15 14 15H18C19.5 15 21 16.5 21 18V26H23V18.5C25 17.5 27 15.5 27 12V6C25.5 6 23.5 7.2 22 9C20.5 7.2 18.5 6 16 6Z" fill="white" />
    </svg>
  );
}

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
      justifyContent: "space-between", padding: "0 2rem",
      background: "#ffffff",
      boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.10)" : "0 1px 0 #e5e7eb",
      transition: "box-shadow 0.3s",
    }}>
      <div onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{ display: "flex", alignItems: "center", gap: "0.6rem", cursor: "pointer" }}>
        <ToothIcon />
        <span style={{ fontWeight: 800, fontSize: "1.25rem", color: "#1D4ED8", letterSpacing: "-0.02em" }}>HDC</span>
        <span style={{ fontWeight: 500, fontSize: "0.85rem", color: "#6B7280", marginLeft: "-4px" }}>Dental Clinic</span>
      </div>

      <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        {navLinks.map((l) => (
          <button key={l.href} onClick={() => scrollTo(l.href)}
            style={{ background: "none", border: "none", cursor: "pointer", fontSize: "0.9rem", fontWeight: 500, color: "#374151", padding: "0.4rem 0", fontFamily: "inherit", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#1D4ED8")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#374151")}>
            {l.label}
          </button>
        ))}
        <button onClick={() => scrollTo("booking")}
          style={{ background: "#1D4ED8", border: "none", borderRadius: "8px", padding: "0.6rem 1.4rem", color: "#fff", fontWeight: 600, fontSize: "0.9rem", cursor: "pointer", fontFamily: "inherit", transition: "background 0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#1E40AF")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#1D4ED8")}>
          Reservasi Sekarang
        </button>
      </div>

      <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger"
        style={{ display: "none", background: "none", border: "1px solid #e5e7eb", borderRadius: "8px", padding: "0.5rem", cursor: "pointer", flexDirection: "column", gap: "4px" }}>
        {[0, 1, 2].map((i) => (
          <span key={i} style={{ display: "block", width: "22px", height: "2px", background: "#374151", borderRadius: "2px" }} />
        ))}
      </button>

      {menuOpen && (
        <div style={{ position: "fixed", top: "72px", left: 0, right: 0, background: "#fff", borderBottom: "1px solid #e5e7eb", padding: "1.5rem 2rem", display: "flex", flexDirection: "column", gap: "1.25rem", zIndex: 999 }}>
          {navLinks.map((l) => (
            <button key={l.href} onClick={() => scrollTo(l.href)}
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1rem", fontWeight: 600, color: "#111827", textAlign: "left", fontFamily: "inherit" }}>
              {l.label}
            </button>
          ))}
          <button onClick={() => scrollTo("booking")}
            style={{ background: "#1D4ED8", border: "none", borderRadius: "8px", padding: "0.75rem 1.5rem", color: "#fff", fontWeight: 600, fontSize: "1rem", cursor: "pointer", fontFamily: "inherit", textAlign: "center" }}>
            Reservasi Sekarang
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}

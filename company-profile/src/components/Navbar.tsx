"use client";
import { useState, useEffect } from "react";

const links = ["About", "Services", "Team", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.getElementById(href.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: "0 2rem",
        height: "72px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "all 0.4s ease",
        background: scrolled ? "rgba(8,10,15,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: "1.4rem",
          letterSpacing: "-0.03em",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <span
          style={{
            width: "28px",
            height: "28px",
            background: "linear-gradient(135deg, #00D4FF, #7B61FF)",
            borderRadius: "6px",
            display: "inline-block",
          }}
        />
        <span style={{ color: "#F0F4FF" }}>Nex</span>
        <span style={{ color: "#00D4FF" }}>Core</span>
      </div>

      {/* Desktop Nav */}
      <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }} className="desktop-nav">
        {links.map((l) => (
          <button
            key={l}
            onClick={() => handleNav(l)}
            style={{
              background: "none",
              border: "none",
              color: "#6B7A99",
              fontSize: "0.875rem",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
              letterSpacing: "0.05em",
              cursor: "pointer",
              padding: "0.5rem 0",
              transition: "color 0.2s",
              textTransform: "uppercase",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#00D4FF")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#6B7A99")}
          >
            {l}
          </button>
        ))}
        <button
          onClick={() => handleNav("Contact")}
          style={{
            background: "linear-gradient(135deg, #00D4FF, #7B61FF)",
            border: "none",
            borderRadius: "8px",
            padding: "0.6rem 1.4rem",
            color: "#000",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
            fontSize: "0.875rem",
            cursor: "pointer",
            transition: "opacity 0.2s, transform 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.85";
            e.currentTarget.style.transform = "translateY(-1px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Get Started
        </button>
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: "none",
          background: "none",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "8px",
          padding: "0.5rem",
          cursor: "pointer",
          flexDirection: "column",
          gap: "4px",
        }}
        className="hamburger"
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{
              display: "block",
              width: "22px",
              height: "2px",
              background: "#F0F4FF",
              borderRadius: "2px",
              transition: "all 0.3s",
              transformOrigin: "center",
              transform:
                menuOpen && i === 0
                  ? "rotate(45deg) translateY(8px)"
                  : menuOpen && i === 2
                  ? "rotate(-45deg) translateY(-8px)"
                  : menuOpen && i === 1
                  ? "scaleX(0)"
                  : "none",
            }}
          />
        ))}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "72px",
            left: 0,
            right: 0,
            background: "rgba(8,10,15,0.98)",
            backdropFilter: "blur(20px)",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {links.map((l) => (
            <button
              key={l}
              onClick={() => handleNav(l)}
              style={{
                background: "none",
                border: "none",
                color: "#F0F4FF",
                fontSize: "1.2rem",
                fontFamily: "'Syne', sans-serif",
                fontWeight: 600,
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              {l}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}

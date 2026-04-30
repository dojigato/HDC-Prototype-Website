"use client";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "3rem 2rem",
        background: "#080A0F",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "1.2rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span
            style={{
              width: "22px",
              height: "22px",
              background: "linear-gradient(135deg, #00D4FF, #7B61FF)",
              borderRadius: "5px",
              display: "inline-block",
            }}
          />
          <span style={{ color: "#F0F4FF" }}>Nex</span>
          <span style={{ color: "#00D4FF" }}>Core</span>
        </div>

        <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          {["Privacy Policy", "Terms of Service", "Security"].map((link) => (
            <a
              key={link}
              href="#"
              style={{
                color: "#6B7A99",
                textDecoration: "none",
                fontSize: "0.85rem",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#00D4FF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#6B7A99")}
            >
              {link}
            </a>
          ))}
        </div>

        <div style={{ color: "#6B7A99", fontSize: "0.85rem" }}>
          © {year} NexCore Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

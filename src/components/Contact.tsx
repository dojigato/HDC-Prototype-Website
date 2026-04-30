"use client";
export default function Location() {
  return (
    <section id="lokasi" style={{ background: "#f8fafc", padding: "5rem 2rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ fontSize: "0.8rem", color: "#1D4ED8", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>LOKASI</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "#111827" }}>
            Akses Mudah dari Berbagai Area di Cirebon
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "2rem", alignItems: "start" }}>
          {/* Map placeholder */}
          <div style={{ borderRadius: "16px", overflow: "hidden", height: "360px", background: "#e2e8f0", border: "1.5px solid #cbd5e1", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "1rem" }}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="22" r="10" stroke="#94A3B8" strokeWidth="3" fill="none" />
              <path d="M24 32C24 32 14 42 14 48H34C34 42 24 32 24 32Z" fill="#94A3B8" opacity="0.4" />
              <circle cx="24" cy="22" r="4" fill="#1D4ED8" />
            </svg>
            <p style={{ color: "#94A3B8", fontSize: "0.9rem" }}>Peta akan ditampilkan di sini</p>
            <a href="https://maps.google.com/?q=Jl.+Siliwangi+No.119+Cirebon" target="_blank" rel="noopener noreferrer"
              style={{ background: "#1D4ED8", color: "#fff", borderRadius: "8px", padding: "0.5rem 1.2rem", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none", transition: "opacity 0.2s" }}>
              Buka di Google Maps →
            </a>
          </div>

          {/* Info card */}
          <div style={{ background: "#fff", borderRadius: "16px", padding: "2rem", border: "1.5px solid #e5e7eb", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#EFF6FF", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" }}>🏥</div>
              <div>
                <div style={{ fontWeight: 800, fontSize: "1rem", color: "#111827" }}>HDC Cirebon</div>
                <div style={{ fontSize: "0.8rem", color: "#1D4ED8", fontWeight: 600 }}>Klinik Gigi</div>
              </div>
            </div>

            {[
              { icon: "📍", label: "Alamat", value: "Jl. Siliwangi No.119, Kebonbaru, Kec. Kejaksan, Kota Cirebon, Jawa Barat 45121" },
              { icon: "📞", label: "Telepon", value: "0812-2234-6161" },
              { icon: "🕐", label: "Jam Buka", value: "Senin – Sabtu: 09.00 – 21.00\nMinggu: 09.00 – 16.00" },
            ].map((item) => (
              <div key={item.label} style={{ marginBottom: "1.25rem", paddingBottom: "1.25rem", borderBottom: "1px solid #f1f5f9" }}>
                <div style={{ fontSize: "0.75rem", color: "#6B7280", fontWeight: 600, marginBottom: "0.35rem", letterSpacing: "0.05em" }}>{item.icon} {item.label}</div>
                <div style={{ fontSize: "0.9rem", color: "#111827", lineHeight: 1.6, whiteSpace: "pre-line" }}>{item.value}</div>
              </div>
            ))}

            <a href="https://maps.google.com/?q=Jl.+Siliwangi+No.119+Cirebon" target="_blank" rel="noopener noreferrer"
              style={{ display: "block", textAlign: "center", background: "#1D4ED8", color: "#fff", borderRadius: "10px", padding: "0.75rem", fontWeight: 700, fontSize: "0.95rem", textDecoration: "none", transition: "opacity 0.2s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.85")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}>
              Buka Maps
            </a>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){section#lokasi>div>div[style*="grid-template-columns"]{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

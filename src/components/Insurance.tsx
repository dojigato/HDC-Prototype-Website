"use client";
const insurers = [
  { name: "BNI Life", color: "#F97316" },
  { name: "BRIlife", color: "#16A34A" },
  { name: "FWD", color: "#EF4444" },
  { name: "Avrist", color: "#7C3AED" },
  { name: "ACA Asuransi", color: "#0EA5E9" },
];

export default function Insurance() {
  return (
    <section style={{ background: "#ffffff", padding: "4rem 2rem", borderBottom: "1px solid #f1f5f9" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: "0.8rem", color: "#6B7280", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
          Perawatan gigi di HDC Cirebon bisa pace asuransimu
        </p>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#111827", marginBottom: "2.5rem" }}>
          Terima Berbagai Asuransi Kesehatan
        </h2>
        <div style={{ display: "flex", gap: "2rem", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
          {insurers.map((ins) => (
            <div key={ins.name} style={{
              padding: "0.75rem 1.5rem", borderRadius: "10px", border: "1.5px solid #e5e7eb",
              fontWeight: 700, fontSize: "1rem", color: ins.color,
              background: "#fff", minWidth: "110px", textAlign: "center",
              transition: "border-color 0.2s, box-shadow 0.2s",
            }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = ins.color; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = "#e5e7eb"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}>
              {ins.name}
            </div>
          ))}
        </div>
        <button style={{ marginTop: "2rem", background: "none", border: "none", color: "#1D4ED8", fontWeight: 600, fontSize: "0.9rem", cursor: "pointer", fontFamily: "inherit", textDecoration: "underline" }}>
          Lihat Selengkapnya
        </button>
      </div>
    </section>
  );
}

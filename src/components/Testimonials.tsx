const reviews = [
  { name: "Andi Pratama", text: "Pelayanannya sangat ramah dan profesional. Dokternya sabar menjelaskan kondisi gigi saya. Sangat recommended!", rating: 5 },
  { name: "Siti Rahmawati", text: "Behel gigi di HDC hasilnya memuaskan sekali. Prosesnya nyaman dan harganya terjangkau. Sudah 1 tahun dan hasilnya luar biasa!", rating: 5 },
  { name: "Budi Santoso", text: "Scalling gigi di sini terasa bersih banget. Dokternya teliti dan kliniknya sangat bersih. Pasti balik lagi!", rating: 5 },
  { name: "Dewi Kusuma", text: "Awalnya takut ke dokter gigi, tapi di HDC dokternya sangat pengertian. Tidak terasa sakit sama sekali. Terima kasih!", rating: 5 },
  { name: "Riko Hermawan", text: "Proses cabut gigi bungsu yang saya takutkan ternyata sangat lancar. Dokternya handal dan profesional!", rating: 5 },
  { name: "Aulia Sari", text: "Veneer gigi di HDC hasilnya natural banget. Banyak yang kira gigi saya asli! Sangat puas dengan hasilnya.", rating: 5 },
];

export default function Testimonials() {
  return (
    <section style={{ background: "#f1f5f9", padding: "5rem 0" }}>
      <div className="pg-container">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ fontSize: "0.8rem", color: "#1D4ED8", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>TESTIMONI</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "#111827", marginBottom: "0.5rem" }}>
            Dipercaya lebih dari 10.000 warga Cirebon
          </h2>
          <p style={{ color: "#6B7280", fontSize: "0.95rem" }}>Pengalaman Mereka Bersama Kami</p>
        </div>

        <div className="reviews-grid">
          {reviews.map((r) => (
            <div key={r.name} style={{ background: "#fff", borderRadius: "14px", padding: "1.5rem", border: "1.5px solid #e5e7eb", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <div style={{ fontSize: "1.1rem", color: "#FBBF24" }}>{"★".repeat(r.rating)}</div>
              <p style={{ fontSize: "0.88rem", color: "#374151", lineHeight: 1.7, flex: 1 }}>&ldquo;{r.text}&rdquo;</p>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginTop: "0.5rem" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#EFF6FF", border: "2px solid #BFDBFE", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.8rem", color: "#1D4ED8", flexShrink: 0 }}>
                  {r.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div style={{ fontWeight: 700, fontSize: "0.88rem", color: "#111827" }}>{r.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`.reviews-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem}@media(max-width:900px){.reviews-grid{grid-template-columns:repeat(2,1fr)!important}}@media(max-width:500px){.reviews-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

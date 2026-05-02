"use client";
export default function BookingCTA() {
  const scrollTo = (id: string) => {
    if (typeof window !== "undefined") document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="booking" style={{ background: "linear-gradient(135deg, #1D4ED8, #1E40AF)", padding: "5rem 0" }}>
      <div className="pg-container" style={{ textAlign: "center", maxWidth: "none" }}>
        <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>😁</div>
        <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, color: "#fff", marginBottom: "1rem" }}>
          Yuk, Booking Sekarang
        </h2>
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem", maxWidth: "480px", margin: "0 auto 2rem" }}>
          Jangan tunda lagi, senyum sehatmu dimulai dari satu langkah kecil — buat janji sekarang juga di HDC Dental Clinic.
        </p>
        <button onClick={() => scrollTo("booking")}
          style={{ background: "#fff", border: "none", borderRadius: "12px", padding: "0.9rem 2.5rem", color: "#1D4ED8", fontWeight: 800, fontSize: "1rem", cursor: "pointer", fontFamily: "inherit", boxShadow: "0 4px 20px rgba(0,0,0,0.15)", transition: "transform 0.2s, box-shadow 0.2s" }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,0,0,0.2)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)"; }}>
          Buat Janji Sekarang →
        </button>
      </div>
    </section>
  );
}

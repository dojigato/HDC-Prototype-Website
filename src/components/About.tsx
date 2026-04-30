"use client";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const milestones = [
    { year: "2016", title: "Founded", desc: "Started as a 4-person infrastructure consulting team." },
    { year: "2018", title: "Series A", desc: "Raised $12M to build our proprietary AI runtime." },
    { year: "2021", title: "Global Expansion", desc: "Opened offices in Singapore, Berlin, and São Paulo." },
    { year: "2024", title: "500+ Clients", desc: "Now powering 1 in 5 Fortune 500 cloud deployments." },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      style={{
        padding: "8rem 2rem",
        maxWidth: "1200px",
        margin: "0 auto",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
        {/* Left */}
        <div>
          <div
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#00D4FF",
              marginBottom: "1rem",
              fontWeight: 600,
            }}
          >
            About NexCore
          </div>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#F0F4FF",
              marginBottom: "1.5rem",
            }}
          >
            We don't just build
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #00D4FF, #7B61FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              technology.
            </span>
            <br />
            We build trust.
          </h2>
          <p style={{ color: "#6B7A99", lineHeight: 1.8, marginBottom: "1.5rem", fontSize: "1.05rem" }}>
            NexCore is a technology company built around one principle: infrastructure should be
            invisible. When systems work perfectly, teams focus on what matters — building products,
            serving customers, and growing.
          </p>
          <p style={{ color: "#6B7A99", lineHeight: 1.8, fontSize: "1.05rem" }}>
            We combine deep engineering expertise with an obsessive focus on reliability to
            deliver platforms that just work — at any scale, in any region, under any load.
          </p>

          <div style={{ display: "flex", gap: "1rem", marginTop: "2.5rem", flexWrap: "wrap" }}>
            {["Cloud Native", "Zero Downtime", "SOC 2 Type II", "ISO 27001"].map((tag) => (
              <span
                key={tag}
                style={{
                  background: "rgba(0,212,255,0.06)",
                  border: "1px solid rgba(0,212,255,0.15)",
                  borderRadius: "8px",
                  padding: "0.4rem 1rem",
                  fontSize: "0.8rem",
                  color: "#00D4FF",
                  fontWeight: 500,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right - Timeline */}
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: "24px",
              top: 0,
              bottom: 0,
              width: "1px",
              background: "linear-gradient(to bottom, rgba(0,212,255,0.4), rgba(123,97,255,0.4), transparent)",
            }}
          />
          {milestones.map((m, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "2rem",
                marginBottom: "2.5rem",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(20px)",
                transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.1 + 0.3}s`,
              }}
            >
              <div style={{ position: "relative", flexShrink: 0 }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "#0E1118",
                    border: "1px solid rgba(0,212,255,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 20px rgba(0,212,255,0.1)",
                  }}
                >
                  <span style={{ fontSize: "0.7rem", color: "#00D4FF", fontWeight: 700 }}>{m.year}</span>
                </div>
              </div>
              <div style={{ paddingTop: "0.5rem" }}>
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    color: "#F0F4FF",
                    marginBottom: "0.25rem",
                  }}
                >
                  {m.title}
                </div>
                <div style={{ color: "#6B7A99", fontSize: "0.9rem", lineHeight: 1.6 }}>{m.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about > div { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}

"use client";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: "⬡",
    title: "Cloud Infrastructure",
    desc: "Multi-region, fault-tolerant infrastructure designed for zero-downtime deployments. We architect systems that handle peak loads without breaking a sweat.",
    tags: ["Kubernetes", "Terraform", "AWS / GCP"],
    accent: "#00D4FF",
  },
  {
    icon: "◈",
    title: "AI & Machine Learning",
    desc: "End-to-end ML pipelines: data ingestion, model training, deployment, and monitoring. From LLM fine-tuning to real-time inference at scale.",
    tags: ["PyTorch", "MLflow", "Vector DBs"],
    accent: "#7B61FF",
  },
  {
    icon: "◉",
    title: "Platform Engineering",
    desc: "Internal developer platforms that multiply team velocity. Golden paths, self-service tooling, and the automation that lets engineers ship faster.",
    tags: ["Backstage", "ArgoCD", "GitHub Actions"],
    accent: "#FF6B6B",
  },
  {
    icon: "◎",
    title: "Security & Compliance",
    desc: "SOC 2, ISO 27001, and GDPR-ready systems by design. Security isn't bolted on — it's baked into every layer of our architecture.",
    tags: ["Zero Trust", "SIEM", "Pen Testing"],
    accent: "#00D4FF",
  },
  {
    icon: "◇",
    title: "Data Engineering",
    desc: "Scalable data lakehouse architectures, streaming pipelines, and business intelligence stacks that turn raw events into actionable insight.",
    tags: ["Spark", "dbt", "Snowflake"],
    accent: "#7B61FF",
  },
  {
    icon: "◆",
    title: "Product Development",
    desc: "Full-stack product teams embedded in your org. We design, build, and ship user-facing products with a focus on performance and craft.",
    tags: ["Next.js", "React Native", "GraphQL"],
    accent: "#FF6B6B",
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="services"
      style={{
        padding: "8rem 2rem",
        background: "linear-gradient(to bottom, transparent, rgba(14,17,24,0.5), transparent)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "5rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
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
            What We Do
          </div>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#F0F4FF",
            }}
          >
            Services built for{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00D4FF, #7B61FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              scale
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.04)",
            borderRadius: "24px",
            overflow: "hidden",
          }}
        >
          {services.map((svc, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                padding: "2.5rem",
                background: hovered === i ? "rgba(255,255,255,0.04)" : "#080A0F",
                transition: "all 0.3s ease",
                cursor: "default",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${i * 0.05 + 0.2}s`,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Hover glow */}
              {hovered === i && (
                <div
                  style={{
                    position: "absolute",
                    top: "-50px",
                    left: "-50px",
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${svc.accent}12, transparent 70%)`,
                    pointerEvents: "none",
                  }}
                />
              )}

              <div
                style={{
                  fontSize: "2rem",
                  color: svc.accent,
                  marginBottom: "1.25rem",
                  display: "block",
                  filter: hovered === i ? `drop-shadow(0 0 8px ${svc.accent})` : "none",
                  transition: "filter 0.3s",
                }}
              >
                {svc.icon}
              </div>

              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "#F0F4FF",
                  marginBottom: "0.75rem",
                  letterSpacing: "-0.02em",
                }}
              >
                {svc.title}
              </h3>

              <p style={{ color: "#6B7A99", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                {svc.desc}
              </p>

              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {svc.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: "0.7rem",
                      color: svc.accent,
                      border: `1px solid ${svc.accent}30`,
                      borderRadius: "6px",
                      padding: "0.25rem 0.6rem",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #services div[style*="grid-template-columns: repeat(3"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          #services div[style*="grid-template-columns: repeat(3"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

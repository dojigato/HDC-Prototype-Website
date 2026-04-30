"use client";
import { useEffect, useRef, useState } from "react";

const team = [
  {
    name: "Aria Chen",
    role: "Chief Executive Officer",
    bio: "Former VP Engineering at Stripe. 15 years scaling infrastructure for high-growth companies.",
    initials: "AC",
    color: "#00D4FF",
  },
  {
    name: "Marcus Webb",
    role: "Chief Technology Officer",
    bio: "Ex-Google SRE. Built distributed systems serving 2B+ daily active users.",
    initials: "MW",
    color: "#7B61FF",
  },
  {
    name: "Lena Sørensen",
    role: "Head of AI Research",
    bio: "PhD, MIT CSAIL. Published 40+ papers on neural architecture and LLM optimization.",
    initials: "LS",
    color: "#FF6B6B",
  },
  {
    name: "Kai Nakamura",
    role: "VP of Product",
    bio: "Former PM at Figma and Linear. Obsessed with developer experience and product craft.",
    initials: "KN",
    color: "#00D4FF",
  },
  {
    name: "Priya Menon",
    role: "Head of Security",
    bio: "CISO background with deep expertise in zero-trust architecture and compliance automation.",
    initials: "PM",
    color: "#7B61FF",
  },
  {
    name: "Diego Reyes",
    role: "VP of Engineering",
    bio: "Platform engineering leader who built internal dev platforms at Shopify and Cloudflare.",
    initials: "DR",
    color: "#FF6B6B",
  },
];

export default function Team() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

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
      id="team"
      style={{ padding: "8rem 2rem", maxWidth: "1200px", margin: "0 auto" }}
    >
      {/* Header */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "5rem",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease",
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
          The People
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
          Meet the team behind{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #00D4FF, #7B61FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            the platform
          </span>
        </h2>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5rem",
        }}
      >
        {team.map((member, i) => (
          <TeamCard key={i} member={member} delay={i * 0.08 + 0.2} visible={visible} />
        ))}
      </div>

      <style>{`
        @media (max-width: 1024px) { #team > div:last-child { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px) { #team > div:last-child { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

function TeamCard({
  member,
  delay,
  visible,
}: {
  member: (typeof team)[0];
  delay: number;
  visible: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(255,255,255,0.04)" : "rgba(14,17,24,0.6)",
        border: `1px solid ${hovered ? member.color + "30" : "rgba(255,255,255,0.06)"}`,
        borderRadius: "20px",
        padding: "2rem",
        transition: "all 0.35s ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${delay}s`,
        cursor: "default",
      }}
    >
      {/* Avatar */}
      <div
        style={{
          width: "72px",
          height: "72px",
          borderRadius: "50%",
          background: `linear-gradient(135deg, ${member.color}30, ${member.color}08)`,
          border: `1.5px solid ${member.color}40`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: "1.1rem",
          color: member.color,
          marginBottom: "1.25rem",
          boxShadow: hovered ? `0 0 20px ${member.color}20` : "none",
          transition: "box-shadow 0.3s",
        }}
      >
        {member.initials}
      </div>

      <div
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 700,
          fontSize: "1.05rem",
          color: "#F0F4FF",
          marginBottom: "0.25rem",
        }}
      >
        {member.name}
      </div>
      <div style={{ fontSize: "0.8rem", color: member.color, marginBottom: "0.75rem", fontWeight: 500 }}>
        {member.role}
      </div>
      <p style={{ color: "#6B7A99", fontSize: "0.875rem", lineHeight: 1.65 }}>{member.bio}</p>
    </div>
  );
}

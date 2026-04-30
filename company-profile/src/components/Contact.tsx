"use client";
import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "12px",
    padding: "0.875rem 1.25rem",
    color: "#F0F4FF",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.95rem",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  return (
    <section
      ref={ref}
      id="contact"
      style={{
        padding: "8rem 2rem",
        background: "linear-gradient(to bottom, transparent, rgba(0,212,255,0.02), transparent)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6rem",
          alignItems: "start",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
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
            Get in Touch
          </div>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#F0F4FF",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
            }}
          >
            Ready to build
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #00D4FF, #7B61FF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              something great?
            </span>
          </h2>
          <p style={{ color: "#6B7A99", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: "3rem" }}>
            Whether you're scaling an existing system or starting from scratch, our team
            is ready to help you architect the right solution.
          </p>

          {/* Contact info */}
          {[
            { label: "Email", value: "hello@nexcore.io" },
            { label: "Location", value: "San Francisco · London · Singapore" },
            { label: "Response Time", value: "Within 24 hours" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                gap: "1.5rem",
                alignItems: "flex-start",
                marginBottom: "1.5rem",
                paddingBottom: "1.5rem",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div style={{ fontSize: "0.75rem", color: "#00D4FF", fontWeight: 600, letterSpacing: "0.08em", marginTop: "2px", minWidth: "80px" }}>
                {item.label.toUpperCase()}
              </div>
              <div style={{ color: "#F0F4FF", fontSize: "0.95rem" }}>{item.value}</div>
            </div>
          ))}
        </div>

        {/* Right - Form */}
        <div
          style={{
            background: "rgba(14,17,24,0.8)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "24px",
            padding: "2.5rem",
            backdropFilter: "blur(20px)",
          }}
        >
          {submitted ? (
            <div style={{ textAlign: "center", padding: "3rem 0" }}>
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: "rgba(0,212,255,0.1)",
                  border: "1px solid rgba(0,212,255,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  margin: "0 auto 1.5rem",
                }}
              >
                ✓
              </div>
              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "#F0F4FF",
                  marginBottom: "0.75rem",
                }}
              >
                Message sent!
              </h3>
              <p style={{ color: "#6B7A99" }}>We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", color: "#6B7A99", marginBottom: "0.5rem", letterSpacing: "0.05em" }}>
                    NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Your name"
                    style={inputStyle}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(0,212,255,0.4)";
                      e.target.style.boxShadow = "0 0 0 3px rgba(0,212,255,0.06)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(255,255,255,0.08)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", color: "#6B7A99", marginBottom: "0.5rem", letterSpacing: "0.05em" }}>
                    EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="you@company.com"
                    style={inputStyle}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(0,212,255,0.4)";
                      e.target.style.boxShadow = "0 0 0 3px rgba(0,212,255,0.06)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(255,255,255,0.08)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", fontSize: "0.75rem", color: "#6B7A99", marginBottom: "0.5rem", letterSpacing: "0.05em" }}>
                  COMPANY
                </label>
                <input
                  type="text"
                  value={formState.company}
                  onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                  placeholder="Your company"
                  style={inputStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = "rgba(0,212,255,0.4)";
                    e.target.style.boxShadow = "0 0 0 3px rgba(0,212,255,0.06)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255,255,255,0.08)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label style={{ display: "block", fontSize: "0.75rem", color: "#6B7A99", marginBottom: "0.5rem", letterSpacing: "0.05em" }}>
                  MESSAGE
                </label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell us about your project..."
                  style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6 }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "rgba(0,212,255,0.4)";
                    e.target.style.boxShadow = "0 0 0 3px rgba(0,212,255,0.06)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255,255,255,0.08)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: "100%",
                  background: "linear-gradient(135deg, #00D4FF, #7B61FF)",
                  border: "none",
                  borderRadius: "12px",
                  padding: "1rem",
                  color: "#000",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  cursor: "pointer",
                  transition: "all 0.3s",
                  boxShadow: "0 0 30px rgba(0,212,255,0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "0.9";
                  e.currentTarget.style.transform = "translateY(-1px)";
                  e.currentTarget.style.boxShadow = "0 0 50px rgba(0,212,255,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 0 30px rgba(0,212,255,0.2)";
                }}
              >
                Send Message →
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact > div { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}

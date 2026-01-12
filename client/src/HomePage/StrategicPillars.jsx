import React, { useState } from "react";
import "./StrategicPillars.css";

const pillars = [
  {
    id: 1,
    title: "Input Leadership",
    desc: "Standardized, compliant and region-specific agri inputs powering productivity.",
    points: ["Multi-brand & private labels", "FCO / BIS / ISO compliance", "Forecast-driven inventory"],
  },
  {
    id: 2,
    title: "Mechanization Access",
    desc: "Modern machinery access through ownership, rentals and OEM partnerships.",
    points: ["Tractors, drones, harvesters", "Pay-per-acre rentals", "Solar & green energy"],
  },
  {
    id: 3,
    title: "Farmer Services",
    desc: "On-field execution powered by data, precision services and village networks.",
    points: ["Soil & drone services", "FPO enablement", "Agri-tech integration"],
  },
  {
    id: 4,
    title: "Processing & Markets",
    desc: "Aggregation, processing and direct market access ensuring value realization.",
    points: ["Mini-processing units", "B2B & exports", "Quality grading"],
  },
  {
    id: 5,
    title: "Sustainability",
    desc: "Turning agricultural residue into renewable value streams.",
    points: ["Biomass & Bio-CNG", "Green hydrogen pilots", "Carbon credits"],
  },
  {
    id: 6,
    title: "Govt Convergence",
    desc: "Execution partner for national agricultural programs.",
    points: ["PM-Kisan, PM-FME, AIF", "NABARD partnerships", "Subsidy deployment"],
  },
];

const StrategicPillars = () => {
  const [active, setActive] = useState(pillars[0]);

  return (
    <section className="sp-hub">
      <div className="sp-container">
        {/* HEADER */}
        <header className="sp-header">
          <p className="sp-eyebrow">Strategic Pillars</p>
          <h2>An integrated operating system for agriculture</h2>
          <p>Six interconnected pillars forming a single scalable agri-platform.</p>
        </header>

        {/* LAYOUT */}
        <div className="sp-layout">
          {/* HUB - Visual */}
          <div className="sp-hub-visual">
            <div className="sp-core">
              <span>Jigisha</span>
              <small>Integrated Agri Platform</small>
            </div>

            {pillars.map((p) => (
              <button
                key={p.id}
                className={`sp-node ${active.id === p.id ? "active" : ""}`}
                onClick={() => setActive(p)}
              >
                {String(p.id).padStart(2, "0")}
              </button>
            ))}
          </div>

          {/* DETAIL */}
          <div className="sp-detail">
            <span className="sp-detail-kicker">Active Pillar</span>
            <h3 className="sp-detail-title">{active.title}</h3>
            <p className="sp-detail-desc">{active.desc}</p>
            <div className="sp-capabilities">
              {active.points.map((pt, i) => (
                <div className="sp-capability" key={i}>
                  <span className="sp-cap-index">{String(i + 1).padStart(2, "0")}</span>
                  <span className="sp-cap-text">{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicPillars;
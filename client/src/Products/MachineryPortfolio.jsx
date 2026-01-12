import React, { useState, useEffect, useCallback } from "react"; // Added useEffect and useCallback
import { motion, AnimatePresence } from "framer-motion";
import {
  Tractor, Gauge, Droplets, Wind, Package,
  CheckCircle2, ArrowRight, Cpu, Cog, ShieldCheck, ChevronRight, ChevronLeft
} from "lucide-react";
import "./MachineryPortfolio.css";
import landImg from "./../assets/Products/land.png";

import aero from "./../assets/Products/aero.png";

import harvest from "./../assets/Products/harvest.png";

import irrigation from "./../assets/Products/irrigation.png";
const MachineryPortfolio = () => {
  const [active, setActive] = useState(0);

  const sections = [
    {
      title: "Harvesting",
      icon: <Tractor />,
      color: "#1a4d2e",
      img: harvest,
      stats: ["15+ Models", "Efficiency+", "High Capacity"],
      specs: [
        { h: "Core Systems", p: ["Combine Harvesters", "Sugarcane harvesters"] },
        { h: "Processing", p: ["Straw balers", "Reaper binders"] }
      ]
    },
    {
      title: "Land Prep",
      icon: <Gauge />,
      color: "#4f6f52",
      img: landImg,
      stats: ["Power Tillers", "Precision Drills", "Levellers"],
      specs: [
        { h: "Tillage", p: ["Rotavators", "Soil breakers"] },
        { h: "Planting", p: ["Precision seed drills", "Transplanters"] }
      ]
    },
    {
      title: "Irrigation",
      icon: <Droplets />,
      color: "#739072",
      img: irrigation,
      stats: ["Solar Pumps", "Drip Systems", "Automation"],
      specs: [
        { h: "Pumping", p: ["Solar (2-10HP)", "Smart Distribution"] },
        { h: "Micro-Irrigation", p: ["Drip kits", "Sprinklers"] }
      ]
    },
    {
      title: "Aero-Spray",
      icon: <Wind />,
      color: "#3a4d39",
      img: aero,
      stats: ["Drone Tech", "GPS Guided", "30L Capacity"],
      specs: [
        { h: "Unmanned", p: ["Agri-Drones", "Spectral Analysis"] },
        { h: "Conventional", p: ["Boom & Power sprayers"] }
      ]
    }
  ];

  // Memoize the next function so it can be used in useEffect safely
  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % sections.length);
  }, [sections.length]);

  const prev = () => {
    setActive((prev) => (prev - 1 + sections.length) % sections.length);
  };

  // AUTO-PLAY LOGIC: 5 Seconds
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 5000); // 5000ms = 5 seconds

    // Cleanup: This stops the timer if the component unmounts or if 'active' changes
    return () => clearInterval(timer);
  }, [next, active]);
  // Adding 'active' to dependencies ensures the 5s timer resets 
  // every time a user clicks manually.

  return (
    <section className="mp-mach-agro-root">
      <div className="mp-mach-agro-container">

        <header className="mp-mach-agro-header">
          <h2>Precision <span>Machinery Ecosystem</span></h2>
        </header>

        <div className="mp-mach-display-stack">
          {/* VISUAL PANEL */}
          <div className="mp-visual-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="mp-image-wrapper"
              >
                <img src={sections[active].img} alt={sections[active].title} />
                <div className="mp-image-overlay"></div>
                <div className="mp-floating-stats">
                  {sections[active].stats.map((s, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + (i * 0.1) }}
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* DATA PANEL */}
          <div className="mp-data-panel">
            <div className="mp-panel-top-meta">
              <span className="mp-step-indicator">Phase 0{active + 1} / 04</span>
              <div className="mp-progress-line">
                <div
                  className="mp-fill"
                  style={{
                    width: `${(active + 1) * 25}%`,
                    background: sections[active].color,
                    transition: 'width 0.5s ease, background 0.5s ease'
                  }}
                ></div>
              </div>
            </div>

            <div className="mp-panel-nav">
              <button onClick={prev} aria-label="Previous"><ChevronLeft /></button>
              <div className="mp-nav-dots">
                {sections.map((_, i) => (
                  <div
                    key={i}
                    className={`mp-dot ${active === i ? 'mp-active' : ''}`}
                    onClick={() => setActive(i)}
                    style={{ "--active-color": sections[i].color }}
                  />
                ))}
              </div>
              <button onClick={next} aria-label="Next"><ChevronRight /></button>
            </div>

            <div className="mp-panel-content">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="mp-content-inner"
                >
                  <div className="mp-category-tag" style={{ color: sections[active].color }}>
                    {sections[active].icon} <span>{sections[active].title}</span>
                  </div>
                  <h3>Advanced {sections[active].title} Solutions</h3>

                  <div className="mp-specs-deck">
                    {sections[active].specs.map((spec, i) => (
                      <div className="mp-spec-card" key={i}>
                        <label>{spec.h}</label>
                        <ul>
                          {spec.p.map((item, idx) => (
                            <li key={idx}>
                              <CheckCircle2 size={12} style={{ color: sections[active].color }} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="mp-mach-trust-bar">
          <div className="mp-trust-item">
            <ShieldCheck className="mp-green-accent" />
            <span>24/7 Field Maintenance</span>
          </div>
          <div className="mp-trust-item">
            <Cog className="mp-spin-slow" />
            <span>MaaS Rental Options</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MachineryPortfolio;
import React from "react";
import { motion } from "framer-motion";
import {
  Leaf, Zap, Sun, Fuel, Recycle,
  ArrowUpRight, Globe, ShieldCheck, CheckCircle
} from "lucide-react";
import "./BioCngRenewablePortfolio.css";
import biocng from "./../assets/Products/biocng.png"
import biomass from "./../assets/Products/biomass.png"
const BioCngRenewablePortfolio = () => {
  const sections = [
    {
      title: "Bio-CNG Infrastructure",
      icon: <Fuel />,
      img: biomass,
      color: "#1a4d2e",
      tag: "Circular Energy",
      data: [
        { h: "Plant Capacities", p: "10 TPD, 25 TPD, 50 TPD, 100 TPD models • Modular & scalable plant design • Multi-feedstock handling • High output optimization" },
        { h: "Output Products", p: "Bio-CNG gas for industrial & transport • Organic fertilizer by-product • Carbon credit potential • Recurring revenue streams" },
        { h: "Implementation", p: "Feasibility studies & DPR • Installation & commissioning • Operations & maintenance • Training & capacity building" }
      ]
    },
    {
      title: "Biomass Solutions",
      icon: <Leaf />,
      img: biocng,
      color: "#2e7d32",
      tag: "Resource Recovery",
      data: [
        { h: "Collection Systems", p: "Crop residue collection equipment • Transportation & handling systems • Storage & pre-processing solutions • Quality management systems" },
        { h: "Processing Equipment", p: "Briquetting machines for biomass • Pellet manufacturing systems • Processing for thermal & power • Value addition technologies" }
      ]
    },
    {
      title: "Solar Energy Solutions",
      icon: <Sun />,
      img: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80",
      color: "#4caf50",
      tag: "Sustainable Power",
      data: [
        { h: "Solar Pump Systems", p: "Complete irrigation solutions via Jigisha Green • Multiple configurations • Existing integration • Lifecycle support" },
        { h: "Solar Processing", p: "Dryers for agri produce • Cold storage systems • Powered equipment • Integrated RE systems" }
      ]
    }
  ];

  return (
    <div className="bgrp-agro-luxury-root">
      {/* HEADER SECTION */}
      <section className="bgrp-luxury-header">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bgrp-kicker"
        >
          Technology Sector — 04
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Sustainable <span>Energy</span> <br /> Infrastructure
        </motion.h1>
      </section>

      {/* EDITORIAL ALTERNATING SECTIONS */}
      <div className="bgrp-luxury-stack">
        {sections.map((item, idx) => (
          <section className={`bgrp-luxury-row ${idx % 2 !== 0 ? "bgrp-reverse" : ""}`} key={idx}>
            <div className="bgrp-luxury-visual">
              <motion.div
                className="bgrp-img-reveal-container"
                initial={{ clipPath: "inset(30% 0 0 0)" }}
                whileInView={{ clipPath: "inset(0% 0 0 0)" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 1.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >

                <img src={item.img} alt={item.title} />
              </motion.div>

            </div>

            <div className="bgrp-luxury-content">
              <div className="bgrp-content-wrap">
                <div className="bgrp-title-row">
                  <div className="bgrp-icon-wrap" style={{ color: item.color }}>{item.icon}</div>
                  <h2>{item.title}</h2>
                </div>

                <div className="bgrp-specs-list">
                  {item.data.map((spec, i) => (
                    <motion.div
                      className="bgrp-spec-group"
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (i * 0.1) }}
                    >
                      <label>{spec.h}</label>
                      <p>{spec.p}</p>
                    </motion.div>
                  ))}
                </div>


              </div>
            </div>
          </section>
        ))}
      </div>

      {/* FOOTER BAR */}
      <footer className="bgrp-luxury-footer">
        <div className="bgrp-f-pill"><ShieldCheck size={16} /> ISO Quality</div>
        <div className="bgrp-f-pill"><Recycle size={16} /> Zero Waste</div>
        <div className="bgrp-f-pill"><Globe size={16} /> Carbon Neutral</div>
      </footer>
    </div>
  );
};

export default BioCngRenewablePortfolio;
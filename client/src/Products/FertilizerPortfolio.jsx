import React from "react";
import { motion } from "framer-motion";
import {
  Beaker, Droplets, Microscope, Sprout,
  Leaf, CheckCircle2, ArrowUpRight, Zap, Target
} from "lucide-react";
import "./FertilizerPortfolio.css";

const FertilizerPortfolio = () => {
  const sections = [
    {
      title: "Bulk Fertilizers",
      icon: <Beaker size={28} />,
      tag: "Foundation Nutrients",
      desc: "High-volume essential nutrients for broad-acre application and base soil correction.",
      groups: [
        { label: "Primary Elements", items: ["Urea", "DAP", "NPK", "MOP"] },
        { label: "Standards", items: ["FCO-Compliant", "Stability"] }
      ]
    },
    {
      title: "Water-Soluble",
      icon: <Droplets size={28} />,
      tag: "Precision Fertigation",
      desc: "100% soluble formulations designed for drip irrigation and foliar sprays.",
      groups: [
        { label: "Formulations", items: ["19:19:19", "13:40:13", "0:52:34"] },
        { label: "Efficiency", items: ["Bio-available", "Zero-clog"] }
      ]
    },
    {
      title: "Micronutrients",
      icon: <Microscope size={28} />,
      tag: "Element Correction",
      desc: "Targeted trace elements to overcome hidden hunger and enzymatic deficiencies.",
      groups: [
        { label: "Trace Elements", items: ["Zinc", "Boron", "Ferrous"] },
        { label: "Science", items: ["EDTA Chelated", "Foliar Optimized"] }
      ]
    },
    {
      title: "Bio-Fertilizers",
      icon: <Sprout size={28} />,
      tag: "Microbial Activation",
      desc: "Live microbial cultures that fix atmospheric nitrogen and solubilize soil minerals.",
      groups: [
        { label: "N-Fixing", items: ["Azotobacter", "Rhizobium"] },
        { label: "Solubilizers", items: ["PSB", "VAM", "Consortia"] }
      ]
    }
  ];

  return (
    <section className="fp-fert-blueprint-root">
      <div className="fp-blueprint-container">

        {/* TOP INTRO */}
        <header className="fp-blueprint-header">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="fp-header-left"
          >
            <h1>Balanced Nutrition <br /><span>Optimal Yield</span></h1>
          </motion.div>
          <div className="fp-header-right">
            <p>Our fertilizers aren't just chemicals; they are precision-engineered solutions for soil longevity and crop peak-performance.</p>
          </div>
        </header>

        {/* GRID SYSTEM */}
        <div className="fp-blueprint-grid">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              className="fp-blueprint-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="fp-card-top">
                <div className="fp-icon-box">{section.icon}</div>
                <div className="fp-tag-line">{section.tag}</div>
              </div>

              <div className="fp-card-body">
                <h3>{section.title}</h3>
                <p className="fp-section-desc">{section.desc}</p>

                <div className="fp-technical-specs">
                  {section.groups.map((group, idx) => (
                    <div className="fp-spec-row" key={idx}>
                      <span className="fp-spec-label">{group.label}</span>
                      <div className="fp-spec-tags">
                        {group.items.map((item, itIdx) => (
                          <span key={itIdx} className="fp-mini-pill">{item}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ORGANIC STRATEGY BOX - THE REINFORCEMENT */}
        <motion.div
          className="fp-strategy-banner"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <div className="fp-strategy-content">
            <div className="fp-strategy-icon"><Leaf size={32} /></div>
            <div className="fp-strategy-text">
              <h2>Organic & Bio-Integration Strategy</h2>
              <p>We blend traditional carbon-rich manures with modern chelation science for sustainable ROI.</p>
            </div>
          </div>
          <div className="fp-strategy-actions">
            <div className="fp-action-pill"><Zap size={16} /> Integrated Management</div>
            <div className="fp-action-pill"><CheckCircle2 size={16} /> Lab-Tested Quality</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FertilizerPortfolio;
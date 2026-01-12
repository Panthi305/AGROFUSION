import React from "react";
import { motion } from "framer-motion";
import {
  Leaf, Microscope, Award, Recycle,
  FileText, CheckCircle2, MoveRight, ShieldCheck
} from "lucide-react";
import "./OrganicPortfolio.css";

const OrganicPortfolio = () => {
  const sections = [
    {
      title: "Traditional Organic Inputs",
      icon: <Leaf />,
      color: "#059669",
      subsets: [
        { h: "Panchagavya Products", p: ["Cow formulations", "Growth promotion", "Disease resistance"] },
        { h: "Jivamrut & Beejamrut", p: ["Microbial cultures", "Soil health", "Traditional recipes"] },
        { h: "Plant-based Products", p: ["Neem preparations", "Indigenous knowledge"] }
      ]
    },
    {
      title: "Microbial Consortia",
      icon: <Microscope />,
      color: "#2563eb",
      subsets: [
        { h: "Nitrogen Fixers", p: ["Rhizobium for legumes", "Azotobacter", "Azospirillum"] },
        { h: "Phosphate Solubilizers", p: ["PSB cultures", "Fungal mobilization"] },
        { h: "Growth Promoters", p: ["PGPR formulations", "Mycorrhizal cultures"] }
      ]
    },
    {
      title: "Certified Organic Inputs",
      icon: <Award />,
      color: "#d97706",
      subsets: [
        { h: "NPOP Certified", p: ["Approved fertilizers", "Pest management aids", "Documentation"] },
        { h: "Export-Grade", p: ["EU Organic compliant", "USDA Certified", "JAS Standards"] }
      ]
    },
    {
      title: "Waste-to-Input Solutions",
      icon: <Recycle />,
      color: "#7c3aed",
      subsets: [
        { h: "Compost Products", p: ["Vermicompost", "City compost", "Enriched products"] },
        { h: "Bio-gas Slurry", p: ["Nutrient-rich slurry", "Liquid formulations"] },
        { h: "Certification Support", p: ["Market linkage", "Strategic guidance"] }
      ]
    }
  ];

  return (
    <section className="op-organic-root">
      {/* HERO SECTION - CLINICAL & BOLD */}
      <div className="op-organic-hero">
        <div className="op-hero-overlay"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="op-hero-content"
        >
          <h1>Organic Transition <br /><span className="op-text-green">Management System</span></h1>
          <div className="op-hero-pills">
            <div className="op-pill">PKVY Aligned</div>
            <div className="op-pill">NMSA Support</div>
            <div className="op-pill">State Organic Missions</div>
          </div>
        </motion.div>
      </div>

      <div className="op-organic-container">
        {/* THE GRID */}
        <div className="op-organic-grid">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              className="op-organic-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="op-card-head">
                <div
                  className="op-icon-shield"
                  style={{ "--accent": section.color }}
                >
                  {section.icon}
                </div>
                <h3>{section.title}</h3>
              </div>

              <div className="op-card-body-matrix">
                {section.subsets.map((sub, sidx) => (
                  <div className="op-matrix-col" key={sidx}>
                    <label>{sub.h}</label>
                    <ul className="op-check-list">
                      {sub.p.map((item, i) => (
                        <li key={i}><CheckCircle2 size={14} /> {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM ACTION BAR */}
        <motion.div
          className="op-compliance-bar"
          whileHover={{ scale: 1.01 }}
        >
          <div className="op-bar-left">
            <div className="op-bar-icon"><ShieldCheck size={32} /></div>
            <div className="op-bar-info">
              <h4>Global Compliance & Certification Support</h4>
              <p>Ensuring NPOP, USDA, EU Organic, and JAS compliance for domestic and export markets.</p>
            </div>
          </div>
          <button className="op-btn-primary">
            Get Certified <MoveRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default OrganicPortfolio;
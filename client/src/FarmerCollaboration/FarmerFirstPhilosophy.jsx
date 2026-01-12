import React from "react";
import { motion } from "framer-motion";
import { Leaf, Users, Cpu, TrendingUp, ShieldCheck, Target, Ship } from "lucide-react";
import "./FarmerFirstPhilosophy.css";
import brandLogo from '../assets/Farmers/flogo.png';

const FarmerFirstPhilosophy = () => {
  const principles = [
    { icon: <Users size={22} />, title: "Farmer-Centric", desc: "Service built on real needs" },
    // { icon: <Leaf size={22} />, title: "Sustainable", desc: "Long-term growth models" },
    { icon: <Cpu size={22} />, title: "Agro-Fusion", desc: "Tech fused with wisdom" },
    { icon: <TrendingUp size={22} />, title: "Market-Link", desc: "Direct global access" },
    { icon: <ShieldCheck size={22} />, title: "Risk-Guard", desc: "Full crop-cycle support" },
    {
      icon: <Ship size={22} />,
      title: "Export Facilities",
      desc: "End-to-end export infrastructure & logistics",
    },
  ];

  return (
    <section className="ffp-section-wrapper">

      <div className="ffp-main-container">
        <div className="brand-identity-anchor">
          <motion.div
            className="brand-logo-container"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* The New Image Badge */}
            <div className="brand-badge-box">
              <img
                src={brandLogo}
                alt="Jai Kishan Logo"
                className="brand-badge-image"
              />
            </div>


          </motion.div>
        </div>
        {/* HEADER SECTION */}
        <header className="ffp-visual-header">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="ffp-title-area"
          >
            <h2 className="ffp-main-heading">
              Partnerships That <br /> <span>Transform</span> Agriculture
            </h2>
          </motion.div>

          <motion.p
            className="ffp-lead-text"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Sustainable agriculture begins with empowered farmers. Our model
            fuses traditional wisdom with frontier technology to drive
            prosperity across the ecosystem.
          </motion.p>
        </header>

        {/* BENTO PRINCIPLES */}
        <div className="ffp-principles-grid">
          {principles.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="ffp-principle-card"
            >
              <div className="ffp-icon-box">{item.icon}</div>
              <div className="ffp-card-content">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FUSION SPLIT GRID */}
        <div className="ffp-split-layout">

          {/* STRATEGIC MANDATE */}
          <motion.div
            className="ffp-mandate-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="ffp-panel-top">
              <Target size={24} className="ffp-lime-icon" />
              <h3>Strategic Mandate</h3>
            </div>
            <div className="ffp-list-container">
              {[
                "Affordable input access & modern mechanization",
                "Scientific crop advisory & digital enablement",
                "National retail + B2B supply chain participation",
                "Government mission enablement via cooperation",
                "Value-added processing & international exports"
              ].map((text, i) => (
                <div key={i} className="ffp-list-item">
                  <span className="ffp-slash">/</span>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* IMPACT METRICS */}
          <motion.div
            className="ffp-impact-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="ffp-panel-header">
              <h3>Measurable Impact</h3>
              <div className="ffp-dots"><span></span><span></span><span></span></div>
            </div>

            <div className="ffp-metrics-bento">
              <div className="ffp-metric-item">
                <strong>18–35%</strong>
                <span>Income Growth</span>
              </div>
              <div className="ffp-metric-item ffp-bg-soft">
                <strong>8–22%</strong>
                <span>Cost Reduction</span>
              </div>
              <div className="ffp-metric-item ffp-bg-soft">
                <strong>12–35%</strong>
                <span>Yield Improvement</span>
              </div>
              <div className="ffp-metric-item">
                <strong>5–12%</strong>
                <span>Price Premium</span>
              </div>
              <div className="ffp-metric-full">
                <div className="ffp-flex-between">
                  <strong>Sustainability</strong>
                  <span>Eco-Economic Balance</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FarmerFirstPhilosophy;
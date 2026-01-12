import React from "react";
import { motion } from "framer-motion";
import {
  Cpu, Smartphone, Wifi,
  Binary, MoveRight, Layers, Orbit, Scan, Database, Terminal
} from "lucide-react";
import "./PrecisionTechPortfolio.css";

const PrecisionTechPortfolio = () => {
  const techNodes = [
    {
      title: "Aerial Robotics & Drone Tech",
      icon: <Scan />,
      id: "01",
      color: "#10b981",
      data: [
        { h: "Deployment Models", p: ["Spraying drones (10L-30L)", "Multi-spectral survey", "Mapping payload options"] },
        { h: "Operational Units", p: ["Precision spraying", "Fertigation application", "Real-time monitoring"] },
        { h: "Control Layer", p: ["Pilot training", "Maintenance & repair", "Regulatory compliance"] }
      ]
    },
    {
      title: "Surgical Precision Ag",
      icon: <Cpu />,
      id: "02",
      color: "#059669",
      data: [
        { h: "Sensor Matrix", p: ["Soil moisture arrays", "Weather stations", "Enviro-monitoring"] },
        { h: "Automation Core", p: ["Automated irrigation", "Climate control", "Remote monitoring"] },
        { h: "Analytics Engine", p: ["Farm management Soft", "Decision support", "Resource optimization"] }
      ]
    },
    {
      title: "Digital Integration Hub",
      icon: <Smartphone />,
      id: "03",
      color: "#34d399",
      data: [
        { h: "Interface Layer", p: ["Multilingual Farmer App", "Input ordering", "Advisory access"] },
        { h: "Governance", p: ["Farm record keeping", "Financial tracking", "Performance monitoring"] },
        { h: "Bridge Systems", p: ["Govt scheme API", "Market linkage", "Financial service hub"] }
      ]
    },
    {
      title: "IoT & Smart Automation",
      icon: <Wifi />,
      id: "04",
      color: "#065f46",
      data: [
        { h: "Active Systems", p: ["Automated greenhouses", "Smart irrigation", "Processing units"] },
        { h: "Visibility Layer", p: ["Real-time crop tracking", "Equipment telemetry", "SCM Visibility"] },
        { h: "Enterprise Stack", p: ["Integrated ERP", "CRM platforms", "Big Data support"] }
      ]
    }
  ];

  return (
    <section className="ptp-precision-tech-root">
      <div className="ptp-tech-container">

        {/* HEADER: TECH BLUEPRINT STYLE */}
        <header className="ptp-tech-header">
          <h1>Integrated <span>Precision</span> Ecosystem</h1>
          <p>Orchestrating the surgical intersection of Aerial Robotics, IoT, and Big Data.</p>
        </header>

        {/* INTERACTIVE TECH BLADES */}
        <div className="ptp-tech-blade-stack">
          {techNodes.map((node, idx) => (
            <motion.div
              key={idx}
              className="ptp-tech-blade"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="ptp-blade-id-column">
                <span className="ptp-node-id">{node.id}</span>
                <div className="ptp-node-line" style={{ background: node.color }}></div>
              </div>

              <div className="ptp-blade-main">
                <div className="ptp-node-info">
                  <div className="ptp-node-icon-wrap" style={{ "--glow": node.color }}>
                    {node.icon}
                  </div>
                  <h3>{node.title}</h3>
                </div>

                <div className="ptp-node-data-grid">
                  {node.data.map((spec, sidx) => (
                    <div className="ptp-data-column" key={sidx}>
                      <label>{spec.h}</label>
                      <ul>
                        {spec.p.map((item, i) => (
                          <li key={i}>
                            <Binary size={11} className="ptp-binary-dot" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>


            </motion.div>
          ))}
        </div>

        {/* ARCHITECTURE PANEL */}
        <motion.div className="ptp-architecture-footer" whileHover={{ scale: 1.01 }}>
          <div className="ptp-panel-accent"></div>
          <div className="ptp-panel-content">
            <div className="ptp-panel-left">
              <Database className="ptp-panel-icon" size={32} />
              <div className="ptp-panel-text">
                <h4>Centralized Ecosystem Protocol</h4>
                <p>Synchronizing edge computing with centralized ERP/SCM for real-time decision support.</p>
              </div>
            </div>
            <button className="ptp-view-architecture-btn">System Architecture <Layers size={16} /></button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PrecisionTechPortfolio;
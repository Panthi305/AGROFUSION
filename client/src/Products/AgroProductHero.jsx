import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import "./AgroProductHero.css";

const blades = [
  {
    id: "seeds",
    title: "Genetic",
    subtitle: "Superior Seeds",
    img: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80",
    color: "#facc15"
  },
  {
    id: "tech",
    title: "Precision",
    subtitle: "Agri-Technology",
    img: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80",
    color: "#4ade80"
  },
  {
    id: "care",
    title: "Organic",
    subtitle: "Crop Protection",
    img: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80",
    color: "#60a5fa"
  }
];

const AgroImmersiveHero = () => {
  const [active, setActive] = useState(0); // Default to 0 (first blade) so it looks good on load

  return (
    <section className="aph-immersive-hero">
      {/* 1. Background Layer (Now on top of blades) */}
      <div className="aph-hero-base-layer">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="aph-main-title-container"
        >
          <h1>INDIA'S <span>AGRI</span> COMMAND</h1>
        </motion.div>
      </div>

      {/* 2. Interactive Blades */}
      <div className="aph-blades-container">
        {blades.map((blade, idx) => (
          <motion.div
            key={blade.id}
            className={`aph-blade ${active === idx ? "aph-active" : ""}`}
            onMouseEnter={() => setActive(idx)}
            onMouseLeave={() => setActive(null)}
            initial={{ height: "0%" }}
            animate={{ height: "100%" }}
            transition={{ delay: 0.2 * idx, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="aph-blade-img-wrapper">
              <img src={blade.img} alt={blade.title} />
              <div className="aph-blade-overlay" />
            </div>

            <div className="aph-blade-content">
              <div className="aph-blade-header">
                <span className="aph-idx">0{idx + 1}</span>
                <h3>{blade.title}</h3>
              </div>

              <AnimatePresence>
                {active === idx && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="aph-blade-details"
                  >
                    <p>{blade.subtitle}</p>
                    <button className="aph-blade-btn" style={{ borderColor: blade.color }}>
                      Explore <ArrowUpRight size={16} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AgroImmersiveHero;
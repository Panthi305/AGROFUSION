import React from "react";
import { motion } from "framer-motion";
import "./FarmerCollaborationHero.css";
import hfHeroVideo from "./../assets/Farmers/hfhero1.mp4";

const FarmerCollaborationHero = () => {
  return (
    <section className="ffch-cinema-hero-root">

      {/* Background Video Layer - Organic Bleed, not a window */}
      <div className="ffch-cinema-video-bg">
        <video autoPlay muted loop playsInline preload="auto">
          <source src={hfHeroVideo} type="video/mp4" />
        </video>
      </div>


      <div className="ffch-cinema-container">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* <span className="ffch-cinema-tag">Established 2026 • Premier</span> */}
          <h1 className="ffch-cinema-title">
            Cultivating
            <i>Prosperity.</i>
          </h1>

          <p className="ffch-cinema-para">
            Moving beyond technology to build lasting legacies.
            An elite ecosystem bridging ancestral farming heritage
            with the precision of global intelligence.
          </p>

          <div className="ffch-cinema-btn-group">
            <button className="ffch-btn-cinema-main">Start Your Journey</button>
            <a href="#join" style={{
              fontFamily: 'Cormorant Garamond', fontSize: '22px',
              color: '#0f1a14', textDecoration: 'none', borderBottom: '1px solid #0f1a14'
            }}>
              Join the Network
            </a>
          </div>
        </motion.div>
      </div>

      {/* Vertical Brand Signature */}
      <div style={{
        position: 'absolute', right: '40px', top: '50%',
        writingMode: 'vertical-rl', fontSize: '10px',
        letterSpacing: '12px', textTransform: 'uppercase',
        opacity: 0.3, color: '#c5a059', fontWeight: '800',
        transform: 'translateY(-50%)'
      }}>
        Jigisha Infotech • MMXXVI
      </div>
    </section>
  );
};

export default FarmerCollaborationHero;
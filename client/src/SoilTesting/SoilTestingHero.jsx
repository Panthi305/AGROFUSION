import React, { useEffect, useRef } from "react";
import "./SoilTestingHero.css";
import shero from "./../assets/Soil/shero.jpeg";
const SoilTestingHero = () => {
  const bgRef = useRef(null);
  const textureRef = useRef(null);

  useEffect(() => {
    const handleParallax = () => {
      const scrolled = window.scrollY;

      // Move background slightly (Slow - 20% of scroll)
      if (bgRef.current) {
        bgRef.current.style.transform = `translate3d(0, ${scrolled * 0.2}px, 0)`;
      }

      // Move texture layer faster (Fast - 50% of scroll)
      if (textureRef.current) {
        textureRef.current.style.transform = `translate3d(0, ${scrolled * 0.5}px, 0)`;
      }
    };

    window.addEventListener("scroll", handleParallax);
    return () => window.removeEventListener("scroll", handleParallax);
  }, []);

  return (
    <section className="soil-parallax-viewport">
      {/* LAYER 1: Main Background Image */}
      <div className="soil-parallax-bg" ref={bgRef}>
        <img
          src={shero}
          alt="Agriculture Field"
        />
        <div className="soil-parallax-overlay"></div>
      </div>

      {/* LAYER 2: Decorative Floating Texture */}
      <div className="soil-texture-layer" ref={textureRef}></div>

      {/* LAYER 3: Foreground Content */}
      <div className="soil-parallax-content">
        <div className="soil-hero-inner">
          <div className="soil-hero-text">
            <span className="hero-tag">Smart Farming Solutions</span>
            <h1 className="hero-title">
              Know Your Soil, <br />
              <span className="title-outline">Grow More</span> with Less
            </h1>
            <p className="hero-sub">
              Transform your farming with data-driven soil science. Reduce costs
              by 40% while increasing your yield with personalized advisory.
            </p>
            <div className="hero-btns">
              <button className="btn-main">Get Test Kit</button>
              <button className="btn-sub">View Sample Report</button>
            </div>
          </div>

          <div className="hero-stats-grid">
            <div className="stat-card">
              <h3>25–35%</h3>
              <p>Higher Yields</p>
            </div>
            <div className="stat-card">
              <h3>20–40%</h3>
              <p>Cost Reduction</p>
            </div>
            <div className="stat-card">
              <h3>50k+</h3>
              <p>Samples Tested</p>
            </div>
            <div className="stat-card">
              <h3>98%</h3>
              <p>Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoilTestingHero;
import React from "react";
import "./SolarHero.css";

const SolarHero = () => {
  return (
    <section className="solar-hero-section">
      <div className="solar-hero-parallax-bg"></div>
      
      <div className="solar-hero-overlay">
        <div className="solar-hero-container">
          <div className="solar-hero-content">
            {/* H1 and P will now animate automatically via CSS */}
            <h1>Harness Solar Power for Sustainable Farming</h1>
            <p>
              Transform your irrigation with renewable energy solutions powered by <strong>Jigisha Green</strong>. 
              Reliable water supply while reducing grid dependency and operational costs.
            </p>
            
            <div className="solar-hero-buttons">
              <button 
                className="solar-btn-primary" 
                onClick={() => (window.location.href = "/solar-solutions")}
              >
                Explore Solutions
              </button>
              <button 
                className="solar-btn-secondary" 
                onClick={() => (window.location.href = "/contact")}
              >
                Site Assessment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarHero;
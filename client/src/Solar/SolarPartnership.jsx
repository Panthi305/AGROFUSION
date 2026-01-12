import React from "react";
import "./SolarPartnership.css";
import soloar1 from "./../assets/Solar/solar1.jpeg";
const SolarPartnership = () => {
  return (
    <section className="solar-partnership-section">
      <div className="solar-partnership-container">

        <div className="solar-partnership-header">
          <span className="accent-text">Jigisha Group Synergy</span>
          <h2>Powered by Renewable Energy Expertise</h2>
        </div>

        <div className="solar-partnership-main">
          {/* Image Canvas with optimized resolution */}
          <div className="solar-image-canvas">
            <img
              src={soloar1}
              alt="Sustainable Solar Irrigation"
            />
            <div className="image-glass-overlay">
              <p>Leveraging Jigisha Green's expertise to bring cutting-edge solar irrigation solutions to every farm.</p>
            </div>
          </div>

          <div className="solar-data-grid">
            <div className="data-card">
              <div className="card-header">01. Synergy Benefits</div>
              <ul>
                <li>Advanced solar pump systems</li>
                <li>Jigisha Engineering Manufacturing</li>
                <li>Component Supply & Infrastructure</li>
                <li>International Expansion</li>
              </ul>
            </div>

            <div className="data-card">
              <div className="card-header">02. Green Contribution</div>
              <ul>
                <li>Solar pumps and solar dryers</li>
                <li>Green hydrogen pilot projects</li>
                <li>Carbon credit programs</li>
                <li>Energy efficiency optimization</li>
              </ul>
            </div>

            <div className="data-card">
              <div className="card-header">03. Ecosystem Advantage</div>
              <ul>
                <li>Vertical Integration</li>
                <li>Cost Efficiency & Scale</li>
                <li>Quality Assurance Standards</li>
                <li>Comprehensive Service Network</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarPartnership;
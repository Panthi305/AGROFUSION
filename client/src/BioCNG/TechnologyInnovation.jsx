import React from "react";
import "./TechnologyInnovation.css";

const TechnologyInnovation = () => {
  return (
    <section className="bio-tech">
      <div className="bio-tech-container">
        <h2>Next-Generation Bio-Energy Solutions</h2>
        <p className="bio-tech-subtitle">
          AgroFusion is shaping the future of clean energy</p>

        <div className="bio-tech-grid">
          {/* AI Digesters */}
          <div className="bio-tech-card">
            <h3>AI-Powered Digesters</h3>
            <ul>
              <li>IoT sensors for real-time process optimization</li>
              <li>Predictive maintenance & fault alerts</li>
              <li>Automatic feedstock ratio adjustment</li>
              <li>Live efficiency tracking</li>
            </ul>
          </div>

          {/* Mobile Bio-CNG */}
          <div className="bio-tech-card">
            <h3>Mobile Bio-CNG Units</h3>
            <ul>
              <li>Containerized 5 TPD modular plants</li>
              <li>Deploy across seasonal waste hotspots</li>
              <li>72-hour rapid setup & commissioning</li>
              <li>Plug-and-play architecture</li>
            </ul>
          </div>

          {/* Hybrid Energy */}
          <div className="bio-tech-card">
            <h3>Hybrid Energy Systems</h3>
            <ul>
              <li>Bio-CNG + Solar integrated plants</li>
              <li>24×7 green energy generation</li>
              <li>Grid injection & captive power options</li>
              <li>Smart load balancing</li>
            </ul>
          </div>

          {/* Hydrogen */}
          <div className="bio-tech-card">
            <h3>Waste-to-Hydrogen Pilot</h3>
            <ul>
              <li>Second-stage Bio-CNG to Hydrogen</li>
              <li>Fuel cell vehicle applications</li>
              <li>In partnership with Jigisha Green</li>
              <li>Zero-emission output profile</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyInnovation;
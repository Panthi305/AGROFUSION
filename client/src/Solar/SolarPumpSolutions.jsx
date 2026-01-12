import React, { useEffect } from "react";
import "./SolarPumpSolutions.css";

const SolarPumpSolutions = () => {
  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="solar-solutions-section">
      <div className="solar-solutions-container">
        
        {/* HEADER */}
        <div className="solar-solutions-header reveal">
          <span className="serial-no">CORE SYSTEMS</span>
          <h2>Complete Solar Pumping Systems</h2>
          <p>
            Explore our full range of solar pump solutions for farms of all
            sizes with smart technology integration and energy-efficient designs.
          </p>
        </div>

        {/* SINGLE ROW CONTAINER */}
        <div className="solar-solutions-main-row reveal">
          
          {/* PANEL 1 */}
          <div className="solutions-panel">
            <div className="panel-badge">Range & Categories</div>
            <h3>System Performance</h3>
            
            <div className="spec-group">
              <strong>Pump Categories</strong>
              <ul>
                <li>Submersible Pumps</li>
                <li>Surface Pumps</li>
                <li>Floating Pumps</li>
                <li>Storage Systems</li>
              </ul>
            </div>

            <div className="spec-group">
              <strong>Capacity & Tech</strong>
              <ul>
                <li>Small to Large Farms</li>
                <li>Advanced Motor Tech</li>
                <li>Smart Controllers</li>
                <li>Battery Backups</li>
              </ul>
            </div>
          </div>

          {/* PANEL 2 */}
          <div className="solutions-panel">
            <div className="panel-badge">Hardware Standards</div>
            <h3>Technical Components</h3>

            <div className="spec-group">
              <strong>Modules & Sets</strong>
              <ul>
                <li>High-efficiency Panels</li>
                <li>Weather-resistant</li>
                <li>Corrosion-resistant</li>
                <li>Low Maintenance</li>
              </ul>
            </div>

            <div className="spec-group">
              <strong>Control & Install</strong>
              <ul>
                <li>MPPT Tracking</li>
                <li>Fault Detection</li>
                <li>Mounting Kits</li>
                <li>Safety Equipment</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SolarPumpSolutions;
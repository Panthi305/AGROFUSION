import React from "react";
import "./SafetyInsurance.css";

const SafetyInsurance = () => {
  return (
    <section className="safety-section">
      <div className="safety-container">
        
        {/* EXECUTIVE HEADER */}
        <div className="safety-exec-header reveal">
          <div className="header-left">
            <span className="eyebrow">Institutional Standards</span>
            <h2 className="safety-title">Safety & Risk <br/>Management</h2>
            <p className="safety-subtitle">
              We operate under a zero-compromise safety framework, backed by 
              comprehensive insurance coverage to mitigate operational risk.
            </p>
          </div>
          <div className="header-right">
            <div className="image-container">
              <img 
                src="https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="Professional Site Safety" 
              />
              <div className="experience-tag reveal">
                <span className="tag-number">100%</span>
                <span className="tag-text">Compliance Rate</span>
              </div>
            </div>
          </div>
        </div>

        {/* STRUCTURED GRID */}
        <div className="standards-grid reveal">
          {[
            { 
              cat: "Asset Protection", 
              title: "Equipment Safety", 
              items: ["Daily digital inspection logs", "Quarterly mechanical audits", "OEM-standard recertification"] 
            },
            { 
              cat: "Human Capital", 
              title: "Operator Safety", 
              items: ["PPE compliance monitoring", "Bi-annual health assessments", "Full liability coverage"] 
            },
            { 
              cat: "Site Security", 
              title: "Farm Safety", 
              items: ["Preliminary risk assessment", "Standardized safety briefings", "Emergency response protocols"] 
            }
          ].map((item, idx) => (
            <div className="standard-card" key={idx}>
              <span className="card-category">{item.cat}</span>
              <h3>{item.title}</h3>
              <div className="card-divider"></div>
              <ul>
                {item.items.map((li, i) => <li key={i}>{li}</li>)}
              </ul>
            </div>
          ))}
        </div>

        {/* PROCESS PIPELINE */}
        <div className="process-box reveal">
          <div className="process-info">
            <h3>Claims Resolution</h3>
            <p>Our expedited claims process ensures business continuity.</p>
          </div>
          <div className="process-pipeline">
            {["Reporting", "Evidence", "Assessment", "Approval", "Settlement"].map((step, i) => (
              <div className="pipeline-step" key={i}>
                <div className="step-circle">{i + 1}</div>
                <span className="step-label">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CERTIFICATION FOOTER */}
        

      </div>
    </section>
  );
};

export default SafetyInsurance;
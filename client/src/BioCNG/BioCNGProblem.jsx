import React from "react";
import "./BioCNGProblem.css";

const BioCNGProblem = () => {
  return (
    <section className="bio-cng-problem"> 
      <div className="bio-cng-problem__container"> 
        {/* Section Title */}
        <h2>The Problem & Opportunity</h2>

        {/* Solution Visual */}
        <div className="bio-cng-problem__visual">
          <div className="step">Agricultural Waste</div>
          <div className="arrow">→</div>
          <div className="step">Collection & Processing</div>
          <div className="arrow">→</div>
          <div className="step">Bio-CNG Plant</div>
        </div>

        {/* Bio-CNG Output */}
        <div className="bio-cng-outputs">
          <div className="output">
            <h3>Bio-CNG</h3>
            <p>Clean fuel for vehicles, cooking, electricity</p>
          </div>
          <div className="output">
            <h3>Organic Fertilizer</h3>
            <p>Soil enrichment, replaces chemical fertilizers</p>
          </div>
        </div>

        {/* Environmental Impact */}
        <div className="bio-cng-impact">
          <h3>Environmental Impact</h3>
          <div className="impact-badges">
            <div className="badge">Reduces CO₂ emissions by 95% vs burning</div>
            <div className="badge">1 TPD Bio-CNG plant = 2,000 trees' carbon sequestration</div>
            <div className="badge">Eliminates methane from decomposing waste</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioCNGProblem;

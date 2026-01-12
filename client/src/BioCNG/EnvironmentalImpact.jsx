import "./EnvironmentalImpact.css";

const EnvironmentalImpact = () => {
  return (
    <section className="env-impact"> 
      <div className="env-container"> 
        <h2>Generate Revenue While Saving the Planet</h2>

        {/* METRICS DASHBOARD */}
        <div className="impact-dashboard">
          <h3>Per 10 TPD Bio-CNG Plant (Annual Impact)</h3>

          <div className="metrics-grid">
            <div className="metric-card">
              <span className="metric-value">2,800</span>
              <p>tons CO₂ Reduced<br /><small>(≈ 4,500 trees)</small></p>
            </div>

            <div className="metric-card">
              <span className="metric-value">500</span>
              <p>tons Methane Avoided<br /><small>(25× CO₂ potency)</small></p>
            </div>

            <div className="metric-card">
              <span className="metric-value">1,200</span>
              <p>tons Chemical Fertilizer Offset</p>
            </div>

            <div className="metric-card">
              <span className="metric-value">4,380</span>
              <p>Households Powered<br /><small>(Clean Cooking Fuel)</small></p>
            </div>

            <div className="metric-card">
              <span className="metric-value">150+</span>
              <p>CNG Vehicles Powered / Year</p>
            </div>
          </div>
        </div>

        {/* CARBON CREDIT PROGRAM */}
        <div className="carbon-program">
          <h3>Carbon Credit Program</h3>

          <div className="program-grid">
            <div className="program-card">
              <h4>Registration</h4>
              <p>UNFCCC & Gold Standard registration for global recognition</p>
            </div>

            <div className="program-card">
              <h4>Monitoring</h4>
              <p>IoT sensors track waste processed & gas generated</p>
            </div>

            <div className="program-card">
              <h4>Verification</h4>
              <p>Third-party audits & independent verification agencies</p>
            </div>

            <div className="program-card">
              <h4>Monetization</h4>
              <p>Credits sold on international voluntary & compliance markets</p>
            </div>

            
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default EnvironmentalImpact;

import "./SolarIrrigationCTA.css";

const SolarIrrigationCTA = () => {
  return (
    <section className="si-cta-section">
      <div className="si-cta-container">

        {/* HEADER */}
        <div className="si-cta-header">
          <h2>Power Your Farm with Renewable Energy</h2> 
          <p>
            <em>Join Thousands of Farmers Harnessing Solar Power for Sustainable Agriculture</em>
          </p>
        </div>

        

        {/* CTA BUTTON */}
        <div className="si-cta-action">
          <button
            className="si-cta-btn"
            onClick={() => (window.location.href = "/contact")}
          >
            Contact for Solar Pump Advisory
          </button>
        </div>

      </div>
    </section>
  );
};

export default SolarIrrigationCTA;

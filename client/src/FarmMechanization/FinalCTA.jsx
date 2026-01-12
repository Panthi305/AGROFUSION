import "./FinalCTA.css";

const FinalCTA = () => {
  return (
    <section className="final-cta">
      <div className="final-cta-overlay"></div>

      <div className="final-cta-container">
        <h2 className="final-cta-title">
          Start Your Mechanization Journey Today
        </h2>

        <p className="final-cta-headline">
          Join <strong>50,000+ Farmers</strong> Who Save Time, Reduce Costs &
          Increase Profits with Our Equipment Rental
        </p>

        <div className="final-cta-buttons">
          <a href="/equipment-rental" className="cta-btn primary">
            Browse Equipment
          </a>

          <a href="/contact" className="cta-btn secondary">
            Talk to an Expert
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

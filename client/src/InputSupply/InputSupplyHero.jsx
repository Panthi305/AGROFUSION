import "./InputSupplyHero.css";

const InputSupplyHero = () => {
  return (
    <section className="input-hero-section">
      <div className="input-hero-parallax">
        <div className="input-hero-overlay"></div>
      </div>

      <div className="input-hero-container">
        <div className="input-hero-content">
          <span className="input-hero-tag">Certified Quality</span>
          <h1>Premium Agricultural Inputs for Maximum Yield</h1>

          <p>
            India’s largest certified input supply network. Get genuine seeds,
            fertilizers, and crop care products backed by scientific advisory.
          </p>

          <div className="input-hero-actions">
            <a href="/contact" className="input-hero-primary">
              Explore Solutions
            </a>
            <a href="/contact" className="input-hero-secondary">
              Talk to an Expert
            </a>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default InputSupplyHero;
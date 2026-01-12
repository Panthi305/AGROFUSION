import "./FPOCooperativeHero.css";

const FPOCooperativeHero = () => {
  return (
    <section className="fpo-hero-section">
      {/* Background Video */}
      <video
        className="fpo-hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/fpo-cooperative-hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="fpo-hero-overlay"></div>

      <div className="fpo-hero-content-wrapper">
        <div className="fpo-hero-content">
          <h1 className="fpo-hero-heading">
            Transform Your Farmer Group into a Profitable Enterprise
          </h1>

          <p className="fpo-hero-subheading">
            Comprehensive institutional strengthening for Farmer Producer
            Organizations and Cooperative Societies. Build sustainable,
            market-ready farmer collectives with our end-to-end support program.
          </p>

          <div className="fpo-hero-cta-group">
            <a href="/services/fpo-programs" className="fpo-hero-primary-btn">
              Explore FPO Programs
            </a>

            <a href="/contact" className="fpo-hero-secondary-btn">
              Get Institutional Assessment
            </a>
          </div>

          <ul className="fpo-hero-stats">
            <li>✓ 500+ FPO Partnerships Target</li>
            <li>✓ 100+ Cooperative Societies Engaged</li>
            <li>✓ Complete Institutional Support</li>
            <li>✓ Government Scheme Facilitation</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FPOCooperativeHero;

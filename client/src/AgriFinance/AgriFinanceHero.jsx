import "./AgriFinanceHero.css";

const AgriFinanceHero = () => {
  return (
    <section className="af-hero-section">
      {/* BACKGROUND VIDEO (Online Source) */}
      <div className="af-hero-video">
        <video autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000">
          <source src="https://assets.mixkit.co/videos/preview/mixkit-agriculture-drone-flying-over-a-field-1577-large.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="af-hero-content">
        <h1>Financial Solutions for Every Farming Need</h1>
        <p>
          Access credit, insurance, and financial services tailored for agriculture
          through Jigisha Infin. Transform your farming operations with customized
          financial products.
        </p>

        <div className="af-hero-cta">
          
          <button
            className="af-cta-secondary"
            onClick={() => (window.location.href = "/check-eligibility")}
          >
            Check Your Eligibility
          </button>
        </div>
      </div>
    </section>
  );
};

export default AgriFinanceHero;
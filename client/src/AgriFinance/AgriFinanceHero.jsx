import "./AgriFinanceHero.css";
import heroImg from "./../assets/Service/Agrifinace/image.png";

const AgriFinanceHero = () => {
  return (
    <section
      className="af-hero-section"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* OVERLAY */}
      <div className="af-hero-overlay"></div>

      {/* CONTENT */}
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

// In FinalCTA.jsx
import "./FinalCTA.css";

const FinalCTA = () => {
  return (
    <section className="final-cta">
      {/* This div handles the brand color tint over the parallax image */}
      <div className="final-cta-overlay"></div>

      <div className="final-cta-container">
        <h2>Join India’s Green Energy Revolution</h2>

        <p>
          Be part of <strong>500+ Bio-CNG Plants</strong> we’re building across
          India by <strong>2030</strong>. Transform agricultural waste into clean
          energy, stable income, and a sustainable future.
        </p>

        <div className="final-cta-actions">
          <a href="/contact" className="cta-primary-b">
            Start Your Bio-CNG Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
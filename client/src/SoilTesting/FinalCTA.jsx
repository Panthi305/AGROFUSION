import "./FinalCTA.css";

const FinalCTA = () => {
  return (
    <section className="final-cta-section">
      <div className="final-cta-container">
        <div className="final-cta-header">
          <h2>Stop Guessing, Start Testing</h2>
          <p>
            Join <strong>50,000+ farmers</strong> who increased profits with
            scientific soil management and precision nutrition.
          </p>
        </div>

       

        <div className="final-cta-actions">
          <a href="/contact" className="cta-primary">
            Order Soil Test Kit Now
            <span className="cta-counter">4,238 kits delivered this month</span>
          </a>

          <a href="/contact" className="cta-secondary">
            Book Free Soil Health Consultation
          </a>

          <a href="/contact" className="cta-tertiary">
            Download Complete Testing Catalog
          </a>
        </div>

        <div className="final-cta-contacts">
          <div className="contact-item">
            <span className="contact-label">Soil Helpline</span>
            <span className="contact-value">1800-SOIL-LAB (1800-764-5522)</span>
          </div>

          <div className="contact-item">
            <span className="contact-label">WhatsApp Reports</span>
            <span className="contact-value">
              +91-98765-43213 (Send “SOIL”)
            </span>
          </div>

          <div className="contact-item">
            <span className="contact-label">Email</span>
            <span className="contact-value">soil@agrofusion.in</span>
          </div>

          <div className="contact-item">
            <span className="contact-label">Lab Visits</span>
            <span className="contact-value">
              Bhopal • Delhi • Bengaluru • Hyderabad
            </span>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

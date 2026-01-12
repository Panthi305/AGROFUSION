import "./ProcessingCTA.css";

const ProcessingCTA = () => {
  return (
    <section className="proc-cta-section">
      <div className="proc-cta-container">

        {/* HEADER */}
        <div className="proc-cta-header">
          <h2>Transform Your Farm Produce into Market Success</h2>
          <p>
            <em>Join 500+ FPOs and Thousands of Farmers in Our Processing & Market Linkage Network</em>
          </p>
        </div>

        {/* KEY BENEFITS */}
        <div className="proc-cta-benefits">
          <div className="proc-cta-benefit">
            ✓ Better Prices: 8-12% premium over local markets
          </div>
          <div className="proc-cta-benefit">
            ✓ Reduced Losses: Post-harvest loss reduction from 15% to 3-5%
          </div>
          <div className="proc-cta-benefit">
            ✓ Market Access: Domestic and international buyer networks
          </div>
          <div className="proc-cta-benefit">
            ✓ Value Addition: 15-25% increased income through processing
          </div>
          <div className="proc-cta-benefit">
            ✓ Risk Mitigation: Price and market risk reduction
          </div>
        </div>

       

        {/* CTA BUTTONS */}
        <div className="proc-cta-buttons">
          <button
            className="proc-cta-btn"
            onClick={() => (window.location.href = "/contact")}
          >
            Get Processing Solutions Assessment
          </button>
          
        </div>

      </div>
    </section>
  );
};

export default ProcessingCTA;

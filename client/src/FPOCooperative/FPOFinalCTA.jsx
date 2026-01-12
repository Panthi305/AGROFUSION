import "./FPOFinalCTA.css";

const FPOFinalCTA = () => {
  return (
    <section className="fpocta-section">
      <div className="fpocta-container">

        {/* CONTENT */}
        <div className="fpocta-content">
          <h2>Build Strong, Sustainable Farmer Institutions</h2>
          <p className="fpocta-headline">
            Join <strong>500+ FPOs and Cooperatives</strong> transforming agriculture
            through collective action and institutional excellence.
          </p>

          {/* BENEFITS */}
          <div className="fpocta-benefits">
            <div className="fpocta-benefit">🏛️ <span>Institutional Strength</span><br />Professional management systems</div>
            <div className="fpocta-benefit">🤝 <span>Market Power</span><br />Better bargaining and negotiation</div>
            <div className="fpocta-benefit">⚙️ <span>Resource Access</span><br />Collective resource utilization</div>
            <div className="fpocta-benefit">🛡️ <span>Risk Mitigation</span><br />Shared risk management</div>
            <div className="fpocta-benefit">🌱 <span>Sustainability</span><br />Long-term viability assurance</div>
            <div className="fpocta-benefit">🏦 <span>Government Benefits</span><br />Scheme access and support</div>
          </div>

          {/* CTA BUTTON */}
          <div className="fpocta-action">
            <a href="/contact" className="fpocta-button">
              Get Institutional Support
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FPOFinalCTA;

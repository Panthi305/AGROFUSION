import "./MarketLinkageServices.css";

const MarketLinkageServices = () => {
  return (
    <section className="market-linkage-section">
      <div className="market-linkage-container">

        {/* SECTION HEADER */}
        <div className="market-linkage-header"> 
          <h2>Connecting Farmers to Profitable Markets</h2>
          <p>
            We enable farmers to access domestic and international buyers, ensuring
            better pricing, consistent demand, and growth opportunities.
          </p>
        </div>

        {/* DOMESTIC MARKET */}
        <div className="market-linkage-card">
          <img
            src="https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=800&q=80"
            alt="Retail and wholesale market linkage"
          />
          <div className="market-linkage-content">
            <h3>Domestic Market Linkages</h3>
            <ul>
              <li><strong>B2B Supply Network:</strong> Retail chains, supermarkets, wholesale mandis, and institutional buyers.</li>
              <li><strong>Digital Marketplace:</strong> jigisha.online integration, eNAM support, and digital payment systems.</li>
              <li><strong>Cooperative Partnerships:</strong> Direct supply to 500+ FPOs with bulk pricing and market info services.</li>
            </ul>
          </div>
        </div>

        {/* EXPORT MARKET */}
        <div className="market-linkage-card">
          <img
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80"
            alt="Global shipping and export logistics"
          />
          <div className="market-linkage-content">
            <h3>Export Market Linkages</h3>
            <ul>
              <li><strong>Export Grade Processing:</strong> Phyto-sanitary certification, quality testing, and port logistics.</li>
              <li><strong>International Network:</strong> Presence in Middle East, Africa, Southeast Asia, Europe, and USA.</li>
              <li><strong>Product Portfolio:</strong> Basmati rice, premium spices, oilseeds, and organic fruits/vegetables.</li>
            </ul>
          </div>
        </div>

        {/* CONTRACT FARMING */}
        <div className="market-linkage-card">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"
            alt="Farmer and agronomist in field"
          />
          <div className="market-linkage-content">
            <h3>Contract Farming & Buy-Back</h3>
            <ul>
              <li><strong>Pre-agreed Pricing:</strong> Guaranteed buy-back at predetermined prices to ensure income stability.</li>
              <li><strong>Quality Specifications:</strong> Technical training to meet global quality parameters.</li>
              <li><strong>Input Support:</strong> High-quality seeds, advisory services, and inputs provided on credit.</li>
              <li><strong>Risk Mitigation:</strong> Protection against market price volatility and crop failure risks.</li>
            </ul>
          </div>
        </div>

        {/* CONTACT BUTTON */}
        <div className="market-linkage-cta">
          <button
            className="market-linkage-contact-btn"
            onClick={() => (window.location.href = "/contact")}
          >
            Contact for Market Linkage Support
          </button>
        </div>

      </div>
    </section>
  );
};

export default MarketLinkageServices;
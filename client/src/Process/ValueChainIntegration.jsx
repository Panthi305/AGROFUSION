
import "./ValueChainIntegration.css";

const ValueChainIntegration = () => {
  return (
    <section className="value-chain-section">
      <div className="value-chain-container">

        <div className="value-chain-header">
          <h2>Value Chain Integration</h2>
          <p>
            Our ecosystem ensures farmers get maximum value at every step.
          </p>
        </div>

        <div className="value-chain-grid">
          {/* BACKWARD */}
          <div className="value-chain-card">
            <img
              src="https://plus.unsplash.com/premium_photo-1661962692059-55d5a23e7a7e?auto=format&fit=crop&w=600&q=80"
              alt="Backward Integration"
            />
            <h3>Backward Integration</h3>
            <ul>
              <li>Quality seeds & crop nutrition</li>
              <li>Pre-harvest quality assessment</li>
              <li>Farm mechanization support</li>
              <li>Transportation & storage</li>
            </ul>
          </div>

          {/* FORWARD */}
          <div className="value-chain-card">
            <img
              src="https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?auto=format&fit=crop&w=600&q=80"
              alt="Forward Integration"
            />
            <h3>Forward Integration</h3>
            <ul>
              <li>Mini-processing units</li>
              <li>Aggregation centers</li>
              <li>Packaging & Branding</li>
              <li>Export channel access</li>
            </ul>
          </div>

          {/* TECHNOLOGY */}
          <div className="value-chain-card">
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80"
              alt="Technology Integration"
            />
            <h3>Digital Integration</h3>
            <ul>
              <li>Supply chain visibility</li>
              <li>Real-time inventory data</li>
              <li>Automated sorting systems</li>
              <li>IoT quality sensors</li>
            </ul>
          </div>

          {/* FINANCIAL */}
          <div className="value-chain-card">
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80"
              alt="Financial Integration"
            />
            <h3>Financial Integration</h3>
            <ul>
              <li>Equipment financing</li>
              <li>Buyer payment assurance</li>
              <li>Crop insurance products</li>
              <li>Risk management tools</li>
            </ul>
          </div>
        </div>

        

        <div className="value-chain-cta">
          <button className="value-chain-contact-btn" onClick={() => window.location.href = "/contact"}>
            Contact for Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default ValueChainIntegration;
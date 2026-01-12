import "./PostHarvestValueChain.css";

const PostHarvestValueChain = () => {
  return (
    <section className="phvc-section">
      <div className="phvc-container">

        {/* HEADER */}
        <div className="phvc-header">
          <h2>From Farm to Market Collective Solutions</h2>
          <p>
            Enabling farmer institutions to integrate aggregation, processing,
            and market access through structured post-harvest value chains.
          </p>
        </div>

        {/* IMAGE + OVERVIEW */}
        <div className="phvc-overview">
          <div className="phvc-image">
            <img
              src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae"
              alt="Post Harvest Value Chain"
            />
          </div>

          <div className="phvc-overview-content">
            <h3>End-to-End Value Chain Enablement</h3>
            <ul>
              <li>✔ Organized aggregation & quality control</li>
              <li>✔ Decentralized processing & value addition</li>
              <li>✔ Direct market & export linkages</li>
              <li>✔ Contract farming & risk mitigation</li>
            </ul>
          </div>
        </div>

        {/* A. AGGREGATION & COLLECTION */}
        <div className="phvc-block">
          <h3>Aggregation & Collection Systems</h3>

          <div className="phvc-grid">
            <div className="phvc-card">
              <h4>Collection Center Development</h4>
              <ul>
                <li>Location planning assistance</li>
                <li>Infrastructure design support</li>
                <li>Equipment provision</li>
                <li>Management system setup</li>
              </ul>
            </div>

            <div className="phvc-card">
              <h4>Quality Management</h4>
              <ul>
                <li>Grading and sorting systems</li>
                <li>Quality standards implementation</li>
                <li>Testing facility access</li>
                <li>Certification support</li>
              </ul>
            </div>

            <div className="phvc-card">
              <h4>Logistics Integration</h4>
              <ul>
                <li>Transportation arrangements</li>
                <li>Storage facility linkage</li>
                <li>Market delivery systems</li>
                <li>Traceability implementation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* B. PROCESSING FACILITY SUPPORT */}
        <div className="phvc-block">
          <h3>Processing Facility Support</h3>

          <div className="phvc-grid">
            <div className="phvc-card">
              <h4>Mini-Processing Unit Setup</h4>
              <ul>
                <li>Feasibility assessment services</li>
                <li>Technology selection guidance</li>
                <li>Installation support</li>
                <li>Operator training programs</li>
              </ul>
            </div>

            <div className="phvc-card">
              <h4>Value Addition Services</h4>
              <ul>
                <li>Cleaning and grading support</li>
                <li>Packaging and branding</li>
                <li>Quality certification assistance</li>
                <li>Market linkage facilitation</li>
              </ul>
            </div>

            <div className="phvc-card">
              <h4>Business Operations</h4>
              <ul>
                <li>Production planning support</li>
                <li>Quality control systems</li>
                <li>Cost management assistance</li>
                <li>Marketing strategy development</li>
              </ul>
            </div>
          </div>
        </div>

        {/* C. MARKET LINKAGE */}
        <div className="phvc-block">
          <h3>Market Linkage Programs</h3>

          <div className="phvc-grid">
            <div className="phvc-card">
              <h4>Buyer Contract Facilitation</h4>
              <ul>
                <li>Market opportunity identification</li>
                <li>Buyer negotiation support</li>
                <li>Contract development assistance</li>
                <li>Relationship management</li>
              </ul>
            </div>

            <div className="phvc-card">
              <h4>Export Market Access</h4>
              <ul>
                <li>Quality upgradation support</li>
                <li>Certification assistance</li>
                <li>Logistics coordination</li>
                <li>Documentation support</li>
              </ul>
            </div>

            <div className="phvc-card">
              <h4>Digital Marketplace Integration</h4>
              <ul>
                <li>Platform onboarding support</li>
                <li>Digital marketing training</li>
                <li>Online transaction systems</li>
                <li>Payment processing assistance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* D. CONTRACT FARMING */}
        <div className="phvc-block">
          <h3>Contract Farming Programs</h3>

          <div className="phvc-grid">
            <div className="phvc-card">
              <h4>Program Design</h4>
              <ul>
                <li>Crop selection guidance</li>
                <li>Contract terms development</li>
                <li>Quality specifications</li>
                <li>Pricing mechanisms</li>
              </ul>
            </div>

            <div className="phvc-card">
              <h4>Implementation Support</h4>
              <ul>
                <li>Member enrollment facilitation</li>
                <li>Production planning assistance</li>
                <li>Input supply coordination</li>
                <li>Quality monitoring systems</li>
              </ul>
            </div>

            <div className="phvc-card">
              <h4>Risk Management</h4>
              <ul>
                <li>Price risk mitigation</li>
                <li>Production risk coverage</li>
                <li>Market risk management</li>
                <li>Contract enforcement support</li>
              </ul>
            </div>
          </div>
        </div>

        {/* VALUE CHAIN BENEFITS */}
        <div className="phvc-benefits">
          <h3>Value Chain Benefits</h3>
          <div className="phvc-benefit-grid">
            <div>📈 <strong>Price Improvement</strong><br />Better realization through collective marketing</div>
            <div>🏷️ <strong>Quality Enhancement</strong><br />Standardized quality systems</div>
            <div>💰 <strong>Cost Reduction</strong><br />Economies of scale in operations</div>
            <div>🌍 <strong>Market Access</strong><br />Direct buyer connections</div>
            <div>🛡️ <strong>Risk Mitigation</strong><br />Collective risk management</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PostHarvestValueChain;

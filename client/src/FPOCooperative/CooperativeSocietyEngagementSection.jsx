import "./CooperativeSocietyEngagementSection.css";

const CooperativeSocietyEngagementSection = () => {
  return (
    <section className="coop-engagement-section">
      <div className="coop-engagement-container">

        {/* SECTION HEADER */}
        <div className="coop-engagement-header">
          <h2>Modernizing Traditional Cooperatives</h2>
          <p>
            Empowering cooperatives with modern infrastructure, technology,
            market access, and government-backed financial ecosystems.
          </p>
        </div>

        {/* A. COOPERATIVE STRENGTHENING */}
        <div className="coop-engagement-block">
          <h3>Cooperative Strengthening Programs</h3>

          <div className="coop-engagement-grid">
            <div className="coop-engagement-card">
              <h4>PACS Modernization</h4>
              <ul>
                <li>Infrastructure upgradation support</li>
                <li>Technology integration assistance</li>
                <li>Management system improvement</li>
                <li>Service portfolio expansion</li>
              </ul>
            </div>

            <div className="coop-engagement-card">
              <h4>Dairy Cooperative Integration</h4>
              <ul>
                <li>Milk collection system enhancement</li>
                <li>Processing facility development</li>
                <li>Value addition support</li>
                <li>Market linkage improvement</li>
              </ul>
            </div>

            <div className="coop-engagement-card">
              <h4>Commodity Cooperative Development</h4>
              <ul>
                <li>Crop-specific collective formation</li>
                <li>Specialized service development</li>
                <li>Market access enhancement</li>
                <li>Quality improvement programs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* B. SERVICE INTEGRATION */}
        <div className="coop-engagement-block">
          <h3>Service Integration</h3>

          <div className="coop-engagement-grid">
            <div className="coop-engagement-card">
              <h4>Input Procurement Services</h4>
              <ul>
                <li>Bulk input supply arrangements</li>
                <li>Quality assurance systems</li>
                <li>Timely delivery mechanisms</li>
                <li>Credit facilitation support</li>
              </ul>
            </div>

            <div className="coop-engagement-card">
              <h4>Storage Infrastructure Development</h4>
              <ul>
                <li>Warehouse establishment support</li>
                <li>Cold storage facility development</li>
                <li>Processing unit setup assistance</li>
                <li>Collection center creation</li>
              </ul>
            </div>

            <div className="coop-engagement-card">
              <h4>Market Linkage Services</h4>
              <ul>
                <li>Buyer contract facilitation</li>
                <li>Export market access support</li>
                <li>Direct retail linkages</li>
                <li>Digital marketplace integration</li>
              </ul>
            </div>
          </div>
        </div>

        {/* C. GOVERNMENT SCHEME FACILITATION */}
        <div className="coop-engagement-block">
          <h3>Government Scheme Facilitation</h3>

          <div className="coop-engagement-grid">
            <div className="coop-engagement-card">
              <h4>Scheme Access Support</h4>
              <ul>
                <li>Eligibility assessment services</li>
                <li>Application preparation assistance</li>
                <li>Documentation support</li>
                <li>Follow-up and monitoring</li>
              </ul>
            </div>

            <div className="coop-engagement-card">
              <h4>Subsidy Program Implementation</h4>
              <ul>
                <li>Subsidized machinery distribution</li>
                <li>Input subsidy programs</li>
                <li>Infrastructure development subsidies</li>
                <li>Training program subsidies</li>
              </ul>
            </div>

            <div className="coop-engagement-card">
              <h4>Credit Linkage Programs</h4>
              <ul>
                <li>Working capital facilitation</li>
                <li>Infrastructure loan support</li>
                <li>Member credit programs</li>
                <li>Insurance scheme implementation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* TARGET COOPERATIVES */}
        <div className="coop-engagement-target">
          <h3>Target Cooperative Engagement</h3>
          <ul>
            <li><strong>Primary Level:</strong> Village-level cooperative societies</li>
            <li><strong>Secondary Level:</strong> District / block level unions</li>
            <li><strong>Tertiary Level:</strong> State-level federations</li>
            <li><strong>Specialized:</strong> Commodity-specific cooperatives</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default CooperativeSocietyEngagementSection;

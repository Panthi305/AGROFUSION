import "./InstitutionalFramework.css";

const InstitutionalFramework = () => {
  return (
    <section className="inst-framework-section">
      <div className="inst-framework-container">
        {/* Section Header */}
        <div className="inst-framework-header">
          <h2 className="inst-framework-title">
            Building Sustainable Farmer Institutions
          </h2>
          <p className="inst-framework-subtitle">
            Our structured framework strengthens farmer institutions by aligning
            policy, markets, technology, and finance into a single scalable model.
          </p>
        </div>

        {/* Strategic Mandate */}
        <div className="inst-framework-block">
          <h3 className="inst-framework-block-title">
            Strategic Mandate Alignment
          </h3>
          <ul className="inst-framework-list">
            <li>Enable state and central government missions via cooperative partnerships</li>
            <li>FPO onboarding and subsidized machinery distribution programs</li>
            <li>Cooperative society engagement for procurement and distribution</li>
            <li>Institutional capacity building for sustainable agriculture</li>
          </ul>
        </div>

        {/* Approach */}
        <div className="inst-framework-block">
          <h3 className="inst-framework-block-title">
            Our Institutional Development Approach
          </h3>
          <div className="inst-framework-approach">
            <span>Institutional Formation</span>
            <span>Capacity Building</span>
            <span>Business Development</span>
            <span>Sustainability Planning</span>
            <span>Scale & Expansion</span>
          </div>
        </div>

        {/* Ecosystem Integration */}
        <div className="inst-framework-block">
          <h3 className="inst-framework-block-title">
            Integration with AgroFusion Ecosystem
          </h3>
          <ul className="inst-framework-list inst-framework-grid">
            <li><strong>Input Supply:</strong> Institutional procurement benefits</li>
            <li><strong>Mechanization Access:</strong> Group equipment utilization</li>
            <li><strong>Processing Support:</strong> Collective value addition</li>
            <li><strong>Market Linkage:</strong> Bulk buyer connections</li>
            <li><strong>Financial Services:</strong> Group credit facilities</li>
            <li><strong>Technology Adoption:</strong> Digital institutional management</li>
          </ul>
        </div>

        {/* Target Institutions */}
        <div className="inst-framework-block">
          <h3 className="inst-framework-block-title">
            Target Institutions We Support
          </h3>
          <div className="inst-framework-tags">
            <span>Farmer Producer Organizations (FPOs)</span>
            <span>Primary Agricultural Cooperative Societies (PACS)</span>
            <span>Dairy Cooperatives</span>
            <span>Commodity Cooperatives</span>
            <span>Women Farmer Groups</span>
            <span>Youth Farmer Collectives</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstitutionalFramework;

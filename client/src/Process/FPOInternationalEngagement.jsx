  import "./FPOInternationalEngagement.css";

  const FPOInternationalEngagement = () => {
    return (
      <section className="fpo-intl-section">
        <div className="fpo-intl-container"> 

          {/* FPO & COOPERATIVE ENGAGEMENT */}
          <div className="fpo-header">
            <h2>Institutional Strengthening for Market Access</h2>
            <p>
              Empowering FPOs and Cooperatives with capacity building, infrastructure, and market linkage support to increase farmer incomes.
            </p>
          </div>

          <div className="fpo-grid">
            {/* FPO Development Services */}
            <div className="fpo-card">
              <img
                src="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&w=800&q=80"
                alt="FPO Development"
              />
              <h3>FPO Development Services</h3>
              <ul>
                <li><strong>Capacity Building:</strong> Business planning, quality control, financial training, and market negotiation skills.</li>
                <li><strong>Infrastructure Support:</strong> Collection centers, processing units, storage, and packaging facilities.</li>
                <li><strong>Market Linkage:</strong> Bulk buyer contracts, export development, brand building, and digital marketing.</li>
              </ul>
            </div>

            {/* Cooperative Society Programs */}
            <div className="fpo-card">
              <img
                src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=800&q=80"
                alt="Cooperative Programs"
              />
              <h3>Cooperative Society Programs</h3>
              <ul>
                <li><strong>PACS Modernization:</strong> Storage upgrades, modern processing equipment, and digital inventory management.</li>
                <li><strong>Dairy Integration:</strong> Milk collection networks, value-added products, and premium market access.</li>
                <li><strong>Scheme Facilitation:</strong> PM-FME, Agri Infra Fund, and specialized Export Promotion Schemes.</li>
              </ul>
            </div>
          </div>

          {/* INTERNATIONAL EXPANSION */}
          <div className="intl-header">
            <h2>Global Market Access via Jigisha International</h2>
            <p>
              Expanding farmer reach to global markets through strategic partnerships, export support, and complete agri-project solutions.
            </p>
          </div>

          <div className="intl-grid">
            {/* TARGET MARKETS */}
            <div className="intl-card">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80"
                alt="Target Markets"
              />
              <h3>Target Market Strategy</h3>
              <ul>
                <li><strong>Middle East:</strong> UAE, Oman, Qatar – Contract farming, seeds, fertilizer, and solar pump exports.</li>
                <li><strong>Africa:</strong> Kenya, Ethiopia, Rwanda, Nigeria – Machinery, farm development, and tech transfer.</li>
                <li><strong>Southeast Asia:</strong> Malaysia, Vietnam, Bangladesh – Rice, spices, and pulses joint ventures.</li>
              </ul>
            </div>

            {/* INTERNATIONAL SERVICE OFFERINGS */}
            <div className="intl-card">
              <img
                src="https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&w=800&q=80"
                alt="Service Offerings"
              />
              <h3>International Service Offerings</h3>
              <ul>
                <li><strong>Complete Project Solutions:</strong> Full contract farming setups, processing plants, and quality systems.</li>
                <li><strong>Product Supply Chains:</strong> Machinery, processed products, and advanced technology solutions.</li>
                <li><strong>Knowledge Transfer:</strong> Management systems, best practices training, and technology adoption.</li>
              </ul>
            </div>

            {/* EXPORT LOGISTICS SUPPORT */}
            <div className="intl-card">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
                alt="Export Logistics"
              />
              <h3>Export Logistics Support</h3>
              <ul>
                <li><strong>Documentation:</strong> Certification, customs clearance, and banking/LC support services.</li>
                <li><strong>Logistics Management:</strong> Container booking, cold chain, and insurance risk management.</li>
                <li><strong>Market Development:</strong> Trade fairs, buyer identification, and market intelligence research.</li>
              </ul>
            </div>
          </div>

          <div className="fpo-intl-cta">
            <button
              className="fpo-intl-contact-btn"
              onClick={() => (window.location.href = "/contact")}
            >
              Contact Us for FPO & Export Support
            </button>
          </div>
        </div>
      </section>
    );
  };

  export default FPOInternationalEngagement;
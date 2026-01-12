import "./ResearchDevelopment.css";

const ResearchDevelopment = () => {
  return (
    <section className="rd-section">
      <div className="rd-container">
        <div className="rd-header">
          <div className="rd-header-text">
            <h2>Pioneering Soil Science Innovations</h2>
            <p>
              Our research-driven approach combines data science, biology, and
              advanced analytics to redefine how soil health is understood,
              predicted, and optimized at scale.
            </p>
          </div>

          <div className="rd-header-image">
            <img
              src="https://www.bing.com/th/id/OIP.VjBsoKjmLs72SIODS35lUQHaEK?w=243&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
              alt="Soil research and lab analysis"
            />
          </div>
        </div>

        <div className="rd-projects">
          <div className="rd-card">
            <h3>AI-Predictive Nutrient Models</h3>
            <p>
              Advanced machine learning models analyze historical and live soil
              data to forecast nutrient deficiencies before visible crop
              symptoms appear.
            </p>
            <ul>
              <li>50,000+ soil datasets trained</li>
              <li>92% prediction accuracy</li>
              <li>Early intervention advisories</li>
            </ul>
          </div>

          <div className="rd-card">
            <h3>Soil Microbiome Mapping</h3>
            <p>
              Region-specific microbial profiling enables the development of
              custom bio-inputs tailored to local soil and crop ecosystems.
            </p>
            <ul>
              <li>Collaboration with ICAR & IARI</li>
              <li>Microbial consortia development</li>
              <li>Custom bio-fertilizer formulations</li>
            </ul>
          </div>

          <div className="rd-card">
            <h3>Remote Sensing Integration</h3>
            <p>
              Satellite and drone imagery is fused with ground data to enable
              large-scale soil intelligence and precision mapping.
            </p>
            <ul>
              <li>Satellite + drone data fusion</li>
              <li>Landscape-level soil mapping</li>
              <li>85% ground-truth correlation</li>
            </ul>
          </div>

          <div className="rd-card">
            <h3>Blockchain-Based Soil Records</h3>
            <p>
              Secure and immutable soil health records ensure transparency,
              traceability, and long-term data ownership.
            </p>
            <ul>
              <li>Export & certification traceability</li>
              <li>Carbon credit readiness</li>
              <li>Piloted across 50 FPOs</li>
            </ul>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default ResearchDevelopment;

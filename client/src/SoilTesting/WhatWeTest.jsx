import "./WhatWeTest.css";

const WhatWeTest = () => {
  return (
    <section className="test-section">
      <div className="test-container">
        <header className="test-header">
          <h2>What We Test</h2>
          <p>
            From essential nutrients to microscopic biological activity, we 
            leave no stone unturned in analyzing your soil's health.
          </p>
        </header>

        <div className="test-grid">
          {/* Box 1 */}
          <div className="test-category-box">
            <h3>Physical</h3>
            <div className="test-entry">
              <h4>Soil Texture</h4>
              <p>Analysis of Sand, Silt, and Clay ratios to determine water behavior.</p>
              <span className="test-tag">Retention Analysis</span>
            </div>
            <div className="test-entry">
              <h4>Bulk Density</h4>
              <p>Testing for compaction levels that could hinder root growth.</p>
              <span className="test-tag">Structure Improvement</span>
            </div>
          </div>

          {/* Box 2 */}
          <div className="test-category-box">
            <h3>Chemical</h3>
            <div className="test-entry">
              <h4>pH & Salinity</h4>
              <p>Measuring acidity and Electrical Conductivity for nutrient uptake.</p>
              <span className="test-tag">pH Correction</span>
            </div>
            <div className="test-entry">
              <h4>Organic Carbon</h4>
              <p>The primary indicator of long-term soil fertility and health.</p>
              <span className="test-tag">Carbon Roadmap</span>
            </div>
          </div>

          {/* Box 3 */}
          <div className="test-category-box">
            <h3>Nutrients</h3>
            <div className="test-entry">
              <h4>NPK Analysis</h4>
              <p>Precise measurement of Nitrogen, Phosphorus, and Potassium.</p>
              <span className="test-tag">Precision Dosage</span>
            </div>
            <div className="test-entry">
              <h4>Micronutrients</h4>
              <p>Zinc, Boron, and Iron levels to prevent hidden hunger.</p>
              <span className="test-tag">Trace Elements</span>
            </div>
          </div>
        </div>

        <div className="test-footer">
          <a href="/contact" className="test-btn">Talk to a Soil Expert</a>
        </div>
      </div>
    </section>
  );
};

export default WhatWeTest;
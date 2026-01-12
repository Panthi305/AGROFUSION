import "./HowItWorks.css";
import { useNavigate } from "react-router-dom";

const HowItWorks = () => {
  const navigate = useNavigate();

  return (
    <section className="process-path-section">
      <div className="process-path-wrap">

        {/* Header */}
        <div className="process-path-intro">
          <h2 className="process-path-title">
            From Soil Sample to Actionable Insights
          </h2>
          <p className="process-path-desc">
            A simple, scientific, and transparent process that transforms raw soil
            data into precise crop nutrition decisions.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="process-path-grid">

          {/* Step 1 */}
          <div className="process-path-entry">
            <span className="process-path-id">PHASE 01</span>
            
            <div className="process-path-main">
              <h3>Sample Collection</h3>
              <ul className="process-path-features">
                <li>Self collection with detailed instructions</li>
                <li>On-field sample collection by our technician</li>
                <li>Mobile lab support for large farms & FPOs</li>
              </ul>
              <button className="process-path-action" onClick={() => navigate("/contact")}>
                Contact for Collection
              </button>
            </div>

            <div className="process-path-spec">
              <h4>Sampling Guidelines</h4>
              <p><strong>When:</strong> 2–3 weeks before sowing</p>
              <p><strong>Depth:</strong> 0–6 inches / 0–12 inches</p>
              <p><strong>Pattern:</strong> Zig-zag (5–8 samples/acre)</p>
              <p><strong>Tools:</strong> Auger, containers, GPS</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="process-path-entry">
            <span className="process-path-id">PHASE 02</span>
            
            <div className="process-path-main">
              <h3>Lab Analysis</h3>
              <ul className="process-path-features">
                <li>NABL & ISO 17025 accredited laboratories</li>
                <li>Bhopal central lab + regional labs</li>
                <li>Advanced analytical instruments</li>
                <li>High daily testing capacity</li>
              </ul>
              <button className="process-path-action" onClick={() => navigate("/contact")}>
                Schedule Testing
              </button>
            </div>

            <div className="process-path-spec">
              <h4>Technical Specs</h4>
              <p><strong>Tech:</strong> AAS, ICP-MS, HPLC</p>
              <p><strong>Quality:</strong> Daily calibration checks</p>
              <p><strong>Time:</strong> 24–72 hours turnaround</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="process-path-entry">
            <span className="process-path-id">PHASE 03</span>
            
            <div className="process-path-main">
              <h3>Report Generation</h3>
              <ul className="process-path-features">
                <li>Comprehensive soil health report</li>
                <li>Mobile app dashboard access</li>
                <li>Nutrient deficiency maps</li>
                <li>District-level benchmarking</li>
              </ul>
              <button className="process-path-action" onClick={() => navigate("/contact")}>
                Request Sample Report
              </button>
            </div>

            <div className="process-path-spec">
              <h4>Visual Data</h4>
              <p>Interactive report preview</p>
              <p>Heatmaps & Nutrient Charts</p>
              <p>Action-ready recommendations</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="process-path-entry">
            <span className="process-path-id">PHASE 04</span>
            
            <div className="process-path-main">
              <h3>Personalized Advisory</h3>
              <ul className="process-path-features">
                <li>One-on-one agronomist consultation</li>
                <li>Weekly WhatsApp crop advisories</li>
                <li>Farmer app notifications</li>
                <li>Optional follow-up field visits</li>
              </ul>
              <button className="process-path-action" onClick={() => navigate("/contact")}>
                Talk to an Agronomist
              </button>
            </div>

            <div className="process-path-spec">
              <h4>Support Scope</h4>
              <p>Crop-stage specific guidance</p>
              <p>Climate aligned insights</p>
              <p>Continuous support approach</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
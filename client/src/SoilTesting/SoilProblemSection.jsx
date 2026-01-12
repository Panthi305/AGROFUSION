import "./SoilProblemSection.css";

const SoilProblemSection = () => {
  return (
    <section className="soil-problem">
      <div className="soil-problem-container">
        {/* Section Header */}
        <div className="soil-problem-header">
          <h2 className="soil-problem-title">
            Your Soil is Speaking – Are You Listening? 
          </h2>
          <p className="soil-problem-subtitle">
            Decades of intensive farming have silently depleted soil health.
            Without scientific testing, farmers lose yield, money, and long-term
            productivity.
          </p> 
        </div>

        {/* Reality Cards */}
        <div className="soil-problem-stats">
          <div className="soil-problem-card">
            <h3>70%</h3>
            <p>
              Indian soils are deficient in at least one major nutrient
            </p>
          </div>

          <div className="soil-problem-card">
            <h3>52%</h3>
            <p>
              Deficient in critical micronutrients like Zinc & Boron
            </p>
          </div>

          <div className="soil-problem-card">
            <h3>40%</h3>
            <p>
              More fertilizer applied than actually required
            </p>
          </div>

          <div className="soil-problem-card highlight">
            <h3>₹15,000–25,000</h3>
            <p>
              Wasted per acre annually due to poor soil decisions
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="soil-problem-timeline">
          <div className="timeline-item">
            <span className="timeline-dot"></span>
            <h4>Healthy Soil (1950s)</h4>
            <p>
              Naturally rich organic matter, balanced nutrients, strong yields
            </p>
          </div>

          <div className="timeline-line"></div>

          <div className="timeline-item">
            <span className="timeline-dot"></span>
            <h4>Depleted Soil (Today)</h4>
            <p>
              Nutrient imbalance, low organic carbon, declining productivity
            </p>
          </div>

          <div className="timeline-line"></div>

          <div className="timeline-item success">
            <span className="timeline-dot"></span>
            <h4>Restored Soil (With Our Help)</h4>
            <p>
              Balanced nutrition, healthy pH, improved yields & sustainability
            </p>
          </div>
        </div>

        {/* Without Testing */}
        <div className="soil-problem-effects">
          <h3 className="effects-title">
            What Happens Without Soil Testing?
          </h3>

          <div className="effects-grid">
            <div className="effect-card">
              <h4>Over-fertilization</h4>
              <p>
                Wasted money, soil toxicity, environmental pollution
              </p>
            </div>

            <div className="effect-card">
              <h4>Under-fertilization</h4>
              <p>
                Reduced yields, poor crop quality
              </p>
            </div>

            <div className="effect-card">
              <h4>Nutrient Imbalance</h4>
              <p>
                Locked nutrients, pH imbalance, low absorption
              </p>
            </div>

            <div className="effect-card">
              <h4>Soil Degradation</h4>
              <p>
                Loss of organic matter, reduced water holding capacity
              </p>
            </div>
          </div>
        </div>

        {/* Solution */}
        <div className="soil-problem-solution">
          <h3>
            Our Solution: Precision Nutrition Based on Exact Soil Needs
          </h3>
          <p>
            AgroFusion uses scientific soil testing and data-driven analysis to
            deliver crop-specific, location-specific nutrient recommendations —
            eliminating guesswork and maximizing ROI.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SoilProblemSection;

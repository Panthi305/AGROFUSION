import { useState } from "react";
import "./BioCNGModels.css";

const plantData = [
  {
    size: "10 TPD",
    input: "10 tons waste",
    output: "1,200–1,400 kg/day",
    fertilizer: "6–7 tons/day",
    land: "1.5 acres",

    payback: "4.2 years",
    irr: "28%",
    bestFor: "1–2 villages"
  },
  {
    size: "25 TPD",
    input: "25 tons waste",
    output: "3,000–3,500 kg/day",
    fertilizer: "15–17 tons/day",
    land: "2.8 acres",

    payback: "3.8 years",
    irr: "31%",
    bestFor: "Small FPO (300 farmers)"
  },
  {
    size: "50 TPD",
    input: "50 tons waste",
    output: "6,000–7,000 kg/day",
    fertilizer: "30–35 tons/day",
    land: "5 acres",

    payback: "3.4 years",
    irr: "34%",
    bestFor: "Large FPO / District"
  },
  {
    size: "100 TPD",
    input: "100 tons waste",
    output: "12,000–14,000 kg/day",
    fertilizer: "60–70 tons/day",
    land: "8.5 acres",

    payback: "3.1 years",
    irr: "37%",
    bestFor: "Industrial cluster"
  }
];

const BioCNGModels = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = plantData[activeIndex];

  return (
    <section className="bio-models">
      <div className="bio-models-container">
        <h2>Project Scaling & Feasibility</h2>

        <div className="models-main-grid">
          {/* LEFT PANE */}
          <div className="models-sidebar">
            <h3>Select Model</h3>
            <div className="model-selector">
              {plantData.map((plant, index) => (
                <button
                  key={index}
                  className={index === activeIndex ? "active" : ""}
                  onClick={() => setActiveIndex(index)}
                >
                  {plant.size} Capacity {index === activeIndex && <span>●</span>}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT PANE */}
          <div className="models-display">
            <div className="plant-visualizer">
              <div className="plant-box">
                <span>{active.size}</span>
                <p>Bio-CNG Infrastructure</p>
              </div>
            </div>

            <div className="comparison-table">
              <div className="row"><span>Feedstock Input</span><strong>{active.input}</strong></div>
              <div className="row"><span>Daily Bio-CNG Output</span><strong>{active.output}</strong></div>
              <div className="row"><span>Organic Fertilizer</span><strong>{active.fertilizer}</strong></div>
              <div className="row"><span>Land Footprint</span><strong>{active.land}</strong></div>
              <div className="row"><span>Investment Payback</span><strong>{active.payback}</strong></div>
              <div className="row"><span>Project IRR</span><strong>{active.irr}</strong></div>
              <div className="row highlight"><span> Optimized For</span><strong>{active.bestFor}</strong></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioCNGModels;

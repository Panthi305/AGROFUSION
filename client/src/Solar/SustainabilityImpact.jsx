import React, { useState } from "react";
import "./SustainabilityImpact.css";

const SustainabilityImpact = () => {
  const [active, setActive] = useState(0);

  const data = [
    {
      title: "Environmental Benefits",
      tag: "Nature",
      content: [
        "Carbon Footprint Reduction",
        "Water Conservation & Recharge",
        "Soil Health Improvement"
      ]
    },
    {
      title: "Economic Sustainability",
      tag: "Profit",
      content: [
        "Direct Energy Cost Savings",
        "Resource Use Efficiency",
        "Climate Risk Reduction"
      ]
    },
    {
      title: "Social Sustainability",
      tag: "People",
      content: [
        "Farmer Income Stability",
        "Local Skill Development",
        "Gender & Social Inclusion"
      ]
    },
    {
      title: "Carbon Credit Potential",
      tag: "Future",
      content: [
        "Emission Reduction Credits",
        "Certification Assistance",
        "Market Monetization"
      ]
    }
  ];

  return (
    <section className="sustain-stage-section">
      <div className="stage-header">
        <h2>Green Farming Impact</h2>
        <div className="stage-indicators">
          {data.map((_, i) => (
            <div 
              key={i} 
              className={`dot ${active === i ? "active" : ""}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>

      <div className="stage-container">
        {data.map((item, i) => {
          let position = i === active ? "center" : i < active ? "left" : "right";
          return (
            <div 
              className={`stage-card ${position}`} 
              key={i}
              onClick={() => setActive(i)}
            >
              <div className="card-glass">
                <span className="card-tag">{item.tag}</span>
                <h3>{item.title}</h3>
                <ul>
                  {item.content.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SustainabilityImpact;
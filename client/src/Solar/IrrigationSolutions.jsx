import React, { useEffect } from "react";
import "./IrrigationSolutions.css";
import card2 from "./../assets/Solar/card2.jpeg";
const IrrigationSolutions = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px" // Triggers slightly before the element enters view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const solutions = [
    {
      title: "Drip Irrigation",
      tag: "95% Efficiency",
      img: "https://th.bing.com/th/id/OIP.CNW0UVzQsH8TG2JSZhLrpwHaEK?w=328&h=184&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
      specs: ["Root-zone delivery", "Fertigation ready", "Low evaporation"]
    },
    {
      title: "Sprinkler Systems",
      tag: "Uniform Coverage",
      img: card2,
      specs: ["Center pivot support", "Frost protection", "High-volume guns"]
    },
    {
      title: "Micro-Irrigation",
      tag: "Precision Tech",
      img: "https://images.unsplash.com/photo-1589923158776-cb4485d99fd6?auto=format&fit=crop&q=80&w=600",
      specs: ["Low volume flow", "High-value crops", "Sensor integration"]
    },
    {
      title: "Smart Management",
      tag: "IoT Enabled",
      img: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&q=80&w=600",
      specs: ["Soil moisture sync", "Remote scheduling", "Weather analytics"]
    }
  ];

  return (
    <section className="irrigation-section">
      <div className="container">

        <div className="header reveal">
          <span className="subtitle">Systems</span>
          <h2>Irrigation Solutions</h2>
          <p>Optimized water management for high-yield farming.</p>
        </div>

        <div className="irrigation-grid">
          {solutions.map((item, index) => (
            <div className="irrigation-card reveal" key={index}>
              <div className="card-image">
                <img src={item.img} alt={item.title} />
                <span className="card-tag">{item.tag}</span>
              </div>
              <div className="card-body">
                <h3>{item.title}</h3>
                <ul className="spec-list">
                  {item.specs.map((spec, i) => (
                    <li key={i}>{spec}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default IrrigationSolutions;
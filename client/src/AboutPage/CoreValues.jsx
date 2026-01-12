import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Leaf, Cpu, Globe, ShieldCheck, Users } from "lucide-react"; 
import "./CoreValues.css";

const coreValuesData = [
  {
    title: "Farmer First",
    text: "Every decision we make is centered on farmer welfare and income growth.",
    icon: <Users size={24} />,
    color: "#4baf47"
  },
  {
    title: "Innovation Led",
    text: "We embrace technology—drones, IoT, AI—to solve age-old farming challenges.",
    icon: <Cpu size={24} />,
    color: "#eec044"
  },
  {
    title: "Sustainability Driven",
    text: "From Bio-CNG to organic farming, we build for the planet.",
    icon: <Leaf size={24} />,
    color: "#4baf47"
  },
  {
    title: "Integrity & Transparency",
    text: "Trust is our currency—in our products, pricing, and partnerships.",
    icon: <ShieldCheck size={24} />,
    color: "#eec044"
  },
  {
    title: "Collaboration",
    text: "We believe in growing together—with farmers, FPOs, and global partners.",
    icon: <Globe size={24} />,
    color: "#4baf47"
  },
];

const CoreValues = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="af-core-values">
      
      <div className="af-core-values__container">
        <div className="af-core-values__header" data-aos="fade-down">
          <span className="af-subtitle">OUR VALUES</span>
          <h2 className="af-core-values__title">What We Stand For</h2>
        </div>

        <div className="af-core-values__grid">
          {coreValuesData.map((item, index) => (
            <div
              className="af-core-values__card"
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
            >
              <div className="af-card-content">
                <div className="af-icon-wrapper" style={{'--brand-color': item.color}}>
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="af-card-number">0{index + 1}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./TechnologyServices.css";

const techStack = [
  {
    title: "Farmer App",
    description: "Multilingual, real-time advisory, input ordering.",
  },
  {
    title: "ERP & CRM", 
    description: "Inventory, dealer, and farmer management.",
  },
  {
    title: "IoT Platform",
    description: "Soil sensors, weather stations, drone control.",
  },
  {
    title: "Blockchain Traceability",
    description: "QR-based batch tracking from farm to market.",
  },
  {
    title: "AI/ML Models",
    description: "Demand forecasting, pest prediction, yield estimation.",
  },
];

const TechnologyServices = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 900, 
      easing: "ease-out-cubic", 
      once: true 
    });
  }, []);

  return (
    <section className="af-tech-services">
      {/* Background Decorative Layers */}
      <div className="af-tech-services__bg-top-left"></div>
      <div className="af-tech-services__bg-left"></div>
      
      <div className="af-tech-services__container">
        <header className="af-tech-services__header">
          <h2 className="af-tech-services__title" data-aos="fade-up">
            Powered by Jigisha Infotech
          </h2>
          <p className="af-tech-services__intro" data-aos="fade-up" data-aos-delay="100">
            Every service is enabled by our integrated tech stack:
          </p>
        </header>

        <div className="af-tech-services__grid">
          {techStack.map((tech, index) => (
            <div
              className="af-tech-services__card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* This inner glow div handles the soft radial light on hover */}
              <div className="af-tech-services__card-glow"></div>
              
              <div className="af-tech-services__card-content">
                <h3 className="af-tech-services__card-title">{tech.title}</h3>
                <p className="af-tech-services__card-desc">{tech.description}</p>
              </div>
              
              <span className="af-tech-services__card-tag">TECH</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyServices;
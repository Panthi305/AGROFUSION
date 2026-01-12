import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./DroneFleet.css";

const droneModels = [
  {
    name: "AgroFly-10",
    capacity: "10 Liters",
    flightTime: "15-18 mins",
    coverage: "15-20 acres",
    features: "GPS RTK, AI obstacle avoidance, auto-return, Advanced Diagnostics",
    bestFor: "Small farms (<20 acres)",
    specs: {
      weight: "12 kg",
      windResistance: "Up to 30 km/h",
      waterproof: "IP54",
      battery: "LiPo with fast charging",
      software: "AgroFusion FlightOS with field mapping",
      certification: "DGCA approved make, NPNT compliant",
    },
  },
  {
    name: "AgroFly-16",
    capacity: "16 Liters",
    flightTime: "20-22 mins",
    coverage: "25-30 acres",
    features: "Dual spray systems, multispectral camera, Advanced Diagnostics",
    bestFor: "Medium farms (20-50 acres)",
    specs: {
      weight: "14 kg",
      windResistance: "Up to 30 km/h",
      waterproof: "IP54",
      battery: "LiPo with fast charging",
      software: "AgroFusion FlightOS with field mapping",
      certification: "DGCA approved make, NPNT compliant",
    },
  },
  {
    name: "AgroFly-20",
    capacity: "20 Liters",
    flightTime: "25-28 mins",
    coverage: "35-45 acres",
    features: "Thermal imaging, live streaming, night flight, Advanced Diagnostics",
    bestFor: "Large farms (50-100 acres)",
    specs: {
      weight: "18 kg",
      windResistance: "Up to 30 km/h",
      waterproof: "IP54",
      battery: "LiPo with fast charging",
      software: "AgroFusion FlightOS with field mapping",
      certification: "DGCA approved make , NPNT compliant",
    },
  },
  {
    name: "AgroFly-30",
    capacity: "30 Liters",
    flightTime: "30-35 mins",
    coverage: "50-60 acres",
    features: "Industrial-grade, swappable batteries, all-weather, Advanced Diagnostics",
    bestFor: "Plantations, FPOs (>100 acres)",
    specs: {
      weight: "25 kg",
      windResistance: "Up to 30 km/h",
      waterproof: "IP54",
      battery: "LiPo with fast charging",
      software: "AgroFusion FlightOS with field mapping",
      certification: "DGCA approved make, NPNT compliant",
    },
  },
];

const DroneFleet = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="drone-fleet">
      <div className="drone-fleet__container">
        <h2 className="drone-fleet__title" data-aos="fade-up">
          Advanced Drone Technology Inbuilt GIS for Indian Farms
        </h2>

        {/* Comparison Table */}
        <div className="drone-fleet__table-wrapper" data-aos="fade-up" data-aos-delay="100">
          <table className="drone-fleet__table">
            <thead>
              <tr>
                <th>Model</th>
                <th>Capacity</th>
                <th>Flight Time</th>
                <th>Coverage/Day</th>
                <th>Key Features</th>
                <th>Best For</th>
              </tr>
            </thead>
            <tbody>
              {droneModels.map((drone, idx) => (
                <tr key={idx}>
                  <td>{drone.name}</td>
                  <td>{drone.capacity}</td>
                  <td>{drone.flightTime}</td>
                  <td>{drone.coverage}</td>
                  <td>{drone.features}</td>
                  <td>{drone.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Technical Specifications Accordion */}
        <div className="drone-fleet__accordion" data-aos="fade-up" data-aos-delay="200">
          {droneModels.map((drone, index) => (
            <div key={index} className="accordion-item">
              <div
                className={`accordion-header ${activeIndex === index ? "active" : ""}`}
                onClick={() => toggleAccordion(index)}
              >
                <h3>{drone.name} Technical Specifications</h3>
                <span>{activeIndex === index ? "-" : "+"}</span>
              </div>
              {activeIndex === index && (
                <div className="accordion-content">
                  <ul>
                    <li><strong>Weight:</strong> {drone.specs.weight}</li>
                    <li><strong>Wind Resistance:</strong> {drone.specs.windResistance}</li>
                    <li><strong>Waterproof Rating:</strong> {drone.specs.waterproof}</li>
                    <li><strong>Battery Type:</strong> {drone.specs.battery}</li>
                    <li><strong>Software:</strong> {drone.specs.software}</li>
                    <li><strong>Certification:</strong> {drone.specs.certification}</li>
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DroneFleet;

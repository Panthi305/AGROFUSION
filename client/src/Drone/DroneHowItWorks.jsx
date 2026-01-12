import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./DroneHowItWorks.css";

const steps = [
  {
    title: "Farm Assessment (Free)",
    details: [
      "Site visit by our agronomist",
      "Crop type and acreage evaluation",
      "Custom service plan creation",
    ], 
  },
  {
    title: "Flight Planning",
    details: [
      "Weather and airspace clearance",
      "Flight path optimization", 
      "Regulatory compliance check",
    ],
  },
  {
    title: "Execution",
    details: [
      "Certified pilot deployment",
      "Real-time monitoring from control center",
      "Digital documentation",
    ],
  },
  {
    title: "Results & Advisory",
    details: [
      "Digital report delivery within 24 hours",
      "Prescription map for follow-up actions",
      "Integration with farmer app for continuous monitoring",
    ],
  },
];

const DroneHowItWorks = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section className="drone-howitworks">
      <div className="drone-howitworks__container">
        <h2 className="drone-howitworks__title" data-aos="fade-up">
          Simple 4-Step Process
        </h2>

        <div className="drone-howitworks__steps">
          {steps.map((step, index) => (
            <div
              key={index}
              className="drone-howitworks__step"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="drone-howitworks__step-number">{index + 1}</div>
              <div className="drone-howitworks__step-content">
                <h3>{step.title}</h3>
                <ul>
                  {step.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
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

export default DroneHowItWorks;

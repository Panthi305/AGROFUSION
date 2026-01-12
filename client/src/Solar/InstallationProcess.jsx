import React, { useEffect, useRef } from "react";
import "./InstallationProcess.css";

const InstallationProcess = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const steps = containerRef.current.querySelectorAll(".step-block");
    steps.forEach((step, index) => {
      // Small delay for staggered entrance
      step.style.transitionDelay = `${index * 0.1}s`;
      observer.observe(step);
    });

    return () => observer.disconnect();
  }, []);

  const steps = [
    { id: "1", title: "Site Assessment", desc: "Farm & water survey with technical depth." },
    { id: "2", title: "System Design", desc: "Technical blueprints and sizing." },
    { id: "3", title: "Installation", desc: "Certified build and material supply." },
    { id: "4", title: "Commissioning", desc: "Performance testing and training." },
    { id: "5", title: "After-Sales", desc: "Continuous monitoring and care." },
    { id: "6", title: "Quality Check", desc: "Final SOP audit and safety audit." },
  ];

  return (
    <section className="perspective-section">
      <div className="perspective-container">
        <div className="perspective-header">
          <h2>Project Lifecycle</h2>
          <div className="h-line"></div>
        </div>

        <div className="horizontal-track" ref={containerRef}>
          {steps.map((step, index) => (
            <div className="step-block" key={index}>
              <div className="block-content">
                <span className="step-id">{step.id}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstallationProcess;
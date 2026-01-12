import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ServicePhilosophy.css";

const ServicePhilosophy = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="af-swiss-section">
      {/* Massive Background Text Layer */}
      <div className="af-swiss-bg-wrap">
        <span className="af-outline-text">AGRO</span>
        <span className="af-outline-text">FUSION</span>
      </div>

      <div className="af-swiss-container">
        <div className="af-swiss-intro" data-aos="fade-up">
          <span className="af-pre-title">WHY CHOOSE US?</span>
          <h2 className="af-main-title">We deliver outcomes through three core pillars.</h2>
        </div>

        <div className="af-swiss-row">
          {/* Integration */}
          <div className="af-swiss-col" data-aos="fade-up" data-aos-delay="100">
            <span className="af-val-label">01 // INTEGRATION</span>
            <h3>Seamless Flow</h3>
            <p>Connecting every step of the farming cycle from seed selection to global market exports.</p>
          </div>

          {/* Innovation */}
          <div className="af-swiss-col" data-aos="fade-up" data-aos-delay="200">
            <span className="af-val-label">02 // INNOVATION</span>
            <h3>Digital Growth</h3>
            <p>Leveraging real-time IoT, drone tech, and data-driven advisory for precision farming.</p>
          </div>

          {/* Impact */}
          <div className="af-swiss-col" data-aos="fade-up" data-aos-delay="300">
            <span className="af-val-label">03 // IMPACT</span>
            <h3>Local Prosperity</h3>
            <p>Ensuring measurable growth in farmer livelihoods while protecting our soil and environment.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePhilosophy;
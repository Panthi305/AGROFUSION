import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ServiceHero.css";

const ServiceHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-quart",
      once: true,
      offset: 0, // Ensures animations trigger immediately
    });
  }, []);

  return (
    <section className="af-service-hero">
      <div className="af-service-hero__bg"></div>
      <div className="af-service-hero__overlay"></div>

      <div className="af-service-hero__container">
        <div className="af-service-hero__content">
          <div className="af-reveal-mask">
            <span className="af-hero-tag" data-aos="reveal-up">
              OUR SERVICES
            </span>
          </div>

          <div className="af-reveal-mask">
            <h1 data-aos="reveal-up" data-aos-delay="200">
              Comprehensive Agricultural Solutions for Every Stage
            </h1>
          </div>

          <div className="af-hero-line" data-aos="expand-width" data-aos-delay="500"></div>

          <div className="af-reveal-mask">
            <p data-aos="reveal-up" data-aos-delay="700">
              From inputs and advisory to mechanization and global exports—we offer end-to-end services designed to maximize farmer income.
            </p>
          </div>
        </div>
      </div>

      {/* Premium Scroll Indicator */}
      
    </section>
  );
};

export default ServiceHero;
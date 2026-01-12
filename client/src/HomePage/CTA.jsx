import React from "react";
import { useNavigate } from "react-router-dom"; // 1. Import hook
import "./CTA.css";

const CTA = () => {
  const navigate = useNavigate(); // 2. Initialize navigate

  const handleContactClick = () => {
    // You can add logic here before navigating
    navigate("/contact");
  };

  return (
    <section className="af-cta">
      <div className="af-cta__container">
        <h2 className="af-cta__title" data-aos="fade-up">
          Ready to Transform Agriculture With Us?
        </h2>
        <div className="af-cta__buttons" data-aos="zoom-in" data-aos-delay="200">
          <button 
            className="af-btn af-btn--primary" 
            onClick={handleContactClick}
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
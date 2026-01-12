import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // 1. Import Link
import AOS from "aos";
import "aos/dist/aos.css";
import "./PartnerWithUs.css";

const partnerRoles = [
  "Dealers & Distributors",
  "Drone Pilots & Technicians",
  "FPOs & Cooperatives", 
  "International Agri-Partners",
];

const PartnerWithUs = () => {
  useEffect(() => {
    AOS.init({ duration: 900, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section className="af-partner-section"> 
      <div className="af-partner-container">
        <h2 className="af-partner-title" data-aos="fade-up">
          Join Our Service Network
        </h2>
        <p className="af-partner-intro" data-aos="fade-up">
          We’re looking for:
        </p>

        <ul className="af-partner-list">
          {partnerRoles.map((role, index) => (
            <li key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              {role}
            </li>
          ))}
        </ul>

        <div className="af-partner-btn-container" data-aos="fade-up" data-aos-delay={partnerRoles.length * 100}>
          {/* 2. Used Link with textDecoration: none to prevent the underline */}
          <Link 
            to="/contact" 
            className="af-partner-btn" 
            style={{ textDecoration: 'none', display: 'inline-block' }}
          >
            Become a Service Partner
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PartnerWithUs;
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ServiceDelivery.css";
import { MapPin, Globe, Building2, Warehouse, Home } from "lucide-react";

const deliveryData = [
  { icon: <Globe size={22} />, name: "HQ", location: "Bhopal", desc: "Central Command" },
  { icon: <Building2 size={22} />, name: "Regional", location: "5 Hubs", desc: "Logistics Control" },
  { icon: <MapPin size={22} />, name: "State", location: "36 HQs", desc: "Operations" },
  { icon: <Warehouse size={22} />, name: "District", location: "Nodes", desc: "Distribution" },
  { icon: <Home size={22} />, name: "Village", location: "2000+ Points", desc: "Last Mile" },
];

const ServiceDelivery = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="delivery-roadmap">
      <div className="roadmap-container">
        <div className="roadmap-header" data-aos="fade-up">
          <h2 className="roadmap-title">Our Delivery Network</h2>
          <p className="roadmap-subtitle">Connecting strategy to the soil through a robust 5-tier infrastructure.</p>
        </div>

        <div className="roadmap-grid">
          {deliveryData.map((item, index) => (
            <React.Fragment key={index}>
              <div className="roadmap-item" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="roadmap-card">
                  <div className="roadmap-number">0{index + 1}</div>
                  <div className="roadmap-icon-wrapper">{item.icon}</div>
                  <h4 className="roadmap-tier-name">{item.name}</h4>
                  <p className="roadmap-location">{item.location}</p>
                  <span className="roadmap-desc">{item.desc}</span>
                </div>
              </div>
              
              {/* Wavy Arrow Connector (Hidden after the last item) */}
              {index < deliveryData.length - 1 && (
                <div className="roadmap-wavy-arrow" data-aos="fade-in" data-aos-delay={index * 150}>
                  <svg width="60" height="20" viewBox="0 0 60 20" fill="none">
                    <path d="M1 10C10 20 20 0 30 10C40 20 50 0 59 10" stroke="#4baf47" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4"/>
                    <path d="M54 5L59 10L54 15" stroke="#4baf47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="delivery-footer-box" data-aos="zoom-in">
          <div className="footer-content">
            <strong>Full Support Spectrum:</strong>
            <div className="footer-tags">
              <span>Field Agronomists</span>
              <span>Mobile Service Vans</span>
              <span>Digital Helpdesk</span>
              <span>Franchise Dealers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDelivery;
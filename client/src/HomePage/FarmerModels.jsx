import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  User,
  Users,
  Building2,
  FileCheck,
  Globe,
} from "lucide-react";
import "./FarmerModels.css";

const FarmerModels = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const models = [
    {
      icon: <User size={28} />,  // Reduced from 40 → 28
      title: "Individual Farmer Program",
      text: "Input support, precision advisory, and assured buy-back for individual farmers.",
    },
    {
      icon: <Users size={28} />,
      title: "FPO Integration",
      text: "Bulk procurement, capacity building, training, and digital onboarding for FPOs.",
    },
    {
      icon: <Building2 size={28} />,
      title: "Cooperative Society Model",
      text: "Storage infrastructure, market linkage, and scheme facilitation for cooperatives.",
    },
    {
      icon: <FileCheck size={28} />,
      title: "Contract Farming",
      text: "Guaranteed buy-back with export-quality production standards and pricing security.",
    },
    {
      icon: <Globe size={28} />,
      title: "International Collaboration",
      text: "Global market access and export partnerships via Jigisha International.",
    },
  ];

  return (
    <section className="fm-section">
      <div className="fm-container">
        <h2 className="fm-title" data-aos="fade-up">
          How We Work With Farmers
        </h2>
        <p className="fm-subtitle" data-aos="fade-up" data-aos-delay="200">
          Tailored engagement models to empower every type of farming stakeholder
        </p>

        <div className="fm-grid">
          {models.map((model, index) => (
            <div
              className="fm-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="fm-icon-wrapper">
                <div className="fm-icon">
                  {model.icon}
                </div>
              </div>
              <h3 className="fm-card-title">{model.title}</h3>
              <p className="fm-card-text">{model.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FarmerModels;
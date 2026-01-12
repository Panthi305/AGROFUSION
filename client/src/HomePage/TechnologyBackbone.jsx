import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Smartphone, Radar, Boxes, CreditCard } from "lucide-react";
import "./TechnologyBackbone.css";

const TechnologyBackbone = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const features = [
    {
      id: "01",
      title: "Farmer App",
      text: "Multilingual mobile app with advisory services and real-time updates.",
      icon: <Smartphone size={24} />,
    },
    {
      id: "03",
      title: "ERP & CRM",
      text: "Inventory control, dealer management, and farmer traceability.",
      icon: <Boxes size={24} />,
    },
    {
      id: "02",
      title: "IoT & Drones",
      text: "Soil sensors, drone spraying, and precision agriculture solutions.",
      icon: <Radar size={24} />,
    },
    {
      id: "04",
      title: "Digital Payments",
      text: "Subsidy disbursement and transparent financial workflows.",
      icon: <CreditCard size={24} />,
    },
  ];

  return (
    <section className="infographic-section">
      <div className="infographic-container">
        
        {/* New Section Header */}
        <div className="section-header" data-aos="fade-down">
          <h2 className="section-title">Technology Backbone</h2>
          <p className="section-description">
            Empowering the agricultural ecosystem through integrated digital 
            solutions and smart infrastructure.
          </p>
        </div>

        <div className="infographic-grid">
          {/* Central Circle Elements */}
          <div className="center-circle">
            <div className="center-text">
              <span>INFO</span>
              <strong>TECH</strong>
              <div className="dots">
                <span className="dot dot-1"></span>
                <span className="dot dot-2"></span>
                <span className="dot dot-3"></span>
                <span className="dot dot-4"></span>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          {features.map((item, index) => (
            <div 
              key={item.id} 
              className={`info-card card-${item.id}`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="card-number">{item.id}</div>
              <div className="card-content">
                <div className="card-icon">{item.icon}</div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.text}</p>
              </div>
              <div className={`connector connector-${item.id}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyBackbone;
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ServiceVerticals.css";
import { Sprout, Tractor, Cpu, Factory, Globe, Leaf, Briefcase } from "lucide-react";
import a1 from "./../assets/Service/a1.png"
import a2 from "./../assets/Service/a2.png"
import a3 from "./../assets/Service/a3.png"
import a4 from "./../assets/Service/a4.png"
import a5 from "./../assets/Service/a5.png"
import a6 from "./../assets/Service/a6.png"
import a7 from "./../assets/Service/a7.png"
const servicesData = [
  {
    id: "01",
    icon: <Sprout size={22} />,
    title: "Smart Input Solutions",
    image: a1,
    description: "High-quality certified seeds and soil-test-based nutrient management.",
    points: ["Seed Selection", "Fertilizer Plans", "Crop Protection", "Organic Inputs", "Benefit: 22% cost reduction"]
  },
  {
    id: "02",
    icon: <Tractor size={22} />,
    title: "Mechanization (MaaS)",
    image: a2,
    points: ["Harvesters & Tillers", "Irrigation", "Drone Spraying", "Post-Harvest Tools", "Benefit: Pay-per-acre models"]
  },
  {
    id: "03",
    icon: <Cpu size={22} />,
    title: "Technology-Driven Farming",
    image: a3, // Tech/Drone
    description: "Digital transformation using IoT, drones, GIS, and real-time analytics.",
    points: ["Soil Testing", "Drone Mapping", "GIS Planning", "IoT Sensors", "Benefit: 40% water savings"]
  },
  {
    id: "04",
    icon: <Factory size={22} />,
    title: "Value Addition",
    image: a4,
    description: "Processing, packaging, and branding to increase market value.",
    points: ["Aggregation Centers", "Processing Units", "QR Traceability", "Contract MFG", "Benefit: Higher price realization"]
  },
  {
    id: "05",
    icon: <Globe size={22} />,
    title: "Global Market Linkage",
    image: a5,
    description: "Bridging the gap between domestic farmers and international buyers.",
    points: ["B2B Supply", "Export Channels", "Buy-Back Assurance", "Digital Marketplace", "Benefit: 12% price premium"]
  },
  {
    id: "06",
    icon: <Leaf size={22} />,
    title: "Green Farming",
    image: a6,
    description: "Sustainable wealth from waste via Bio-CNG and carbon credit programs.",
    points: ["Bio-CNG Plants", "Organic Manure", "Carbon Credits", "Green Hydrogen", "Benefit: Additional waste income"]
  },
  {
    id: "07",
    icon: <Briefcase size={22} />,
    title: "Policy-Led Farming",
    image: a7,
    description: "Execution partner for state and central government agri-schemes.",
    points: ["Scheme Facilitation", "Subsidy Management", "Capacity Building", "Agri-Infra Fund", "Benefit: Easier subsidy access"]
  }
];

const ServiceVerticals = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="af-eco-section">
      <div className="af-eco-container">
        <div className="af-eco-header" data-aos="fade-up">
          <span className="af-eco-badge">SERVICES</span>
          <h2 className="af-eco-title">Agricultural Ecosystem</h2>
        </div>

        <div className="af-eco-grid" data-aos="fade-up">
          <div className="af-eco-nav">
            {servicesData.map((item, index) => (
              <div
                key={index}
                className={`af-eco-tab ${active === index ? "active" : ""}`}
                onMouseEnter={() => setActive(index)}
                onClick={() => setActive(index)}
              >
                <span className="af-tab-num">{item.id}</span>
                <span className="af-tab-title">{item.title}</span>
              </div>
            ))}
          </div>

          <div className="af-eco-display">
            <div className="af-display-card" key={active}>

              {/* The Image is now a smaller "Header" for the card */}
              <div className="af-display-image">
                <img src={servicesData[active].image} alt={servicesData[active].title} />
              </div>

              <div className="af-display-content-wrap">
                <div className="af-display-icon">{servicesData[active].icon}</div>
                <h3 className="af-display-title">{servicesData[active].title}</h3>
                <p className="af-display-desc">{servicesData[active].description}</p>

                <ul className="af-display-points">
                  {servicesData[active].points.slice(0, 4).map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>

                <div className="af-display-benefit">
                  <span>Farmer Benefit</span>
                  <p>{servicesData[active].points[4].split(': ')[1]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceVerticals;
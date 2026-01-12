import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./WhyChoose.css";

const featuresData = [
  {
    title: "End-to-End Integration",
    text: "From seeds to exports, we handle the entire supply chain internally.",
    count: "01"
  },
  {
    title: "Technology-Driven",
    text: "Real-time advisory, drone spraying, and soil IoT for precision farming.",
    count: "02"
  },
  {
    title: "Government-Aligned",
    text: "Direct assistance for farmers to access critical subsidies and schemes.",
    count: "03"
  },
  {
    title: "Sustainable Model",
    text: "Circular economy through Bio-CNG and certified organic farming.",
    count: "04"
  },
  {
    title: "Global Market Access",
    text: "Direct international trade routes via Jigisha International Pvt. Ltd.",
    count: "05"
  },
];

const WhyChoose = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="agro-minimal">
      <div className="agro-minimal__container">
        
        {/* Left Side: Sticky Header */}
        <div className="agro-minimal__left" data-aos="fade-right">
          <span className="agro-minimal__tag">EXCELLENCE</span>
          <h2 className="agro-minimal__main-title">
            The <br /> <span>Agro Fusion</span> <br /> Difference
          </h2>
        </div>

        {/* Right Side: Clean Typography Rows */}
        <div className="agro-minimal__right">
          {featuresData.map((feature, index) => (
            <div 
              key={index} 
              className="agro-minimal__row"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="agro-minimal__row-content">
                <span className="agro-minimal__number">{feature.count}</span>
                <div className="agro-minimal__text-wrap">
                  <h3 className="agro-minimal__row-title">{feature.title}</h3>
                  <p className="agro-minimal__row-desc">{feature.text}</p>
                </div>
              </div>
              {/* This grows on hover */}
              <div className="agro-minimal__hover-bg"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;
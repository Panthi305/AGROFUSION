import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./JigishaAdvantage.css";

const advantagesData = [
  {
    title: "Cost Efficiency",
    text: "In-house manufacturing and sourcing reduce input costs by 8–12%.",
  },
  {
    title: "Technology Backbone",
    text: "Jigisha Infotech powers our digital ecosystem.",
  },
  {
    title: "Logistics Excellence",
    text: "Jigisha Logistics ensures seamless supply chain movement.",
  },
  {
    title: "Global Reach",
    text: "Jigisha International connects us to 15+ countries.",
  },
  {
    title: "Green Energy",
    text: "Jigisha Green drives our solar and Bio-CNG initiatives.",
  },
];

const JigishaAdvantage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="af-jigisha-advantage">
      <div className="af-jigisha-advantage__container" data-aos="fade-up">
        <h2 className="af-jigisha-advantage__title">
          Powered by 20+ Group Companies
        </h2>
        <p className="af-jigisha-advantage__intro">
          Agro Fusion is not operating in isolation. We are a proud part of the
          Jigisha Group—a diversified conglomerate with deep expertise in
          manufacturing, technology, logistics, energy, and infrastructure.
          This vertical integration gives us unmatched advantages:
        </p>

        <div className="af-jigisha-advantage__grid">
          {advantagesData.map((item, index) => (
            <div
              className="af-jigisha-advantage__card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JigishaAdvantage;

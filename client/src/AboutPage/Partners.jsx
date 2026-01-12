import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Partners.css";

// Example logos (replace with actual images)
const partnersData = [
  {
    category: "Government",
    logos: [
      "https://via.placeholder.com/150x80?text=State+Agri+Dept",
      "https://via.placeholder.com/150x80?text=NABARD",
      "https://via.placeholder.com/150x80?text=APEDA",
    ],
  },
  {
    category: "Corporate",
    logos: [
      "https://via.placeholder.com/150x80?text=OEM+Machinery",
      "https://via.placeholder.com/150x80?text=Seed+Co",
      "https://via.placeholder.com/150x80?text=Fertilizer+Co",
    ],
  },
  {
    category: "International",
    logos: [
      "https://via.placeholder.com/150x80?text=UAE+Importers",
      "https://via.placeholder.com/150x80?text=Africa+Agri",
      "https://via.placeholder.com/150x80?text=SE+Asia+Dist",
    ],
  },
  {
    category: "NGOs & Cooperatives",
    logos: [
      "https://via.placeholder.com/150x80?text=FPOs",
      "https://via.placeholder.com/150x80?text=Dairy+Unions",
      "https://via.placeholder.com/150x80?text=Rural+Dev+Agencies",
    ],
  },
];

const Partners = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="af-partners">
      <div className="af-partners__container">
        <h2 className="af-partners__title" data-aos="fade-up">
          Growing Together
        </h2>

        {partnersData.map((group, index) => (
          <div
            className="af-partners__group"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <h3 className="af-partners__category">{group.category}</h3>
            <div className="af-partners__logos">
              {group.logos.map((logo, idx) => (
                <img
                  key={idx}
                  src={logo}
                  alt={`${group.category} logo ${idx + 1}`}
                  className="af-partners__logo"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;

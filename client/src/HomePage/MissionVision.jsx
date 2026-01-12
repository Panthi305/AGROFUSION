import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./MissionVision.css";

const MissionVision = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
    }); 
  }, []); 

  return (
    <section className="af-mv">
      <div className="af-mv__container">
        {/* Mission with Background Image */}
        <div className="af-mv__block" data-aos="fade-up">
          <div className="af-mv__content">
            <h2 className="af-mv__title">
              Our Mission:
              <span>Empowering Every Farmer</span>
            </h2>

            <p className="af-mv__text">
              Agro Fusion exists to integrate the entire agricultural value chain—
              inputs, mechanization, farm services, processing, market linkages,
              and technology—into a single, high-efficiency, farmer-first
              ecosystem.
            </p>

            <div className="af-mv__stats">
              <div className="af-mv__stat">
                <div className="af-mv__stat-number">8-22%</div>
                <div className="af-mv__stat-label">Cost Reduction</div>
              </div>
              <div className="af-mv__stat">
                <div className="af-mv__stat-number">18-35%</div>
                <div className="af-mv__stat-label">Income Increase</div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision with Background Image */}
        <div
          className="af-mv__block af-mv__block--vision"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div className="af-mv__content">
            <h2 className="af-mv__title">Our Vision</h2>

            <p className="af-mv__text">
              To become India's most integrated agricultural solutions enterprise,
              enabling sustainable productivity and global market access for every
              farmer and cooperative.
            </p>
          </div>
          
          {/* Decorative SVG Icon */}
          <div className="af-mv__vision-icon">
            <svg viewBox="0 0 100 100">
              <path d="M50,10 L90,30 L90,70 L50,90 L10,70 L10,30 Z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
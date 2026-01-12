import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./MissionVision.css";
import mvimg from "./../assets/About/mv1.png";
const MissionVision = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="af-mv">
      <div className="af-mv__container">

        {/* LEFT SIDE: TEXT CONTENT */}
        <div className="af-mv__text-side" data-aos="fade-right">
          <span className="af-mv__subtitle">ABOUT US</span>
          <h2 className="af-mv__main-title">Sustainable Agriculture And Environmental Impact</h2>
          <p className="af-mv__description">
            We are dedicated to revolutionizing the agricultural landscape by integrating
            cutting-edge technology with traditional farming wisdom.
          </p>

          <div className="af-mv__blocks">
            <div className="af-mv__item">
              <div className="af-mv__icon-box">✓</div>
              <div className="af-mv__info">
                <h3>Our Mission</h3>
                <p>To integrate the entire agricultural value chain into a unified, farmer-first ecosystem.</p>
              </div>
            </div>

            <div className="af-mv__item">
              <div className="af-mv__icon-box">✓</div>
              <div className="af-mv__info">
                <h3>Our Vision</h3>
                <p>To become India’s most trusted and integrated agricultural solutions partner.</p>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE: EXACT REPRODUCTION OF REFERENCE CODE */}
        <div className="af-mv__image-side" data-aos="fade-left">
          <div className="about-us-img">
            {/* The Green Curved Shape with Counter */}
            <div className="count-shap">

            </div>

            {/* Profile Image and Decorative Leaf Shapes */}
            <div className="about-profile">
              <img
                src={mvimg}
                alt="Agro Profile"
                className="main-profile-img"
              />
              <div className="img-shap-left"></div>
              <div className="img-shap-right"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;
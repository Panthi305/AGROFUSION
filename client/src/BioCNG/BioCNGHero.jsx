import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // 1. Import Link
import AOS from "aos";
import "aos/dist/aos.css";
import "./BioCNGHero.css";

const BioCNGHero = () => {
  useEffect(() => { 
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section className="bio-cng-hero">
      {/* 1. Parallax Image Layer */}
      <div className="bio-cng-hero__parallax-img"></div>

      {/* 2. Background Video */}
      <video
        className="bio-cng-hero__bg"
        src="/videos/bio-cng-plant.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* 3. Overlay */}
      <div className="bio-cng-hero__overlay"></div>

      {/* 4. Content */}
      <div className="bio-cng-hero__content" data-aos="fade-up">
        <h1>Turn Agricultural Waste into Wealth</h1>
        <p>
          Transform crop residue and farm biomass into clean Bio-CNG and organic fertilizer. 
          Earn while helping the environment.
        </p>
        <div className="bio-cng-hero__buttons">
          {/* 2. Replace button with Link and add styles to remove underline */}
          <Link 
            to="/contact" 
            className="btn-primary" 
            style={{ textDecoration: 'none', display: 'inline-block' }}
          >
            Ask Our Experts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BioCNGHero;
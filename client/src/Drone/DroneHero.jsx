import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./DroneHero.css";
// If using Vite/Webpack, import the video: 
// import droneVideo from "../assets/drone framing 1.mp4";

const DroneHero = () => {
  const bgRef = useRef(null);
  const scrollToBooking = () => {
    const bookingSection = document.getElementById("drone-booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-quart",
      once: true,
    });

    const handleScroll = () => {
      if (bgRef.current && window.innerWidth > 1024) {
        const scrolled = window.scrollY;
        // Subtle parallax - translate3d for hardware acceleration
        bgRef.current.style.transform = `translate3d(0, ${scrolled * 0.25}px, 0)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="drone-hero">
      <div className="drone-hero__parallax-container">
        <div className="drone-hero__parallax-bg" ref={bgRef}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="drone-hero__media"
          >
            {/* Update this path to your actual local file location */}
            <source src="/src/assets/drone framing 1.mp4" type="video/mp4" />
          </video>
          <div className="drone-hero__overlay"></div>
        </div>
      </div>

      <div className="drone-hero__content">
        <div className="drone-hero__badge" data-aos="fade-down">
          <span>NEW</span> AI-POWERED DRONE FLEET
        </div>

        <h1 data-aos="reveal-up" data-aos-delay="200">
          Revolutionize Farming with <br />
          <span className="text-gradient">Drone Technology</span>
        </h1>

        <p className="drone-hero__description" data-aos="fade-up" data-aos-delay="400">
          Increase yield by <span className="highlight">25-35%</span> and reduce chemical usage by <span className="highlight">40%</span>.
          Monitor your farm from the sky with Agro Fusion’s precision services.
        </p>

        <div className="drone-hero__buttons" data-aos="fade-up" data-aos-delay="600">
          <button
            className="drone-btn-primary"
            onClick={scrollToBooking}
          >
            Get Quote for Flight
            <span className="btn-shine"></span>
          </button>

        </div>


      </div>
    </section>
  );
};

export default DroneHero;
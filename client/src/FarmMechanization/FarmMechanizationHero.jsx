import React from "react";
import "./FarmMechanizationHero.css";
import heroVideo from "./../assets/Mechanization/herom.mp4";

const FarmMechanizationHero = () => {
  return (
    <section className="fm-hero">
      {/* VIDEO BACKGROUND */}
      <div className="fm-hero-video-wrapper">
        <video
          className="fm-hero-video"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>

      {/* DARK GRADIENT OVERLAY */}
      <div className="fm-hero-overlay" />

      {/* CONTENT */}
      <div className="fm-hero-container">
        <div className="fm-hero-content">
          <h1>
            Access Modern Farming Equipment
            <br />
            <span>Without Heavy Investment</span>
          </h1>

          <p>
            India’s largest farm equipment rental network. Get harvesters,
            tractors, drones, and irrigation systems delivered directly to your
            farm. <strong>Pay only for what you use.</strong>
          </p>

          <div className="fm-hero-actions">
            <a href="/book-equipment" className="fm-btn-primary">
              Book Equipment Now
            </a>
            <a href="/equipment-list" className="fm-btn-secondary">
              View Available Equipment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmMechanizationHero;

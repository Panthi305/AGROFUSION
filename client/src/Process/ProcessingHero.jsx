import { useEffect, useRef } from "react";
import "./ProcessingHero.css";

const ProcessingHero = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const scrolled = window.scrollY;
        // Adjust the '0.5' to change the speed of the parallax
        bgRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="processing-hero-section">
      {/* This div is our Parallax Layer */}
      <div className="processing-hero-bg" ref={bgRef}></div>

      <div className="processing-hero-overlay">
        <div className="processing-hero-content">
          <h1 className="processing-hero-title">
            From Farm to Market: <span>Complete Value Chain</span> Solutions World-Wide
          </h1>
          <p className="processing-hero-subtitle">
            Transform your farm produce into market-ready products with our
            processing infrastructure and connect directly to buyers.
          </p>

          

          <div className="processing-hero-buttons">
            <button className="processing-primary-btn">Explore Solutions</button>
            <button className="processing-secondary-btn">Market Assessment</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessingHero;
import { useEffect } from "react";
import AOS from "aos";
import Typewriter from "typewriter-effect";
import "aos/dist/aos.css";
import "./Hero.css";
import heroVideo from "../assets/hero.mp4";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-quad",
      once: true,
    });
  }, []);

  return (
    <section className="af-hero">
      <video
        className="af-hero__video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070&auto=format&fit=crop"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="af-hero__overlay"></div>

      <div className="af-hero__content">
        <div className="typing-container">
          <h1 className="typing-title">
            <Typewriter
              options={{
                strings: [
                  "Transforming Indian Agriculture.",
                  "Global Market Access.",
                  "Scaling Through Technology."
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 40, // Slightly snappier deletion
                delay: 60,       // Professional typing speed
                pauseFor: 2500,  // WAIT before deleting so people can read!
              }}
            />
          </h1>
        </div>

        <p data-aos="fade-up" data-aos-delay="400">
          An integrated agricultural platform connecting farmers with inputs, technology, finance, and global markets.
        </p>

        <div className="af-hero__buttons" data-aos="fade-up" data-aos-delay="600">
          <button
            className="af-btn af-btn--primary"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Services
          </button>
          <button
            className="af-btn af-btn--secondary"
            onClick={() => window.location.href = '/partnership'}
          >
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
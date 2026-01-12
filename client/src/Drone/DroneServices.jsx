import React, { useEffect } from "react";
import { Droplets, ShieldCheck, Map, BarChart3 } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./DroneServices.css";

const DroneServices = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="drone-services">
      <div className="drone-services__container">
        <h2 className="drone-services__title" data-aos="fade-up">
          Comprehensive Drone Solutions
        </h2>
        <p className="drone-services__intro" data-aos="fade-up">
          AI-powered aerial analytics for complete farm productivity.
        </p>

        <div className="drone-services__wrapper">
          <div className="center-hub" data-aos="zoom-in">
            <div className="hub-content">
              <span>AGRO</span>
              <span>FUSION</span>
            </div>
          </div>

          <div className="drone-services__grid">
            {/* LEFT SIDE */}
            <div className="drone-service-item item-tl side-left" data-aos="fade-right">
              <div className="service-icon"><Droplets size={32} /></div>
              <div className="card-content">
                <h3>Aerial Spraying</h3>
                <ul>
                  <li><strong>Precision:</strong> 95% chemical efficiency via ULV.</li>
                  <li><strong>Speed:</strong> 30 acres daily coverage.</li>
                </ul>
              </div>
            </div>

            <div className="drone-service-item item-tr side-right" data-aos="fade-left">
              <div className="card-content">
                <h3>Crop Mapping</h3>
                <ul>
                  <li><strong>NDVI:</strong> Real-time plant health insights.</li>
                  <li><strong>Alerts:</strong> 10-day early pest detection.</li>
                </ul> 
              </div>
              <div className="service-icon"><Map size={32} /></div>
            </div>
            <div className="drone-service-item item-bl side-left" data-aos="fade-right">
              <div className="service-icon"><ShieldCheck size={32} /></div>
              <div className="card-content">
                <h3>Field Survey</h3>
                <ul>
                  <li><strong>Accuracy:</strong> CM-level GIS farm mapping.</li>
                  <li><strong>Analysis:</strong> 3D models for drainage.</li>
                </ul>
              </div>
            </div>

            {/* RIGHT SIDE */}


            <div className="drone-service-item item-br side-right" data-aos="fade-left">
              <div className="card-content">
                <h3>Yield Planning</h3>
                <ul>
                  <li><strong>Models:</strong> Predictive growth monitoring.</li>
                  <li><strong>Logistics:</strong> Optimal harvest windows.</li>
                </ul>
              </div>
              <div className="service-icon"><BarChart3 size={32} /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DroneServices;
import { CheckCircle } from "lucide-react";
import "./SeedsPortfolio.css";

const SeedsPortfolio = () => {
  return (
    <section className="seed-portfolio-v3">
      <div className="portfolio-container">
        
        {/* Modern Clean Header */}
        <header className="portfolio-header">
          <span className="section-subtitle">Premium Seed Solutions</span>
          <h2>Certified Genetics for Superior Yields</h2>
          <div className="header-bar"></div>
          <p>
            Curated high-performance seeds engineered for purity, vigor, and 
            stability across India's diverse agro-climatic zones.
          </p>
        </header>

        {/* Circular Grid Layout */}
        <div className="seed-circle-grid">
          
          {/* CEREALS */}
          <div className="seed-circle-item">
            <div className="circle-image-wrapper">
              <img src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=800" alt="Cereals" />
              <div className="circle-overlay">01</div>
            </div>
            <div className="seed-circle-info">
              <h3>Cereals & Grains</h3>
              <p>Hybrid Paddy, Wheat (HD/PBW), and Maize with high lodging resistance.</p>
              <ul className="mini-check-list">
                <li><CheckCircle size={14} /> High germination rate</li>
                <li><CheckCircle size={14} /> Short to long duration</li>
              </ul>
            </div>
          </div>

          {/* PULSES */}
          <div className="seed-circle-item">
            <div className="circle-image-wrapper">
              {/* Updated URL: High quality Pulses/Lentils */}
              <img src="https://images.unsplash.com/photo-1547051253-195971a938c1?q=80&w=800" alt="Pulses" />
              <div className="circle-overlay">02</div>
            </div>
            <div className="seed-circle-info">
              <h3>Pulses Portfolio</h3>
              <p>Certified Tur, Urad, and Moong with export-quality protein profiles.</p>
              <ul className="mini-check-list">
                <li><CheckCircle size={14} /> Drought tolerant</li>
                <li><CheckCircle size={14} /> Disease resistant</li>
              </ul>
            </div>
          </div>

          {/* OILSEEDS */}
          <div className="seed-circle-item">
            <div className="circle-image-wrapper">
              {/* Updated URL: Mustard/Oilseeds field */}
              <img src="https://images.unsplash.com/photo-1463131343837-773a4694f4c2?q=80&w=800" alt="Oilseeds" />
              <div className="circle-overlay">03</div>
            </div>
            <div className="seed-circle-info">
              <h3>High-Yield Oilseeds</h3>
              <p>Mustard and Soybean variants optimized for maximum oil recovery.</p>
              <ul className="mini-check-list">
                <li><CheckCircle size={14} /> Enhanced recovery</li>
                <li><CheckCircle size={14} /> Certified JS series</li>
              </ul>
            </div>
          </div>

          {/* VEGETABLES */}
          <div className="seed-circle-item">
            <div className="circle-image-wrapper">
              {/* Updated URL: Premium Vegetable farming */}
              <img src="https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=800" alt="Vegetables" />
              <div className="circle-overlay">04</div>
            </div>
            <div className="seed-circle-info">
              <h3>Hybrid Vegetables</h3>
              <p>Premium Tomato, Chilli, and Okra hybrids for the fresh market.</p>
              <ul className="mini-check-list">
                <li><CheckCircle size={14} /> Uniform fruit quality</li>
                <li><CheckCircle size={14} /> High shelf life</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Minimal Footer CTA */}
        <div className="portfolio-footer">
          <button className="consult-btn" onClick={() => (window.location.href = "/contact")}>
            Connect with an Agronomist
          </button>
        </div>
      </div>
    </section>
  );
};

export default SeedsPortfolio;
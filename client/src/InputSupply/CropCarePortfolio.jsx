import { Bug, ShieldCheck, Sprout, Layers, CheckCircle } from "lucide-react";
import "./CropCarePortfolio.css";

const CropCarePortfolio = () => {
  return (
    <section className="cc-section">
      <div className="cc-container">

        {/* HEADER */}
        <header className="cc-header">
          <div className="cc-badge">CIB&RC Licensed Solutions</div>
          <h2>Advanced Protection for <span>Healthy Crops</span></h2>
          <p>
            Comprehensive crop protection engineered for safety, sustainability, 
            and effective resistance management.
          </p>
        </header>

        {/* 4-COLUMN GRID (Laptop) */}
        <div className="cc-grid">

          {/* INSECTICIDES */}
          <div className="cc-card">
            <div className="cc-circle-frame">
              <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=600" alt="Insecticides" />
              <div className="cc-card-icon"><Bug size={18} /></div>
            </div>
            <h3>Insecticides</h3>
            <ul className="cc-list">
              <li><CheckCircle size={14} /> Systemic sucking pest control</li>
              <li><CheckCircle size={14} /> Resistance-safe chemistry</li>
              <li><CheckCircle size={14} /> Low toxicity formulations</li>
            </ul>
          </div>

          {/* FUNGICIDES */}
          <div className="cc-card">
            <div className="cc-circle-frame">
              <img src="https://images.unsplash.com/photo-1598514982846-35c8e0f24f40?q=80&w=600" alt="Fungicides" />
              <div className="cc-card-icon"><ShieldCheck size={18} /></div>
            </div>
            <h3>Fungicides</h3>
            <ul className="cc-list">
              <li><CheckCircle size={14} /> Broad-spectrum protection</li>
              <li><CheckCircle size={14} /> Rice blast specialists</li>
              <li><CheckCircle size={14} /> Systemic disease control</li>
            </ul>
          </div>

          {/* HERBICIDES */}
          <div className="cc-card">
            <div className="cc-circle-frame">
              <img src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=600" alt="Herbicides" />
              <div className="cc-card-icon"><Sprout size={18} /></div>
            </div>
            <h3>Herbicides</h3>
            <ul className="cc-list">
              <li><CheckCircle size={14} /> Selective weed management</li>
              <li><CheckCircle size={14} /> Pre-emergence control</li>
              <li><CheckCircle size={14} /> Dosage training included</li>
            </ul>
          </div>

          {/* SPECIALTY */}
          <div className="cc-card">
            <div className="cc-circle-frame">
              <img src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=600" alt="Specialty" />
              <div className="cc-card-icon"><Layers size={18} /></div>
            </div>
            <h3>Specialty Care</h3>
            <ul className="cc-list">
              <li><CheckCircle size={14} /> Spray efficiency stickers</li>
              <li><CheckCircle size={14} /> Biological controls</li>
              <li><CheckCircle size={14} /> Next-gen nano sprays</li>
            </ul>
          </div>

        </div>

        {/* IPM SUPPORT SECTION */}
        <div className="cc-ipm-box">
          <div className="cc-ipm-content">
            <h3>Integrated Pest Management (IPM) Support</h3>
            <div className="cc-ipm-grid">
              <div className="ipm-item">Early Scouting</div>
              <div className="ipm-item">Threshold Decisions</div>
              <div className="ipm-item">Resistance Monitoring</div>
              <div className="ipm-item">Digital Records</div>
            </div>
            <button className="cc-btn" onClick={() => (window.location.href = "/contact")}>
              Get Protection Advisory
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CropCarePortfolio;
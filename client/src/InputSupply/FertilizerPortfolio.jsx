import { CheckCircle, Leaf, Droplets, FlaskConical } from "lucide-react";
import "./FertilizerPortfolio.css";

const FertilizerPortfolio = () => {
  return (
    <section className="fertilizer-section">
      <div className="fertilizer-container">

        {/* HEADER */}
        <div className="fertilizer-header"> 
          <span className="section-badge">Crop Nutrition</span>
          <h2>Balanced Nutrition for Optimal Growth</h2>
          <p>
            Maximizing nutrient efficiency, crop health, and farm profitability 
            through scientifically sourced and laboratory-tested formulations.
          </p>
        </div>

        {/* GRID - Laptop: 4 columns | Tablet: 2 columns | Mobile: 1 column */}
        <div className="fertilizer-grid">

          {/* BULK */}
          <div className="fertilizer-card">
            <div className="circle-frame">
              <img src="https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=600" alt="Bulk" />
            </div>
            <h3>Bulk Fertilizers</h3>
            <ul>
              <li><CheckCircle size={16}/> Urea, DAP, NPK, MOP</li>
              <li><CheckCircle size={16}/> Direct sourcing</li>
              <li><CheckCircle size={16}/> Batch-wise testing</li>
            </ul>
          </div>

          {/* WSF */}
          <div className="fertilizer-card">
            <div className="circle-frame">
              <img src="https://images.unsplash.com/photo-1594904351111-a072f80b1a71?q=80&w=600" alt="WSF" />
            </div>
            <h3>Water-Soluble</h3>
            <ul>
              <li><Droplets size={16}/> 19:19:19, 13:40:13</li>
              <li><Droplets size={16}/> Drip & Fertigation</li>
              <li><Droplets size={16}/> Precision ready</li>
            </ul>
          </div>

          {/* MICRONUTRIENTS */}
          <div className="fertilizer-card">
            <div className="circle-frame">
              <img src="https://images.unsplash.com/photo-153218787566d-145c32746450?q=80&w=600" alt="Micro" />
            </div>
            <h3>Micronutrients</h3>
            <ul>
              <li><FlaskConical size={16}/> Zinc & Ferrous blends</li>
              <li><FlaskConical size={16}/> Chelated mixtures</li>
              <li><FlaskConical size={16}/> Custom soil mixes</li>
            </ul>
          </div>

          {/* BIO & ORGANIC */}
          <div className="fertilizer-card">
            <div className="circle-frame">
              <img src="https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=600" alt="Bio" />
            </div>
            <h3>Eco-Friendly Inputs</h3>
            <ul>
              <li><Leaf size={16}/> Azotobacter & PSB</li>
              <li><Leaf size={16}/> Mycorrhiza efficiency</li>
              <li><Leaf size={16}/> Certified Bio-manure</li>
            </ul>
          </div>

        </div>

        {/* PLANNING SECTION */}
        <div className="fertilizer-planning">
          <h3>Nutrition Planning & Advisory</h3>
          <div className="planning-grid">
            <div>Soil Test Based Plans</div>
            <div>Growth Stage Formulas</div>
            <div>Cost Optimization</div>
            <div>Sustainable Management</div>
          </div>

          <button className="fertilizer-contact-btn" onClick={() => (window.location.href = "/contact")}>
            Connect with an Expert
          </button>
        </div>

      </div>
    </section>
  );
};

export default FertilizerPortfolio;
import { Leaf, Recycle, ShieldCheck, CheckCircle } from "lucide-react";
import "./OrganicFarmingPortfolio.css";

const OrganicFarmingPortfolio = () => {
  return (
    <section className="org-section">
      <div className="org-container">

        {/* HEADER */}
        <header className="org-header"> 
          <div className="eco-badge">Sustainable Agriculture</div>
          <h2>Solutions for <span>Organic Transition</span></h2>
          <p>
            End-to-end natural farming solutions aligned with PKVY and NMSA — 
            supporting farmers from input transition to premium market linkage.
          </p>
        </header>

        {/* 4-COLUMN GRID */}
        <div className="org-grid">

          {/* TRADITIONAL INPUTS */}
          <div className="org-card">
            <div className="org-circle-frame">
              <img src="https://images.unsplash.com/photo-1603112579965-74fbb2b3d1b7?q=80&w=600" alt="Traditional" />
              <div className="org-card-icon"><Leaf size={18} /></div>
            </div>
            <h3>Traditional Inputs</h3>
            <ul className="org-list">
              <li><CheckCircle size={14} /> Panchagavya formulations</li>
              <li><CheckCircle size={14} /> Jivamrut microbial cultures</li>
              <li><CheckCircle size={14} /> Fish amino acid solutions</li>
            </ul>
          </div>

          {/* MICROBIAL */}
          <div className="org-card">
            <div className="org-circle-frame">
              <img src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=600" alt="Microbial" />
              <div className="org-card-icon"><Leaf size={18} /></div>
            </div>
            <h3>Microbial Consortia</h3>
            <ul className="org-list">
              <li><CheckCircle size={14} /> Rhizobium & Azospirillum</li>
              <li><CheckCircle size={14} /> PSB strains for Phosphorus</li>
              <li><CheckCircle size={14} /> Trichoderma & PGPR</li>
            </ul>
          </div>

          {/* CERTIFIED */}
          <div className="org-card">
            <div className="org-circle-frame">
              <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=600" alt="Certified" />
              <div className="org-card-icon"><ShieldCheck size={18} /></div>
            </div>
            <h3>Certified Inputs</h3>
            <ul className="org-list">
              <li><CheckCircle size={14} /> EU-compliant standards</li>
              <li><CheckCircle size={14} /> NPOP certified domestic</li>
              <li><CheckCircle size={14} /> Full traceability docs</li>
            </ul>
          </div>

          {/* WASTE TO INPUT */}
          <div className="org-card">
            <div className="org-circle-frame">
              <img src="https://images.unsplash.com/photo-1598514982846-35c8e0f24f40?q=80&w=600" alt="Recycle" />
              <div className="org-card-icon"><Recycle size={18} /></div>
            </div>
            <h3>Waste-to-Input</h3>
            <ul className="org-list">
              <li><CheckCircle size={14} /> Crop residue composting</li>
              <li><CheckCircle size={14} /> Bio-gas slurry fertilizers</li>
              <li><CheckCircle size={14} /> Circular farming systems</li>
            </ul>
          </div>

        </div>

        {/* SUPPORT SECTION */}
        <div className="org-support-box">
          <h3>Certification & Market Support</h3>
          <div className="org-support-grid">
            <div className="support-item">Certification Documentation</div>
            <div className="support-item">Audit Preparation</div>
            <div className="support-item">Premium Market Linkage</div>
            <div className="support-item">Export Connections</div>
          </div>

          

          <button className="org-btn" onClick={() => (window.location.href = "/contact")}>
            Connect for Organic Advisory
          </button>
        </div>

      </div>
    </section>
  );
};

export default OrganicFarmingPortfolio;
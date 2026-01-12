import React from "react";
import {
  Sprout, Beaker, ShieldCheck, Leaf,
  Settings2, Cpu, CheckCircle2, Truck, ArrowUpRight
} from "lucide-react";
import "./AgroPortfolioOverview.css";

const AgroPortfolioOverview = () => {
  const data = [
    { title: "Premium Seeds", qty: "80+ varieties", segments: "Cereals, Pulses, Oilseeds, Vegetables", benefit: "Superior yield & genetic purity", icon: <Sprout size={24} /> },
    { title: "Advanced Fertilizers", qty: "40+ SKUs", segments: "Bulk, Water-soluble, Bio-stimulants", benefit: "Soil revitalization & nutrient balance", icon: <Beaker size={24} /> },
    { title: "Crop Protection", qty: "60+ products", segments: "Eco-safe Insecticides & Fungicides", benefit: "Integrated pest management", icon: <ShieldCheck size={24} /> },
    { title: "Organic Solutions", qty: "30+ items", segments: "Botanicals, Jivamrut, Bio-manures", benefit: "Sustainable growth for premium exports", icon: <Leaf size={24} /> },
    { title: "Smart Machinery", qty: "100+ models", segments: "Precision Irrigation & Post-Harvest", benefit: "Operational cost reduction", icon: <Settings2 size={24} /> },
    { title: "Digital Agri-Tech", qty: "20+ solutions", segments: "IoT Sensors, Drones, Data Analytics", benefit: "Data-driven yield forecasting", icon: <Cpu size={24} /> },
  ];

  return (
    <section className="apo-agro-fusion-portfolio">
      <div className="apo-portfolio-container">

        {/* HEADER: Minimalist & Clean */}
        <div className="apo-portfolio-header-flex">
          <div className="apo-title-group">
            <span className="apo-subtitle-tag">Integrated Excellence</span>
            <h2 className="apo-main-heading">Agricultural <span>Ecosystem</span></h2>
          </div>
          <div className="apo-description-group">
            <p>
              AgroFusion provides a 360° support system for modern growers,
              bridging the gap between traditional wisdom and precision technology.
            </p>
          </div>
        </div>

        {/* LIST MATRIX: High Readability */}
        <div className="apo-portfolio-list-wrapper">
          <div className="apo-list-header-labels">
            <span className="apo-label-col-1">Category</span>
            <span className="apo-label-col-2">Market Segments</span>
            <span className="apo-label-col-3">Strategic Benefit</span>
            <span className="apo-label-col-4"></span>
          </div>

          {data.map((item, index) => (
            <div className="apo-portfolio-list-item" key={index}>
              <div className="apo-col-category">
                <div className="apo-icon-badge">{item.icon}</div>
                <div className="apo-text-wrap">
                  <h4>{item.title}</h4>
                  <span className="apo-count-pill">{item.qty}</span>
                </div>
              </div>

              <div className="apo-col-segments">
                <p>{item.segments}</p>
              </div>

              <div className="apo-col-benefits">
                <span className="apo-benefit-status">Optimal</span>
                <p>{item.benefit}</p>
              </div>


            </div>
          ))}
        </div>

        {/* FOOTER: Trust Indicators */}
        <div className="apo-portfolio-trust-bar">
          <div className="apo-trust-unit">
            <CheckCircle2 className="apo-trust-icon" />
            <span><strong>Certified Quality:</strong> ISO 9001:2026 & QR Traceability Enabled</span>
          </div>
          <div className="apo-vertical-sep"></div>
          <div className="apo-trust-unit">
            <Truck className="apo-trust-icon" />
            <span><strong>Distribution:</strong> 2000+ Touchpoints across 12 States</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AgroPortfolioOverview;
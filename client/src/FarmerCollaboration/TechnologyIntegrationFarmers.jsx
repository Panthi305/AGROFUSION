import React from "react";
import { motion } from "framer-motion";
import { Cpu, Wallet, GraduationCap } from "lucide-react";
import "./TechnologyIntegrationFarmers.css";

const TechnologyIntegrationFarmers = () => {
  return (
    <section className="ftif-agro-editorial-root">
      
      <div className="ftif-agro-editorial-container">

        {/* SECTION 01: THE EDITORIAL HEADER */}
        <header className="ftif-agro-editorial-header">


          <h2 className="ftif-agro-editorial-title">
            Digital Empowerment <br />
            <span className="ftif-outline-text">for Modern Farming</span>
          </h2>

          <p className="ftif-agro-editorial-lead">
            AgroFusion enables farmers with powerful digital tools, precision
            technologies, and secure platforms to improve productivity,
            profitability, and sustainability.
          </p>
        </header>

        {/* SECTION 02: THE PATHWAY CONTENT */}
        <div className="ftif-agro-editorial-pathway">

          {/* BLOCK B */}
          <div className="ftif-editorial-row">
            <div className="ftif-row-info">
              <h3>IoT & Precision Technologies</h3>
            </div>
            <div className="ftif-row-grid">
              <div className="ftif-grid-item">
                <h4>Field Monitoring</h4>
                <p>Soil sensors, weather stations, crop health monitoring, irrigation control systems.</p>
              </div>
              <div className="ftif-grid-item">
                <h4>Equipment Integration</h4>
                <p>Drone operation control, machinery performance tracking, processing unit & storage monitoring.</p>
              </div>
              <div className="ftif-grid-item">
                <h4>Data Analytics</h4>
                <p>Yield prediction models, resource optimization, risk assessment, decision support systems.</p>
              </div>
            </div>
          </div>

          {/* BLOCK C */}
          <div className="ftif-editorial-row">
            <div className="ftif-row-info">
              <h3>Digital Payment Systems</h3>
            </div>
            <div className="ftif-row-grid">
              <div className="ftif-grid-item">
                <h4>Transaction Platforms</h4>
                <p>Input purchase, Crop sale receipts, Service fees, Subsidy disbursements.</p>
              </div>
              <div className="ftif-grid-item">
                <h4>Financial Management</h4>
                <p>Expense tracking, Income recording, Loan management, Insurance premiums.</p>
              </div>
              <div className="ftif-grid-item">
                <h4>Integration Benefits</h4>
                <p>Reduced cash handling, Better record keeping, Faster transactions, Inclusion.</p>
              </div>
            </div>
          </div>

          {/* BLOCK D */}
          <div className="ftif-editorial-row">
            <div className="ftif-row-info">
              <h3>Training & Adoption Support</h3>
            </div>
            <div className="ftif-row-grid">
              <div className="ftif-grid-item">
                <h4>Digital Literacy</h4>
                <p>Smartphone training, app workshops, online safety, and continuous skill development.</p>
              </div>
              <div className="ftif-grid-item">
                <h4>Technology Adoption</h4>
                <p>Demonstration programs, pilot projects, success story sharing, community learning.</p>
              </div>
              <div className="ftif-grid-item">
                <h4>Support Systems</h4>
                <p>Helpline services, field assistance, online tutorials, and peer support networks.</p>
              </div>
            </div>
          </div>

        </div>

        {/* SECTION 03: SIGNATURE FOOTER */}
        <footer className="ftif-agro-editorial-footer">
          <div className="ftif-footer-line"></div>
          <div className="ftif-footer-flex">
            <div className="ftif-footer-brand">
              <h4>Powered by <span>Jigisha Infotech</span></h4>
            </div>
            <div className="ftif-footer-tag">
              Custom farmer platforms • Secure data systems • Ecosystem
              integrations • Continuous innovation pipeline
            </div>
          </div>
        </footer>

      </div>
    </section>
  );
};

export default TechnologyIntegrationFarmers;
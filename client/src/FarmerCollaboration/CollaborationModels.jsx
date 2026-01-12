import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./CollaborationModels.css";

const CollaborationModels = () => {
  const [activeTab, setActiveTab] = useState("individual");

  const models = [
    { id: "individual", label: "Individual Farmer" },
    { id: "fpo", label: "FPO Model" },
    { id: "coop", label: "JAI Kishan" },
    { id: "contract", label: "Contract Farming" },
    { id: "international", label: "International" },
  ];

  const variants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 },
  };

  return (
    <section className="fcm-collab-models-section">
      
      <div className="fcm-collab-models-container">
        {/* HEADER */}
        <div className="fcm-collab-header">
          <h2 className="fcm-transformed-heading">
            <span className="fcm-line-solid">The Partnership</span>
            <span className="fcm-line-outline">Path</span>
          </h2>
        </div>

        {/* TABS NAVIGATION */}
        <div className="fcm-collab-tabs-nav">
          {models.map((model) => (
            <button
              key={model.id}
              className={`fcm-tab-btn ${activeTab === model.id ? "fcm-active" : ""}`}
              onClick={() => setActiveTab(model.id)}
            >
              {model.label}
            </button>
          ))}
        </div>

        {/* DISPLAY WINDOW */}
        <div className="fcm-collab-display-window">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="fcm-collab-block"
            >
              {activeTab === "individual" && (
                <>
                  <h3>Individual Farmer Model</h3>
                  <span className="fcm-collab-target">Target: 3,00,000 Farmers by Year 5</span>
                  <div className="fcm-collab-grid">
                    <ul>
                      <li>Competitive input supply</li>
                      <li>Soil-test-based nutrition planning</li>
                      <li>Drone spraying services</li>
                      <li>Weather & pest alerts via Agro App</li>
                      <li>Buy-back assurance (where applicable)</li>
                      <li>Digital advisory & market updates</li>
                    </ul>
                    <ul>
                      <li>Personalized crop plans</li>
                      <li>No group commitment required</li>
                      <li>Flexible engagement terms</li>
                      <li>Quick decision-making</li>
                      <li>Direct access to all services</li>
                      <li>Individual performance tracking</li>
                    </ul>
                  </div>
                  <div className="fcm-collab-flow">
                    Registration • Assessment • Crop Plan • Services • Advisory • Market Linkage
                  </div>
                </>
              )}

              {activeTab === "fpo" && (
                <>
                  <h3>FPO Model</h3>
                  <span className="fcm-collab-target">Target: 500 FPOs | Scale: 1,000–10,000 Farmers</span>
                  <div className="fcm-collab-columns">
                    <div>
                      <h4>Services</h4>
                      <p>Annual Input Supply Agreements, joint machinery centers, post-harvest integration, bulk market linkage, training & traceability systems.</p>
                    </div>
                    <div>
                      <h4>Benefits</h4>
                      <p>Collective bargaining, economies of scale, institutional credit, government schemes, branding & certification.</p>
                    </div>
                    <div>
                      <h4>Scale Advantage</h4>
                      <p>Small (1k–2k), Medium (2k–5k), Large (5k–10k), Cluster & Federation models.</p>
                    </div>
                  </div>
                </>
              )}

              {activeTab === "coop" && (
                <>
                  <h3>JAI Kishan Society Model</h3>
                  <span className="fcm-collab-target">Target: 100+ JAI Kishan Societies</span>
                  <p className="fcm-coop-desc">
                    Strengthening and modernizing traditional system while preserving community trust and legacy systems through digital transformation.
                  </p>
                  <div className="fcm-collab-list">
                    <span>PACS Modernization</span>
                    <span>JAI Kishan Dairy Integration</span>
                    <span>JAI Kishan Multi-purpose Societies</span>
                    {/* <span>Multi-purpose Societies</span> */}
                    <span>NABARD Convergence</span>
                  </div>
                </>
              )}

              {activeTab === "contract" && (
                <>
                  <h3>Contract Farming / Buy-Back</h3>
                  <p className="fcm-contract-desc">Designed for export-quality rice, organic vegetables, oilseeds, pulses & medicinal crops with full market security.</p>
                  <div className="fcm-collab-grid">
                    <ul>
                      <li>Premium seeds & inputs</li>
                      <li>Scientific crop advisory</li>
                      <li>Guaranteed buy-back pricing</li>
                      <li>Harvest & logistics support</li>
                    </ul>
                    <ul>
                      <li>Price certainty</li>
                      <li>Market assurance before sowing</li>
                      <li>Export & processing standards</li>
                      <li>Transparent contracts</li>
                    </ul>
                  </div>
                </>
              )}

              {activeTab === "international" && (
                <>
                  <h3>International Collaboration</h3>
                  <p className="fcm-international-desc">Active across South Asia, Middle East & Africa with technology transfer and market-led partnerships.</p>
                  <div className="fcm-collab-columns">
                    <div>
                      <h4>Regions</h4>
                      <p>Sri Lanka, Nepal, Bangladesh, UAE, Oman, Qatar, Africa</p>
                    </div>
                    <div>
                      <h4>Models</h4>
                      <p>Technology transfer, joint ventures, contract production, training programs & export development</p>
                    </div>
                    <div>
                      <h4>Global Standards</h4>
                      <p>International certifications, best practices, market customization, sustainability alignment</p>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CollaborationModels;
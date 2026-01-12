import React, { useState } from "react";
import "./InsuranceProducts.css";

const InsuranceProducts = () => {
  const [activeTab, setActiveTab] = useState(0);

  const insuranceData = [
    {
      id: 0,
      title: "Crop Insurance Programs",
      items: [
        { label: "PMFBY", detail: "Comprehensive risk coverage, Affordable premium rates, Quick claim settlement, Technology-based assessment" },
        { label: "Weather-Based Insurance", detail: "Rainfall deficit coverage, Temperature variation protection, Frost and hail damage, Weather parameter triggers" },
        { label: "Area Yield Insurance", detail: "Region-based coverage, Yield guarantee products, Group insurance schemes, Index-based products" }
      ]
    },
    {
      id: 1,
      title: "Equipment & Asset Insurance",
      items: [
        { label: "Farm Machinery Insurance", detail: "Tractor and implement coverage, Harvesting equipment insurance, Irrigation system protection, Processing equipment coverage" },
        { label: "Storage & Infrastructure Insurance", detail: "Warehouse coverage, Cold storage insurance, Processing unit protection, Building and structure insurance" },
        { label: "Crop in Storage Insurance", detail: "Warehouse receipt coverage, Quality deterioration protection, Theft and pilferage insurance, Fire and natural calamity" }
      ]
    },
    {
      id: 2,
      title: "Specialized Insurance Products",
      items: [
        { label: "Price Risk Insurance", detail: "Price fluctuation coverage, Minimum price guarantee, Market risk protection, Revenue assurance products" },
        { label: "Credit Insurance", detail: "Loan default protection, Credit guarantee schemes, Borrower insurance, Lender protection" },
        { label: "Personal Accident Insurance", detail: "Farmer accident coverage, Family protection plans, Health insurance options, Life coverage products" }
      ]
    },
    {
      id: 3,
      title: "Implementation Support",
      items: [
        { label: "Enrollment Services", detail: "Policy selection guidance, Application assistance, Document collection, Premium payment support" },
        { label: "Claim Processing", detail: "Loss assessment support, Claim documentation, Follow-up with companies, Settlement tracking" },
        { label: "Risk Advisory", detail: "Risk assessment services, Mitigation strategies, Insurance planning, Portfolio optimization" },
        { label: "Technology Adoption", detail: "Drone-based assessment, Satellite imagery, Mobile apps for filing, Digital documentation" }
      ]
    }
  ];

  return (
    <section className="ins-section">
      <div className="ins-container">
        
        {/* LEFT SIDE: STICKY NAV & HEADER */}
        <div className="ins-left-panel">
          <div className="ins-header">
            <h2>Risk Protection</h2>
            <p>Select a category to explore specialized insurance solutions.</p>
          </div>

          <nav className="ins-tabs">
            {insuranceData.map((tab) => (
              <button
                key={tab.id}
                className={`ins-tab-btn ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="tab-number">0{tab.id + 1}</span>
                <span className="tab-text">{tab.title}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* RIGHT SIDE: DYNAMIC CONTENT */}
        <div className="ins-right-panel">
          <div className="ins-content-card" key={activeTab}>
            <h3>{insuranceData[activeTab].title}</h3>
            <div className="ins-grid">
              {insuranceData[activeTab].items.map((item, index) => (
                <div className="ins-item" key={index}>
                  <strong>{item.label}</strong>
                  <p>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InsuranceProducts;
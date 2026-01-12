import React, { useState } from "react";
import "./ProcessingFAQ.css";

const ProcessingFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    { q: "What is the minimum quantity for processing services?", a: "We cater to all scales - from individual farmers (100kg+) to FPOs (tonnage quantities). Different facilities for different scales." },
    { q: "How long does processing take?", a: "Standard processing: 24-48 hours. Custom processing: 3-7 days depending on requirements." },
    { q: "Do you provide packaging and branding services?", a: "Yes, complete packaging solutions including private labeling and brand development support." },
    { q: "How do you ensure quality consistency?", a: "Through standardized processes, regular quality checks, staff training, and technology-enabled monitoring." },
    { q: "What markets do you connect farmers to?", a: "Domestic (retail, wholesale, institutional) and international (15+ countries through Jigisha International)." },
    { q: "Do you provide buy-back guarantee?", a: "For contract farming and specific programs, yes. For spot transactions, market-based pricing." },
    { q: "How do you handle perishable produce?", a: "Through our cold chain infrastructure, quick processing, and direct market linkages." },
    { q: "Can FPOs set up their own processing units with your support?", a: "Yes, complete support from feasibility study to commissioning and operations." },
    { q: "What certifications do you help obtain?", a: "FSSAI, AGMARK, Organic, APEDA, Global GAP, and other relevant certifications." },
    { q: "How do you handle payments to farmers?", a: "Digital payments within agreed timelines, with transparency in deductions and pricing." }
  ];

  return (
    <section className="proc-faq-section">
      <div className="proc-faq-container">
        <div className="proc-faq-header">
          <h2>Common Questions About Processing & Market Linkage</h2>
          <p>Find answers to frequently asked questions about our processing facilities and services.</p>
        </div>

        <div className="proc-faq-list">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>Q{index + 1}: {item.q}</h3>
                <span className="faq-icon">{activeIndex === index ? "−" : "+"}</span>
              </div>
              <div className="faq-answer">
                <p>A: {item.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="proc-faq-cta">
          <button className="proc-faq-contact-btn" onClick={() => (window.location.href = "/contact")}>
            Contact Us for Processing Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessingFAQ;
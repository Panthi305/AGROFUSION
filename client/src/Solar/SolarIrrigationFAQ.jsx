import { useState } from "react";
import "./SolarIrrigationFAQ.css";

const faqData = [ 
  {
    question: "What is the lifespan of a solar pump system?",
    answer: "Solar panels typically last 25+ years, pumps 10-15 years with proper maintenance.",
  },
  {
    question: "How does solar pump work during cloudy days?",
    answer: "Systems are designed with appropriate capacity to handle variations. Battery backup options available.",
  },
  {
    question: "What maintenance is required for solar pumps?",
    answer: "Regular cleaning of panels, basic pump maintenance, and periodic system checks.",
  },
  {
    question: "Can solar pumps work with existing irrigation systems?",
    answer: "Yes, they can be integrated with most existing irrigation systems.",
  },
  {
    question: "How do I know what size system I need?",
    answer: "Our technical team conducts site assessment and recommends appropriate sizing.",
  },
  {
    question: "What government subsidies are available?",
    answer: "Various central and state schemes including PM-KUSUM provide substantial subsidies.",
  },
  {
    question: "How long does installation take?",
    answer: "Typically 3-7 days depending on system complexity and site conditions.",
  },
  {
    question: "Do you provide training for operation?",
    answer: "Yes, comprehensive training provided to farmers and operators.",
  },
  {
    question: "What after-sales support is available?",
    answer: "Warranty, maintenance services, technical support, and spare parts availability.",
  },
  {
    question: "Can I monitor system performance remotely?",
    answer: "Yes, IoT-enabled systems provide remote monitoring capabilities.",
  },
];

const SolarIrrigationFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="si-faq-section">
      <div className="si-faq-container">
        {/* HEADER */}
        <div className="si-faq-header">
          <h2>Common Questions About Solar Irrigation</h2>
        </div>

        {/* FAQ ITEMS */}
        <div className="si-faq-list">
          {faqData.map((item, index) => (
            <div
              className={`si-faq-item ${activeIndex === index ? "active" : ""}`}
              key={index}
            >
              <button
                className="si-faq-question"
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
                <span className="si-faq-toggle">{activeIndex === index ? "-" : "+"}</span>
              </button>
              <div className="si-faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA BUTTON */}
        <div className="si-faq-cta">
          <button
            className="si-faq-contact-btn"
            onClick={() => (window.location.href = "/contact")}
          >
            Contact for Solar Pump Advisory
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolarIrrigationFAQ;

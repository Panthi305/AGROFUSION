import { useState } from "react";
import "./AgriFinanceFAQ.css";

const faqData = [
  {
    q: "What documents are needed for agricultural loans?",
    a: "Basic KYC documents, land records, crop details, and bank account information."
  },
  {
    q: "How long does loan approval take?",
    a: "Depending on loan type and completeness of documents, typically 3-7 working days."
  },
  {
    q: "What is the difference between crop insurance and weather insurance?",
    a: "Crop insurance covers yield losses, while weather insurance pays based on weather parameter deviations."
  },
  {
    q: "Can I get credit if I don't have land ownership documents?",
    a: "Yes, alternative credit assessment methods are available for tenant farmers and sharecroppers."
  },
  {
    q: "How are insurance claims settled?",
    a: "Through defined processes involving loss assessment, documentation, and digital settlement systems."
  },
  {
    q: "What government subsidies are available for loans?",
    a: "Interest subvention schemes and credit guarantee programs are commonly available."
  },
  {
    q: "Can FPOs get loans without individual member guarantees?",
    a: "Yes, group lending programs and institutional credit facilities are available."
  },
  {
    q: "How do digital payments benefit farmers?",
    a: "Faster transactions, better record-keeping, reduced cash handling risks, and convenience."
  },
  {
    q: "What financial training is available for farmers?",
    a: "Financial literacy programs, loan management training, insurance education, and digital payment training."
  },
  {
    q: "How is credit risk assessed for farmers?",
    a: "Through crop history, repayment capacity, asset ownership, and alternative data sources."
  }
];

const AgriFinanceFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="agfin-faq-section">
      <div className="agfin-faq-container">
        <h2 className="agfin-faq-title">
          Common Questions About Agri-Finance
        </h2>

        <div className="agfin-faq-list">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`agfin-faq-item ${
                activeIndex === index ? "agfin-active" : ""
              }`}
            >
              <button
                className="agfin-faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{item.q}</span>
                <span className="agfin-faq-icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              <div className="agfin-faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgriFinanceFAQ;

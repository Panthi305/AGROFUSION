import { useState } from "react";
import "./BioCngFAQ.css";

const faqs = [
  {
    q: "What waste materials can be used?",
    a: "Crop residue (rice, wheat, sugarcane), animal dung, vegetable waste, fruit processing waste, food waste, poultry litter, and agro-industrial byproducts."
  },
  {
    q: "How much land is needed?",
    a: "10 TPD: 1.5 acres, 25 TPD: 2.8 acres, 50 TPD: 5 acres, 100 TPD: 8.5 acres including buffer zones."
  },
  {
    q: "What's the daily water requirement?",
    a: "10,000–15,000 liters per TPD. Up to 80% water is recycled. Rainwater harvesting integration is recommended."
  },
  {
    q: "Is there odor pollution?",
    a: "No. Our closed anaerobic digestion system contains all odors. Exhaust air is treated using bio-filters."
  },
  {
    q: "How long does the plant last?",
    a: "Civil structure lasts 25+ years. Mechanical and electrical equipment lasts 15–20 years with proper maintenance."
  },
  {
    q: "Can I get bank financing?",
    a: "Yes. We have tie-ups with SBI, NABARD, HDFC, ICICI offering 70–80% project financing at 8–10% interest."
  },
  {
    q: "What government permissions are needed?",
    a: "Environment clearance, Pollution Control Board NOC, fire safety, explosive license for CNG, factory license. AgroFusion manages the entire process."
  },
  {
    q: "What happens during maintenance shutdown?",
    a: "Plants use multiple digesters. One digester can be serviced while others operate. Maximum downtime is under 10% annually."
  },
  {
    q: "Can I start small and expand later?",
    a: "Yes. Modular design allows expansion. Many projects start with 10 TPD and scale to 25 TPD within 2–3 years."
  }
];

const BioCngFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="afq-section">
      <div className="afq-container">
        <h2 className="afq-title">Everything You Need to Know About Bio-CNG Plants</h2>

        <div className="afq-wrapper">
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`afq-item ${openIndex === index ? "afq-item-active" : ""}`}
            >
              <button
                className="afq-trigger"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                {item.q}
                <span className="afq-icon">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <div className="afq-content">
                <p className="afq-text">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BioCngFAQ;
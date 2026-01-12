import { useState } from "react";
import "./FAQSection.css";

const faqs = [
  { q: "How far in advance should I book?", a: "Regular equipment should be booked 3–7 days in advance. During peak harvest season, we recommend booking 30–60 days ahead using the Advance Booking feature." },
  { q: "What if the equipment breaks down during my rental?", a: "Call our 24/7 helpline immediately. We will repair the equipment within 4 hours or provide a replacement. You are not charged for downtime." },
  { q: "Do I need to provide fuel?", a: "Yes, fuel is usually provided by the customer. However, we offer Full Service packages where fuel is included at market rates plus a 5% service fee." },
  { q: "Can I operate the equipment myself?", a: "Yes, after a basic training session. For complex machines like combine harvesters or drones, we recommend using our certified operators." },
  { q: "What documents are required?", a: "Aadhaar card, land papers or rental agreement, and one photograph. For companies or FPOs: Registration certificate." },
  { q: "Is there a security deposit?", a: "First-time customers pay a 20% refundable deposit. After 3 successful rentals, most equipment can be rented without a deposit." },
  { q: "What about insurance for crop damage by equipment?", a: "Standard insurance covers equipment only. Add Crop Protection cover for ₹100/day to include crop damage." },
  { q: "Do you provide transport for equipment?", a: "Yes, free delivery within 30 km of our hub. Beyond that, charges range from ₹15–30 per km depending on equipment size." },
  { q: "Can I rent equipment for demonstration or training?", a: "Yes, special rates are available for educational institutions, research centers, and training programs." }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="hq-faq-section">
      <div className="hq-faq-container">
        
        {/* TOP HEADING SECTION */}
        <header className="hq-faq-header">
          <div className="hq-badge">Service Information</div>
          <h2 className="hq-main-title">Common Questions & <br/><span>Rental Guidelines</span></h2>
          <p className="hq-description">
            Transparent policies designed to protect your harvest and optimize your operations. 
            If your question isn't listed, <a href="mailto:support@example.com">reach out to us.</a>
          </p>
        </header>

        {/* CENTERED ACCORDION LIST */}
        <div className="hq-faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`hq-faq-item ${activeIndex === index ? "is-expanded" : ""}`}
            >
              <button
                className="hq-faq-trigger"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <div className="hq-q-wrapper">
                  <span className="hq-q-index">0{index + 1}</span>
                  <span className="hq-q-text">{faq.q}</span>
                </div>
                <div className="hq-icon-box">
                  <div className="hq-icon-plus"></div>
                </div>
              </button>

              <div className="hq-faq-panel">
                <div className="hq-panel-content">
                  <p>{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
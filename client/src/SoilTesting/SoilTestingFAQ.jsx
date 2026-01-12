import { useState } from "react";
import "./SoilTestingFAQ.css";

const faqData = [
  {
    q: "How often should I test my soil?",
    a: "For intensive cropping systems, annual testing is recommended. Traditional farming systems can test every 2–3 years. Always test before changing crops or after unexplained yield loss."
  },
  {
    q: "What’s the difference between a soil test and a tissue test?",
    a: "A soil test shows what nutrients are available in the soil, while a tissue test reveals what the plant has actually absorbed. For best results, we recommend using both together."
  },
  {
    q: "Can I collect soil samples during the rainy season?",
    a: "It’s best to wait 2–3 weeks after heavy rainfall. Our sampling kits include moisture indicators to help determine whether the soil is suitable for sampling."
  },
  {
    q: "How small an area can be tested separately?",
    a: "One acre is the minimum recommended area for separate sampling. Smaller plots with similar soil conditions can be combined for accurate results."
  },
  {
    q: "Do you test for soil-borne diseases?",
    a: "Yes. Our advanced testing includes identification of soil-borne pathogens such as nematodes and fungal diseases as part of comprehensive soil health analysis."
  },
  {
    q: "How accurate are your soil test results?",
    a: "Our results maintain up to 99% accuracy through NABL-accredited methods, duplicate testing protocols, and participation in international proficiency programs."
  },
  {
    q: "Can you test irrigation water quality?",
    a: "Yes. We analyze irrigation water for salinity, hardness, and chemical suitability—critical for drip irrigation and long-term soil health."
  },
  {
    q: "What if my soil needs major correction?",
    a: "We provide phased soil correction plans spread over multiple seasons, supported by regular monitoring to ensure sustainable improvement."
  },
  {
    q: "Do you provide recommendations for organic farming?",
    a: "Absolutely. Our organic-focused recommendations emphasize microbial activity, organic amendments, and regenerative soil practices."
  },
  {
    q: "How can I compare my soil results with nearby farms?",
    a: "Our digital dashboard allows comparison with anonymized district averages (with consent), making it especially useful for FPOs and cooperative planning."
  }
];

const SoilTestingFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="kb-faq-section">
      <div className="kb-faq-container">
        <header className="kb-faq-header">
          <span className="kb-eyebrow">Expert Guidance</span>
          <h2>Everything About Soil Testing</h2>
          <p>
            Clear answers to the most common questions farmers, agribusinesses,
            and institutions ask before making soil health decisions.
          </p>
        </header>

        <div className="kb-faq-list">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`kb-faq-item ${
                activeIndex === index ? "kb-faq-active" : ""
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="kb-faq-question">
                <h4>{item.q}</h4>
                <div className="kb-faq-trigger">
                  <span className="kb-icon-v"></span>
                  <span className="kb-icon-h"></span>
                </div>
              </div>

              <div className="kb-faq-answer">
                <div className="kb-answer-inner">
                  <p>{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="kb-faq-footer">
          <p>Didn't find what you're looking for?</p>
          <a href="/contact" className="kb-contact-link">
            Talk to a Soil Expert &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default SoilTestingFAQ;
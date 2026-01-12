import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./DroneFAQ.css";

const faqData = [
  {
    question: "Are drone services legal in India?",
    answer:
      "Yes, fully compliant with DGCA regulations. All our pilots are certified and drones are NPNT compliant with necessary permits.",
  },
  {
    question: "How accurate is drone spraying compared to traditional methods?",
    answer:
      "95%+ accuracy in chemical placement vs 60-70% with manual spraying. This reduces chemical usage by 30-40%.",
  },
  {
    question: "Can drones work in all weather conditions?",
    answer:
      "We operate in winds up to 30 km/h and light rain. Severe weather flights are rescheduled for safety.",
  },
  {
    question: "What crops can benefit from drone services?",
    answer:
      "All major crops: Paddy, Wheat, Cotton, Sugarcane, Vegetables, Orchards, Plantations.",
  },
  {
    question: "How do I get the data from drone surveys?",
    answer:
      "Within 24 hours via: (1) WhatsApp report, (2) Farmer App dashboard, (3) Email PDF, (4) Physical copy if requested.",
  },
  {
    question: "Is training provided if I rent a drone?",
    answer:
      "Yes, 2-day comprehensive training including flight operations, maintenance, and data analysis.",
  },
  {
    question: "What safety measures are in place?",
    answer:
      "All drones have: (1) Return-to-home on low battery, (2) Geo-fencing, (3) Obstacle avoidance, (4) Emergency parachutes (on larger models), (5) ₹10 lakh insurance coverage.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "Minimum 3 days for standard service, 7 days during peak season (Oct-Dec, Feb-Apr).",
  },
];

const DroneFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="drone-faq">
      <div className="drone-faq__container">
        <h2 className="drone-faq__title" data-aos="fade-up">
          Common Questions About Drone Farming
        </h2>

        <div className="drone-faq__list" data-aos="fade-up" data-aos-delay={150}>
          {faqData.map((item, index) => (
            <div
              className={`drone-faq__item ${openIndex === index ? "open" : ""}`}
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <div className="drone-faq__question">
                {item.question}
                <span className="drone-faq__icon">{openIndex === index ? "-" : "+"}</span>
              </div>
              <div className="drone-faq__answer">{item.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DroneFAQ;

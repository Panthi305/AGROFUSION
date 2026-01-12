import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import "./InputSupplyFAQ.css";

const faqData = [
  {
    question: "How do I know your inputs are genuine?",
    answer: "All inputs come with certification, batch numbers, and QR codes for verification. We provide lab test reports on request."
  },
  {
    question: "What if I'm not satisfied with product performance?",
    answer: "We have a satisfaction guarantee. If properly used as per our advisory and results are below promised levels, we provide replacement or refund."
  },
  {
    question: "Do you provide technical support for input application?",
    answer: "Yes, free advisory with every purchase. For large orders, field visits by our agronomists."
  },
  {
    question: "Can I get credit to purchase inputs?",
    answer: "Yes, through Jigisha Infin. Credit limit based on farm size, crop plan, and repayment history."
  },
  {
    question: "How do you handle returns of unused inputs?",
    answer: "Unopened, properly stored inputs can be returned within 30 days. Perishable items have specific return policies."
  },
  {
    question: "Do you deliver to remote villages?",
    answer: "Yes, through our mobile van network and village entrepreneurs. Delivery time may be longer for remote locations."
  },
  {
    question: "How do I know which inputs are right for my farm?",
    answer: "Free crop advisory with soil test recommendations. Our agronomists will create a customized input plan."
  },
  {
    question: "Are your organic inputs certified?",
    answer: "Yes, NPOP/PGS certified. We provide complete documentation for organic certification."
  }
];

const InputSupplyFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">

        {/* HEADER */}
        <div className="faq-header">
          <h2>Common Questions About Our Inputs</h2>
          <p>
            Find answers to frequently asked questions regarding certified seeds, fertilizers, crop care, and organic inputs.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
            >
              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{item.question}</span>
                {activeIndex === index ? <ChevronUp /> : <ChevronDown />}
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InputSupplyFAQ;

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ImpactStats.css";

const statsData = [
  {
    label: "Farmers Covered (Target)",
    value: 850000,
    suffix: "+",
  },
  {
    label: "Revenue Target",
    value: 1200,
    prefix: "₹",
    suffix: " Cr",
  },
  {
    label: "Employment Generated",
    value: 3819,
    suffix: "+",
  },
  {
    label: "FPOs Onboarded",
    value: 500,
    suffix: "+",
  },
  {
    label: "Export Value (Year 5)",
    value: 200,
    prefix: "₹",
    suffix: " Cr",
  },
  {
    label: "Bio-CNG Plants (Year 5)",
    value: 10,
    suffix: "+",
  },
];

const Counter = ({ value, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = Math.ceil(end / (duration / 20));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, 20);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="af-impact__number">
      {prefix}
      {count.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
};

const ImpactStats = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <section className="af-impact">
      <div className="af-impact__container">
        <h2 className="af-impact__title" data-aos="fade-up">
          Our Impact in Numbers
        </h2>

        <div className="af-impact__grid">
          {statsData.map((stat, index) => (
            <div
              className="af-impact__card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Counter
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
              />
              <p className="af-impact__label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;

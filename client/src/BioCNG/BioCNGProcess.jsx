import "./BioCNGProcess.css";

const steps = [
  {
    step: "01",
    title: "Feedstock Collection & Pre-processing",
    points: [
      "Door-to-door collection from farms",
      "Shredding and size reduction",
      "Moisture control (optimal 50–60%)",
      "Storage in covered sheds"
    ]
  },
  {
    step: "02",
    title: "Anaerobic Digestion",
    points: [
      "Sealed digesters (oxygen-free)",
      "Temperature: 35–55°C",
      "Retention time: 30–45 days",
      "Microbial biogas generation (60% methane)"
    ]
  },
  {
    step: "03",
    title: "Biogas Purification",
    points: [
      "CO₂ removal via water scrubbing / membranes",
      "H₂S removal using activated carbon",
      "Moisture removal (dehydration units)",
      "Output: 95%+ pure methane (Bio-CNG)"
    ]
  },
  {
    step: "04",
    title: "Compression & Storage",
    points: [
      "Compression to 200–250 bar",
      "Cascade storage system",
      "Safety valves & real-time monitoring",
      "Transport-ready Bio-CNG"
    ]
  },
  {
    step: "05",
    title: "Digestate Processing",
    points: [
      "Solid-liquid separation",
      "30-day compost curing",
      "Micronutrient enrichment",
      "Granulation & packaging"
    ]
  },
  {
    step: "06",
    title: "Quality Control",
    points: [
      "Gas chromatography purity checks",
      "Fertilizer NPK lab testing",
      "Daily process monitoring",
      "Digital traceability system"
    ]
  },
  {
    step: "07",
    title: "Distribution & Sales",
    points: [
      "CNG dispensing stations",
      "Organic fertilizer bulk supply",
      "Direct sale",
      "Export logistics"
    ]
  }
];

const BioCNGProcess = () => {
  return (
    <section className="bio-process">
      <div className="bio-process-container">
        <div className="bio-process-header">
          <p className="process-count-indicator">Phase: Implementation</p>
          <h2>From Waste to Wealth: Our 7-Step Process</h2>
        </div>

        <div className="process-grid">
          {steps.map((item, index) => (
            <div key={index} className="process-card">
              <div className="step-number">{item.step}</div>
              <div className="process-content">
                <h3>{item.title}</h3>
                <ul>
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default BioCNGProcess;

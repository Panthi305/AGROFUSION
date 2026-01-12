import "./QualityAssurance.css";

const QualityAssurance = () => {
  return (
    <section className="bio-quality">
      <div className="bio-quality-container">
        <h2>Highest Standards of Purity & Safety</h2>
        <p className="bio-quality-subtitle">
          Every molecule of Bio-CNG and every granule of organic fertilizer
          produced at AgroFusion plants is monitored, tested, and certified to
          meet national and international quality benchmarks.
        </p>

        {/* QUALITY PARAMETERS */}
        <div className="quality-grid">
          {/* Bio-CNG */}
          <div className="quality-block">
            <h3>Bio-CNG Quality Parameters</h3>
            <ul>
              <li><strong>Methane Content:</strong> &gt;95%</li>
              <li><strong>Calorific Value:</strong> 11,500–12,000 kcal/kg</li>
              <li><strong>Impurities:</strong> &lt;50 ppm H₂S, &lt;2% CO₂</li>
              <li><strong>Moisture:</strong> &lt;0.05%</li>
              <li><strong>Odorization:</strong> As per PNGRB standards</li>
            </ul>
          </div>

          {/* Organic Fertilizer */}
          <div className="quality-block">
            <h3>Organic Fertilizer Quality</h3>
            <ul>
              <li><strong>NPK Content:</strong> 1.5–2.0% minimum</li>
              <li><strong>Organic Carbon:</strong> &gt;15%</li>
              <li><strong>Pathogen Free:</strong> E. coli & Salmonella negative</li>
              <li><strong>Heavy Metals:</strong> Within FCO limits</li>
              <li><strong>Granulation:</strong> 2–4 mm uniform size</li>
            </ul>
          </div>
        </div>

        

        {/* LAB */}
        <div className="quality-lab">
          <h4>In-House Testing Laboratory</h4>
          <p>
            AgroFusion operates a fully equipped <strong>NABL-accredited laboratory</strong> for
            daily quality monitoring, gas chromatography testing, fertilizer
            analysis, and digital record keeping—ensuring complete traceability
            and compliance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QualityAssurance;

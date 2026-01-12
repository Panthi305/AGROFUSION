import "./ProcessingOperations.css";

const ProcessingOperations = () => {
  return (
    <section className="processing-ops-section">
      <div className="processing-ops-container">

        {/* SECTION HEADER */}
        <div className="processing-ops-header"> 
          <h2>Value Addition at Every Stage</h2>
          <p>
            Our processing operations ensure every farm produce is transformed 
            into high-quality, market-ready products using advanced technology.
          </p>
        </div>

        {/* PROCESSING GRID */}
        <div className="processing-ops-grid">

          {/* GRAINS */}
          <div className="processing-ops-card">
            <img
              src="https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=800&q=80"
              alt="Grains Processing"
            />
            <h3>Grains Processing</h3>
            <ul>
              <li>Cleaning: Removal of foreign matter, dust, stones</li>
              <li>Grading: Size and quality-based separation</li>
              <li>Polishing: For rice and other grains</li>
              <li>Packaging: Consumer and bulk packaging options</li>
              <li>Standards: FSSAI & export specifications</li>
            </ul>
          </div>

          {/* PULSES - UPDATED LINK */}
          <div className="processing-ops-card">
            <img
              src="https://images.unsplash.com/photo-1515942400420-2b98fed1f515?auto=format&fit=crop&w=800&q=80"
              alt="Pulses and Dal Processing"
            />
            <h3>Pulses Processing</h3>
            <ul>
              <li>Milling: Dal production with minimal breakage</li>
              <li>Sorting: Color sorting for quality consistency</li>
              <li>Grading: Size grading for premium pricing</li>
              <li>Packaging: Branded packaging for retail</li>
              <li>Value Addition: Fortified pulses for nutrition</li>
            </ul>
          </div>

          {/* SPICES - UPDATED LINK */}
          <div className="processing-ops-card">
            <img
              src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80"
              alt="Spices and Herbs Processing"
            />
            <h3>Spices Processing</h3>
            <ul>
              <li>Cleaning: Removal of dust & extraneous matter</li>
              <li>Grinding: Controlled particle size maintenance</li>
              <li>Blending: Custom spice blends</li>
              <li>Packaging: Airtight packaging for freshness</li>
              <li>Certification: APEDA, FSSAI, organic certifications</li>
            </ul>
          </div>

          {/* OILSEEDS */}
          <div className="processing-ops-card">
            <img
              src="https://images.unsplash.com/photo-1464306208223-e0b4495a5553?auto=format&fit=crop&w=800&q=80"
              alt="Oilseeds Processing"
            />
            <h3>Oilseeds Processing</h3>
            <ul>
              <li>Cleaning: Removal of foreign material</li>
              <li>Dehulling: For higher oil recovery</li>
              <li>Grading: For premium markets</li>
              <li>Packaging: Bulk packaging for crushing units</li>
              <li>By-product Utilization: Cake for animal feed</li>
            </ul>
          </div>

        
        </div>

        {/* TECHNOLOGY HIGHLIGHTS */}
        <div className="processing-ops-tech">
          <h3>Processing Technology</h3>
          <ul>
            <li>Automated conveyor systems</li>
            <li>Optical sorting machines</li>
            <li>Moisture control systems</li>
            <li>Digital weighing and packaging</li>
            <li>IoT-enabled quality monitoring</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default ProcessingOperations;
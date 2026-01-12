import "./ProcessingInfrastructure.css";

const ProcessingInfrastructure = () => {
  return (
    <section className="processing-infra-section">
      <div className="processing-infra-container"> 

        <div className="processing-infra-header">
          <h2>End-to-End Processing Capabilities</h2>
          <p>
            Our state-of-the-art infrastructure ensures seamless transformation 
            of farm produce into market-ready products.
          </p>
        </div>

        <div className="processing-infra-grid">

          {/* GEOGRAPHIC COVERAGE */}
          <div className="processing-card">
            <img
              src="https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&w=800&q=80"
              alt="Logistics and Distribution"
            />
            <h3>Geographic Coverage</h3>
            <ul>
              <li>HQ: Bhopal (Central Processing Hub)</li>
              <li>Regional Hubs: 5 Strategic locations</li>
              <li>State-Level: 36 operational centers</li>
              <li>District Nodes: 120+ districts covered</li>
            </ul>
          </div>

          {/* PROCESSING CAPACITY */}
          <div className="processing-card">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
              alt="Automated Warehouse"
            />
            <h3>Processing Capacity</h3>
            <ul>
              <li>Aggregate Storage: 25,000 MT capacity</li>
              <li>Daily Processing: 500+ MT capacity</li>
              <li>Workforce: 381+ dedicated staff</li>
              <li>Technology: Automated grading systems</li>
            </ul>
          </div>

          {/* INFRASTRUCTURE COMPONENTS */}
          <div className="processing-card">
            <img
              src="https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?auto=format&fit=crop&w=800&q=80"
              alt="Industrial Processing Unit"
            />
            <h3>Infrastructure Components</h3>
            <ul>
              <li>Aggregation Centers: All crop types</li>
              <li>Mini-Processing Units: Grading & Drying</li>
              <li>Quality Labs: Testing & Certification</li>
              <li>Cold Storage: Perishable produce safety</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProcessingInfrastructure;
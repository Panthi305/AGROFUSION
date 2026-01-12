import "./FPODevelopmentServices.css";

const FPODevelopmentServices = () => {
  return (
    <section className="fpo-dev-section">
      <div className="fpo-dev-container">

        {/* Header */}
        <div className="fpo-dev-header">
          <h2 className="fpo-dev-title">Complete FPO Lifecycle Support</h2>
          <p className="fpo-dev-subtitle">
            From formation to scale-up, AgroFusion provides structured, end-to-end
            support for building resilient, market-ready Farmer Producer Organizations.
          </p>
        </div>

        {/* Formation & Registration */}
        <div className="fpo-dev-block">
          <h3 className="fpo-dev-block-title">Formation & Registration Support</h3>

          <div className="fpo-dev-columns">
            <div>
              <h4>Pre-formation Services</h4>
              <ul>
                <li>Farmer mobilization and awareness</li>
                <li>Group formation facilitation</li>
                <li>Member selection and enrollment</li>
                <li>Initial capital contribution planning</li>
              </ul>
            </div>

            <div>
              <h4>Registration Process</h4>
              <ul>
                <li>Legal structure selection guidance</li>
                <li>Documentation preparation support</li>
                <li>Registration agency coordination</li>
                <li>Compliance requirements fulfillment</li>
              </ul>
            </div>

            <div>
              <h4>Post-registration Setup</h4>
              <ul>
                <li>Office establishment support</li>
                <li>Initial governance structure</li>
                <li>Basic systems implementation</li>
                <li>First board election facilitation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Governance & Management */}
        <div className="fpo-dev-block">
          <h3 className="fpo-dev-block-title">Governance & Management Systems</h3>

          <div className="fpo-dev-columns">
            <div>
              <h4>Governance Framework</h4>
              <ul>
                <li>Constitution and by-laws development</li>
                <li>Board structure and roles definition</li>
                <li>Decision-making processes</li>
                <li>Transparency mechanisms</li>
              </ul>
            </div>

            <div>
              <h4>Management Systems</h4>
              <ul>
                <li>Accounting and financial systems</li>
                <li>Record keeping procedures</li>
                <li>Meeting management systems</li>
                <li>Reporting and compliance</li>
              </ul>
            </div>

            <div>
              <h4>Member Engagement</h4>
              <ul>
                <li>Membership management systems</li>
                <li>Communication channels establishment</li>
                <li>Participation enhancement strategies</li>
                <li>Conflict resolution mechanisms</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Capacity Building */}
        <div className="fpo-dev-block">
          <h3 className="fpo-dev-block-title">Capacity Building Programs</h3>

          <div className="fpo-dev-columns">
            <div>
              <h4>Leadership Development</h4>
              <ul>
                <li>Board member training</li>
                <li>Committee leadership skills</li>
                <li>Strategic planning capabilities</li>
                <li>Governance best practices</li>
              </ul>
            </div>

            <div>
              <h4>Management Skills</h4>
              <ul>
                <li>Financial management training</li>
                <li>Operations management skills</li>
                <li>Human resource management</li>
                <li>Marketing and sales capabilities</li>
              </ul>
            </div>

            <div>
              <h4>Technical Skills</h4>
              <ul>
                <li>Agricultural best practices</li>
                <li>Quality management systems</li>
                <li>Technology adoption skills</li>
                <li>Innovation implementation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Business Development */}
        <div className="fpo-dev-block">
          <h3 className="fpo-dev-block-title">Business Development Support</h3>

          <div className="fpo-dev-columns">
            <div>
              <h4>Business Planning</h4>
              <ul>
                <li>Business model development</li>
                <li>Market analysis and planning</li>
                <li>Financial projections</li>
                <li>Risk assessment and mitigation</li>
              </ul>
            </div>

            <div>
              <h4>Operations Setup</h4>
              <ul>
                <li>Procurement systems establishment</li>
                <li>Processing facility development</li>
                <li>Marketing channel creation</li>
                <li>Service delivery systems</li>
              </ul>
            </div>

            <div>
              <h4>Growth Strategies</h4>
              <ul>
                <li>Scaling plans development</li>
                <li>Diversification opportunities</li>
                <li>Partnership development</li>
                <li>Investment attraction strategies</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Target Scale */}
        <div className="fpo-dev-scale">
          <h3 className="fpo-dev-block-title">Target Scale per FPO</h3>
          <div className="fpo-dev-scale-list">
            <span>Small FPOs: 1,000–2,000 farmers</span>
            <span>Medium FPOs: 2,000–5,000 farmers</span>
            <span>Large FPOs: 5,000–10,000 farmers</span>
            <span>Cluster FPOs: Federations of multiple FPOs</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FPODevelopmentServices;

import {
  ShieldAlert,
  TrendingDown,
  CloudRain,
  Layers,
  Activity,
  AlertTriangle
} from "lucide-react";
import "./RiskManagement.css";

const RiskManagement = () => {
  return (
    <section className="riskmgmt-section">
      <div className="riskmgmt-container">

        {/* HEADER */}
        <div className="riskmgmt-header">
          <h2>Comprehensive Risk Mitigation</h2>
          <p>
            A structured risk management framework covering credit, market,
            production, and operational risks — designed to protect farmers,
            FPOs, and agri-enterprises across the value chain.
          </p>
        </div>

        {/* A. CREDIT RISK */}
        <div className="riskmgmt-block">
          <h3><ShieldAlert /> Credit Risk Management</h3>

          <div className="riskmgmt-columns">
            <div>
              <h4>Pre-disbursement Measures</h4>
              <ul>
                <li>Thorough credit assessment</li>
                <li>Collateral evaluation</li>
                <li>Guarantee arrangements</li>
                <li>Risk rating systems</li>
              </ul>
            </div>

            <div>
              <h4>Post-disbursement Monitoring</h4>
              <ul>
                <li>Regular follow-up systems</li>
                <li>Early warning indicators</li>
                <li>Portfolio monitoring</li>
                <li>Risk mitigation actions</li>
              </ul>
            </div>

            <div>
              <h4>Default Management</h4>
              <ul>
                <li>Restructuring options</li>
                <li>Recovery strategies</li>
                <li>Legal recourse systems</li>
                <li>Bad debt management</li>
              </ul>
            </div>
          </div>
        </div>

        {/* B. MARKET RISK */}
        <div className="riskmgmt-block">
          <h3><TrendingDown /> Market Risk Management</h3>

          <div className="riskmgmt-columns">
            <div>
              <h4>Price Risk Solutions</h4>
              <ul>
                <li>Forward contracting support</li>
                <li>Futures market access</li>
                <li>Minimum price guarantees</li>
                <li>Price insurance products</li>
              </ul>
            </div>

            <div>
              <h4>Demand Risk Management</h4>
              <ul>
                <li>Market diversification</li>
                <li>Contract farming arrangements</li>
                <li>Value addition strategies</li>
                <li>Storage timing decisions</li>
              </ul>
            </div>

            <div>
              <h4>Supply Risk Management</h4>
              <ul>
                <li>Input supply assurance</li>
                <li>Alternative sourcing options</li>
                <li>Inventory management</li>
                <li>Supplier relationship management</li>
              </ul>
            </div>
          </div>
        </div>

        {/* C. PRODUCTION RISK */}
        <div className="riskmgmt-block">
          <h3><CloudRain /> Production Risk Management</h3>

          <div className="riskmgmt-columns">
            <div>
              <h4>Climate Risk Solutions</h4>
              <ul>
                <li>Weather insurance products</li>
                <li>Drought-resistant varieties</li>
                <li>Water management systems</li>
                <li>Alternative cropping patterns</li>
              </ul>
            </div>

            <div>
              <h4>Pest & Disease Management</h4>
              <ul>
                <li>Early warning systems</li>
                <li>Preventive measures</li>
                <li>Control strategy financing</li>
                <li>Loss mitigation support</li>
              </ul>
            </div>

            <div>
              <h4>Technology Risk Management</h4>
              <ul>
                <li>Appropriate technology selection</li>
                <li>Training and skill development</li>
                <li>Maintenance support systems</li>
                <li>Upgrade planning</li>
              </ul>
            </div>
          </div>
        </div>

        {/* D. INTEGRATED RISK */}
        <div className="riskmgmt-integrated">
          <h3><Layers /> Integrated Risk Management Framework</h3>

          <div className="riskmgmt-framework">
            <div><Activity /> Risk Identification</div>
            <div><Activity /> Risk Measurement</div>
            <div><Activity /> Risk Mitigation</div>
            <div><Activity /> Risk Monitoring</div>
            <div><Activity /> Risk Review</div>
          </div>

          <div className="riskmgmt-support">
            <div>
              <h4><AlertTriangle /> Farmer Education</h4>
              <p>
                Risk awareness programs, mitigation training, decision support
                tools, and best practice sharing for informed decision-making.
              </p>
            </div>

            <div>
              <h4><AlertTriangle /> Technology Integration</h4>
              <p>
                Digital risk monitoring, early warning alerts, decision support
                platforms, and coordinated response systems.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RiskManagement;

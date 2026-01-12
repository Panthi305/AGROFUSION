import {
  BarChart3,
  Wallet,
  ShieldCheck,
  TrendingUp,
  Users,
  Smartphone,
  PhoneCall,
  MapPin
} from "lucide-react";
import "./FinancialAdvisory.css";
 
const FinancialAdvisory = () => {
  return (
    <section className="finadv-section">
      <div className="finadv-container">

        {/* HEADER */}
        <div className="finadv-header">
          <h2>Expert Guidance for Financial Management</h2>
          <p>
            Strategic financial advisory designed specifically for farmers, FPOs,
            and agri-enterprises to improve profitability, stability, and long-term growth.
          </p>
        </div>

        {/* CONTENT */}
        <div className="finadv-content">

          {/* A. FARM FINANCIAL PLANNING */}
          <div className="finadv-block">
            <h3><BarChart3 /> Farm Financial Planning</h3>

            <div className="finadv-list">
              <p><strong>Budget Planning:</strong> Seasonal budget preparation, cash flow management, investment planning, risk budgeting</p>
              <p><strong>Cost Optimization:</strong> Input cost analysis, operational efficiency, technology investment evaluation, resource allocation optimization</p>
              <p><strong>Revenue Enhancement:</strong> Market timing strategies, value addition planning, diversification advice, premium market targeting</p>
            </div>
          </div>

          {/* B. CREDIT ADVISORY */}
          <div className="finadv-block">
            <h3><Wallet /> Credit Advisory Services</h3>

            <div className="finadv-list">
              <p><strong>Product Selection:</strong> Suitable loan identification, lender comparison, term structure optimization, cost-benefit analysis</p>
              <p><strong>Application Support:</strong> Documentation guidance, eligibility improvement, application strategy, negotiation support</p>
              <p><strong>Repayment Planning:</strong> Cash flow aligned repayment, prepayment strategies, restructuring advice, default prevention</p>
            </div>
          </div>

          {/* C. INSURANCE ADVISORY */}
          <div className="finadv-block">
            <h3><ShieldCheck /> Insurance Advisory Services</h3>

            <div className="finadv-list">
              <p><strong>Risk Assessment:</strong> Farm risk profiling, vulnerability analysis, insurance need assessment, coverage gap identification</p>
              <p><strong>Product Selection:</strong> Coverage optimization, premium cost analysis, claim process understanding</p>
              <p><strong>Portfolio Management:</strong> Multi-policy coordination, overlap prevention, renewal management, cost optimization</p>
            </div>
          </div>

          {/* D. INVESTMENT ADVISORY */}
          <div className="finadv-block">
            <h3><TrendingUp /> Investment Advisory</h3>

            <div className="finadv-list">
              <p><strong>Farm Infrastructure:</strong> Irrigation investments, processing equipment evaluation, storage planning, technology adoption</p>
              <p><strong>Diversification:</strong> New crops, livestock integration, agro-processing ventures, renewable energy investments</p>
              <p><strong>Financial Planning:</strong> Surplus fund investment, retirement planning, education funds, emergency reserves</p>
            </div>
          </div>

        </div>

        {/* DELIVERY CHANNELS */}
        <div className="finadv-channels">
          <h3>Advisory Delivery Channels</h3>

          <div className="finadv-channel-list">
            <div><Users /> Personal Consultations/ Query</div>
            <div><MapPin /> Field Visits</div>
            <div><Smartphone /> Digital Advisory</div>
            <div><PhoneCall /> Helpline Support</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FinancialAdvisory;

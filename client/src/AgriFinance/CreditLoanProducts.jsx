import "./CreditLoanProducts.css";

const CreditLoanProducts = () => {
  return (
    <section className="clp-section">
      <div className="clp-container">

        {/* Section Header */}
        <div className="clp-header"> 
          <h2>Comprehensive Credit Solutions</h2>
          <p>
            Access a wide range of credit, loan, and financing options tailored to agricultural needs.(Through our channel partners )
          </p>
        </div>

        {/* Content Blocks */}
        <div className="clp-content">

          {/* Kisan Credit Card (KCC) Programs */}
          <div className="clp-block"> 
            <h3>Kisan Credit Card (KCC) Programs</h3>
            <ul>
              <li><strong>Traditional KCC:</strong> Crop production loans, Investment credit, Consumption needs, Flexible repayment options</li>
              <li><strong>Enhanced KCC Features:</strong> Higher credit limits, Longer repayment periods, Multiple draw facilities, Interest subvention benefits</li>
              <li><strong>KCC Implementation Support:</strong> Application assistance, Documentation support, Bank linkage, Renewal services</li>
            </ul>
          </div>

          {/* Equipment & Machinery Loans */}
          <div className="clp-block">
            <h3>Equipment & Machinery Loans</h3>
            <ul>
              <li><strong>Loan Types:</strong> Tractor and implement loans, Irrigation system financing, Processing equipment loans, Renewable energy financing</li>
              <li><strong>Financing Features:</strong> Attractive interest rates, Flexible repayment terms, Quick approval process, Insurance bundled options</li>
              <li><strong>Integration Benefits:</strong> Direct linkage with equipment suppliers, Maintenance package inclusion, Resale value consideration, Upgrade options</li>
            </ul>
          </div>

          {/* Working Capital Finance */}
          <div className="clp-block">
            <h3>Working Capital Finance</h3>
            <ul>
              <li><strong>Seasonal Finance:</strong> Pre-sowing expenses, Crop maintenance costs, Harvesting expenses, Post-harvest handling</li>
              <li><strong>Input Purchase Finance:</strong> Seeds and fertilizers, Crop protection products, Fuel and energy costs, Labor expenses</li>
              <li><strong>Processing & Storage Finance:</strong> Warehouse receipt financing, Cold storage operations, Processing working capital, Marketing expenses</li>
            </ul>
          </div>

          {/* Institutional Finance */}
          <div className="clp-block">
            <h3>Institutional Finance</h3>
            <ul>
              <li><strong>FPO Financing:</strong> Group lending programs, Bulk input purchase finance, Infrastructure development loans, Working capital for operations</li>
              <li><strong>Cooperative Society Finance:</strong> Storage infrastructure loans, Processing unit financing, Market linkage finance, Member credit programs</li>
              <li><strong>Contract Farming Finance:</strong> Advance payments to farmers, Input supply on credit, Harvest finance, Price risk management</li>
            </ul>
          </div>

          {/* Specialized Loan Products */}
          <div className="clp-block">
            <h3>Specialized Loan Products</h3>
            <ul>
              <li><strong>Organic Farming Loans:</strong> Transition period support, Certification cost financing, Organic input purchase, Market development finance</li>
              <li><strong>Export-Oriented Farming:</strong> Quality improvement loans, Certification financing, Export working capital, Market development support</li>
              <li><strong>Technology Adoption Loans:</strong> Precision farming equipment, Digital technology adoption, Renewable energy systems, Water conservation technology</li>
              <li><strong>Credit Assessment System:</strong> Farmer profiling and scoring, Land record verification, Crop pattern analysis, Repayment capacity assessment, Risk rating models</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CreditLoanProducts;

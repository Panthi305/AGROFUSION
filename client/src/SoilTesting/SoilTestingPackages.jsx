import "./SoilTestingPackages.css";

const SoilTestingPackages = () => {
  return (
    <section className="soil-packages">
      <div className="soil-packages-container">

        {/* Header */}
        <div className="soil-packages-header">
          <h2 className="soil-packages-title"> 
            Choose the Right Test for Your Farm
          </h2>
          <p className="soil-packages-subtitle">
            Scientifically designed soil testing packages to suit every farm size,
            crop type, and certification requirement.
          </p>
        </div>

        {/* Main Packages */}
        <div className="soil-packages-grid">

          {/* Basic */}
          <div className="soil-package-card">
            <h3>Basic Soil Health Package</h3>
             <p className="soil-package-tag">
              Perfect for first-time testing & large area screening
            </p>

            <ul className="soil-package-list">
              <li>pH Level</li>
              <li>Electrical Conductivity (EC)</li>
              <li>Organic Carbon</li>
              <li>Available Nitrogen (N)</li>
              <li>Available Phosphorus (P)</li>
              <li>Available Potassium (K)</li>
            </ul>

           

            <button className="soil-package-btn">
              Select Package
            </button>
          </div>

          {/* Advanced */}
          <div className="soil-package-card featured">
            <h3>Advanced Nutrient Analysis</h3>
            <p className="soil-package-tag">
              Ideal for commercial farms & high-value crops
            </p>

            <ul className="soil-package-list">
              <li>All Basic Parameters</li>
              <li>Micronutrients (Zn, Fe, Cu, Mn, B)</li>
              <li>Secondary Nutrients (Ca, Mg, S)</li>
              <li>Cation Exchange Capacity (CEC)</li>
              <li>Base Saturation Percentage</li>
            </ul>

           

            <button className="soil-package-btn primary">
              Most Popular
            </button>
          </div>

          {/* Complete */}
          <div className="soil-package-card">
            <h3>Complete Soil Health Package</h3>
             <p className="soil-package-tag">
              Best for organic farms, export crops & problem soils
            </p>

            <ul className="soil-package-list">
              <li>All Advanced Parameters</li>
              <li>Heavy Metals (Pb, Cd, As, Hg)</li>
              <li>Microbial Activity (Bacteria & Fungi)</li>
              <li>Soil Texture (Sand, Silt, Clay)</li>
              <li>Water Holding Capacity</li>
              <li>Bulk Density</li>
            </ul>

            

            <button className="soil-package-btn">
              Select Package
            </button>
          </div>

        </div>

        {/* Specialized Packages */}
        <div className="soil-special-packages">
          <h3>Specialized Testing Packages</h3>

          <div className="soil-special-grid">
            <div className="soil-special-card">
              <h4>Organic Certification Package</h4>
              <p>
                NPOP/PGS compliant testing, pesticide residue analysis (50+),
                and complete certification documentation.
              </p>
            </div>

            <div className="soil-special-card">
              <h4>Problem Soil Diagnosis</h4>
              <p>
                Salinity, sodicity, waterlogging issues and crop failure analysis.
              </p>
            </div>

            <div className="soil-special-card">
              <h4>Seasonal Monitoring Subscription</h4>
              <p>
                3 tests per season, trend analysis dashboard and monthly advisories.
              </p>
            </div>
          </div>
        </div>

       

      </div>
    </section>
  );
};

export default SoilTestingPackages;

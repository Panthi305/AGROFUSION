import { useState } from "react";
import "./RentalPurchaseCalculator.css";

const RentalPurchaseCalculator = () => {
  const [equipment, setEquipment] = useState("Tractor");
  const [days, setDays] = useState(60);
  const [hours, setHours] = useState(6);

  return (
    <section className="rpc-section"> 
      <div className="rpc-container">
        <h2 className="rpc-title">Make the Smart Financial Choice</h2>

        {/* ================= STEP 1 ================= */}
        <div className="rpc-card">
          <h3>Step 1: Select Your Equipment</h3>

          <div className="rpc-row">
            <select
              value={equipment}
              onChange={(e) => setEquipment(e.target.value)}
            >
              <option>Tractor</option>
              <option>Harvester</option>
              <option>Rotavator</option>
              <option>Solar Pump</option>
              <option>Laser Land Leveler</option>
            </select>

            <select>
              <option>Mahindra 575 DI (55 HP)</option>
              <option>Swaraj 744 FE</option>
              <option>Sonalika DI 745</option>
            </select>
          </div>
        </div>

        {/* ================= STEP 2 ================= */}
        <div className="rpc-card">
          <h3>Step 2: Enter Your Usage Pattern</h3>

          <div className="rpc-slider">
            <label>Days / Year Needed: <strong>{days}</strong></label>
            <input
              type="range"
              min="1"
              max="365"
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
            />
          </div>

          <div className="rpc-slider">
            <label>Hours / Day: <strong>{hours}</strong></label>
            <input
              type="range"
              min="1"
              max="24"
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
            />
          </div>

          <div className="rpc-options">
            <label>
              <input type="checkbox" /> Multiple cropping seasons
            </label>
            <label>
              <input type="checkbox" /> Expansion planned in 3–5 years
            </label>
          </div>
        </div>

        {/* ================= STEP 3 ================= */}
        <div className="rpc-card rpc-result">
          <h3>Step 3: Personalized Recommendation</h3>

          <div className="rpc-compare">
            {/* RENTAL */}
            <div className="rpc-box">
              <h4>RENTAL OPTION (3 Years)</h4>
              <ul>
                <li>Annual Rental Cost: ₹1,80,000</li>
                <li>Maintenance: ₹0</li>
                <li>Insurance: ₹0</li>
                <li>Storage: ₹0</li>
                <li><strong>Total 3-Year Cost: ₹5,40,000</strong></li>
              </ul>

              <div className="rpc-benefit">
                ✔ Flexibility to change equipment  
                ✔ Always latest models
              </div>
            </div>

            {/* PURCHASE */}
            <div className="rpc-box">
              <h4>PURCHASE OPTION (3 Years)</h4>
              <ul>
                <li>Purchase Price: ₹8,50,000</li>
                <li>Down Payment: ₹2,55,000</li>
                <li>EMI: ₹18,500/month</li>
                <li>Maintenance: ₹1,00,000</li>
                <li>Insurance: ₹45,000</li>
                <li>Depreciation: ₹3,40,000</li>
                <li><strong>Net Cost: ₹8,96,000</strong></li>
              </ul>
            </div>
          </div>

          <div className="rpc-verdict">
            ✅ <strong>VERDICT:</strong> Renting saves
            <span> ₹3,56,000 </span> over 3 years
          </div>

          <button className="rpc-download">
            Download Detailed Financial Report (PDF)
          </button>
        </div>
      </div>
    </section>
  );
};

export default RentalPurchaseCalculator;

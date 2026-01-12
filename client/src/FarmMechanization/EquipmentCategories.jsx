import "./EquipmentCategories.css";
import { Link } from "react-router-dom";

const EquipmentCategories = () => {
  return (
    <section className="equip-section">
      <div className="equip-container">
        <h2 className="equip-title">
          Complete Range for Every Farming Operation 
        </h2>

        {/* ================= HARVESTING ================= */}
        <div className="equip-category">
          <h3>Harvesting Equipment</h3>

          <div className="equip-grid">
            <div className="equip-card">
              <h4>Combine Harvesters</h4>
              <ul>
                <li><strong>Models:</strong> John Deere S550, Mahindra Arjun 605, Preet 987</li>
                <li><strong>Capacity:</strong> 1–2 acres/hour</li>
                {/* <li><strong>Rental:</strong> ₹2,500–3,500 / acre</li> */}
                <li><strong>Tracking:</strong> Real-time GPS availability</li>
              </ul>
            </div>

            <div className="equip-card">
              <h4>Reaper Binders</h4>
              <ul>
                <li><strong>Models:</strong> Dasmesh 911, Kartar 4000</li>
                <li><strong>Capacity:</strong> 0.5–1 acre/hour</li>
                {/* <li><strong>Rental:</strong> ₹800–1,200 / acre</li> */}
                <li><strong>Best For:</strong> Wheat, Paddy, Barley</li>
              </ul>
            </div>

            <div className="equip-card">
              <h4>Potato Harvesters</h4>
              <ul>
                <li><strong>Models:</strong> KSM 1800, Mahindra Digger</li>
                <li><strong>Capacity:</strong> 2–3 acres/day</li>
                {/* <li><strong>Rental:</strong> ₹1,500–2,000 / acre</li> */}
                <li><strong>Feature:</strong> Gentle on tubers</li>
              </ul>
            </div>
          </div>

         
        </div>

        {/* ================= LAND PREPARATION ================= */}
        <div className="equip-category">
          <h3>Land Preparation Equipment</h3>

          <div className="equip-grid">
            <div className="equip-card">
              <h4>Tractors (35–75 HP)</h4>
              <ul>
                <li><strong>Models:</strong> Swaraj 744, Mahindra 575, Sonalika 745</li>
                {/* <li><strong>Hourly:</strong> ₹400–800</li>
                <li><strong>Daily:</strong> ₹2,500–5,000</li>
                <li><strong>Weekly:</strong> ₹15,000–30,000</li> */}
                <li><strong>Implements:</strong> 50+ compatible</li>
              </ul>
            </div>

            <div className="equip-card">
              <h4>Rotavators</h4>
              <ul>
                <li><strong>Models:</strong> Shaktiman, Fieldking</li>
                <li><strong>Width:</strong> 4–6 feet</li>
                {/* <li><strong>Rental:</strong> ₹300–500 / acre</li> */}
                <li><strong>Benefit:</strong> Perfect tilth in one pass</li>
              </ul>
            </div>

            <div className="equip-card">
              <h4>Laser Land Levelers</h4>
              <ul>
                <li><strong>Accuracy:</strong> ±1 cm</li>
                {/* <li><strong>Rental:</strong> ₹1,000–1,500 / acre</li> */}
                <li><strong>Water Saving:</strong> 20–30%</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ================= IRRIGATION ================= */}
        <div className="equip-category">
          <h3>Irrigation & Water Management</h3>

          <div className="equip-grid">
            <div className="equip-card">
              <h4>Solar Pump Systems (2–10 HP)</h4>
              <ul>
                <li><strong>Partner:</strong> Jigisha Green</li>
                <li><strong>Daily Output:</strong> 1–4 lakh liters</li>
                {/* <li><strong>Daily:</strong> ₹500–1,500</li>
                <li><strong>Seasonal:</strong> ₹15,000–50,000</li> */}
                <li><strong>PM-KUSUM:</strong> 60% subsidy</li>
              </ul>
            </div>

            <div className="equip-card">
              <h4>Drip Irrigation Systems</h4>
              <ul>
                <li><strong>Brands:</strong> Jain, Netafim</li>
                <li><strong>Coverage:</strong> 1–10 acres</li>
                {/* <li><strong>Rental:</strong> ₹2,000–5,000 / acre</li> */}
                <li><strong>Savings:</strong> 40–60% water</li>
              </ul>
            </div>

            <div className="equip-card">
              <h4>Sprinkler Systems</h4>
              <ul>
                <li><strong>Types:</strong> Rain gun, Impact, Pivot</li>
                <li><strong>Coverage:</strong> Up to 20 acres</li>
                {/* <li><strong>Rental:</strong> ₹1,500–3,000 / acre</li> */}
              </ul>
            </div>
          </div>
        </div>

        {/* ================= SPRAYING ================= */}
        <div className="equip-category">
          <h3>Spraying & Crop Protection</h3>

          <div className="equip-grid">
            <div className="equip-card">
              <h4>Boom Sprayers</h4>
              <ul>
                <li><strong>Capacity:</strong> 200–500 liters</li>
                <li><strong>Coverage:</strong> 15–25 acres/day</li>
                {/* <li><strong>Rental:</strong> ₹150–300 / acre</li> */}
              </ul>
            </div>

            <div className="equip-card">
              <h4>Power Sprayers</h4>
              <ul>
                <li><strong>Tank:</strong> 15–20 liters</li>
                {/* <li><strong>Rental:</strong> ₹200–400 / day</li> */}
                <li><strong>Type:</strong> Battery operated</li>
              </ul>
            </div>

            <div className="equip-card ">
              <h4>Drone Sprayers</h4>
              <p>Advanced aerial spraying with 95% chemical savings</p>
              <Link to="/services/drone-farming" className="equip-link">
                View Drone Services →
              </Link>
            </div>
          </div>
        </div>

        {/* ================= POST HARVEST ================= */}
        <div className="equip-category">
          <h3>Post-Harvest Equipment</h3>

          <div className="equip-grid">
            <div className="equip-card">
              <h4>Threshers & Cleaners</h4>
              <ul>
                <li><strong>Capacity:</strong> 500–2,000 kg/hr</li>
                {/* <li><strong>Rental:</strong> ₹800–1,500 / day</li> */}
                <li><strong>Loss Reduction:</strong> 2–3%</li>
              </ul>
            </div>

            <div className="equip-card">
              <h4>Grading & Sorting Machines</h4>
              <ul>
                <li><strong>Capacity:</strong> 1–5 tons/hr</li>
                {/* <li><strong>Rental:</strong> ₹1,000–2,500 / day</li> */}
                <li><strong>Price Gain:</strong> 15–25%</li>
              </ul>
            </div>

            <div className="equip-card">
              <h4>Mobile Cold Storage</h4>
              <ul>
                <li><strong>Capacity:</strong> 5–20 tons</li>
                {/* <li><strong>Rental:</strong> ₹3,000–10,000 / week</li> */}
                <li><strong>Power:</strong> Solar/Diesel/Grid</li>
              </ul>
            </div>
          </div>
        </div>

        

      </div>
    </section>
  );
};

export default EquipmentCategories;

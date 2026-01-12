import "./HowMaaSWorks.css";

const HowMaaSWorks = () => {
  return (
    <section className="maas-section">
      <div className="maas-container">

        <h2 className="maas-title">Get Equipment in 4 Simple Steps</h2>
 
        <div className="maas-steps">

          {/* STEP 1 */} 
          <div className="maas-step">
            <div className="maas-step-number">01</div>
            <h3>Browse & Select</h3>

            <ul>
              <li>500+ equipment listings with photos, specs & videos</li>
              <li>Filters: Type, Power, Location, Price, Ratings</li>
              <li>360° virtual equipment demo</li>
              <li>Live expert chat for guidance</li>
            </ul>

            <span className="maas-time">⏱ ~10 minutes</span>
          </div>

          {/* STEP 2 */}
          <div className="maas-step">
            <div className="maas-step-number">02</div>
            <h3>Book & Confirm</h3>

            <ul>
              <li>Instant / Advance / Subscription booking options</li>
              <li>Date selection with live availability</li>
              <li>Delivery or self-pickup choice</li>
              <li>Operator & insurance add-ons</li>
              <li>Promo code & confirmation</li>
            </ul>

            <span className="maas-time">⏱ ~5 minutes</span>
          </div>

          {/* STEP 3 */}
          <div className="maas-step">
            <div className="maas-step-number">03</div>
            <h3>Delivery & Setup</h3>

            <ul>
              <li>Free delivery within 50 km (24 hrs)</li>
              <li>Express delivery in 4 hrs</li>
              <li>Technician-assisted setup</li>
              <li>Safety check & demo training</li>
            </ul>

            <span className="maas-time">🚜 Same / Next Day</span>
          </div>

          {/* STEP 4 */}
          <div className="maas-step">
            <div className="maas-step-number">04</div>
            <h3>Use & Return</h3>

            <ul>
              <li>24/7 technical helpline</li>
              <li>Free maintenance & operator replacement</li>
              <li>Easy rental extension</li>
              <li>Pickup, inspection & fast deposit refund</li>
            </ul>

            <span className="maas-time">✔ Hassle-Free</span>
          </div>

        </div>

        {/* TIMELINE */}
        <div className="maas-timeline">
          Browse → Book → Deliver → Use → Return
        </div>

      </div>
    </section>
  );
};

export default HowMaaSWorks;

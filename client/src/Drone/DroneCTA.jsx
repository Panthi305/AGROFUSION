import React from "react";
import "./DroneCTA.css";

const DroneCTA = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById("drone-booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <section className="drone-cta">
      <div className="drone-cta__container">
        <h2 className="drone-cta__title">
          Ready to Take Your Farming to New Heights?
        </h2>
        <p className="drone-cta__headline">
          Join 5,000+ Farmers Who Have Transformed Their Farms with Drone Technology
        </p>

        <ul className="drone-cta__benefits">
          <li>✓ 25-35% Higher Yields</li>
          <li>✓ 30-40% Lower Chemical Costs</li>
          <li>✓ 50% Labor Cost Reduction</li>
          <li>✓ Digital Farm Management</li>
          <li>✓ Expert Advisory Support</li>
        </ul>

        <div className="drone-cta__buttons">
          <button className="drone-cta__primary" onClick={scrollToBooking}>
            Book Your First Drone Service
          </button>
        </div>
      </div>
    </section>
  );
};

export default DroneCTA;

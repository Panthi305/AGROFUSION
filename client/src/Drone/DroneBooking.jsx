import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./DroneBooking.css";

const serviceOptions = [
  "Aerial Spraying",
  "Crop Health Mapping",
  "Full Season Package",
  "Drone Rental Inquiry",
  "Demo Flight Request",
];

const DroneBooking = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    district: "",
    state: "",
    acreage: "",
    cropType: "",
    growthStage: "",
    services: [],
    preferredDates: "",
    notes: "",
  });

  const [quote, setQuote] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      const updatedServices = checked
        ? [...formData.services, value]
        : formData.services.filter((s) => s !== value);
      setFormData({ ...formData, services: updatedServices });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const calculateQuote = () => {
    const baseRate = 2000; // base rate per acre
    const acreage = Number(formData.acreage) || 0;
    const serviceMultiplier = formData.services.length || 1;
    setQuote(baseRate * acreage * serviceMultiplier);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking submitted! Our team will contact you shortly.");
  };

  return (
    <section className="drone-booking" id="drone-booking">
      <div className="drone-booking__container">
        <h2 className="drone-booking__title" data-aos="fade-up">
          Schedule Your Drone Service Today
        </h2>

        <form
          className="drone-booking__form"
          onSubmit={handleSubmit}
          data-aos="fade-up"
          data-aos-delay={150}
        >
          <div className="drone-booking__group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="drone-booking__group">
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="drone-booking__group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="drone-booking__group">
            <label>District</label>
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleChange}
              required
            />
          </div>
          <div className="drone-booking__group">
            <label>State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>

          <div className="drone-booking__group">
            <label>Total Acreage</label>
            <input
              type="number"
              name="acreage"
              value={formData.acreage}
              onChange={(e) => {
                handleChange(e);
                calculateQuote();
              }}
              min="0"
              required
            />
          </div>
          <div className="drone-booking__group">
            <label>Crop Type</label>
            <input
              type="text"
              name="cropType"
              value={formData.cropType}
              onChange={handleChange}
              required
            />
          </div>
          <div className="drone-booking__group">
            <label>Current Growth Stage</label>
            <input
              type="text"
              name="growthStage"
              value={formData.growthStage}
              onChange={handleChange}
              required
            />
          </div>

          <div className="drone-booking__group">
            <label>Service Request</label>
            <div className="drone-booking__checkboxes">
              {serviceOptions.map((service, idx) => (
                <label key={idx}>
                  <input
                    type="checkbox"
                    value={service}
                    checked={formData.services.includes(service)}
                    onChange={handleChange}
                  />
                  {service}
                </label>
              ))}
            </div>
          </div>

          <div className="drone-booking__group">
            <label>Preferred Date Range</label>
            <input
              type="text"
              name="preferredDates"
              placeholder="DD/MM/YYYY - DD/MM/YYYY"
              value={formData.preferredDates}
              onChange={handleChange}
            />
          </div>
          <div className="drone-booking__group">
            <label>Additional Notes</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="3"
            />
          </div>

          <button type="submit" className="drone-booking__submit">
            Submit Booking
          </button>
        </form>
      </div>
    </section>
  );
};

export default DroneBooking;

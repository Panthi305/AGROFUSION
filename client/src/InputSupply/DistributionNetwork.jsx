import { Truck, MapPin, Globe, PackageCheck } from "lucide-react";
import "./DistributionNetwork.css";

const DistributionNetwork = () => {
  return (
    <section className="distribution-section">
      <div className="distribution-container">

        {/* HEADER */}
        <div className="distribution-header">
          <h2>Inputs Delivered to Your Farm</h2>
          <p>
            Our multi-channel distribution network ensures timely delivery of
            high-quality agricultural inputs across India and beyond.
          </p>
        </div>

        {/* GRID */} 
        <div className="distribution-grid">

          {/* MULTI-CHANNEL */}
          <div className="distribution-card">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
              alt="Warehouse Hub"
            />
            <h3><MapPin /> Multi-channel Distribution</h3>
            <ul>
              <li><PackageCheck /> Company-owned Hubs: 5 regional + 36 state HQs</li>
              <li><PackageCheck /> Franchise Dealers across India</li>
              <li><PackageCheck /> Direct Supply to FPOs</li>
              <li><PackageCheck /> Digital Marketplace: jigisha.online</li>
              <li><PackageCheck /> Mobile Vans for village-level delivery</li>
            </ul>
          </div>

          {/* LAST-MILE */}
          <div className="distribution-card">
            <img
              src="https://images.unsplash.com/photo-1591768793355-74d7ca73a045?auto=format&fit=crop&w=800&q=80"
              alt="Delivery Truck on Road"
            />
            <h3><Truck /> Last-mile Delivery Options</h3>
            <ul>
              <li><PackageCheck /> Standard Delivery</li>
              <li><PackageCheck /> Express Delivery</li>
              <li><PackageCheck /> Scheduled Delivery during peak seasons</li>
              <li><PackageCheck /> Self Pickup from nearest hub</li>
            </ul>
          </div>

          {/* LOGISTICS */}
          <div className="distribution-card">
            <img
              src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80"
              alt="Logistics and Warehousing"
            />
            <h3><Truck /> Logistics Support</h3>
            <ul>
              <li><PackageCheck /> Warehousing facilities</li>
              <li><PackageCheck /> Dedicated transport fleet</li>
              <li><PackageCheck /> Cold chain for sensitive inputs</li>
              <li><PackageCheck /> Real-time delivery tracking</li>
            </ul>
          </div>

          {/* INTERNATIONAL */}
          <div className="distribution-card">
            <img
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80"
              alt="Cargo Ship Global"
            />
            <h3><Globe /> International Distribution</h3>
            <ul>
              <li><PackageCheck /> Export of seeds & inputs globally</li>
              <li><PackageCheck /> Import of advanced agricultural inputs</li>
              <li><PackageCheck /> Local production partnerships</li>
              <li><PackageCheck /> Technology transfer & training</li>
            </ul>
          </div>

        </div>

        {/* CONTACT CTA */}
        <div className="distribution-cta">
          <button
            className="distribution-contact-btn"
            onClick={() => (window.location.href = "/contact")}
          >
            Contact for Distribution Enquiry
          </button>
        </div>

      </div>
    </section>
  );
};

export default DistributionNetwork;
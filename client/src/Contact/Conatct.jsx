import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Phone, Mail, MapPin, Send,
  MessageSquare, Building2, ExternalLink, Globe
} from 'lucide-react';

// Leaflet
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Contact.css';

// --- Fix Leaflet default marker icons (IMPORTANT) ---
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom blue marker for company
const companyIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const COMPANY_HEADQUARTERS = {
  address: '9TH FLOOR-923, I SQUARE, NR. SHUKAN MALL CROSS RD., SOLA, AHMEDABAD, GUJARAT-380060',
  position: [23.0620, 72.5412],
  name: 'JIGISHA AGROFUSION PVT LTD',
  googleMapsLink: 'https://www.google.com/maps/search/?api=1&query=23.0620,72.5412',
};

const contactInfo = [
  { icon: <Phone className="afc-icon" />, title: 'Phone', details: ['+91 8989297044', '+91 8989167888'], action: 'tel:+918989297044' },
  { icon: <MapPin className="afc-icon" />, title: 'Headquarters Ahmedabad', details: [COMPANY_HEADQUARTERS.address], action: '#map' },
  { icon: <MapPin className="afc-icon" />, title: 'Headquarters Bhopal', details: ['F-904, 10th Floor, Rachna Tower, Rachna Nagar, Bhopal, Madhya Pradesh – 462023, India'], action: '#map' },
  { icon: <Mail className="afc-icon" />, title: 'Email', details: ['info@jigisha.co.in', 'info@jigisha.in'], action: 'mailto:info@jigisha.co.in' },
];

function RecenterMap({ position }) {
  const map = useMap();
  useEffect(() => {
    if (position) {
      map.setView(position, map.getZoom());
      // Force map to recalculate its size
      setTimeout(() => {
        map.invalidateSize();
      }, 400);
    }
  }, [position, map]);
  return null;
}

const inquiryTypes = [
  'General Inquiry', 'Request a Quote', 'Partnership Opportunity',
  'Technical Support', 'Career Inquiry', 'Media & Press',
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "", inquiryType: "", message: "",
    pincode: "", city: "", state: "", country: "", fullAddress: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFetchingLocation, setIsFetchingLocation] = useState(false);
  const [mapPosition, setMapPosition] = useState(COMPANY_HEADQUARTERS.position);
  const [markers, setMarkers] = useState([{
    position: COMPANY_HEADQUARTERS.position,
    address: COMPANY_HEADQUARTERS.address,
    title: COMPANY_HEADQUARTERS.name,
    isCompany: true
  }]);
  const [isMobile, setIsMobile] = useState(false);

  const lastFetchedPin = useRef("");

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const showAlert = (message) => alert(message);

  const fetchLocation = async (forcedPin = null) => {
    const pin = (forcedPin || formData.pincode).trim();

    if (!pin || pin.length < 3 || pin === lastFetchedPin.current) return;

    setIsFetchingLocation(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/location/${pin}`);
      if (!response.ok) throw new Error("API error");
      const data = await response.json();

      if (data.success) {
        lastFetchedPin.current = pin;
        setFormData(prev => ({
          ...prev,
          city: data.city || '',
          state: data.state || '',
          country: data.country || '',
          pincode: pin
        }));
        console.log(`Location auto-filled: ${data.city}`);
      }
    } catch (error) {
      console.error("Location lookup failed");
    } finally {
      setIsFetchingLocation(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (formData.pincode.length === 6) {
        fetchLocation();
      }
    }, 1200);
    return () => clearTimeout(timer);
  }, [formData.pincode]);

  const resetToCompanyLocation = () => {
    setMapPosition(COMPANY_HEADQUARTERS.position);
    showAlert("Map reset to company headquarters");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "pincode") {
      setFormData(prev => ({ ...prev, [name]: value, city: "", state: "", country: "" }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        showAlert("Message sent successfully!");
        setFormData({
          name: "", email: "", phone: "", company: "", inquiryType: "", message: "",
          pincode: "", city: "", state: "", country: "", fullAddress: "",
        });
        lastFetchedPin.current = "";
        setMapPosition(COMPANY_HEADQUARTERS.position);
      } else {
        showAlert("Failed to send message.");
      }
    } catch (err) {
      showAlert("Server error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="afc-contact-page">
      {/* Inline Style to guarantee Map Height */}
      <style>{`
        .leaflet-container {
          width: 100%;
          height: 100%;
          min-height: 400px;
          border-radius: 12px;
          z-index: 1;
        }
        .afc-map-wrapper {
          height: 450px;
          width: 100%;
          position: relative;
        }
      `}</style>

      {/* Hero Section */}
      <section className="afc-contact-hero">
        <div className="afc-contact-hero-overlay"></div>
        <div className="afc-container">
          <motion.div
            className="afc-contact-hero-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="afc-contact-badge">
              <MessageSquare className="afc-icon-small" /> Get In Touch
            </span>
            <h1 className="afc-contact-hero-title">Let's Build a Sustainable Future Together</h1>
            <p className="afc-contact-hero-desc">Having a query? We're here to help.</p>
          </motion.div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="afc-contact-info-section">
        <div className="afc-container">
          <div className="afc-contact-info-grid">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <a href={item.action} className="afc-contact-card">
                  {/* NEW WRAPPER FOR SIDE-BY-SIDE LAYOUT */}
                  <div className="afc-card-header">
                    <div className="afc-contact-card-icon">{item.icon}</div>
                    <h3 className="afc-contact-card-title">{item.title}</h3>
                  </div>

                  {item.details.map(d => (
                    <p key={d} className="afc-contact-card-detail">{d}</p>
                  ))}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Map */}
      <section className="afc-form-map-section">
        <div className="afc-container">
          <div className="afc-form-map-grid">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="afc-form-container">
                <h2 className="afc-form-title">Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="afc-form-grid-2">
                    <div>
                      <label className="afc-form-label">Full Name *</label>
                      <input type="text" name="name" required value={formData.name} onChange={handleInputChange} placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="afc-form-label">Email Address *</label>
                      <input type="email" name="email" required value={formData.email} onChange={handleInputChange} placeholder="john@company.com" />
                    </div>
                  </div>

                  <div className="afc-form-grid-2">
                    <div>
                      <label className="afc-form-label">Phone Number</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+91 98765 43210" />
                    </div>
                    <div>
                      <label className="afc-form-label">Company Name</label>
                      <input type="text" name="company" value={formData.company} onChange={handleInputChange} placeholder="Your Company" />
                    </div>
                  </div>

                  <div>
                    <label className="afc-form-label">ZIP / PIN Code (Auto-fill)</label>
                    <div className="afc-pincode-group">
                      <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        onBlur={() => fetchLocation()}
                        placeholder="Enter PIN"
                      />
                      <button type="button" onClick={() => fetchLocation()} disabled={isFetchingLocation || !formData.pincode}>
                        {isFetchingLocation ? '...' : 'Lookup'}
                      </button>
                    </div>
                  </div>

                  <div className="afc-form-grid-3">
                    <div><label className="afc-form-label">City</label><input type="text" value={formData.city} readOnly className="afc-readonly-field" /></div>
                    <div><label className="afc-form-label">State</label><input type="text" value={formData.state} readOnly className="afc-readonly-field" /></div>
                    <div><label className="afc-form-label">Country</label><input type="text" value={formData.country} readOnly className="afc-readonly-field" /></div>
                  </div>

                  <div>
                    <label className="afc-form-label">Inquiry Type *</label>
                    <select name="inquiryType" required value={formData.inquiryType} onChange={handleInputChange}>
                      <option value="">Select type</option>
                      {inquiryTypes.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="afc-form-label">Your Message *</label>
                    <textarea name="message" required rows={5} value={formData.message} onChange={handleInputChange} placeholder="Tell us about your problem..." />
                  </div>

                  <button type="submit" disabled={isSubmitting} className="afc-submit-btn">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Map Section */}
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="afc-map-section">
              <div id="map" className="afc-map-container-box">
                <div className="afc-map-header" style={{ marginBottom: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 className="afc-map-title" style={{ margin: 0 }}>Our Location</h3>
                  <button onClick={resetToCompanyLocation} className="afc-show-office-btn" style={{ cursor: 'pointer', padding: '5px 10px', borderRadius: '6px', border: '1px solid #ccc' }}>
                    <Building2 size={16} /> Reset Map
                  </button>
                </div>
                <div className="afc-map-wrapper">
                  <MapContainer
                    center={mapPosition}
                    zoom={15}
                    scrollWheelZoom={false}
                    className="leaflet-container"
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {markers.map((m, i) => (
                      <Marker key={i} position={m.position} icon={m.isCompany ? companyIcon : undefined}>
                        <Popup>
                          <div style={{ padding: '5px' }}>
                            <strong style={{ color: '#2563eb' }}>{m.title}</strong>
                            <p style={{ margin: '5px 0 0 0', fontSize: '12px' }}>{m.address}</p>
                            <a href={COMPANY_HEADQUARTERS.googleMapsLink} target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: '8px', fontSize: '12px', color: '#2563eb', textDecoration: 'underline' }}>
                              View on Google Maps
                            </a>
                          </div>
                        </Popup>
                      </Marker>
                    ))}
                    <RecenterMap position={mapPosition} />
                  </MapContainer>
                </div>
              </div>

              <div className="afc-map-instructions" style={{ marginTop: '20px', padding: '15px', background: '#f8fafc', borderRadius: '10px' }}>
                <h4 className="afc-instruction-title">Map Features</h4>
                <ul className="afc-instruction-list" style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <Building2 size={16} className="text-blue" />
                    <span><strong>Blue marker:</strong> Company headquarters</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <ExternalLink size={16} />
                    <span>Click marker to open in Google Maps</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="afc-faq-section" style={{ padding: '80px 0' }}>
        <div className="afc-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="afc-faq-content"
          >
            <h2 className="afc-faq-title" style={{ textAlign: 'center', marginBottom: '40px' }}>Frequently Asked Questions</h2>
            <div className="afc-faq-list" style={{ maxWidth: '800px', margin: '0 auto' }}>
              {[
                { q: "Where is your company located?", a: "Our headquarters are in Ahmedabad, Gujarat. See the map above for our exact building location." },
                { q: "Can I visit your office?", a: "Yes! We welcome visitors. Please schedule an appointment via the contact form or phone." },
                { q: "What are your working hours?", a: "We are open Monday through Saturday, from 10:00 AM to 6:30 PM." },
              ].map((f, i) => (
                <div key={i} className="afc-faq-card" style={{ marginBottom: '20px', padding: '20px', border: '1px solid #e2e8f0', borderRadius: '10px' }}>
                  <h4 className="afc-faq-question" style={{ marginBottom: '10px', color: '#1e293b' }}>{f.q}</h4>
                  <p className="afc-faq-answer" style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.6' }}>{f.a}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
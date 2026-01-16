import { motion } from 'framer-motion';
import {
    FaMapMarkedAlt, FaGlobe, FaTools, FaCloud,
    FaNetworkWired, FaWarehouse, FaMicrochip, FaCogs, FaHandshake, FaShieldAlt
} from 'react-icons/fa';
import OptimizedImage from '../components/OptimizedImage';
import './Infrastructure.css';

const Infrastructure = () => {
    const reveal = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    };

    const zonalOffices = ["North", "South", "East", "West", "Central"];

    return (
        <div className="woi-infra-page">
            {/* --- HERO SECTION --- */}
            <section className="woi-hero">
                <div className="woi-hero-bg">
                    <OptimizedImage src="https://images.unsplash.com/photo-1581094288338-2314dddb7bc3?q=80&w=2070" alt="Industrial Hub" width={1920} quality={85} eager />
                    <div className="woi-hero-overlay"></div>
                </div>
                <motion.div className="woi-hero-content" initial="hidden" animate="visible" variants={reveal}>
                    <span className="woi-pre-title">Global Operational Scale</span>
                    <h1 className="woi-main-title">Our Operational <br /><span className="woi-gold-text">Infrastructure</span></h1>
                    <p className="woi-hero-lead">A sophisticated network of offices, facilities, and digital systems driving mission-critical industrial ecosystems.</p>
                </motion.div>
            </section>

            {/* --- PAN-INDIA NETWORK --- */}
            <section className="woi-india-network">
                <div className="woi-container">
                    <div className="woi-section-header">
                        <h2 className="woi-marcellus">Pan-India Network</h2>
                        <div className="woi-gold-divider"></div>
                    </div>
                    <div className="woi-network-grid">
                        <motion.div className="woi-network-card" whileHover={{ y: -5 }}>
                            <div className="woi-card-top">
                                <FaMapMarkedAlt className="woi-icon" />
                                <h3>5 Zonal Offices</h3>
                            </div>
                            <div className="woi-zones">
                                {zonalOffices.map(zone => <span key={zone}>{zone}</span>)}
                            </div>
                        </motion.div>
                        <motion.div className="woi-network-card" whileHover={{ y: -5 }}>
                            <div className="woi-card-top">
                                <FaNetworkWired className="woi-icon" />
                                <h3>36 Local HQs</h3>
                            </div>
                            <p>Strategically located in key industrial hubs.</p>
                        </motion.div>
                        <motion.div className="woi-network-card" whileHover={{ y: -5 }}>
                            <div className="woi-card-top">
                                <FaTools className="woi-icon" />
                                <h3>2000+ Branches</h3>
                            </div>
                            <p>Workshops embedded directly in industrial belts.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- GLOBAL & SPECIALIZED FACILITIES --- */}
            <section className="woi-global-specialized">
                <div className="woi-container">
                    <div className="woi-split-layout">
                        {/* Global */}
                        <motion.div className="woi-side-block" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
                            <div className="woi-label">Global Reach</div>
                            <h3 className="woi-marcellus">International Infrastructure</h3>
                            <ul className="woi-infra-list">
                                <li><FaGlobe /> Offices: Dubai, Singapore, Frankfurt, New York</li>
                                <li><FaWarehouse /> Overseas warehouses & logistics hubs</li>
                                <li><FaHandshake className="woi-small-icon" /> Joint venture facilities in strategic markets</li>
                            </ul>
                        </motion.div>

                        {/* Specialized */}
                        <motion.div className="woi-side-block" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
                            <div className="woi-label">Excellence Centers</div>
                            <h3 className="woi-marcellus">Specialized Facilities</h3>
                            <div className="woi-facility-tags">
                                <span>Railway Mfg Plants</span>
                                <span>Industrial Fabrication</span>
                                <span>Testing Labs</span>
                                <span>R&D Centers</span>
                                <span>Training Academies</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- TECHNOLOGY INFRASTRUCTURE --- */}
            <section className="woi-tech-infra">
                <div className="woi-container">
                    <div className="woi-tech-box">
                        <div className="woi-tech-header">
                            <FaCloud className="woi-tech-main-icon" />
                            <h2 className="woi-marcellus">Technology Backbone</h2>
                        </div>
                        <div className="woi-tech-grid">
                            <div className="woi-tech-item">
                                <FaMicrochip />
                                <h4>IoT Systems</h4>
                                <p>Enabled monitoring and control.</p>
                            </div>
                            <div className="woi-tech-item">
                                <FaCogs />
                                <h4>Enterprise Cloud</h4>
                                <p>Cloud-based management systems.</p>
                            </div>
                            <div className="woi-tech-item">
                                <FaShieldAlt />
                                <h4>Cybersecurity</h4>
                                <p>Advanced protection protocols.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FOOTER BANNER --- */}
            <section className="woi-banner">
                <div className="woi-container">
                    <p>Dedicated service centers located near <strong>Railway Production Units</strong> across the nation.</p>
                </div>
            </section>
        </div>
    );
};

export default Infrastructure;
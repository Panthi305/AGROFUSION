import { motion } from 'framer-motion';
import {
    FaIndustry, FaCogs, FaAward, FaUsers,
    FaLightbulb, FaHandshake, FaGlobeEurope, FaShieldAlt
} from 'react-icons/fa';
import OptimizedImage from '../components/OptimizedImage';
import './Mission.css';

const Mission = () => {
    const reveal = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    };

    const pillars = [
        { id: 1, icon: <FaIndustry />, title: "National Growth", desc: "Strengthening Indian industries with dependable engineering solutions." },
        { id: 2, icon: <FaCogs />, title: "Precision Ops", desc: "Developing error-free platforms for production and maintenance." },
        { id: 3, icon: <FaAward />, title: "Gold Standards", desc: "Maintaining the highest benchmarks in manufacturing excellence." },
        { id: 4, icon: <FaUsers />, title: "Client Centric", desc: "Delivering products with complete transparency and peace of mind." },
        { id: 5, icon: <FaLightbulb />, title: "Future Innovation", desc: "Adopting advanced technologies to enhance global performance." },
        { id: 6, icon: <FaHandshake />, title: "Solid Partnerships", desc: "Building enduring relationships based on trust and loyalty." }
    ];

    return (
        <div className="pg-mission-page">
            {/* --- HERO SECTION --- */}
            <section className="pg-hero">
                <div className="pg-hero-visual">
                    <OptimizedImage src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" alt="Corporate Office" width={1920} quality={85} eager />
                    <div className="pg-hero-overlay"></div>
                </div>
                <motion.div className="pg-hero-body" initial="hidden" animate="visible" variants={reveal}>
                    <span className="pg-pre-title">Jigisha Group Conglomerate</span>
                    <h1 className="pg-main-title">Our Mission & <br /><span className="pg-gold-text">Strategic Vision</span></h1>
                    <p className="pg-hero-lead">To be the most dependable execution partner for mission-critical ecosystems across India and global markets.</p>
                </motion.div>
            </section>

            {/* --- THE CORE PREMISE --- */}
            <section className="pg-core-premise">
                <div className="pg-container">
                    <div className="pg-premise-wrapper">
                        <motion.div className="pg-premise-content" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
                            <h2 className="pg-sub-label">The Core Premise</h2>
                            <p className="pg-description">
                                Through our <strong>21 specialized subsidiaries</strong>, we deliver end-to-end solutions across
                                railways, infrastructure, technology, and energy. We strategically position the group
                                as a diversified, innovation-driven, and globally competitive entity.
                            </p>
                            <div className="pg-stat-grid">
                                <div className="pg-stat">
                                    <span className="pg-num">21</span>
                                    <p>Subsidiaries</p>
                                </div>
                                <div className="pg-stat">
                                    <span className="pg-num">Global</span>
                                    <p>Market Penetration</p>
                                </div>
                            </div>
                        </motion.div>
                        <div className="pg-premise-image">
                            <OptimizedImage src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop" alt="Infrastructure" width={1200} quality={85} />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- STRATEGIC HUBS (THE ENTITIES) --- */}
            <section className="pg-entities">
                <div className="pg-container">
                    <div className="pg-header-center">
                        <h2 className="pg-title-sm">Core Mission Statements</h2>
                        <div className="pg-gold-divider"></div>
                    </div>

                    <div className="pg-entity-grid">
                        <motion.div className="pg-entity-card" whileHover={{ y: -10 }}>
                            <div className="pg-card-top">
                                <FaShieldAlt className="pg-card-icon" />
                                <h3>Jigisha Enterprises Ltd.</h3>
                            </div>
                            <p>The central strategic, financial, and operational hub. We drive innovation and synergy across all subsidiaries while maintaining global market leadership.</p>
                            <div className="pg-card-footer">Strategic Hub</div>
                        </motion.div>

                        <motion.div className="pg-entity-card" whileHover={{ y: -10 }}>
                            <div className="pg-card-top">
                                <FaGlobeEurope className="pg-card-icon" />
                                <h3>Jigisha International Pvt. Ltd.</h3>
                            </div>
                            <p>Planning and managing the international expansion of all business verticals, establishing strong overseas operations and securing market share.</p>
                            <div className="pg-card-footer">Global Engine</div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- MISSION PILLARS --- */}
            <section className="pg-pillars">
                <div className="pg-container">
                    <div className="pg-pillars-grid">
                        {pillars.map((item) => (
                            <motion.div key={item.id} className="pg-pillar-item" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
                                <div className="pg-pillar-icon">{item.icon}</div>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- FINAL CTA --- */}
            <section className="pg-commitment">
                <div className="pg-container">
                    <motion.div className="pg-cta-box" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                        <h3>Building reliable infrastructure for a stronger future.</h3>
                        <button className="pg-gold-btn">Inquire Now</button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Mission;
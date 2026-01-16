import { motion } from 'framer-motion';
import {
    FaGlobe, FaChartLine, FaUsers, FaLeaf,
    FaTrain, FaMicrochip, FaStar, FaHandHoldingHeart
} from 'react-icons/fa';
import OptimizedImage from '../components/OptimizedImage';
import './Vision.css';

const Vision = () => {
    const reveal = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    };

    const milestones = [
        { id: 1, icon: <FaGlobe />, val: "30+", label: "Countries", sub: "Global Presence & Regional HQs" },
        { id: 2, icon: <FaChartLine />, val: "₹50k Cr", label: "Turnover", sub: "Projected Annual Revenue" },
        { id: 3, icon: <FaUsers />, val: "50k+", label: "Experts", sub: "Skilled Global Professionals" },
        { id: 4, icon: <FaLeaf />, val: "#1", label: "Green Tech", sub: "Leader in Sustainability" },
        { id: 5, icon: <FaTrain />, val: "Top 3", label: "Rail Sector", sub: "Global Infrastructure Leader" }
    ];

    const focusAreas = [
        { id: 1, title: "Technological Leadership", desc: "Pioneer in AI, IoT, and Industry 4.0 solutions.", icon: <FaMicrochip /> },
        { id: 2, title: "Global Excellence", desc: "World-class quality standards across all operations.", icon: <FaStar /> },
        { id: 3, title: "Sustainable Growth", desc: "Environmentally responsible business practices.", icon: <FaLeaf /> },
        { id: 4, title: "Stakeholder Value", desc: "Maximizing returns for investors and partners.", icon: <FaHandHoldingHeart /> }
    ];

    return (
        <div className="wwv-vision-page">
            {/* --- HERO SECTION --- */}
            <section className="wwv-hero">
                <div className="wwv-hero-bg">
                    <OptimizedImage src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" alt="Future Technology" width={1920} quality={85} eager />
                    <div className="wwv-hero-overlay"></div>
                </div>
                <motion.div className="wwv-hero-content" initial="hidden" animate="visible" variants={reveal}>
                    <span className="wwv-pre-title">Strategic Horizon</span>
                    <h1 className="wwv-main-title">Future Vision <span className="wwv-gold-text">2030</span></h1>
                    <div className="wwv-vision-statement">
                        <p>"To become a globally recognized, innovation-driven conglomerate that sets industry standards in reliability, sustainability, and technological excellence."</p>
                    </div>
                </motion.div>
            </section>

            {/* --- 2030 MILESTONES (STAT GRID) --- */}
            <section className="wwv-milestones">
                <div className="wwv-container">
                    <div className="wwv-section-header">
                        <h2 className="wwv-title-sm">Strategic Milestones</h2>
                        <div className="wwv-gold-divider"></div>
                    </div>
                    <div className="wwv-milestone-grid">
                        {milestones.map((m) => (
                            <motion.div key={m.id} className="wwv-m-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
                                <div className="wwv-m-icon">{m.icon}</div>
                                <h3 className="wwv-m-value">{m.val}</h3>
                                <span className="wwv-m-label">{m.label}</span>
                                <p className="wwv-m-sub">{m.sub}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CORE FOCUS AREAS --- */}
            <section className="wwv-focus">
                <div className="wwv-container">
                    <div className="wwv-focus-layout">
                        <motion.div className="wwv-focus-image" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
                            <OptimizedImage src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="Corporate Vision" width={1200} quality={85} />
                            <div className="wwv-image-badge">Industry 4.0</div>
                        </motion.div>

                        <div className="wwv-focus-content">
                            <h2 className="wwv-sub-label">Our Strategic Focus</h2>
                            <div className="wwv-focus-list">
                                {focusAreas.map((item) => (
                                    <motion.div key={item.id} className="wwv-focus-item" whileHover={{ x: 10 }}>
                                        <div className="wwv-focus-icon-wrap">{item.icon}</div>
                                        <div>
                                            <h4>{item.title}</h4>
                                            <p>{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FINAL VISION BANNER --- */}
            <section className="wwv-banner">
                <div className="wwv-container">
                    <motion.div className="wwv-banner-box" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                        <h2 className="wwv-marcellus">Architecting Global Standards</h2>
                        <p>Empowering the next generation of industrial excellence through innovation.</p>
                        <div className="wwv-gold-line"></div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Vision;
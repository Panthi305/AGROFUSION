import { motion } from 'framer-motion';
import {
    FaUserTie, FaUsers, FaMicrochip, FaGlobe,
    FaAward, FaLightbulb, FaCogs, FaProjectDiagram
} from 'react-icons/fa';
import OptimizedImage from '../components/OptimizedImage';
import './Leadership.css';

const Leadership = () => {
    const reveal = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    };

    const talentCategories = [
        { title: "Engineering Excellence", desc: "Mechanical, Electrical, Civil, Electronics, and IT specialists.", icon: <FaCogs /> },
        { title: "Project Management", desc: "Certified PMP professionals for complex global execution.", icon: <FaProjectDiagram /> },
        { title: "Technical Experts", desc: "Railway technology and infrastructure development specialists.", icon: <FaMicrochip /> },
        { title: "Commercial Team", desc: "Procurement, supply chain, and relationship experts.", icon: <FaUserTie /> }
    ];

    return (
        <div className="wlt-leadership-page">
            {/* --- HERO SECTION --- */}
            <section className="wlt-hero">
                <div className="wlt-hero-overlay"></div>
                <motion.div className="wlt-hero-content" initial="hidden" animate="visible" variants={reveal}>
                    <span className="wlt-pre-title">Intellectual Capital</span>
                    <h1 className="wlt-main-title">Leadership & <br /><span className="wlt-gold-text">Talent Pool</span></h1>
                    <p className="wlt-hero-lead">A powerhouse of 15,000+ professionals driving industrial transformation across the globe.</p>
                </motion.div>
            </section>

            {/* --- LEADERSHIP TIERS --- */}
            <section className="wlt-tiers">
                <div className="wlt-container">
                    <div className="wlt-section-header">
                        <h2 className="wlt-marcellus">Our Leadership Hierarchy</h2>
                        <div className="wlt-gold-divider"></div>
                    </div>
                    [Image of organizational structure of a global conglomerate]
                    <div className="wlt-tiers-grid">
                        <motion.div className="wlt-tier-card" whileHover={{ y: -10 }}>
                            <div className="wlt-tier-badge">20+ Years Exp</div>
                            <h3>Board of Directors</h3>
                            <p>Seasoned professionals providing strategic governance and long-term vision.</p>
                        </motion.div>
                        <motion.div className="wlt-tier-card" whileHover={{ y: -10 }}>
                            <div className="wlt-tier-badge">Subsidiary Leads</div>
                            <h3>Business Heads</h3>
                            <p>Domain experts leading each of the 21 specialized business subsidiaries.</p>
                        </motion.div>
                        <motion.div className="wlt-tier-card" whileHover={{ y: -10 }}>
                            <div className="wlt-tier-badge">The Strategists</div>
                            <h3>Functional Leaders</h3>
                            <p>Specialists in Technology, Operations, Finance, and Global Strategy.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- TALENT POOL GRID --- */}
            <section className="wlt-talent">
                <div className="wlt-container">
                    <div className="wlt-talent-wrap">
                        <div className="wlt-talent-info">
                            <h2 className="wlt-marcellus">15,000+ Strong</h2>
                            <p>Our talent pool is a diverse mix of technical, commercial, and support roles unified by a culture of excellence.</p>
                            <div className="wlt-talent-grid">
                                {talentCategories.map((cat, i) => (
                                    <div key={i} className="wlt-talent-item">
                                        <div className="wlt-cat-icon">{cat.icon}</div>
                                        <div>
                                            <h4>{cat.title}</h4>
                                            <p>{cat.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="wlt-talent-visual">
                            <OptimizedImage src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070" alt="Team Collaboration" width={1200} quality={85} />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- DEVELOPMENT & CULTURE --- */}
            <section className="wlt-culture">
                <div className="wlt-container">
                    <div className="wlt-dual-grid">
                        {/* Team Development */}
                        <motion.div className="wlt-culture-box" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
                            <FaAward className="wlt-box-icon" />
                            <h3 className="wlt-marcellus">Team Development</h3>
                            <ul className="wlt-culture-list">
                                <li>Leadership development initiatives & workshops</li>
                                <li>Cross-functional exposure across group companies</li>
                                <li>International assignments & global best practices</li>
                            </ul>
                        </motion.div>

                        {/* Work Culture */}
                        <motion.div className="wlt-culture-box wlt-dark-bg" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
                            <FaLightbulb className="wlt-box-icon gold" />
                            <h3 className="wlt-marcellus white">Work Culture</h3>
                            <p className="white-opacity">A performance-driven environment emphasizing innovation and creative problem-solving across all functions.</p>
                            <div className="wlt-culture-tags">
                                <span>Diversity</span>
                                <span>Inclusion</span>
                                <span>Collaboration</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Leadership;
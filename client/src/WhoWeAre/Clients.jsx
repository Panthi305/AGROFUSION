import { motion } from 'framer-motion';
import {
    FaBuilding, FaGlobe, FaCogs, FaProjectDiagram,
    FaAward, FaHandshake, FaShieldAlt, FaTrain
} from 'react-icons/fa';
import OptimizedImage from '../components/OptimizedImage';
import './Clients.css';

const Clients = () => {
    const reveal = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    };

    const clientSegments = [
        {
            id: 'govt',
            title: "Government & PSUs",
            icon: <FaBuilding />,
            image: "https://images.unsplash.com/photo-1521791136064-7986c2923216?q=80&w=2069&auto=format&fit=crop",
            items: [
                "Indian Railways & Metro Authorities",
                "Defense Establishments & PSUs",
                "Infrastructure Development Corps",
                "State & Central Departments",
                "Smart City Projects"
            ]
        },
        {
            id: 'corp',
            title: "Corporate Excellence",
            icon: <FaCogs />,
            image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
            items: [
                "Fortune 500 Companies",
                "Industrial Manufacturing Giants",
                "Technology & IT Corporations",
                "Healthcare & Pharma Leaders",
                "Automotive & Engineering Firms"
            ]
        },
        {
            id: 'intl',
            title: "International Reach",
            icon: <FaGlobe />,
            image: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=2070&auto=format&fit=crop",
            items: [
                "Overseas Railway Authorities",
                "Global Infrastructure Developers",
                "International Defense Orgs",
                "Cross-border EPC Contractors",
                "Foreign Government Projects"
            ]
        }
    ];

    return (
        <div className="woc-clients-page">
            {/* --- HERO SECTION --- */}
            <section className="woc-hero">
                <div className="woc-hero-overlay"></div>
                <motion.div className="woc-hero-content" initial="hidden" animate="visible" variants={reveal}>
                    <span className="woc-pre-title">Trusted Excellence</span>
                    <h1 className="woc-main-title">Our Esteemed <span className="woc-gold-text">Partnerships</span></h1>
                    <p className="woc-hero-lead">Serving a diverse portfolio of prestigious clients across government, corporate, and global sectors.</p>
                </motion.div>
            </section>

            {/* --- PORTFOLIO CATEGORIES --- */}
            <section className="woc-portfolio">
                <div className="woc-container">
                    {clientSegments.map((segment, idx) => (
                        <motion.div
                            key={segment.id}
                            className={`woc-segment-row ${idx % 2 !== 0 ? 'woc-reverse' : ''}`}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={reveal}
                        >
                            <div className="woc-segment-img">
                                <OptimizedImage src={segment.image} alt={segment.title} width={1000} quality={85} />
                                <div className="woc-img-frame"></div>
                            </div>
                            <div className="woc-segment-text">
                                <div className="woc-segment-header">
                                    <div className="woc-seg-icon">{segment.icon}</div>
                                    <h2 className="woc-marcellus">{segment.title}</h2>
                                </div>
                                <ul className="woc-client-list">
                                    {segment.items.map((item, i) => (
                                        <li key={i}><FaAward className="woc-list-bullet" /> {item}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* --- CORE PHILOSOPHY --- */}
            <section className="woc-philosophy">
                <div className="woc-container">
                    <div className="woc-philosophy-card">
                        <div className="woc-phil-content">
                            <h3 className="woc-marcellus">Our Client-Centric Approach</h3>
                            <p>We focus on building long-term relationships through reliability, innovation, and exceptional service delivery across all 21 business verticals. Your mission is our mandate.</p>
                        </div>
                        <div className="woc-stats-strip">
                            <div className="woc-stat"><FaTrain /> <span>Rail Experts</span></div>
                            <div className="woc-stat"><FaShieldAlt /> <span>Defense Partners</span></div>
                            <div className="woc-stat"><FaProjectDiagram /> <span>EPC Global</span></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- TRUST BANNER --- */}
            <section className="woc-cta">
                <div className="woc-container">
                    <motion.div className="woc-banner-box" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                        <FaHandshake className="woc-cta-icon" />
                        <h2>Partner with Jigisha Group</h2>
                        <p>Let's collaborate on your next mission-critical project.</p>
                        <button className="woc-gold-btn">Begin Conversation</button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Clients;
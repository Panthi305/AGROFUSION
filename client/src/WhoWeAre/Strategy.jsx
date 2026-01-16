import React from 'react';
import { motion } from 'framer-motion';
import {
    FaGlobeAmericas, FaLink, FaLightbulb, FaLeaf,
    FaArrowRight, FaMapMarkedAlt, FaCity, FaFlagUsa
} from 'react-icons/fa';
import './Strategy.css';

const Strategy = () => {
    const reveal = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    };

    const strategicPillars = [
        {
            id: 1,
            icon: <FaGlobeAmericas />,
            title: "Global Expansion Strategy",
            desc: "Establishing presence in 30+ countries by 2030 through subsidiaries and strategic alliances.",
            hubs: ["Dubai", "Singapore", "Frankfurt", "New York"]
        },
        {
            id: 2,
            icon: <FaLink />,
            title: "Vertical Integration",
            desc: "Creating synergies across 21 subsidiaries to deliver integrated concept-to-completion solutions.",
            extra: "Efficiency focus & cost reduction."
        },
        {
            id: 3,
            icon: <FaLightbulb />,
            title: "Technology & Innovation",
            desc: "Investing 15% of annual profits into R&D for AI, IoT, Defense, and Advanced Manufacturing.",
            extra: "R&D focused leadership."
        },
        {
            id: 4,
            icon: <FaLeaf />,
            title: "Sustainability Integration",
            desc: "Implementing ESG policies targeting 40% renewable energy usage across all operations by 2030.",
            extra: "Environment & Social Governance."
        }
    ];

    const marketTiers = [
        { tier: "Tier 1", icon: <FaCity />, title: "Domestic Consolidation", sub: "Leadership in Indian Railways & Infrastructure" },
        { tier: "Tier 2", icon: <FaMapMarkedAlt />, title: "Emerging Corridors", sub: "Expansion in MENA, SE Asia, and African markets" },
        { tier: "Tier 3", icon: <FaFlagUsa />, title: "Developed Markets", sub: "Strategic Entry into EU and North America" }
    ];

    return (
        <div className="wsg-strategy-page">
            {/* --- HERO SECTION --- */}
            <section className="wsg-hero">
                <div className="wsg-hero-overlay"></div>
                <motion.div className="wsg-hero-content" initial="hidden" animate="visible" variants={reveal}>
                    <span className="wsg-pre-title">Framework for Growth</span>
                    <h1 className="wsg-main-title">Strategic <span className="wsg-gold-text">Framework</span></h1>
                    <p className="wsg-hero-lead">Our roadmap to global leadership is built on precision, innovation, and sustainable integration.</p>
                </motion.div>
            </section>

            {/* --- STRATEGIC PILLARS GRID --- */}
            <section className="wsg-pillars">
                <div className="wsg-container">
                    <div className="wsg-pillars-grid">
                        {strategicPillars.map((p) => (
                            <motion.div key={p.id} className="wsg-p-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
                                <div className="wsg-p-icon">{p.icon}</div>
                                <h3 className="wsg-marcellus">{p.title}</h3>
                                <p>{p.desc}</p>
                                {p.hubs ? (
                                    <div className="wsg-hubs-tag">
                                        {p.hubs.map(hub => <span key={hub}>{hub}</span>)}
                                    </div>
                                ) : <span className="wsg-extra">{p.extra}</span>}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- MARKET PENETRATION (THE TIERS) --- */}
            <section className="wsg-penetration">
                <div className="wsg-container">
                    <div className="wsg-section-header">
                        <h2 className="wsg-marcellus">Market Penetration Strategy</h2>
                        <div className="wsg-gold-divider"></div>
                    </div>
                    <div className="wsg-tier-row">
                        {marketTiers.map((t, idx) => (
                            <motion.div key={idx} className="wsg-tier-item" whileHover={{ scale: 1.02 }}>
                                <div className="wsg-tier-num">{t.tier}</div>
                                <div className="wsg-tier-icon">{t.icon}</div>
                                <h4>{t.title}</h4>
                                <p>{t.sub}</p>
                                {idx < 2 && <FaArrowRight className="wsg-arrow" />}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- VISION STATEMENT STRIP --- */}
            <section className="wsg-quote">
                <div className="wsg-container">
                    <motion.div className="wsg-quote-box" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                        <h2 className="wsg-marcellus">Execution over Promise</h2>
                        <p>Our strategy is not just a plan; it is a commitment to the 21 subsidiaries and the thousands of professionals driving our global vision forward.</p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Strategy;
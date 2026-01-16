import React from 'react';
import { motion } from 'framer-motion';
import {
    FaGem, FaBalanceScale, FaLeaf, FaLightbulb,
    FaHandshake, FaShieldAlt, FaQuoteLeft
} from 'react-icons/fa';
import './Values.css';

const Values = () => {
    const reveal = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    };

    const coreValues = [
        {
            id: "01",
            icon: <FaGem />,
            title: "Excellence",
            desc: "Commitment to delivering world-class quality in every project, product, and service through continuous improvement and innovation."
        },
        {
            id: "02",
            icon: <FaBalanceScale />,
            title: "Integrity",
            desc: "Operating with transparency, honesty, and ethical conduct in all business dealings, maintaining the highest standards of corporate governance."
        },
        {
            id: "03",
            icon: <FaLeaf />,
            title: "Sustainability",
            desc: "Balancing economic growth with environmental protection and social responsibility, creating value for future generations."
        },
        {
            id: "04",
            icon: <FaLightbulb />,
            title: "Innovation",
            desc: "Embracing creativity and technology to develop cutting-edge solutions that address complex challenges across industries."
        },
        {
            id: "05",
            icon: <FaHandshake />,
            title: "Collaboration",
            desc: "Fostering teamwork, partnerships, and synergies across subsidiaries, clients, and stakeholders for mutual success."
        },
        {
            id: "06",
            icon: <FaShieldAlt />,
            title: "Reliability",
            desc: "Building trust through consistent performance, timely delivery, and dependable execution of commitments."
        }
    ];

    return (
        <div className="wcv-values-page">
            {/* --- HERO SECTION --- */}
            <section className="wcv-hero">
                <div className="wcv-hero-overlay"></div>
                <motion.div className="wcv-hero-content" initial="hidden" animate="visible" variants={reveal}>
                    <span className="wcv-pre-title">Ethical Foundation</span>
                    <h1 className="wcv-main-title">Core Values & <br /><span className="wcv-gold-text">Ethical Framework</span></h1>
                    <div className="wcv-hero-line"></div>
                </motion.div>
            </section>

            {/* --- PHILOSOPHY STRIP --- */}
            <section className="wcv-philosophy">
                <div className="wcv-container">
                    <motion.div className="wcv-phil-box" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                        <FaQuoteLeft className="wcv-quote-icon" />
                        <p>Our values are not just words on a wall; they are the <strong>principles that guide every decision</strong> we make across our 21 subsidiaries and global operations.</p>
                    </motion.div>
                </div>
            </section>

            {/* --- VALUES GRID --- */}
            <section className="wcv-grid-section">
                <div className="wcv-container">
                    <div className="wcv-values-grid">
                        {coreValues.map((value, idx) => (
                            <motion.div
                                key={value.id}
                                className="wcv-value-card"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={reveal}
                                whileHover={{ y: -10 }}
                            >
                                <div className="wcv-card-head">
                                    <span className="wcv-value-number">{value.id}</span>
                                    <div className="wcv-value-icon">{value.icon}</div>
                                </div>
                                <h3 className="wcv-marcellus">{value.title}</h3>
                                <div className="wcv-card-divider"></div>
                                <p>{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- ETHICAL COMMITMENT BANNER --- */}
            <section className="wcv-commitment">
                <div className="wcv-container">
                    <motion.div className="wcv-commit-box" whileHover={{ scale: 1.01 }}>
                        <div className="wcv-commit-content">
                            <h2 className="wcv-marcellus">The Jigisha Standard</h2>
                            <p>We hold ourselves accountable to the highest international standards of business ethics. Our framework ensures that as we grow, our integrity remains unshakeable.</p>
                            <div className="wcv-badge-row">
                                <span>Transparency</span>
                                <span>Accountability</span>
                                <span>Governance</span>
                            </div>
                        </div>
                        <div className="wcv-gold-shape"></div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Values;
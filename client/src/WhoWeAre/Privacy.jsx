import React from 'react';
import { motion } from 'framer-motion';
import {
    FaShieldAlt, FaDatabase, FaLock, FaUserShield,
    FaServer, FaCheckCircle, FaFileContract, FaKey
} from 'react-icons/fa';
import './Privacy.css';

const Privacy = () => {
    const reveal = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    };

    const usagePoints = [
        "Processing orders and delivering services",
        "Compliance with regulatory requirements",
        "Improving our products and services",
        "Communication about offers and updates"
    ];

    const protectionPillars = [
        { icon: <FaCheckCircle />, title: "ISO 27001", desc: "Certified data security measures." },
        { icon: <FaLock />, title: "Encryption", desc: "Encrypted data transmission & storage." },
        { icon: <FaServer />, title: "Security Audits", desc: "Regular assessments & vulnerability checks." },
        { icon: <FaKey />, title: "Restricted Access", desc: "Strictly limited sensitive info access." }
    ];

    return (
        <div className="wpp-privacy-page">
            {/* --- HERO SECTION --- */}
            <section className="wpp-hero">
                <div className="wpp-hero-overlay"></div>
                <motion.div className="wpp-hero-content" initial="hidden" animate="visible" variants={reveal}>
                    <span className="wpp-pre-title">Legal & Compliance</span>
                    <h1 className="wpp-main-title">Privacy & Data <br /><span className="wpp-gold-text">Protection</span></h1>
                    <p className="wpp-hero-lead">Committed to safeguarding your business intelligence with global security standards.</p>
                </motion.div>
            </section>

            {/* --- INFORMATION COLLECTION --- */}
            <section className="wpp-collection">
                <div className="wpp-container">
                    <div className="wpp-split-layout">
                        <motion.div className="wpp-text-block" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
                            <h2 className="wpp-marcellus">Information Collection</h2>
                            <div className="wpp-gold-line"></div>
                            <p className="wpp-para">
                                We collect business information necessary for <strong>vendor onboarding, project execution, and service delivery</strong>.
                                This includes detailed company profiles, financial information, and mission-critical technical specifications required for conglomerate operations.
                            </p>
                        </motion.div>
                        <div className="wpp-icon-box">
                            <FaDatabase className="wpp-bg-icon" />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- DATA USAGE & PROTECTION GRID --- */}
            <section className="wpp-details-grid">
                <div className="wpp-container">
                    <div className="wpp-grid-layout">
                        {/* Usage */}
                        <motion.div className="wpp-usage-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
                            <h3 className="wpp-marcellus">Data Usage</h3>
                            <ul className="wpp-usage-list">
                                {usagePoints.map((point, idx) => (
                                    <li key={idx}><FaFileContract className="wpp-li-icon" /> {point}</li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Protection */}
                        <div className="wpp-protection-wrap">
                            <h3 className="wpp-marcellus">Data Protection</h3>
                            <div className="wpp-protection-grid">
                                {protectionPillars.map((pillar, idx) => (
                                    <div key={idx} className="wpp-pillar-item">
                                        <div className="wpp-pillar-icon">{pillar.icon}</div>
                                        <div>
                                            <h4>{pillar.title}</h4>
                                            <p>{pillar.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- THIRD PARTY DISCLOSURE --- */}
            <section className="wpp-disclosure">
                <div className="wpp-container">
                    <motion.div className="wpp-disclosure-box" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
                        <div className="wpp-disc-header">
                            <FaUserShield className="wpp-disc-icon" />
                            <h2 className="wpp-marcellus">Third-Party Disclosure</h2>
                        </div>
                        <p className="wpp-disc-intro">We do not sell or trade your information. Data is shared only with:</p>
                        <div className="wpp-disc-grid">
                            <div className="wpp-disc-item"><strong>Regulatory Authorities</strong><br />As required by law</div>
                            <div className="wpp-disc-item"><strong>Financial Institutions</strong><br />For transaction processing</div>
                            <div className="wpp-disc-item"><strong>Logistics Partners</strong><br />For delivery purposes</div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- FOOTER STATEMENT --- */}
            <section className="wpp-footer-note">
                <div className="wpp-container">
                    <p>Your trust is our most valuable asset. For any queries regarding our privacy protocols, please contact our Compliance Hub.</p>
                </div>
            </section>
        </div>
    );
};

export default Privacy;
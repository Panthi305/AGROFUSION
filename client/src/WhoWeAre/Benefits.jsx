import React from 'react';
import { motion } from 'framer-motion';
import {
    FaWindowRestore, FaLayerGroup, FaGlobe, FaMicrochip,
    FaUserTie, FaChartLine, FaHandshake, FaShieldAlt,
    FaGraduationCap, FaBriefcase, FaLightbulb, FaRocket
} from 'react-icons/fa';
import './Benefits.css';

const Benefits = () => {
    const reveal = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    };

    return (
        <div className="wcb-benefits-page">
            {/* --- HERO SECTION --- */}
            <section className="wcb-hero">
                <div className="wcb-hero-overlay"></div>
                <motion.div className="wcb-hero-content" initial="hidden" animate="visible" variants={reveal}>
                    <span className="wcb-pre-title">Strategic Value</span>
                    <h1 className="wcb-main-title">Why Partner With <br /><span className="wcb-gold-text">Jigisha Group</span></h1>
                    <p className="wcb-hero-lead">Unlocking unprecedented scale, reliability, and growth across our 21-subsidiary global ecosystem.</p>
                </motion.div>
            </section>

            {/* --- FOR CLIENTS (The Single Window) --- */}
            <section className="wcb-clients">
                <div className="wcb-container">
                    <div className="wcb-section-header">
                        <h2 className="wcb-marcellus">For Our Clients</h2>
                        <div className="wcb-gold-divider"></div>
                    </div>
                    <div className="wcb-benefit-grid">
                        <motion.div className="wcb-benefit-card" whileHover={{ y: -10 }}>
                            <FaWindowRestore className="wcb-icon" />
                            <h4>Single Window Solution</h4>
                            <p>Access to 21 specialized subsidiaries through one dedicated point of contact.</p>
                        </motion.div>
                        <motion.div className="wcb-benefit-card" whileHover={{ y: -10 }}>
                            <FaLayerGroup className="wcb-icon" />
                            <h4>Integrated Expertise</h4>
                            <p>Cross-disciplinary knowledge harmonized for complex, mission-critical projects.</p>
                        </motion.div>
                        <motion.div className="wcb-benefit-card" whileHover={{ y: -10 }}>
                            <FaGlobe className="wcb-icon" />
                            <h4>Scale & Reach</h4>
                            <p>Leverage 2000+ locations across India and a growing international presence.</p>
                        </motion.div>
                        <motion.div className="wcb-benefit-card" whileHover={{ y: -10 }}>
                            <FaMicrochip className="wcb-icon" />
                            <h4>Technology Edge</h4>
                            <p>Access the latest industrial innovations across all business verticals.</p>
                        </motion.div>
                        <motion.div className="wcb-benefit-card wcb-featured" whileHover={{ y: -10 }}>
                            <FaUserTie className="wcb-icon white" />
                            <h4 className="white">Reliability</h4>
                            <p className="white">15,000+ skilled professionals ensuring every project's ultimate success.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- FOR PARTNERS (The Growth Platform) --- */}
            <section className="wcb-partners">
                <div className="wcb-container">
                    <div className="wcb-dark-box">
                        <div className="wcb-box-header">
                            <h2 className="wcb-marcellus">For Vendors & Partners</h2>
                        </div>
                        <div className="wcb-partner-list">
                            <div className="wcb-partner-item">
                                <FaChartLine />
                                <div>
                                    <h5>Volume Opportunities</h5>
                                    <p>Large-scale, recurring business across diverse conglomerate subsidiaries.</p>
                                </div>
                            </div>
                            <div className="wcb-partner-item">
                                <FaHandshake />
                                <div>
                                    <h5>Growth Platform</h5>
                                    <p>Access to new markets and sectors through our extensive group network.</p>
                                </div>
                            </div>
                            <div className="wcb-partner-item">
                                <FaShieldAlt />
                                <div>
                                    <h5>Financial Stability</h5>
                                    <p>Timely payments and transparent financial dealings guaranteed by the group.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FOR EMPLOYEES (The Career Horizon) --- */}
            <section className="wcb-employees">
                <div className="wcb-container">
                    <div className="wcb-section-header">
                        <h2 className="wcb-marcellus">For Our Employees</h2>
                        <div className="wcb-gold-divider"></div>
                    </div>
                    <div className="wcb-employee-row">
                        <motion.div className="wcb-emp-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
                            <FaBriefcase className="wcb-emp-icon" />
                            <h4>Career Growth</h4>
                            <p>Unmatched opportunities across 21 companies and diverse industrial sectors.</p>
                        </motion.div>
                        <motion.div className="wcb-emp-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
                            <FaGraduationCap className="wcb-emp-icon" />
                            <h4>Skill Development</h4>
                            <p>Continuous training and upskilling programs at our specialized academies.</p>
                        </motion.div>
                        <motion.div className="wcb-emp-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
                            <FaRocket className="wcb-emp-icon" />
                            <h4>Global Exposure</h4>
                            <p>International projects and assignments across global regional headquarters.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- FINAL STAT BANNER --- */}
            <section className="wcb-banner">
                <div className="wcb-container">
                    <div className="wcb-banner-inner">
                        <FaLightbulb className="wcb-banner-icon" />
                        <p>Driven by an <strong>Innovation Culture</strong> that encourages new ideas and transformative technologies.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Benefits;
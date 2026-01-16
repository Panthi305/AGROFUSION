import React from 'react';
import { motion } from 'framer-motion';
import {
    FaChartLine, FaRegHandshake, FaBalanceScale, FaLeaf,
    FaArrowUp, FaFileInvoiceDollar, FaGlobe, FaNetworkWired,
    FaShieldAlt, FaLightbulb
} from 'react-icons/fa';
import './Investor.css';

const Investor = () => {
    const reveal = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    };

    const opportunities = [
        { title: "Railway Modernization", desc: "₹2 Lakh Crore planned investment by Indian Railways.", icon: <FaArrowUp /> },
        { title: "National Infrastructure", desc: "Key projects within the National Infrastructure Pipeline.", icon: <FaNetworkWired /> },
        { title: "Renewable Energy", desc: "Supporting the 500 GW renewable capacity goal by 2030.", icon: <FaLeaf /> },
        { title: "Defense Mfg", desc: "'Make in India' initiatives for indigenous production.", icon: <FaShieldAlt /> },
        { title: "Digital Evolution", desc: "Surging demand for automation and IoT solutions.", icon: <FaLightbulb /> }
    ];

    return (
        <div className="wir-investor-page">
            {/* --- HERO SECTION --- */}
            <section className="wir-hero">
                <div className="wir-hero-overlay"></div>
                <motion.div className="wir-hero-content" initial="hidden" animate="visible" variants={reveal}>
                    <span className="wir-pre-title">Capital Excellence</span>
                    <h1 className="wir-main-title">Investor Relations & <br /><span className="wir-gold-text">Financial Performance</span></h1>
                    <p className="wir-hero-lead">Disciplined capital allocation driving sustainable value creation across global industrial verticals.</p>
                </motion.div>
            </section>

            {/* --- INVESTMENT PHILOSOPHY --- */}
            <section className="wir-philosophy">
                <div className="wir-container">
                    <div className="wir-section-header">
                        <h2 className="wir-marcellus">Investment Philosophy</h2>
                        <div className="wir-gold-divider"></div>
                    </div>
                    <div className="wir-phil-grid">
                        <motion.div className="wir-phil-card" whileHover={{ y: -10 }}>
                            <FaRegHandshake className="wir-phil-icon" />
                            <h4>Strategic Growth</h4>
                            <p>Investments strictly aligned with long-term industrial business strategy.</p>
                        </motion.div>
                        <motion.div className="wir-phil-card" whileHover={{ y: -10 }}>
                            <FaBalanceScale className="wir-phil-icon" />
                            <h4>Risk Management</h4>
                            <p>A highly balanced portfolio across diverse sectors and global geographies.</p>
                        </motion.div>
                        <motion.div className="wir-phil-card" whileHover={{ y: -10 }}>
                            <FaChartLine className="wir-phil-icon" />
                            <h4>Value Creation</h4>
                            <p>Maximizing shareholder returns through relentless operational excellence.</p>
                        </motion.div>
                        <motion.div className="wir-phil-card" whileHover={{ y: -10 }}>
                            <FaLeaf className="wir-phil-icon" />
                            <h4>Sustainability</h4>
                            <p>Prioritizing environmentally and socially responsible capital deployment.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- FINANCIAL HIGHLIGHTS (STAT BOX) --- */}
            <section className="wir-highlights">
                <div className="wir-container">
                    <div className="wir-highlights-box">
                        <div className="wir-highlights-header">
                            <h2 className="wir-marcellus white">Financial Highlights</h2>
                            <p className="white-opacity">Consistency. Profitability. Asset Strength.</p>
                        </div>
                        <div className="wir-stats-grid">
                            <div className="wir-stat-item">
                                <span className="wir-stat-val">20%+</span>
                                <span className="wir-stat-label">5-Year Revenue CAGR</span>
                            </div>
                            <div className="wir-stat-item">
                                <span className="wir-stat-val">Strong</span>
                                <span className="wir-stat-label">EBITDA Margins</span>
                            </div>
                            <div className="wir-stat-item">
                                <span className="wir-stat-val">Asset</span>
                                <span className="wir-stat-label">Heavy Infrastructure</span>
                            </div>
                            <div className="wir-stat-item">
                                <span className="wir-stat-val">High</span>
                                <span className="wir-stat-label">Credit Ratings</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- COMMUNICATION & OPPORTUNITIES --- */}
            <section className="wir-comm-opp">
                <div className="wir-container">
                    <div className="wir-dual-layout">
                        {/* Communication */}
                        <motion.div className="wir-comm-block" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
                            <h3 className="wir-marcellus">Investor Communication</h3>
                            <ul className="wir-comm-list">
                                <li><FaFileInvoiceDollar /> Quarterly Results & Annual Reports</li>
                                <li><FaGlobe /> Regular Investor Meets & Conference Calls</li>
                                <li><FaShieldAlt /> Transparent Material Disclosures</li>
                            </ul>
                            <div className="wir-contact-badge">Dedicated IR Team Support</div>
                        </motion.div>

                        {/* Growth Opportunities */}
                        <motion.div className="wir-opp-block" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
                            <h3 className="wir-marcellus">Growth Opportunities</h3>
                            <div className="wir-opp-scroll">
                                {opportunities.map((opp, idx) => (
                                    <div key={idx} className="wir-opp-item">
                                        <div className="wir-opp-icon">{opp.icon}</div>
                                        <div className="wir-opp-text">
                                            <h5>{opp.title}</h5>
                                            <p>{opp.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Investor;
import React from 'react';
import { motion } from 'framer-motion';
import {
    FaFileSignature, FaClock, FaCreditCard, FaBoxOpen,
    FaShippingFast, FaExclamationTriangle, FaTools, FaLightbulb,
    FaFingerprint, FaGavel
} from 'react-icons/fa';
import './Terms.css';

const Terms = () => {
    const reveal = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    };

    const sections = [
        {
            title: "General Terms",
            icon: <FaFileSignature />,
            points: [
                { label: "Formalities", text: "All business engagements are subject to formal written agreements." },
                { label: "Validity", text: "Pricing and terms are valid for 30 days from quotation date." },
                { label: "Payments", text: "Standard terms: 30% advance, balance upon delivery/completion." }
            ]
        },
        {
            title: "Order & Delivery",
            icon: <FaShippingFast />,
            points: [
                { label: "Quantities", text: "Minimum order quantities may apply for certain specialized products." },
                { label: "Timelines", text: "Delivery timelines are estimates and subject to force majeure." },
                { label: "Risk Transfer", text: "Risk transfers to buyer upon official delivery confirmation." }
            ]
        },
        {
            title: "Warranty & Liability",
            icon: <FaTools />,
            points: [
                { label: "Standard Warranty", text: "12 months from installation or commissioning date." },
                { label: "Liability Cap", text: "Total liability is strictly limited to the contract value." },
                { label: "Exclusions", text: "Normal wear, improper use, or unauthorized modifications." }
            ]
        },
        {
            title: "Intellectual Property",
            icon: <FaFingerprint />,
            points: [
                {
                    label: "Ownership",
                    text: "All trademarks, logos, brand names, designs, and intellectual property displayed are the property of their respective owners."
                },
                // {
                //     label: "Usage Rights",
                //     text: "Use of any Jigisha Group intellectual property is permitted only with prior written authorization from the respective legal entity."
                // },
                {
                    label: "Reproduction",
                    text: "Unauthorized reproduction, distribution, modification, or commercial use of any content or branding is strictly prohibited."
                },
                {
                    label: "Confidentiality",
                    text: "All proprietary, technical, and commercial information shared is subject to confidentiality and non-disclosure obligations."
                }
            ]
        }

    ];

    return (
        <div className="wtc-terms-page">
            {/* --- HERO SECTION --- */}
            <section className="wtc-hero">
                <div className="wtc-hero-overlay"></div>
                <motion.div className="wtc-hero-content" initial="hidden" animate="visible" variants={reveal}>
                    <span className="wtc-pre-title">Legal Governance</span>
                    <h1 className="wtc-main-title">Terms of <br /><span className="wtc-gold-text">Engagement</span></h1>
                    <p className="wtc-hero-lead">The framework for professional excellence and transparent business conduct.</p>
                </motion.div>
            </section>

            {/* --- TERMS GRID --- */}
            <section className="wtc-grid-section">
                <div className="wtc-container">
                    <div className="wtc-terms-grid">
                        {sections.map((section, idx) => (
                            <motion.div
                                key={idx}
                                className="wtc-section-card"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={reveal}
                            >
                                <div className="wtc-card-header">
                                    <div className="wtc-icon-wrap">{section.icon}</div>
                                    <h2 className="wtc-marcellus">{section.title}</h2>
                                </div>
                                <div className="wtc-points-list">
                                    {section.points.map((p, i) => (
                                        <div key={i} className="wtc-point-item">
                                            <span className="wtc-point-label">{p.label}</span>
                                            <p className="wtc-point-text">{p.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- GOVERNING LAW BANNER --- */}
            <section className="wtc-governance">
                <div className="wtc-container">
                    <motion.div className="wtc-gov-box" whileHover={{ scale: 1.01 }}>
                        <FaGavel className="wtc-gov-icon" />
                        <div className="wtc-gov-text">
                            <h3 className="wtc-marcellus">Regulatory Compliance</h3>
                            <p>These terms are governed by the established laws of the jurisdictions where Jigisha Group operates. By engaging with our subsidiaries, you acknowledge and agree to these standards of conduct.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- FOOTER NOTE --- */}
            <section className="wtc-footer">
                <div className="wtc-container">
                    <p>Last Updated: January 2026 | Document Ref: JG-TOE-001</p>
                </div>
            </section>
        </div>
    );
};

export default Terms;
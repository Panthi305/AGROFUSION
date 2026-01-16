import React from 'react';
import { motion } from 'framer-motion';
import {
    FaUndo, FaTimesCircle, FaClipboardCheck, FaExclamationTriangle,
    FaHandshake, FaGavel, FaCheckDouble, FaHistory
} from 'react-icons/fa';
import './Refund.css';

const Refund = () => {
    const reveal = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    };

    const refundSteps = [
        { title: "Submission", desc: "Submit written request with supporting documents.", icon: <FaClipboardCheck /> },
        { title: "Verification", desc: "Technical/Commercial team audit within 7 working days.", icon: <FaCheckDouble /> },
        { title: "Approval", desc: "Formal validation from the competent group authority.", icon: <FaHandshake /> },
        { title: "Processing", desc: "Remittance within 15 working days post-approval.", icon: <FaHistory /> }
    ];

    return (
        <div className="wrp-refund-page">
            {/* --- HERO SECTION --- */}
            <section className="wrp-hero">
                <div className="wrp-hero-overlay"></div>
                <motion.div className="wrp-hero-content" initial="hidden" animate="visible" variants={reveal}>
                    <span className="wrp-pre-title">Commercial Standards</span>
                    <h1 className="wrp-main-title">Refund & <br /><span className="wrp-gold-text">Cancellation Policy</span></h1>
                    <p className="wrp-hero-lead">Ensuring transparency and fairness in every commercial transaction across the conglomerate.</p>
                </motion.div>
            </section>

            {/* --- REFUND POLICIES (PRODUCTS & SERVICES) --- */}
            <section className="wrp-policy-grid">
                <div className="wrp-container">
                    <div className="wrp-dual-layout">
                        {/* Product Refunds */}
                        <motion.div className="wrp-policy-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
                            <div className="wrp-card-head">
                                <FaUndo className="wrp-card-icon" />
                                <h2 className="wrp-marcellus">Product Refunds</h2>
                            </div>
                            <ul className="wrp-list">
                                <li><strong>Defective Products:</strong> Full refund or replacement for manufacturing defects (15-day window).</li>
                                <li><strong>Wrong Delivery:</strong> Immediate resolution for incorrect product shipments.</li>
                                <li><strong>Cancellations:</strong> 100% refund for orders cancelled within 24 hours.</li>
                            </ul>
                        </motion.div>

                        {/* Service Refunds */}
                        <motion.div className="wrp-policy-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
                            <div className="wrp-card-head">
                                <FaTimesCircle className="wrp-card-icon" />
                                <h2 className="wrp-marcellus">Service Refunds</h2>
                            </div>
                            <ul className="wrp-list">
                                <li><strong>Project Cancellation:</strong> Advance refund minus actual costs incurred.</li>
                                <li><strong>Service Deficiency:</strong> Partial refund for non-alignment with specifications.</li>
                                <li><strong>Delay Penalties:</strong> Compensation for significant delays beyond control.</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- REFUND PROCESS FLOW --- */}
            <section className="wrp-process">
                <div className="wrp-container">
                    <div className="wrp-section-header">
                        <h2 className="wrp-marcellus">The Refund Process</h2>
                        <div className="wrp-gold-divider"></div>
                    </div>
                    <div className="wrp-process-row">
                        {refundSteps.map((step, idx) => (
                            <div key={idx} className="wrp-step-item">
                                <div className="wrp-step-icon">{step.icon}</div>
                                <h5>{step.title}</h5>
                                <p>{step.desc}</p>
                                {idx < 3 && <div className="wrp-step-connector"></div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- NON-REFUNDABLE ITEMS & DISPUTES --- */}
            <section className="wrp-legal-details">
                <div className="wrp-container">
                    <div className="wrp-details-split">
                        {/* Non-Refundable */}
                        <motion.div className="wrp-warning-box" whileHover={{ scale: 1.02 }}>
                            <div className="wrp-warning-header">
                                <FaExclamationTriangle />
                                <h3 className="wrp-marcellus">Non-Refundable Items</h3>
                            </div>
                            <div className="wrp-warning-grid">
                                <span>Custom Manufactured Products</span>
                                <span>Services Rendered</span>
                                <span>Consumables</span>
                                <span>Software Licenses</span>
                            </div>
                        </motion.div>

                        {/* Dispute Resolution */}
                        <motion.div className="wrp-dispute-box" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
                            <h3 className="wrp-marcellus">Dispute Resolution</h3>
                            <p>We prefer amicable settlements through senior management escalation. Unresolved commercial disputes are subject to arbitration as per the <strong>Indian Arbitration Act</strong>.</p>
                            <div className="wrp-gavel-icon"><FaGavel /></div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Refund;
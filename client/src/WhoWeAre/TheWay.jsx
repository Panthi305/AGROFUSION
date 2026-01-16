import { motion } from 'framer-motion';
import {
    FaSync, FaSearch, FaLightbulb, FaTools,
    FaCogs, FaProjectDiagram, FaShieldAlt, FaUserCheck,
} from 'react-icons/fa';
import OptimizedImage from '../components/OptimizedImage';
import './TheWay.css';

const TheWay = () => {
    const reveal = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    };

    const steps = [
        { icon: <FaSearch />, title: "Understanding", desc: "Deep dive into client requirements and mission-critical challenges." },
        { icon: <FaCogs />, title: "Solutioning", desc: "Customized approach leveraging 21-subsidiary group capabilities." },
        { icon: <FaProjectDiagram />, title: "Execution", desc: "Professional project management with real-time regular updates." },
        { icon: <FaUserCheck />, title: "Support", desc: "Comprehensive after-sales service and long-term maintenance." }
    ];

    return (
        <div className="wwo-way-page">
            {/* --- HERO SECTION --- */}
            <section className="wwo-hero">
                <div className="wwo-hero-overlay"></div>
                <motion.div className="wwo-hero-content" initial="hidden" animate="visible" variants={reveal}>
                    <span className="wwo-pre-title">Operational Excellence</span>
                    <h1 className="wwo-main-title">The Jigisha Way of <br /><span className="wwo-gold-text">Working</span></h1>
                    <p className="wwo-hero-lead">A systematic, innovation-driven methodology that ensures reliability from concept to commissioning.</p>
                </motion.div>
            </section>

            {/* --- INTEGRATED DELIVERY SECTION --- */}
            <section className="wwo-integrated">
                <div className="wwo-container">
                    <div className="wwo-split-box">
                        <motion.div className="wwo-split-text" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
                            <h2 className="wwo-marcellus">Integrated Project Delivery</h2>
                            <div className="wwo-gold-line"></div>
                            <ul className="wwo-check-list">
                                <li><strong>Single-Window Interface:</strong> One point of contact for complex, multi-disciplinary projects.</li>
                                <li><strong>Cross-Subsidiary Collaboration:</strong> Seamless synergy across the group for comprehensive solutions.</li>
                                <li><strong>End-to-End Responsibility:</strong> Ownership from the initial concept through to final commissioning.</li>
                            </ul>
                        </motion.div>
                        <div className="wwo-split-visual">
                            <OptimizedImage src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070" alt="Integrated Delivery" width={1200} quality={85} />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CLIENT ENGAGEMENT MODEL (STEP FLOW) --- */}
            <section className="wwo-engagement">
                <div className="wwo-container">
                    <h2 className="wwo-marcellus wwo-center">Client Engagement Model</h2>
                    <div className="wwo-step-row">
                        {steps.map((step, idx) => (
                            <motion.div key={idx} className="wwo-step-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
                                <div className="wwo-step-icon-wrap">
                                    {step.icon}
                                    <span className="wwo-step-num">{idx + 1}</span>
                                </div>
                                <h4>{step.title}</h4>
                                <p>{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- QUALITY & INNOVATION GRID --- */}
            <section className="wwo-dual-grid">
                <div className="wwo-container">
                    <div className="wwo-grid-layout">
                        {/* QA Framework */}
                        <motion.div className="wwo-grid-box" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
                            <FaShieldAlt className="wwo-box-icon" />
                            <h3 className="wwo-marcellus">Quality Assurance Framework</h3>
                            <p>Our commitment to quality is built on ISO 9001 certified management systems and multi-stage testing protocols.</p>
                            <span className="wwo-tag">Feedback-Driven Analysis</span>
                        </motion.div>

                        {/* Innovation Process */}
                        <motion.div className="wwo-grid-box wwo-gold-bg" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
                            <FaLightbulb className="wwo-box-icon white" />
                            <h3 className="wwo-marcellus white">Innovation Process</h3>
                            <p className="white">Collaborative R&D and rapid scale-up of proven technologies across our global operations.</p>
                            <div className="wwo-mini-list">
                                <span>Technology Scanning</span>
                                <span>Pilot Testing</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- CLOSING STAT STRIP --- */}
            <section className="wwo-closing">
                <div className="wwo-container">
                    <p><strong>Proven Innovation:</strong> Every project is an opportunity to scale proven technologies across the group.</p>
                </div>
            </section>
        </div>
    );
};

export default TheWay;
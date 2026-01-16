import { motion } from 'framer-motion';
import {
    FaUserTie, FaCheckDouble, FaLightbulb, FaGavel,
    FaSeedling, FaGlobe, FaHandshake, FaChartBar,
    FaPuzzlePiece, FaMicrochip
} from 'react-icons/fa';
import OptimizedImage from '../components/OptimizedImage';
import './Philosophy.css';

const Philosophy = () => {
    const reveal = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    };

    const principles = [
        { icon: <FaUserTie />, title: "Client First", desc: "Understanding and exceeding client expectations through customized solutions and exceptional service." },
        { icon: <FaCheckDouble />, title: "Quality Obsession", desc: "Maintaining uncompromising standards of quality across all operations and deliverables." },
        { icon: <FaLightbulb />, title: "Innovation Culture", desc: "Encouraging creative thinking and technological adoption to stay ahead of industry trends." },
        { icon: <FaGavel />, title: "Ethical Foundation", desc: "Conducting business with integrity, fairness, and respect for all stakeholders." },
        { icon: <FaSeedling />, title: "Sustainable Development", desc: "Creating long-term value while minimizing environmental impact and contributing to social welfare." },
        { icon: <FaGlobe />, title: "Global Mindset", desc: "Thinking globally while acting locally, adapting to diverse markets and cultures." }
    ];

    const approaches = [
        { icon: <FaHandshake />, title: "Strategic Partnerships", sub: "Over transactional relationships" },
        { icon: <FaChartBar />, title: "Long-term Value", sub: "Over short-term gains" },
        { icon: <FaPuzzlePiece />, title: "Integrated Solutions", sub: "Over fragmented services" },
        { icon: <FaMicrochip />, title: "Tech Enablement", sub: "Across all operations" }
    ];

    return (
        <div className="wbp-philosophy-page">
            {/* --- HERO SECTION --- */}
            <section className="wbp-hero">
                <div className="wbp-hero-bg">
                    <OptimizedImage src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069" alt="Philosophy Hero" width={1920} quality={85} eager />
                    <div className="wbp-hero-overlay"></div>
                </div>
                <motion.div className="wbp-hero-content" initial="hidden" animate="visible" variants={reveal}>
                    <span className="wbp-pre-title">The Jigisha Way</span>
                    <h1 className="wbp-main-title">Our Business <br /><span className="wbp-gold-text">Philosophy</span></h1>
                    <div className="wbp-gold-line"></div>
                </motion.div>
            </section>

            {/* --- GUIDING PRINCIPLES GRID --- */}
            <section className="wbp-principles">
                <div className="wbp-container">
                    <div className="wbp-section-header">
                        <h2 className="wbp-marcellus">Guiding Principles</h2>
                        <p className="wbp-sub-intro">The core tenets that define our corporate character and operational excellence.</p>
                    </div>
                    <div className="wbp-principles-grid">
                        {principles.map((p, i) => (
                            <motion.div
                                key={i}
                                className="wbp-p-card"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={reveal}
                            >
                                <div className="wbp-card-inner">
                                    <div className="wbp-p-icon">{p.icon}</div>
                                    <h3 className="wbp-marcellus">{p.title}</h3>
                                    <p>{p.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- BUSINESS APPROACH SECTION --- */}
            <section className="wbp-approach">
                <div className="wbp-container">
                    <div className="wbp-approach-box">
                        <div className="wbp-approach-header">
                            <h2 className="wbp-marcellus">Our Business Approach</h2>
                            <p>Moving beyond the ordinary to deliver extraordinary results.</p>
                        </div>
                        <div className="wbp-approach-grid">
                            {approaches.map((a, i) => (
                                <motion.div
                                    key={i}
                                    className="wbp-a-item"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="wbp-a-icon">{a.icon}</div>
                                    <div className="wbp-a-content">
                                        <h4>{a.title}</h4>
                                        <p>{a.sub}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- VISIONARY QUOTE --- */}
            <section className="wbp-closing">
                <div className="wbp-container">
                    <motion.div className="wbp-closing-card" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                        <p>"We don't just build projects; we build the future by aligning our actions with a philosophy that prioritizes ethics, innovation, and people."</p>
                        <div className="wbp-gold-divider"></div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Philosophy;
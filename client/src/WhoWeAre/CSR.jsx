import { motion } from 'framer-motion';
import {
    FaGraduationCap, FaHeartbeat, FaLeaf, FaUsers,
    FaHandsHelping, FaSolarPanel, FaMicroscope, FaWater
} from 'react-icons/fa';
import OptimizedImage from '../components/OptimizedImage';
import './CSR.css';

const CSR = () => {
    const reveal = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    };

    const initiatives = [
        {
            category: "Education & Skill Development",
            icon: <FaGraduationCap />,
            items: [
                "Operating 15 specialized training centers for industrial staff.",
                "Scholarship programs for deserving engineering students.",
                "Digital literacy initiatives across rural India."
            ],
            img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070"
        },
        {
            category: "Healthcare Initiatives",
            icon: <FaHeartbeat />,
            items: [
                "Free medical camps in industrial clusters and remote areas.",
                "Infrastructure support for rural healthcare centers.",
                "Mission-critical COVID-19 relief and vaccination drives."
            ],
            img: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070"
        },
        {
            category: "Environmental Sustainability",
            icon: <FaLeaf />,
            items: [
                "Green energy projects to drastically reduce carbon footprint.",
                "Water conservation in water-stressed industrial regions.",
                "Rigorous e-waste management and recycling protocols."
            ],
            img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070"
        },
        {
            category: "Community Development",
            icon: <FaUsers />,
            items: [
                "Rural electrification via sustainable solar microgrids.",
                "Empowering women through entrepreneurship programs.",
                "Rapid disaster relief and long-term rehabilitation support."
            ],
            img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070"
        }
    ];

    return (
        <div className="wcs-csr-page">
            {/* --- HERO SECTION --- */}
            <section className="wcs-hero">
                <div className="wcs-hero-overlay"></div>
                <motion.div className="wcs-hero-content" initial="hidden" animate="visible" variants={reveal}>
                    <span className="wcs-pre-title">Social Responsibility</span>
                    <h1 className="wcs-main-title">Our Commitment <br />To <span className="wcs-gold-text">Society</span></h1>
                    <p className="wcs-hero-lead">Beyond industrial excellence, we strive to empower communities and protect our planet for a sustainable future.</p>
                </motion.div>
            </section>

            {/* --- INITIATIVES GRID --- */}
            <section className="wcs-initiatives">
                <div className="wcs-container">
                    <div className="wcs-masonry-grid">
                        {initiatives.map((init, idx) => (
                            <motion.div
                                key={idx}
                                className="wcs-init-card"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={reveal}
                            >
                                <div className="wcs-card-img">
                                    <OptimizedImage src={init.img} alt={init.category} width={800} quality={85} />
                                    <div className="wcs-card-icon">{init.icon}</div>
                                </div>
                                <div className="wcs-card-body">
                                    <h3 className="wcs-marcellus">{init.category}</h3>
                                    <ul className="wcs-init-list">
                                        {init.items.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- IMPACT STATS STRIP --- */}
            <section className="wcs-impact">
                <div className="wcs-container">
                    <div className="wcs-impact-box">
                        <div className="wcs-stat-item">
                            <FaSolarPanel className="wcs-stat-icon" />
                            <h4>Solar Microgrids</h4>
                            <p>Rural Electrification</p>
                        </div>
                        <div className="wcs-stat-item">
                            <FaMicroscope className="wcs-stat-icon" />
                            <h4>15+ Centers</h4>
                            <p>Skill Development</p>
                        </div>
                        <div className="wcs-stat-item">
                            <FaWater className="wcs-stat-icon" />
                            <h4>Water Care</h4>
                            <p>Conservation Programs</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CLOSING BANNER --- */}
            <section className="wcs-cta">
                <div className="wcs-container">
                    <motion.div className="wcs-banner-box" whileHover={{ scale: 1.01 }}>
                        <FaHandsHelping className="wcs-banner-icon" />
                        <h2 className="wcs-marcellus">Building a Better Tomorrow</h2>
                        <p>Our CSR initiatives are integrated into our core business strategy, ensuring that growth and social welfare go hand-in-hand.</p>
                        <div className="wcs-gold-accent-line"></div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default CSR;
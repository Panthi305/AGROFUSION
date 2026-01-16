import { motion } from 'framer-motion';
import {
    FaTrain, FaCity, FaLaptopCode, FaIndustry,
    FaLeaf, FaStethoscope, FaTruck, FaShoppingCart,
    FaCoins, FaShieldAlt, FaRecycle, FaUserTie
} from 'react-icons/fa';
import OptimizedImage from '../components/OptimizedImage';
import './Portfolio.css';

const Portfolio = () => {
    const reveal = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    };

    const coreVerticals = [
        {
            id: 1,
            name: "Railways & Metro Systems",
            entity: "Jigisha Railtech",
            icon: <FaTrain />,
            desc: "Manufacturing, supply, and SITC contracts for signaling, OHE, and station infrastructure.",
            img: "https://images.unsplash.com/photo-1532105956626-9569c03602f6?q=80&w=2000"
        },
        {
            id: 2,
            name: "Infrastructure Development",
            entity: "Jigisha Infra",
            icon: <FaCity />,
            desc: "EPC projects for industrial, transportation, smart cities, highways, and logistics hubs.",
            img: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2000"
        },
        {
            id: 3,
            name: "Technology & IT Solutions",
            entity: "Jigisha Infotech",
            icon: <FaLaptopCode />,
            desc: "Software development, IoT, cybersecurity, and cloud-driven digital transformation.",
            img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000"
        },
        {
            id: 4,
            name: "Manufacturing & Engineering",
            entity: "Jigisha Industries",
            icon: <FaIndustry />,
            desc: "Heavy machinery, precision components, power generation, and specialized fabrication.",
            img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2000"
        },
        {
            id: 5,
            name: "Renewable Energy",
            entity: "Jigisha Green",
            icon: <FaLeaf />,
            desc: "Solar, wind, and hybrid energy projects integrated with green infrastructure.",
            img: "https://images.unsplash.com/photo-1509391366360-fe5bb65830bb?q=80&w=2000"
        },
        {
            id: 6,
            name: "Healthcare & Pharma",
            entity: "Jigisha Pharma",
            icon: <FaStethoscope />,
            desc: "Pharmaceutical manufacturing, medical devices, and hospital infrastructure services.",
            img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=2000"
        }
    ];

    const supportBusinesses = [
        { icon: <FaTruck />, name: "Logistics", entity: "Jigisha Logistics" },
        { icon: <FaShoppingCart />, name: "Retails", entity: "Jigisha Retails" },
        { icon: <FaCoins />, name: "Financial Services", entity: "Jigisha Infin" },
        { icon: <FaShieldAlt />, name: "Defense Tech", entity: "Jigisha Defense" },
        { icon: <FaRecycle />, name: "Envirocare", entity: "Jigisha Envirocare" },
        { icon: <FaUserTie />, name: "Consultancy", entity: "Jigisha Consultancy" }
    ];

    return (
        <div className="wbp-portfolio-page">
            {/* --- HERO SECTION --- */}
            <section className="wbp-hero">
                <div className="wbp-hero-overlay"></div>
                <motion.div className="wbp-hero-content" initial="hidden" animate="visible" variants={reveal}>
                    <span className="wbp-pre-title">Multi-Vertical Conglomerate</span>
                    <h1 className="wbp-main-title">Our Business <br /><span className="wbp-gold-text">Portfolio</span></h1>
                    <p className="wbp-hero-lead">Driving global progress through a diversified ecosystem of industrial, technological, and service excellence.</p>
                </motion.div>
            </section>

            {/* --- CORE VERTICALS SECTION --- */}
            <section className="wbp-core">
                <div className="wbp-container">
                    <div className="wbp-section-header">
                        <h2 className="wbp-marcellus">Core Business Verticals</h2>
                        <div className="wbp-gold-divider"></div>
                    </div>
                    <div className="wbp-core-grid">
                        {coreVerticals.map((v) => (
                            <motion.div key={v.id} className="wbp-core-card" whileHover={{ y: -10 }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
                                <div className="wbp-card-img">
                                    <OptimizedImage src={v.img} alt={v.name} width={800} quality={85} />
                                    <div className="wbp-card-overlay"></div>
                                    <div className="wbp-card-icon">{v.icon}</div>
                                </div>
                                <div className="wbp-card-body">
                                    <span className="wbp-entity-name">{v.entity}</span>
                                    <h3>{v.name}</h3>
                                    <p>{v.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SUPPORT BUSINESSES SECTION --- */}
            <section className="wbp-support">
                <div className="wbp-container">
                    <div className="wbp-support-box">
                        <h2 className="wbp-marcellus">Support & Specialized Services</h2>
                        <div className="wbp-support-grid">
                            {supportBusinesses.map((s, idx) => (
                                <div key={idx} className="wbp-support-item">
                                    <div className="wbp-s-icon">{s.icon}</div>
                                    <div className="wbp-s-info">
                                        <h4>{s.name}</h4>
                                        <span>{s.entity}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* --- ECOSYSTEM BANNER --- */}
            <section className="wbp-footer-banner">
                <div className="wbp-container">
                    <div className="wbp-banner-card">
                        <h3 className="wbp-marcellus">A Unified Ecosystem</h3>
                        <p>Through our 21 specialized subsidiaries, we create synergies that deliver end-to-end solutions from concept to completion.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
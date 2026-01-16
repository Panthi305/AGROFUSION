import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    FaGlobe, FaShieldAlt, FaSeedling, FaLeaf, FaCity, FaIndustry,
    FaCar, FaTrain, FaShoppingCart, FaLaptopCode, FaNewspaper,
    FaStethoscope, FaExternalLinkAlt
} from 'react-icons/fa';
import { preloadImages } from '../utils/imageOptimization';
import './DigitalPresence.css';

// Importing the header logos
import logoGoGlobal from './../assets/all_company/GO GLOBAL.png';
import logoJGC from './../assets/all_company/JGC.png';

const DigitalPresence = () => {
    // Preload header logos immediately
    useEffect(() => {
        preloadImages([logoGoGlobal, logoJGC]);
    }, []);

    const reveal = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    };

    const categories = [
        {
            id: 1,
            title: "Corporate & Strategic Division",
            icon: <FaGlobe />,
            purpose: "Global operations hubs, corporate governance, and group-wide portfolio management.",
            companies: [
                {
                    name: "JIGISHA INTERNATIONAL PRIVATE LIMITED",
                    links: [
                        { url: "https://www.jigisha.international", type: "Informative" },
                        { url: "https://www.jigisha.co", type: "Informative" },
                        { url: "https://www.jigisha.co.in", type: "Informative" },
                        { url: "https://www.jigisha.store", type: "Vendor Portal" }
                    ]
                },
                {
                    name: "JIGISHA GROUP OF COMPANIES",
                    links: [{ url: "https://www.jigisha.in", type: "Informative" }]
                }
            ]
        },
        {
            id: 2,
            title: "Retail, E-Commerce Division",
            icon: <FaShoppingCart />,
            purpose: "Multichannel B2B/B2C retail platforms and global e-commerce marketplaces.",
            companies: [
                {
                    name: "JIGISHA RETAILS PRIVATE LIMITED",
                    links: [
                        { url: "https://www.jigisha.shop", type: "E-commerce" },
                        { url: "https://www.jigisha.world", type: "E-commerce" },
                        { url: "https://www.jigisha.global", type: "E-commerce" },
                        { url: "https://www.jigisharetail.com", type: "Informative" },
                        { url: "https://www.jigisharetail.in", type: "Informative" }
                    ]
                }
            ]
        },
        {
            id: 4,
            title: "IT, Tech & Finance",
            icon: <FaLaptopCode />,
            purpose: "Software development, IT services, and Financial management.",
            companies: [
                {
                    name: "JIGISHA INFOTECH PVT LTD",
                    links: [{ url: "https://www.jigishainfotech.com", type: "Informative" }]
                },
                {
                    name: "JIGISHA TECHNOLOGIES PRIVATE LIMITED",
                    links: [{ url: "https://www.jigisha.technology", type: "Informative" }]
                },
                {
                    name: "JIGISHA INFIN PRIVATE LIMITED",
                    links: [{ url: "https://www.jigishainfin.com", type: "Informative" }]
                },
                {
                    name: "JIGISHA MEDIA VISION / INFOTECH",
                    links: [{ url: "https://www.jigisha.digital", type: "E-commerce" }]
                }
            ]
        },
        {
            id: 3,
            title: "Railways, Track & Metro Railtech",
            icon: <FaTrain />,
            purpose: "Specialized railway products, metro infrastructure, and international rail tech.",
            companies: [
                {
                    name: "JIGISHA RAILTECH PRIVATE LIMITED",
                    links: [
                        { url: "https://www.jigisharailtech.online", type: "E-commerce" },
                        { url: "https://www.jigisharailtech.com", type: "Informative" },
                        { url: "https://www.jigisharailtech.in", type: "Informative" }
                    ]
                }
            ]
        },

        {
            id: 5,
            title: "Energy & Envirocare Solutions",
            icon: <FaLeaf />,
            purpose: "Renewable energy, Solar, Wind, and Envirocare solutions.",
            companies: [
                {
                    name: "JIGISHA GREEN PVT LTD",
                    links: [{ url: "https://www.jigisha.green", type: "E-commerce" }]
                },
                {
                    name: "JIGISHA ENVIROCARE PRIVATE LIMITED",
                    links: [{ url: "https://www.jigishaenviro.com", type: "Informative" }]
                }
            ]
        },
        {
            id: 6,
            title: "Infrastructure & Engineering",
            icon: <FaCity />,
            purpose: "Urban infrastructure, industrial engineering, and large-scale projects.",
            companies: [
                {
                    name: "JIGISHA INFRA PRIVATE LIMITED",
                    links: [{ url: "https://www.jigisha.site", type: "E-commerce" }]
                },
                {
                    name: "JIGISHA ENGINEERING PRIVATE LIMITED",
                    links: [{ url: "https://www.jigisha.engineering", type: "Informative" }]
                }
            ]
        },
        {
            id: 7,
            title: "Industrial Products & Services",
            icon: <FaIndustry />,
            purpose: "Machinery, industrial e-commerce and spares, plants, and raw materials sourcing.",
            companies: [
                {
                    name: "JIGISHA INDUSTRIES PRIVATE LIMITED",
                    links: [
                        { url: "https://www.jigisha.online", type: "E-commerce" },
                        { url: "https://www.jigisha.industries", type: "E-commerce" }
                    ]
                },
                {
                    name: "JIGISHA INDUSTRIAL SERVICES PRIVATE LIMITED",
                    links: [{ url: "https://www.jigisha.services", type: "E-commerce" }]
                }
            ]
        },
        {
            id: 8,
            title: "Electrical & Automobile",
            icon: <FaCar />,
            purpose: "Supply chain for electrical components and automobile spare parts.",
            companies: [
                {
                    name: "JIGISHA ELECTRICALS & ELECTRONICS PRIVATE LIMITED",
                    links: [
                        { url: "https://www.jigishaelectricals.com", type: "E-commerce" },
                        { url: "https://www.jigishaelectronics.com", type: "E-commerce" }
                    ]
                },
                {
                    name: "JIGISHA AUTOMOBILES PRIVATE LIMITED",
                    links: [{ url: "https://www.jigishaautomobiles.com", type: "E-commerce" }]
                }
            ]
        },
        {
            id: 11,
            title: "Media & News Vision",
            icon: <FaNewspaper />,
            purpose: "Global news portals, digital marketing, and advertising services.",
            companies: [
                {
                    name: "JIGISHA MEDIA VISION PVT LTD",
                    links: [
                        { url: "https://www.innews.org", type: "News Portal" },
                        { url: "https://www.innews.world", type: "News Portal" },
                        { url: "https://www.jigisha.media", type: "Informative" }
                    ]
                }
            ]
        },
        {
            id: 10,
            title: "Agriculture & Agro Fusion",
            icon: <FaSeedling />,
            purpose: "Bio-CNG, modern agriculture, and waste management ecosystems.",
            companies: [
                {
                    name: "JIGISHA AGRO INDUSTRIES PRIVATE LIMITED",
                    links: [
                        { url: "https://www.agrofusion.in", type: "E-commerce" },
                        { url: "https://www.jigishaagro.com", type: "E-commerce" }
                    ]
                }
            ]
        },

        {
            id: 9,
            title: "Defense & Strategic Tech",
            icon: <FaShieldAlt />,
            purpose: "Advanced defense products and tactical security solutions.",
            companies: [
                {
                    name: "JIGISHA DEFENSE TECHNOLOGIES PRIVATE LIMITED",
                    links: [{ url: "https://www.jigishadefense.com", type: "Informative" }]
                }
            ]
        },
        {
            id: 12,
            title: "Healthcare & Specialized",
            icon: <FaStethoscope />,
            purpose: "Pharmaceutical manufacturing, medical tech, and corporate entities.",
            companies: [
                {
                    name: "JIGISHA PHARMA & HEALTHCARE PRIVATE LIMITED",
                    links: [{ url: "https://www.jigisha.life", type: "Informative" }]
                },
                // {
                //     name: "JIGISHA ENTERPRISES LTD",
                //     links: [{ url: "https://www.jigisha.ltd", type: "Informative" }]
                // }
            ]
        }
    ];

    return (
        <div className="wdp-presence-page">
            <section className="wdp-intro">
                <div className="wdp-container">
                    <div className="wdp-header-flex">
                        <motion.img initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} src={logoGoGlobal} alt="Go Global" className="wdp-header-logo" />
                        <motion.div initial="hidden" animate="visible" variants={reveal} className="wdp-header-center">
                            <h1 className="wdp-title-lg">Group <span className="wdp-gold">Websites</span></h1>
                        </motion.div>
                        <motion.img initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} src={logoJGC} alt="JGC" className="wdp-header-logo" />
                    </div>
                    <p className="wdp-lead">
                        An authoritative directory of the 34 official platforms serving the Jigisha Group’s mission-critical business verticals.
                    </p>
                </div>
            </section>

            <section className="wdp-grid-section">
                <div className="wdp-container">
                    <div className="wdp-master-grid">
                        {categories.map((cat) => (
                            <motion.div key={cat.id} className="wdp-cat-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
                                <div className="wdp-cat-top">
                                    <div className="wdp-cat-icon">{cat.icon}</div>
                                    <h3 className="wdp-marcellus">{cat.title}</h3>
                                </div>
                                <p className="wdp-purpose-text">{cat.purpose}</p>

                                {cat.companies.map((co, idx) => (
                                    <div key={idx} className="wdp-company-block" style={{ marginBottom: '20px' }}>
                                        <h4 style={{
                                            fontSize: '0.75rem',
                                            color: 'var(--gold)',
                                            fontWeight: 'bold',
                                            textTransform: 'uppercase',
                                            borderLeft: '2px solid var(--gold)',
                                            paddingLeft: '8px',
                                            marginBottom: '10px'
                                        }}>
                                            {co.name}
                                        </h4>
                                        <div className="wdp-links-container">
                                            {co.links.map((link, i) => (
                                                <div key={i} className="wdp-link-item">
                                                    <div className="wdp-link-left" style={{ width: '100%' }}>
                                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                                                            <span className="wdp-site-name" style={{ fontSize: '0.8rem', opacity: 0.7 }}>
                                                                {link.url.replace('https://www.', '')}
                                                            </span>
                                                            <span style={{
                                                                fontSize: '9px',
                                                                padding: '1px 6px',
                                                                background: link.type === 'E-commerce' ? '#c5a059' : '#f0f0f0',
                                                                color: link.type === 'E-commerce' ? '#fff' : '#666',
                                                                borderRadius: '4px',
                                                                fontWeight: 'bold'
                                                            }}>
                                                                {link.type}
                                                            </span>
                                                        </div>
                                                        <a href={link.url} target="_blank" rel="noreferrer" className="wdp-site-url">
                                                            {link.url} <FaExternalLinkAlt size={10} />
                                                        </a>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DigitalPresence;
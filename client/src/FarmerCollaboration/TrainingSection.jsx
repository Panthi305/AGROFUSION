import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TabletSmartphone, GraduationCap, Headphones, ArrowUpRight } from 'lucide-react';
import './TrainingSection.css';
import ts from "./../assets/Farmers/farmers.png"
const TrainingSection = () => {
    const features = [
        {
            title: "DIGITAL LITERACY",
            description: "Smartphone training, app workshops, and online safety.",
            icon: <TabletSmartphone size={22} />
        },
        {
            title: "TECH ADOPTION",
            description: "Demonstration programs and community learning projects.",
            icon: <GraduationCap size={22} />
        },
        {
            title: "SUPPORT SYSTEMS",
            description: "24/7 Helpline services and peer support networks.",
            icon: <Headphones size={22} />
        }
    ];

    return (
        <section className="premium-training">
            {/* Dynamic Background Elements */}
            <div className="bg-blur-dot color-1"></div>
            <div className="bg-blur-dot color-2"></div>

            <div className="wrapper">
                {/* Top Attraction: The Badge */}


                {/* Heading Section */}
                <header className="hero-header">
                    <motion.h2
                        className="main-title"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Training & <span className="outline-txt">Support</span>
                    </motion.h2>
                </header>

                <div className="main-visual-grid">
                    {/* Left: Professional Feature Cards */}
                    <div className="cards-column">
                        {features.map((item, i) => (
                            <motion.div
                                key={i}
                                className="premium-card"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="card-icon">{item.icon}</div>
                                <div className="card-info">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                                {/* <ArrowUpRight className="card-arrow" size={18} /> */}
                            </motion.div>
                        ))}
                    </div>

                    {/* Right: Horizontal Cinematic Image */}
                    <motion.div
                        className="image-showcase"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="cinematic-frame">
                            <img
                                src={ts}
                                alt="Farmer Tech"
                            />
                            <div className="image-overlay"></div>

                            {/* Floating Success Indicator */}
                            <motion.div
                                className="floating-stat-box"
                                // animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 5, repeat: Infinity }}
                            >
                                <div className="stat-circle">
                                    <svg viewBox="0 0 36 36"><path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#2d5a27" strokeWidth="3" strokeDasharray="85, 100" /></svg>
                                    <span>85%</span>
                                </div>
                                <p>Adoption Rate</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TrainingSection;
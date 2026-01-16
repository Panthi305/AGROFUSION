import React from "react";
import { motion } from "framer-motion";
import brandLogo from "../assets/Farmers/flogo.png";
import "./JaiKissanSection.css";

const JaiKissanSection = () => {
    return (
        <section className="jsk-section">
            <div className="jsk-container">

                {/* BRAND IDENTITY */}
                <motion.div
                    className="jsk-branding"
                    initial={{ opacity: 0, y: -25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <img
                        src={brandLogo}
                        alt="Jigisha Agro Industries"
                        className="jsk-top-logo"
                    />
                    <span className="jsk-brand-caption">
                        The Foundation of Agro Fusion
                    </span>
                </motion.div>

                {/* CONTENT GRID */}
                <div className="jsk-grid">

                    {/* LEFT */}
                    <motion.div
                        className="jsk-text-block"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="jsk-title">
                            The Roots of <span>Our Innovation</span>
                        </h2>

                        <p className="jsk-para">
                            Long before the technology-driven vision of <strong>Agro Fusion</strong>,
                            there was the deep, ground-level expertise of
                            <strong> Jigisha Agro Industries (JAI)</strong>.
                            Built through decades of field experience, JAI has stood alongside
                            farmers, delivering reliable agri-inputs and sustainable farming
                            practices.
                        </p>
                    </motion.div>

                    {/* RIGHT */}
                    <motion.div
                        className="jsk-text-block"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.25 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="jsk-subtitle">Carrying the Jai Kissan Spirit Forward</h3>

                        <p className="jsk-para">
                            Agro Fusion builds upon this trusted foundation. By combining JAI’s
                            agricultural legacy with modern supply chains, technology platforms,
                            and global market access, we ensure that the strength of our roots
                            continues to empower the farmers of tomorrow.
                        </p>

                        <div className="jsk-highlight-box">
                            Empowering the hands that feed the nation
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default JaiKissanSection;

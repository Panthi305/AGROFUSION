import React from "react";
import { motion } from "framer-motion";
import "./AboutHero.css";
// Importing the logo from your local path
import agroLogo from "./../assets/all_company/AGRO.png";
import abouthero from "./../assets/About/abouthero.png";

const AboutHero = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <section className="af-about-hero">
      {/* Background stays specific to this section */}
      <div className="af-about-hero__bg"></div>
      <div className="af-about-hero__overlay"></div>

      <motion.div
        className="af-about-hero__content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo Integration */}
        <motion.div variants={itemVariants} className="af-hero-logo-wrapper">
          <img src={agroLogo} alt="Agro Fusion Logo" className="af-hero-logo" />
        </motion.div>

        <motion.span className="af-subtitle" variants={itemVariants}>
          The Next Evolution of Jigisha Agro
        </motion.span>

        <motion.h1 variants={itemVariants}>
          Agro <span className="text-highlight">Fusion</span>
        </motion.h1>

        {/* Decorative Divider */}

        <motion.p variants={itemVariants}>
          Born from the legacy of <span className="jggold">Jigisha Agro</span>, <strong>Agro Fusion</strong> represents our expanded vision.
          We are bridging the gap between traditional farming wisdom and modern global scale
          to create a sustainable future for agriculture.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default AboutHero;
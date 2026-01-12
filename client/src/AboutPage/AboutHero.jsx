import React from "react";
import { motion } from "framer-motion";
import "./AboutHero.css";

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
      {/* Background layer with Ken Burns effect via CSS */}
      <div className="af-about-hero__bg"></div>

      {/* Overlay layer */}
      <div className="af-about-hero__overlay"></div>

      {/* Text layer using Framer Motion */}
      <motion.div
        className="af-about-hero__content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span className="af-subtitle" variants={itemVariants}>
          A Jigisha Group Initiative
        </motion.span>

        <motion.h1 variants={itemVariants}>
          About Agro Fusion
        </motion.h1>


        <motion.p variants={itemVariants}>
          Redefining Agriculture Through Integration, Innovation, and Global Impact.
          We connect the roots of farming with the height of technology.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default AboutHero;
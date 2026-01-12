import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./JoinMission.css";

const JoinMission = () => {
  return (
    <section className="af-join-mission">
      <motion.div
        className="af-join-mission__inner"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="af-join-mission__container">
          <motion.div
            className="af-join-mission__content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="af-join-mission__title">
              Be Part of the <span>Change</span>
            </h2>
            <p className="af-join-mission__text">
              Join our ecosystem of farmers, investors, and tech enthusiasts building
              a sustainable, productive, and profitable agricultural future.
            </p>
          </motion.div>

          <motion.div
            className="af-join-mission__cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link to="/contact" className="af-btn-premium">
              <span>Contact Our Team</span>
              <div className="af-btn-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Decorative background elements to use width */}
        <div className="af-bg-circle circle-1"></div>
        <div className="af-bg-circle circle-2"></div>
      </motion.div>
    </section>
  );
};

export default JoinMission;
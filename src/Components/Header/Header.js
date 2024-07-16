import React from "react";
import { motion } from "framer-motion";
import header1 from "../../assets/truck1.png";
import "./Header.css";

const Header = ({ topRef }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={topRef} className="header-container">
      <div className="header-grid">
        <motion.div
          className="header-left"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 className="header-title" variants={itemVariants}>
            WELCOME TO <span className="header-subtitle">Trinity</span> Junk
            Removal Inc
          </motion.h1>
          <motion.p className="header-text" variants={itemVariants}>
            Clearing Clutter, Creating Space, Transforming Environments
          </motion.p>
          <motion.p className="header-text-p" variants={itemVariants}>
            We are the best junk removal company in Riverview, FL. Our best junk
            removers are transforming spaces with professional cleaning and junk
            removal, property cleanup, furniture and appliance removal, yard
            debris cleanup etc.
          </motion.p>
          <motion.div className="header-button" variants={itemVariants}>
            <button className="pushable">
              <span className="front">Explore More</span>
            </button>
          </motion.div>
        </motion.div>
        <div className="header-right">
          <div className="header-section">
            {/* <h2 className="header-section-title">Modern Design</h2> */}
          </div>
          <img className="header-image" src={header1} alt="header-phone" />
        </div>
      </div>
    </div>
  );
};

export default Header;

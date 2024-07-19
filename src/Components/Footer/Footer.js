import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FooterData1, FooterData2, FooterData3 } from '../../DataForPage/dummyData';
import logo from '../../assets/logo1.png';
// import googlePlay from '../../assets/google-play.svg';
// import appleStore from '../../assets/apple-store.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons'; // Ensure this is the correct truck icon
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  const controls = useAnimation();
  const footerRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, [controls]);

  return (
    <motion.div
      ref={footerRef}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="footer-container">
        <div className="footer-logo-container">
          <motion.div variants={itemVariants}>
            <img className="footer-logo" src={logo} alt="logo" />
          </motion.div>
          {/* <motion.div className="footer-store" variants={itemVariants}>
            <img src={appleStore} alt="apple-store" />
          </motion.div>
          <motion.div className="footer-store" variants={itemVariants}>
            <img src={googlePlay} alt="google-play" />
          </motion.div> */}
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Features</h3>
          {FooterData1.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <p className="footer-item">{item.text}</p>
            </motion.div>
          ))}
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Features</h3>
          {FooterData2.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <p className="footer-item">{item.text}</p>
            </motion.div>
          ))}
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Features</h3>
          {FooterData3.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <p className="footer-item">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="footer-divider-container">
        <hr className="footer-divider" />
        <motion.div
          className="moving-truck"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        >
          <FontAwesomeIcon icon={faTruck} />
        </motion.div>
      </div>
      <div className="footer-bottom">
        <div>
          <p className="footer-bottom-text">Trinity Junk Removal</p>
        </div>
        <div>
          <p className="footer-bottom-subtext">
            Copyright {year} page by Rank Orbit
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from "../../assets/logo.png";
import './Navbar.css';

const Navbar = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPhoneShaking, setIsPhoneShaking] = useState(false);
  const [isEmailHovered, setIsEmailHovered] = useState(false);

  const handleMouseEnterPhone = () => {
    setIsPhoneShaking(true);
  };

  const handleMouseLeavePhone = () => {
    setIsPhoneShaking(false);
  };

  const handleMouseEnterEmail = () => {
    setIsEmailHovered(true);
  };

  const handleMouseLeaveEmail = () => {
    setIsEmailHovered(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const socialIconVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const contactInfoVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  useEffect(() => {
    setSelectedIndex(null); // Ensure no underline is shown on load
  }, []);

  return (
    <div>
      <div className="navbar-top">
        <motion.div
          className="contact-info"
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4, duration: 1, type: 'spring', stiffness: 50 }}
          variants={contactInfoVariants}
        >
          <span
            onMouseEnter={handleMouseEnterEmail}
            onMouseLeave={handleMouseLeaveEmail}
          >
            <motion.div
              whileHover={{ scale: 1.2, opacity: 0.8 }}
              transition={{ type: 'spring', stiffness: 300 }}
              style={{ cursor: 'pointer' }}
            >
              <FaEnvelope />
            </motion.div>
            info@trinityjunkremoval.com
          </span>
          <span
            onMouseEnter={handleMouseEnterPhone}
            onMouseLeave={handleMouseLeavePhone}
          >
            <motion.div
              animate={{ rotate: isPhoneShaking ? [-5, 5, -5, 0] : 0 }}
              transition={{ duration: 0.3 }}
              style={{ cursor: 'pointer' }}
            >
              <FaPhone />
            </motion.div>
            (123) 456-7890
          </span>
        </motion.div>
        <motion.div
          className="social-icons"
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4, duration: 1, type: 'spring', stiffness: 50 }}
          variants={socialIconVariants}
        >
          <a href="https://facebook.com">
            <motion.div whileHover={{ scale: 1.5 }} transition={{ type: 'spring', stiffness: 300 }}>
              <FaFacebook />
            </motion.div>
          </a>
          <a href="https://twitter.com">
            <motion.div whileHover={{ scale: 1.5 }} transition={{ type: 'spring', stiffness: 300 }}>
              <FaTwitter />
            </motion.div>
          </a>
          <a href="https://instagram.com">
            <motion.div whileHover={{ scale: 1.5 }} transition={{ type: 'spring', stiffness: 300 }}>
              <FaInstagram />
            </motion.div>
          </a>
        </motion.div>
      </div>
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="/"><img alt='logo' src={logo} className="logo-image" /></a>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <GiHamburgerMenu />
        </div>
        <div className={`navbar-links-container ${isMenuOpen ? 'open' : ''}`}>
          <ul className="navbar-links" onMouseLeave={() => setSelectedIndex(null)}>
            {['Home', 'Services', 'About', 'Contact'].map((text, index) => (
              <li key={index}>
                <a
                  href={`#${text.toLowerCase()}`}
                  onMouseEnter={() => setSelectedIndex(index)}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {text}
                </a>
                {selectedIndex === index && (
                  <motion.div
                    layoutId="underline"
                    className="underline"
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
        <button className="contact-button">Call Now</button>
      </nav>
    </div>
  );
};

export default Navbar;

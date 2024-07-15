import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
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

  return (
    <div>
      <div className="navbar-top">
        <div className="contact-info">
          <span
            onMouseEnter={handleMouseEnterEmail}
            onMouseLeave={handleMouseLeaveEmail}
          >
            <motion.div
              whileHover={{ scale: 1.2, opacity: 0.8 }}
              transition={{ type: 'spring', stiffness: 300 }}
              style={{ cursor: 'pointer' }} // <-- Added cursor pointer style
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
              style={{ cursor: 'pointer' }} // <-- Added cursor pointer style
            >
              <FaPhone />
            </motion.div>
            (123) 456-7890
          </span>
        </div>
        <div className="social-icons">
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
        </div>
      </div>
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="/">Trinity Junk Removal</a>
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
        <button className="contact-button">Get a Quote</button>
      </nav>
    </div>
  );
};

export default Navbar;

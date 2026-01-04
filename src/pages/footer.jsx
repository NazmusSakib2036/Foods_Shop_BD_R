import React, { useState, useEffect } from 'react';
import '../styles/footer.css';
import logoImage from '../images/foodsshopbd.png';

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="footer">
        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="footer-container">
            {/* Left Section - Company Info */}
            <div className="footer-section company-info">
              <div className="footer-logo">
                <img src={logoImage} alt="Foods Shop BD" />
              </div>
              <h3 className="company-title">Foods Shop BD: Your Trusted Source for Safe & Delicious Pet Food</h3>
              <p className="company-description">
                Foods Shop BD is a leading pet food provider committed to delivering safe, healthy, and organic food products across Bangladesh.
                </p>
            </div>

            {/* Middle Section - Company Links */}
            <div className="footer-section">
              <h4 className="footer-heading">COMPANY</h4>
              <ul className="footer-links">
                <li><a href="#about">About Us</a></li>
                <li><a href="#return">রিটার্ন পলিসি</a></li>
                <li><a href="#refund">রিফান্ড পলিসি</a></li>
              </ul>
            </div>

            {/* Quick Help Section */}
            <div className="footer-section">
              <h4 className="footer-heading">QUICK HELP</h4>
              <ul className="footer-links">
                <li><a href="#customer-service">গ্রাহক সেবা</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            {/* Right Section - DBID */}
            <div className="footer-section dbid-section">
              <h4 className="dbid-text">DBID ID : 437361334</h4>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-container">
            {/* Facebook Icon */}
            <div className="social-icon">
              <a href="#facebook" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <div className="copyright">
              © Foods Shop BD 2025
            </div>

            {/* Chat Button - Empty div for spacing */}
            <div></div>
          </div>
        </div>
      </footer>

      {/* Fixed Chat Button */}
      <div className="fixed-chat-container">
        <button className="chat-button">
          <span className="chat-emoji">👋</span>
          <span className="chat-text">Chat with us</span>
        </button>
        <button className="messenger-button" aria-label="Messenger">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.912 1.45 5.51 3.717 7.203V22l3.45-1.891c.92.253 1.897.39 2.906.39 5.523 0 10-4.145 10-9.256C22 6.145 17.523 2 12 2zm.993 12.485l-2.55-2.721-4.98 2.721 5.48-5.814 2.613 2.721 4.917-2.721-5.48 5.814z"/>
          </svg>
        </button>
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button className="scroll-top-button" onClick={scrollTop} aria-label="Scroll to top">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="19" x2="12" y2="5"></line>
            <polyline points="5 12 12 5 19 12"></polyline>
          </svg>
        </button>
      )}
    </>
  );
};

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/footer.css';

const Footer = React.memo(() => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          
          {/* Column 1: Brand & Socials */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Fly Digital Marketing
            </Link>
            <p className="footer-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam atque recusandae in sit sunt molestiae aliquid fugit. Mollitia eaque tempore iure sit nobis.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="social-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="social-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="social-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Services</h4>
            <Link to="/services" className="footer-link">Digital Marketing</Link>
            <Link to="/services" className="footer-link">SEO Optimization</Link>
            <Link to="/services" className="footer-link">Web Development</Link>
            <Link to="/services" className="footer-link">Content Creation</Link>
            <Link to="/services" className="footer-link">UI/UX Design</Link>
          </div>

          {/* Column 3: Company */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Company</h4>
            <Link to="/about" className="footer-link">About Us</Link>
            <Link to="/careers" className="footer-link">Careers</Link>
            <Link to="/blog" className="footer-link">Blog</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
          </div>

          {/* Column 4: Contact */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Contact Us</h4>
            <a href="mailto:hello@flydigital.com" className="footer-link">hello@flydigital.com</a>
            <a href="tel:+917695883647" className="footer-link">+91 7695883647</a>
            <p className="footer-link" style={{ cursor: 'default' }}>
              vadaku Ratha veethi sankarankovil,<br/>
              Tenkasi, Tamil Nadu 627756
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} FlyDigital Marketing. All rights reserved.
          </div>
          <div className="footer-legal-links">
            <Link to="/privacy" className="footer-legal-link">Privacy Policy</Link>
            <Link to="/terms" className="footer-legal-link">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;

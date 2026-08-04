import React from 'react';
import footerBg from '../../img repo/footer bg.svg';
import logoEagle from '../../img repo/ILC Logo Eagle.svg';
import footerBg2 from '../../img repo/footerbg.png';

const Footer = () => {
  return (
    <footer 
      className="footer-section"
      style={{
        backgroundImage: `url("${footerBg2}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-left">
            <img src={logoEagle} alt="ILC Logo" className="footer-logo" />
            <h3 className="footer-heading">Your Career.<br />Verified.</h3>
          </div>
          <div className="footer-right">
            <div className="footer-column">
              <h4>Links</h4>
              <ul>
                <li><a href="#how-it-works">How it works</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Connect</h4>
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/company/integratedlearningcircle/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li><a href="https://www.facebook.com/shreya.chopra.40369">Facebook</a></li>
                <li><a href="https://x.com/innovativeILC">Twitter/X</a></li>
                 <li><a href="https://www.youtube.com/@ilcbyshreyachopra">YouTube</a></li>
                 <li><a href="https://www.instagram.com/ilc.ind">Instagram</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <ul>
                <li><a href="#terms">Terms &amp; Conditions</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#refund">Refund Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

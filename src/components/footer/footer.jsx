import React from 'react';
import './footer.scss';
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as WhatsApp } from '../../assets/icons/whatsapp.svg';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-row">
        <div className="footer-column">
          <p className="footer-column-header">Company</p>
          <div className="footer-column-links">
            <span className="footer-column-link">Our Story</span>
            <span className="footer-column-link">Our Menu</span>
            <span className="footer-column-link">Locations</span>
          </div>
        </div>
        <div className="footer-column">
          <p className="footer-column-header">Contact</p>
          <div className="footer-column-links">
            <a className="footer-column-link" href="mailto:Foodcity@gmail.com">Foodcity@gmail.com</a>
            <a className="footer-column-link" href="tel:08183352687">08183352687</a>
            <span className="footer-social-links-list">
              <Twitter className="footer-social-link twitter" />
              <WhatsApp className="footer-social-link whatsapp" />
              <Facebook className="footer-social-link facebook" />
            </span>
          </div>
        </div>
        <div className="footer-column">
          <p className="footer-column-header">Address</p>
          <div className="footer-column-links">
            <span className="footer-column-link">
              10, apapa road, Power line, Lekki.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

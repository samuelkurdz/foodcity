import React from 'react';
import './footer.scss';


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-row">
        <div className="footer-column">
          <p className="footer-column-header">Company</p>
          <div className="footer-column-links">
            <a className="footer-column-link" href="#">Our Story</a>
            <a className="footer-column-link" href="#">Our Menu</a>
            <a className="footer-column-link" href="#">Locations</a>
          </div>
        </div>
        <div className="footer-column">
          <p className="footer-column-header">Contact</p>
          <div className="footer-column-links">
            <a className="footer-column-link" href="mailto:Foodcity@gmail.com">Foodcity@gmail.com</a>
            <a className="footer-column-link" href="tel:08183352687">08183352687</a>
            <span className="footer-column-link">
              social media icons
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

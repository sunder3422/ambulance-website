import { Link } from 'react-router-dom';
import { config, telHref, whatsappHref } from '../config';
import { services } from '../data/services';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <p className="footer-brand-name">{config.companyName}</p>
          <p>24/7 ambulance and medical transportation support — ready when you need us.</p>
          <div className="footer-quick-actions">
            <a href={telHref()} className="btn btn-emergency btn-sm">Call Now</a>
            <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">WhatsApp</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            {services.slice(0, 5).map((s) => (
              <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.name}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/team">Our Team</Link></li>
            <li><Link to="/facilities">Facilities</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/locations">Locations</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href={telHref()}>{config.phoneNumber}</a></li>
            <li><Link to="/contact">Enquiry form</Link></li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {config.companyName}. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

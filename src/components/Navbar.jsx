import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { config, telHref, whatsappHref } from '../config';
import './Navbar.css';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/facilities', label: 'Facilities' },
  { to: '/team', label: 'Our Team' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/locations', label: 'Locations' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-brand" onClick={() => setOpen(false)}>
          <span className="navbar-brand-mark" aria-hidden="true">
            <CrossIcon />
          </span>
          <span className="navbar-brand-text">{config.companyName}</span>
        </Link>

        <nav className="navbar-links" aria-label="Main navigation">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={({ isActive }) => isActive ? 'is-active' : ''}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar-actions">
          <a href={telHref()} className="btn btn-emergency btn-sm">Call Now</a>
          <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">WhatsApp</a>
          <Link to="/contact" className="btn btn-primary btn-sm">Contact Us</Link>
        </div>

        <button
          className="navbar-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`navbar-toggle-bar ${open ? 'is-open' : ''}`} />
        </button>
      </div>

      <div id="mobile-menu" className={`navbar-mobile ${open ? 'is-open' : ''}`}>
        <nav aria-label="Mobile navigation">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="navbar-mobile-actions">
          <a href={telHref()} className="btn btn-emergency btn-block">Call Now</a>
          <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-block">WhatsApp</a>
          <Link to="/contact" className="btn btn-primary btn-block" onClick={() => setOpen(false)}>Contact Us</Link>
        </div>
      </div>
    </header>
  );
}

function CrossIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="9.5" y="2" width="5" height="20" rx="1" fill="currentColor" />
      <rect x="2" y="9.5" width="20" height="5" rx="1" fill="currentColor" />
    </svg>
  );
}

export default Navbar;

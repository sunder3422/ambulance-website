import { Link } from 'react-router-dom';
import CallButton from './CallButton';
import WhatsAppButton from './WhatsAppButton';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="hero-live">
            <span className="pulse-dot" aria-hidden="true" /> Dispatch is live now
          </p>
          <h1>24/7 ambulance &amp; medical transportation support</h1>
          <p className="hero-desc">
            From emergency response to scheduled hospital transfers and air ambulance
            coordination, a trained crew and a tracked vehicle are always a call away.
          </p>
          <div className="hero-ctas">
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
            <CallButton />
            <WhatsAppButton />
          </div>
          <dl className="hero-stats">
            <div>
              <dt>Response</dt>
              <dd>24/7, every day</dd>
            </div>
            <div>
              <dt>Fleet</dt>
              <dd>Tracked &amp; equipped</dd>
            </div>
            <div>
              <dt>Coverage</dt>
              <dd>City &amp; intercity</dd>
            </div>
          </dl>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <svg viewBox="0 0 360 320" className="hero-route">
            <path
              className="hero-route-path"
              d="M20 260 C 90 260, 90 180, 160 180 S 230 90, 300 60"
              fill="none"
              stroke="var(--teal)"
              strokeWidth="3"
              strokeDasharray="6 8"
              strokeLinecap="round"
            />
            <circle cx="20" cy="260" r="7" fill="var(--ink)" />
            <circle cx="300" cy="60" r="9" fill="var(--emergency)" />
            <g transform="translate(140,150)">
              <rect x="-34" y="-20" width="68" height="40" rx="8" fill="var(--white)" stroke="var(--line)" />
              <rect x="-34" y="-6" width="68" height="12" fill="var(--teal-tint)" />
              <rect x="-6" y="-14" width="12" height="4" fill="var(--teal)" />
              <rect x="-2" y="-18" width="4" height="12" fill="var(--teal)" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Hero;

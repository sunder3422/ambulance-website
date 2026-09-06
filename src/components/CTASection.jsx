import { Link } from 'react-router-dom';
import CallButton from './CallButton';
import WhatsAppButton from './WhatsAppButton';
import './CTASection.css';

function CTASection({
  title = 'Need assistance? Contact us',
  detail = 'Our support team responds around the clock — reach out and we will take it from there.',
}) {
  return (
    <section className="section section--ink cta-section">
      <div className="container cta-section-inner">
        <div>
          <h2>{title}</h2>
          <p>{detail}</p>
        </div>
        <div className="cta-section-actions">
          <Link to="/contact" className="btn btn-primary">Contact Us</Link>
          <CallButton />
          <WhatsAppButton variant="inline" className="btn-ghost-inverse" />
        </div>
      </div>
    </section>
  );
}

export default CTASection;

import { Link } from 'react-router-dom';
import { telHref, whatsappHref } from '../config';

function MobileActionBar() {
  return (
    <nav className="mobile-action-bar" aria-label="Quick actions">
      <a href={telHref()} className="btn btn-emergency">Call</a>
      <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="btn btn-outline">WhatsApp</a>
      <Link to="/contact" className="btn btn-primary">Contact</Link>
    </nav>
  );
}

export default MobileActionBar;

import { whatsappHref } from '../config';
import './WhatsAppButton.css';

/**
 * variant: 'floating' | 'inline'
 * message: optional override for the prefilled WhatsApp text
 */
function WhatsAppButton({ variant = 'inline', message, label = 'WhatsApp Us', className = '' }) {
  const href = whatsappHref(message);

  if (variant === 'floating') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-fab"
        aria-label="Chat with us on WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn-outline ${className}`}
    >
      <WhatsAppIcon small /> {label}
    </a>
  );
}

function WhatsAppIcon({ small }) {
  const size = small ? 18 : 26;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.82L2 22l5.4-1.42a9.87 9.87 0 0 0 4.64 1.18h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.13-2.9-7C17.17 3.03 14.68 2 12.04 2zm0 18.06h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.11.82.83-3.03-.2-.31a8.15 8.15 0 0 1-1.26-4.31c0-4.5 3.67-8.16 8.19-8.16 2.19 0 4.24.85 5.79 2.4a8.11 8.11 0 0 1 2.4 5.78c0 4.51-3.68 8.13-8.15 8.13zm4.48-6.1c-.24-.12-1.45-.72-1.68-.8-.22-.08-.39-.12-.55.12-.16.24-.63.8-.78.97-.14.16-.28.18-.53.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.35-1.67-.14-.24-.02-.37.11-.5.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42-.14 0-.3-.02-.46-.02-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02 0 1.19.87 2.34 1 2.5.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28z"/>
    </svg>
  );
}

export default WhatsAppButton;

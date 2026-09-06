// Central place to read configuration from environment variables.
// Never hardcode phone numbers, WhatsApp numbers or API URLs in components —
// import them from here instead.

export const config = {
  apiUrl: import.meta.env.VITE_API_URL || '/api/v1/leads',
  companyName: import.meta.env.VITE_COMPANY_NAME || 'RapidCare Ambulance & Medical Transport',
  phoneNumber: import.meta.env.VITE_PHONE_NUMBER || '+91 98765 43210',
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || '919876543210',
  whatsappMessage:
    import.meta.env.VITE_WHATSAPP_MESSAGE ||
    'Hello, I need assistance with medical transportation.',
  mapsApiKey: import.meta.env.VITE_MAPS_API_KEY || '',
  analyticsId: import.meta.env.VITE_ANALYTICS_ID || '',
};

export const telHref = () => `tel:${config.phoneNumber.replace(/[^\d+]/g, '')}`;

export const whatsappHref = (message = config.whatsappMessage) =>
  `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(message)}`;

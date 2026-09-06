import { useState } from 'react';
import { config } from '../config';
import LocationPicker from './LocationPicker';
import './ContactForm.css';

const initialValues = { fullName: '', mobile: '', whatsapp: '', email: '', message: '' };

function validate(values) {
  const errors = {};
  if (!values.fullName.trim()) errors.fullName = 'Full name is required.';
  if (!values.mobile.trim()) {
    errors.mobile = 'Mobile number is required.';
  } else if (!/^[0-9+\-\s()]{7,15}$/.test(values.mobile.trim())) {
    errors.mobile = 'Enter a valid mobile number.';
  }
  if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }
  return errors;
}

function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [coords, setCoords] = useState(null);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validate(values);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setStatus('submitting');
    try {
      const res = await fetch(config.apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: values.fullName.trim(),
          mobile: values.mobile.trim(),
          whatsapp: values.whatsapp.trim() || undefined,
          email: values.email.trim() || undefined,
          message: values.message.trim() || undefined,
          location: coords || undefined,
          source: 'website-enquiry-form',
        }),
      });
      if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
      setStatus('success');
      setValues(initialValues);
      setCoords(null);
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="contact-form-success" role="status">
        <CheckIcon />
        <h3>Thank you</h3>
        <p>Your enquiry has been received. Our support team will contact you shortly.</p>
        <button type="button" className="btn btn-outline btn-sm" onClick={() => setStatus('idle')}>
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form-field">
        <label htmlFor="fullName">Full Name *</label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          value={values.fullName}
          onChange={handleChange}
          aria-invalid={!!errors.fullName}
          aria-describedby={errors.fullName ? 'fullName-error' : undefined}
          autoComplete="name"
        />
        {errors.fullName && <p className="contact-form-error" id="fullName-error">{errors.fullName}</p>}
      </div>

      <div className="contact-form-row">
        <div className="contact-form-field">
          <label htmlFor="mobile">Mobile Number *</label>
          <input
            id="mobile"
            name="mobile"
            type="tel"
            value={values.mobile}
            onChange={handleChange}
            aria-invalid={!!errors.mobile}
            aria-describedby={errors.mobile ? 'mobile-error' : undefined}
            autoComplete="tel"
          />
          {errors.mobile && <p className="contact-form-error" id="mobile-error">{errors.mobile}</p>}
        </div>

        <div className="contact-form-field">
          <label htmlFor="whatsapp">WhatsApp Number</label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            value={values.whatsapp}
            onChange={handleChange}
            autoComplete="tel"
          />
        </div>
      </div>

      <div className="contact-form-field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          autoComplete="email"
        />
        {errors.email && <p className="contact-form-error" id="email-error">{errors.email}</p>}
      </div>

      <div className="contact-form-field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          onChange={handleChange}
        />
      </div>

      <LocationPicker onLocate={setCoords} />

      {status === 'error' && (
        <p className="contact-form-error contact-form-error--top" role="alert">
          Something went wrong sending your enquiry. Please try again, or call or WhatsApp us directly.
        </p>
      )}

      <button type="submit" className="btn btn-primary btn-block" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Submit Enquiry'}
      </button>
    </form>
  );
}

function CheckIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="var(--teal-tint)" />
      <path d="M7 12.5l3 3 7-7" stroke="var(--teal-deep)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export default ContactForm;

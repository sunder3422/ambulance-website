import ContactForm from '../components/ContactForm';
import CallButton from '../components/CallButton';
import WhatsAppButton from '../components/WhatsAppButton';
import { config } from '../config';

function Contact() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-2" style={{ alignItems: 'start' }}>
          <div>
            <p className="eyebrow">Contact</p>
            <h1>Reach us any time, day or night</h1>
            <p>
              Call for anything urgent, message us on WhatsApp for a quick reply, or fill in the
              short enquiry form and our support team will call you back.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', margin: '1.5rem 0' }}>
              <CallButton />
              <WhatsAppButton />
            </div>
            <div className="card">
              <h3 style={{ fontSize: 'var(--step-1)' }}>Emergency line</h3>
              <p style={{ marginBottom: 0 }}>{config.phoneNumber} — available 24/7</p>
            </div>
          </div>

          <div className="card">
            <h2 style={{ fontSize: 'var(--step-1)' }}>Send an enquiry</h2>
            <p style={{ fontSize: '0.9rem' }}>We only ask for the basics — no detailed forms.</p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

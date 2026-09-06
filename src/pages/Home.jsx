import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import FacilityCard from '../components/FacilityCard';
import StaffCard from '../components/StaffCard';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import WhatsAppButton from '../components/WhatsAppButton';
import { services } from '../data/services';
import { whyChooseUs, dispatchSteps, fleet, facilities, team, locations } from '../data/content';

function Home() {
  return (
    <>
      <Hero />

      {/* Services overview */}
      <section className="section" id="services">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Services</p>
            <h2>Every kind of medical transport, one call away</h2>
            <p>Informational overview of what we offer — reach out and our team will match the right vehicle and crew to your situation.</p>
          </div>
          <div className="grid grid-3">
            {services.slice(0, 6).map((s) => (
              <ServiceCard key={s.slug} service={s} compact />
            ))}
          </div>
          <div style={{ marginTop: '2rem' }}>
            <Link to="/services" className="btn btn-outline">View all services</Link>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section section--surface">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Why choose us</p>
            <h2>Built for the moments that can&apos;t wait</h2>
          </div>
          <div className="grid grid-4">
            {whyChooseUs.map((w) => (
              <div className="card" key={w.title}>
                <h3 style={{ fontSize: 'var(--step-1)' }}>{w.title}</h3>
                <p style={{ marginBottom: 0, fontSize: '0.92rem' }}>{w.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works — a genuine sequence, so numbering is justified */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">How it works</p>
            <h2>From your call to safe handover</h2>
          </div>
          <div className="grid grid-4">
            {dispatchSteps.map((s) => (
              <div className="card" key={s.step}>
                <div style={{
                  fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--teal)',
                  fontSize: 'var(--step-2)', marginBottom: '0.4rem'
                }}>{s.step}</div>
                <h3 style={{ fontSize: 'var(--step-1)' }}>{s.title}</h3>
                <p style={{ marginBottom: 0, fontSize: '0.92rem' }}>{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet showcase */}
      <section className="section section--surface">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Our fleet</p>
            <h2>A vehicle sized to the situation</h2>
          </div>
          <div className="grid grid-4">
            {fleet.map((f) => (
              <div className="card" key={f.name}>
                <h3 style={{ fontSize: 'var(--step-1)' }}>{f.name}</h3>
                <p style={{ marginBottom: 0, fontSize: '0.92rem' }}>{f.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities and equipment */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Facilities &amp; equipment</p>
            <h2>Clinical-grade equipment on every critical transfer</h2>
          </div>
          <div className="grid grid-3">
            {facilities.slice(0, 6).map((f) => (
              <FacilityCard key={f.name} facility={f} />
            ))}
          </div>
        </div>
      </section>

      {/* Medical team */}
      <section className="section section--surface">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Medical team</p>
            <h2>The people behind every transfer</h2>
          </div>
          <div className="grid grid-4">
            {team.map((m) => (
              <StaffCard key={m.name} member={m} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Gallery</p>
            <h2>A look at our fleet and team</h2>
          </div>
          <div className="grid grid-4">
            {['Ambulances', 'Air Ambulances', 'Facilities', 'Team'].map((cat, i) => (
              <div
                key={cat}
                className="card"
                style={{
                  aspectRatio: '4/3',
                  background: `linear-gradient(155deg, hsl(${i * 70} 35% 92%), hsl(${i * 70} 30% 82%))`,
                  display: 'flex', alignItems: 'flex-end', padding: '0.9rem'
                }}
              >
                <span style={{ fontWeight: 600, fontSize: '0.85rem' }}>{cat}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2rem' }}>
            <Link to="/gallery" className="btn btn-outline">View full gallery</Link>
          </div>
        </div>
      </section>

      {/* Service locations */}
      <section className="section section--surface">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Where we operate</p>
            <h2>Coverage across the region</h2>
          </div>
          <div className="grid grid-4">
            {locations.map((l) => (
              <div className="card" key={l.city}>
                <h3 style={{ fontSize: 'var(--step-1)' }}>{l.city}</h3>
                <p style={{ marginBottom: 0, fontSize: '0.88rem' }}>{l.areas.join(', ')}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2rem' }}>
            <Link to="/locations" className="btn btn-outline">See all coverage areas</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="section-head section-head--center">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions</h2>
          </div>
          <FAQ />
        </div>
      </section>

      <CTASection />

      {/* Contact section */}
      <section className="section" id="contact-section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'start' }}>
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Send us an enquiry</h2>
              <p>Fill in a few basic details and our support team will call you back — no need to describe the full case up front.</p>
            </div>
            <div className="card">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton variant="floating" />
    </>
  );
}

export default Home;

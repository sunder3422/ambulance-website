import CTASection from '../components/CTASection';
import { whyChooseUs } from '../data/content';
import { config } from '../config';

function About() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">About us</p>
            <h1>Medical transport built around calm, trained response</h1>
            <p>
              {config.companyName} was founded to close the gap between a medical emergency and
              qualified care — a tracked fleet, trained crews, and a dispatch desk that never
              closes, so a call at 3am gets the same response as one at 3pm.
            </p>
          </div>
          <div className="grid grid-2">
            <div className="card">
              <h3>Our mission</h3>
              <p style={{ marginBottom: 0 }}>
                To make timely, safe medical transport available to every patient, whether that
                means an emergency response, a scheduled hospital transfer, or a long-distance
                air ambulance evacuation.
              </p>
            </div>
            <div className="card">
              <h3>How we work</h3>
              <p style={{ marginBottom: 0 }}>
                Every enquiry reaches a support team member directly. We confirm what&apos;s
                needed, route the nearest suitable vehicle, and stay in contact until the
                patient is safely handed over.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">What sets us apart</p>
            <h2>Why families and hospitals choose us</h2>
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

      <CTASection />
    </>
  );
}

export default About;

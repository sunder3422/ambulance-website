import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import { services } from '../data/services';

function Services() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Services</p>
            <h1>Every kind of medical transport, explained</h1>
            <p>Browse what each service covers. This is informational only — reach out and our team will confirm what fits your situation.</p>
          </div>
          <div className="grid grid-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}

export default Services;

import { useParams, Link, Navigate } from 'react-router-dom';
import CallButton from '../components/CallButton';
import WhatsAppButton from '../components/WhatsAppButton';
import { getServiceBySlug, services } from '../data/services';

function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) return <Navigate to="/services" replace />;

  const related = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="section">
        <div className="container">
          <p className="eyebrow"><Link to="/services">Services</Link> / {service.name}</p>
          <div className="grid grid-2" style={{ alignItems: 'start' }}>
            <div>
              <h1>{service.name}</h1>
              <p>{service.description}</p>
              <ul style={{ paddingLeft: '1.1rem', color: 'var(--ink-soft)' }}>
                {service.points.map((p) => (
                  <li key={p} style={{ marginBottom: '0.4rem' }}>{p}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3>Need assistance? Contact us</h3>
              <p>Our support team responds around the clock for this service.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <Link to="/contact" className="btn btn-primary btn-block">Contact Us</Link>
                <CallButton className="btn-block" />
                <WhatsAppButton
                  variant="inline"
                  className="btn-block"
                  message={`Hello, I'd like to know more about ${service.name}.`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Related services</p>
            <h2>You may also need</h2>
          </div>
          <div className="grid grid-3">
            {related.map((s) => (
              <Link to={`/services/${s.slug}`} key={s.slug} className="card" style={{ textDecoration: 'none', display: 'block' }}>
                <h3 style={{ fontSize: 'var(--step-1)', color: 'var(--ink)' }}>{s.name}</h3>
                <p style={{ marginBottom: 0, fontSize: '0.9rem' }}>{s.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceDetail;

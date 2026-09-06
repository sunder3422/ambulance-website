import FacilityCard from '../components/FacilityCard';
import CTASection from '../components/CTASection';
import { facilities, fleet } from '../data/content';

function Facilities() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Facilities &amp; equipment</p>
            <h1>Clinical-grade equipment, on every transfer</h1>
            <p>The right ambulance carries the right equipment. Here&apos;s what our vehicles are built with.</p>
          </div>
          <div className="grid grid-3">
            {facilities.map((f) => (
              <FacilityCard key={f.name} facility={f} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Fleet</p>
            <h2>Vehicles for every level of care</h2>
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

      <CTASection />
    </>
  );
}

export default Facilities;

import StaffCard from '../components/StaffCard';
import CTASection from '../components/CTASection';
import { team } from '../data/content';

function Team() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Our team</p>
            <h1>The people behind every transfer</h1>
            <p>Every ambulance is staffed with trained attendants, paramedics, or nurses — led by a medical director who sets our clinical standards.</p>
          </div>
          <div className="grid grid-4">
            {team.map((m) => (
              <StaffCard key={m.name} member={m} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}

export default Team;

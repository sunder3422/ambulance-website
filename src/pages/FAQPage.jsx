import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';

function FAQPage() {
  return (
    <>
      <section className="section">
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="section-head">
            <p className="eyebrow">FAQ</p>
            <h1>Frequently asked questions</h1>
            <p>Common questions about our ambulance, ICU, air ambulance and transfer services.</p>
          </div>
          <FAQ />
        </div>
      </section>
      <CTASection />
    </>
  );
}

export default FAQPage;

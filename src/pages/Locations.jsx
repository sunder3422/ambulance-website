import { useMemo, useState } from 'react';
import LocationPicker from '../components/LocationPicker';
import CTASection from '../components/CTASection';
import { locations } from '../data/content';

function Locations() {
  const [query, setQuery] = useState('');
  const [nearCoords, setNearCoords] = useState(null);

  const filtered = useMemo(() => {
    if (!query.trim()) return locations;
    const q = query.trim().toLowerCase();
    return locations
      .map((l) => ({ ...l, areas: l.areas.filter((a) => a.toLowerCase().includes(q)) }))
      .filter((l) => l.city.toLowerCase().includes(q) || l.areas.length > 0);
  }, [query]);

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Locations</p>
            <h1>Where we operate</h1>
            <p>Search your city or area to confirm coverage, or let us detect your location automatically.</p>
          </div>

          <div className="card" style={{ marginBottom: 'var(--space-4)' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', alignItems: 'center', marginBottom: 'var(--space-2)' }}>
              <input
                type="search"
                placeholder="Search city or area…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search coverage areas"
                style={{
                  flex: '1 1 240px',
                  padding: '0.75em 0.9em',
                  border: '1.5px solid var(--line)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '1rem',
                }}
              />
              <LocationPicker onLocate={setNearCoords} />
            </div>
            {nearCoords && (
              <p style={{ marginBottom: 0, fontSize: '0.85rem' }}>
                Showing coverage relative to your detected location ({nearCoords.lat.toFixed(3)}, {nearCoords.lng.toFixed(3)}). Contact us to confirm the nearest base.
              </p>
            )}
          </div>

          <div className="grid grid-3">
            {filtered.map((l) => (
              <div className="card" key={l.city}>
                <h3 style={{ fontSize: 'var(--step-1)' }}>{l.city}</h3>
                <p style={{ marginBottom: 0, fontSize: '0.9rem' }}>{l.areas.join(', ') || 'Coverage available — contact us to confirm.'}</p>
              </div>
            ))}
            {filtered.length === 0 && <p>No matching locations — contact us and we&apos;ll confirm coverage for your area.</p>}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}

export default Locations;

import { useMemo, useState, useEffect, useCallback } from 'react';
import { galleryCategories, galleryItems } from '../data/content';
import './Gallery.css';

function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = useMemo(
    () => (activeCategory === 'All' ? galleryItems : galleryItems.filter((g) => g.category === activeCategory)),
    [activeCategory]
  );

  const close = useCallback(() => setLightboxIndex(null), []);
  const next = useCallback(() => setLightboxIndex((i) => (i + 1) % filtered.length), [filtered.length]);
  const prev = useCallback(() => setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length), [filtered.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex, close, next, prev]);

  return (
    <div className="gallery">
      <div className="gallery-filters" role="tablist" aria-label="Gallery categories">
        {['All', ...galleryCategories].map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={activeCategory === cat}
            className={`gallery-filter ${activeCategory === cat ? 'is-active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filtered.map((item, i) => (
          <button
            key={item.id}
            className="gallery-item"
            style={{ '--hue': (item.id * 47) % 360 }}
            onClick={() => setLightboxIndex(i)}
            aria-label={`Open image: ${item.alt}`}
          >
            <span className="gallery-item-tag">{item.category}</span>
            <span className="gallery-item-alt">{item.alt}</span>
          </button>
        ))}
      </div>

      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label="Image preview">
          <button className="gallery-lightbox-close" onClick={close} aria-label="Close preview">×</button>
          <button className="gallery-lightbox-nav gallery-lightbox-prev" onClick={prev} aria-label="Previous image">‹</button>
          <div className="gallery-lightbox-frame" style={{ '--hue': (filtered[lightboxIndex].id * 47) % 360 }}>
            <p>{filtered[lightboxIndex].alt}</p>
          </div>
          <button className="gallery-lightbox-nav gallery-lightbox-next" onClick={next} aria-label="Next image">›</button>
        </div>
      )}
    </div>
  );
}

export default Gallery;

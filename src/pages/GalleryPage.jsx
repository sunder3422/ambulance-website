import Gallery from '../components/Gallery';

function GalleryPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Gallery</p>
          <h1>Our fleet, facilities and team</h1>
          <p>Filter by category to browse — select any image for a closer look.</p>
        </div>
        <Gallery />
      </div>
    </section>
  );
}

export default GalleryPage;

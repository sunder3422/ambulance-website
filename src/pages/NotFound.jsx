import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="section" style={{ textAlign: 'center' }}>
      <div className="container">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p style={{ margin: '0 auto var(--space-3)' }}>The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <Link to="/" className="btn btn-primary">Back to home</Link>
      </div>
    </section>
  );
}

export default NotFound;

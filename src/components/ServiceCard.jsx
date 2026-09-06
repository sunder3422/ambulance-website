import { Link } from 'react-router-dom';
import './ServiceCard.css';

function ServiceCard({ service, compact = false }) {
  return (
    <article className="service-card card">
      <h3>{service.name}</h3>
      <p>{service.short}</p>
      {!compact && (
        <ul className="service-card-points">
          {service.points.slice(0, 3).map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      )}
      <Link to={`/services/${service.slug}`} className="service-card-link">
        Learn more <span aria-hidden="true">›</span>
      </Link>
    </article>
  );
}

export default ServiceCard;

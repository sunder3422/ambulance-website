import './FacilityCard.css';

function FacilityCard({ facility }) {
  return (
    <div className="facility-card card">
      <div className="facility-card-icon" aria-hidden="true">
        <PlusIcon />
      </div>
      <h3>{facility.name}</h3>
      <p>{facility.detail}</p>
    </div>
  );
}

function PlusIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="10" y="3" width="4" height="18" rx="1" fill="currentColor" />
      <rect x="3" y="10" width="18" height="4" rx="1" fill="currentColor" />
    </svg>
  );
}

export default FacilityCard;

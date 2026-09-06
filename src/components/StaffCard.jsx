import './StaffCard.css';

function StaffCard({ member }) {
  const initials = member.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2);

  return (
    <article className="staff-card card">
      <div className="staff-card-photo" role="img" aria-label={`Portrait of ${member.name}`}>
        {initials}
      </div>
      <h3>{member.name}</h3>
      <p className="staff-card-role">{member.role}</p>
      <p className="staff-card-qual">{member.qualification}</p>
      <p className="staff-card-bio">{member.bio}</p>
    </article>
  );
}

export default StaffCard;

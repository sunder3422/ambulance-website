import { useState } from 'react';
import './LocationPicker.css';

/**
 * Only requests browser geolocation permission when the user clicks the
 * button. If denied or unsupported, the rest of the page keeps working.
 */
function LocationPicker({ onLocate }) {
  const [status, setStatus] = useState('idle'); // idle | locating | done | denied | error
  const [coords, setCoords] = useState(null);

  const handleClick = () => {
    if (!('geolocation' in navigator)) {
      setStatus('error');
      return;
    }
    setStatus('locating');
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const c = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        setCoords(c);
        setStatus('done');
        onLocate?.(c);
      },
      (err) => {
        setStatus(err.code === err.PERMISSION_DENIED ? 'denied' : 'error');
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  return (
    <div className="location-picker">
      <button
        type="button"
        className="btn btn-outline btn-sm"
        onClick={handleClick}
        disabled={status === 'locating'}
      >
        <PinIcon />
        {status === 'locating' ? 'Detecting location…' : 'Use My Location'}
      </button>

      {status === 'done' && coords && (
        <p className="location-picker-result">
          Detected: {coords.lat.toFixed(4)}, {coords.lng.toFixed(4)}
        </p>
      )}
      {status === 'denied' && (
        <p className="location-picker-note">
          Location permission was denied — you can still submit your enquiry without it.
        </p>
      )}
      {status === 'error' && (
        <p className="location-picker-note">
          Couldn&apos;t detect your location right now — you can still submit your enquiry without it.
        </p>
      )}
    </div>
  );
}

function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C7.86 2 4.5 5.36 4.5 9.5c0 5.62 6.4 11.54 6.68 11.79a1.2 1.2 0 0 0 1.64 0c.28-.25 6.68-6.17 6.68-11.79C19.5 5.36 16.14 2 12 2zm0 10.25a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5z"/>
    </svg>
  );
}

export default LocationPicker;

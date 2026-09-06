export const services = [
  {
    slug: 'ambulance-service',
    name: 'Ambulance Service',
    short: 'Standard emergency and non-emergency road ambulance for everyday medical transport needs.',
    description:
      'Our standard ambulances are staffed with trained attendants and equipped with essential life-support gear for emergency response and routine patient transport around the city.',
    points: ['Rapid dispatch', 'Trained attendants', 'Basic life support equipment', 'GPS-tracked fleet'],
  },
  {
    slug: 'icu-ambulance',
    name: 'ICU Ambulance',
    short: 'Mobile intensive care unit for critical patients who need continuous monitoring in transit.',
    description:
      'Our ICU ambulances carry ventilators, cardiac monitors, infusion pumps and a paramedic team, so critical patients receive uninterrupted care between facilities.',
    points: ['Ventilator support', 'Cardiac monitoring', 'Paramedic on board', 'Facility-to-facility transfer'],
  },
  {
    slug: 'air-ambulance',
    name: 'Air Ambulance',
    short: 'Fixed-wing and helicopter medical evacuation for long-distance or time-critical cases.',
    description:
      'When distance or time makes road transport unsafe, our air ambulance network arranges fixed-wing or helicopter evacuation with a full medical crew, coordinated door to door.',
    points: ['Domestic & international', 'Medical crew on board', 'Door-to-door coordination', 'Hospital bed-to-bed handover'],
  },
  {
    slug: 'medical-flight',
    name: 'Medical Flight',
    short: 'Commercial-flight medical escort for stable patients who can travel seated or on a stretcher.',
    description:
      'For stable patients who need supervision but not a dedicated aircraft, we arrange stretcher or escorted seating on commercial flights with airline medical clearance handled for you.',
    points: ['Airline clearance handled', 'Stretcher or escort option', 'Trained medical escort', 'Oxygen arrangement'],
  },
  {
    slug: 'hospital-transfer',
    name: 'Hospital Transfer',
    short: 'Safe patient transfer between hospitals, clinics, or diagnostic centres.',
    description:
      'We coordinate directly with sending and receiving hospitals to move patients safely for procedures, admissions or second opinions, with the right level of care for each transfer.',
    points: ['Hospital-to-hospital coordination', 'Medical records handover', 'Right-sized crew', 'Scheduled or urgent'],
  },
  {
    slug: 'intercity-ambulance',
    name: 'Intercity Ambulance',
    short: 'Long-distance ambulance transport between cities, with rest stops and continuous monitoring.',
    description:
      'For long-distance transport, our intercity ambulances are equipped for extended journeys, with route planning, relief drivers and continuous patient monitoring throughout.',
    points: ['Long-distance route planning', 'Continuous monitoring', 'Rest-stop coordination', 'Live location sharing'],
  },
  {
    slug: 'emergency-medical-transportation',
    name: 'Emergency Medical Transportation',
    short: 'Our fastest response for accidents, sudden illness and other time-critical emergencies.',
    description:
      'When every minute matters, our emergency response team is dispatched from the nearest available base, with a direct line to receiving hospitals for a seamless handover.',
    points: ['24/7 dispatch', 'Nearest-base routing', 'Direct hospital handover', 'Priority response'],
  },
];

export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug);

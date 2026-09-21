import { Ambulance, Armchair, Building2, FlaskConical, HeartPulse, PersonStanding, ScanLine, Scissors, UserRound } from 'lucide-react'

// Photos: put files in public/images/gallery/ and set `image` to "/images/gallery/filename.jpg".
// Until an image is set, a branded placeholder tile is shown.
// `ratio` only controls the height of the placeholder tile (real photos keep their own shape).

export const galleryCategories = [
  { slug: 'hospital-building', label: 'Hospital Building', icon: Building2 },
  { slug: 'icu', label: 'ICU', icon: HeartPulse },
  { slug: 'operation-theatre', label: 'Operation Theatre', icon: Scissors },
  { slug: 'trauma-center', label: 'Trauma Center', icon: Ambulance },
  { slug: 'x-ray-department', label: 'X-Ray Department', icon: ScanLine },
  { slug: 'laboratory', label: 'Laboratory', icon: FlaskConical },
  { slug: 'physiotherapy', label: 'Physiotherapy', icon: PersonStanding },
  { slug: 'doctors', label: 'Doctors', icon: UserRound },
  { slug: 'patients-area', label: 'Patients Area', icon: Armchair },
]

export const galleryItems = [
  { id: 'g-01', title: 'Hospital Entrance', category: 'hospital-building', ratio: 'landscape', image: null },
  { id: 'g-02', title: 'Hospital Building', category: 'hospital-building', ratio: 'portrait', image: null },
  { id: 'g-03', title: 'Reception & Front Desk', category: 'hospital-building', ratio: 'square', image: null },

  { id: 'g-04', title: 'Intensive Care Unit', category: 'icu', ratio: 'portrait', image: null },
  { id: 'g-05', title: 'ICU Monitoring Station', category: 'icu', ratio: 'landscape', image: null },

  { id: 'g-06', title: 'Operation Theatre', category: 'operation-theatre', ratio: 'landscape', image: null },
  { id: 'g-07', title: 'Surgical Equipment', category: 'operation-theatre', ratio: 'square', image: null },

  { id: 'g-08', title: 'Trauma & Emergency Entrance', category: 'trauma-center', ratio: 'portrait', image: null },
  { id: 'g-09', title: 'Emergency Care Bay', category: 'trauma-center', ratio: 'landscape', image: null },
  { id: 'g-10', title: 'Ambulance Service', category: 'trauma-center', ratio: 'square', image: null },

  { id: 'g-11', title: 'Digital X-Ray Room', category: 'x-ray-department', ratio: 'landscape', image: null },
  { id: 'g-12', title: 'C-Arm Imaging', category: 'x-ray-department', ratio: 'portrait', image: null },

  { id: 'g-13', title: 'Clinical Laboratory', category: 'laboratory', ratio: 'square', image: null },
  { id: 'g-14', title: 'Sample Collection Area', category: 'laboratory', ratio: 'landscape', image: null },

  { id: 'g-15', title: 'Physiotherapy Unit', category: 'physiotherapy', ratio: 'portrait', image: null },
  { id: 'g-16', title: 'Rehabilitation Equipment', category: 'physiotherapy', ratio: 'landscape', image: null },

  { id: 'g-17', title: 'Our Medical Team', category: 'doctors', ratio: 'landscape', image: null },
  { id: 'g-18', title: 'Consultation Room', category: 'doctors', ratio: 'square', image: null },

  { id: 'g-19', title: 'Patient Ward', category: 'patients-area', ratio: 'landscape', image: null },
  { id: 'g-20', title: 'Waiting Area', category: 'patients-area', ratio: 'portrait', image: null },
  { id: 'g-21', title: 'Private Room', category: 'patients-area', ratio: 'square', image: null },
]

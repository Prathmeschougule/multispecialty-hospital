import {
  Accessibility,
  Bone,
  ClipboardCheck,
  Clock,
  FlaskConical,
  HeartHandshake,
  HeartPulse,
  MessagesSquare,
  PackageCheck,
  PersonStanding,
  Pill,
  Scan,
  ScanLine,
  ShieldCheck,
  Siren,
  Stethoscope,
  Target,
  Timer,
  Users,
} from 'lucide-react'

// Each facility gets its own page at /facilities/:slug.
// relatedDepartments must match slugs in data/departments.js.
//
// TODO before launch: confirm equipment and service details with the hospital
// (e.g. ventilator support in ICU, medical store opening hours, lab test menu).

export const facilities = [
  {
    slug: 'icu',
    title: 'ICU',
    fullTitle: 'Intensive Care Unit',
    tagline: 'Intensive & critical care',
    description:
      'Continuous monitoring and specialised care for critically ill and post-surgical patients, supported by a trained critical care team.',
    highlights: ['Round-the-clock monitoring', 'Critical care support', 'Post-operative care'],
    icon: HeartPulse,

    heroIntro:
      'Continuous monitoring and specialised care for critically ill patients, supported by our medical, surgical and trauma teams.',

    overviewTitle: 'Critical care, closely supervised',
    overview: [
      'Our Intensive Care Unit cares for patients whose condition needs constant observation and support: after major surgery, following a serious injury, or during a severe medical illness. Patients are monitored closely and treatment is adjusted quickly as their condition changes.',
      'The ICU works alongside the Medicine, Surgery, Orthopedic and Trauma Care departments, so a patient can be moved into critical care immediately when their condition demands it.',
    ],
    features: [
      'Continuous monitoring of vital signs',
      'Oxygen support & monitoring equipment',
      'Trained critical care nursing team',
      'Regular doctor review & family updates',
    ],

    treatmentTitle: 'Conditions cared for in the ICU',
    treatmentIntro: 'Patients are admitted to intensive care when their condition needs close, continuous supervision.',
    treatments: [
      'Severe infections & high-risk fevers',
      'Heart-related emergencies',
      'Breathing difficulty & respiratory distress',
      'Recovery after major surgery',
      'Serious accident & trauma injuries',
      'Uncontrolled diabetes & metabolic emergencies',
      'Critically unstable medical conditions',
    ],

    benefits: [
      { icon: Clock, title: 'Continuous supervision', description: 'Vital signs are monitored around the clock, so changes are noticed early.' },
      { icon: Users, title: 'Multi-department team', description: 'Physicians, surgeons and orthopedic specialists coordinate on every case.' },
      { icon: ScanLine, title: 'Fast investigations', description: 'In-house X-ray and laboratory support quick decisions in critical care.' },
      { icon: HeartHandshake, title: 'Families kept informed', description: 'Regular updates so families understand the treatment plan and progress.' },
    ],

    faqs: [
      {
        question: 'When is ICU admission needed?',
        answer:
          'Intensive care is advised when a patient needs continuous monitoring or support, for example after major surgery, a serious injury, severe infection, breathing difficulty or unstable vital signs. The treating doctor will explain why it is recommended.',
      },
      {
        question: 'Can family members stay with the patient?',
        answer:
          'ICU visiting is limited to protect patients from infection and to let the team work without interruption. The hospital will share visiting times, and the doctors update the family regularly.',
      },
      {
        question: 'How long does a patient stay in the ICU?',
        answer:
          'It depends entirely on the condition and how quickly the patient stabilises. Some patients need only a day or two, others longer. Patients are shifted to a regular ward as soon as it is safe.',
      },
      {
        question: 'Who looks after the patient in the ICU?',
        answer:
          'A trained critical care nursing team provides continuous care, with the treating doctors reviewing the patient regularly and whenever the condition changes.',
      },
    ],
    relatedDepartments: ['medicine', 'surgery', 'trauma-care', 'orthopedics'],
  },

  {
    slug: 'digital-x-ray',
    title: 'Digital X-Ray',
    fullTitle: 'Digital X-Ray',
    tagline: 'Fast, clear diagnostic imaging',
    description: 'High-quality digital imaging for quick and accurate diagnosis of fractures, chest and abdominal conditions.',
    highlights: ['Images in minutes', 'Lower radiation', 'Emergency ready'],
    icon: ScanLine,

    heroIntro: 'Fast, high-quality digital imaging to diagnose fractures, chest conditions and more, without leaving the hospital.',

    overviewTitle: 'Clear images, quicker answers',
    overview: [
      'Digital X-ray produces clear images within minutes, helping doctors confirm a diagnosis quickly. Compared with conventional film X-ray, digital imaging is faster, uses less radiation and produces images that can be enhanced for a clearer view.',
      'Because the X-ray unit is inside the hospital, patients coming through OPD, emergency or trauma care can be imaged and treated without delay or travel.',
    ],
    features: [
      'Clear digital images within minutes',
      'Lower radiation than conventional film X-ray',
      'Available for emergency & trauma patients',
      'Images shared directly with your doctor',
    ],

    treatmentTitle: 'What we image',
    treatmentIntro: 'X-rays are taken on your doctor’s advice to confirm a diagnosis or check how treatment is progressing.',
    treatments: [
      'Fractures & dislocations',
      'Joint & spine problems',
      'Chest infections & pneumonia',
      'Abdominal conditions',
      'Pre-operative checks',
      'Follow-up imaging after treatment',
      'Accident & trauma injuries',
    ],

    benefits: [
      { icon: Timer, title: 'Results within minutes', description: 'Your doctor can review the images during the same visit.' },
      { icon: ShieldCheck, title: 'Lower radiation dose', description: 'Digital imaging needs less radiation than conventional X-ray film.' },
      { icon: Siren, title: 'Emergency ready', description: 'Trauma and accident patients are imaged immediately on arrival.' },
      { icon: Stethoscope, title: 'Reviewed by your doctor', description: 'Images reach the treating doctor directly, for faster decisions.' },
    ],

    faqs: [
      {
        question: 'Do I need an appointment for an X-ray?',
        answer:
          'X-rays are usually taken on a doctor’s advice and can be done during hospital hours. Emergency and trauma patients are imaged immediately.',
      },
      {
        question: 'Is an X-ray safe?',
        answer:
          'Yes. A digital X-ray uses a very small amount of radiation, less than conventional film X-ray. Please tell the staff if you are pregnant or think you may be.',
      },
      {
        question: 'How soon will I get the report?',
        answer:
          'Digital images are available within minutes, so your doctor can review them during the same visit. A formal report is provided as required.',
      },
      {
        question: 'Do I need to prepare for an X-ray?',
        answer:
          'Usually no preparation is needed. You may be asked to remove jewellery, metal objects or clothing with metal near the area being imaged.',
      },
    ],
    relatedDepartments: ['orthopedics', 'trauma-care', 'medicine', 'surgery'],
  },

  {
    slug: 'c-arm',
    title: 'C-Arm Facility',
    fullTitle: 'C-Arm Imaging Facility',
    tagline: 'Live imaging during surgery',
    description: 'Mobile X-ray imaging that guides surgeons in real time during fracture fixation and orthopedic procedures.',
    highlights: ['Real-time surgical imaging', 'Accurate implant placement', 'Shorter procedures'],
    icon: Scan,

    heroIntro: 'Live X-ray imaging inside the operation theatre, guiding surgeons precisely during fracture and orthopedic procedures.',

    overviewTitle: 'Precision guidance during surgery',
    overview: [
      'A C-arm is a mobile X-ray machine shaped like the letter C. It moves around the operating table and shows the surgical team live X-ray images while an operation is in progress, so bone fragments, screws and implants can be positioned accurately.',
      'This is especially valuable in fracture fixation and other orthopedic surgery, where precision shortens operating time, improves alignment and supports better healing.',
    ],
    features: [
      'Real-time imaging during surgery',
      'Accurate implant & screw placement',
      'Often allows smaller incisions',
      'Position verified before closing',
    ],

    treatmentTitle: 'Procedures guided by C-arm',
    treatmentIntro: 'C-arm imaging is used by our orthopedic and trauma surgeons during selected procedures.',
    treatments: [
      'Fracture fixation with plates, nails & screws',
      'Closed reduction of fractures',
      'Implant positioning & verification',
      'Orthopedic trauma surgery',
      'Joint procedures',
      'Checks during and after the procedure',
    ],

    benefits: [
      { icon: Target, title: 'Greater precision', description: 'The surgeon sees bone and implant position live, rather than working blind.' },
      { icon: Timer, title: 'Shorter operating time', description: 'Immediate imaging avoids pauses and repeated positioning during surgery.' },
      { icon: Bone, title: 'Better fracture alignment', description: 'Accurate alignment supports proper healing and return of movement.' },
      { icon: ShieldCheck, title: 'Fewer repeat procedures', description: 'Position is confirmed during surgery, reducing the need for corrections later.' },
    ],

    faqs: [
      {
        question: 'What is a C-arm machine?',
        answer:
          'A C-arm is a mobile X-ray unit shaped like the letter C. It is positioned around the operating table and displays live X-ray images on a screen during surgery.',
      },
      {
        question: 'Why is a C-arm used during surgery?',
        answer:
          'It lets the surgeon see bones and implants in real time, so fractures can be aligned and screws or plates placed accurately, often without opening a larger area.',
      },
      {
        question: 'Is C-arm imaging safe?',
        answer:
          'Yes. The radiation dose is kept as low as possible, the team follows standard protective measures, and imaging is used only for the time needed during the procedure.',
      },
      {
        question: 'Does C-arm guidance mean a smaller incision?',
        answer:
          'In many fracture surgeries it can. Live imaging may allow the surgeon to work through smaller openings, which can mean less tissue damage and a quicker recovery.',
      },
    ],
    relatedDepartments: ['orthopedics', 'trauma-care', 'surgery'],
  },

  {
    slug: 'clinical-laboratory',
    title: 'Clinical Laboratory',
    fullTitle: 'Clinical Laboratory',
    tagline: 'Blood tests & diagnostics',
    description: 'Routine and specialised blood, urine and diagnostic tests to support accurate treatment decisions.',
    highlights: ['Same-day routine reports', 'Pre-operative panels', 'Emergency testing'],
    icon: FlaskConical,

    heroIntro: 'Accurate blood, urine and diagnostic testing within the hospital, so treatment decisions are never delayed.',

    overviewTitle: 'Reliable results, without the running around',
    overview: [
      'Our clinical laboratory carries out routine and specialised investigations for OPD, inpatient, emergency and pre-operative needs. Samples are collected and processed within the hospital, which means faster reports and fewer trips for patients and families.',
      'Reliable test results guide almost every treatment decision, from confirming an infection to monitoring diabetes and preparing a patient for surgery.',
    ],
    features: [
      'Sample collection inside the hospital',
      'Support for OPD, ICU & emergency patients',
      'Pre-operative test panels',
      'Results shared directly with your doctor',
    ],

    treatmentTitle: 'Tests we carry out',
    treatmentIntro: 'Tests are advised by your doctor based on your symptoms and treatment plan.',
    treatments: [
      'Complete blood count (CBC)',
      'Blood sugar & HbA1c',
      'Lipid profile',
      'Liver & kidney function tests',
      'Thyroid profile',
      'Dengue, malaria & typhoid tests',
      'Urine routine examination',
      'Pre-operative test panels',
    ],

    benefits: [
      { icon: Timer, title: 'Faster reports', description: 'Routine reports are usually ready the same day.' },
      { icon: FlaskConical, title: 'Wide range of tests', description: 'Everyday screening through to pre-operative and follow-up panels.' },
      { icon: Siren, title: 'Emergency testing', description: 'Urgent investigations are prioritised for trauma and ICU patients.' },
      { icon: ClipboardCheck, title: 'Fewer trips', description: 'Consultation, tests and treatment all happen in one place.' },
    ],

    faqs: [
      {
        question: 'Do I need to fast before a blood test?',
        answer:
          'Some tests, such as fasting blood sugar and lipid profile, need 8–12 hours of fasting; plain water is allowed. Your doctor or our staff will tell you if fasting is required.',
      },
      {
        question: 'How soon will I get my reports?',
        answer: 'Routine reports are usually available the same day. Urgent tests for emergency and ICU patients are prioritised.',
      },
      {
        question: 'Can I get tests done without a prescription?',
        answer:
          'Some routine tests can be done on request, but we recommend a doctor consultation first, so the right tests are chosen and the results are explained properly.',
      },
      {
        question: 'Are tests done before surgery?',
        answer:
          'Yes. Pre-operative investigations such as blood counts, blood sugar, kidney and liver function tests and blood grouping are done within the hospital before planned and emergency surgery.',
      },
    ],
    relatedDepartments: ['medicine', 'surgery', 'trauma-care'],
  },

  {
    slug: 'medical-store',
    title: 'Medical Store',
    fullTitle: 'Medical Store (Pharmacy)',
    tagline: 'In-house pharmacy',
    description: 'Prescribed medicines, injectables and medical supplies available within the hospital.',
    highlights: ['Inside the hospital', 'Emergency medicines', 'Pharmacist guidance'],
    icon: Pill,

    heroIntro: 'An in-house pharmacy stocking prescribed medicines and medical supplies, so families do not have to search outside.',

    overviewTitle: 'Medicines, right where you need them',
    overview: [
      'Our medical store supplies medicines prescribed by hospital doctors, along with dressings, surgical consumables and everyday medical items. Being inside the hospital, it saves patients and families time at exactly the moment it matters most.',
      'Medicines for emergency and admitted patients are arranged immediately, and our staff explain how to take each medicine before you leave.',
    ],
    features: [
      'Located inside the hospital premises',
      'Supports emergency & inpatient care',
      'Guidance on dosage and timing',
      'Genuine, properly stored medicines',
    ],

    treatmentTitle: 'What is available',
    treatmentIntro: 'Medicines and supplies stocked for OPD, inpatient, surgical and emergency care.',
    treatments: [
      'Prescribed medicines',
      'Emergency & injectable medicines',
      'Post-operative medicines',
      'Dressing & wound care supplies',
      'Diabetes & blood pressure medicines',
      'Surgical consumables',
      'General medical supplies',
    ],

    benefits: [
      { icon: Timer, title: 'No running around', description: 'Collect medicines on your way out, straight after your consultation.' },
      { icon: PackageCheck, title: 'Genuine medicines', description: 'Medicines are sourced and stored properly, with regular expiry checks.' },
      { icon: Siren, title: 'Emergency supply', description: 'Critical medicines are available immediately for emergency patients.' },
      { icon: MessagesSquare, title: 'Pharmacist guidance', description: 'Clear instructions on dosage, timing and storage before you leave.' },
    ],

    faqs: [
      {
        question: 'Can I buy medicines without a prescription?',
        answer:
          'Prescription medicines are dispensed only against a valid prescription, as required by regulations. General and over-the-counter items can be bought directly.',
      },
      {
        question: 'Will you stock everything my doctor prescribed?',
        answer:
          'Medicines prescribed by our hospital doctors are usually stocked. If something is unavailable, our staff will guide you on the alternative advised by your doctor.',
      },
      {
        question: 'Do you supply medicines for admitted patients?',
        answer: 'Yes. Medicines and supplies for inpatients, ICU and emergency care are provided directly to the ward.',
      },
      {
        question: 'When is the medical store open?',
        answer:
          'Opening hours are displayed at the hospital reception. Medicines needed for emergency and admitted patients are arranged whenever they are required.',
      },
    ],
    relatedDepartments: ['medicine', 'surgery', 'orthopedics', 'trauma-care'],
  },

  {
    slug: 'physiotherapy',
    title: 'Physiotherapy',
    fullTitle: 'Physiotherapy',
    tagline: 'Rehabilitation & recovery',
    description: 'Guided exercises and therapy to restore movement and strength after injury, surgery or illness.',
    highlights: ['Post-surgery rehab', 'Pain relief therapy', 'Personal exercise plans'],
    icon: PersonStanding,

    heroIntro: 'Guided rehabilitation to restore movement, strength and confidence after injury, surgery or illness.',

    overviewTitle: 'Recovery that continues after treatment',
    overview: [
      'Physiotherapy helps patients regain function after fractures, joint replacement, spine problems, accidents and long illness. Treatment is tailored to each patient’s condition, age and daily routine, with exercises progressing as strength improves.',
      'Working closely with our orthopedic and medical teams, physiotherapy continues the recovery that begins with treatment or surgery, and helps reduce pain and stiffness along the way.',
    ],
    features: [
      'Individually planned exercise programmes',
      'Pain-relief and mobility therapy',
      'Post-surgery rehabilitation',
      'Home exercise guidance',
    ],

    treatmentTitle: 'Conditions we help with',
    treatmentIntro: 'Therapy is planned after assessing your movement, strength and pain.',
    treatments: [
      'Recovery after fracture treatment',
      'Rehabilitation after joint replacement',
      'Back & neck pain',
      'Frozen shoulder & joint stiffness',
      'Sports & soft-tissue injuries',
      'Post-operative mobility training',
      'Muscle weakness after long illness',
      'Balance & walking difficulty',
    ],

    benefits: [
      { icon: Accessibility, title: 'Faster return to daily life', description: 'Structured therapy helps you get back to work and routine sooner.' },
      { icon: HeartHandshake, title: 'Less pain, more movement', description: 'Therapy reduces stiffness and helps restore natural movement.' },
      { icon: Users, title: 'Coordinated with your surgeon', description: 'Your plan follows the recovery goals set by your treating doctor.' },
      { icon: ClipboardCheck, title: 'Progress tracked', description: 'Exercises are reviewed and advanced as you improve.' },
    ],

    faqs: [
      {
        question: 'When should physiotherapy start after surgery?',
        answer:
          'Often within a few days, as soon as your surgeon advises. Starting at the right time helps prevent stiffness and speeds up recovery.',
      },
      {
        question: 'How many sessions will I need?',
        answer:
          'It varies with the condition. Some patients improve within a few sessions, while recovery after joint replacement or a major fracture may need several weeks of guided therapy.',
      },
      {
        question: 'Is physiotherapy painful?',
        answer:
          'You may feel mild discomfort while regaining movement, but therapy should not be severely painful. Tell your therapist if something hurts and the plan will be adjusted.',
      },
      {
        question: 'Do I need a doctor’s referral for physiotherapy?',
        answer:
          'A consultation first is recommended, so the cause of your pain is identified and therapy is planned safely for your condition.',
      },
    ],
    relatedDepartments: ['orthopedics', 'trauma-care', 'medicine'],
  },
]

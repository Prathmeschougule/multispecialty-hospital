import {
  Accessibility,
  Activity,
  Ambulance,
  Bandage,
  BedDouble,
  Bone,
  ClipboardCheck,
  Clock,
  Droplets,
  FlaskConical,
  Gauge,
  HeartPulse,
  MessagesSquare,
  PersonStanding,
  Scan,
  ScanLine,
  Scissors,
  ShieldCheck,
  Siren,
  Stethoscope,
  Target,
  Users,
  Wind,
} from 'lucide-react'
import { hospital } from '../config/hospital'

// Add a department here and it appears in the navigation, homepage, footer and gets its own page.
//
// IMPORTANT: Medical content is written for general patient awareness.
// Before launch, the heads of department must confirm every listed condition and
// treatment is actually offered at EKDANT Hospital, and review all FAQ answers.
//
// facilities[].slug must match a slug in data/facilities.js.

export const departments = [
  {
    slug: 'orthopedics',
    title: 'Orthopedic Department',
    shortTitle: 'Orthopedics',
    tagline: 'Bones, joints & fractures',
    description: 'Fracture and bone care, accident injuries, spine disorders and joint replacement, supported by C-arm imaging and physiotherapy.',
    highlights: ['Fracture & bone care', 'Joint replacement', 'Spine & accident care'],
    icon: Bone,

    heroIntro:
      'Complete bone and joint care — from fractures and accident injuries to spine disorders and joint replacement — supported by C-arm guided surgery and in-house physiotherapy.',

    aboutTitle: 'Restoring movement, relieving pain',
    about: [
      'Our Orthopedic Department diagnoses and treats conditions affecting bones, joints, ligaments, muscles and the spine. From a simple sprain to a complex fracture, every patient receives a careful assessment and a treatment plan suited to their age, activity level and lifestyle.',
      'With digital X-ray, a C-arm for image-guided surgery, a clinical laboratory and physiotherapy available within the hospital, diagnosis, surgery and rehabilitation are coordinated in one place for a smoother recovery.',
    ],
    conditionsTitle: 'Conditions we treat',
    conditions: [
      'Fractures & dislocations',
      'Accident & trauma injuries',
      'Spine disorders & back pain',
      'Arthritis & joint pain',
      'Knee & hip problems needing replacement',
      'Sports & ligament injuries',
      'Frozen shoulder & joint stiffness',
      'Osteoporosis',
    ],

    treatments: [
      {
        icon: Bone,
        title: 'Fracture & Bone Care',
        description: 'Plaster casts, splints and surgical fixation for broken bones, based on the type of fracture.',
      },
      {
        icon: Ambulance,
        title: 'Accident Care',
        description: 'Immediate orthopedic treatment for injuries from road accidents, falls and workplace mishaps.',
      },
      {
        icon: PersonStanding,
        title: 'Spine Disorders',
        description: 'Evaluation and treatment of back pain, neck pain, disc problems and posture-related conditions.',
      },
      {
        icon: Scissors,
        title: 'Joint Replacement',
        description: 'Surgical replacement of severely damaged knee and hip joints to restore pain-free movement.',
      },
      {
        icon: Scan,
        title: 'C-Arm Guided Surgery',
        description: 'Live imaging during surgery for accurate alignment of fractures and precise implant placement.',
      },
      {
        icon: Accessibility,
        title: 'Physiotherapy',
        description: 'Guided rehabilitation to rebuild strength, flexibility and mobility after injury or surgery.',
      },
    ],

    facilities: [
      { slug: 'c-arm', note: 'Live imaging during fracture and joint surgery.' },
      { slug: 'digital-x-ray', note: 'Quick imaging to confirm fractures and joint problems.' },
      { slug: 'physiotherapy', note: 'Structured rehabilitation after injury or surgery.' },
      { slug: 'icu', note: 'Close monitoring after major orthopedic surgery when needed.' },
    ],

    benefits: [
      {
        icon: ScanLine,
        title: 'Faster diagnosis',
        description: 'Digital X-ray within the hospital means fractures are confirmed quickly, without travelling elsewhere.',
      },
      {
        icon: Target,
        title: 'C-arm guided precision',
        description: 'Live imaging during surgery supports accurate fracture alignment and implant placement.',
      },
      {
        icon: PersonStanding,
        title: 'Complete recovery pathway',
        description: 'Treatment and physiotherapy are coordinated under one roof for a smoother recovery.',
      },
      {
        icon: Siren,
        title: 'Emergency fracture care',
        description: 'Accident-related fractures are treated promptly through our Trauma Care unit.',
      },
    ],

    faqs: [
      {
        question: 'When should I see an orthopedic doctor?',
        answer:
          'Consult an orthopedic doctor if you have joint or back pain lasting more than a few weeks, swelling or stiffness, difficulty moving a limb, or pain after a fall or injury. If you suspect a fracture, seek emergency care immediately.',
      },
      {
        question: 'How do I know if a bone is broken?',
        answer:
          'Common signs include severe pain, swelling, bruising, visible deformity and being unable to move or put weight on the area. An X-ray is needed to confirm a fracture. Keep the area still and get it examined as soon as possible.',
      },
      {
        question: 'Does every fracture need surgery?',
        answer:
          'No. Many fractures heal well with a plaster cast or splint. Surgery may be recommended for displaced, unstable or complex fractures. The doctor will explain the best option after reviewing your X-ray.',
      },
      {
        question: 'How long does a fracture take to heal?',
        answer:
          'Most fractures take about 6–12 weeks to heal, depending on the bone involved, the type of fracture, your age and overall health. Physiotherapy may be needed afterwards to regain full strength and movement.',
      },
      {
        question: 'When is joint replacement recommended?',
        answer:
          'Joint replacement is considered when a knee or hip joint is severely damaged by arthritis or injury, pain limits daily activities, and medicines, injections and physiotherapy no longer help. The surgeon will discuss the benefits, risks and recovery with you before deciding.',
      },
      {
        question: 'Is physiotherapy necessary after an orthopedic injury?',
        answer:
          'In many cases, yes. Physiotherapy helps restore movement, strength and balance, and lowers the risk of stiffness or re-injury. It is especially important after joint replacement and major fracture surgery.',
      },
    ],
  },

  {
    slug: 'medicine',
    title: 'Medicine Department',
    shortTitle: 'Medicine',
    tagline: 'Adult illness & chronic care',
    description: 'Treatment for heart disease, respiratory conditions, diabetes, thyroid disorders and high blood pressure, with ICU support.',
    highlights: ['Heart & BP care', 'Diabetes & thyroid', 'ICU support'],
    icon: Stethoscope,

    heroIntro:
      'Treatment for heart disease, respiratory conditions, diabetes, thyroid disorders and high blood pressure, backed by intensive care when it is needed.',

    aboutTitle: 'Complete medical care for everyday and chronic illness',
    about: [
      'The Medicine Department is often the first point of contact for patients who are unwell. Our physicians diagnose and treat heart disease, respiratory conditions, diabetes, thyroid disorders and high blood pressure, along with fevers, infections and other everyday illnesses.',
      'With an in-house clinical laboratory, digital X-ray and an Intensive Care Unit, we can investigate symptoms quickly, admit patients who need closer care and move them into intensive care without delay if their condition worsens.',
    ],
    conditionsTitle: 'Conditions we treat',
    conditions: [
      'Heart diseases',
      'Respiratory diseases',
      'Diabetes',
      'Thyroid disorders',
      'High blood pressure (hypertension)',
      'Fever & infections',
      'Dengue, malaria & typhoid',
      'Critical illness needing ICU care',
    ],

    treatments: [
      {
        icon: HeartPulse,
        title: 'Heart Disease Care',
        description: 'Evaluation and management of heart conditions and cardiac risk factors, with ECG and timely specialist referral.',
      },
      {
        icon: Wind,
        title: 'Respiratory Disease Treatment',
        description: 'Care for asthma, bronchitis, pneumonia and other conditions affecting breathing.',
      },
      {
        icon: Droplets,
        title: 'Diabetes Management',
        description: 'Blood sugar control with medicines, diet guidance and regular monitoring to prevent complications.',
      },
      {
        icon: Activity,
        title: 'Thyroid Disorder Treatment',
        description: 'Diagnosis and long-term management of underactive and overactive thyroid conditions.',
      },
      {
        icon: Gauge,
        title: 'Blood Pressure Management',
        description: 'Treatment of hypertension to protect the heart, kidneys and brain from long-term damage.',
      },
      {
        icon: BedDouble,
        title: 'ICU & Inpatient Care',
        description: 'Admission, close monitoring and intensive care for patients whose condition needs constant supervision.',
      },
    ],

    facilities: [
      { slug: 'clinical-laboratory', note: 'Blood and urine tests for accurate, timely diagnosis.' },
      { slug: 'digital-x-ray', note: 'Chest X-rays for infections and breathing problems.' },
      { slug: 'icu', note: 'Critical care for severe infections and medical emergencies.' },
      { slug: 'medical-store', note: 'Prescribed medicines available within the hospital.' },
    ],

    benefits: [
      {
        icon: FlaskConical,
        title: 'Quick investigations',
        description: 'In-house laboratory and X-ray help confirm a diagnosis without delay.',
      },
      {
        icon: Stethoscope,
        title: 'Care for the whole person',
        description: 'Physicians consider all your health conditions together, not in isolation.',
      },
      {
        icon: BedDouble,
        title: 'Admission when needed',
        description: 'A seamless move from OPD to ward or ICU if your condition requires closer care.',
      },
      {
        icon: Users,
        title: 'Coordinated specialist care',
        description: 'Easy referral to surgery, orthopedics or trauma care within the same hospital.',
      },
    ],

    faqs: [
      {
        question: 'When should I visit the Medicine Department?',
        answer:
          'Visit if you have fever lasting more than 2–3 days, a persistent cough, unexplained weakness or stomach problems, or if you need ongoing care for a condition like diabetes or high blood pressure.',
      },
      {
        question: 'Are blood tests done within the hospital?',
        answer:
          'Yes. Our in-house clinical laboratory carries out routine blood and urine tests, which helps the doctor reach a diagnosis quickly.',
      },
      {
        question: 'When is hospital admission needed for fever?',
        answer:
          'Admission may be advised if fever is very high or prolonged, if there are warning signs such as a low platelet count, dehydration, breathlessness or confusion, or if the patient cannot take medicines by mouth.',
      },
      {
        question: 'How often should diabetes or BP patients come for follow-up?',
        answer:
          'Usually every 1–3 months, depending on how well the condition is controlled. The doctor will suggest a follow-up schedule and the tests needed at each visit.',
      },
      {
        question: 'Do you have an ICU for serious medical conditions?',
        answer:
          'Yes. Our Intensive Care Unit supports patients with severe infections, heart-related emergencies, breathing difficulty and other critical conditions, so treatment can be escalated without moving to another hospital.',
      },
      {
        question: 'What should I bring to my consultation?',
        answer:
          'Please bring previous prescriptions, test reports, discharge summaries and a list of the medicines you currently take.',
      },
    ],
  },

  {
    slug: 'surgery',
    title: 'Surgery Department',
    shortTitle: 'Surgery',
    tagline: 'GI, abdominal & laparoscopic surgery',
    description: 'Gastrointestinal and abdominal surgery, including laparoscopic and endoscopic procedures, planned and in emergencies.',
    highlights: ['Laparoscopic surgery', 'Endoscopic procedures', 'GI & abdominal surgery'],
    icon: Scissors,

    heroIntro:
      'Gastrointestinal and abdominal surgery, including laparoscopic and endoscopic procedures, with careful assessment before surgery and attentive support through recovery.',

    aboutTitle: 'Surgical care you can rely on',
    about: [
      'Our Surgery Department focuses on gastrointestinal and abdominal surgery, treating conditions such as appendicitis, hernia, ulcers and kidney stones. Many procedures are performed laparoscopically, through small openings rather than a large incision, which usually means less pain and a faster recovery.',
      'Every patient undergoes a thorough pre-operative evaluation, including the necessary tests and anaesthesia assessment. After surgery, patients are cared for by our nursing team, with ICU support available for those who need close monitoring.',
    ],
    conditionsTitle: 'Conditions we treat',
    conditions: [
      'Appendicitis',
      'Hernia',
      'Ulcers',
      'Kidney stones',
      'Gastrointestinal disorders',
      'Abdominal pain & emergencies',
      'Lumps, cysts & abscesses',
      'Wounds & injuries needing surgery',
    ],

    treatments: [
      {
        icon: Scissors,
        title: 'Laparoscopic Surgery',
        description: 'Keyhole surgery through small openings, usually meaning less pain, a shorter stay and faster recovery.',
      },
      {
        icon: Scan,
        title: 'Endoscopic Surgery',
        description: 'Procedures performed with an endoscope to diagnose and treat conditions inside the digestive tract.',
      },
      {
        icon: Bandage,
        title: 'Appendicitis Treatment',
        description: 'Prompt assessment and surgical removal of an inflamed appendix, including emergency cases.',
      },
      {
        icon: ShieldCheck,
        title: 'Hernia Repair',
        description: 'Surgical repair of hernias, by laparoscopic or open technique depending on the type and size.',
      },
      {
        icon: FlaskConical,
        title: 'Ulcer & GI Treatment',
        description: 'Medical and surgical management of ulcers and other gastrointestinal conditions.',
      },
      {
        icon: Droplets,
        title: 'Kidney Stone Treatment',
        description: 'Evaluation and surgical treatment of kidney and urinary stones causing pain or obstruction.',
      },
    ],

    facilities: [
      { slug: 'icu', note: 'Close monitoring after major or emergency surgery.' },
      { slug: 'clinical-laboratory', note: 'Pre-operative blood tests and post-operative monitoring.' },
      { slug: 'digital-x-ray', note: 'Imaging to support surgical diagnosis and planning.' },
      { slug: 'medical-store', note: 'Post-operative medicines and dressing supplies on site.' },
    ],

    benefits: [
      {
        icon: ClipboardCheck,
        title: 'Thorough pre-surgery evaluation',
        description: 'Every patient is assessed carefully so that risks are identified and reduced.',
      },
      {
        icon: Siren,
        title: 'Emergency surgery readiness',
        description: 'Surgical emergencies are handled promptly alongside our Trauma Care unit.',
      },
      {
        icon: HeartPulse,
        title: 'ICU backup',
        description: 'Critical care support is available within the hospital after surgery.',
      },
      {
        icon: MessagesSquare,
        title: 'Clear communication',
        description: 'We explain the procedure, risks and recovery plan before you make a decision.',
      },
    ],

    faqs: [
      {
        question: 'What is laparoscopic (keyhole) surgery?',
        answer:
          'Laparoscopic surgery is performed through a few small openings using a camera and fine instruments, instead of one large cut. For suitable patients this usually means less pain, a smaller scar, a shorter hospital stay and a quicker return to normal activity. The surgeon will advise whether it is right for your condition.',
      },
      {
        question: 'How do I know if I need surgery?',
        answer:
          'The surgeon will examine you and review your tests before recommending surgery. Many conditions can first be managed with medicines or lifestyle changes; surgery is advised when it is the most effective or safest option.',
      },
      {
        question: 'What tests are needed before surgery?',
        answer:
          'Usually blood tests, blood sugar and an ECG, and sometimes a chest X-ray or other imaging, depending on your age, health and the type of surgery. Most of these can be done within the hospital.',
      },
      {
        question: 'Do I need to fast before surgery?',
        answer:
          'Yes, most surgeries require fasting for several hours beforehand to reduce anaesthesia risks. You will receive exact instructions on when to stop eating and drinking.',
      },
      {
        question: 'How long will I stay in hospital?',
        answer:
          'It depends on the procedure. Minor procedures may allow same-day discharge, while major or emergency surgeries may need a few days of admission. The doctor will give you an estimate beforehand.',
      },
      {
        question: 'Should I continue my regular medicines before surgery?',
        answer:
          'Do not stop or change any medicine on your own. Some medicines, such as blood thinners or diabetes medicines, may need adjustment before surgery. Please share a complete list with the doctor.',
      },
    ],
  },

  {
    slug: 'trauma-care',
    title: 'Trauma Care',
    shortTitle: 'Trauma Care',
    tagline: 'Accident & injury care',
    description: 'Rapid assessment and treatment for accidents, serious injuries and medical emergencies.',
    highlights: ['Accident & injury care', 'Emergency stabilisation', 'Critical care support'],
    icon: Ambulance,
    emergency: true,

    heroIntro: 'Rapid, coordinated emergency care for accidents, serious injuries and critical medical conditions.',

    aboutTitle: 'When every minute matters',
    about: [
      'Our Trauma Care unit is dedicated to patients with accidents, falls, serious injuries and other medical emergencies. On arrival, patients are assessed and stabilised quickly, with priority given to the most critical cases.',
      'Trauma care at EKDANT brings together emergency doctors, surgeons, orthopedic specialists, the ICU, digital X-ray and the laboratory, so injured patients receive coordinated treatment without delay.',
    ],
    conditionsTitle: 'Emergencies we handle',
    conditions: [
      'Road traffic accidents',
      'Falls & head injuries',
      'Fractures & dislocations',
      'Deep cuts & heavy bleeding',
      'Burns',
      'Chest & abdominal injuries',
      'Breathing difficulty',
      'Poisoning & animal bites',
    ],

    // Shown only on emergency departments.
    emergencyGuide: {
      title: 'If someone is seriously injured',
      steps: [
        'Call our emergency number or 108 immediately.',
        'Do not move the person if a neck or spine injury is possible, unless they are in danger.',
        'Apply firm pressure with a clean cloth to control bleeding.',
        'Keep the person warm, calm and still. Do not give food or water.',
      ],
    },

    treatments: [
      {
        icon: Siren,
        title: 'Emergency Assessment & Triage',
        description: 'Immediate evaluation so that the most critical patients are treated first.',
      },
      {
        icon: HeartPulse,
        title: 'Resuscitation & Stabilisation',
        description: 'Life-saving support for breathing, circulation and severe bleeding.',
      },
      {
        icon: Bone,
        title: 'Fracture & Orthopedic Trauma',
        description: 'Emergency management of fractures and dislocations, with surgery when required.',
      },
      {
        icon: Scissors,
        title: 'Emergency Surgery',
        description: 'Surgical care for internal injuries and other trauma that needs an urgent operation.',
      },
      {
        icon: Bandage,
        title: 'Wound & Burn Care',
        description: 'Cleaning, stitching and dressing of wounds, and treatment of burns.',
      },
      {
        icon: BedDouble,
        title: 'Critical Care Monitoring',
        description: 'ICU admission for patients who need continuous monitoring after serious injury.',
      },
    ],

    facilities: [
      { slug: 'icu', note: 'Critical care for seriously injured patients.' },
      { slug: 'digital-x-ray', note: 'Rapid imaging to identify fractures and chest injuries.' },
      { slug: 'c-arm', note: 'Live imaging during emergency fracture surgery.' },
      { slug: 'clinical-laboratory', note: 'Urgent blood tests to guide emergency treatment.' },
    ],

    benefits: [
      {
        icon: Clock,
        title: 'Always ready',
        description: `Our emergency and trauma team is available ${hospital.emergency.availability}, including nights and holidays.`,
      },
      {
        icon: Users,
        title: 'Coordinated trauma team',
        description: 'Emergency, surgical and orthopedic specialists work together on every serious case.',
      },
      {
        icon: ScanLine,
        title: 'Diagnostics without delay',
        description: 'X-ray and laboratory within the hospital speed up critical decisions.',
      },
      {
        icon: HeartPulse,
        title: 'ICU on site',
        description: 'Seriously injured patients can move directly into critical care.',
      },
    ],

    faqs: [
      {
        question: 'What should I do in case of an accident?',
        answer:
          'Call our emergency number or 108 immediately. Keep the injured person still, especially if a neck or back injury is possible, control bleeding with firm pressure, and bring them to the hospital as quickly and safely as possible.',
      },
      {
        question: 'Is emergency and trauma care always available?',
        answer: `Yes. Our Emergency & Trauma Care is available ${hospital.emergency.availability}. You can walk in or call ahead on our emergency number.`,
      },
      {
        question: 'Do I need an appointment for emergency treatment?',
        answer:
          'No. Emergency patients are seen immediately without an appointment, and are prioritised based on how serious their condition is.',
      },
      {
        question: 'What documents should I bring in an emergency?',
        answer:
          'Treatment is never delayed for paperwork. If possible, bring an ID proof, any medical records, a list of current medicines and insurance details.',
      },
      {
        question: 'Can I bring someone injured in a road accident?',
        answer:
          'Yes, please bring them immediately. Good Samaritans who help road accident victims are protected under Indian law and are not required to pay or stay at the hospital.',
      },
    ],
  },
]

export interface Employee {
  id: string;
  name: string;
  role: string;
  department: 'Leadership' | 'Management' | 'Cash & Billing' | 'Forecourt Operations' | 'Transport & Logistics';
  shift: string;
  experience: string;
  badge: string;
  bio: string;
  phone?: string;
  isSenior?: boolean;
  avatar?: string;
}

export interface FuelProduct {
  id: string;
  name: string;
  bengaliName: string;
  octaneOrCetane: string;
  pricePerLiter: number;
  density: string;
  idealFor: string;
  dispenserNozzles: number;
  nozzleSchedule: string;
  description: string;
}

export interface LubricantProduct {
  id: string;
  name: string;
  brand: string;
  category: 'Engine Oil' | 'Gear & Transmission' | 'Brake Fluid';
  viscosityGrade?: string;
  price: number;
  unit: string;
  compatibility: string;
  highlight: string;
  description: string;
  inStock: boolean;
  image?: string;
}

export const STATION_INFO = {
  name: "Rohima Filling Station",
  bengaliName: "রহিমা ফিলিং স্টেশন",
  dealer: "Padma Oil Company Limited (POCL)",
  tagline: "Certified Pure Fuel, High-Grade Lubricants & 24/7 Forecourt Service",
  subtitle: "Official Padma Oil Company dealer serving Mollahat, Bagerhat and inter-district highway traffic with certified measurement and genuine lubricants.",
  address: "Rohima Filling Station, Mollahat, Bagerhat, Bangladesh",
  locationDistrict: "Mollahat, Bagerhat",
  hours: "Open 24 Hours / 7 Days a Week",
  phonePrimary: "01713500659", // Manager Abdul Malek
  phoneSecondary: "01706454929", // Khalid Hasan (Cashier)
  phoneMilon: "01727289571", // Milon Fokir (Cashier)
  phoneMD: "01715620844", // MD Nazrul Islam Milton
  whatsapp: "01706454929", // WhatsApp support via cash desk
  email: "contact@rohimafillingstation.com",
  established: "2014",
  licenseNumber: "POCL/DEALER/MHT-BGR-402",
  amenities: [
    { title: "24/7 Fuel Dispensing", desc: "Diesel, Petrol & Octane round-the-clock without interruption" },
    { title: "Padma Oil Quality Seal", desc: "100% genuine refinery fuel supplied directly by Padma Oil Corp" },
    { title: "Calibrated Digital Meters", desc: "Accurate volumetric delivery with zero-start verification" },
    { title: "Free Tire Air & Pressure Gauge", desc: "High-pressure tire inflation unit available free for all drivers" },
    { title: "Prayer Room (Namaz Khana)", desc: "Clean, carpeted space with ablution area for highway travelers" },
    { title: "Clean Restrooms", desc: "Hygienic washrooms for long-haul drivers, passengers, and families" },
    { title: "Pure Chilled Water", desc: "Filtered clean drinking water kiosk on the forecourt" },
    { title: "High-Speed Diesel Bays", desc: "6 active nozzles daytime, 4 active nozzles at night (10 PM - 7 AM)" }
  ]
};

export const FUEL_ITEMS: FuelProduct[] = [
  {
    id: "diesel",
    name: "Diesel (HSD)",
    bengaliName: "ডিজেল",
    octaneOrCetane: "Cetane 51+ / Padma Oil Corp",
    pricePerLiter: 135.00,
    density: "0.820 - 0.845 g/cm³",
    idealFor: "Trucks, Buses, Pickups, Tractors, Irrigation Pumps, Generator Units",
    dispenserNozzles: 6,
    nozzleSchedule: "6 active nozzles (Day) · 4 active nozzles (Night 10:00 PM – 7:00 AM)",
    description: "High-speed diesel sourced from Padma Oil Company Limited. Formulated for heavy torque, smooth combustion, and engine reliability across long transit runs."
  },
  {
    id: "petrol",
    name: "Petrol (Motor Spirit)",
    bengaliName: "পেট্রোল",
    octaneOrCetane: "RON 87 / Padma Oil Corp",
    pricePerLiter: 160.10,
    density: "0.720 - 0.775 g/cm³",
    idealFor: "Motorcycles, Scooters, Microbuses, Private Sedans, Light Engines",
    dispenserNozzles: 1,
    nozzleSchedule: "1 active nozzle dedicated 24/7 continuous dispensing",
    description: "Unleaded motor spirit delivering steady spark combustion, rapid acceleration, and deposit-free injector health for daily commuters."
  },
  {
    id: "octane",
    name: "Octane (High Octane Blend)",
    bengaliName: "অকটেন",
    octaneOrCetane: "RON 95 Premium / Padma Oil Corp",
    pricePerLiter: 165.10,
    density: "0.740 - 0.770 g/cm³",
    idealFor: "Modern EFI Vehicles, Premium Motorcycles, High-Compression Engines, SUVs",
    dispenserNozzles: 1,
    nozzleSchedule: "1 active nozzle dedicated 24/7 continuous dispensing",
    description: "Premium high-octane gasoline preventing engine knocking and optimizing horsepower in modern electronic fuel injection systems."
  }
];

export const LUBRICANT_PRODUCTS: LubricantProduct[] = [
  {
    id: "mobil-super-4t",
    name: "Mobil Super 4T 20W-50",
    brand: "Mobil",
    category: "Engine Oil",
    viscosityGrade: "20W-50",
    price: 700,
    unit: "1 Liter Can",
    compatibility: "4-Stroke Motorcycles, Scooters & Light Auto Engines",
    highlight: "JASO MA2 / API SL certified for wet clutch grip and high-temperature protection.",
    description: "Premium mineral 4-stroke motorcycle engine oil engineered to prevent clutch slippage and resist high thermal degradation in humid weather.",
    inStock: true
  },
  {
    id: "super-v-20w50",
    name: "Super V 20W-50",
    brand: "Super V",
    category: "Engine Oil",
    viscosityGrade: "20W-50",
    price: 820,
    unit: "Can / Pack",
    compatibility: "Commercial Pickups, Microbuses, Diesel Generators & Heavy Vehicles",
    highlight: "Robust soot handling and viscosity index under heavy highway cargo load.",
    description: "Heavy-duty multi-grade engine oil designed for high mileage commercial transport vehicles operating in severe conditions.",
    inStock: true
  },
  {
    id: "yamalube-10w40",
    name: "Yamalube 10W-40 4T Mineral",
    brand: "Yamaha",
    category: "Engine Oil",
    viscosityGrade: "10W-40",
    price: 770,
    unit: "1 Liter Bottle",
    compatibility: "Yamaha and All Modern 4-Stroke Motorcycles",
    highlight: "Genuine Yamalube formula with anti-friction modifiers and optimal gearbox protection.",
    description: "Engineered specifically for 4-stroke motorcycle engines to ensure crisp gear shifting, smooth clutch operation, and reduced engine heat.",
    inStock: true,
    image: "/assets/aistudio/736420666_1011017698488552_5156425024819528748_n_b56dec65.jpg"
  },
  {
    id: "havoline-10w30",
    name: "Havoline 10W-30",
    brand: "Havoline",
    category: "Engine Oil",
    viscosityGrade: "10W-30",
    price: 700,
    unit: "1 Liter Bottle",
    compatibility: "Modern Cars, Sedans, Hatchbacks & Modern 4-Stroke Motorcycles",
    highlight: "Deposit Shield Technology for instant cold lubrication and enhanced fuel economy.",
    description: "Low-viscosity formula engineered for reduced internal friction, effortless cold morning crank, and superior piston cleanliness.",
    inStock: true
  },
  {
    id: "havoline-10w40",
    name: "Havoline 10W-40",
    brand: "Havoline",
    category: "Engine Oil",
    viscosityGrade: "10W-40",
    price: 700,
    unit: "1 Liter Bottle",
    compatibility: "Private Vehicles, CNG/LPG Converted Engines & Motorcycles",
    highlight: "Balanced multi-grade viscosity providing wide temperature protection.",
    description: "Advanced lubricant shielding against thermal breakdown and cylinder wear during extended traffic jams and inter-district journeys.",
    inStock: true
  },
  {
    id: "total-20w50",
    name: "Total 20W-50",
    brand: "TotalEnergies",
    category: "Engine Oil",
    viscosityGrade: "20W-50",
    price: 750,
    unit: "1 Liter Can",
    compatibility: "High Mileage Engines, Private Cars, Microbuses & Motorcycles",
    highlight: "CleanShield Technology protecting against ring sticking and sludge buildup.",
    description: "Mineral engine oil with active detergent additives that prevent oxidation and preserve engine compression under highway stress.",
    inStock: true
  },
  {
    id: "gear-oil",
    name: "Heavy Duty Gear Oil",
    brand: "Industrial Grade",
    category: "Gear & Transmission",
    viscosityGrade: "EP 90 / 140",
    price: 460,
    unit: "Per Liter",
    compatibility: "Manual Gearboxes, Differentials, Rear Axles & Steering Units",
    highlight: "Extreme Pressure (EP) sulfur-phosphorus additives preventing tooth scuffing.",
    description: "Commercial gear lubricant formulated for heavy transport hypoid gears and agricultural machinery demanding high resistance to shock loading.",
    inStock: true
  },
  {
    id: "transmission-fluid",
    name: "Transmission Fluid",
    brand: "Fluid Tech",
    category: "Gear & Transmission",
    viscosityGrade: "ATF / Multi-Vehicle",
    price: 460,
    unit: "1 Liter",
    compatibility: "Automatic & Manual Transmissions, Hydraulic Power Steering",
    highlight: "Anti-shudder friction modifiers and thermal oxidation stability.",
    description: "Premium transmission fluid ensuring responsive shifts, seal preservation, and thermal durability during heavy towing.",
    inStock: true
  },
  {
    id: "brake-fluid-dot3",
    name: "Heavy Vehicle Brake Fluid DOT-3",
    brand: "Safety First DOT-3",
    category: "Brake Fluid",
    viscosityGrade: "DOT-3 Standard",
    price: 180,
    unit: "Half Liter (500ml Bottle)",
    compatibility: "Trucks, Buses, Pickups, Passenger Cars & Hydraulic Clutches",
    highlight: "High dry/wet boiling point preventing dangerous vapor lock brake fade.",
    description: "Reliable hydraulic brake fluid packaged in a 500ml container. Protects rubber cups, caliper seals, and master cylinders from corrosion.",
    inStock: true
  }
];

export const EMPLOYEES: Employee[] = [
  {
    id: "milton",
    name: "MD Nazrul Islam Milton",
    role: "Managing Director (MD)",
    department: "Leadership",
    shift: "Executive Oversight",
    experience: "12+ Years Industry Leadership",
    badge: "Executive Leadership",
    phone: "01715620844",
    avatar: "/assets/aistudio/image_e5d7b526.png",
    bio: "Guiding the operational excellence, safety standards, and customer trust of Rohima Filling Station in Mollahat, Bagerhat. Dedicated to certified Padma Oil fuel quality and fair volume."
  },
  {
    id: "malek",
    name: "Abdul Malek",
    role: "Station Manager",
    department: "Management",
    shift: "Day & Operations Lead",
    experience: "9+ Years Station Management",
    badge: "Forecourt Administration",
    phone: "01713500659",
    bio: "Supervises day-to-day forecourt operations, inventory testing, underground tank dip-measurements, and prompt customer assistance."
  },
  {
    id: "khalid",
    name: "Khalid Hasan",
    role: "Cashier & Billing Officer",
    department: "Cash & Billing",
    shift: "Shift A (Morning & Day Desk)",
    experience: "5 Years Billing & Accounts",
    badge: "Cash & Billing",
    phone: "01706454929",
    avatar: "/assets/aistudio/file_00000000358c720c9cc72ae52d373b0a_4b954e1c.png",
    bio: "Manages digital POS transactions, bKash/Nagad verification, invoice generation, and commercial fleet account balances."
  },
  {
    id: "milon",
    name: "Milon Fokir",
    role: "Cashier & Accounts Executive",
    department: "Cash & Billing",
    shift: "Shift B (Evening & Night Desk)",
    experience: "4 Years Financial Desk",
    badge: "Cash & Billing",
    phone: "01727289571",
    bio: "Ensures transparent billing records, daily cash reconciliation, and seamless payment support for night-shift motorists and highway transport drivers."
  },
  {
    id: "nazrul-senior",
    name: "Nazrul vai",
    role: "Senior Nozzleman",
    department: "Forecourt Operations",
    shift: "Night Shift (10:00 PM – 7:00 AM)",
    experience: "8+ Years Forecourt Veteran",
    badge: "Senior Nozzleman",
    isSenior: true,
    bio: "Senior forecourt lead overseeing night operations (10 PM - 7 AM), supervising 4 active diesel nozzles, high-flow highway refueling, and safety protocols."
  },
  {
    id: "kabir-senior",
    name: "Kabir vai",
    role: "Senior Nozzleman",
    department: "Forecourt Operations",
    shift: "Night Shift (10:00 PM – 7:00 AM)",
    experience: "8+ Years Forecourt Veteran",
    badge: "Senior Nozzleman",
    isSenior: true,
    bio: "Senior forecourt specialist on the night shift (10 PM - 7 AM), ensuring uninterrupted fuel flow, zero-meter checks, and customer security."
  },
  {
    id: "ahad",
    name: "Ahad",
    role: "Nozzleman",
    department: "Forecourt Operations",
    shift: "Day Shift",
    experience: "4 Years Forecourt Service",
    badge: "Nozzleman",
    bio: "Forecourt attendant on the day shift responsible for fast, zero-spill fuel dispensing, zero-meter verification, and customer vehicle safety checks."
  },
  {
    id: "pranab",
    name: "Pranab",
    role: "Nozzleman",
    department: "Forecourt Operations",
    shift: "Day Shift",
    experience: "4 Years Service",
    badge: "Nozzleman",
    bio: "Operates day shift dispenser islands, providing quick refueling for passenger cars, motorbikes, and local transit vehicles."
  },
  {
    id: "omol",
    name: "Omol Das",
    role: "Nozzleman",
    department: "Forecourt Operations",
    shift: "Day Shift",
    experience: "5 Years Service",
    badge: "Nozzleman",
    bio: "Dedicated day shift forecourt operator managing high-flow diesel nozzles and passenger vehicle fueling."
  },
  {
    id: "tutul",
    name: "Tutul",
    role: "Nozzleman",
    department: "Forecourt Operations",
    shift: "Day Shift",
    experience: "3 Years Service",
    badge: "Nozzleman",
    bio: "Attentive forecourt crew member ensuring rapid service, fuel tank zero-meter transparency, and tire air gauge assistance."
  },
  {
    id: "mishkat",
    name: "Mishkat",
    role: "Nozzleman",
    department: "Forecourt Operations",
    shift: "Day Shift",
    experience: "2 Years Service",
    badge: "Nozzleman",
    bio: "Courteous day shift attendant providing polite customer service, fast fuel pumping, and forecourt cleanliness."
  },
  {
    id: "kodor",
    name: "Kodor Ali Sheikh",
    role: "Senior Petroleum Tanker Driver",
    department: "Transport & Logistics",
    shift: "Depot Supply Transit",
    experience: "14 Years Commercial Driving",
    badge: "Fuel Logistics Specialist",
    bio: "Transports petroleum supplies from Padma Oil Company depot to station storage tanks with strict hazardous material safety protocols."
  },
  {
    id: "swapan",
    name: "Swapan Das",
    role: "Supply & Logistics Driver",
    department: "Transport & Logistics",
    shift: "Highway Supply Transit",
    experience: "8 Years Safe Driving Record",
    badge: "Fuel Logistics Specialist",
    bio: "Manages fuel supply transit, lubricant inventory procurement, and station operational equipment transport."
  },
  {
    id: "shorif",
    name: "Shorif",
    role: "Tanker & Heavy Transport Driver",
    department: "Transport & Logistics",
    shift: "Rotational Highway Transit",
    experience: "7 Years Heavy Transport",
    badge: "Fuel Logistics Specialist",
    bio: "Maintains replenishment schedules to ensure Rohima Filling Station in Mollahat, Bagerhat never runs dry during peak travel."
  }
];

export type Testimonial = {
  quote: string;
  name: string;
  meta: string;
  photo: string;
  face: string;
};

export type Broker = {
  name: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type RateRow = {
  equipment: string;
  hot?: boolean;
  barPct: number;
  barColor: "forest" | "gold";
  range: string;
  trend: string;
  trendColor: "forest" | "muted";
};

export type Site = {
  name: string;
  city: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  feePercent: number;
  loadsThisWeek: number;
  testimonials: Testimonial[];
  brokers: Broker[];
  faqs: Faq[];
  rateRows: RateRow[];
};

export const site: Site = {
  name: "SkyNex",
  city: "Austin, TX",
  phone: "+15125550180",
  phoneDisplay: "(512) 555-0180",
  email: "dispatch@skynexlogistics.com",
  feePercent: 5,
  loadsThisWeek: 318,
  testimonials: [
    {
      quote:
        "I came off a lease-on thinking I'd have to give up my authority to get decent freight. Third week with SkyNex I grossed more than my best month on the lease — and the truck's still mine.",
      name: "Marcus D.",
      meta: "2-TRUCK FLATBED FLEET · SAN ANTONIO, TX",
      photo: "/images/t1-photo.jpg",
      face: "/images/t1-face.jpg",
    },
    {
      quote:
        "I run reefer solo and I'm terrible at paperwork. They set up the brokers, chase the PODs and text me the rate before I commit. First dispatcher I've had who tells me when a load isn't worth it.",
      name: "Renee W.",
      meta: "OWNER-OPERATOR · REEFER · OKLAHOMA CITY, OK",
      photo: "/images/t2-photo.jpg",
      face: "/images/t2-face.jpg",
    },
    {
      quote:
        "We got our authority in March with four trucks and no idea what we were doing. They walked us through setups and factoring, and kept all four loaded through the summer. No contract ever came up.",
      name: "Tony R.",
      meta: "4-TRUCK DRY VAN FLEET · LAREDO, TX",
      photo: "/images/t3-photo.jpg",
      face: "/images/t3-face.jpg",
    },
  ],
  brokers: [
    { name: "Echo Global Logistics" },
    { name: "Uber Freight" },
    { name: "Coyote Logistics" },
    { name: "GlobalTranz" },
    { name: "Landstar" },
    { name: "TQL" },
  ],
  faqs: [
    {
      question: "Are you a broker?",
      answer:
        "No. We're a dispatch service. We don't take possession of freight, we don't re-broker loads, and we never put your truck under someone else's authority. Every load is booked in your name with you on the rate confirmation.",
    },
    {
      question: "Do I keep my own MC authority?",
      answer:
        "Always. Your MC number, your insurance, your customers. If you leave us on a Friday, nothing has to be unwound on Monday.",
    },
    {
      question: "What do you charge, and when?",
      answer:
        "A flat percentage of linehaul — 5% for most equipment — invoiced after the load pays. No setup fee, no monthly minimum, and nothing owed on a week we don't book you.",
    },
    {
      question: "Am I locked into a contract?",
      answer:
        "No term, no exclusivity, no cancellation fee. We ask that you let us finish any load already booked — after that you're free.",
    },
    {
      question: "Will you work with a brand-new authority?",
      answer:
        "Yes — a good share of our carriers are under a year old. Expect tighter broker options for the first 90 days while your authority ages, and we'll tell you which brokers to set up with first.",
    },
    {
      question: "Who handles paperwork and invoicing?",
      answer:
        "We do. Carrier packets, rate confirmations, BOL collection, invoicing and factoring submissions. You send us the signed POD from your phone; we handle the rest.",
    },
  ],
  rateRows: [
    {
      equipment: "Dry Van",
      barPct: 52,
      barColor: "forest",
      range: "$2.10–2.60",
      trend: "+2.1%",
      trendColor: "forest",
    },
    {
      equipment: "Reefer",
      barPct: 66,
      barColor: "forest",
      range: "$2.45–3.00",
      trend: "+3.4%",
      trendColor: "forest",
    },
    {
      equipment: "Flatbed",
      hot: true,
      barPct: 78,
      barColor: "gold",
      range: "$2.60–3.20",
      trend: "+6.2%",
      trendColor: "forest",
    },
    {
      equipment: "Step Deck",
      barPct: 88,
      barColor: "forest",
      range: "$2.85–3.40",
      trend: "flat",
      trendColor: "muted",
    },
    {
      equipment: "Box Truck",
      barPct: 40,
      barColor: "forest",
      range: "$1.80–2.30",
      trend: "flat",
      trendColor: "muted",
    },
    {
      equipment: "Power Only",
      barPct: 34,
      barColor: "forest",
      range: "$1.65–2.10",
      trend: "flat",
      trendColor: "muted",
    },
    {
      equipment: "Hotshot",
      barPct: 46,
      barColor: "forest",
      range: "$1.90–2.50",
      trend: "+1.2%",
      trendColor: "forest",
    },
  ],
};

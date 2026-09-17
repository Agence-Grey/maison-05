export interface NavLink {
  href: string;
  label: string;
}

export interface HeroContent {
  subtitle: string;
  location: string;
  titleLine1: string;
  titleLine2: string;
  titleLine3: string;
  titleLine4: string;
  description: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
}

export interface MarqueeItem {
  id: string;
  text: string;
}

export interface MarqueeContent {
  items: MarqueeItem[];
}

export interface OpeningContent {
  label: string;
  title: string;
  titleHighlight: string;
  description: string;
}

export interface PhilosophyContent {
  label: string;
  title: string;
  titleHighlight: string;
  paragraph1: string;
  paragraph2: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export interface Pillar {
  title: string;
  text: string;
}

export interface ReturnToSelfContent {
  label: string;
  title: string;
  titleHighlight: string;
  description: string;
  pillars: Pillar[];
}

export interface ConfidenceContent {
  label: string;
  title: string;
  titleHighlight: string;
  paragraph1: string;
  paragraph2: string;
  badges: string[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export interface CommunityContent {
  label: string;
  title: string;
  titleHighlight: string;
  paragraph1: string;
  paragraph2: string;
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
}

export interface Discipline {
  title: string;
  text: string;
  tagline: string;
  image: string;
}

export interface DisciplinesContent {
  label: string;
  title: string;
  titleHighlight: string;
  description: string;
  disciplines: Discipline[];
}

export interface FinalCtaContent {
  label: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
}

export interface FooterContent {
  description: string;
  nav: NavLink[];
  legal: NavLink[];
  contact: {
    email: string;
    phone: { label: string; href: string };
    location: string;
  };
}

export const navLinks: NavLink[] = [
  { href: "#maison", label: "La Maison" },
  { href: "#revenir", label: "Revenir à soi" },
  { href: "#confiance", label: "Confiance" },
  { href: "#partage", label: "Partage" },
  { href: "#disciplines", label: "Disciplines" },
  { href: "#tarifs", label: "Tarifs & Planning" },
];

export const heroContent: HeroContent = {
  subtitle: "Studio de Pilates Reformer",
  location: "Bourg-en-Bresse",
  titleLine1: "Votre",
  titleLine2: "parenthèse",
  titleLine3: "Votre",
  titleLine4: "maison",
  description:
    "Maison 05, une parenthèse pensée pour vous. Bougez, respirez, partagez et prenez le temps de revenir à vous, loin du quotidien.",
  ctaPrimary: { label: "Réserver une séance", href: "#contact" },
  ctaSecondary: { label: "Découvrir la maison", href: "#maison" },
};

export const marqueeContent: MarqueeContent = {
  items: [
    { id: "pilates-reformer", text: "Pilates Reformer" },
    { id: "respiration", text: "Respiration" },
    { id: "mouvement", text: "Mouvement" },
    { id: "communaute", text: "Communauté" },
    { id: "bien-etre", text: "Bien-être" },
    { id: "parenthese", text: "Parenthèse" },
  ],
};

export const openingContent: OpeningContent = {
  label: "Bientôt",
  title: "Ouverture en",
  titleHighlight: "octobre 2026",
  description:
    "Maison 05 prépare son ouverture à Bourg-en-Bresse pour vous offrir une parenthèse pensée pour vous. Rejoignez-nous dès maintenant pour être informé·e en avant-première.",
};

export const philosophyContent: PhilosophyContent = {
  label: "Une maison pour soi",
  title: "Bienvenue chez",
  titleHighlight: "Maison 05",
  paragraph1:
    "Maison 05 est pensé comme une maison : un lieu chaleureux où l'on se sent bien, où l'on peut être soi-même et où l'on vient prendre le temps de se retrouver.",
  paragraph2:
    "Ici, le Pilates Reformer devient bien plus qu'une séance de sport. C'est une parenthèse : un moment pour ralentir, respirer, se reconnecter à son corps et oublier, le temps d'une séance, tout ce qui se passe à l'extérieur.",
  image: {
    src: "/presentation.jpg",
    alt: "Maison 05, studio de Pilates Reformer à Bourg-en-Bresse",
    width: 1400,
    height: 1000,
  },
};

export const returnToSelfContent: ReturnToSelfContent = {
  label: "Revenir à soi",
  title: "Dans nos vies rythmées par le quotidien,",
  titleHighlight: "faites une pause",
  description:
    "Un moment où vous vous concentrez sur vous, loin des notifications et des obligations.",
  pillars: [
    {
      title: "Votre respiration",
      text: "Un moment pour ralentir et laisser le souffle guider chaque mouvement, jusqu'à ne plus penser à rien d'autre.",
    },
    {
      title: "Vos mouvements",
      text: "Chaque geste devient une attention portée à soi, un retour au corps et à ses sensations les plus profondes.",
    },
    {
      title: "Vos sensations",
      text: "Les préoccupations restent à la porte. Vous profitez simplement de l'instant, concentrée sur vous.",
    },
  ],
};

export const confidenceContent: ConfidenceContent = {
  label: "Se sentir bien · Se sentir confiante",
  title: "Prendre soin de son corps,",
  titleHighlight: "mais aussi de soi",
  paragraph1:
    "Maison 05 est un espace où l'on vient progresser à son rythme, découvrir ses capacités et se sentir plus forte.",
  paragraph2:
    "Parce que nous croyons que le mouvement peut changer bien plus que notre façon de bouger.",
  badges: ["À son rythme", "Plus forte", "Plus ancrée", "Plus confiante"],
  image: {
    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1400",
    alt: "Prendre soin de soi avec le Pilates",
    width: 1400,
    height: 1000,
  },
};

export const communityContent: CommunityContent = {
  label: "Une maison de partage",
  title: "Un lieu de rencontres",
  titleHighlight: "et d'échanges",
  paragraph1:
    "Un endroit où l'on se retrouve, où l'on partage une énergie, des sourires et des moments ensemble.",
  paragraph2:
    "Une communauté qui se construit séance après séance, autour d'une même envie : se sentir bien.",
  images: [
    {
      src: "/cocooning.png",
      alt: "Énergie collective",
      width: 900,
      height: 900,
    },
    {
      src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=900",
      alt: "Moments partagés",
      width: 900,
      height: 900,
    },
  ],
};

export const disciplinesContent: DisciplinesContent = {
  label: "Nos disciplines",
  title: "Trouvez votre",
  titleHighlight: "pratique",
  description:
    "Du renforcement à la détente, chaque séance est une parenthèse adaptée à votre rythme et à vos envies.",
  disciplines: [
    {
      title: "Pilates Flow",
      text: "Des enchaînements fluides où la respiration guide chaque mouvement.",
      tagline: "Fluidité · Respiration · Mouvement",
      image: "/Screenshot_2026-09-06_20-51-55.png",
    },
    {
      title: "Pilates Strong",
      text: "Un travail en profondeur sur machine pour renforcer la silhouette, gagner en tonicité et en puissance.",
      tagline: "Renforcement · Tonus · Puissance",
      image: "/Screenshot_2026-09-06_20-51-34.png",
    },
    {
      title: "Pilates Senior",
      text: "Des séances douces et adaptées pour entretenir mobilité, équilibre et vitalité au fil des années.",
      tagline: "Douceur · Mobilité · Équilibre",
      image: "/Screenshot_2026-09-06_20-52-13.png",
    },
    {
      title: "Method 05",
      text: "La signature Maison 05 : une méthode exclusive mêlant précision du Reformer et intention du mouvement.",
      tagline: "Signature · Précision · Intention",
      image: "/Screenshot_2026-09-06_20-52-21.png",
    },
    {
      title: "Pilates Pulse",
      text: "Des enchaînements dynamiques au tempo soutenu pour élever le rythme et brûler les calories.",
      tagline: "Rythme · Énergie · Cardio",
      image: "/Screenshot_2026-09-06_20-52-40.png",
    },
  ],
};

export const finalCtaContent: FinalCtaContent = {
  label: "Move with intention",
  titleLine1: "Votre temps. Votre espace.",
  titleLine2: "Votre maison.",
  description:
    "Maison 05 vous ouvre ses portes pour vous offrir une parenthèse dans votre quotidien. Entre se sentir bien et une maison de partage : un lieu pour bouger, respirer, échanger et se retrouver.",
  ctaPrimary: { label: "Réserver maintenant", href: "#contact" },
  ctaSecondary: { label: "Découvrir la maison", href: "#maison" },
};

export interface TarifItem {
  label: string;
  price: string;
  detail?: string;
}

export interface TarifPack {
  label: string;
  price: string;
  perSession?: string;
}

export interface Abonnement {
  name: string;
  price: string;
  detail: string;
}

export interface TarifsContent {
  label: string;
  title: string;
  titleHighlight: string;
  description: string;
  unitPrices: TarifItem[];
  packs: TarifPack[];
  packDecouverte: { label: string; price: string; detail: string };
  abonnements: Abonnement[];
  seniorNote: string;
}

export interface PlanningSlot {
  time: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

export interface CourseDescription {
  name: string;
  description: string;
}

export interface PlanningContent {
  label: string;
  title: string;
  titleHighlight: string;
  description: string;
  schedule: PlanningSlot[];
  courses: CourseDescription[];
}

export const tarifsContent: TarifsContent = {
  label: "Nos tarifs",
  title: "Des formules",
  titleHighlight: "adaptées à vos envies",
  description:
    "Choisissez la formule qui vous correspond : à la séance, en pack ou en abonnement mensuel.",
  unitPrices: [
    { label: "Séance à l'unité", price: "28 €" },
    { label: "Tarif étudiant", price: "24 €", detail: "sur présentation d'un justificatif" },
  ],
  packs: [
    { label: "Pack 5 séances", price: "130 €", perSession: "soit 26 € la séance" },
    { label: "Pack 10 séances", price: "240 €", perSession: "soit 24 € la séance" },
    { label: "Pack 20 séances", price: "450 €", perSession: "soit 22,50 € la séance" },
  ],
  packDecouverte: {
    label: "Pack découverte",
    price: "65 €",
    detail: "3 séances · Valable 1 mois",
  },
  abonnements: [
    { name: "Essentielle", price: "99 €", detail: "4 cours / mois" },
    { name: "Signature Maison 05", price: "179 €", detail: "8 cours / mois" },
    { name: "Illimité", price: "249 €", detail: "cours illimités" },
  ],
  seniorNote: "Tarif Sénior : 24 € la séance · réservé au 60 ans et +",
};

export const planningContent: PlanningContent = {
  label: "Planning",
  title: "Trouvez votre",
  titleHighlight: "créneau",
  description:
    "Du lundi au samedi, des cours tout au long de la journée pour s'adapter à votre rythme.",
  schedule: [
    {
      time: "07:30 - 08:20",
      monday: "Flow",
      tuesday: "Strong",
      wednesday: "Pulse",
      thursday: "",
      friday: "Method 05",
      saturday: "FERMÉ",
      sunday: "FERMÉ",
    },
    {
      time: "08:30 - 09:20",
      monday: "Strong",
      tuesday: "Method 05",
      wednesday: "Flow",
      thursday: "",
      friday: "Pulse",
      saturday: "Pulse",
      sunday: "Flow",
    },
    {
      time: "09:30 - 10:20",
      monday: "Senior",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
      saturday: "Method 05",
      sunday: "Strong",
    },
    {
      time: "10:30 - 11:20",
      monday: "",
      tuesday: "Senior",
      wednesday: "",
      thursday: "Senior",
      friday: "",
      saturday: "Strong",
      sunday: "Pulse",
    },
    {
      time: "12:20 - 13:10",
      monday: "Method 05",
      tuesday: "Pulse",
      wednesday: "Strong",
      thursday: "Method 05",
      friday: "Strong",
      saturday: "Method 05",
      sunday: "Method 05",
    },
    {
      time: "16:30 - 17:20",
      monday: "Pulse",
      tuesday: "Flow",
      wednesday: "Strong",
      thursday: "Method 05",
      friday: "Flow",
      saturday: "FERMÉ",
      sunday: "",
    },
    {
      time: "17:30 - 18:20",
      monday: "Strong",
      tuesday: "Method 05",
      wednesday: "Pulse",
      thursday: "Flow",
      friday: "Strong",
      saturday: "FERMÉ",
      sunday: "",
    },
    {
      time: "18:30 - 19:20",
      monday: "Method 05",
      tuesday: "Pulse",
      wednesday: "Flow",
      thursday: "Strong",
      friday: "Pulse",
      saturday: "FERMÉ",
      sunday: "",
    },
    {
      time: "19:30 - 20:20",
      monday: "Flow",
      tuesday: "Strong",
      wednesday: "Method 05",
      thursday: "Pulse",
      friday: "Method 05",
      saturday: "FERMÉ",
      sunday: "",
    },
  ],
  courses: [
    {
      name: "Reformer Flow",
      description:
        "Cours d'intensité modérée, idéal pour découvrir ou approfondir la méthode Pilates sur Reformer. Mouvements fluides et contrôlés pour synchroniser respiration et exercices, améliorer posture, gainage, mobilité et conscience corporelle.",
    },
    {
      name: "Reformer Strong",
      description:
        "Cours dynamique et intense pour tonifier l'ensemble du corps. Enchaînements rythmés sollicitant bras, abdominaux et jambes pour développer force, endurance et définition musculaire.",
    },
    {
      name: "Reformer Pulse",
      description:
        "Le plus intense de la gamme. Pilates contemporain associant Reformer, exercices cardio dynamiques, sauts sur Jumpboard et petits accessoires (haltères) pour repousser vos limites. Endurance, force et dépense énergétique maximale.",
    },
    {
      name: "Reformer Method 05",
      description:
        "Le cours emblématique du studio. Entièrement dédié au renforcement des fessiers et de la sangle abdominale, combinant Pilates contemporain et petits accessoires (haltères, élastiques, ballon). Sculpter la silhouette et développer des fessiers plus forts.",
    },
    {
      name: "Reformer Senior",
      description:
        "Conçu pour entretenir mobilité, force et équilibre en toute sécurité. Exercices doux et adaptés pour renforcer progressivement la musculature, améliorer la souplesse et gagner en aisance dans les gestes du quotidien.",
    },
  ],
};

export const footerContent: FooterContent = {
  description:
    "Studio de Pilates Reformer à Bourg-en-Bresse. Une parenthèse pensée pour vous — move with intention.",
  nav: [
    { href: "#maison", label: "La Maison" },
    { href: "#revenir", label: "Revenir à soi" },
    { href: "#confiance", label: "Confiance" },
    { href: "#partage", label: "Partage" },
    { href: "#disciplines", label: "Disciplines" },
    { href: "#tarifs", label: "Tarifs & Planning" },
  ],
  legal: [
    { href: "/mentions-legales", label: "Mentions légales" },
    { href: "/politique-de-confidentialite", label: "Politique de confidentialité" },
    { href: "/politique-cookies", label: "Politique cookies" },
  ],
  contact: {
    email: "Manon.jacquier@pilatesmaison05.com",
    phone: { label: "06 01 05 21 60", href: "tel:+33601052160" },
    location: "Bourg-en-Bresse",
  },
};

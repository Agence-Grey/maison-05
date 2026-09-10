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
    src: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&q=80&w=1400",
    alt: "Séance de Pilates Reformer chez Maison 05",
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

export const footerContent: FooterContent = {
  description:
    "Studio de Pilates Reformer à Bourg-en-Bresse. Une parenthèse pensée pour vous — move with intention.",
  nav: [
    { href: "#maison", label: "La Maison" },
    { href: "#revenir", label: "Revenir à soi" },
    { href: "#confiance", label: "Confiance" },
    { href: "#partage", label: "Partage" },
    { href: "#disciplines", label: "Disciplines" },
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

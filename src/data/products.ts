import { Product, Category } from "@/types";

export const categories: Category[] = [
  {
    id: "bio-hrana",
    name: "Bio Hrana",
    description: "Organska hrana iz Bosne i Hercegovine",
    icon: "🌾",
    slug: "bio-hrana",
  },
  {
    id: "eko-kozmetika",
    name: "Eko Kozmetika",
    description: "Prirodna kozmetika bez štetnih hemikalija",
    icon: "🧴",
    slug: "eko-kozmetika",
  },
  {
    id: "zelena-energija",
    name: "Zelena Energija",
    description: "Solarne ploče, punjači i eko gadžeti",
    icon: "☀️",
    slug: "zelena-energija",
  },
  {
    id: "eko-dom",
    name: "Eko Dom",
    description: "Održivi proizvodi za vaš dom",
    icon: "🏡",
    slug: "eko-dom",
  },
  {
    id: "outdoor",
    name: "Outdoor & Priroda",
    description: "Oprema za boravak u prirodi",
    icon: "🏔️",
    slug: "outdoor",
  },
];

export const products: Product[] = [
  // Bio Hrana
  {
    id: "1",
    name: "Bosanski Planinski Med",
    description:
      "100% prirodni med iz planinskih područja Bosne. Bogat antioksidansima i mineralima. Tradicionalna proizvodnja bez aditiva.",
    price: 25,
    originalPrice: 30,
    image: "/images/products/med.jpg",
    category: "bio-hrana",
    affiliateUrl: "#",
    badge: "Bestseler",
    rating: 4.9,
    reviews: 234,
  },
  {
    id: "2",
    name: "Organski Ajvar",
    description:
      "Domaći ajvar od crvene paprike uzgojene bez pesticida. Tradicionalni recept iz Hercegovine.",
    price: 12,
    image: "/images/products/ajvar.jpg",
    category: "bio-hrana",
    affiliateUrl: "#",
    rating: 4.7,
    reviews: 156,
  },
  {
    id: "3",
    name: "Bio Šljivovica 0.7L",
    description:
      "Premium rakija od organskih šljiva. Destilirana tradicionalnom metodom u bakrenim kotlovima.",
    price: 45,
    originalPrice: 55,
    image: "/images/products/sljivovica.jpg",
    category: "bio-hrana",
    affiliateUrl: "#",
    badge: "Popust",
    rating: 4.8,
    reviews: 89,
  },

  // Eko Kozmetika
  {
    id: "4",
    name: "Lavanda Krema za Lice",
    description:
      "Hidratantna krema sa ekstraktom bosanske lavande. Bez parabena i silikona. Pogodna za osjetljivu kožu.",
    price: 18,
    image: "/images/products/lavanda-krema.jpg",
    category: "eko-kozmetika",
    affiliateUrl: "#",
    rating: 4.6,
    reviews: 78,
  },
  {
    id: "5",
    name: "Prirodni Sapun Set (5 kom)",
    description:
      "Ručno pravljeni sapuni sa biljnim ekstraktima. Med, lavanda, kamilica, ruzmarin i maslina.",
    price: 22,
    originalPrice: 28,
    image: "/images/products/sapuni.jpg",
    category: "eko-kozmetika",
    affiliateUrl: "#",
    badge: "Set",
    rating: 4.8,
    reviews: 192,
  },
  {
    id: "6",
    name: "Ulje za Kosu - Arganov Mix",
    description:
      "Hranjivo ulje za kosu sa arganovim uljem i vitaminima. Obnavlja oštećenu kosu.",
    price: 15,
    image: "/images/products/ulje-kosa.jpg",
    category: "eko-kozmetika",
    affiliateUrl: "#",
    rating: 4.5,
    reviews: 64,
  },

  // Zelena Energija
  {
    id: "7",
    name: "Solarni Punjač 20000mAh",
    description:
      "Vodootporni solarni punjač idealan za planinarenje. Dva USB porta, LED lampa. Puni telefon 5-6 puta.",
    price: 55,
    originalPrice: 70,
    image: "/images/products/solarni-punjac.jpg",
    category: "zelena-energija",
    affiliateUrl: "#",
    badge: "Preporučeno",
    rating: 4.4,
    reviews: 312,
  },
  {
    id: "8",
    name: "Mini Solarna Lampa",
    description:
      "Kompaktna solarna lampa za kampovanje i hitne situacije. 3 režima svjetlosti, do 12 sati rada.",
    price: 18,
    image: "/images/products/solarna-lampa.jpg",
    category: "zelena-energija",
    affiliateUrl: "#",
    rating: 4.3,
    reviews: 87,
  },

  // Eko Dom
  {
    id: "9",
    name: "Bambusove Četkice za Zube (4 kom)",
    description:
      "Biorazgradive četkice od bambusa. Set za cijelu porodicu. Srednje tvrde čekinje.",
    price: 8,
    image: "/images/products/bambusove-cetkice.jpg",
    category: "eko-dom",
    affiliateUrl: "#",
    badge: "Eko izbor",
    rating: 4.7,
    reviews: 423,
  },
  {
    id: "10",
    name: "Platnene Vrećice za Kupovinu (3 kom)",
    description:
      "Izdržljive platnene vrećice za zamjenu plastičnih kesa. Pranje na 30°C.",
    price: 12,
    image: "/images/products/platnene-vrecice.jpg",
    category: "eko-dom",
    affiliateUrl: "#",
    rating: 4.6,
    reviews: 198,
  },
  {
    id: "11",
    name: "Beeswax Omotači (Set 6 kom)",
    description:
      "Višekratni omotači od pčelinjeg voska za čuvanje hrane. Zamjena za plastičnu foliju.",
    price: 16,
    originalPrice: 20,
    image: "/images/products/beeswax.jpg",
    category: "eko-dom",
    affiliateUrl: "#",
    rating: 4.5,
    reviews: 145,
  },

  // Outdoor
  {
    id: "12",
    name: "Eko Boca za Vodu 750ml",
    description:
      "Nerđajući čelik, bez BPA. Drži piće hladno 24h ili toplo 12h. Idealna za planinarenje.",
    price: 28,
    image: "/images/products/boca-voda.jpg",
    category: "outdoor",
    affiliateUrl: "#",
    rating: 4.8,
    reviews: 267,
  },
  {
    id: "13",
    name: "Kompas i Mapa BiH Parkova",
    description:
      "Profesionalni kompas + detaljne mape nacionalnih parkova BiH (Sutjeska, Una, Kozara).",
    price: 22,
    image: "/images/products/kompas-mapa.jpg",
    category: "outdoor",
    affiliateUrl: "#",
    badge: "Novo",
    rating: 4.4,
    reviews: 56,
  },
  {
    id: "14",
    name: "Planinarki Ruksak 40L - Reciklirani Materijal",
    description:
      "Ruksak napravljen od recikliranih PET boca. Vodootporan, ergonomski dizajn.",
    price: 85,
    originalPrice: 110,
    image: "/images/products/ruksak.jpg",
    category: "outdoor",
    affiliateUrl: "#",
    badge: "Eko Hero",
    rating: 4.7,
    reviews: 134,
  },
];

export const featuredProducts = products.filter((p) =>
  ["1", "7", "9", "14"].includes(p.id)
);

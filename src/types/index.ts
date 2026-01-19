export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  affiliateUrl: string;
  badge?: string;
  rating: number;
  reviews: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  slug: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  locale: string;
  currency: string;
}

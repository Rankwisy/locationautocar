export interface Page {
  id: string;
  slug: string;
  title: string;
  metaTitle?: string;
  metaDescription?: string;
  content: string;
  featuredImage?: string;
  featuredImageAlt?: string;
  publishedAt: string;
  updatedAt: string;
  canonical?: string;
  noindex?: boolean;
  schema?: any;
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  metaTitle?: string;
  metaDescription?: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  featuredImageAlt?: string;
  publishedAt: string;
  updatedAt: string;
  category: string;
  tags: string[];
  author: string;
  canonical?: string;
  noindex?: boolean;
  schema?: any;
}

export interface SiteConfig {
  title: string;
  description: string;
  url: string;
  logo: string;
  favicon: string;
  socialMedia: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  business: {
    name: string;
    type: string;
    location: {
      street: string;
      city: string;
      postalCode: string;
      country: string;
    };
  };
}

export interface NavigationItem {
  label: string;
  url: string;
  children?: NavigationItem[];
}
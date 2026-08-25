export interface Project {
  category: string;
  title: string;
  location: string;
  image: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  tags: string[];
  image: string;
}

export interface ProcessStep {
  step: string;
  phase: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: "search" | "draft" | "building" | "handshake";
}

export interface Stat {
  value: string;
  label: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

export interface BlogPost {
  category: string;
  title: string;
  excerpt: string;
  image: string;
  href: string;
}

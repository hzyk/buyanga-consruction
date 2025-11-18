import type { ElementType } from 'react';

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: ElementType;
  bannerImage: string;
  process: { step: string; description: string }[];
  benefits: string[];
  projectImages: string[];
}

export interface Project {
  id: number;
  title: string;
  category: 'Residential' | 'Commercial' | 'Civil Works';
  description: string;
  scope: string;
  images: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  projectType: string;
}

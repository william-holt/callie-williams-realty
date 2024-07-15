import type { PortableTextBlock } from 'next-sanity'
import type { Image } from 'sanity'
import Testimonial from '@/sanity/schemas/objects/testimonial'

export interface MenuItem {
  _type: string
  slug?: string
  title?: string
}

export interface MilestoneItem {
  description?: string
  duration?: {
    start?: string
    end?: string
  }
  image?: Image
  tags?: string[]
  title?: string
}

export interface ShowcaseProject {
  _type: string
  coverImage?: Image
  overview?: PortableTextBlock[]
  slug?: string
  tags?: string[]
  title?: string
}

export interface Service {
  _type: string
  image?: Image
  title?: string
  description?: string
  link?: string
}

export interface Testimonial {
  _type: string
  name?: string
  review?: string
  date?: string
}

// Page payloads

export interface HomePagePayload {
  footer?: PortableTextBlock[]
  overview?: PortableTextBlock[]
  title?: string
  heroImage?: any
  subtitle?: string
  paragraph?: string
  servicesTitle?: string
  services?: Service[]
  propertiesTitle?: string
  testimonialsTitle?: string
  aboutTitle?: string
  aboutText?: string
  testimonials?: Testimonial[]
}

export interface PagePayload {
  body?: PortableTextBlock[]
  name?: string
  overview?: PortableTextBlock[]
  title?: string
  slug?: string
}

export interface ProjectPayload {
  client?: string
  coverImage?: Image
  description?: PortableTextBlock[]
  duration?: {
    start?: string
    end?: string
  }
  overview?: PortableTextBlock[]
  site?: string
  slug: string
  tags?: string[]
  title?: string
}

export interface SettingsPayload {
  footer?: PortableTextBlock[]
  menuItems?: MenuItem[]
  ogImage?: Image
}

import { groq } from 'next-sanity'

export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id,
    overview,
    services[]->{
      _type,
      image,
      description,
      link,
      title,
    },
    testimonials[]->{
      _type,
      name,
      review,
      date,
    },
    title,
    heroImage,
    subtitle,
    paragraph,
    servicesTitle,
    propertiesTitle,
    testimonialsTitle,
    aboutTitle,
    aboutText
  }
`

export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    body,
    overview,
    title,
    "slug": slug.current,
  }
`

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    client,
    coverImage,
    description,
    duration,
    overview,
    site,
    "slug": slug.current,
    tags,
    title,
  }
`

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    footer,
    menuItems[]->{
      _type,
      "slug": slug.current,
      title
    },
    ogImage,
  }
`

export const allListingsQuery = groq`
  *[_type == "listing"][0]{
      _id,
      name,
      slug,
      status,
      description,
      location,
      price,
      squareFootage,
      bedroomCount,
      bathroomCount
      constructionDate,
      tags,
      features,
      overview,
      images,
      testimonials
    }
`

export const allForSaleListingsQuery = groq`
  *[_type == "listing" && status == 'Listed'][0]{
      _id,
      name,
      slug,
      status,
      description,
      location,
      price,
      squareFootage,
      bedroomCount,
      bathroomCount
      constructionDate,
      tags,
      features,
      overview,
      images,
      testimonials
    }
`

export const allClosedListingsQuery = groq`
  *[_type == "listing" && status == 'Sold'][0]{
      _id,
      name,
      slug,
      status,
      description,
      location,
      price,
      squareFootage,
      bedroomCount,
      bathroomCount
      constructionDate,
      tags,
      features,
      overview,
      images,
      testimonials
    }
`

export const allReviewsQuery = groq`
  *[_type == "testimonials"][0]{
      _id,
      name,
      review,
      date,
      description
    }
`

export const listingBySlugQuery = groq`
  *[_type == "listing" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    status,
    description,
    location,
    price,
    squareFootage,
    bedroomCount,
    bathroomCount
    constructionDate,
    tags,
    features,
    overview,
    images,
    testimonials
    "slug": slug.current,
  }
`
import { groq } from 'next-sanity'

export const homePageQuery = groq`{
    "homeData": *[_type == "home"][0]{
      _id,
      overview,
      services[],
      title,
      heroImage,
      subtitle,
      paragraph,
      servicesTitle,
      propertiesTitle,
      testimonialsTitle,
      aboutTitle,
      aboutText,
    },
    "propertyData": *[_type == "listing"][],
    "featuredPropertyData": *[_type == "featuredListing"][]
  }`

export const pagesBySlugQuery = groq`{
  "pageData": *[_type == "page" && slug.current == $slug][0] {
    _id,
    body,
    overview,
    title,
    heroImage,
    "slug": slug.current,
  },
  "featuredPropertyData": *[_type == "featuredListing"][]
}`

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

export const allListingsPageQuery = groq`{
    "allListingsMetadata": *[_type == "allListingsMetaData"][0]{
      _id,
      overview,
      header,
      heroImage,
      subtitle,
    },
    "listingData": *[_type == "listing"][]
  }`

export const allListingsQuery = groq`
  *[_type == "listing"][]
`

export const allPastDealsPageQuery = groq`{
    "pastDealsMetadata": *[_type == "pastDealsMetaData"][0]{
      _id,
      overview,
      header,
      heroImage,
      subtitle,
    },
    "listingData": *[_type == "listing"][]
  }`

export const allReviewsQuery = groq`
  *[_type == "listing" && listing.testimonial != null][]{
    name,
    review,
    date
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
    bathroomCount,
    constructionDate,
    tags,
    features,
    overview,
    images,
    testimonials,
    "slug": slug.current,
  }
`
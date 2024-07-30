import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Image from 'next/image'
import Link from 'next/link'

import { HomePageAbout } from '@/components/pages/home/HomePageAbout'
import { HomePageFeaturedProperties } from '@/components/pages/home/HomePageFeaturedProperties'
import { HomePageHero } from '@/components/pages/home/HomePageHero'
import { HomePageServiceSection } from '@/components/pages/home/HomePageServiceSection'
import { Subscribe } from '@/components/shared/Subscribe'
import { Testimonials } from '@/components/shared/Testimonials'
import type { HomePagePayload } from '@/types'

export interface HomePageProps {
  data: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
  initial?: any
  testimonials?: any
}

export function HomePage({
  data,
  encodeDataAttribute,
  initial,
  testimonials,
}: any) {
  // Default to an empty object to allow previews on non-existent documents
  const { homeData, propertyData, featuredPropertyData } = data
  const {
    overview = [],
    services = [],
    title = '',
    numberOfReviews,
    subtitle,
    paragraph,
    heroImage,
    aboutTitle,
    propertiesTitle,
    aboutText,
    testimonialsTitle,
    testimonialsDescription, // need to add this
    servicesTitle,
    servicesParagraph, // need to add this
    footer,
  } = homeData ?? {}

  return (
    <>
      {/* Header */}
      <HomePageHero
        numberOfReviews={16}
        title={subtitle}
        description={paragraph}
        coverImage={heroImage}
      />
      <HomePageServiceSection
        title={servicesTitle}
        description={servicesParagraph}
        services={services}
      />
      <HomePageFeaturedProperties
        title={propertiesTitle}
        property={propertyData}
      />
      <Testimonials
        title={testimonialsTitle}
        description={testimonialsDescription}
        propertyData={propertyData}
      />
      <HomePageAbout title={aboutTitle} description={aboutText} />
      <Subscribe />
    </>
  )
}

export default HomePage

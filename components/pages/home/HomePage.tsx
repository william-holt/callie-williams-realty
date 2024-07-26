import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Image from 'next/image'
import Link from 'next/link'

import { HomePageHero } from '@/components/pages/home/HomePageHero'
import { HomePageServiceSection } from '@/components/pages/home/HomePageServiceSection'
import { HomePageFeaturedProperties } from '@/components/pages/home/HomePageFeaturedProperties'
import { Testimonials } from '@/components/shared/Testimonials'
import { HomePageAbout } from '@/components/pages/home/HomePageAbout'

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
  const { homeData, propertyData } = data
  const {
    overview = [],
    services = [],
    title = '',
    aboutTitle,
    propertiesTitle,
    aboutText,
    testimonialsTitle,
    testimonialsDescription, // need to add this
    servicesTitle,
    servicesParagraph, // need to add this
    footer,
    paragraph,
    subtitle,
    heroImage,
  } = homeData ?? {}

  return (
    <div className="">
      {/* Header */}
      <HomePageHero
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
      <div className="w-full flex items-center justify-center py-24">
        <code>subscribe_to_newsletter</code>
      </div>
    </div>
  )
}

export default HomePage

import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Image from 'next/image'
import Link from 'next/link'

import { HomePageHero } from '@/components/pages/home/HomePageHero'
import { HomePageServiceSection } from '@/components/pages/home/HomePageServiceSection'
import { Testimonials } from '@/components/shared/Testimonials'
import { resolveHref } from '@/sanity/lib/utils'
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
    servicesTitle,
    servicesParagraph,
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

      {propertiesTitle && <div>{propertiesTitle}</div>}
      {testimonialsTitle && <div>{testimonialsTitle}</div>}
      {aboutTitle && <div>{aboutTitle}</div>}
      {aboutText && <div>{aboutText}</div>}

      <Testimonials propertyData={propertyData} />
    </div>
  )
}

export default HomePage

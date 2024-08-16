import type { EncodeDataAttributeCallback } from '@sanity/react-loader'

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

export function HomePage({ data, encodeDataAttribute, initial }: any) {
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
    propertiesTitle,
    aboutImage,
    aboutTitle,
    aboutText,
    testimonialsTitle,
    testimonialsText,
    servicesTitle,
    servicesBody,
    footer,
  } = homeData ?? {}

  const testimonials = propertyData
    .filter((property: any) => property.testimonials?.length > 0)
    .map((filteredTestimonial: any) => {
      if (filteredTestimonial.testimonials.length > 1) {
        const testimonials = filteredTestimonial.testimonials.map(
          (testimonial: any) => testimonial,
        )
        return testimonials.length > 0 ? testimonials : null
      } else {
        return {
          ...filteredTestimonial.testimonials[0],
        }
      }
    })

  console.log(testimonials)

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
        description={servicesBody}
        services={services}
        propertyData={propertyData}
      />
      <HomePageFeaturedProperties
        title={propertiesTitle}
        properties={featuredPropertyData}
      />
      <Testimonials
        title={testimonialsTitle}
        description={testimonialsText}
        testimonials={testimonials}
      />
      <HomePageAbout
        image={aboutImage}
        title={aboutTitle}
        description={aboutText}
      />
      <Subscribe />
    </>
  )
}

export default HomePage

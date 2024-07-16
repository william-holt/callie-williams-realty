import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import { Header } from '@/components/shared/Header'
import ImageBox from '@/components/shared/ImageBox'
import { resolveHref } from '@/sanity/lib/utils'
import type { HomePagePayload } from '@/types'
import { Testimonials } from '@/components/shared/Testimonials'

export interface HomePageProps {
  data: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
  initial?: any
  testimonials?: any
}

export function HomePage({ data, encodeDataAttribute, initial, testimonials }: any) {
  // Default to an empty object to allow previews on non-existent documents
  const {homeData, propertyData} = data;
  const { overview = [], services = [], title = '', aboutTitle, propertiesTitle, aboutText, testimonialsTitle, servicesTitle, footer, paragraph, subtitle, heroImage } = homeData ?? {}
  console.log('heroImage', heroImage);

  return (
    <div className="space-y-20 flex flex-col">
      {/* Header */}
      {title && <Header centered title={title} description={overview} />}
      {heroImage && (
        <div className="max-w-80vw">
          <ImageBox data-sanity={encodeDataAttribute?.('coverImage')}
                                     image={heroImage}
                                     alt=""/>
        </div>
      )}
      {subtitle && <div>{subtitle}</div>}
      {paragraph && <div>{paragraph}</div>}
      {servicesTitle && <div>{servicesTitle}</div>}

      {services?.length > 0 && (
        <div className="mt-8 flex flex-row flex-nowrap">
          {services.map((service, key) => {
            return (
              <div key={'service' + key} className="flex flex-col">
                <div>{service.title}</div>
                <div>{service.description}</div>
              </div>
            )
          })}
        </div>
      )}

      {propertiesTitle && <div>{propertiesTitle}</div>}
      {testimonialsTitle && <div>{testimonialsTitle}</div>}
      {aboutTitle && <div>{aboutTitle}</div>}
      {aboutText && <div>{aboutText}</div>}

      <Testimonials propertyData={propertyData} />
    </div>
  )
}

export default HomePage

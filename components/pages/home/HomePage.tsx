import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import { ProjectListItem } from '@/components/pages/home/ProjectListItem'
import { Header } from '@/components/shared/Header'
import { resolveHref } from '@/sanity/lib/utils'
import type { HomePagePayload } from '@/types'
import ImageBox from '@/components/shared/ImageBox'

export interface HomePageProps {
  data: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { overview = [], services = [], title = '', aboutTitle, propertiesTitle, aboutText, testimonialsTitle, servicesTitle, footer, paragraph, subtitle, heroImage } = data ?? {}
  console.log(123, data);

  return (
    <div className="space-y-20">
      {/* Header */}
      {title && <Header centered title={title} description={overview} />}
      {heroImage && <div><ImageBox data-sanity={encodeDataAttribute?.('coverImage')}
                                   image={heroImage}
                                   alt=""/></div>}
      {subtitle && <div>{subtitle}</div>}
      {paragraph && <div>{paragraph}</div>}
      {servicesTitle && <div>{servicesTitle}</div>}

      {services && services.length > 0 && (
        <div className="mx-auto max-w-[100rem] rounded-md border">
          {services.map((service, key) => {
            const href = resolveHref(service?._type, service?.link)
            if (!href) {
              return null
            }
            return (
              <Link
                key={key}
                href={''}
                data-sanity={encodeDataAttribute?.([
                  'services',
                  key,
                  'link',
                ])}
              >
                {service.title}
              </Link>
            )
          })}
        </div>
      )}

      {propertiesTitle && <div>{propertiesTitle}</div>}
      {testimonialsTitle && <div>{testimonialsTitle}</div>}
      {aboutTitle && <div>{aboutTitle}</div>}
      {aboutText && <div>{aboutText}</div>}
    </div>
  )
}

export default HomePage

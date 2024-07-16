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

export function HomePage({ data, encodeDataAttribute, initial, testimonials }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  // const { overview = [], services = [], title = '', aboutTitle, propertiesTitle, aboutText, testimonialsTitle, servicesTitle, footer, paragraph, subtitle, heroImage } = data ?? {}
  console.log('testimonials', testimonials);

  return (
    <div className="space-y-20">
      {/* Header */}
      {/*{title && <Header centered title={title} description={overview} />}*/}
      {/*{heroImage && <div><ImageBox data-sanity={encodeDataAttribute?.('coverImage')}*/}
      {/*                             image={heroImage}*/}
      {/*                             alt=""/></div>}*/}
      {/*{subtitle && <div>{subtitle}</div>}*/}
      {/*{paragraph && <div>{paragraph}</div>}*/}
      {/*{servicesTitle && <div>{servicesTitle}</div>}*/}

      {/*{services && services.length > 0 && (*/}
      {/*  <div className="mx-auto max-w-[100rem] rounded-md border">*/}
      {/*    {services.map((service, key) => {*/}
      {/*      const href = resolveHref(service?._type, service?.link)*/}
      {/*      if (!href) {*/}
      {/*        return null*/}
      {/*      }*/}
      {/*      return (*/}
      {/*        <Link*/}
      {/*          key={key}*/}
      {/*          href={''}*/}
      {/*          data-sanity={encodeDataAttribute?.([*/}
      {/*            'services',*/}
      {/*            key,*/}
      {/*            'link',*/}
      {/*          ])}*/}
      {/*        >*/}
      {/*          {service.title}*/}
      {/*        </Link>*/}
      {/*      )*/}
      {/*    })}*/}
      {/*  </div>*/}
      {/*)}*/}

      {/*{propertiesTitle && <div>{propertiesTitle}</div>}*/}
      {/*{testimonialsTitle && <div>{testimonialsTitle}</div>}*/}
      {/*{aboutTitle && <div>{aboutTitle}</div>}*/}
      {/*{aboutText && <div>{aboutText}</div>}*/}

      <Testimonials initial={initial} />
    </div>
  )
}

export default HomePage

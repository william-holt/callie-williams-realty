import type { PortableTextBlock } from 'next-sanity'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import ImageBox from '@/components/shared/ImageBox'
import type { ShowcaseProperty } from '@/types'

interface propertyProps {
  title: string
  property: ShowcaseProperty
}

export function HomePageFeaturedProperties(props: propertyProps) {
  const { property } = props

  const Arrows = () => {
    return <code>arrows</code>
  }

  return (
    <>
      <section className="w-full bg-secondary-dark pt-12 px-4 pb-24">
        <div className="w-full flex flex-col items-start justify-start flex-wrap md:flex-row">
          <div className="w-full flex flex-row items-center justify-center pb-6">
            <h2 className="w-full roar text-paper-light md:w-2/3">
              {props.title}
            </h2>
            <div className="hidden w-full flex-row items-center justify-end md:flex md:w-1/3">
              <Arrows />
            </div>
          </div>
          <div className="w-full min-h-[300px] bg-secondary-light p-4 rounded-border-lg shadow-lg">
            <code>property</code>
          </div>
          <div className="w-full flex flex-row items-center justify-center py-4 md:hidden">
            <Arrows />
          </div>
        </div>
      </section>
      <div className="h-[250px] bg-primary-light -mt-[200px]" />
    </>
  )
}

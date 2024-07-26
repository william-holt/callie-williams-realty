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
          <div className="w-full min-h-[300px] flex flex-col items-center justify-center bg-secondary-light p-4 rounded-border-lg shadow-lg lg:flex-row lg:items-stretch">
            {/* Thumbnail */}
            <div className="w-full p-1 rounded-border-sm shadow-sm lg:w-1/2 lg:pr-2">
              <div className="w-full h-full min-h-[300px] rounded-border-sm shadow-sm lg:mb-0 bg-secondary" />
            </div>
            {/* Features */}
            <div className="w-full rounded-border-sm shadow-sm lg:w-1/2">
              {/* Details */}
              <div className="w-full p-1">
                <div className="w-full flex flex-col items-start justify-start p-4 rounded-border-sm shadow-sm bg-paper-light sm:flex-row">
                  <ul className="w-full flex flex-col gap-y-2 p-1 sm:w-1/2">
                    <li>
                      <code>detail 1</code>
                    </li>
                    <li>
                      <code>detail 2</code>
                    </li>
                    <li>
                      <code>detail 3</code>
                    </li>
                  </ul>
                  <ul className="w-full flex flex-col gap-y-2 p-1 sm:w-1/2">
                    <li>
                      <code>detail 4</code>
                    </li>
                    <li>
                      <code>detail 5</code>
                    </li>
                    <li>
                      <code>detail 6</code>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Gallery */}
              <div className="w-full flex flex-col items-center justify-center flex-wrap md:flex-row">
                <div className="w-full h-24 p-1 md:h-48 md:w-1/2 lg:h-72">
                  <div className="w-full h-full rounded-border-sm shadow-sm  bg-secondary" />
                </div>
                <div className="w-full flex flex-row flex-wrap md:w-1/2">
                  <div className="w-1/3 h-24 p-1 md:w-full lg:h-36">
                    <div className="w-full h-full rounded-border-sm shadow-sm  bg-secondary" />
                  </div>
                  <div className="w-1/3 h-24 p-1 md:w-1/2 lg:h-36">
                    <div className="w-full h-full rounded-border-sm shadow-sm  bg-secondary" />
                  </div>
                  <div className="w-1/3 h-24 p-1 md:w-1/2 lg:h-36">
                    <div className="w-full h-full rounded-border-sm shadow-sm bg-secondary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row items-center justify-center py-4 md:hidden">
            <Arrows />
          </div>
        </div>
      </section>
      <div className="h-[250px] bg-paper-light -mt-[300px] md:-mt-[200px]" />
    </>
  )
}

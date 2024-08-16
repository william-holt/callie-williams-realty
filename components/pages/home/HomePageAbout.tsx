import Link from 'next/link'

import { Button } from '@/components/shared/Button'
import type { ShowcaseProperty } from '@/types'

import { urlForImage } from '@/sanity/lib/utils'

interface propertyProps {
  image?: any
  title?: string
  description?: string
}

export function HomePageAbout(props: propertyProps) {
  const { image, title, description } = props

  const imageUrl = urlForImage(image)?.height(500).width(500).fit('crop').url()

  return (
    <section className="w-full bg-secondary py-24 lg:px-8">
      <div className="w-full max-w-xl flex flex-col items-center justify-start flex-wrap mx-auto px-4 sm:items-start lg:max-w-screen-xl lg:flex-row">
        <div
          className="w-[200px] h-[200px] rounded-full lg:w-[400px] lg:h-[400px] lg:mr-4"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center left',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div className="w-full text-center py-2 sm:flex-1 sm:text-left">
          <h2 className="hollar text-paper-light pb-2">{title}</h2>
          <p className="talk text-paper-light pb-4">{description}</p>
          <Link href="/about">
            <Button color="paper" size="md" variant="solid">
              Read More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

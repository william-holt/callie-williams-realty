import { CustomPortableText } from '@/components/shared/CustomPortableText'

import { urlForImage } from '@/sanity/lib/utils'

interface HomePageHeroProps {
  description?: any[]
  title?: string
  coverImage?: any
}
export function HomePageHero(props: HomePageHeroProps) {
  const { title, description = false } = props
  if (!description && !title) {
    return null
  }

  const imageUrl = urlForImage(props.coverImage)
    ?.height(2000)
    .width(3500)
    .fit('crop')
    .url()

  return (
    <section
      className="relative -top-[125px] left-0 w-full h-screen min-h-[600px] flex flex-col items-center justify-center -mb-[125px]"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-secondary-dark opacity-50" />
      <div className="relative w-full max-w-screen-2xl h-screen min-h-[600px] flex flex-col items-center justify-center mx-auto">
        <div className="absolute bottom-0 w-full h-full flex flex-col items-start justify-between pt-36 px-4 pb-12">
          {/* Top */}
          <div className="w-full flex flex-col items-start justify-start sm:flex-row sm:justify-between">
            {/* Zillow Rating */}
            <div>
              <code>zillow_rating</code>
            </div>
            {/* Social Links */}
            <div>
              <code>social_links</code>
            </div>
          </div>
          {/* Bottom */}
          <div className="w-full">
            {/* Logos */}
            <div className="pb-4">
              <code>logos</code>
            </div>
            {/* Title */}
            <h1 className="roar text-paper-light pb-2">{title}</h1>
            {/* Description */}
            <p className="talk text-paper-light pb-4">{description}</p>
            {/* Subscribe Bar */}
            <div className="w-full">
              <code>subscribe_bar</code>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

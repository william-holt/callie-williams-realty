import { urlForImage } from '@/sanity/lib/utils'

interface ListingsHeroProps {
  coverImage?: any
}

export function ListingsHero(props: ListingsHeroProps) {
  const { coverImage = false } = props
  const imageUrl = urlForImage(coverImage)
    ?.height(2000)
    .width(3500)
    .fit('crop')
    .url()

  return (
    <section
      className="relative -top-[100px] left-0 w-full h-[40vh] min-h-[400px] flex flex-col items-center justify-center -mb-[100px] md:h-[50vh] lg:h-[55vh]"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-ink-dark via-transparent to-secondary" />
    </section>
  )
}

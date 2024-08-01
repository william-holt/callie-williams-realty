import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { urlForImage } from '@/sanity/lib/utils'

interface HeaderProps {
  description?: any[]
  title?: string
  coverImage?: any
}
export function Header(props: HeaderProps) {
  const { title, description, coverImage = false } = props

  const imageUrl = urlForImage(coverImage)
    ?.height(2000)
    .width(3500)
    .fit('crop')
    .url()

  if (!description && !title) {
    return null
  }
  return (
    <section
      className="relative -top-[100px] left-0 w-full h-fit min-h-screen flex flex-col items-center justify-center -mb-[100px]"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-ink-dark opacity-60" />
      <div className="w-full min-h-screen max-w-screen-2xl flex items-end justify-end pb-24 px-6">
        <div className="w-full z-10 max-w-2xl bg-paper-light p-6 rounded-border-lg shadow-lg">
          {/* Title */}
          {title && <div className="hollar pb-2">{title}</div>}
          {/* Description */}
          {description && (
            <div className="talk pb-6">
              <CustomPortableText value={description} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

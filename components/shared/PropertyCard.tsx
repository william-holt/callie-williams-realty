import { CustomPortableText } from '@/components/shared/CustomPortableText'

interface HeaderProps {
  centered?: boolean
  description?: any[]
  title?: string
}
export function PropertyCard(props: HeaderProps) {
  const { title, description, centered = false } = props
  if (!description && !title) {
    return null
  }
  return (
    <div className={`${centered ? 'text-center' : ''}`}>
      {/* Title */}
      {title && (
        <div className="text-3xl font-extrabold md:text-5xl">{title}</div>
      )}
      {/* Description */}
      {description && (
        <div className="mt-4 font-serif text-xl text-gray-600 md:text-2xl">
          <CustomPortableText value={description} />
        </div>
      )}
    </div>
  )
}

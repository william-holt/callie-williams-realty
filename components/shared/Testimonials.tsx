
interface TestimonialProps {
  centered?: boolean
  description?: any[]
  title?: string
  testimonials?: any[]
}
export async function Testimonials(props: TestimonialProps) {
  const { testimonials } = props

  if (!testimonials) {
    return null
  }
  console.log('testi', testimonials)
  return (
    <div>testimonials</div>
    // <div className={`${centered ? 'text-center' : ''}`}>
    //   {/* Title */}
    //   {title && (
    //     <div className="text-3xl font-extrabold md:text-5xl">
    //       {title}
    //     </div>
    //   )}
    //   {/* Description */}
    //   {description && (
    //     <div className="mt-4 font-serif text-xl text-gray-600 md:text-2xl">
    //       <CustomPortableText value={description} />
    //     </div>
    //   )}
    // </div>
  )
}

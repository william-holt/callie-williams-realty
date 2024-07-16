'use client'
import { allReviewsQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'

interface TestimonialProps {
  centered?: boolean
  description?: any[]
  title?: string
  testimonials?: any[]
  initial?: any
}
export function Testimonials(props: TestimonialProps) {
  const { initial } = props

  const { data: testimonials } = useQuery<any | null>(
    allReviewsQuery,
    {},
    { initial },
  )
  console.log('testimonials', testimonials);

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

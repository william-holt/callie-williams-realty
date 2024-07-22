import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import Link from 'next/link'

import { HomePage } from '@/components/pages/home/HomePage'
import { studioUrl } from '@/sanity/lib/api'
import { loadHomePage, loadProperties } from '@/sanity/loader/loadQuery'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
// const HomePagePreview = dynamic(
//   () => import('@/components/pages/home/HomePagePreview'),
// )

export default async function TestimonialsRoute() {
  const initial = await loadProperties()
  const { data } = initial;

  const testimonials = data.filter((property: any) => property.testimonials?.length > 0).map((filteredTestimonial: any) => {
    if (filteredTestimonial.testimonials.length > 1) {
      const testimonials = filteredTestimonial.testimonials.map((testimonial: any) => testimonial);
      return testimonials.length > 0 ? testimonials : null;
    } else {
      return {
        ...filteredTestimonial.testimonials[0]
      }
    }
  });
  // if (draftMode().isEnabled) {
  //   return <HomePagePreview initial={initial} />
  // }

  return (
    <>
      <div>testimonials</div>

      {testimonials.length > 0 && (
        <div className="flex flex-row flex-wrap">
          {testimonials.map((testimonial: any, index: number) => (
            <div key={'testimonial' + index} className="p-2 m-2 border-black border-2">
              <div>{testimonial.name}</div>
              <div>{testimonial.review}</div>
              <div>{testimonial.date}</div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

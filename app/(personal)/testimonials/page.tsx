import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'

import TestimonialsPage from '@/components/pages/testimonials/TestimonialsPage'
import { loadListings } from '@/sanity/loader/loadQuery'
const TestimonialsPagePreview = dynamic(
  () => import('@/components/pages/testimonials/TestimonialsPagePreview'),
)

export default async function TestimonialsRoute() {
  const initial = await loadListings()
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
  if (draftMode().isEnabled) {
    return <TestimonialsPagePreview initial={initial} />
  }

  return <TestimonialsPage data={testimonials} />
}

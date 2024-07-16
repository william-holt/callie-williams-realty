interface TestimonialProps {
  centered?: boolean
  description?: any[]
  title?: string
  testimonials?: any[]
  propertyData?: any
}
export function Testimonials(props: TestimonialProps) {
  const { propertyData } = props;

  if (!propertyData) {
    return null;
  }

  const testimonials = propertyData.filter((property: any) => property.testimonials?.length > 0).map((filteredTestimonial: any) => {
    if (filteredTestimonial.testimonials.length > 1) {
      const testimonials = filteredTestimonial.testimonials.map((testimonial: any) => testimonial);
      return testimonials.length > 0 ? testimonials : null;
    } else {
      return {
        ...filteredTestimonial.testimonials[0]
      }
    }
  });

  return (
    <div>
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
    </div>
  )
}

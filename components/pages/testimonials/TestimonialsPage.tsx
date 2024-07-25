export function TestimonialsPage({data: testimonials}: any) {

  return (
    <div className="space-y-20 flex flex-col">
      <div>Testimonials</div>

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

export default TestimonialsPage

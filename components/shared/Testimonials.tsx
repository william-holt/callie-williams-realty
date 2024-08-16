import {
  FaCircleArrowLeft,
  FaCircleArrowRight,
  FaCircleUser,
} from 'react-icons/fa6'

interface TestimonialProps {
  centered?: boolean
  description?: any[]
  title?: string
  testimonials?: any[]
}
export function Testimonials(props: TestimonialProps) {
  const { testimonials } = props

  if (!testimonials) {
    return null
  }

  const Arrows = () => {
    return (
      <div className="flex space-x-2">
        <FaCircleArrowLeft className="text-tertiary-dark text-4xl transition-all duration-300 ease-in-out cursor-pointer hover:text-accent" />
        <FaCircleArrowRight className="text-tertiary-dark text-4xl transition-all duration-300 ease-in-out cursor-pointer hover:text-accent" />
      </div>
    )
  }

  return (
    <section className="w-full bg-paper-light pt-4 px-4 pb-24 md:px-8">
      <div className="w-full max-w-screen-2xl flex flex-col items-start justify-start flex-wrap mx-auto md:flex-row">
        <div className="w-full flex flex-row items-center justify-center pb-4">
          {props.title && props.description && (
            <div className="w-full">
              <h2 className="w-full hollar text-tertiary-dark pb-4 md:w-2/3">
                {props.title}
              </h2>
              <p className="talk text-tertiary-dark pb-12">
                {props.description}
              </p>
            </div>
          )}
          {testimonials.length > 1 && (
            <div className="hidden w-full flex-row items-center justify-end md:flex md:w-1/3">
              <Arrows />
            </div>
          )}
        </div>
        {testimonials.length > 0 ? (
          <div className="w-full flex flex-row flex-wrap rounded-border-lg border border-tertiary-dark">
            {testimonials.map((testimonial: any, index: number) => (
              <div
                key={'testimonial' + index}
                className="w-full max-w-screen-xl flex flex-col items-start justify-start mx-auto p-4 md:py-12 lg:py-24"
              >
                <div className="w-full flex flex-row items-start justify-start pb-4">
                  <FaCircleUser className="w-12 h-12 sm:w-16 sm:h-16 text-tertiary-dark" />
                  <div className="p-2">
                    <h3 className="shout text-tertiary-dark">
                      {testimonial.name}
                    </h3>
                    <h4 className="whisper text-tertiary-dark">
                      {testimonial.date}
                    </h4>
                  </div>
                </div>
                <p className="w-full talk text-tertiary-dark p-2">
                  {testimonial.review}
                </p>
              </div>
            ))}
          </div>
        ) : (
          'No testimonials to display'
        )}
      </div>
    </section>
  )
}

import { FaCircleArrowLeft, FaCircleArrowRight } from 'react-icons/fa6'

interface TestimonialProps {
  centered?: boolean
  description?: any[]
  title?: string
  testimonials?: any[]
  propertyData?: any
}
export function Testimonials(props: TestimonialProps) {
  const { propertyData } = props

  if (!propertyData) {
    return null
  }

  const testimonials = propertyData
    .filter((property: any) => property.testimonials?.length > 0)
    .map((filteredTestimonial: any) => {
      if (filteredTestimonial.testimonials.length > 1) {
        const testimonials = filteredTestimonial.testimonials.map(
          (testimonial: any) => testimonial,
        )
        return testimonials.length > 0 ? testimonials : null
      } else {
        return {
          ...filteredTestimonial.testimonials[0],
        }
      }
    })

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
          <h2 className="w-full hollar text-tertiary-dark pb-2 md:w-2/3">
            {props.title}
          </h2>
          <p className="talk text-tertiary-dark">{props.description}</p>
          <div className="hidden w-full flex-row items-center justify-end md:flex md:w-1/3">
            <Arrows />
          </div>
        </div>
        {/* {testimonials.length > 0 && ( */}
        <div className="w-full flex flex-row flex-wrap rounded-border-lg border border-tertiary-dark">
          {/* {testimonials.map((testimonial: any, index: number) => ( */}
          <div
            key={'testimonial'} // + index
            className="w-full max-w-screen-xl flex flex-col items-start justify-start mx-auto p-4 md:py-12 lg:py-24"
          >
            <div className="w-full flex flex-row items-start justify-start pb-4">
              <div className="w-20 h-20 bg-tertiary-dark mr-2 rounded-full" />
              <div className="p-2">
                <h3 className="shout text-tertiary-dark">Lily</h3>
                <h4 className="whisper text-tertiary-dark">3/5/2024</h4>
              </div>
            </div>
            <p className="w-full talk text-tertiary-dark p-2">
              We met Callie at a house showing that we found through Zillow.
              With such short notice Callie was there on time and with lots of
              information about the house. We hit it off immediately. Later we
              ended up having Callie help us sell our personal home. Callie not
              only has amazing personality, she is also extremely professional,
              knowledgeable and punctual. I know at times we weren&rsquo;t the
              easiest clients to work with, we never got that vibe from her. She
              was always polite and quick to respond to any message or phone
              call at anytime of the day. I highly recommend Callie to anyone
              that is looking to buy or sell. I know we sure will in the future.
            </p>
          </div>
          {/* ))} */}
        </div>
        {/* )} */}
      </div>
    </section>
  )
}

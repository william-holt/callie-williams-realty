import { urlForImage } from '@/sanity/lib/utils'
import { FaEnvelope, FaPhone, FaInstagram } from 'react-icons/fa6'

export function ContactHero(props: any) {
  const { image, title, subtitle } = props

  const imageUrl = urlForImage(image)
    ?.height(1000)
    .width(1750)
    .fit('crop')
    .url()

  return (
    <section
      className="relative -top-[100px] left-0 w-full h-[40vh] min-h-[500px] flex flex-col bg-tertiary-dark"
    >
      <div className="mt-[100px] border-t-[1px] pt-[50px] border-white">
        <div
          className="w-full max-w-screen-xl flex flex-col items-center justify-start flex-wrap mx-auto px-4 sm:flex-row">
          <div className="w-[200px] h-[200px] rounded-full sm:mr-4 md:w-[300px] md:h-[300px]"
               style={{
                 backgroundImage: `url(${imageUrl})`,
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 backgroundRepeat: 'no-repeat',
               }}></div>
          <div className="w-full text-center py-2 sm:flex-1 sm:text-left">
            <h2 className="hollar text-paper-light pb-2">{title}</h2>
            <p className="talk text-paper-light pb-4">{subtitle}</p>
            <div className="flex flex-row flex-nowrap text-accent-light">
              <a className="flex flex-row flex-nowrap items-center" href="mailto:callie@realestatebycallie.com">
                <FaEnvelope className="mr-2" />
                Callie@realestatebycallie.com
              </a>
              <a className="flex flex-row flex-nowrap items-center mx-8" href="">
                <FaPhone className="mr-2" />
                (555)555-5555
              </a>
              <a className="flex flex-row flex-nowrap items-center" href="">
                <FaInstagram className="mr-2" />
                @realestatebycallie
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from 'next/image'

import { Button } from '@/components/shared/Button'
import { CustomPortableText } from '@/components/shared/CustomPortableText'

import { urlForImage } from '@/sanity/lib/utils'

interface HomePageServicesProps {
  description?: any[]
  title?: string
  services?: any[]
}
export function HomePageServiceSection(props: HomePageServicesProps) {
  const { title, description, services } = props

  return (
    <section className="w-full bg-primary-dark">
      <div className="w-full max-w-screen-2xl mx-auto pt-12 px-6 pb-24">
        <h2 className="hollar text-paper-light">{title}</h2>
        <p className="talk text-paper-light pb-12">{description}</p>
        {services && services?.length > 0 && (
          <div className="flex flex-col items-stretch space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4 lg:-mx-4">
            {services.map((service, key) => {
              const imageUrl = urlForImage(service.image)
                ?.height(2000)
                .width(3500)
                .fit('crop')
                .url()

              return (
                <div
                  key={'service' + key}
                  className="relative w-full flex flex-col bg-paper-light rounded-border-lg shadow-lg md:flex-row md:items-center md:justify-start lg:w-1/3 lg:flex-col"
                >
                  <div className="w-full p-2">
                    <div className="relative w-full h-[150px] flex items-center justify-center bg-paper-dark rounded-border-sm md:h-[250px]">
                      <Image
                        className="rounded-border-sm"
                        src={service.image && imageUrl}
                        alt={service.title}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                  <div className="relative w-full h-full pt-2 px-4 pb-4">
                    <h3 className="shout text-ink pb-2">{service.title}</h3>
                    <p className="talk text-ink pb-24">{service.description}</p>
                    <div className="absolute bottom-0 left-0 w-full p-4">
                      <Button color="accent" size="md" variant="solid">
                        Contact Us
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

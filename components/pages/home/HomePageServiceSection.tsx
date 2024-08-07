import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/shared/Button'
import { urlForImage } from '@/sanity/lib/utils'

interface HomePageServicesProps {
  description?: any[]
  title?: string
  services?: any[]
  propertyData?: any[]
}
export function HomePageServiceSection(props: HomePageServicesProps) {
  const { title, description, services, propertyData } = props

  const residentialCount = propertyData?.filter((listing: any) =>
    listing.tags?.includes('Residential'),
  ).length;
  const commercialCount = propertyData?.filter((listing: any) =>
    listing.tags?.includes('Commercial'),
  ).length;
  const developmentCount = propertyData?.filter((listing: any) =>
    listing.tags?.includes('Development'),
  ).length;

  const checkServiceForData = (serviceName: string) => {
    if (serviceName === 'Residential') {
      return !!(residentialCount && residentialCount > 0);
    }
    if (serviceName === 'Commercial') {
      return !!(commercialCount && commercialCount > 0);
    }
    if (serviceName === 'Development') {
      return !!(developmentCount && developmentCount > 0);
    }
  }

  console.log(1, residentialCount, commercialCount, developmentCount);

  return (
    <section className="w-full bg-primary-dark">
      <div className="w-full max-w-screen-2xl mx-auto pt-12 px-4 pb-24 md:px-6">
        <h2 className="hollar text-paper-light lg:-mx-4">{title}</h2>
        <p className="talk text-paper-light pb-12">{description}</p>
        {services && services?.length > 0 && (
          <div className="flex flex-col items-stretch space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4 lg:-mx-4">
            {services.map((service, key) => {
              const imageUrl = urlForImage(service.image)
                ?.height(1500)
                .width(1500)
                .url()

              return (
                <div
                  key={'service' + key}
                  className="relative w-full flex flex-col bg-paper-light rounded-border-lg shadow-lg md:flex-row md:items-start md:justify-start lg:w-1/3 lg:flex-col"
                >
                  <div className="w-full p-2 md:w-1/3 lg:w-full">
                    <div className="relative w-full h-[150px] flex items-center justify-center bg-paper-dark rounded-border-sm md:h-[250px]">
                      <Image
                        className="w-full h-full rounded-border-sm"
                        src={service.image && imageUrl}
                        alt={service.title}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </div>
                  <div className="relative w-full h-full pt-2 px-4 pb-24 md:w-2/3 md:pt-4 lg:w-full lg:pb-48">
                    <h3 className="shout text-ink pb-2 text-pretty">
                      {service.title}
                    </h3>
                    <p className="talk text-ink text-pretty">
                      {service.description}
                    </p>
                    {checkServiceForData(service.title) && (
                      <div className="absolute bottom-0 left-0 w-full p-4">
                        <Link href={`${service.link}`}>
                          <Button color="accent" size="md" variant="solid">
                            {service.linkText}
                          </Button>
                        </Link>
                      </div>
                    )}
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

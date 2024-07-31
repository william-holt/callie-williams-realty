import Link from 'next/link'

import type { ShowcaseProperty } from '@/types'

import {
  FaBath,
  FaBed,
  FaCircleArrowLeft,
  FaCircleArrowRight,
  FaListCheck,
  FaPersonDigging,
  FaRulerCombined,
  FaMapPin,
  FaTag,
} from 'react-icons/fa6'
import { CustomPortableText } from '@/components/shared/CustomPortableText'

interface propertyProps {
  title: string
  properties: ShowcaseProperty[]
}

export function HomePageFeaturedProperties(props: propertyProps) {
  const { properties } = props;

  const Arrows = () => {
    return (
      <div className="flex space-x-2">
        <FaCircleArrowLeft className="text-paper-light text-4xl transition-all duration-300 ease-in-out cursor-pointer hover:text-accent" />
        <FaCircleArrowRight className="text-paper-light text-4xl transition-all duration-300 ease-in-out cursor-pointer hover:text-accent" />
      </div>
    )
  }

  return (
    <>
      <section className="w-full bg-secondary-dark pt-12 px-4 pb-24 md:px-8">
        <div className="w-full max-w-screen-2xl flex flex-col items-start justify-start flex-wrap mx-auto md:flex-row">
          <div className="w-full flex flex-row items-center justify-center pb-6">
            <h2 className="w-full hollar text-paper-light md:w-2/3">
              {props.title}
            </h2>
            <div className="hidden w-full flex-row items-center justify-end md:flex md:w-1/3">
              <Arrows />
            </div>
          </div>
          {properties?.length && (
            <>
              {properties.filter((property: any) => property.isShownOnHomepage).map((property: any, index: number) => (
                <div className="w-full min-h-[300px] flex flex-col items-center justify-center bg-secondary-light p-4 rounded-border-lg shadow-lg lg:flex-row lg:items-stretch" key={index}>
                  {/* Thumbnail */}
                  <div className="w-full p-1 rounded-border-sm shadow-sm lg:w-1/2 lg:pr-2 xl:w-7/12 2xl:w-8/12">
                    <div className="relative w-full h-full min-h-[300px] rounded-border-sm shadow-sm lg:mb-0">
                      <div className="absolute z-10 bottom-0 left-0 talk text-paper-light p-6">
                        <div className="w-full space-x-2 pb-2">
                          {property.tags.length && (
                            <>
                              {property.tags.map((tag: any, index: number) => (
                                <code key={index}>{tag}</code>
                              ))}
                            </>
                          )}
                          <code>{property.status}</code>
                        </div>
                        <h3 className="shout pb-2">{property.name}</h3>
                        <p className="talk">{property.description}</p>
                      </div>
                      <div className="absolute w-full h-full bg-gradient-to-t from-ink-dark rounded-border-sm" />
                    </div>
                  </div>
                  {/* Features */}
                  <div className="w-full rounded-border-sm shadow-sm lg:w-1/2 xl:w-5/12 2xl:w-4/12">
                    {/* Details */}
                    <div className="w-full p-1">
                      <div
                        className="w-full flex flex-col items-start justify-start p-6 rounded-border-sm shadow-sm bg-paper-light sm:flex-row">
                        <ul className="w-full flex flex-col gap-y-4 p-1 sm:w-1/2">
                          <li className="flex mr-1">
                            <FaMapPin className="text-accent text-2xl mr-2" />
                            {property.location}
                          </li>
                          <li className="flex">
                            <FaTag className="text-accent text-2xl mr-2" /> Price: {property.price}
                          </li>
                          <li className="flex">
                            <FaRulerCombined className="text-accent text-2xl mr-2" />
                            Square Feet: {property.squareFootage}
                          </li>
                          <li className="flex">
                            <FaBed className="text-accent text-2xl mr-2" /> Bedrooms: {property.bedroomCount}
                          </li>
                          <li className="flex">
                            <FaBath className="text-accent text-2xl mr-2" /> Bathrooms: {property.bathroomCount}
                          </li>
                          <li className="flex">
                            <FaPersonDigging className="text-accent text-2xl mr-2" />
                            Year Built: {property.constructionDate}
                          </li>
                        </ul>
                        <div className="w-full flex flex-col gap-y-2 p-1 pt-4 sm:w-1/2 sm:pt-0">
                          <div className="flex">
                            <FaListCheck className="text-accent text-2xl mr-2" />
                            Features:
                          </div>
                          <CustomPortableText
                            paragraphClasses="text-md md:text-xl"
                            value={property.features}
                          />
                        </div>
                      </div>
                    </div>
                    {/* Gallery */}
                    <div className="w-full flex flex-col items-center justify-center flex-wrap md:flex-row">
                      <div className="w-full h-24 p-1 md:h-48 md:w-1/2 lg:h-72">
                        <div className="w-full h-full rounded-border-sm shadow-sm  bg-secondary" />
                      </div>
                      <div className="w-full flex flex-row flex-wrap md:w-1/2">
                        <div className="w-1/3 h-24 p-1 md:w-full lg:h-36">
                          <div className="w-full h-full rounded-border-sm shadow-sm  bg-secondary" />
                        </div>
                        <div className="w-1/3 h-24 p-1 md:w-1/2 lg:h-36">
                          <div className="w-full h-full rounded-border-sm shadow-sm  bg-secondary" />
                        </div>
                        <div className="w-1/3 h-24 p-1 md:w-1/2 lg:h-36">
                          <div className="relative w-full h-full rounded-border-sm shadow-sm lg:mb-0">
                            <div
                              className="absolute z-10 bottom-0 left-0 w-full h-full flex items-center justify-center chat text-paper-light">
                              <Link
                                href=""
                                className="text-paper-light hover:underline"
                              >
                                + 17 more
                              </Link>
                            </div>
                            <div className="absolute w-full h-full bg-gradient-to-t from-ink-dark rounded-border-sm" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}

        <div className="w-full flex flex-row items-center justify-center py-4 md:hidden">
          <Arrows />
        </div>
      </div>
    </section>
  <div className="h-[250px] bg-paper-light -mt-[300px] md:h-[150px] md:-mt-[200px]" />
</>
)
}

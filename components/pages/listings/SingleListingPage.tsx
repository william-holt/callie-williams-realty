import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { urlForImage } from '@/sanity/lib/utils'

import { Button } from '@/components/shared/Button'

import { CustomPortableText } from '@/components/shared/CustomPortableText'

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

// Example array of image paths
const images = [
  '/placeholder.jpg',
  '/placeholder.jpg',
  '/placeholder.jpg',
  '/placeholder.jpg',
  '/placeholder.jpg',
  '/placeholder.jpg',
  '/placeholder.jpg',
]

export function SingleListingPage(initial: any) {
  const { data: listing } = initial.initial

  const images = listing.listingImages.map((image: any) => {
    return urlForImage(image)?.height(2000).width(3500).fit('crop').url()
  })

  function convertToDollars(amount: number) {
    return amount
      .toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      })
      .replace('.00', '')
  }

  return (
    <div className="w-full">
      <div className="relative w-full h-[850px] flex flex-col items-start justify-start flex-wrap  bg-primary-dark -mt-[100px] pb-20 md:h-screen md:pb-6">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-ink-dark from-0% to-transparent" />
        {/* Desktop Layout */}
        <div className="hidden md:flex w-full h-full">
          <div className="w-1/2 h-full p-2">
            <img
              src={images[0]}
              alt="image1"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-1/2 h-full flex flex-col">
            <div className="w-full h-1/2 p-2">
              <img
                src={images[1]}
                alt="image2"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-full h-1/2 flex">
              <div className="w-1/2 h-full p-2">
                <img
                  src={images[2]}
                  alt="image3"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="w-1/2 h-full flex flex-wrap">
                <div className="w-full h-1/2 p-2">
                  <img
                    src={images[3]}
                    alt="image4"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="w-1/2 h-1/2 p-2">
                  <img
                    src={images[4]}
                    alt="image5"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="w-1/2 h-1/2 p-2">
                  <div className="relative w-full h-full rounded-border-sm shadow-sm lg:mb-0">
                    <div className="absolute z-10 bottom-0 left-0 w-full h-full flex items-center justify-center chat text-paper-light">
                      <Link
                        href=""
                        className="text-paper-light hover:underline"
                      >
                        + 17 more
                      </Link>
                    </div>
                    <div className="absolute w-full h-full bg-gradient-to-t from-ink-dark rounded-border-sm" />
                    <img
                      src={images[5]}
                      alt="image6"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col md:hidden w-full h-full">
          <div className="w-full h-1/3 p-2">
            <img
              src={images[0]}
              alt="image1"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-full h-1/3 p-2">
            <img
              src={images[1]}
              alt="image2"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-full h-1/3 flex flex-col">
            <div className="w-full h-1/2 p-2">
              <img
                src={images[2]}
                alt="image3"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-full h-1/2 flex flex-wrap">
              <div className="w-1/2 h-full p-2">
                <img
                  src={images[3]}
                  alt="image4"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="w-1/2 h-full p-2">
                <img
                  src={images[4]}
                  alt="image5"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="w-full h-1/2 p-2">
                <div className="relative w-full h-full rounded-border-sm shadow-sm lg:mb-0">
                  <div className="absolute z-10 bottom-0 left-0 w-full h-full flex items-center justify-center chat text-paper-light">
                    <Link href="" className="text-paper-light hover:underline">
                      + 17 more
                    </Link>
                  </div>
                  <div className="absolute w-full h-full bg-gradient-to-t from-ink-dark rounded-border-sm" />
                  <img
                    src={images[5]}
                    alt="image6"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-ink py-24">
        <div className="w-full max-w-screen-2xl flex flex-col items-start justify-start mx-auto md:flex-row">
          {/* Summary */}
          <div className="w-full text-paper-light p-6 md:w-1/2">
            <div className="w-full flex flex-row items-center justify-start">
              <div className="w-fit flex justify-start flex-wrap -ml-1 pr-2">
                {listing.tags.map((tag, index) => {
                  // filter tags to only show residential, development, or commercial
                  if (
                    tag !== 'Residential' &&
                    tag !== 'Development' &&
                    tag !== 'Commercial'
                  ) {
                    return null
                  }

                  return (
                    <span
                      className="text-body uppercase text-xs text-ink-dark bg-paper-light bg-opacity-75 m-[5px] py-[2.5px] px-2 rounded-full shadow-lg"
                      key={index}
                    >
                      {tag}
                    </span>
                  )
                })}
              </div>
              <div className="w-fit flex justify-end">
                <div className="w-full flex items-center justify-end space-x-1">
                  <div
                    className={twMerge(
                      `statusIcon`,
                      listing.status === 'Sold' && 'bg-red-500',
                      listing.status === 'Active' && 'active',
                      listing.status === 'Pending' && 'bg-yellow-500',
                      listing.status === 'Under Contract' && 'bg-blue-500',
                      listing.status === 'Price Improvement' && 'bg-purple-500',
                    )}
                  />
                  <span className="text-paper-light text-body uppercase text-xs">
                    {listing.status}
                  </span>
                </div>
              </div>
            </div>
            <h3 className="shout pt-6 pb-2 text-pretty">{listing.name}</h3>
            <p className="talk pb-6 text-pretty">{listing.description}</p>
            <div className="w-fit flex items-center justify-start">
              <Link className="mr-4" href="">
                <Button color="accent" size="md" variant="solid">
                  Request A Showing
                </Button>
              </Link>
              <Link className="chat hover:underline" href="">
                Ask A Question
              </Link>
            </div>
          </div>
          {/* Features */}
          <div className="w-full px-6 md:w-1/2 p-1">
            <div className="w-full flex md:justify-end p-4">
              <div>
                <code>share</code>
              </div>
            </div>
            <div className="w-full flex flex-col items-start justify-start p-6 rounded-border-sm shadow-sm bg-paper-light sm:flex-row">
              <ul className="w-full flex flex-col gap-y-4 p-1 sm:w-1/2">
                <li className="flex mr-1">
                  <FaMapPin className="text-accent text-2xl mr-2" />
                  {listing.location}
                </li>
                <li className="flex">
                  <FaTag className="text-accent text-2xl mr-2" />
                  {convertToDollars(listing.price)}
                </li>
                <li className="flex">
                  <FaRulerCombined className="text-accent text-2xl mr-2" />
                  {listing.squareFootage} sq.ft.
                </li>
                <li className="flex">
                  <FaBed className="text-accent text-2xl mr-2" />
                  {listing.bedroomCount} Bed
                </li>
                <li className="flex">
                  <FaBath className="text-accent text-2xl mr-2" />
                  {listing.bathroomCount} Bath
                </li>
                <li className="flex">
                  <FaPersonDigging className="text-accent text-2xl mr-2" />
                  Built in {listing.constructionDate}
                </li>
              </ul>
              <div className="w-full flex flex-col gap-y-2 p-1 pt-4 sm:w-1/2 sm:pt-0">
                <div className="flex">
                  <FaListCheck className="text-accent text-2xl mr-2" />
                  Features:
                </div>
                <CustomPortableText
                  paragraphClasses="text-md md:text-xl"
                  value={listing.features}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="w-full bg-paper-light py-24">
        <div className="w-full max-w-screen-2xl mx-auto p-6">
          {/* TODO: Hook this up */}
          <CustomPortableText
            paragraphClasses="text-md md:text-xl"
            value={listing.body}
          />
          {/* Map */}
          {/* TODO: Finish map section */}
        </div>
      </div>

      {/* TODO: Figure this out */}
      {/* {listing.testimonials?.length > 0 && (
        <div>
          {listing.testimonials.map(
            (testimonial: any, testimonialIndex: number) => {
              return (
                <div key={'testimonial' + testimonialIndex}>
                  <div>{testimonial.name}</div>
                  <div>{testimonial.review}</div>
                  <div>{testimonial.date}</div>
                </div>
              )
            },
          )}
        </div>
      )} */}
    </div>
  )
}

export default SingleListingPage

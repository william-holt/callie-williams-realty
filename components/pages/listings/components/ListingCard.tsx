import Image from 'next/image'
import Link from 'next/link'
import { FaMapPin, FaTag } from 'react-icons/fa6'
import { twMerge } from 'tailwind-merge'

import { Button } from '@/components/shared/Button'
import { urlForImage } from '@/sanity/lib/utils'

interface ListingCardProps {
  index: number
  listing: any
}

export function ListingCard(props: ListingCardProps) {
  const { index, listing } = props

  const imageUrl =
    listing.ogImage
      ? urlForImage(listing.ogImage)
          ?.height(2000)
          .width(3500)
          .fit('crop')
          .url()
      : ''

  function convertToDollars(amount: number) {
    return amount
      .toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      })
      .replace('.00', '')
  }

  return (
    <div
      key={'service' + index}
      className="relative w-full h-[685px] flex flex-col bg-paper-light rounded-border-lg shadow-lg md:flex-row md:items-start md:justify-start lg:w-[30%] lg:flex-col lg:mb-8"
    >
      <div className="w-full p-2 md:w-1/3 lg:w-full">
        <div className="relative w-full h-[150px] flex items-center justify-center rounded-border-sm md:h-[250px]">
          <div className="w-full h-full flex flex-row flex-wrap">
            <div className="w-full h-full">
              <div className="relative w-full h-full rounded-border-sm shadow-sm lg:mb-0">
                <Image
                  className="w-full h-full rounded-border-sm"
                  src={imageUrl || '/callie-williams.jpg'}
                  alt={listing.name}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute z-10 bottom-0 left-0 w-full h-full flex flex-col items-center justify-between chat text-paper-light p-4">
                  <div className="w-full flex flex-row items-center justify-between">
                    {listing.tags?.length > 0 && (
                      <div className="w-2/3 flex justify-start flex-wrap -ml-1">
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
                    )}
                    <div className="w-1/3 flex justify-end">
                      <div className="w-full flex items-center justify-end space-x-1">
                        <div
                          className={twMerge(
                            `statusIcon`,
                            listing.status === 'Sold' && 'bg-red-500',
                            listing.status === 'Active' && 'active',
                            listing.status === 'Pending' && 'bg-yellow-500',
                            listing.status === 'Under Contract' &&
                            'bg-blue-500',
                            listing.status === 'Price Improvement' &&
                            'bg-purple-500'
                          )}
                        />
                        <span className="text-paper-light text-body uppercase text-xs">
                          {listing.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex flex-row items-center justify-between">
                    <div className="flex space-x-2 yell">
                      <FaTag className="text-2xl" />
                      <span>{convertToDollars(listing.price)}</span>
                    </div>
                    <div className="flex space-x-1 chat">
                      <FaMapPin className="text-2xl" />
                      <span>{listing.location}</span>
                    </div>
                  </div>
                </div>
                <div className="absolute w-full h-full bg-gradient-to-b from-ink-dark via-transparent to-secondary rounded-border-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-full pt-2 px-4 pb-24 flex flex-col justify-start items-center md:w-2/3 md:pt-4 lg:w-full lg:pb-8">
        <div className="w-full chat text-ink pb-4">
          <span className="px-2">
            <strong>{listing.bedroomCount}</strong> Bedrooms
          </span>
          |
          <span className="px-2">
            <strong>{listing.bathroomCount}</strong> Bath
          </span>
          |
          <span className="px-2">
            <strong>{listing.squareFootage}</strong> sq. ft.
          </span>
        </div>
        <h3 className="shout text-ink mb-2 w-full text-left line-clamp-2 h-[105px]">{listing.name}</h3>
        <p className="max-w-full talk text-ink line-clamp-4">{listing.description}</p>
        <div className="w-full p-4 flex-grow-[3] flex justify-start items-end">
          <Link
            href="/listings/[slug]"
            as={`/listings/${listing.slug.current}`}
          >
            <Button color="accent" size="md" variant="solid">
              View Listing
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

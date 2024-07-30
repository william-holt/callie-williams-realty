import Link from 'next/link'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

import { Button } from '@/components/shared/Button'

import { CustomPortableText } from '@/components/shared/CustomPortableText'

interface ListingCardProps {
  index: number
  listing: any
}

export function ListingCard(props: ListingCardProps) {
  const { index, listing } = props

  return (
    <div
      key={'service' + index}
      className="relative w-full flex flex-col bg-paper-light rounded-border-lg shadow-lg md:flex-row md:items-start md:justify-start lg:w-1/3 lg:flex-col"
    >
      <div className="w-full p-2 md:w-1/3 lg:w-full">
        <div className="relative w-full h-[150px] flex items-center justify-center bg-paper-dark rounded-border-sm md:h-[250px]">
          <div className="w-full h-full flex flex-row flex-wrap">
            <div className="w-full h-full">
              <div className="relative w-full h-full rounded-border-sm shadow-sm lg:mb-0">
                <Image
                  className="w-full h-full rounded-border-sm"
                  src={'/callie-williams.jpg'}
                  alt={listing.name}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute z-10 bottom-0 left-0 w-full h-full flex flex-col items-center justify-between chat text-paper-light p-4">
                  <div className="w-full flex flex-row items-start  justify-between">
                    <div className="w-2/3 flex justify-start flex-wrap -ml-1">
                      {listing.tags.map((tag) => {
                        // filter tags to only show residential, development, or commercial
                        if (
                          tag !== 'Residential' &&
                          tag !== 'Development' &&
                          tag !== 'Commercial'
                        ) {
                          return null
                        }

                        return (
                          <span className="text-body uppercase text-xs text-ink-dark bg-paper-light bg-opacity-50 m-1 py-1 px-2 rounded-full shadow-sm">
                            {tag}
                          </span>
                        )
                      })}
                    </div>
                    <div className="w-1/3 flex justify-end">
                      <div className="w-full flex items-center justify-end space-x-1">
                        <div
                          className={twMerge(
                            `w-4 h-4 rounded-full mb-1`,
                            listing.status === 'Sold' && 'bg-red-500',
                            listing.status === 'Active' && 'bg-green-500',
                            listing.status === 'Pending' && 'bg-yellow-500',
                            listing.status === 'Under Contract' &&
                              'bg-blue-500',
                            listing.status === 'Price Improvement' &&
                              'bg-purple-500',
                          )}
                        />
                        <span className="text-paper-light text-body uppercase text-xs">
                          {listing.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex flex-row items-center justify-between">
                    <code>{listing.price}</code>
                    <code>{listing.location}</code>
                  </div>
                </div>
                <div className="absolute w-full h-full bg-ink-dark opacity-50 rounded-border-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-full pt-2 px-4 pb-24 md:w-2/3 md:pt-4 lg:w-full lg:pb-48">
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
        <h3 className="shout text-ink pb-2">{listing.name}</h3>
        <p className="talk text-ink">{listing.description}</p>
        <div className="absolute bottom-0 left-0 w-full p-4">
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

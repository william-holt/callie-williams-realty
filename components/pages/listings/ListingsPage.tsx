'use client';
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { Button } from '@/components/shared/Button'
import { CustomPortableText } from '@/components/shared/CustomPortableText'

export function ListingsPage({data}: any) {
  const [currentFilter, setCurrentFilter] = useState('Residential')
  const [viewableListings, setViewableListings] = useState<any[]>([])

  useEffect(() => {
    if (data?.length) {
      const activeListings = data.filter( (listing: any) => listing.tags.includes(currentFilter));

      setViewableListings(activeListings)
    }
  }, [data, currentFilter])

  return (
    <div className="space-y-20 flex flex-col">
      <div>Listings </div>
      <div>Current Filter: {currentFilter}</div>
      <div className="flex flex-row justify-around items-center">
        <Button color="paper" size="md" variant="solid" onClick={() => setCurrentFilter('Residential')}>Residential</Button>
        <Button color="paper" size="md" variant="solid" onClick={() => setCurrentFilter('Development')}>Development</Button>
        <Button color="paper" size="md" variant="solid" onClick={() => setCurrentFilter('Commercial')}>Commercial</Button>
      </div>

      {viewableListings?.length > 0 ? (
        <div className="flex flex-row flex-wrap justify-start items-start">
          {viewableListings.map((listing: any, index: number) => {
            return (
              <div key={'listing' + index} className="flex flex-col items-start justify-center p-2 m-2 border-black border-2">
                <div>name: {listing.name}</div>
                <div>
                  <Link href="/listings/[slug]" as={`/listings/${listing.slug.current}`}>
                    GO TO FULL LISTING
                  </Link>
                </div>
                <div>status: {listing.status}</div>
                <div>description: {listing.description}</div>
                <div>location: {listing.location}</div>
                <div>price: {listing.price}</div>
                <div>square footage: {listing.squareFootage}</div>
                <div>bedrooms: {listing.bedroomCount}</div>
                <div>bathrooms: {listing.bathroomCount}</div>
                <div>construction date: {listing.constructionDate}</div>
                <CustomPortableText
                  paragraphClasses="text-md md:text-xl"
                  value={listing.features}
                />
                {listing.testimonials?.length > 0 && (
                  <div>
                    {listing.testimonials.map((testimonial: any, testimonialIndex: number) => {
                      return (
                        <div key={'testimonial' + testimonialIndex}>
                          <div>{testimonial.name}</div>
                          <div>{testimonial.review}</div>
                          <div>{testimonial.date}</div>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      ) : (
        <div>There are no Listings that match this filter</div>
      )}
    </div>
  )
}

export default ListingsPage

'use client'
import { useEffect, useState } from 'react'

import { ListingCard } from '@/components/pages/listings/components/ListingCard'
import { Tabs } from '@/components/pages/listings/components/Tabs'

export function ListingsGrid({ data }: any) {
  const [currentFilter, setCurrentFilter] = useState('Residential')
  const [viewableListings, setViewableListings] = useState<any[]>([])

  useEffect(() => {
    if (data?.length) {
      const activeListings = data.filter((listing: any) =>
        listing.tags?.includes(currentFilter),
      )

      setViewableListings(activeListings)
    }
  }, [data, currentFilter])

  return (
    <div className="w-full flex flex-col bg-secondary -mt-[100px] py-24">
      <div className="w-full max-w-screen-2xl mx-auto px-6">
        <div className="w-full space-y-4 pb-12 text-center lg:space-y-8">
          <h1 className="roar text-paper-light text-balance">Listings Title</h1>
          <p className="talk text-paper-light text-balance">Description</p>
        </div>
        <div className="w-full flex flex-row justify-center items-center pb-6">
          <Tabs
            currentFilter={currentFilter}
            setCurrentFilter={setCurrentFilter}
          />
        </div>
        {viewableListings?.length > 0 ? (
          <div className="flex flex-col items-stretch space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4 lg:-mx-4">
            {viewableListings.map((listing: any, index: number) => {
              return <ListingCard index={index} listing={listing} />
            })}
          </div>
        ) : (
          <div>There are no Listings that match this filter</div>
        )}
      </div>
    </div>
  )
}

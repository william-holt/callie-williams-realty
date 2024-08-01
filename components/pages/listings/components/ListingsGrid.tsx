'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

import { ListingCard } from '@/components/pages/listings/components/ListingCard'
import { Tabs } from '@/components/pages/listings/components/Tabs'

export function ListingsGrid({ data, title, description }: any) {
  const [currentFilter, setCurrentFilter] = useState('')
  const [viewableListings, setViewableListings] = useState<any[]>([])
  const router = useRouter();
  const searchParams = useSearchParams();
  const filter = searchParams.get('filter')

  const setFilterAndUrl = useCallback((newFilter: string) => {
    router.push('/listings/?filter=' + newFilter, {scroll: false})
  }, [router])

  useEffect(() => {
    if (filter) {
      if (filter !== currentFilter) {
        setCurrentFilter(filter)
      }
    }
  }, [currentFilter, filter, setFilterAndUrl])


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
          <h1 className="roar text-paper-light text-balance">{title}</h1>
          <p className="talk text-paper-light text-balance">{description}</p>
        </div>
        <div className="w-full flex flex-row justify-center items-center pb-6">
          <Tabs
            currentFilter={currentFilter}
            setCurrentFilter={setFilterAndUrl}
          />
        </div>
        {viewableListings?.length > 0 ? (
          <div className="flex flex-col items-stretch space-y-4 lg:flex-row lg:flex-wrap lg:justify-evenly lg:space-y-0 lg:space-x-4 lg:-mx-4">
            {viewableListings.map((listing: any, index: number) => {
              return <ListingCard index={index} listing={listing} key={index} />
            })}
          </div>
        ) : (
          <div>There are no Listings that match this filter</div>
        )}
      </div>
    </div>
  )
}

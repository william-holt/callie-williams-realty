'use client'
import type { QueryResponseInitial } from '@sanity/react-loader'

import PastDealsPage from '@/components/pages/past-deals/PastDealsPage'
import { allPastDealsPageQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'

type Props = {
  initial: QueryResponseInitial<any | null>
}

export default function PastDealsPagePreview(props: Props) {
  const { initial } = props
  const { data, encodeDataAttribute } = useQuery<any | null>(
    allPastDealsPageQuery,
    {},
    { initial },
  )

  if (!data) {
    return (
      <div className="text-center">
        Please start editing your Listings Page document to see the preview!
      </div>
    )
  }

  const {listingData, pastDealsMetadata} = data;

  return <PastDealsPage data={listingData} metadata={pastDealsMetadata} />
}

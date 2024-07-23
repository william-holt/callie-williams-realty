'use client'
import type { QueryResponseInitial } from '@sanity/react-loader'

import SingleListingPage from '@/components/pages/listings/SingleListingPage'
import { listingBySlugQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'

type Props = {
  initial: QueryResponseInitial<any | null>
}

export default function SingleListingPagePreview(props: Props) {
  const { initial } = props
  const { data, encodeDataAttribute } = useQuery<any | null>(
    listingBySlugQuery,
    {},
    { initial },
  )

  if (!data) {
    return (
      <div className="text-center">
        Please start editing your Property Page to see the preview!
      </div>
    )
  }

  return <SingleListingPage data={data} />
}

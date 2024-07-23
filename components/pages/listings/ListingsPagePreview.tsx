'use client'
import type { QueryResponseInitial } from '@sanity/react-loader'

import ListingsPage from '@/components/pages/listings/ListingsPage'
import { allListingsQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'

type Props = {
  initial: QueryResponseInitial<any | null>
}

export default function ListingsPagePreview(props: Props) {
  const { initial } = props
  const { data, encodeDataAttribute } = useQuery<any | null>(
    allListingsQuery,
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

  return <ListingsPage data={data} />
}

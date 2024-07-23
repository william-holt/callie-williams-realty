'use client'
import type { QueryResponseInitial } from '@sanity/react-loader'

import PastDealsPage from '@/components/pages/past-deals/PastDealsPage'
import { allListingsQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'

type Props = {
  initial: QueryResponseInitial<any | null>
}

export default function PastDealsPagePreview(props: Props) {
  const { initial } = props
  const { data, encodeDataAttribute } = useQuery<any | null>(
    allListingsQuery,
    {},
    { initial },
  )

  if (!data) {
    return (
      <div className="text-center">
        Please start editing your Properties Page document to see the preview!
      </div>
    )
  }

  return <PastDealsPage data={data} />
}

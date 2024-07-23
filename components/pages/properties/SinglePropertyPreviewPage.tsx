'use client'
import type { QueryResponseInitial } from '@sanity/react-loader'

import PropertiesPage from '@/components/pages/properties/PropertiesPage'
import { allListingsQuery, listingBySlugQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import SinglePropertyPage from '@/components/pages/properties/SinglePropertyPage'

type Props = {
  initial: QueryResponseInitial<any | null>
}

export default function SinglePropertyPagePreview(props: Props) {
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

  return <SinglePropertyPage data={data} />
}

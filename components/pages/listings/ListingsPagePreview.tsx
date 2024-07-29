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


  // let lastId = ''
  //
  // async function fetchNextPage() {
  //   if (lastId === null) {
  //     return []
  //   }
  //   const {result} = await fetch(
  //     groq`*[_type == "article" && _id > $lastId] | order(_id) [0...25] {
  //     _id, title, body
  //   }`, {lastId})
  //
  //   if (result.length > 0) {
  //     lastId = result[result.length - 1]._id
  //   } else {
  //     lastId = null // Reached the end
  //   }
  //   return result
  // }


  if (!data) {
    return (
      <div className="text-center">
        Please start editing your Listings Page document to see the preview!
      </div>
    )
  }

  return <ListingsPage data={data} />
}

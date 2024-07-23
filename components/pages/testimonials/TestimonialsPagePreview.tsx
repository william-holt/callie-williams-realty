'use client'


import TestimonialsPage from '@/components/pages/testimonials/TestimonialsPage'
import type { QueryResponseInitial } from '@sanity/react-loader'
import { HomePagePayload } from '@/types'
import { useQuery } from '@/sanity/loader/useQuery'
import { allListingsQuery, homePageQuery } from '@/sanity/lib/queries'

type Props = {
  initial: QueryResponseInitial<any | null>
}

export default function TestimonialsPagePreview(props: Props) {
  const { initial } = props;
  const { data, encodeDataAttribute } = useQuery<any | null>(
    allListingsQuery,
    {},
    { initial },
  )

  if (!data) {
    return (
      <div className="text-center">
        Please start editing your Testimonials document to see the preview!
      </div>
    )
  }

  return <TestimonialsPage data={data}  />
}

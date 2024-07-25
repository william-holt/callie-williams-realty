'use client'

import type { QueryResponseInitial } from '@sanity/react-loader'

import TestimonialsPage from '@/components/pages/testimonials/TestimonialsPage'
import { allListingsQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'

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

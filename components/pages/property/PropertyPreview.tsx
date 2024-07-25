'use client'

import { type QueryResponseInitial } from '@sanity/react-loader'

import { projectBySlugQuery } from '@/sanity/lib/queries'
import { useQuery } from '@/sanity/loader/useQuery'
import { PropertyPayload } from '@/types'

import PropertyPage from './PropertyPage'

type Props = {
  params: { slug: string }
  initial: QueryResponseInitial<PropertyPayload | null>
}

export default function ProjectPreview(props: Props) {
  const { params, initial } = props
  const { data, encodeDataAttribute } = useQuery<PropertyPayload | null>(
    projectBySlugQuery,
    params,
    { initial },
  )

  return <PropertyPage data={data!} encodeDataAttribute={encodeDataAttribute} />
}

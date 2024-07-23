import type { Metadata, ResolvingMetadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { toPlainText } from 'next-sanity'

import SingleListingPage from '@/components/pages/listings/SingleListingPage'
import { urlForOpenGraphImage } from '@/sanity/lib/utils'
import { generateStaticSlugs } from '@/sanity/loader/generateStaticSlugs'
import { loadSingleListing } from '@/sanity/loader/loadQuery'
const SingleListingPagePreview = dynamic(
  () => import('@/components/pages/listings/SingleListingPreviewPage'),
)

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { data: property } = await loadSingleListing(params.slug)
  const ogImage = urlForOpenGraphImage(property?.coverImage)

  return {
    title: property?.title,
    description: property?.overview
      ? toPlainText(property.overview)
      : (await parent).description,
    openGraph: ogImage
      ? {
        images: [ogImage, ...((await parent).openGraph?.images || [])],
      }
      : {},
  }
}

export function generateStaticParams() {
  return generateStaticSlugs('property')
}

export default async function PropertySlugRoute({ params }: Props) {
  const initial = await loadSingleListing(params.slug)

  if (draftMode().isEnabled) {
    return <SingleListingPagePreview initial={initial} />
  }

  if (!initial.data) {
    notFound()
  }

  const {data: listing} = initial;
  
  return <SingleListingPage initial={initial} listing={listing} />
}

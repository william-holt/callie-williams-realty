import type { Metadata, ResolvingMetadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { toPlainText } from 'next-sanity'

import SinglePropertyPage from '@/components/pages/properties/SinglePropertyPage'
import { urlForOpenGraphImage } from '@/sanity/lib/utils'
import { generateStaticSlugs } from '@/sanity/loader/generateStaticSlugs'
import { loadProperty } from '@/sanity/loader/loadQuery'
const SinglePropertyPagePreview = dynamic(
  () => import('@/components/pages/properties/SinglePropertyPreviewPage'),
)

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { data: property } = await loadProperty(params.slug)
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
  const initial = await loadProperty(params.slug)

  if (draftMode().isEnabled) {
    return <SinglePropertyPagePreview initial={initial} />
  }

  if (!initial.data) {
    notFound()
  }

  const {data: listing} = initial;
  
  return <SinglePropertyPage initial={initial} listing={listing} />
}

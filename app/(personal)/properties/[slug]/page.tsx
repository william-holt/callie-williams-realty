import type { Metadata, ResolvingMetadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { toPlainText } from 'next-sanity'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { urlForOpenGraphImage } from '@/sanity/lib/utils'
import { generateStaticSlugs } from '@/sanity/loader/generateStaticSlugs'
import { loadProject, loadProperty } from '@/sanity/loader/loadQuery'
// const ProjectPreview = dynamic(
//   () => import('@/components/pages/project/ProjectPreview'),
// )

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

  // if (draftMode().isEnabled) {
  //   return <ProjectPreview params={params} initial={initial} />
  // }

  if (!initial.data) {
    notFound()
  }

  const {data: listing} = initial;

  // return <ProjectPage data={initial.data} />
  return (
    <div>
      <div>
        Individual Project Page
      </div>
      <div className="flex flex-col items-start justify-center p-2 m-2 border-black border-2">
        <div>name: {listing.name}</div>
        <div>status: {listing.status}</div>
        <div>description: {listing.description}</div>
        <div>location: {listing.location}</div>
        <div>price: {listing.price}</div>
        <div>square footage: {listing.squareFootage}</div>
        <div>bedrooms: {listing.bedroomCount}</div>
        <div>bathrooms: {listing.bathroomCount}</div>
        <div>construction date: {listing.constructionDate}</div>
        <CustomPortableText
          paragraphClasses="text-md md:text-xl"
          value={listing.features}
        />
        {listing.testimonials?.length > 0 && (
          <div>
            {listing.testimonials.map((testimonial: any, testimonialIndex: number) => {
              return (
                <div key={'testimonial' + testimonialIndex}>
                  <div>{testimonial.name}</div>
                  <div>{testimonial.review}</div>
                  <div>{testimonial.date}</div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'

import { HomePage } from '@/components/pages/home/HomePage'
import { studioUrl } from '@/sanity/lib/api'
import { loadHomePage, loadProperties } from '@/sanity/loader/loadQuery'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { list } from 'postcss'
import { redirect } from 'next/navigation'
import Link from 'next/link'
// const HomePagePreview = dynamic(
//   () => import('@/components/pages/home/HomePagePreview'),
// )

export default async function PropertiesRoute() {
  const initial = await loadProperties()
  const { data } = initial;

  console.log(1, data);

  // if (draftMode().isEnabled) {
  //   return <HomePagePreview initial={initial} />
  // }

  return (
    <>
      <div>properties</div>

      {data?.length && (
        <div className="flex flex-row flex-wrap justify-start items-start">
          {data.map((listing: any, index: number) => {
            return (
              <div key={'listing' + index} className="flex flex-col items-start justify-center p-2 m-2 border-black border-2">
                <div>name: {listing.name}</div>
                <div>
                  <Link href="/properties/[slug]" as={`/properties/${listing.slug.current}`}>
                    GO TO FULL LISTING
                  </Link>
                </div>
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
            )
          })}
        </div>
      )}
    </>
  )
}

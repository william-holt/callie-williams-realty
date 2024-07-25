import { CustomPortableText } from '@/components/shared/CustomPortableText'

export function SingleListingPage(initial: any) {

  const {data: listing} = initial.initial;

  return (
    <div className="space-y-20 flex flex-col">
      <div>
        Single Listing Page
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

export default SingleListingPage

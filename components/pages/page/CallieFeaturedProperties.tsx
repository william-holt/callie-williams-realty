import { ListingCard } from '@/components/pages/listings/components/ListingCard'
import type { ShowcaseProperty } from '@/types'
import { getRandomDifferent } from '@/utils/getRandomDifferent'

interface propertyProps {
  title: string
  properties: ShowcaseProperty[]
}

export function CallieFeaturedProperties(props: propertyProps) {
  const { properties } = props
  const property1 = getRandomDifferent(properties);
  const property2 = getRandomDifferent(properties, property1);
  const property3 = getRandomDifferent(properties, property2);
  const propertiesToShow = [property1, property2, property3];

  return (
    <>
      <section className="w-full bg-primary-dark pt-12 px-4 pb-24 md:px-8">
        <div className="w-full max-w-screen-2xl flex flex-col items-start justify-start flex-wrap mx-auto md:flex-row">
          <div className="w-full flex flex-row items-center justify-center pb-6">
            <h2 className="w-full hollar text-paper-light text-center">
              {props.title}
            </h2>
          </div>
          {propertiesToShow?.length && (
            <div
              className="flex flex-col items-stretch space-y-4 lg:flex-row lg:flex-wrap lg:justify-evenly lg:space-y-0 lg:space-x-4 lg:-mx-4">
              {propertiesToShow.map((listing: any, index: number) => {
                return <ListingCard index={index} listing={listing} key={index} />
              })}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

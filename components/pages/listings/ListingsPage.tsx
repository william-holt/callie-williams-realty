import { ListingsGrid } from '@/components/pages/listings/components/ListingsGrid'
import { ListingsHero } from '@/components/pages/listings/components/ListingsHero'

export function ListingsPage({ data }: any) {
  const { listingData, allListingsMetadata } = data;
  const { overview, header, heroImage, subtitle } = allListingsMetadata ?? {}

  return (
    <>
      <ListingsHero coverImage={heroImage} />
      <ListingsGrid title={header} description={subtitle} data={listingData} />
    </>
  )
}

export default ListingsPage

import { ListingsHero } from '@/components/pages/listings/components/ListingsHero'
import { ListingsGrid } from '@/components/pages/listings/components/ListingsGrid'

export function ListingsPage({ data }: any) {
  const { overview, title, heroImage } = data ?? {}

  return (
    <>
      <ListingsHero coverImage={heroImage} />
      <ListingsGrid title={title} description={overview} data={data} />
    </>
  )
}

export default ListingsPage

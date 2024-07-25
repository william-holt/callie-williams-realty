import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'

import PastDealsPage from '@/components/pages/past-deals/PastDealsPage'
import { loadListings } from '@/sanity/loader/loadQuery'
const PastDealsPagePreview = dynamic(
  () => import('@/components/pages/past-deals/PastDealsPagePreview'),
)

export default async function PastDealsRoute() {
  const initial = await loadListings()

  const pastDeals = initial.data.filter((property: any) => property.status === 'Sold');

  if (draftMode().isEnabled) {
    return <PastDealsPagePreview initial={initial} />
  }

  return <PastDealsPage data={pastDeals} />
}

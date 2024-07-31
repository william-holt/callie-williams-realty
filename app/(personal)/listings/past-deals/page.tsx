import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'

import PastDealsPage from '@/components/pages/past-deals/PastDealsPage'
import { loadListingsForPastDeals } from '@/sanity/loader/loadQuery'
const PastDealsPagePreview = dynamic(
  () => import('@/components/pages/past-deals/PastDealsPagePreview'),
)

export default async function PastDealsRoute() {
  const {data} = await loadListingsForPastDeals()
  const {listingData, pastDealsMetadata} = data;

  const pastDeals = listingData.filter((property: any) => property.status === 'Sold');

  if (draftMode().isEnabled) {
    return <PastDealsPagePreview initial={data} />
  }

  return <PastDealsPage metadata={pastDealsMetadata} data={pastDeals} />
}

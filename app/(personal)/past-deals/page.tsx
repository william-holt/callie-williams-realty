import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'

import PastDealsPage from '@/components/pages/past-deals/PastDealsPage'
import { loadProperties } from '@/sanity/loader/loadQuery'
const PastDealsPagePreview = dynamic(
  () => import('@/components/pages/past-deals/PastDealsPagePreview'),
)

export default async function PastDealsRoute() {
  const initial = await loadProperties()

  const pastDeals = initial.data.filter((property: any) => property.status === 'Sold');

  if (draftMode().isEnabled) {
    return <PastDealsPagePreview initial={initial} />
  }

  return <PastDealsPage data={pastDeals} />
}

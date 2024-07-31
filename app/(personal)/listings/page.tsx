import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'

import ListingsPage from '@/components/pages/listings/ListingsPage'
import { loadListingsForAllListings } from '@/sanity/loader/loadQuery'
const ListingsPagePreview = dynamic(
  () => import('@/components/pages/listings/ListingsPagePreview'),
)

export default async function ListingsRoute() {
  const initial = await loadListingsForAllListings()

  if (draftMode().isEnabled) {
    return <ListingsPagePreview initial={initial} />
  }

  return <ListingsPage data={initial.data} />
}

import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'

import PropertiesPage from '@/components/pages/properties/PropertiesPage'
import { loadProperties } from '@/sanity/loader/loadQuery'
const PropertiesPagePreview = dynamic(
  () => import('@/components/pages/properties/PropertiesPagePreview'),
)

export default async function PropertiesRoute() {
  const initial = await loadProperties()

  if (draftMode().isEnabled) {
    return <PropertiesPagePreview initial={initial} />
  }

  return <PropertiesPage data={initial.data} />
}

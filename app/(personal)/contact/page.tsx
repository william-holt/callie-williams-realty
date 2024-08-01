import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'

import ContactPage from '@/components/pages/contact/ContactPage'
import { loadContactMetadata } from '@/sanity/loader/loadQuery'
const ContactPagePreview = dynamic(
  () => import('@/components/pages/contact/ContactPagePreview'),
)

export default async function ContactRoute() {
  const initial = await loadContactMetadata()

  if (draftMode().isEnabled) {
    return <ContactPagePreview props={initial} />
  }

  return <ContactPage data={initial.data}/>
}

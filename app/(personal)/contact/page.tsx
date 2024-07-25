import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'

import ContactPage from '@/components/pages/contact/ContactPage'
const ContactPagePreview = dynamic(
  () => import('@/components/pages/contact/ContactPagePreview'),
)

export default async function ContactRoute() {

  if (draftMode().isEnabled) {
    return <ContactPagePreview />
  }

  return <ContactPage />
}

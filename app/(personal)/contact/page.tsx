import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { list } from 'postcss'

import { HomePage } from '@/components/pages/home/HomePage'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { studioUrl } from '@/sanity/lib/api'
import { loadHomePage, loadProperties } from '@/sanity/loader/loadQuery'
// const HomePagePreview = dynamic(
//   () => import('@/components/pages/home/HomePagePreview'),
// )

export default async function ContactRoute() {

  // if (draftMode().isEnabled) {
  //   return <HomePagePreview initial={initial} />
  // }

  return (
    <>
      <div>Contact</div>
    </>
  )
}

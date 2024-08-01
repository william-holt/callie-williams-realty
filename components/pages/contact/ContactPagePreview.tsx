'use client'
import ContactPage from '@/components/pages/contact/ContactPage'
import { useQuery } from '@sanity/react-loader'
import { contactPageMetadata } from '@/sanity/lib/queries'

export default function ContactPagePreview(props: any) {
  const { initial } = props
  const { data, encodeDataAttribute} = useQuery<any | null>(
    contactPageMetadata,
    {},
    { initial },
  )

  console.log('preview', data);

  // if (!data) {
  //   return (
  //     <div className="text-center">
  //       Please start editing your Contact Page document to see the preview!
  //     </div>
  //   )
  // }

  return <ContactPage data={data} />
}

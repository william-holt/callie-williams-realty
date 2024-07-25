'use client'
import ContactPage from '@/components/pages/contact/ContactPage'

export default function ContactPagePreview() {
  // const { initial } = props
  // const { data, encodeDataAttribute } = useQuery<HomePagePayload | null>(
  //   homePageQuery,
  //   {},
  //   { initial },
  // )

  // if (!data) {
  //   return (
  //     <div className="text-center">
  //       Please start editing your Contact Page document to see the preview!
  //     </div>
  //   )
  // }

  return <ContactPage />
}

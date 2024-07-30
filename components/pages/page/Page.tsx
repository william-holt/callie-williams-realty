import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { Header } from '@/components/shared/Header'
import type { PagePayload } from '@/types'

export interface PageProps {
  data: PagePayload | null
}

export function Page({ data }: PageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { body, overview, title, heroImage } = data ?? {}

  return (
    <>
      {/* Header */}
      <Header title={title} description={overview} coverImage={heroImage} />
      {/* Body */}
      {body && (
        <section className="w-full talk bg-secondary-dark py-12 pb-24">
          <div className="w-full max-w-screen-2xl mx-auto px-6">
            <CustomPortableText
              paragraphClasses="talk text-paper-light"
              value={body}
            />
          </div>
        </section>
      )}
    </>
  )
}

export default Page

import { YoutubeVideos } from '@/components/pages/page/YoutubeVideos'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { Header } from '@/components/shared/Header'
import { Subscribe } from '@/components/shared/Subscribe'
import { CallieFeaturedProperties } from '@/components/pages/page/CallieFeaturedProperties'

export interface PageProps {
  data: any | null
}

export function Page({ data }: PageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { pageData, youtubeVideos, propertyData } = data
  const { body, overview, title, heroImage } = pageData ?? {}

  return (
    <>
      {/* Header */}
      <Header title={title} description={overview} coverImage={heroImage} />
      {/* Body */}
      {pageData.slug === 'about' ? (
        <>
          <YoutubeVideos videos={youtubeVideos} />

          {/* Featured Properties */}
          <CallieFeaturedProperties
            title={`Callie's Featured Listings`}
            properties={propertyData}
          />
        </>
      ) : (
        <>
          {body ?? (
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
      )}
      {/* Subscribe */}
      <Subscribe />
    </>
  )
}

export default Page

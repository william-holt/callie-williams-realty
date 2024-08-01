import { HomePageFeaturedProperties } from '@/components/pages/home/HomePageFeaturedProperties'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { Header } from '@/components/shared/Header'
import { Subscribe } from '@/components/shared/Subscribe'

export interface PageProps {
  data: any | null
}

export function Page({ data }: PageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const {pageData, featuredPropertyData} = data;
  const { body, overview, title, heroImage } = pageData ?? {}

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
      {/* Featured Properties */}
      <section className="w-full bg-primary-dark py-12 pb-24">
        {/*<HomePageFeaturedProperties*/}
        {/*  title={'Featured Listings Being Shown Now'}*/}
        {/*  properties={featuredPropertyData}*/}
        {/*/>*/}
      </section>
      {/* Subscribe */}
      <Subscribe />
    </>
  )
}

export default Page

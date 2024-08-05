'use client';

import { useEffect, useState } from 'react'


export function YoutubeVideos({videos}: any) {
  const [videoList, setVideoList] = useState<any[]>([])

  useEffect(() => {
    if (videos && videos.youtubeVideoLinks.length) {
      const videoUrls = videos.youtubeVideoLinks.map((video: any) => video.url)
      setVideoList(videoUrls)
    }
  }, [videos])

  return (
    <section className="w-full bg-secondary-dark p-24">
      {videoList.length && (
        <>
          {videoList.map((video: any, index: number) => (
            <div key={index}>
              <iframe
                src={video}
                height={400}
                width={500}
                allowFullScreen

              />
            </div>
          ))}
        </>
      )}
      {/*<HomePageFeaturedProperties*/}
      {/*  title={'Featured Listings Being Shown Now'}*/}
      {/*  properties={featuredPropertyData}*/}
      {/*/>*/}
    </section>
  )
}
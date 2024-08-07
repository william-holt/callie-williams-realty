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
    <section className="w-full bg-secondary-dark p-24 flex flex-row justify-center items-center">
      <iframe width="560"
              height="315"
              src="https://www.youtube.com/embed/videoseries?si=PvkXFU6q2doUpf5V&amp;list=PL5UW3FdDyuvEBF9_C97eUUgV3Vm3Jrla6"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen></iframe>
      {/*<HomePageFeaturedProperties*/}
      {/*  title={'Featured Listings Being Shown Now'}*/}
      {/*  properties={featuredPropertyData}*/}
      {/*/>*/}
    </section>
  )
}
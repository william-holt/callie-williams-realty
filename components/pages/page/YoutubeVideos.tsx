'use client'

import { useEffect, useState } from 'react'

export function YoutubeVideos({ videos }: any) {
  const [videoList, setVideoList] = useState<any[]>([])

  useEffect(() => {
    if (videos && videos.youtubeVideoLinks.length) {
      const videoUrls = videos.youtubeVideoLinks.map((video: any) => video.url)
      setVideoList(videoUrls)
    }
  }, [videos])

  return (
    <section className="w-full bg-secondary-dark flex flex-row justify-center items-center py-24 px-4">
      <iframe
        className="w-full max-w-screen-2xl min-h-[300px] md:min-h-[600px] lg:min-h-[700px] rounded-border-lg shadow-lg"
        src="https://www.youtube.com/embed/videoseries?si=PvkXFU6q2doUpf5V&amp;list=PL5UW3FdDyuvEBF9_C97eUUgV3Vm3Jrla6"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </section>
  )
}

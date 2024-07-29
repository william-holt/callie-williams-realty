import { MetadataRoute } from "next";

import { client } from '@/sanity/lib/client'
interface Post {
  mainImage?: string;
  title: string;
  currentSlug: string;
  smallDescription: string;
  updated: Date
}

async function getData() {
  const query = `*[_type == "listing"] {
    "currentSlug": slug.current,
    "updated": _updatedAt
  }`
  const data = await client.fetch(query)
  return data;
}


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data: any = await getData()

  const blogEntries: MetadataRoute.Sitemap = data.map((post: Post) => ({
    url: `https://calliewilliamsrealestate.com/listings/${post.currentSlug}`,
    changeFrequency: "daily",
    lastModified: post.updated
  }));

  return [{
    url: `https://calliewilliamsrealestate.com/`,
    changeFrequency: "weekly",
    lastModified: "2024-08-01"
  },{
    url: `https://calliewilliamsrealestate.com/about`,
    changeFrequency: "yearly",
    lastModified: "2024-08-01"
  },{
    url: `https://calliewilliamsrealestate.com/past-deals`,
    changeFrequency: "monthly",
    lastModified: "2024-08-01"
  },{
    url: `https://calliewilliamsrealestate.com/testimonials`,
    changeFrequency: "monthly",
    lastModified: "2024-08-01"
  },
    {
      url: `https://calliewilliamsrealestate.com/contact`,
      changeFrequency: "monthly",
      lastModified: "2024-08-01"
    }, ...blogEntries]
}
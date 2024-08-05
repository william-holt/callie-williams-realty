'use client'
/**
 * This config is used to set up Sanity Studio that's mounted on the `app/studio/[[...index]]/Studio.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { presentationTool } from 'sanity/presentation'
import { structureTool } from 'sanity/structure'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'
import { media } from 'sanity-plugin-media'

import { apiVersion, dataset, projectId, studioUrl } from '@/sanity/lib/api'
import { locate } from '@/sanity/plugins/locate'
import { pageStructure, singletonPlugin } from '@/sanity/plugins/settings'
import featuredListing from '@/sanity/schemas/documents/featuredListing'
import listing from '@/sanity/schemas/documents/listing'
import page from '@/sanity/schemas/documents/page'
import listingImage from '@/sanity/schemas/objects/listingImage'
import service from '@/sanity/schemas/objects/service'
import social from '@/sanity/schemas/objects/social'
import testimonial from '@/sanity/schemas/objects/testimonial'
import allListingsMetaData from '@/sanity/schemas/singletons/allListingsMetaData'
import home from '@/sanity/schemas/singletons/home'
import pastDealsMetaData from '@/sanity/schemas/singletons/pastDealsMetaData'
import settings from '@/sanity/schemas/singletons/settings'
import contactMetadata from '@/sanity/schemas/singletons/contactMetadata'
import youtubeVideos from '@/sanity/schemas/singletons/youtubeVideos'
import youtubeVideoLinks from '@/sanity/schemas/objects/youtubeVideoLinks'

const title =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE ||
  'Callie Williams Real Estate'

export default defineConfig({
  basePath: studioUrl,
  projectId: projectId || '',
  dataset: dataset || '',
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [
      // Singletons
      home,
      settings,
      allListingsMetaData,
      contactMetadata,
      pastDealsMetaData,
      youtubeVideos,
      // Documents
      page,
      listing,
      featuredListing,
      // Objects
      service,
      testimonial,
      listingImage,
      social,
      youtubeVideoLinks,
    ],
  },
  plugins: [
    media(),
    structureTool({
      structure: pageStructure([home, settings]),
    }),
    presentationTool({
      locate,
      previewUrl: {
        previewMode: {
          enable: '/api/draft',
        },
      },
    }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    singletonPlugin([home.name, settings.name]),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})

import { HomeIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'youtubeVideos',
  title: 'Youtube Videos',
  type: 'document',
  icon: HomeIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'youtubeVideoLinks',
      title: 'Youtube Video Links',
      type: 'array',
      of: [{type: 'youtubeVideoLinks'}],
    }),
  ],
})

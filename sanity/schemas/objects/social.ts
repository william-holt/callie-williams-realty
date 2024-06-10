import { defineField, defineType } from 'sanity'
import listingStatus from '@/sanity/schemas/staticFields/listingStatus'
import socialImage from '@/sanity/schemas/staticFields/socialImage'

export default defineType({
  name: 'social',
  title: 'Social Media Link',
  type: 'object',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'url',
      name: 'link',
      title: 'Link',
      validation: (rule) => rule.required(),
    }),
    {
      title: 'Social Media Site',
      name: 'socialImage',
      type: 'string',
      options: {
        list: [
          ...socialImage
        ],
      }
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
      }
    },
  },
})

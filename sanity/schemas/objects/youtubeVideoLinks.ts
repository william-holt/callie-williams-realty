import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'youtubeVideoLinks',
  title: 'Youtube Video Link',
  type: 'object',
  fields: [
    defineField({
      type: 'string',
      name: 'url',
      title: 'Youtube URL',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'url',
    },
    prepare({ title }) {
      return {
        title,
      }
    },
  },
})

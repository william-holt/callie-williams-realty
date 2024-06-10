import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'object',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      description: 'This field is the description of the service.',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'link',
      description: 'This field is the link of the service.',
      title: 'Link',
      type: 'url',
    }),
    defineField({
      name: 'image',
      description: 'This field is the image of the service.',
      title: 'Service Image',
      type: 'image',
    }),
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

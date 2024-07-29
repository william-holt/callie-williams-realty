import { HomeIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: HomeIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your personal website.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroImage',
      description: 'This is the top Hero Image of the Home Page',
      title: 'Hero Image',
      type: 'image',
    }),
    defineField({
      name: 'subtitle',
      description: 'This field is the subtitle of the Home Page.',
      title: 'Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'paragraph',
      description: 'This field is the main paragraph of the Home Page.',
      title: 'Paragraph',
      type: 'string',
    }),
    defineField({
      name: 'servicesTitle',
      description: 'This field is the title of the Services Section.',
      title: 'Services Title',
      type: 'string',
    }),
    defineField({
      name: 'servicesBody',
      description: 'This field is the body text of the Services Section.',
      title: 'Services Body',
      type: 'string',
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [{type: 'service'}],
      validation: (rule) => rule.min(3).max(3),
    }),
    defineField({
      name: 'propertiesTitle',
      description: 'This field is the header text of the properties.',
      title: 'Properties Section Title',
      type: 'string',
    }),
    defineField({
      name: 'testimonialsTitle',
      description: 'This field is the header text of the testimonials  section.',
      title: 'Testimonials Section Title',
      type: 'string',
    }),
    defineField({
      name: 'testimonialsText',
      description: 'This field is the body text of the testimonials  section.',
      title: 'Testimonials Section Body',
      type: 'string',
    }),
    defineField({
      name: 'aboutTitle',
      description: 'This field is the header text of the About section.',
      title: 'About Section Title',
      type: 'string',
    }),
    defineField({
      name: 'aboutText',
      description: 'This field is the body text of the About section.',
      title: 'About Section Body',
      type: 'string',
    }),
    defineField({
      name: 'overview',
      description:
        'Used both for the <meta> description tag for SEO, and the personal website subheader.',
      title: 'Description',
      type: 'array',
      of: [
        // Paragraphs
        defineArrayMember({
          lists: [],
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'Url',
                  },
                ],
              },
            ],
            decorators: [
              {
                title: 'Italic',
                value: 'em',
              },
              {
                title: 'Strong',
                value: 'strong',
              },
            ],
          },
          styles: [],
          type: 'block',
        }),
      ],
      validation: (rule) => rule.max(155).required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        subtitle: 'Home',
        title,
      }
    },
  },
})

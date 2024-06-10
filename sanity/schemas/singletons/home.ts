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
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [{type: 'service'}],
    }),
    defineField({
      name: 'serviceOneTitle',
      description: 'This field is the title of the first service.',
      title: 'Service One Title',
      type: 'string',
    }),
    defineField({
      name: 'serviceOneDescription',
      description: 'This field is the description of the first service.',
      title: 'Service One Description',
      type: 'string',
    }),
    defineField({
      name: 'serviceOneLink',
      description: 'This field is the link of the first service.',
      title: 'Service One Link',
      type: 'string',
    }),
    defineField({
      name: 'serviceOneImage',
      description: 'This field is the image of the first service.',
      title: 'Service One Image',
      type: 'image',
    }),
    defineField({
      name: 'serviceTwoTitle',
      description: 'This field is the title of the second service.',
      title: 'Service Two Title',
      type: 'string',
    }),
    defineField({
      name: 'serviceTwoDescription',
      description: 'This field is the description of the second service.',
      title: 'Service Two Description',
      type: 'string',
    }),
    defineField({
      name: 'serviceTwoLink',
      description: 'This field is the link of the second service.',
      title: 'Service Two Link',
      type: 'string',
    }),
    defineField({
      name: 'serviceTwoImage',
      description: 'This field is the image of the second service.',
      title: 'Service Two Image',
      type: 'image',
    }),
    defineField({
      name: 'serviceThreeTitle',
      description: 'This field is the title of the third service.',
      title: 'Service Three Title',
      type: 'string',
    }),
    defineField({
      name: 'serviceThreeDescription',
      description: 'This field is the description of the third service.',
      title: 'Service Three Description',
      type: 'string',
    }),
    defineField({
      name: 'serviceThreeLink',
      description: 'This field is the link of the third service.',
      title: 'Service Three Link',
      type: 'string',
    }),
    defineField({
      name: 'serviceThreeImage',
      description: 'This field is the image of the third service.',
      title: 'Service Three Image',
      type: 'image',
    }),
    defineField({
      name: 'propertiesTitle',
      description: 'This field is the header text of the properties.',
      title: 'Properties Section Title',
      type: 'text',
    }),
    defineField({
      name: 'testimonialsTitle',
      description: 'This field is the header text of the testimonials  section.',
      title: 'Testimonials Section Title',
      type: 'text',
    }),
    defineField({
      name: 'aboutTitle',
      description: 'This field is the header text of the About section.',
      title: 'About Section Title',
      type: 'text',
    }),
    defineField({
      name: 'aboutText',
      description: 'This field is the body text of the About section.',
      title: 'About Section Body',
      type: 'text',
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
    defineField({
      name: 'showcaseProjects',
      title: 'Showcase projects',
      description:
        'These are the projects that will appear first on your landing page.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'project' }],
        }),
      ],
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

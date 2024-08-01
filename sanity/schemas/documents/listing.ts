import { defineArrayMember, defineField, defineType } from 'sanity'

import listingStatus from '@/sanity/schemas/staticFields/listingStatus'
import { mediaAssetSource } from 'sanity-plugin-media'

export default defineType({
  name: 'listing',
  title: 'Listing',
  type: 'document',
  fields: [
    defineField({
      type: 'string',
      name: 'name',
      title: 'Name',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Displayed on social cards and search engine results.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (rule) => rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
    }),
    {
      title: 'Status',
      name: 'status',
      type: 'string',
      options: {
        list: [...listingStatus],
      },
    },
    defineField({
      type: 'string',
      name: 'description',
      title: 'Description',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'location',
      title: 'Location',
      description: 'City and State',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'number',
      name: 'zipcode',
      title: 'Zipcode',
      description: 'Zipcode',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'number',
      name: 'price',
      title: 'Price',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'squareFootage',
      title: 'Square Footage',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'number',
      name: 'bedroomCount',
      title: 'Number of Bedrooms',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'number',
      name: 'bathroomCount',
      title: 'Number of Bathrooms',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'constructionDate',
      title: 'Construction Date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'number',
      name: 'acres',
      title: 'Acres',
    }),
    defineField({
      type: 'string',
      name: 'mlsNumber',
      title: 'MLS Number',
    }),
    defineField({
      type: 'url',
      name: 'mlsUrl',
      title: 'MLS URL',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      description:
        'Tags to help categorize the listing. For example: residential, commercial, industrial, etc. ',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      type: 'array',
      name: 'features',
      title: 'Features',
      description: "This is where you can write the Listing's features.",
      of: [
        // Paragraphs
        defineArrayMember({
          type: 'block',
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
          },
          styles: [],
        }),
      ],
    }),
    defineField({
      name: 'overview',
      description:
        'Used both for the <meta> description tag for SEO, and project subheader.',
      title: 'Overview',
      type: 'array',
      of: [
        // Paragraphs
        defineArrayMember({
          lists: [],
          marks: {
            annotations: [],
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
      name: 'listingImages',
      title: 'Upload Images',
      type: 'array',
      of: [
        { type: 'image',
          fields: [
          {
            name: 'caption',
            type: 'string',
            title: 'Caption',
          },
          {
            name: 'altText',
            type: 'string',
            title: 'Alt Text',
          }
        ]}],
      options: {  },
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{ type: 'testimonial' }],
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
    prepare({ title }) {
      return {
        title,
      }
    },
  },
})

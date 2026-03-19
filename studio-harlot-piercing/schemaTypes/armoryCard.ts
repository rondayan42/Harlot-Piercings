import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'armoryCard',
  title: 'Service Card (The Armory)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'bilingualString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'bilingualString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Description',
      type: 'bilingualText',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'title.en',
      subtitle: 'title.he',
    },
  },
})

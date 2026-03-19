import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aftercareStep',
  title: 'Aftercare Step (The Ritual)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Step Title',
      type: 'bilingualString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Instruction Text',
      type: 'bilingualText',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Step Order',
      type: 'number',
      description: 'The sequence number for this step',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Step Sequence',
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

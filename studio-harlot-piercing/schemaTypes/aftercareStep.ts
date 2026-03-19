import {defineField, defineType} from 'sanity'
import {CheckmarkCircleIcon} from '@sanity/icons'

export default defineType({
  name: 'aftercareStep',
  title: 'Aftercare Step (The Ritual)',
  type: 'document',
  icon: CheckmarkCircleIcon,
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
    prepare(selection: any) {
      const {title, subtitle} = selection
      return {
        title: title ? title : '⚠️ English Missing',
        subtitle: subtitle ? subtitle : '⚠️ Hebrew Missing'
      }
    }
  },
})

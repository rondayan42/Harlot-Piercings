import {defineField, defineType} from 'sanity'
import {HelpCircleIcon} from '@sanity/icons'

export default defineType({
  name: 'faqItem',
  title: 'FAQ (The Inquisition)',
  type: 'document',
  icon: HelpCircleIcon,
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'bilingualString',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
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
      title: 'question.en',
      subtitle: 'question.he',
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

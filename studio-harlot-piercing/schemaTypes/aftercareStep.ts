import {defineField, defineType} from 'sanity'
import {BloodDropIcon} from '../customIcons'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export default defineType({
  name: 'aftercareStep',
  title: 'Aftercare Step (The Ritual)',
  type: 'document',
  icon: BloodDropIcon,
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: 'aftercareStep' }),
    defineField({
      name: 'title',
      title: 'Step Name',
      type: 'bilingualString',
      description: 'A short name for this aftercare step (e.g., "Clean Twice Daily"). Shows as the step heading.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Instruction Details',
      type: 'bilingualText',
      description: 'The full aftercare instruction for this step. Be clear and specific — clients will read this after their piercing.',
      validation: (rule) => rule.required(),
    }),
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
        subtitle: subtitle ? `🇮🇱 ${subtitle}` : '⚠️ Hebrew Missing',
      }
    },
  },
})

import {defineField, defineType} from 'sanity'
import {BloodDropIcon} from '../customIcons'

export default defineType({
  name: 'aftercareStep',
  title: 'Aftercare Step (The Ritual)',
  type: 'document',
  icon: BloodDropIcon,
  fields: [
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
    defineField({
      name: 'order',
      title: 'Step Number',
      type: 'number',
      description: 'The sequence number for this step (1, 2, 3...). Steps are shown in this order on the website.',
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
      order: 'order',
    },
    prepare(selection: any) {
      const {title, subtitle, order} = selection
      return {
        title: order != null ? `Step ${order}: ${title || '⚠️ English Missing'}` : title || '⚠️ English Missing',
        subtitle: subtitle ? `🇮🇱 ${subtitle}` : '⚠️ Hebrew Missing',
      }
    },
  },
})

import {defineField, defineType} from 'sanity'
import {KeyIcon} from '../customIcons'

export default defineType({
  name: 'faqItem',
  title: 'FAQ (The Inquisition)',
  type: 'document',
  icon: KeyIcon,
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'bilingualString',
      description: 'The question a client might ask (e.g., "Does it hurt?"). Shows as the FAQ heading on the website.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'bilingualText',
      description: 'Your answer to the question above. Write this as if you are speaking directly to a client.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Controls the order of FAQs on the website. Lower numbers appear first. Leave at 0 if unsure.',
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
        subtitle: subtitle ? `🇮🇱 ${subtitle}` : '⚠️ Hebrew Missing',
      }
    },
  },
})

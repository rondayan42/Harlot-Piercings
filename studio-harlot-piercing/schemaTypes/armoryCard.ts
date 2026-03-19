import {defineField, defineType} from 'sanity'
import {SwordIcon} from '../customIcons'

export default defineType({
  name: 'armoryCard',
  title: 'Service Card (The Armory)',
  type: 'document',
  icon: SwordIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Service Name',
      type: 'bilingualString',
      description: 'The name of this piercing service (e.g., "Ear Lobe Piercing"). This appears as the card heading on the website.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Short Tagline',
      type: 'bilingualString',
      description: 'A short catchy subtitle shown just below the service name (e.g., "Classic & Timeless").',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Full Description',
      type: 'bilingualText',
      description: 'The detailed description of this service. This is shown when a visitor clicks on the card.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Controls the order of the cards on the website. Lower numbers appear first. Leave at 0 if unsure.',
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
    prepare(selection: any) {
      const {title, subtitle} = selection
      return {
        title: title ? title : '⚠️ English Missing',
        subtitle: subtitle ? `🇮🇱 ${subtitle}` : '⚠️ Hebrew Missing',
      }
    },
  },
})

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'bilingualText',
  title: 'Bilingual Text',
  type: 'object',
  fields: [
    defineField({
      name: 'he',
      title: 'Hebrew',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'en',
      title: 'English',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
  ],
})

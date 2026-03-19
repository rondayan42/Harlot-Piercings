import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'bilingualString',
  title: 'Bilingual String',
  type: 'object',
  fields: [
    defineField({
      name: 'he',
      title: 'Hebrew',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'en',
      title: 'English',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})

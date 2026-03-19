import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'bilingualString',
  title: 'Bilingual String',
  type: 'object',
  options: {
    columns: 2,
  },
  fields: [
    defineField({
      name: 'he',
      title: '🇮🇱 Hebrew',
      type: 'string',
      placeholder: 'הקלד כאן בעברית...',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'en',
      title: '🇬🇧 English',
      type: 'string',
      placeholder: 'Type here in English...',
      validation: (rule) => rule.required(),
    }),
  ],
})

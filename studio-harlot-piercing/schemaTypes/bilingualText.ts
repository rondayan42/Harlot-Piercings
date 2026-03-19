import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'bilingualText',
  title: 'Bilingual Text',
  type: 'object',
  options: {
    columns: 2,
  },
  fields: [
    defineField({
      name: 'he',
      title: '🇮🇱 Hebrew',
      type: 'text',
      placeholder: 'הקלד כאן בעברית...',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'en',
      title: '🇬🇧 English',
      type: 'text',
      placeholder: 'Type here in English...',
      validation: (rule) => rule.required(),
    }),
  ],
})

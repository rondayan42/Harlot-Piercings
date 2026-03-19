import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Global Site Settings',
  type: 'document',
  fields: [
    // META / SEO
    defineField({
      name: 'metaTitle',
      title: 'Site Meta Title',
      type: 'bilingualString',
    }),
    defineField({
      name: 'metaDesc',
      title: 'Site Meta Description',
      type: 'bilingualText',
    }),
    // HERO
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'bilingualString',
    }),
    defineField({
      name: 'heroCta',
      title: 'Hero CTA Button',
      type: 'bilingualString',
    }),
    // ABOUT
    defineField({
      name: 'aboutP1',
      title: 'About - Paragraph 1',
      type: 'bilingualText',
    }),
    defineField({
      name: 'aboutP2',
      title: 'About - Paragraph 2',
      type: 'bilingualText',
    }),
    defineField({
      name: 'aboutP3',
      title: 'About - Paragraph 3',
      type: 'bilingualText',
    }),
    defineField({
      name: 'aboutSignature',
      title: 'About - Signature',
      type: 'bilingualString',
    }),
    // FOOTER (The Ledger)
    defineField({
      name: 'footerAddress',
      title: 'Studio Address',
      type: 'bilingualText',
    }),
    defineField({
      name: 'footerHours',
      title: 'Hours of Operation',
      type: 'bilingualText',
    }),
    defineField({
      name: 'footerCopyright',
      title: 'Copyright Text',
      type: 'bilingualString',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Global Site Settings (Edit Me)'}
    },
  },
})

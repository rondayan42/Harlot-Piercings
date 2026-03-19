import {defineField, defineType} from 'sanity'
import {EarthGlobeIcon} from '@sanity/icons'

export default defineType({
  name: 'siteSettings',
  title: 'Global Site Settings',
  type: 'document',
  icon: EarthGlobeIcon,
  groups: [
    {name: 'seo', title: 'SEO & Meta'},
    {name: 'hero', title: 'Hero Section'},
    {name: 'about', title: 'About Section'},
    {name: 'footer', title: 'Footer Section'},
  ],
  fields: [
    // META / SEO
    defineField({
      name: 'metaTitle',
      title: 'Site Meta Title',
      type: 'bilingualString',
      group: 'seo',
      description: 'The title that appears in browser tabs and search engine results.',
      validation: (Rule) => Rule.custom((value: any) => {
        if (value && (value.en?.length > 60 || value.he?.length > 60)) {
          return 'SEO titles above 60 characters usually get truncated in Google search results.'
        }
        return true
      }).warning(),
    }),
    defineField({
      name: 'metaDesc',
      title: 'Site Meta Description',
      type: 'bilingualText',
      group: 'seo',
      description: 'The short description that appears in search engine results.',
      validation: (Rule) => Rule.custom((value: any) => {
        if (value && (value.en?.length > 160 || value.he?.length > 160)) {
          return 'SEO descriptions above 160 characters usually get truncated in Google search results.'
        }
        return true
      }).warning(),
    }),
    // HERO
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'bilingualString',
      group: 'hero',
      description: 'The text located right under the main "Harlot Piercing" logo.',
    }),
    defineField({
      name: 'heroCta',
      title: 'Hero CTA Button',
      type: 'bilingualString',
      group: 'hero',
      description: 'The text for the main "Book Appointment" button.',
    }),
    // ABOUT
    defineField({
      name: 'aboutP1',
      title: 'About - Paragraph 1',
      type: 'bilingualText',
      group: 'about',
      description: 'The first paragraph of the About section.',
    }),
    defineField({
      name: 'aboutP2',
      title: 'About - Paragraph 2',
      type: 'bilingualText',
      group: 'about',
      description: 'The second paragraph of the About section.',
    }),
    defineField({
      name: 'aboutP3',
      title: 'About - Paragraph 3',
      type: 'bilingualText',
      group: 'about',
      description: 'The third paragraph of the About section.',
    }),
    defineField({
      name: 'aboutSignature',
      title: 'About - Signature',
      type: 'bilingualString',
      group: 'about',
      description: 'The sign-off text at the end of the About section.',
    }),
    // FOOTER (The Ledger)
    defineField({
      name: 'footerAddress',
      title: 'Studio Address',
      type: 'bilingualText',
      group: 'footer',
      description: 'The physical coordinates / address of the studio.',
    }),
    defineField({
      name: 'footerHours',
      title: 'Hours of Operation',
      type: 'bilingualText',
      group: 'footer',
      description: 'The operating hours shown in the footer.',
    }),
    defineField({
      name: 'footerCopyright',
      title: 'Copyright Text',
      type: 'bilingualString',
      group: 'footer',
      description: 'The copyright text at the very bottom of the page.',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Global Site Settings (Edit Me)'}
    },
  },
})

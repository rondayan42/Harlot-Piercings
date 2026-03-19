import {defineField, defineType} from 'sanity'
import {EyeIcon} from '../customIcons'

export default defineType({
  name: 'siteSettings',
  title: 'Global Site Settings',
  type: 'document',
  icon: EyeIcon,
  groups: [
    {name: 'theme', title: '🎨 Theme & Branding'},
    {name: 'seo', title: '🔍 SEO & Meta'},
    {name: 'hero', title: '🏰 Hero Section'},
    {name: 'about', title: '📜 About Section'},
    {name: 'footer', title: '🦶 Footer Section'},
  ],
  fields: [
    // THEME & BRANDING
    defineField({
      name: 'brandColor',
      title: 'Brand Highlight Color',
      type: 'color',
      group: 'theme',
      description: 'Visual color picker to set the primary highlight color of the website.',
      options: {
        disableAlpha: true,
      }
    }),
    // META / SEO
    defineField({
      name: 'metaTitle',
      title: 'Website Title (Browser Tab)',
      type: 'bilingualString',
      group: 'seo',
      description: 'The title that appears in browser tabs and Google search results. Keep it under 60 characters for best results.',
      validation: (Rule) => Rule.custom((value: any) => {
        if (value && (value.en?.length > 60 || value.he?.length > 60)) {
          return 'SEO titles above 60 characters usually get truncated in Google search results.'
        }
        return true
      }).warning(),
    }),
    defineField({
      name: 'metaDesc',
      title: 'Website Description (Google Preview)',
      type: 'bilingualText',
      group: 'seo',
      description: 'The short blurb shown under your website title in Google search results. Keep it under 160 characters.',
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
      description: 'The text shown right under the main "Harlot Piercing" logo at the top of your website.',
    }),
    defineField({
      name: 'heroCta',
      title: 'Hero Button Text',
      type: 'bilingualString',
      group: 'hero',
      description: 'The text on the main call-to-action button (e.g., "Book Appointment").',
    }),
    // ABOUT
    defineField({
      name: 'aboutP1',
      title: 'About — First Paragraph',
      type: 'bilingualText',
      group: 'about',
      description: 'The opening paragraph of the About section. Introduce yourself and your studio.',
    }),
    defineField({
      name: 'aboutP2',
      title: 'About — Second Paragraph',
      type: 'bilingualText',
      group: 'about',
      description: 'The second paragraph. Share your philosophy, specialization, or experience.',
    }),
    defineField({
      name: 'aboutP3',
      title: 'About — Third Paragraph',
      type: 'bilingualText',
      group: 'about',
      description: 'The closing paragraph. Invite clients to visit or make an appointment.',
    }),
    defineField({
      name: 'aboutSignature',
      title: 'About — Sign-Off Name',
      type: 'bilingualString',
      group: 'about',
      description: 'Your name or sign-off at the bottom of the About section (e.g., "— Harlot").',
    }),
    // FOOTER (The Ledger)
    defineField({
      name: 'footerAddress',
      title: 'Studio Address',
      type: 'bilingualText',
      group: 'footer',
      description: 'Your studio\'s physical address as shown in the website footer.',
    }),
    defineField({
      name: 'footerHours',
      title: 'Opening Hours',
      type: 'bilingualText',
      group: 'footer',
      description: 'Your studio\'s operating hours (e.g., "Sun–Thu: 10:00–20:00").',
    }),
    defineField({
      name: 'footerCopyright',
      title: 'Copyright Text',
      type: 'bilingualString',
      group: 'footer',
      description: 'The copyright notice at the very bottom of the page (e.g., "© 2026 Harlot Piercings").',
    }),
  ],
  preview: {
    prepare() {
      return {title: '⚙️ Global Site Settings'}
    },
  },
})

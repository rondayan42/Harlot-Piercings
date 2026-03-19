/**
 * Gallery Image Schema for Sanity CMS
 *
 * This document type allows the piercer to upload and manage gallery images
 * with bilingual captions (Hebrew + English) and accessibility text.
 */
import {ReliquaryIcon} from '../customIcons'

export default {
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  icon: ReliquaryIcon,
  groups: [
    {name: 'media', title: '📷 Image', default: true},
    {name: 'captions', title: '✏️ Captions'},
    {name: 'settings', title: '⚙️ Settings'},
  ],
  fields: [
    {
      name: 'image',
      title: 'Upload Photo',
      type: 'image',
      group: 'media',
      description: 'Upload a photo of your piercing work. Drag & drop or click to choose an image from your computer.',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'titleHe',
      title: '🇮🇱 Hebrew Caption',
      type: 'string',
      group: 'captions',
      description: 'כיתוב בעברית — A short description of the piercing in Hebrew.',
      placeholder: 'e.g., קונסטלציית אוזן',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'titleEn',
      title: '🇬🇧 English Caption',
      type: 'string',
      group: 'captions',
      description: 'A short description of the piercing in English.',
      placeholder: 'e.g., Ear Constellation',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'altText',
      title: 'Image Description (for Accessibility)',
      type: 'string',
      group: 'settings',
      description: 'Describe the image for people who use screen readers (e.g., "Close-up of a gold helix piercing on the left ear").',
      placeholder: 'e.g., Close-up of a gold helix piercing on the left ear',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      group: 'settings',
      description: 'Controls position in the gallery grid. Lower numbers appear first. Leave at 0 if unsure.',
      initialValue: 0,
    },
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
      title: 'titleEn',
      subtitle: 'titleHe',
      media: 'image',
    },
    prepare(selection) {
      const {title, subtitle, media} = selection
      return {
        title: title ? title : '⚠️ English Missing',
        subtitle: subtitle ? `🇮🇱 ${subtitle}` : '⚠️ Hebrew Missing',
        media: media,
      }
    },
  },
}

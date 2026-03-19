/**
 * Gallery Image Schema for Sanity CMS
 * 
 * This document type allows the piercer to upload and manage gallery images
 * with bilingual captions (Hebrew + English) and accessibility text.
 */
export default {
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Enable image cropping/hotspot
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'titleHe',
      title: 'Hebrew Caption',
      type: 'string',
      description: 'כיתוב בעברית (e.g., קונסטלציית אוזן)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'titleEn',
      title: 'English Caption',
      type: 'string',
      description: 'Caption in English (e.g., Ear Constellation)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'altText',
      title: 'Alt Text (Accessibility)',
      type: 'string',
      description: 'Descriptive text for screen readers',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first in the gallery grid',
      initialValue: 0,
    },
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'titleEn',
      subtitle: 'titleHe',
      media: 'image',
    },
  },
};

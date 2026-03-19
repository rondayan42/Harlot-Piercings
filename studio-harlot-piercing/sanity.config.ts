import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {presentationTool} from 'sanity/presentation'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {deskStructure} from './deskStructure'
import {colorInput} from '@sanity/color-input'
import {dashboardTool} from '@sanity/dashboard'
import {media} from 'sanity-plugin-media'
import {documentListWidget} from 'sanity-plugin-dashboard-widget-document-list'
import {welcomeWidget} from './WelcomeWidget'
import {harlotTheme} from './theme'

export default defineConfig({
  name: 'default',
  title: 'Harlot Piercing',
  theme: harlotTheme,

  projectId: 'lxxcsbpk',
  dataset: 'production',

  plugins: [
    dashboardTool({
      widgets: [
        welcomeWidget(),
        documentListWidget({
          title: '🖼️ Recent Gallery Uploads',
          query: '*[_type == "galleryImage"] | order(_createdAt desc)[0...5]',
          layout: {width: 'medium'}
        }),
        documentListWidget({
          title: '📝 Recent Edits',
          query: '*[_type in ["siteSettings", "armoryCard", "aftercareStep", "faqItem", "galleryImage"]] | order(_updatedAt desc)[0...5]',
          layout: {width: 'medium'}
        })
      ]
    }),
    structureTool({structure: deskStructure}),
    media(),
    colorInput(),
    presentationTool({
      previewUrl: 'http://localhost:4321', // Local Astro Dev Server
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },

  document: {
    actions: (prev, context) => {
      // Prevent deleting or duplicating the singleton site settings
      if (context.schemaType === 'siteSettings') {
        return prev.filter((originalAction) => 
          ['publish', 'discardChanges', 'restore'].includes(originalAction.action as string)
        )
      }
      return prev
    },
  },
})

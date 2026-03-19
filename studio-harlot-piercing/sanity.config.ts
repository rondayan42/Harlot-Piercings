import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {presentationTool} from 'sanity/presentation'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {deskStructure} from './deskStructure'

export default defineConfig({
  name: 'default',
  title: 'Harlot Piercing',

  projectId: 'lxxcsbpk',
  dataset: 'production',

  plugins: [
    structureTool({structure: deskStructure}),
    presentationTool({
      previewUrl: 'http://localhost:4321', // Local Astro Dev Server
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})

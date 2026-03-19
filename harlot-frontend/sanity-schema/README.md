# Sanity Studio Setup Guide

This folder contains the pre-built Sanity schema for the Harlot Piercings gallery.

## Quick Setup

1. **Create the Sanity Studio** (run from the Harlot-Piercings root):
   ```bash
   npm create sanity@latest harlot-studio
   ```
   - Choose "Create a new project" (or select an existing one)
   - Name the project: `harlot-piercings`
   - Use the default dataset: `production`
   - Choose the "Clean project" template

2. **Copy the schema** into the studio:
   ```bash
   copy harlot-frontend\sanity-schema\galleryImage.js harlot-studio\schemaTypes\galleryImage.js
   ```

3. **Register the schema** — edit `harlot-studio/schemaTypes/index.js`:
   ```js
   import galleryImage from './galleryImage'
   export const schemaTypes = [galleryImage]
   ```

4. **Start the studio**:
   ```bash
   cd harlot-studio
   npm run dev
   ```

5. **Update Astro env** — edit `harlot-frontend/.env` with your project ID:
   ```
   PUBLIC_SANITY_PROJECT_ID=your-actual-project-id
   PUBLIC_SANITY_DATASET=production
   ```
   You can find your project ID in the Sanity Studio URL or at [sanity.io/manage](https://www.sanity.io/manage).

## What the Schema Provides

The `galleryImage` document type lets the piercer:
- Upload photos with crop/hotspot control
- Add Hebrew + English captions
- Set alt text for accessibility
- Control display order via a number field

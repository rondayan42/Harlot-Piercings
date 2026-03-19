import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || '';
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';

// Only create the client if a real project ID is configured
const isSanityConfigured = projectId && projectId !== 'YOUR_PROJECT_ID';

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      useCdn: false, // Set to false to see immediate updates
      apiVersion: '2024-01-01',
      stega: {
        enabled: true,
        studioUrl: 'http://localhost:3333',
      },
    })
  : null;

const builder = isSanityConfigured ? createImageUrlBuilder(sanityClient) : null;

export function urlFor(source) {
  if (!builder) return { width: () => ({ height: () => ({ url: () => '' }) }) };
  return builder.image(source);
}

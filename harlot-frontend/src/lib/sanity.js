import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || '';
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';

// Only create the client if a real project ID is configured
const isSanityConfigured = projectId && projectId !== 'YOUR_PROJECT_ID';

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      useCdn: true,
      apiVersion: '2024-01-01',
    })
  : null;

const builder = isSanityConfigured ? imageUrlBuilder(sanityClient) : null;

export function urlFor(source) {
  if (!builder) return { width: () => ({ height: () => ({ url: () => '' }) }) };
  return builder.image(source);
}

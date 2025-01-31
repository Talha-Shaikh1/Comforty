import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, token } from '../env'

console.log("Sanity Project ID before createClient:", projectId);

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token,

  stega: {
    studioUrl: process.env.NODE_ENV === 'production' ? `https://${process.env.VERCEL_URL}/studio`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/studio`
  }
})

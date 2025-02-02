import { createClient } from 'next-sanity'

import { apiVersion, dataset, token } from '../env'


export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token,

  stega: {
    studioUrl: process.env.NODE_ENV === 'production' ? `https://${process.env.VERCEL_URL}/studio`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/studio`
  }
})

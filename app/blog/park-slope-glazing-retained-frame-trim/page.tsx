import NeighborhoodGlassArticle, { metadataForGuide } from '@/components/NeighborhoodGlassArticle'

const slug = 'park-slope-glazing-retained-frame-trim'
export const metadata = metadataForGuide(slug)
export default function Page() { return <NeighborhoodGlassArticle slug={slug} /> }

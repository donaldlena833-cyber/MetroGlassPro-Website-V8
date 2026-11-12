import NeighborhoodGlassArticle, { metadataForGuide } from '@/components/NeighborhoodGlassArticle'

const slug = 'chelsea-compare-glass-finishes-in-place'
export const metadata = metadataForGuide(slug)
export default function Page() { return <NeighborhoodGlassArticle slug={slug} /> }

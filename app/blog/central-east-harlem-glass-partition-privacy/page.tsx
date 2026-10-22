import NeighborhoodGlassArticle, { metadataForGuide } from '@/components/NeighborhoodGlassArticle'

const slug = 'central-east-harlem-glass-partition-privacy'
export const metadata = metadataForGuide(slug)
export default function Page() { return <NeighborhoodGlassArticle slug={slug} /> }

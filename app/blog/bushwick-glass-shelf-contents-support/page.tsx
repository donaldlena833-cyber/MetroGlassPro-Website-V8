import NeighborhoodGlassArticle, { metadataForGuide } from '@/components/NeighborhoodGlassArticle'

const slug = 'bushwick-glass-shelf-contents-support'
export const metadata = metadataForGuide(slug)
export default function Page() { return <NeighborhoodGlassArticle slug={slug} /> }

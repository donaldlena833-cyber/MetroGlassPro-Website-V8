import NeighborhoodGlassArticle, { metadataForGuide } from '@/components/NeighborhoodGlassArticle'

const slug = 'lower-east-side-window-condensation-check'
export const metadata = metadataForGuide(slug)
export default function Page() { return <NeighborhoodGlassArticle slug={slug} /> }

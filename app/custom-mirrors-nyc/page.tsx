import GlassServicePage, { glassServiceMetadata } from '@/components/GlassServicePage'

export const metadata = glassServiceMetadata('custom-mirrors')

export default function Page() {
  return <GlassServicePage id="custom-mirrors" />
}

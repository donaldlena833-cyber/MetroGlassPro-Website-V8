import GlassServicePage, { glassServiceMetadata } from '@/components/GlassServicePage'

export const metadata = glassServiceMetadata('glass-partitions')

export default function Page() {
  return <GlassServicePage id="glass-partitions" />
}

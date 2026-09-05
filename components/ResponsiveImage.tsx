import type { ImgHTMLAttributes } from 'react'
import images from '@/lib/responsive-images.json'

type ImageAsset = { width: number; height: number; src: string; srcSet: string }
type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> & { src: string; alt: string }

// Native responsive images need no client-side image component or resize API.
// Keep explicit dimensions and loading priorities supplied by each page.
export default function ResponsiveImage({ src, alt, sizes = '(min-width: 1280px) 1200px, 100vw', ...props }: Props) {
  const asset = (images as Record<string, ImageAsset>)[src]
  return <img
    src={asset?.src || src}
    srcSet={asset?.srcSet}
    sizes={asset ? sizes : undefined}
    width={asset?.width}
    height={asset?.height}
    decoding="async"
    alt={alt}
    {...props}
  />
}

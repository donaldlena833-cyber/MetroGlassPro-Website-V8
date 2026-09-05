import { createHash } from 'node:crypto'
import { access, mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

// Static exports have no image-resizing server. Generate responsive assets once
// during the build and keep original URLs available for links and social cards.
const publicRoot = path.resolve('public')
const output = path.join(publicRoot, 'optimized')
const widths = [320, 640, 960, 1440]
const quality = 78
const manifest = {}
await mkdir(output, { recursive: true })

async function imagesIn(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = await Promise.all(entries.map((entry) => {
    const filename = path.join(directory, entry.name)
    if (entry.isDirectory()) return imagesIn(filename)
    return /\.(?:jpe?g|png|webp)$/i.test(entry.name) ? [filename] : []
  }))
  return files.flat().sort()
}

const originals = (await Promise.all(['gallery', 'editorial'].map((directory) => imagesIn(path.join(publicRoot, directory))))).flat()
for (const filename of originals) {
  const source = await readFile(filename)
  const metadata = await sharp(source).metadata()
  // Some archived phone originals have a .jpg name but contain HEIC data.
  // They are not web photos; leave those archive files alone.
  if (!['jpeg', 'png', 'webp'].includes(metadata.format)) continue
  // Honour EXIF orientation, including phone photos rotated by 90 degrees.
  const rotated = [5, 6, 7, 8].includes(metadata.orientation)
  const width = rotated ? metadata.height : metadata.width
  const height = rotated ? metadata.width : metadata.height
  if (!width || !height) throw new Error(`Missing image dimensions: ${filename}`)
  const hash = createHash('sha256').update(source).update(`webp-v1-${quality}`).digest('hex').slice(0, 16)
  const key = '/' + path.relative(publicRoot, filename).split(path.sep).join('/')
  const candidates = [...new Set([...widths.filter((size) => size < width), Math.min(width, widths.at(-1))])]
  const variants = []
  for (const size of candidates) {
    const name = `${hash}-${size}.webp`
    const target = path.join(output, name)
    const exists = await access(target).then(() => true, () => false)
    if (!exists) {
      try {
        await sharp(source).rotate().resize({ width: size, withoutEnlargement: true }).webp({ quality, effort: 4 }).toFile(target)
      } catch (error) {
        throw new Error(`Could not optimize ${key} at ${size}px`, { cause: error })
      }
    }
    variants.push({ src: `/optimized/${name}`, width: size })
  }
  manifest[key] = { width, height, src: variants.at(-1).src, srcSet: variants.map((variant) => `${variant.src} ${variant.width}w`).join(', ') }
}

await writeFile(path.resolve('lib/responsive-images.json'), JSON.stringify(manifest, null, 2) + '\n')
console.log(`Prepared responsive WebP images for ${Object.keys(manifest).length} photos.`)

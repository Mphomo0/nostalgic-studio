import sharp from 'sharp'
import { mkdirSync } from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

const src = resolve(root, 'public/images/Mpho.jpg')
const dest = resolve(root, 'public/images/team/mpho-moipolai.webp')

mkdirSync(dirname(dest), { recursive: true })

await sharp(src)
  .resize(480, 480, { fit: 'cover', position: 'top' })
  .webp({ quality: 85 })
  .toFile(dest)

console.log(`✓ Converted ${src} → ${dest}`)

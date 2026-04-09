import { PrismaClient } from '@prisma/client'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const prisma = new PrismaClient()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function main() {
  const filePath = path.resolve(__dirname, '../../src/database/products.json')
  const raw = await fs.readFile(filePath, 'utf-8')
  const parsed = JSON.parse(raw)
  const list = Array.isArray(parsed.products) ? parsed.products : []

  const data = list.map((p) => ({
    name: String(p.name),
    description: typeof p.description === 'string' ? p.description : null,
    priceCents: Math.round(Number(p.price) * 100),
  }))

  await prisma.product.deleteMany()

  if (data.length > 0) {
    await prisma.product.createMany({ data })
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

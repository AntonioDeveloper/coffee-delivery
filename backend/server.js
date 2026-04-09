import 'dotenv/config'
import express from 'express'
import { PrismaClient } from '@prisma/client'
import { randomBytes } from 'node:crypto'

const app = express()
const prisma = new PrismaClient()

app.use(express.json())

app.get('/health', async (_req, res) => {
  res.json({ ok: true })
})

app.get('/products', async (_req, res) => {
  const products = await prisma.product.findMany({ orderBy: { createdAt: 'desc' } })
  res.json(products)
})

app.get('/orders', async (_req, res) => {
  const orders = await prisma.order.findMany({ orderBy: { createdAt: 'desc' } })
  res.json(orders);
})

app.post('/products', async (req, res) => {
  const { name, priceCents, description } = req.body ?? {}

  if (typeof name !== 'string' || name.trim().length === 0) {
    return res.status(400).json({ error: 'name é obrigatório' })
  }

  if (typeof priceCents !== 'number' || !Number.isInteger(priceCents) || priceCents < 0) {
    return res.status(400).json({ error: 'priceCents deve ser um inteiro >= 0' })
  }

  const product = await prisma.product.create({
    data: {
      name: name.trim(),
      priceCents,
      description: typeof description === 'string' ? description : null,
    },
  })

  return res.status(201).json(product)
})

app.post('/orders', async (req, res) => {
  const {items, status, createdAt, total} = req.body ?? {};

  if(!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({
      error: "'items' deve ser um array não vazio"
    });
  }

  const orderId = randomBytes(4).toString('hex');

  const order = await prisma.order.create({
    data: {
      id: orderId,
      items: {
        create: items.map((item) => ({
          productId: item.productId,
          quantity: item.quantity,
          price: item.price,
        })),
      },
      total: items.reduce((acc, curr) => {
        return acc + curr.quantity * curr.price
      }, 0),
      status: status,
      createdAt: createdAt
    },
  })

  return res.status(201).json(order);
});

app.use((err, _req, res, _next) => {
  if (err instanceof Error) {
    return res.status(500).json({ error: err.message })
  }
  return res.status(500).json({ error: 'Erro inesperado' })
})

const port = Number(process.env.PORT ?? 3333)

try {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL não encontrado. Configure no arquivo .env')
  }

  await prisma.$connect()
  app.listen(port, () => {
    process.stdout.write(`API rodando em http://localhost:${port}\n`)
  })
} catch (error) {
  const message = error instanceof Error ? error.message : String(error)
  process.stderr.write(`${message}\n`)
  process.exit(1)
}

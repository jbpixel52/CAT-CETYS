import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()

export default async function handle(req, res) {
  const campos = await prisma.camposBase.findMany()
  res.json(campos)
}
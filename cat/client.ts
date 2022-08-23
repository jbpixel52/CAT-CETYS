import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


async function main() {
    // Connect the client
    await prisma.$connect()
    console.log('Connected to database');
    
    // ... you will write your Prisma Client queries here
    await prisma.globales_Cartas.create({
        data:{
            CODIGO_MATERIA:{
                "CETYS" : "wah",
                "CASEI" : "weh"
            }
        }
    })
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

export default prisma
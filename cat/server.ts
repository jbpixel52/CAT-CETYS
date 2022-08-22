import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


async function main() {
    console.log("uuuud")
    const post = await prisma.globales_Cartas.create({
        data:{
            CODIGO_MATERIA:{
                "CETYS" : "wah",
                "CASEI" : "weh"
            }
        }
    })
    console.log(post)
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
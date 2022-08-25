import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


async function main() {
    // Connect the client
    await prisma.$connect()
    console.log('Connected to database');
    
    // ... you will write your Prisma Client queries here 
    await prisma.globales_Cartas.create({
        data:
        {
            NOMBRE_MATERIA:{
              CETYS: "Materia 1",
              CASEI: "Materia CASEI"
            },
            REQUISITOS_MATERIA:{
              CETYS: "Requisito CETYS",
              CASEI: "Materia CASEI"
            },
            NOMBRE_CARRERA:{
              CETYS: "Nombre CETYS",
              CASEI: "Nombre CASEI"
            },
            CLAVE_MATERIA:{
              CETYS: "Clave CETYS",
              CASEI: "Clave CASEI"
            },
            SEMESTRE:{
              CETYS: "Semestre CETYS",
              CASEI: "Semestre CASEI"
            },
            TIPO_CURSO:{
              CETYS: "Tipo CETYS",
              CASEI: "Semestre CASEI"
            },
            TOTAL_HORAS_CLASE:{
              CETYS: "Total CETYS",
              CASEI: "Total CASEI"
            },
            OBJETIVOS_CURSO:{
              CETYS: "Objetivos CETYS",
              CASEI: "Objetivos CASEI"
            },
            APORTACION_CURSO_CACEI:{
              CETYS: "Aportacion CETYS CACEI",
              CASEI: "Aportacion CASEI CACEI"
            },
            APORTACION_CURSO_PE:{
              CETYS: "Aportacion CETYS PE",
              CASEI: "Aportacion CASEI PE"
            },
            DATOS_RELEVANTES_CURSO:{
              CETYS: "Datps CETYS",
              CASEI: "Datos CACEI"
            },
            TEMAS_CURSO:{
              CETYS: "Temas CETYS",
              CASEI: "Temas CACEI"
            },
            ESTRATEGIAS_ENSENANZA:{
              CETYS: "Estrategias CETYS",
              CASEI: "Estrategias CACEI"
            },
            ESTRATEGIAS_EVALUACION:{
              CETYS: "Estrategias CETYS",
              CASEI: "Estrategias CACEI"
            },
            PRACTICAS:{
              CETYS: "Practicas CETYS",
              CASEI: "Practicas CACEI"
            },
            BIBLIOGRAFIA:{
              CETYS: "Biblio CETYS",
              CASEI: "BIblio CACEI"
            },
            PROFESOR:{
              CETYS: "Profesor CETYS",
              CASEI: "Profesor CACEI"
            },
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
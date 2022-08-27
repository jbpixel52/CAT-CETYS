import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()
const noValueGlobal: string = "NONE";


async function makeEquivalenceTable() {
    // Connect the client
    await prisma.$connect()
    console.log('Connected to database');

    await prisma.globales_Cartas.create({
        data:
        {
            NOMBRE_MATERIA:{
              CETYS: "Nombre de la asignatura",
              CASEI: "2. Nombre del curso",
              ABET:  "1. Course number and name"
            },
            REQUISITOS_MATERIA:{
              CETYS: "Seriación/Prerrequisito",
              CASEI: "3. Seriación o prerrequisitos",
              ABET: noValueGlobal
            },
            NOMBRE_CARRERA:{
              CETYS: "PROGRAMA ACADÉMICO",
              CASEI: noValueGlobal,
              ABET: noValueGlobal
            },
            CLAVE_MATERIA:{
              CETYS: "Clave",
              CASEI: "1. Clave del curso",
              ABET:  "1. Course number and name"
            },
            SEMESTRE:{
              CETYS: "Periodo/Ciclo",
              CASEI: "4. Ubicación (periodo en que se imparte)",
              ABET: noValueGlobal
            },
            NIVEL_ACADEMICO:{
              CETYS: "Línea curricular",
              CASEI: noValueGlobal,
              ABET: noValueGlobal
            },
            TIPO_CURSO:{
              CETYS: "Tipo",
              CASEI: "5. Tipo de curso",
              ABET: noValueGlobal
            },
            TOTAL_HORAS_CLASE:{
              CETYS: "Total CETYS",
              CASEI: "6. Horas totales",
              ABET: noValueGlobal
            },
            OBJETIVOS_CURSO:{
              CETYS: "Objetivos CETYS",
              CASEI: "7. Objetivos del curso \n Principales resultados de aprendizaje (indicadores de los AE)",
              ABET:  "6. Specific goals for the course"
            },
            APORTACION_CURSO_CACEI:{
              CETYS: "Aportacion CETYS CACEI",
              CASEI: "9. Aportación del curso a los atributos de egreso del CACEI",
              ABET: noValueGlobal
            },
            APORTACION_CURSO_PE:{
              CETYS: "Aportacion CETYS PE",
              CASEI: "8. Aportación del curso a los atributos de egreso del PE",
              ABET: noValueGlobal
            },
            DATOS_RELEVANTES_CURSO:{
              CETYS: "Datps CETYS",
              CASEI: "10. Datos relevantes del curso",
              ABET: noValueGlobal
            },
            INFORMACION_ESPECIFICA:{
              CETYS: noValueGlobal,
              CASEI: noValueGlobal,
              ABET: "5.	Specific course information"
            },
            TEMAS_CURSO:{
              CETYS: "Temas CETYS",
              CASEI: "11. Contenido sintético del curso",
              ABET:  "7. Brief list of topics to be covered"
            },
            ESTRATEGIAS_ENSENANZA:{
              CETYS: "Estrategias CETYS",
              CASEI: "12. Principales estrategias de enseñanza",
              ABET: noValueGlobal
            },
            ESTRATEGIAS_EVALUACION:{
              CETYS: "Estrategias CETYS",
              CASEI: "13. Principales estrategias de evaluación",
              ABET: noValueGlobal
            },
            PRACTICAS:{
              CETYS: "Practicas CETYS",
              CASEI: "14. Prácticas",
              ABET: noValueGlobal
            },
            BIBLIOGRAFIA:{
              CETYS: "Biblio CETYS",
              CASEI: "15. Bibliografía",
              ABET:   "4. Text book, title, author, and year"
            },
            PROFESORADO:{
              CETYS: "Profesor CETYS",
              CASEI: "16. Profesores",
              ABET:  "3.	Instructor's or course coordinator's name"
            },
        }
    })
}


makeEquivalenceTable()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

console.log('Finished writing equivalence table');  
export default prisma
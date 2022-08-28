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
          EJES:{
            CETYS: [noValueGlobal],
            CASEI: "5. Tipo de curso",
            ABET: [noValueGlobal,"Ciencias Básicas", "Ciencias de la Ingeniería", "Ingeniería Aplicada",
                  "Diseño en Ingeniería", "C. Sociales y Humanidades", "C. Económ. Administrat", "Otros Cursos"]
          },
          MODALIDAD:{
            CETYS: "Modalidad: ",
            CASEI: noValueGlobal,
            ABET: noValueGlobal
          },
          IDIOMA:{
            CETYS: "Idioma de impartición",
            CASEI: noValueGlobal,
            ABET: noValueGlobal
          },
          CREDITOS:{
            CETYS: "Créditos (CR)",
            CASEI: noValueGlobal,
            ABET: "2.	Credits, contact hours, and categorization of credits"
          },
          INSTALACIONES:{
            CETYS: "Instalaciones",
            CASEI: noValueGlobal,
            ABET: noValueGlobal
          },
          HORAS_CLASE:{
            CETYS: "Número de horas con docente al semestre (HDT+HDP)",
            CASEI: "6. Horas totales",
            ABET: noValueGlobal
          },
          HORAS_CLASE_SEMANALES:{
            CETYS: "Número de horas teóricas y prácticas con docente semanal (HTs y  HPs)",
            CASEI: "10.a Horas a la semana",
            ABET: noValueGlobal
          },
          HORAS_CLASE_INDEPENDIENTES:{
            CETYS: "Número de horas de estudio independiente al semestre (HI)",
            CASEI: noValueGlobal,
            ABET: noValueGlobal
          },
          HORAS_CLASE_INDEPENDIENTES_SEMANALES:{
            CETYS: "Número de horas de estudio independiente semanal (HIs)",
            CASEI: noValueGlobal,
            ABET: noValueGlobal
          },
          HORAS_CLASE_TOTALES:{
            CETYS: "Número total de horas al semestre HT (HDT+HDP+HI)",
            CASEI: noValueGlobal,
            ABET: noValueGlobal
          },
          HORAS_CLASE_TOTALES_SEMANALES:{
            CETYS: "Total de horas a la semana (HTs+HPs+HIs)",
            CASEI: noValueGlobal,
            ABET: noValueGlobal
          },
          OBJETIVOS_CURSO:{
            CETYS: "Propósito general del curso",
            CASEI: "7. Objetivos del curso \n Principales resultados de aprendizaje (indicadores de los AE)",
            ABET:  "6. Specific goals for the course"
          },
          APORTACION_CURSO_CACEI:{
            CETYS: noValueGlobal,
            CASEI: "9. Aportación del curso a los atributos de egreso del CACEI",
            ABET: noValueGlobal
          },
          APORTACION_CURSO_PE:{
            CETYS: noValueGlobal,
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
          UNIDAD:{
            CETYS: "Unidad de competencia ",
            CASEI: "",
            ABET:  ""
          },
          TEMAS_CURSO:{
            CETYS: "Contenidos curriculares",
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
            CETYS: noValueGlobal,
            CASEI: "14. Prácticas",
            ABET: noValueGlobal
          },
          BIBLIOGRAFIA:{
            CETYS: {
              BASICA: "Bibliografía básica",
              COMPLEMENTARIA: "Bibliografía complementaria",
              ELECTRONICOS: "Recursos electrónicos",
              APOYOS: "Apoyos y recursos"
            },
            CASEI: "15. Bibliografía",
            ABET:   "4. Text book, title, author, and year"
          },
          PROFESORADO:{
            CETYS: "Perfil del docente",
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
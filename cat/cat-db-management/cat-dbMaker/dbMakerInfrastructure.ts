import { PrismaClient } from '@prisma/client'
import { json } from 'node:stream/consumers';
import { notNull } from 'jest-mock-extended';

const prisma = new PrismaClient()
const noValueGlobal: string = "NONE";
const enum fieldTypes {
  soloTexto = "SOLO_TEXTO",
  simple = "1 a 1",
  oneToList = "1 a lista",
  oneToTable = "1 a tabla",
  selectionWOName = "Seleccion s/nombre",
  selectionWName = "Seleccion c/nombre",
  sectionTitle = "Titulo seccion"
}

export class DbMakerInfrastructure{

  public dbMakerInfrastucture(){

  }

  public MakeField(){
    // Connect the client
    prisma.$connect()
    console.log('Connected to database');
  
    prisma.camposBase.create({
      data:
      {
        NOMBRE_CAMPO: {
          CETYS: "Contenidos curriculares",
          CACEI: "",  
          WASC: "",
          ABET: ""
        },
        DESCRIPCION_CAMPO: "Temas de la unidad",
        TIPO_CAMPO: fieldTypes.oneToList,
        OPCIONES_SELECCION: [],
        NOMBRES_OPCIONES_SELECCION: []
      }
    });
  }


  public async getFields() {
    let result = await prisma.camposBase.findMany()
    return result;
  }
}


// MakeField()
// .then(async () => {
//   await prisma.$disconnect()
// })
// .catch(async (e) => {
//   console.error(e)
//   await prisma.$disconnect()
//   process.exit(1)
// })

export default prisma
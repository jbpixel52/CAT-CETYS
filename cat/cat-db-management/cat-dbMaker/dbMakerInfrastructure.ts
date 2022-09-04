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
  twoToTable = "2 a tabla",
  selectionWOName = "Seleccion s/nombre",
  selectionWName = "Seleccion c/nombre",
  sectionTitle = "Titulo seccion"
}


export class DbMakerInfrastructure{

  public dbMakerInfrastucture(){

  }

  public async MakeField(){
    // Connect the client
    prisma.$connect()
    console.log('Connected to database');
  
    await prisma.camposBase.create({
      data:
      {
        NOMBRE_CAMPO: {
          CETYS: "Pie de carta",
          CACEI: "",  
          WASC: "",
          ABET: ""
        },
        DESCRIPCION_CAMPO: "Datos que describen el pie de carta como fecha de entrega y director del colegio de Ingeniería",
        TIPO_CAMPO: fieldTypes.soloTexto,
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

let dbMakerInfrastructure = new DbMakerInfrastructure();
dbMakerInfrastructure.MakeField()
.then(async () => {
  await prisma.$disconnect()
})
.catch(async (e) => {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
})

export default prisma
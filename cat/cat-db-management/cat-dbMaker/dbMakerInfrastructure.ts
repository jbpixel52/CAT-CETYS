import { PrismaClient } from '@prisma/client'
import { json } from 'node:stream/consumers';
import { notNull } from 'jest-mock-extended';
import { MakeFieldRequest } from '../makeFieldRequest';

const prisma = new PrismaClient()
const noValueGlobal: string = "NONE";
export const enum fieldTypes {
  soloTexto = "SOLO_TEXTO",
  simple = "VALOR_SIMPLE",
  oneToTable = "VALOR_TABLA",
}


export class DbMakerInfrastructure{

  public dbMakerInfrastucture(){

  }

  public async MakeFieldManual(){
    // Connect the client
    prisma.$connect()
    console.log('Connected to database');
  
    await prisma.camposBase.create({
      data:
      {
        NOMBRE_CAMPO: {
          CETYS: "",
          CACEI: "16.b Otros instructores (últimos dos años",  
          WASC: "",
          ABET: ""
        },
        DESCRIPCION_CAMPO: "Otros profesores que hayan dado la materia en los ultimos dos años",
        TIPO_CAMPO: fieldTypes.oneToTable,
        OPCIONES_SELECCION: [],
        NOMBRES_OPCIONES_SELECCION: []
      }
    });
  }

  public async makeTemplateField(createTemplateFieldRequest: MakeFieldRequest){
    prisma.$connect()
    console.log('Connected to database');
  
    await prisma.camposBase.create({
      data:
      {
        NOMBRE_CAMPO: {
          CETYS: createTemplateFieldRequest.nombreCampo["CETYS"],
          CACEI: createTemplateFieldRequest.nombreCampo["CACEI"],  
          WASC: createTemplateFieldRequest.nombreCampo["WASC"],
          ABET: createTemplateFieldRequest.nombreCampo["ABET"]
        },
        DESCRIPCION_CAMPO: createTemplateFieldRequest.descripcionCampo,
        TIPO_CAMPO: createTemplateFieldRequest.tipoCampo,
      }
    });
  }

  public async getFields() {
    let result = await prisma.camposBase.findMany()
    return result;
  }
}

let dbMakerInfrastructure = new DbMakerInfrastructure();
dbMakerInfrastructure.MakeFieldManual()
.then(async () => {
  await prisma.$disconnect()
})
.catch(async (e) => {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
})

export default prisma
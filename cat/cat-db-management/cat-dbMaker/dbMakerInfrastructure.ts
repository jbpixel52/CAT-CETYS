import { PrismaClient } from '@prisma/client'
import { json } from 'node:stream/consumers';
import { notNull } from 'jest-mock-extended';
import { MakeFieldRequest } from '../makeFieldRequest';
import { Decimal } from '@prisma/client/runtime';

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

  public async makeTemplateField(createTemplateFieldRequest: MakeFieldRequest){
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

  public async deleteTemplateField(fieldId: string){
    let result = await prisma.camposBase.delete({
      where: {
        id: fieldId
      }
    });
  }

  public async getTemplateField(fieldId: string){
    let result = await prisma.camposBase.findFirst({
      where:{
        id: {
          equals: fieldId
        }
      }
    });

    return result
  }

  public async getTemplateFields() {
    let result = await prisma.camposBase.findMany()
    return result;
  }
}

export default prisma
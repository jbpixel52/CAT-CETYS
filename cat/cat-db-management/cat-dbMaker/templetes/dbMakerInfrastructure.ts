import { Prisma, PrismaClient } from '@prisma/client'
import { MakeFieldRequest } from '../makeFieldRequest';
import { UpdateFieldRequest } from '../updateFieldRequest';

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

  public async updateTemplateField(editTemplateFieldRequest: UpdateFieldRequest){
    try{
      await prisma.camposBase.update({
        where:{
          id: editTemplateFieldRequest.id,
        },
        data:
        {
          NOMBRE_CAMPO: {
            CETYS: editTemplateFieldRequest.nombreCampo["CETYS"],
            CACEI: editTemplateFieldRequest.nombreCampo["CACEI"],  
            WASC: editTemplateFieldRequest.nombreCampo["WASC"],
            ABET: editTemplateFieldRequest.nombreCampo["ABET"]
          },
          DESCRIPCION_CAMPO: editTemplateFieldRequest.descripcionCampo,
          TIPO_CAMPO: editTemplateFieldRequest.tipoCampo,
        },
      });
    }
    catch(error){
      if (error instanceof Prisma.PrismaClientKnownRequestError){
        if(error.code === 'P2023'){
          throw new Error("id dada es en formato incorrecto");
        }
      }
    }
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
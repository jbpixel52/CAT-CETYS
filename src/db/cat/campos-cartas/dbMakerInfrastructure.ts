import { Prisma, PrismaClient } from '@prisma/client'
import { MakeFieldRequest } from '../makeFieldRequest';
import { UpdateFieldRequest } from '../updateFieldRequest';

const prisma = new PrismaClient()


export class DbMakerInfrastructure{

  static instance: DbMakerInfrastructure;

  private constructor() {
      console.log("--");
  }

  public static getInstance(): DbMakerInfrastructure {
      if (!DbMakerInfrastructure.instance) {
        DbMakerInfrastructure.instance = new DbMakerInfrastructure();
      }
      return DbMakerInfrastructure.instance;
  }

  public async makeSyllabusField(createSyllabusFieldRequest: MakeFieldRequest){
    await prisma.camposCartas.create({
      data:
      {
        NOMBRE_CAMPO: {
          CETYS: createSyllabusFieldRequest.nombreCampo["CETYS"],
          CACEI: createSyllabusFieldRequest.nombreCampo["CACEI"],
          WASC: createSyllabusFieldRequest.nombreCampo["WASC"],
          ABET: createSyllabusFieldRequest.nombreCampo["ABET"]
        },
        DESCRIPCION_CAMPO: createSyllabusFieldRequest.descripcionCampo,
        TIPO_CAMPO: createSyllabusFieldRequest.tipoCampo,
        CONTENIDO_CAMPO:{
          CETYS: createSyllabusFieldRequest.contenidoCampo["CETYS"],
          CACEI: createSyllabusFieldRequest.contenidoCampo["CACEI"],
          WASC: createSyllabusFieldRequest.contenidoCampo["WASC"],
          ABET: createSyllabusFieldRequest.contenidoCampo["ABET"]
        },
      }
    });
  }

  public async updateSyllabusField(editSyllabusFieldRequest: UpdateFieldRequest){
    try{
      await prisma.camposCartas.update({
        where:{
          id: editSyllabusFieldRequest.id,
        },
        data:
        {
          NOMBRE_CAMPO: {
            CETYS: editSyllabusFieldRequest.nombreCampo["CETYS"],
            CACEI: editSyllabusFieldRequest.nombreCampo["CACEI"],  
            WASC: editSyllabusFieldRequest.nombreCampo["WASC"],
            ABET: editSyllabusFieldRequest.nombreCampo["ABET"]
          },
          DESCRIPCION_CAMPO: editSyllabusFieldRequest.descripcionCampo,
          TIPO_CAMPO: editSyllabusFieldRequest.tipoCampo,
          CONTENIDO_CAMPO:{
            CETYS: editSyllabusFieldRequest.contenidoCampo["CETYS"],
            CACEI: editSyllabusFieldRequest.contenidoCampo["CACEI"],  
            WASC: editSyllabusFieldRequest.contenidoCampo["WASC"],
            ABET: editSyllabusFieldRequest.contenidoCampo["ABET"]
          },
        },
      });
    }
    catch(error){
      if (error instanceof Prisma.PrismaClientKnownRequestError){
        if(error.code === 'P2023'){
          throw new Error("id dada es en formato incorrecto");
        }
      }
      else{
        throw new Error(error.message);
      }
    }
  }

  public async deleteSyllabusField(fieldId: string){
    let result = await prisma.camposCartas.delete({
      where: {
        id: fieldId
      }
    });
  }

  public async getSyllabusField(fieldId: string){
    let result = await prisma.camposCartas.findFirst({
      where:{
        id: {
          equals: fieldId
        }
      }
    });

    return result
  }

  public async getSyllabusFields() {
    let result = await prisma.camposCartas.findMany()
    return result;
  }
}

export default prisma
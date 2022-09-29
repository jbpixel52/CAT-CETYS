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

  public async makeRow(createRowRequest: MakeFieldRequest){
    await prisma.filasCartas.create({
      data:
      {
        filaJSON: createRowRequest["FILA_JSON"],
        ACREDITADORA: createRowRequest["ACREDITADORA"],
        HIDE_FLAG: createRowRequest["HIDE_FLAG"]
      }
    });
  }

  public async updateRow(editRowRequest: UpdateFieldRequest){
    try{
      await prisma.filasCartas.update({
        where:{
          id: editRowRequest.id,
        },
        data:
        {
          filaJSON: editRowRequest["FILA_JSON"],
          ACREDITADORA: editRowRequest["ACREDITADORA"],
          HIDE_FLAG: editRowRequest["HIDE_FLAG"]
        }
      });
    }
    catch(error){
      if (error instanceof Prisma.PrismaClientKnownRequestError){
        if(error.code === 'P2023'){
          throw new Error("id dada es en formato incorrecto");
        }
      }else{
        throw new Error(error.message);
      }
    }
  }

  public async removeRow(rowId: string){
    let result = await prisma.filasCartas.delete({
      where: {
        id: rowId
      }
    });
  }

  public async getRow(rowId: string){
    let result = await prisma.filasCartas.findFirst({
      where:{
        id: {
          equals: rowId
        }
      }
    });

    return result
  }

  public async getRows() {
    let result = await prisma.filasCartas.findMany()
    return result;
  }
}

export default prisma
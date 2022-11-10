import { Prisma, PrismaClient } from '@prisma/client'
import { UpdateRowRequest } from '../updateRowRequest';
import { MakeRowRequest } from '../makeRowRequest';

const prisma = new PrismaClient()
const noValueGlobal: string = "NONE";
export const enum fieldTypes {
  soloTexto = "SOLO_TEXTO",
  simple = "VALOR_SIMPLE",
  oneToTable = "VALOR_TABLA",
}


export class DbMakerInfrastructure {

  public dbMakerInfrastucture() {

  }

  public async makeRow(createRowRequest: MakeRowRequest) {
    await prisma.filasCartas.create({
      data:
      {
        filaJSON: createRowRequest.filaJSON,
        ACREDITADORA: createRowRequest.ACREDITADORA,
        HIDE_FLAG: createRowRequest.HIDE_FLAG,
        campoBase: createRowRequest.campoBase
      }
    });
  }

  public async updateRow(editRowRequest: UpdateRowRequest) {
    try {
      await prisma.filasCartas.update({
        where: {
          id: editRowRequest.id,
        },
        data:
        {
          filaJSON: editRowRequest.filaJSON,
          ACREDITADORA: editRowRequest.ACREDITADORA,
          HIDE_FLAG: editRowRequest.HIDE_FLAG,
          campoBase: editRowRequest.campoBase
        }
      });
    }
    catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2023') {
          throw new Error("id dada es en formato incorrecto");
        }
      } else {
        throw new Error(error.message);
      }
    }
  }

  public async removeRow(rowId: string) {
    let result = await prisma.filasCartas.delete({
      where: {
        id: rowId
      }
    });
  }

  public async getRow(rowId: string) {
    let result = await prisma.filasCartas.findFirst({
      where: {
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
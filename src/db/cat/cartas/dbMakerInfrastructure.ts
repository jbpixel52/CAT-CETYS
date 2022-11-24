import { Prisma, PrismaClient } from '@prisma/client'
import { UpdateRowRequest } from '../updateRowRequest';
import { MakeSyllabusRequest } from '../makeSyllabusRequest';

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

    public async makeSyllabus(createSyllabusRequest: MakeSyllabusRequest) {
        await prisma.cartas.create({
            data: {
                ANIO_PROGRAMA: createSyllabusRequest.ANIO_PROGRAMA,
                MATERIA: createSyllabusRequest.MATERIA,
                NOMBRE_CARRERA: createSyllabusRequest.NOMBRE_CARRERA,
                NOMBRE_CARTA: createSyllabusRequest.NOMBRE_CARTA,
                PROFESOR: createSyllabusRequest.PROFESOR,
                SEMESTRE: createSyllabusRequest.SEMESTRE,
                IDs_FILAS_CARTAS: createSyllabusRequest.IDs_FILAS_CARTAS
            }
        })
    }

    public async deleteSyllabus(syllabusId: string){
        let result = await prisma.cartas.delete({
          where: {
            id: syllabusId
          }
        });
      }
    
      public async getSyllabus(syllabusId: string){
        let result = await prisma.cartas.findFirst({
          where:{
            id: {
              equals: syllabusId
            }
          }
        });
    
        return result
      }
    
      public async getSyllabuses() {
        let result = await prisma.cartas.findMany()
        return result;
      }
}
export default prisma


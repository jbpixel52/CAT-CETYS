import { DbMakerInfrastructure } from "./dbMakerInfrastructure"
import { MakeRowRequest } from "../makeRowRequest";
import { UpdateRowRequest } from "../updateRowRequest";
import { MakeSyllabusRequest } from "../makeSyllabusRequest";

let dbMakerInfrastructure = new DbMakerInfrastructure;

export class DbMakerService{

    public dbMakerService(){

    }

    public async createRow(createSyllabusRequest: MakeSyllabusRequest){
        dbMakerInfrastructure.makeSyllabus(createSyllabusRequest)
    }

    // public async editRow(editRowRequest: UpdateRowRequest){
    //     try{
    //         if(await this.getRow(editRowRequest.id) == null){
    //             throw new Error("A row with this id does not exist");
    //         }
    //         await dbMakerInfrastructure.updateRow(editRowRequest);
    //     }
    //     catch(error){
    //         throw new Error(error.message);
    //     }
    // }

    // public async deleteRow(rowId: string){
    //     try{
    //         if(await this.getRow(rowId) == null){
    //             throw new Error("A row with this id does not exist");
    //         }
    //         await dbMakerInfrastructure.removeRow(rowId);
    //     }
    //     catch(error){
    //         throw new Error(error.message);
    //     }
    // }

    public async getRow(syllabusId: string){
        let row = await dbMakerInfrastructure.getSyllabus(syllabusId);
        return row; 
    }

    public async getSyllabuses(){
        let allRows = await dbMakerInfrastructure.getSyllabuses();
        return allRows
    }
}
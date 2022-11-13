import { DbMakerInfrastructure } from "./dbMakerInfrastructure"
import { MakeRowRequest } from "../makeRowRequest";
import { UpdateRowRequest } from "../updateRowRequest";
import { MakeSyllabusRequest } from "../makeSyllabusRequest";

let dbMakerInfrastructure = new DbMakerInfrastructure;

export class DbMakerService{
    editRow(editSyallabus: any) {
        throw new Error("Method not implemented.");
    }

    public dbMakerService(){

    }

    public async createSyllabus(createSyllabusRequest: MakeSyllabusRequest){
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

    public async deleteSyllabus(syllabusId: string){
        try{
            if(await this.getSyllabus(syllabusId) == null){
                throw new Error("A syllabus with this id does not exist");
            }
            await dbMakerInfrastructure.deleteSyllabus(syllabusId);
        }
        catch(error){
            throw new Error(error.message);
        }
    }

    public async getSyllabus(syllabusId: string){
        let row = await dbMakerInfrastructure.getSyllabus(syllabusId);
        return row; 
    }

    public async getSyllabuses(){
        let allRows = await dbMakerInfrastructure.getSyllabuses();
        return allRows
    }
}
import { DbMakerInfrastructure } from "./dbMakerInfrastructure"
import { MakeFieldRequest} from "../makeFieldRequest"
import { UpdateFieldRequest } from "../updateFieldRequest";

let dbMakerInfrastructure = new DbMakerInfrastructure;

export class DbMakerService{

    public dbMakerService(){

    }

    public async createSyllabusField(createSyllabusFieldRequest: MakeFieldRequest){
        await dbMakerInfrastructure.makeSyllabusField(createSyllabusFieldRequest)
    }

    public async editSyllabusField(editSyllabusFieldRequest: UpdateFieldRequest){
        try{
            if(await this.getSyllabusField(editSyllabusFieldRequest.id) == null){
                throw new Error("A field with this id does not exist");
            }
            await dbMakerInfrastructure.updateSyllabusField(editSyllabusFieldRequest);
        }
        catch(error){
            throw new Error(error.message);
        }
    }

    public async deleteSyllabusField(fieldId: string){
        try{
            if(await this.getSyllabusField(fieldId) == null){
                throw new Error("A field with this id does not exist");
            }
            await dbMakerInfrastructure.deleteSyllabusField(fieldId);
        }
        catch(error){
            throw new Error(error.message);
        }
    }

    public async getSyllabusField(fieldId: string){
        let field = await dbMakerInfrastructure.getSyllabusField(fieldId);
        return field; 
    }

    public async getSyllabusFields(){
        let allFields = await dbMakerInfrastructure.getSyllabusFields();
        return allFields
    }
}
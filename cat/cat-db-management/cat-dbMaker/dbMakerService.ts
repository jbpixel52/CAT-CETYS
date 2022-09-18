import { DbMakerInfrastructure } from "./dbMakerInfrastructure"
import { MakeFieldRequest} from "../makeFieldRequest"
import { UpdateFieldRequest } from "../updateFieldRequest";

let dbMakerInfrastructure = new DbMakerInfrastructure;

export class DbMakerService{

    public dbMakerService(){

    }

    public async createTemplateField(createTemplateFieldRequest: MakeFieldRequest){
        await dbMakerInfrastructure.makeTemplateField(createTemplateFieldRequest)
    }

    public async editTemplateField(editTemplateFieldRequest: UpdateFieldRequest){
        try{
            await dbMakerInfrastructure.updateTemplateField(editTemplateFieldRequest);
        }
        catch(error){
            throw new Error(error.message);
        }
    }

    public deleteTemplateField(fieldId: string){
        try{
            dbMakerInfrastructure.deleteTemplateField(fieldId);
        }
        catch(error){
            throw new Error(error.message);
        }
    }

    public async getTemplateField(fieldId: string){
        let field = await dbMakerInfrastructure.getTemplateField(fieldId);
        return field 
    }

    public async getTemplateFields(){
        let allFields = await dbMakerInfrastructure.getTemplateFields();
        return allFields
    }
}
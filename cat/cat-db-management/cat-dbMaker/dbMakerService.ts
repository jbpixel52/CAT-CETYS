import { DbMakerInfrastructure } from "./dbMakerInfrastructure"
import { MakeFieldRequest} from "../makeFieldRequest"
import { UpdateFieldRequest } from "../updateFieldRequest";

let dbMakerInfrastructure = new DbMakerInfrastructure;

export class DbMakerService{

    public dbMakerService(){

    }

    public createTemplateField(createTemplateFieldRequest: MakeFieldRequest){
        dbMakerInfrastructure.makeTemplateField(createTemplateFieldRequest)
    }

    public editTemplateField(editTemplateFieldRequest: UpdateFieldRequest){
        dbMakerInfrastructure.updateTemplateField(editTemplateFieldRequest)
    }

    public deleteTemplateField(fieldId: string){
        dbMakerInfrastructure.deleteTemplateField(fieldId);
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
export {}
import { prisma } from "@prisma/client";
import { DbMakerInfrastructure } from "./dbMakerInfrastructure"
import { MakeFieldRequest} from "../makeFieldRequest"

let dbMakerInfrastructure = new DbMakerInfrastructure;
//let campoTemplete = new MakeFieldRequest();

export class DbMakerService{

    public dbMakerService(){

    }

    public createTemplateField(createTemplateFieldRequest: MakeFieldRequest){
        console.log(createTemplateFieldRequest)
        dbMakerInfrastructure.makeTemplateField(createTemplateFieldRequest)
    }

    public editTemplateField(){

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
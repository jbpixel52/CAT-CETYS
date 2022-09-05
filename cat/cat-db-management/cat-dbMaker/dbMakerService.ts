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

    public deleteTemplateField(){

    }

    public getTemplateField(){
        
    }

    public async getTemplateFields(){
        let allFields = await dbMakerInfrastructure.getFields();
        return allFields
    }
}
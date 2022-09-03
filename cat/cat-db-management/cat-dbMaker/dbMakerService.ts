export {}
import { prisma } from "@prisma/client";
import { DbMakerInfrastructure } from "./dbMakerInfrastructure"
import { CampoTemplete} from "../campoTemplete"

let dbMakerInfrastructure = new DbMakerInfrastructure;
let campoTemplete = new CampoTemplete();

export class DbMakerService{

    public dbMakerService(){

    }

    public createTemplateField(){

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
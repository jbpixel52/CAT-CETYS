export {}
import { prisma } from "@prisma/client";
import { DbMakerService } from "./dbMakerService";
import { CampoTemplete} from "../campoTemplete"

let dbMakerService = new DbMakerService();


export class DbMakerApplication{

    public dbMakerApplication(){

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
        let allFields = await dbMakerService.getTemplateFields();
        return allFields
    }
}
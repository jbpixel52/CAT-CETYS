export {}
import { prisma } from "@prisma/client";
import { DbMakerService } from "./dbMakerService";

let dbMakerService = new DbMakerService();

class DbMakerApplication{

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
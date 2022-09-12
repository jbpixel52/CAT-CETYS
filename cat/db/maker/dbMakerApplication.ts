import { DbMakerService } from "./dbMakerService";
import { fieldTemplate} from "../fieldTemplate"

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
        return await dbMakerService.getTemplateFields();

        // let allFields = await dbMakerService.getTemplateFields();
        // return allFields
    }
}
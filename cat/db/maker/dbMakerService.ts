export {}
import { DbMakerInfrastructure } from "./dbMakerInfrastructure"
import { fieldTemplate} from "../fieldTemplate"

let dbMakerInfrastructure = new DbMakerInfrastructure;
let campoTemplete = new fieldTemplate();

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
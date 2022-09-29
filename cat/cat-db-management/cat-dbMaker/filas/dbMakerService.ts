import { DbMakerInfrastructure } from "./dbMakerInfrastructure"
import { MakeFieldRequest} from "../makeFieldRequest"
import { UpdateFieldRequest } from "../updateFieldRequest";

let dbMakerInfrastructure = new DbMakerInfrastructure;

export class DbMakerService{

    public dbMakerService(){

    }

    public async createRow(createTemplateFieldRequest: MakeFieldRequest){
        await dbMakerInfrastructure.makeRow(createTemplateFieldRequest)
    }

    public async editRow(editTemplateFieldRequest: UpdateFieldRequest){
        try{
            if(await this.getRow(editTemplateFieldRequest.id) == null){
                throw new Error("A row with this id does not exist");
            }
            await dbMakerInfrastructure.updateRow(editTemplateFieldRequest);
        }
        catch(error){
            throw new Error(error.message);
        }
    }

    public async deleteRow(rowId: string){
        try{
            if(await this.getRow(rowId) == null){
                throw new Error("A row with this id does not exist");
            }
            await dbMakerInfrastructure.removeRow(rowId);
        }
        catch(error){
            throw new Error(error.message);
        }
    }

    public async getRow(rowId: string){
        let row = await dbMakerInfrastructure.getRow(rowId);
        return row; 
    }

    public async getRows(){
        let allRows = await dbMakerInfrastructure.getRows();
        return allRows
    }
}
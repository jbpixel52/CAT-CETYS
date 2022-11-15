import { DbMakerInfrastructure } from "./dbMakerInfrastructure"
import { MakeFieldRequest} from "../makeFieldRequest"
import { UpdateFieldRequest } from "../updateFieldRequest";

const dbMakerInfrastructure: DbMakerInfrastructure = DbMakerInfrastructure.getInstance();

export class DbMakerService{
    static instance: DbMakerService;

    private constructor() {
        console.log("--");
    }

    public static getInstance(): DbMakerService {
        if (!DbMakerService.instance) {
            DbMakerService.instance = new DbMakerService();
        }
        return DbMakerService.instance;
    }

    public async createTemplateField(createTemplateFieldRequest: MakeFieldRequest){
        await dbMakerInfrastructure.makeTemplateField(createTemplateFieldRequest)
    }

    public async editTemplateField(editTemplateFieldRequest: UpdateFieldRequest){
        try{
            if(await this.getTemplateField(editTemplateFieldRequest.id) == null){
                throw new Error("A field with this id does not exist");
            }
            await dbMakerInfrastructure.updateTemplateField(editTemplateFieldRequest);
        }
        catch(error){
            throw new Error(error.message);
        }
    }

    public async deleteTemplateField(fieldId: string){
        try{
            if(await this.getTemplateField(fieldId) == null){
                throw new Error("A field with this id does not exist");
            }
            await dbMakerInfrastructure.deleteTemplateField(fieldId);
        }
        catch(error){
            throw new Error(error.message);
        }
    }

    public async getTemplateField(fieldId: string){
        let field = await dbMakerInfrastructure.getTemplateField(fieldId);
        return field; 
    }

    public async getTemplateFields(){
        let allFields = await dbMakerInfrastructure.getTemplateFields();
        return allFields
    }
}
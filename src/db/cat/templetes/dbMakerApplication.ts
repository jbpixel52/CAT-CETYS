import { MakeFieldRequest } from "../makeFieldRequest";
import { UpdateFieldRequest } from "../updateFieldRequest";
import { DbMakerService } from "./dbMakerService";

const dbMakerService: DbMakerService = DbMakerService.getInstance();

export class DbMakerApplication{

    static instance: DbMakerApplication;

    private constructor() {
        console.log("--");
    }

    public static getInstance(): DbMakerApplication {
        if (!DbMakerApplication.instance) {
            DbMakerApplication.instance = new DbMakerApplication();
        }
        return DbMakerApplication.instance;
    }

    
    public async createTemplateField(createTemplateRequestDTO: string){
        const createTemplateRequest = this.createTemplateFieldRequestMapper(createTemplateRequestDTO);
        await dbMakerService.createTemplateField(createTemplateRequest);
    }

    public async editTemplateField(editTemplateRequestDTO: string){
        const editTemplateFieldRequest = this.editTemplateFieldRequestMapper(editTemplateRequestDTO);
        await dbMakerService.editTemplateField(editTemplateFieldRequest);
    }

    public async deleteTemplateField(deleteTemplateFieldRequest: string){
        const fieldId = JSON.parse(deleteTemplateFieldRequest)["fieldId"]
        await dbMakerService.deleteTemplateField(fieldId);
    }

    public async getTemplateField(getTemplateIdRequest: string){
        const fieldId = JSON.parse(getTemplateIdRequest)["fieldId"]
        const field = await dbMakerService.getTemplateField(fieldId);
        return field
    }

    public async getTemplateFields(){
        const allFields = await dbMakerService.getTemplateFields();
        return allFields
    }

    private createTemplateFieldRequestMapper(createTemplateFieldRequestDTO: string){
        try{
            const createTemplateRequestDTOJSON = JSON.parse(createTemplateFieldRequestDTO);
            const createTemplateRequest =  new MakeFieldRequest();
            
            if(createTemplateRequestDTOJSON["NOMBRE_CAMPO"] != undefined){
                createTemplateRequest.nombreCampo = createTemplateRequestDTOJSON["NOMBRE_CAMPO"];
            }
            else{
                throw new Error("NOMBRE_CAMPO no está presente");
            }
            if(createTemplateRequestDTOJSON["DESCRIPCION_CAMPO"] != undefined){
                createTemplateRequest.descripcionCampo = createTemplateRequestDTOJSON["DESCRIPCION_CAMPO"];
            }
            else{
                throw new Error("DESCRIPCION_CAMPO no está presente");
            }
            if(createTemplateRequestDTOJSON["TIPO_CAMPO"] != undefined){
                createTemplateRequest.tipoCampo = createTemplateRequestDTOJSON["TIPO_CAMPO"];
            }
            else{
                throw new Error("TIPO_CAMPO no está presente");
            }
    
            return createTemplateRequest;
        }
        catch(errorMessage){
            throw new Error(errorMessage)
        }
    }

    private editTemplateFieldRequestMapper(editTemplateFieldRequestDTO: string){
        try{
            const editTemplateRequestDTOJSON = JSON.parse(editTemplateFieldRequestDTO);
            const editTemplateRequest =  new UpdateFieldRequest();

            if(editTemplateRequestDTOJSON["id"] != undefined){
                editTemplateRequest.id = editTemplateRequestDTOJSON["id"];
            }
            else{
                throw new Error("id no está presente");
            }
            if(editTemplateRequestDTOJSON["NOMBRE_CAMPO"] != undefined){
                editTemplateRequest.nombreCampo = editTemplateRequestDTOJSON["NOMBRE_CAMPO"];
            }
            else{
                throw new Error("NOMBRE_CAMPO no está presente");
            }
            if(editTemplateRequestDTOJSON["DESCRIPCION_CAMPO"] != undefined){
                editTemplateRequest.descripcionCampo = editTemplateRequestDTOJSON["DESCRIPCION_CAMPO"];
            }
            else{
                throw new Error("DESCRIPCION_CAMPO no está presente");
            }
            if(editTemplateRequestDTOJSON["TIPO_CAMPO"] != undefined){
                editTemplateRequest.tipoCampo = editTemplateRequestDTOJSON["TIPO_CAMPO"];
            }
            else{
                throw new Error("TIPO_CAMPO no está presente");
            }
    
            return editTemplateRequest;
        }
        catch(errorMessage){
            throw new Error(errorMessage)
        }
    }
}
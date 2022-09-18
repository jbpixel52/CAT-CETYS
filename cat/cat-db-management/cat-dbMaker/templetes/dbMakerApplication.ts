import { prisma } from "@prisma/client";
import { MakeFieldRequest } from "../../makeFieldRequest";
import { UpdateFieldRequest } from "../../updateFieldRequest";
import { DbMakerService } from "./dbMakerService";

let dbMakerService = new DbMakerService();


export class DbMakerApplication{

    public dbMakerApplication(){

    }

    public async createTemplateField(createTemplateRequestDTO: string){
        let createTemplateRequest = this.createTemplateRequestMapper(createTemplateRequestDTO);
        await dbMakerService.createTemplateField(createTemplateRequest);
    }

    public async editTemplateField(editTemplateRequestDTO: string){
        let editTemplateFieldRequest = this.editTemplateRequestMapper(editTemplateRequestDTO);
        await dbMakerService.editTemplateField(editTemplateFieldRequest);
    }

    public async deleteTemplateField(deleteTemplateFieldRequest: string){
        let fieldId = JSON.parse(deleteTemplateFieldRequest)["fieldId"]
        await dbMakerService.deleteTemplateField(fieldId);
    }

    public async getTemplateField(getTemplateIdRequest: string){
        let fieldId = JSON.parse(getTemplateIdRequest)["fieldId"]
        let field = await dbMakerService.getTemplateField(fieldId);
        return field
    }

    public async getTemplateFields(){
        let allFields = await dbMakerService.getTemplateFields();
        return allFields
    }

    private createTemplateRequestMapper(createTemplateRequestDTO: string){
        try{
            let createTemplateRequestDTOJSON = JSON.parse(createTemplateRequestDTO);
            let createTemplateRequest =  new MakeFieldRequest();
            
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
    
            return createTemplateRequest
        }
        catch(errorMessage){
            throw new Error(errorMessage)
        }
    }

    private editTemplateRequestMapper(editTemplateRequestDTO: string){
        try{
            let editTemplateRequestDTOJSON = JSON.parse(editTemplateRequestDTO);
            let editTemplateRequest =  new UpdateFieldRequest();
    
            editTemplateRequest.id = editTemplateRequestDTOJSON["id"]
            editTemplateRequest.nombreCampo = editTemplateRequestDTOJSON["NOMBRE_CAMPO"];
            editTemplateRequest.descripcionCampo = editTemplateRequestDTOJSON["DESCRIPCION_CAMPO"];
            editTemplateRequest.tipoCampo = editTemplateRequestDTOJSON["TIPO_CAMPO"];

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
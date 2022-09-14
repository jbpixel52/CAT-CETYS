import { prisma } from "@prisma/client";
import { MakeFieldRequest } from "../makeFieldRequest";
import { UpdateFieldRequest } from "../updateFieldRequest";
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

    public deleteTemplateField(deleteTemplateFieldRequest: string){
        let fieldId = JSON.parse(deleteTemplateFieldRequest)["fieldId"]
        dbMakerService.deleteTemplateField(fieldId);
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
        let createTemplateRequestDTOJSON = JSON.parse(createTemplateRequestDTO);
        let createTemplateRequest =  new MakeFieldRequest();

        createTemplateRequest.nombreCampo = createTemplateRequestDTOJSON["NOMBRE_CAMPO"];
        createTemplateRequest.descripcionCampo = createTemplateRequestDTOJSON["DESCRIPCION_CAMPO"];
        createTemplateRequest.tipoCampo = createTemplateRequestDTOJSON["TIPO_CAMPO"];

        return createTemplateRequest
    }

    private editTemplateRequestMapper(editTemplateRequestDTO: string){
        let editTemplateRequestDTOJSON = JSON.parse(editTemplateRequestDTO);
        let editTemplateRequest =  new UpdateFieldRequest();

        editTemplateRequest.id = editTemplateRequestDTOJSON["id"]
        editTemplateRequest.nombreCampo = editTemplateRequestDTOJSON["NOMBRE_CAMPO"];
        editTemplateRequest.descripcionCampo = editTemplateRequestDTOJSON["DESCRIPCION_CAMPO"];
        editTemplateRequest.tipoCampo = editTemplateRequestDTOJSON["TIPO_CAMPO"];

        return editTemplateRequest
    }
}
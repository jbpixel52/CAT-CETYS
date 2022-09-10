import { prisma } from "@prisma/client";
import { MakeFieldRequest } from "../makeFieldRequest";
import { DbMakerService } from "./dbMakerService";

let dbMakerService = new DbMakerService();


export class DbMakerApplication{

    public dbMakerApplication(){

    }

    public async createTemplateField(createTemplateRequestDTO: string){
        let createTemplateRequest = this.createTemplateRequestMapper(createTemplateRequestDTO);
        await dbMakerService.createTemplateField(createTemplateRequest);
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

    private createTemplateRequestMapper(createTemplateRequestDTO: string){
        let createTemplateRequestDTOJSON = JSON.parse(createTemplateRequestDTO);
        let createTemplateRequest =  new MakeFieldRequest();

        createTemplateRequest.nombreCampo = createTemplateRequestDTOJSON["NOMBRE_CAMPO"];
        createTemplateRequest.descripcionCampo = createTemplateRequestDTOJSON["DESCRIPCION_CAMPO"];
        createTemplateRequest.tipoCampo = createTemplateRequestDTOJSON["TIPO_CAMPO"];

        return createTemplateRequest
    }
}
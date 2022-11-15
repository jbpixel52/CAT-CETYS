import { prisma } from "@prisma/client";
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

    public async createSyllabusField(createSyllabusRequestDTO: string){
        let createSyllabusRequest = this.createSyllabusFieldRequestMapper(createSyllabusRequestDTO);
        await dbMakerService.createSyllabusField(createSyllabusRequest);
    }

    public async editSyllabusField(editSyllabusRequestDTO: string){
        let editSyllabusFieldRequest = this.editSyllabusFieldRequestMapper(editSyllabusRequestDTO);
        await dbMakerService.editSyllabusField(editSyllabusFieldRequest);
    }

    public async deleteSyllabusField(deleteSyllabusFieldRequest: string){
        let fieldId = JSON.parse(deleteSyllabusFieldRequest)["fieldId"]
        await dbMakerService.deleteSyllabusField(fieldId);
    }

    public async getSyllabusField(getSyllabusIdRequest: string){
        let fieldId = JSON.parse(getSyllabusIdRequest)["fieldId"]
        let field = await dbMakerService.getSyllabusField(fieldId);
        return field
    }

    public async getSyllabusFields(){
        let allFields = await dbMakerService.getSyllabusFields();
        return allFields
    }

    private createSyllabusFieldRequestMapper(createSyllabusFieldRequestDTO: string){
        try{
            let createSyllabusRequestDTOJSON = JSON.parse(createSyllabusFieldRequestDTO);
            let createSyllabusRequest =  new MakeFieldRequest();
            
            if(createSyllabusRequestDTOJSON["NOMBRE_CAMPO"] != undefined){
                createSyllabusRequest.nombreCampo = createSyllabusRequestDTOJSON["NOMBRE_CAMPO"];
            }
            else{
                throw new Error("NOMBRE_CAMPO no está presente");
            }
            if(createSyllabusRequestDTOJSON["DESCRIPCION_CAMPO"] != undefined){
                createSyllabusRequest.descripcionCampo = createSyllabusRequestDTOJSON["DESCRIPCION_CAMPO"];
            }
            else{
                throw new Error("DESCRIPCION_CAMPO no está presente");
            }
            if(createSyllabusRequestDTOJSON["TIPO_CAMPO"] != undefined){
                createSyllabusRequest.tipoCampo = createSyllabusRequestDTOJSON["TIPO_CAMPO"];
            }
            else{
                throw new Error("TIPO_CAMPO no está presente");
            }
            if(createSyllabusRequestDTOJSON["CONTENIDO_CAMPO"] != undefined){
                createSyllabusRequest.contenidoCampo = createSyllabusRequestDTOJSON["CONTENIDO_CAMPO"];
            }
            else{
                throw new Error("TIPO_CAMPO no está presente");
            }
    
            return createSyllabusRequest;
        }
        catch(errorMessage){
            throw new Error(errorMessage)
        }
    }

    private editSyllabusFieldRequestMapper(editSyllabusFieldRequestDTO: string){
        try{
            let editSyllabusRequestDTOJSON = JSON.parse(editSyllabusFieldRequestDTO);
            let editSyllabusRequest =  new UpdateFieldRequest();
    
            if(editSyllabusRequestDTOJSON["id"] != undefined){
                editSyllabusRequest.id = editSyllabusRequestDTOJSON["id"];
            }
            else{
                throw new Error("id no está presente");
            }
            if(editSyllabusRequestDTOJSON["NOMBRE_CAMPO"] != undefined){
                editSyllabusRequest.nombreCampo = editSyllabusRequestDTOJSON["NOMBRE_CAMPO"];
            }
            else{
                throw new Error("NOMBRE_CAMPO no está presente");
            }
            if(editSyllabusRequestDTOJSON["DESCRIPCION_CAMPO"] != undefined){
                editSyllabusRequest.descripcionCampo = editSyllabusRequestDTOJSON["DESCRIPCION_CAMPO"];
            }
            else{
                throw new Error("DESCRIPCION_CAMPO no está presente");
            }
            if(editSyllabusRequestDTOJSON["TIPO_CAMPO"] != undefined){
                editSyllabusRequest.tipoCampo = editSyllabusRequestDTOJSON["TIPO_CAMPO"];
            }
            else{
                throw new Error("TIPO_CAMPO no está presente");
            }
            if(editSyllabusRequestDTOJSON["CONTENIDO_CAMPO"] != undefined){
                editSyllabusRequest.contenidoCampo = editSyllabusRequestDTOJSON["CONTENIDO_CAMPO"];
            }
            else{
                throw new Error("CONTENIDO_CAMPO no está presente");
            }

            return editSyllabusRequest;
        }
        catch(errorMessage){
            throw new Error(errorMessage)
        }
    }
}
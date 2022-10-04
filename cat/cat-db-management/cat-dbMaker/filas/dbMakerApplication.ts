import { MakeRowRequest } from "../makeRowRequest";
import { UpdateRowRequest } from "../updateRowRequest";
import { DbMakerService } from "./dbMakerService";

let dbMakerService = new DbMakerService();


export class DbMakerApplication{

    public dbMakerApplication(){

    }

    public async createSyllabusRow(createRowRequestDTO: string){
        let createRowRequest = this.createRowRequestMapper(createRowRequestDTO);
        await dbMakerService.createRow(createRowRequest);
    }

    public async editSyllabusRow(editRowRequestDTO: string){
        let editRowRequest = this.editRowRequestMapper(editRowRequestDTO);
        await dbMakerService.editRow(editRowRequest);
    }

    public async deleteSyllabusRow(deleteRowFieldRequest: string){
        let fieldId = JSON.parse(deleteRowFieldRequest)["rowId"]
        await dbMakerService.deleteRow(fieldId);
    }

    public async getSyllabusRow(getRowIdRequest: string){
        let fieldId = JSON.parse(getRowIdRequest)["rowId"]
        let field = await dbMakerService.getRow(fieldId);
        return field
    }

    public async getSyllabusRows(){
        let allRows = await dbMakerService.getRows();
        return allRows
    }

    private createRowRequestMapper(createRowRequestDTO: string){
        try{
            let createRowRequestDTOJSON = JSON.parse(createRowRequestDTO);
            let createTemplateRequest =  new MakeRowRequest();
            
            if(createRowRequestDTOJSON["fila_JSON"] != undefined){
                createTemplateRequest.filaJSON = createRowRequestDTOJSON["fila_JSON"];
            }
            else{
                throw new Error("fila_JSON no está presente");
            }
            if(createRowRequestDTOJSON["ACREDITADORA"] != undefined){
                createTemplateRequest.ACREDITADORA = createRowRequestDTOJSON["ACREDITADORA"];
            }
            else{
                throw new Error("ACREDITADORA no está presente");
            }
            if(createRowRequestDTOJSON["HIDE_FLAG"] != undefined){
                createTemplateRequest.HIDE_FLAG = createRowRequestDTOJSON["HIDE_FLAG"];
            }
            else{
                throw new Error("HIDE_FLAG no está presente");
            }
    
            return createTemplateRequest;
        }
        catch(errorMessage){
            throw new Error(errorMessage)
        }
    }

    private editRowRequestMapper(editRowRequestDTO: string){
        try{
            let editTemplateRequestDTOJSON = JSON.parse(editRowRequestDTO);
            let editTemplateRequest =  new UpdateRowRequest();

            if(editTemplateRequestDTOJSON["id"] != undefined){
                editTemplateRequest.id = editTemplateRequestDTOJSON["id"];
            }
            else{
                throw new Error("id no está presente");
            }
            if(editTemplateRequestDTOJSON["fila_JSON"] != undefined){
                editTemplateRequest = editTemplateRequestDTOJSON["fila_JSON"];
            }
            else{
                throw new Error("fila_JSON no está presente");
            }
            if(editTemplateRequestDTOJSON["ACREDITADORA"] != undefined){
                editTemplateRequest.ACREDITADORA = editTemplateRequestDTOJSON["ACREDITADORA"];
            }
            else{
                throw new Error("ACREDITADORA no está presente");
            }
            if(editTemplateRequestDTOJSON["HIDE_FLAG"] != undefined){
                editTemplateRequest.HIDE_FLAG = editTemplateRequestDTOJSON["HIDE_FLAG"];
            }
            else{
                throw new Error("HIDE_FLAG no está presente");
            }
    
            return editTemplateRequest;
        }
        catch(errorMessage){
            throw new Error(errorMessage)
        }
    }
}
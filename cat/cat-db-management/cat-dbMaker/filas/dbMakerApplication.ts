import { MakeRowRequest } from "../makeRowRequest";
import { UpdateRowRequest } from "../updateRowRequest";
import { DbMakerService } from "./dbMakerService";

let dbMakerService = new DbMakerService();


export class DbMakerApplication {

    public dbMakerApplication() {

    }

    public async createSyllabusRow(createRowRequestDTO: string) {
        //let createRowRequest = this.createRowRequestMapper(createRowRequestDTO);
        //let tempRow: MakeRowRequest = new MakeRowRequest();
        console.log('LOGGING ON SERVER')
        console.log(createRowRequestDTO);

        await dbMakerService.createRow(new MakeRowRequest(undefined, createRowRequestDTO, '', undefined));
    }

    public async editSyllabusRow(editRowRequestDTO: string) {
        let editRowRequest = this.editRowRequestMapper(editRowRequestDTO);
        await dbMakerService.editRow(editRowRequest);
    }

    public async deleteSyllabusRow(deleteRowFieldRequest: string) {
        let fieldId = JSON.parse(deleteRowFieldRequest)[ "rowId" ]
        await dbMakerService.deleteRow(fieldId);
    }

    public async getSyllabusRow(getRowIdRequest: string) {
        let fieldId = JSON.parse(getRowIdRequest)[ "rowId" ]
        let field = await dbMakerService.getRow(fieldId);
        return field
    }

    public async getSyllabusRows() {
        let allRows = await dbMakerService.getRows();
        return allRows
    }

    private createRowRequestMapper(createRowRequestDTO: string) {
        let createRowRequestDTOJSON: MakeRowRequest = JSON.parse(createRowRequestDTO);
        console.log(createRowRequestDTOJSON);
        return createRowRequestDTOJSON;
    }

    private editRowRequestMapper(editRowRequestDTO: string) {
        try {
            let editRowRequestDTOJSON = JSON.parse(editRowRequestDTO);
            let editRowRequest: UpdateRowRequest = new UpdateRowRequest();

            if (editRowRequestDTOJSON[ "id" ] != undefined) {
                editRowRequest.id = editRowRequestDTOJSON[ "id" ];
            }
            else {
                throw new Error("id no está presente");
            }
            if (editRowRequestDTOJSON[ "fila_JSON" ] != undefined) {
                editRowRequest.filaJSON = editRowRequestDTOJSON[ "fila_JSON" ];
            }
            else {
                throw new Error("fila_JSON no está presente");
            }
            if (editRowRequestDTOJSON[ "ACREDITADORA" ] != undefined) {
                editRowRequest.ACREDITADORA = editRowRequestDTOJSON[ "ACREDITADORA" ];
            }
            else {
                throw new Error("ACREDITADORA no está presente");
            }
            if (editRowRequestDTOJSON[ "HIDE_FLAG" ] != undefined) {
                editRowRequest.HIDE_FLAG = editRowRequestDTOJSON[ "HIDE_FLAG" ];
            }
            else {
                throw new Error("HIDE_FLAG no está presente");
            }

            return editRowRequest;
        }
        catch (errorMessage) {
            throw new Error(errorMessage)
        }
    }
}
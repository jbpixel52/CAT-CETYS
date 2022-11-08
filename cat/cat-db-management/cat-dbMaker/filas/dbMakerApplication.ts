import { MakeRowRequest } from "../makeRowRequest";
import { UpdateRowRequest } from "../updateRowRequest";
import { DbMakerService } from "./dbMakerService";

let dbMakerService = new DbMakerService();


export class DbMakerApplication {

    public dbMakerApplication() {

    }

    public async createSyllabusRow(createRowRequestDTO: string) {
        console.log('LOGGING ON SERVER')
        console.log(createRowRequestDTO);
        
        let createRowRequestDTOJSON: JSON = JSON.parse(createRowRequestDTO)

        await dbMakerService.createRow(new MakeRowRequest(
            undefined,
            createRowRequestDTOJSON["fila_JSON"],
            createRowRequestDTOJSON["ACREDITADORA"],
            createRowRequestDTOJSON["HIDE_FLAG"],
            createRowRequestDTOJSON["CAMPO_BASE"]
            )
        );
    }

    public async editSyllabusRow(editRowRequestDTO: string) {
        let editRowRequestDTOJSON: JSON = JSON.parse(editRowRequestDTO)

        await dbMakerService.editRow(new UpdateRowRequest(
            editRowRequestDTOJSON["id"],
            editRowRequestDTOJSON["fila_JSON"],
            editRowRequestDTOJSON["ACREDITADORA"],
            editRowRequestDTOJSON["HIDE_FLAG"],
            editRowRequestDTOJSON["CAMPO_BASE"]
        ));
    }

    public async deleteSyllabusRow(deleteRowFieldRequest: string) {
        let fieldId = JSON.parse(deleteRowFieldRequest)[ "rowId" ]
        await dbMakerService.deleteRow(fieldId);
    }

    public async getSyllabusRow(getRowIdRequest: string) {
        let fieldId = JSON.parse(getRowIdRequest)[ "rowId" ]
        let field = await dbMakerService.getRow(fieldId);
        console.log('LOGGING cat-dbMaker in server...')
        console.log(field);
        return field
    }

    public async getSyllabusRows() {
        let allRows = await dbMakerService.getRows();
        return allRows
    }
}
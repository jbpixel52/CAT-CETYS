import { MakeRowRequest } from "../makeRowRequest";
import { UpdateRowRequest } from "../updateRowRequest";
import { DbMakerService } from "./dbMakerService";

let dbMakerService = new DbMakerService();


export class DbMakerApplication {

    public dbMakerApplication() {

    }

    public async createSyllabusRow(createRowRequestDTO: string) {        
        let createRowRequestDTOJSON: JSON = JSON.parse(createRowRequestDTO)
        await dbMakerService.createRow(new MakeRowRequest(
            undefined,
            createRowRequestDTOJSON["filaJSON"],
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
            editRowRequestDTOJSON["filaJSON"],
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
        return field
    }

    public async getSyllabusRows() {
        let allRows = await dbMakerService.getRows();
        return allRows
    }
}
import { MakeRowRequest } from "../makeRowRequest";
import { UpdateRowRequest } from "../updateRowRequest";
import { DbMakerService } from "./dbMakerService";

const dbMakerService: DbMakerService = DbMakerService.getInstance();

export class DbMakerApplication {
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

    public getSyllabuses() {
        throw new Error("Method not implemented.");
    }

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
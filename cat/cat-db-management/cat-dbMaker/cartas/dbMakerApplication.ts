import { MakeSyllabusRequest } from "../makeSyllabusRequest";
import { DbMakerService } from "./dbMakerService";

let dbMakerService = new DbMakerService();


export class DbMakerApplication {

    public dbMakerApplication() {

    }

    public async createSyllabus(createSyllabusRequestDTO: string) {
        let createSyllabusRequestDTOJSON: JSON = JSON.parse(createSyllabusRequestDTO)
        console.log(createSyllabusRequestDTOJSON)

        let createSyllabusRequest = new MakeSyllabusRequest(
            createSyllabusRequestDTOJSON["id"],
            createSyllabusRequestDTOJSON["NOMBRE_CARTA"],
            createSyllabusRequestDTOJSON["SEMESTRE"],
            createSyllabusRequestDTOJSON["MATERIA"],
            createSyllabusRequestDTOJSON["NOMBRE_CARRERA"],
            createSyllabusRequestDTOJSON["ANIO_PROGRAMA"],
            createSyllabusRequestDTOJSON["PROFESOR"],
            createSyllabusRequestDTOJSON["IDs_FILAS_CARTAS"],
        );

        console.log(createSyllabusRequest)
        await dbMakerService.createRow(createSyllabusRequest);
    }

    // public async editSyllabusRow(editSyllabusRequestDTO: string) {
    //     let editSyallabus = this.editRowRequestMapper(editRowRequestDTO);
    //     await dbMakerService.editRow(editSyallabus);
    // }

    // public async deleteSyllabusRow(deleteRowFieldRequest: string) {
    //     let fieldId = JSON.parse(deleteRowFieldRequest)[ "rowId" ]
    //     await dbMakerService.deleteRow(fieldId);
    // }

    public async getSyllabus(getSyllabusIdRequest: string) {
        let syllabusId = JSON.parse(getSyllabusIdRequest)[ "syllabusId" ]
        let syllabus = await dbMakerService.getRow(syllabusId);
        return syllabus
    }

    public async getSyllabuses() {
        let allSylabuses = await dbMakerService.getSyllabuses();
        return allSylabuses
    }

}
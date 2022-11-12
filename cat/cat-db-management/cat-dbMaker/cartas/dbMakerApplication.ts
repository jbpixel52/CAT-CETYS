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
        await dbMakerService.createSyllabus(createSyllabusRequest);
    }

    // public async editSyllabusRow(editSyllabusRequestDTO: string) {
    //     let editSyallabus = this.editRowRequestMapper(editRowRequestDTO);
    //     await dbMakerService.editRow(editSyallabus);
    // }

    public async deleteSyllabus(deleteSyllabusRequest: string) {
        let fieldId = JSON.parse(deleteSyllabusRequest)[ "syllabusId" ]
        await dbMakerService.deleteSyllabus(fieldId);
    }

    public async getSyllabus(getSyllabusIdRequest: string) {
        let syllabusId = JSON.parse(getSyllabusIdRequest)[ "syllabusId" ]
        let syllabus = await dbMakerService.getSyllabus(syllabusId);
        return syllabus
    }

    public async getSyllabuses() {
        let allSylabuses = await dbMakerService.getSyllabuses();
        return allSylabuses
    }

}
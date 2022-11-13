import { MakeSyllabusRequest } from "../makeSyllabusRequest";
import { DbMakerService } from "./dbMakerService";

const dbMakerService = new DbMakerService();


export class DbMakerApplication {
    public async createSyllabus(createSyllabusRequestDTO: string) {
        const createSyllabusRequestDTOJSON = JSON.parse(createSyllabusRequestDTO)
        console.log(createSyllabusRequestDTOJSON)

        const createSyllabusRequest: MakeSyllabusRequest = new MakeSyllabusRequest(
            createSyllabusRequestDTOJSON[ "id" ],
            createSyllabusRequestDTOJSON[ "NOMBRE_CARTA" ],
            createSyllabusRequestDTOJSON[ "SEMESTRE" ],
            createSyllabusRequestDTOJSON[ "MATERIA" ],
            createSyllabusRequestDTOJSON[ "NOMBRE_CARRERA" ],
            createSyllabusRequestDTOJSON[ "ANIO_PROGRAMA" ],
            createSyllabusRequestDTOJSON[ "PROFESOR" ],
            createSyllabusRequestDTOJSON[ "IDs_FILAS_CARTAS" ],
        );

        console.log(createSyllabusRequest)
        await dbMakerService.createSyllabus(createSyllabusRequest);
    }

    public async editSyllabusRow(editSyllabusRequestDTO: string) {
        const editSyallabus = this.editRowRequestMapper(editSyllabusRequestDTO);
        await dbMakerService.editRow(editSyallabus);
    }
    editRowRequestMapper(_editRowRequestDTO: any) {
        throw new Error("Method not implemented.");
    }

    public async deleteSyllabus(deleteSyllabusRequest: string) {
        const fieldId = JSON.parse(deleteSyllabusRequest)[ "syllabusId" ]
        await dbMakerService.deleteSyllabus(fieldId);
    }

    public async getSyllabus(getSyllabusIdRequest: string) {
        const syllabusId = JSON.parse(getSyllabusIdRequest)[ "syllabusId" ]
        const syllabus = await dbMakerService.getSyllabus(syllabusId);
        return syllabus
    }

    public async getSyllabuses() {
        const allSylabuses = await dbMakerService.getSyllabuses();
        return allSylabuses
    }

}
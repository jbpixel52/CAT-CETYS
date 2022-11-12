export class MakeSyllabusRequest{
    id?: string
    NOMBRE_CARTA: string
    SEMESTRE: number
    MATERIA: string
    NOMBRE_CARRERA: string
    ANIO_PROGRAMA: number
    PROFESOR: string
    IDs_FILAS_CARTAS: string[]

    constructor(id: string, NOMBRE_CARTA: string, SEMESTRE: number, MATERIA: string,
                NOMBRE_CARRERA: string, ANIO_PROGRAMA: number, PROFESOR: string,
                IDs_FILAS_CARTAS: string[] ) {
        this.id = id
        this.NOMBRE_CARTA = NOMBRE_CARTA
        this.SEMESTRE = SEMESTRE
        this.MATERIA = MATERIA       
        this.NOMBRE_CARRERA = NOMBRE_CARRERA
        this.ANIO_PROGRAMA = ANIO_PROGRAMA
        this.PROFESOR = PROFESOR
        this.IDs_FILAS_CARTAS = IDs_FILAS_CARTAS
    }
}


export interface MakeSyllabusRequestInterface{
    id?: string
    NOMBRE_CARTA: string
    SEMESTRE: number
    MATERIA: string
    NOMBRE_CARRERA: string
    ANIO_PROGRAMA: number
    PROFESOR: string
    IDs_FILAS_CARTAS: Array<string>
}
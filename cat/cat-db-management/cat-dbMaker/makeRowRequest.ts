export class MakeRowRequest{
    id: string
    filaJSON: string
    ACREDITADORA: string
    HIDE_FLAG: boolean
    campoBase: string
    constructor(id?: string, filaJSON?: string, ACREDITADORA= '', HIDE_FLAG = false, campoBase?: string ) {
        this.id = id;
        this.filaJSON = filaJSON;
        this.ACREDITADORA = ACREDITADORA;
        this.HIDE_FLAG = HIDE_FLAG;
        this.campoBase = campoBase
    }
}


export interface MakeRowRequestInterface{
    id?: string
    filaJSON: string
    ACREDITADORA: string
    HIDE_FLAG: boolean
}
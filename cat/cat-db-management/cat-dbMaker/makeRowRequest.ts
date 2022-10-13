export class MakeRowRequest{
    id: string
    filaJSON: string
    ACREDITADORA: string
    HIDE_FLAG: boolean
    constructor(id?: string, filaJSON?: string, ACREDITADORA= '', HIDE_FLAG = false ) {
        this.id = id;
        this.filaJSON = filaJSON;
        this.ACREDITADORA = ACREDITADORA;
        this.HIDE_FLAG = HIDE_FLAG;
    }
}


export interface MakeRowRequestInterface{
    id?: string
    filaJSON: string
    ACREDITADORA: string
    HIDE_FLAG: boolean
}
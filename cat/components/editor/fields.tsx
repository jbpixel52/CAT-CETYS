//hardcode y luego dinamico
//workspace => terminal => npx prisma studio para ver la info de cartas
import { Cartas, filasCartas, camposBase, camposCartas } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import { match } from 'assert';
import { useState } from 'react';
const fetchFila = async (id: string) => {
    const filasData = [];
    const req: filasCartas = await fetch('http://localhost:3000/api/db/filas/getRow',
        {
            method: 'POST',
            body: JSON.stringify({ rowId: id }),
        }).then(r => r.json());
    console.log(req);
    return req;
}
const getCampoBase = async (campoBaseID: string) => {
    const req: camposBase = await fetch('http://localhost:3000/api/db/templetes/getField',
        {
            method: 'POST',
            body: JSON.stringify({ fieldId: campoBaseID })
        }
    ).then(r => r.json());
    return req;
}

const getCamposBase = async () => {
    const req: camposBase[] = await fetch('http://localhost:3000/api/db/templetes/getFields', {
        method: 'GET'
    }).then(r => r.json());
    return req
}

function Field(id: string) {
    const { isLoading: loadingField, error: fieldError, data: fieldData } = useQuery([ `fieldMetadata${id}` ], () => fetchFila(id));
    const { data: campoBaseData, error: errorCampoBaseData } = useQuery([ `fieldCampoBase${fieldData}` ], () => getCampoBase(fieldData?.campoBase), { enabled: !!fieldData });

    if (fieldData) {
        return (
            <div>
                <form>
                    <label>
                        {campoBaseData ? campoBaseData.DESCRIPCION_CAMPO : !!errorCampoBaseData}
                        <textarea value={fieldData ? fieldData.filaJSON.toString() : ''} onChange={() => { }} />
                    </label>
                </form>

            </div>
        )
    }
}

function BaseField(id: string) {
    const { isLoading: loadingField, error: fieldError, data: fieldData } = useQuery([ `fieldMetadata${id}` ], () => fetchFila(id));
    const { data: campoBaseData, error: errorCampoBaseData } = useQuery([ `fieldCampoBase${fieldData}` ], () => getCampoBase(fieldData?.campoBase), { enabled: !!fieldData });


}


interface FormsProps {
    filas: string[],
}

const fetchFilas = async (filas: string[]) => {
    const filasData: filasCartas[] = [];
    for await (const iterator of filas) {
        console.log(iterator);
        const req: filasCartas = await fetch('http://localhost:3000/api/db/filas/getRow',
            {
                method: 'POST',
                body: JSON.stringify({ rowId: iterator }),
            }).then(r => r.json());
        filasData.push(req);
    }
    return filasData;
}

const CamposFormas = async (filas: string[], filasData: filasCartas[], camposBaseData: camposBase[]) => {
    let filledBases: string[];
    let blocks: any[] = [];
    function findObjectFromFunc(object: filasCartas, match: string) {
        if (object.id === match) {
            return true
        }
    }
    if (filasData) {
        filledBases = filasData.map(e => { if (e.campoBase) { return e.id } });
        for (let campoBase of camposBaseData) {
            if (filledBases.includes(campoBase.id)) {
                let matchedObj: filasCartas = filasData.find((fila) => fila.campoBase == campoBase.id);
                console.log(matchedObj);
                blocks.push(
                    <div>
                        <form >
                            <label>
                                {campoBase.DESCRIPCION_CAMPO}
                                <textarea value={matchedObj.filaJSON.toString()}></textarea>
                            </label>
                        </form>
                    </div>
                )
            }
        }
        return blocks;
    }

}

export default function Forms(FormsProps: { filas: any[] }) {
    let FieldsList = [];
    const { data: camposBaseData } = useQuery([ 'camposBase' ], () => getCamposBase());
    const { data: filasData } = useQuery([ 'filasData' ], () => fetchFilas(FormsProps.filas));
    const { data: blocks } = useQuery([ 'blocks' ], () => CamposFormas(FormsProps.filas, filasData, camposBaseData), { enabled: !!filasData && !!camposBaseData });


    
    // for (const filaId of FormsProps.filas) {
    //     try {
    //         let fieldElement = Field(filaId);
    //         FieldsList.push(fieldElement);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    if (blocks) { return blocks };
}
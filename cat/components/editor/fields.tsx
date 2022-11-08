//hardcode y luego dinamico
//workspace => terminal => npx prisma studio para ver la info de cartas
import { Cartas, filasCartas, camposBase } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
const fetchFilas = async (id: string) => {
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

const getCamposBase = async ()=>{
    const req: camposBase[] = await fetch('http://localhost:3000/api/db/templetes/getFields', {
        method: 'GET'
    }).then(r => r.json());
    return req
}

function Field(id: string) {
    const { isLoading: loadingField, error: fieldError, data: fieldData } = useQuery([ `fieldMetadata${id}` ], () => fetchFilas(id));
    const { data: campoBaseData, error:errorCampoBaseData } = useQuery([ `fieldCampoBase${fieldData}` ], () => getCampoBase(fieldData?.campoBase), { enabled: !!fieldData });

    if (fieldData ) {
        return (
            <div>
                <form>
                    <label>
                        {campoBaseData ? campoBaseData.DESCRIPCION_CAMPO : !!errorCampoBaseData}
                        <textarea value={fieldData ? fieldData.filaJSON.toString() : ''} onChange={() =>{} } />
                    </label>
                </form>
                
            </div>
        )
    }
    if (fieldError) {
        return (<></>)
    }
}

function baseField(id: string) {
    // const { isLoading: loadingField, error: fieldError, data: fieldData } = useQuery([ `fieldMetadata${id}` ], () => fetchFilas(id), {
        
    // });

    // const { data: campoBaseData, error:errorCampoBaseData } = useQuery([ `fieldCampoBase${fieldData}` ], () => getCampoBase(fieldData?.campoBase), { enabled: !!fieldData });
}



interface FormsProps {
    filas: any[],
}


export default function Forms(FormsProps: { filas: any[]; }) {
    let FieldsList = [];
    let camposBaseList = [];



    for (const filaId of FormsProps.filas) {
        try {
            
            let fieldElement = Field(filaId);
            FieldsList.push(fieldElement);
        } catch (error) {
            console.log(error);
        }
    }

    return (FieldsList)
}
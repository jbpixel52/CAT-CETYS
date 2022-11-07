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
const getCamposBase = async () => {
    const req: camposBase = await fetch('http://localhost:3000/api/db/templetes/getFields',
        {
            method: 'GET'
        }
    ).then(r => r.json());
    return req;
}

function Field(id: string) {
    const { isLoading: loadingField, error: fieldError, data: fieldData } = useQuery([ `fieldMetadata${id}` ], () => fetchFilas(id));
    if (fieldData) {
        return (<div key={fieldData.id}>
            <div>{fieldData.id}</div>
            <textarea></textarea>
        </div>)
    }
    if (fieldError) {
        return (<></>)
    }
}

interface FormsProps {
    filas: any[],
}


export default function Forms(FormsProps: { filas: any[]; }) {
    let FieldsList = [];
    for (const filaId of FormsProps.filas) {
        let fieldElement = Field(filaId);
        FieldsList.push(fieldElement);
    }

    return (<div>
        {FieldsList}

        <div>

        </div>
    </div>)
}
/* eslint-disable no-unused-vars */
import { filasCartas, Cartas, camposBase, camposCartas } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { atom, PrimitiveAtom, useAtom } from 'jotai';

const getCamposBase = async () => {
    const req: camposBase[] = await fetch('http://localhost:3000/api/db/templetes/getFields', {
        method: 'GET'
    }).then(r => r.json());
    return req
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
const patchFila = async (fila: filasCartas, newFila: string) => {
    // {
    //     "id": "97877666555ae"
    //     "filaJSON": "{}"
    //     "ACREDITADORA": "CACEI",
    //     "HIDE_FLAG": true
    //     "CAMPO_BASE": "8644565665c6c565"
    //   }
    let req = await fetch('http://localhost:3000/api/db/filas/editRow', {
        method: "PUT",
        body: JSON.stringify({
            "id": fila.id,
            "filaJSON": newFila,
            "ACREDITADORA": fila.ACREDITADORA,
            "HIDE_FLAG": fila.HIDE_FLAG,
            "CAMPO_BASE": fila.campoBase,
        })
    }).then(r => r.json());

    return req;

}


type FieldProps = {
    fila: filasCartas,
    camposBase: camposBase[],
}
const Field = ({ fila, camposBase }: FieldProps) => {
    const [ text, settext ] = useState(fila ? fila.filaJSON.toString() : '');


    const { data: saveResponse, refetch: refetchSave } = useQuery([ 'save_edit' ], () => patchFila(fila, text), {
        enabled: false
    })

    const matchingBase: camposBase = camposBase.find((campo) => campo.id === fila.campoBase);
    if (saveResponse) {
        console.log(saveResponse);
    }
    return (
        <div className='flex gap-10'>
            <div className='flex-row flex'>
                <div>
                    <label className="label">
                        <span className="label-text">{matchingBase?.DESCRIPCION_CAMPO ? matchingBase.DESCRIPCION_CAMPO : null}</span>
                    </label>
                    <TextareaAutosize className="textarea textarea-bordered h-24 W-auto" placeholder="mucho texto..." value={text} onChange={(e) => settext(e.target.value)} />
                </div>
                <button type='button' className='btn w-fit' onClick={() => { refetchSave() }}>GUARDAR</button>
            </div>
            <p className='inline-flex'>{text}</p>


        </div>
    )
}


type FormsProps = {
    props: Cartas,
}
function Forms(props: FormsProps) {
    const { data: filasData } = useQuery([ 'filasData' ], () => fetchFilas(props.props.IDs_FILAS_CARTAS));
    const { data: camposBase } = useQuery([ 'camposBase' ], () => getCamposBase());
    let blocks = [];
    if (filasData && camposBase) {
        blocks = filasData.map(fila => {
            return <Field key={fila.id} fila={fila} camposBase={camposBase} />
        })
        return (<div className='flex flex-col justify-between h-auto w-auto'> {blocks}</div>)
    }
}
export default Forms;
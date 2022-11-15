import { filasCartas, Cartas, camposBase, camposCartas } from '@prisma/client';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';


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

type FieldProps = {
    fila: filasCartas,
    camposBase: camposBase[],
}
const Field = ({ fila, camposBase }: FieldProps) => {
    const [ text, settext ] = useState(fila ? fila.filaJSON.toString() : '')
    const matchingBase: camposBase = camposBase.find((campo) => campo.id === fila.campoBase);
    return (
        <div className=''>
            <form id={'form' + fila.id}>
                <p className=''>{matchingBase?.DESCRIPCION_CAMPO ? matchingBase.DESCRIPCION_CAMPO : 'campo sin base'}{ }</p>
                <label className=''>
                    <TextareaAutosize autoFocus className='' value={text} onChange={(e) => { settext(e.target.value) }} />
                    <button className="bg-amber-30">GUARDAR</button>

                </label>
            </form>

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
        return (<div> {blocks}</div>)
    }
    //TODO MAKE ONCLICK ADD FILA TO CARTA
}
export default Forms;
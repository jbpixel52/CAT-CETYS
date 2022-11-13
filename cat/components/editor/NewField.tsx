
import { camposBase, Cartas, filasCartas } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { atom, PrimitiveAtom, useAtom } from 'jotai';
import { useState } from "react";
import { MakeRowRequest } from "../../cat-db-management/cat-dbMaker/makeRowRequest";

const selectedBaseAtom = atom('');
const syllabusDataAtom: PrimitiveAtom<Cartas> = atom({
    id: 'string',
    ANIO_PROGRAMA: 1,
    IDs_FILAS_CARTAS: [],
    MATERIA: '',
    NOMBRE_CARRERA: 'string',
    NOMBRE_CARTA: 'string',
    PROFESOR: 'string',
    SEMESTRE: 2,
});
const filaDataAtom: PrimitiveAtom<filasCartas> = atom(new MakeRowRequest);
type NewFieldProps = { syllabusData: Cartas };


const fetchCamposBase = async () => { const req: camposBase[] = await fetch('http://localhost:3000/api/db/templetes/getFields', { method: "GET" }).then(r => r.json()); return req; }


const SendNewField = async (newFieldData: filasCartas) => {
    //console.log(newFieldData);
    const req = await fetch('http://localhost:3000/api/db/filas/createRow', {
        method: "POST",
        body: JSON.stringify({ filaJSON: newFieldData.filaJSON, ACREDITADORA: newFieldData.ACREDITADORA, HIDE_FLAG: newFieldData.HIDE_FLAG, CAMPO_BASE: newFieldData.campoBase })
    }).then(r => r.json());
    //console.log(req);
    
    //TODO GET ID OF RECENTLY ADDED ROW TO PUSH INTO CARD ARRAY OF IDs.

    //AppendNewField()

}

const AppendNewField = async (rowId: string) => {
    const [ syllData, setSyllData ] = useAtom(syllabusDataAtom);
    let tempData = syllData;
    tempData.IDs_FILAS_CARTAS.push(rowId);
    setSyllData(tempData)
    const req = await fetch('http://localhost:3000/api/db/cartas/get-syllabus', {
        method: "POST",
        body: JSON.stringify(tempData)
    }).then(r => r.json());


}

const CamposBaseSelectField = () => {
    const [ selection, setSelection ] = useAtom(selectedBaseAtom);
    const { data: camposBaseData } = useQuery([ 'camposBaseData' ], () => fetchCamposBase());
    return (<select value={selection} onChange={(e) => {
        setSelection(e.target.value);
        //console.log(selection);
    }} className='w-2/5 break-words ...'>
        {camposBaseData ?
            (camposBaseData.map(campoBase => <option className=' overflow-scroll' value={campoBase.id} key={campoBase.id}>{campoBase.DESCRIPCION_CAMPO}</option>)) : null}
    </select>)

}





const NewField = ({ syllabusData }: NewFieldProps) => {
    const [ selectionRef, setSelectionRef ] = useAtom(selectedBaseAtom);
    const [ syllabusDataRef, setSyllabusDataRef ] = useAtom(syllabusDataAtom);
    const [ filaDataRef, setFilaDataRef ] = useAtom(filaDataAtom);
    setSyllabusDataRef(syllabusData);
    //console.log(syllabusData);

    return (
        <form className="flex place-content-around">
            <CamposBaseSelectField />
            <label>
                <textarea className='flex flex-auto  mx-3 mb-2 p-1 bg-slate-200 border-2 rounded-sm border-blue-100	hover:font-bold' onChange={(e) => setFilaDataRef(new MakeRowRequest(undefined, e.target.value, 'CETYS', false, selectionRef))} />
            </label>
            <button className="font-bold text-1xl p-1 rounded-lg overflow-hidden bg-blue-200" onClick={() => { SendNewField(filaDataRef) }}>AGREGAR</button>
        </form>

    )
}

export default NewField;
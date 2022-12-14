
import { camposBase, Cartas } from '@prisma/client';
import { useQuery } from "@tanstack/react-query";
import { atom, PrimitiveAtom, useAtom } from 'jotai';
import TextareaAutosize from 'react-textarea-autosize';
import {  useRouter } from 'next/router';

const selectedBaseAtom = atom('NUEVO CAMPO');
const syllabusDataAtom: PrimitiveAtom<Cartas> = atom({ id: null, ANIO_PROGRAMA: null, IDs_FILAS_CARTAS: null, MATERIA: null, NOMBRE_CARRERA: null, NOMBRE_CARTA: null, PROFESOR: null, SEMESTRE: null });
const inputAtom = atom('');

type NewFieldProps = { syllabusData: Cartas };

const patchFila = async (syllabusID: string, rowID: string) => {

    const req = await fetch('http://localhost:3000/api/db/cartas/addRow', {
        method: "PATCH",
        body: JSON.stringify({
            "rowId": rowID, "id": syllabusID
        })
    }).then(r => r.json());
    console.log('PATCHED fila into syllabus', req);

    return req;
}

const SendNewField = async (baseID: string, filaInput: string, syllabus: Cartas) => {
    let reqID = await fetch('http://localhost:3000/api/db/filas/createRow', {
        method: 'POST',
        body: JSON.stringify({
            "filaJSON": filaInput,
            "ACREDITADORA": "CETYS",
            "HIDE_FLAG": false,
            "CAMPO_BASE": baseID
        })
    }).then(r => r.json());
    console.log(reqID);

    const reqPatchFila = await patchFila(syllabus.id, reqID);
    console.log(reqPatchFila);
}

const CamposBaseSelectField = () => {
    const router = useRouter();
    const [ selection, setSelection ] = useAtom(selectedBaseAtom);
    const { data: camposBaseData } = useQuery([ 'camposBaseData' ], () => fetchCamposBase());
    if (camposBaseData) {
        return (
            <select className="select select-bordered w-full max-w-xs" value={selection} onChange={(e) => setSelection(e.target.value)} >
                {camposBaseData ? (camposBaseData.map(campoBase => <option className="" value={campoBase.id} key={campoBase.id}>{campoBase.DESCRIPCION_CAMPO}</option>)) : null}
            </select>
        )

    }

    return <p>cargando campos base...</p>

}

const fetchCamposBase = async () => { const req: camposBase[] = await fetch('http://localhost:3000/api/db/templetes/getFields', { method: "GET" }).then(r => r.json()); return req; }

const NewField = ({ syllabusData }: NewFieldProps) => {
    const router = useRouter();
    const [ selectionRef, setSelection ] = useAtom(selectedBaseAtom);
    const [ syllabusDataRef, setSyllabusDataRef ] = useAtom(syllabusDataAtom);
    const [ inputAtomRef, setInputAtom ] = useAtom(inputAtom);
    setSyllabusDataRef(syllabusData);

    const handleClick = () => {
        SendNewField(selectionRef, inputAtomRef, syllabusData);
        //router.reload();
    }
    return (
        <div className="form-control">
            <CamposBaseSelectField />
            <TextareaAutosize onChange={(e) => setInputAtom(e.target.value)} minRows={1} minLength={1} />
            <button type="button" className='btn btn-accent' onClick={() => {
handleClick()
            }}>AGREGAR</button>
        </div>
    )
}

export default NewField;
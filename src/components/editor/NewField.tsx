
import { camposBase, Cartas } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { atom, PrimitiveAtom, useAtom } from 'jotai';
import TextareaAutosize from 'react-textarea-autosize';

const selectedBaseAtom = atom('id');
const syllabusDataAtom: PrimitiveAtom<Cartas> = atom({ id: null, ANIO_PROGRAMA: null, IDs_FILAS_CARTAS: null, MATERIA: null, NOMBRE_CARRERA: null, NOMBRE_CARTA: null, PROFESOR: null, SEMESTRE: null });
const inputAtom = atom('');

type NewFieldProps = { syllabusData: Cartas };



const SendNewField = async (baseID: string, filaInput: string) => {


    const req = await fetch('http://localhost:3000/api/db/filas/createRow', {
        method: "POST",
        body: JSON.stringify({
            filaJSON: filaInput,
            ACREDITADORA: 'CETYS',
            HIDE_FLAG: true,
            CAMPO_BASE: baseID,
        })
    }).then(r => r.json())
    console.log(req);
}



const CamposBaseSelectField = () => {
    const [ selection, setSelection ] = useAtom(selectedBaseAtom);

    const { data: camposBaseData } = useQuery([ 'camposBaseData' ], () => fetchCamposBase());
    return (<select value='campo base' onChange={(e) => setSelection(e.target.value)} className='flex w-auto'>
        {camposBaseData ?
            (camposBaseData.map(campoBase => <option className='overflow-scroll' value={campoBase.id} key={campoBase.id}>{campoBase.DESCRIPCION_CAMPO}</option>)) : null}
    </select>)

}

const fetchCamposBase = async () => { const req: camposBase[] = await fetch('http://localhost:3000/api/db/templetes/getFields', { method: "GET" }).then(r => r.json()); return req; }





const NewField = ({ syllabusData }: NewFieldProps) => {
    const [ selectionRef, setSelection ] = useAtom(selectedBaseAtom);
    const [ syllabusDataRef, setSyllabusDataRef ] = useAtom(syllabusDataAtom);
    const [ inputAtomRef, setInputAtom ] = useAtom(inputAtom);
    setSyllabusDataRef(syllabusData);

    // console.log(syllabusDataRef)
    return (
        <form className="flex flex-auto">
            <CamposBaseSelectField />
            <TextareaAutosize onChange={(e) => setInputAtom(e.target.value)} />
            <button className="font-bold p-1 rounded-full overflow-hidden bg-amber-300" onClick={() => { SendNewField(selectionRef, inputAtomRef) }}>AGREGAR</button>
        </form>
    )
}

export default NewField;
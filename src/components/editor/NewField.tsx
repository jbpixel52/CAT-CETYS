
import { camposBase, Cartas } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { atom, PrimitiveAtom, useAtom } from 'jotai';
import TextareaAutosize from 'react-textarea-autosize';

const selectedBaseAtom = atom('NUEVO CAMPO');
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


    //TODO MAKE SELECT FIELD WIDTH TO THE MINIMUM SIZE
    if (camposBaseData) {
        return (
            <select className="select select-bordered w-full max-w-xs" value={selection} onChange={(e) => setSelection(e.target.value)} >
                {camposBaseData ? (camposBaseData.map(campoBase => <option className="" value={campoBase.id} key={campoBase.id}>{campoBase.DESCRIPCION_CAMPO}</option>)) : null}
            </select>
        )

    }
    // return (
    //     <Listbox value={selection} onChange={setSelection}>
    //     <Listbox.Button>{selection}</Listbox.Button>
    //     <Listbox.Options>
    //       {camposBaseData.map((base) => (
    //         <Listbox.Option
    //           key={base?.id}
    //           value={base?.id}
    //         >
    //           {base?.DESCRIPCION_CAMPO}
    //         </Listbox.Option>
    //       ))}
    //     </Listbox.Options>
    //   </Listbox>

    // )

}

const fetchCamposBase = async () => { const req: camposBase[] = await fetch('http://localhost:3000/api/db/templetes/getFields', { method: "GET" }).then(r => r.json()); return req; }

const NewField = ({ syllabusData }: NewFieldProps) => {
    const [ selectionRef, setSelection ] = useAtom(selectedBaseAtom);
    const [ syllabusDataRef, setSyllabusDataRef ] = useAtom(syllabusDataAtom);
    const [ inputAtomRef, setInputAtom ] = useAtom(inputAtom);
    setSyllabusDataRef(syllabusData);

    return (
        <div className="form-control">
            <CamposBaseSelectField />
            <TextareaAutosize onChange={(e) => setInputAtom(e.target.value)} minRows={1} minLength={1} />
            <button className="" onClick={() => { SendNewField(selectionRef, inputAtomRef) }}>AGREGAR</button>
        </div>
    )
}

export default NewField;
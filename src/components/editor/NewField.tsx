
import { camposBase, Cartas , filasCartas, PrismaClient} from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { atom, PrimitiveAtom, useAtom } from 'jotai';
import { useState } from "react";
import { MakeRowRequest } from "../../cat-db-management/cat-dbMaker/makeRowRequest";

const selectedBaseAtom = atom('');
const syllabusDataAtom: PrimitiveAtom<Cartas> = atom();
const filaDataAtom: PrimitiveAtom<filasCartas> = atom(new MakeRowRequest);
type NewFieldProps = { syllabusData: Cartas };

const fetchCamposBase = async () => { const req: camposBase[] = await fetch('http://localhost:3000/api/db/templetes/getFields', { method: "GET" }).then(r => r.json()); return req; }


const SendNewField = async (newFieldData: filasCartas, syllData:Cartas) => {
	console.log(newFieldData);
	const req = await fetch('http://localhost:3000/api/db/filas/createRow', {
		method: "POST",
		body: JSON.stringify({filaJSON:newFieldData.filaJSON,ACREDITADORA:newFieldData.ACREDITADORA,HIDE_FLAG:newFieldData.HIDE_FLAG,CAMPO_BASE:newFieldData.campoBase})
	}).then(r => r.json());


	const req2:filasCartas[] = await fetch('http://localhost:3000/api/db/filas/latestById', { method: 'GET' }).then(r => r.json());
	console.log(req2);
	if (req2.length !== 0) {
		AppendNewField(req2.at(0).id, syllData);
	}

}

const AppendNewField = async (rowId:string, syllData:Cartas) => {
	let tempData = syllData;
	tempData.IDs_FILAS_CARTAS.push(rowId);
	const req = await fetch('http://localhost:3000/api/db/cartas/get-syllabus', {
		method: "POST",
		body: JSON.stringify(tempData),
	}).then(r => r.json());


}

const CamposBaseSelectField = () => {
	const [ selection, setSelection ] = useAtom(selectedBaseAtom);
	const { data: camposBaseData } = useQuery([ 'camposBaseData' ], () => fetchCamposBase());
	return (<select value={selection} onChange={(e) => {
		setSelection(e.target.value);
		console.log(selection);
	}} className='block w-1/2'>
		{camposBaseData ?
			(camposBaseData.map(campoBase => <option className='overflow-scroll' value={campoBase.id} key={campoBase.id}>{campoBase.DESCRIPCION_CAMPO}</option>)) : null}
	</select>)

}





const NewField = ({ syllabusData }: NewFieldProps) => {
	const [ selectionRef, setSelectionRef ] = useAtom(selectedBaseAtom);
	const [ syllabusDataRef, setSyllabusDataRef ] = useAtom(syllabusDataAtom);
	const [ filaDataRef, setFilaDataRef ] = useAtom(filaDataAtom);
	setSyllabusDataRef(syllabusData);
	//console.log(syllabusData);

	return (<div>
		<p>NUEVO CAMPO</p>
		<form className="flex flex-auto">
			<label>
				CAMPO BASE
				<CamposBaseSelectField />
			</label>
			<label>
				Nueva Linea
				<textarea onChange={(e) => setFilaDataRef(new MakeRowRequest(undefined,e.target.value,'CETYS',false,selectionRef))} />
			</label>
		</form>

		<p>BASE SELECCIONADA {'=>'} {}</p>
		<button className="font-bold text-1xl p-1 rounded-full overflow-hidden bg-amber-200" onClick={() => { SendNewField(filaDataRef, syllabusDataRef) }}>AGREGAR</button>
	</div>)
}

export default NewField;
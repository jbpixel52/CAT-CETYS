import { Cartas } from '@prisma/client';
import { ChangeEvent, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const postCreateSyllabus = async (syllabus: Cartas) => {
    console.log(syllabus);
    return fetch('http://localhost:3000/api/db/cartas/create-syllabus', {
        method: 'POST',
        body: JSON.stringify(syllabus)
    }).then(r => r.json());
}



const BotonNuevaCarta = () => {
    const [ tempSyllabus, settempSyllabus ] = useState<Cartas>({ id: null, ANIO_PROGRAMA: null, IDs_FILAS_CARTAS: [], MATERIA: null, NOMBRE_CARRERA: null, NOMBRE_CARTA: null, PROFESOR: null, SEMESTRE: null });
    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        let localSyllabus = tempSyllabus;
        if (e.target.id === 'SEMESTRE' || e.target.id === 'ANIO_PROGRAMA') {
            let parsedNumber = parseInt(e.target.value);
            localSyllabus[ e.currentTarget.id ] = parsedNumber;
            settempSyllabus(tempSyllabus => ({ ...tempSyllabus, localSyllabus }));
            console.log(`UPDATED prop ${e.currentTarget.id} to formated number: ${parsedNumber}`);
        } else {
            localSyllabus[ e.currentTarget.id ] = e.currentTarget.value;
            settempSyllabus(tempSyllabus => ({ ...tempSyllabus, localSyllabus }));
            console.log(`UPDATED prop ${e.currentTarget.id} to ${e.currentTarget.value}`);
        }

    }

    const { data: creationResponse } = useQuery([ 'cartaNueva' ], () => validationProcess(),
        {
            enabled: false,
        });
    if (creationResponse) { console.log(creationResponse) }
    const validationProcess = () => {
        let response;
        let valid = validateInput();
        if (valid) {
            let response = postCreateSyllabus(tempSyllabus);
            return response;
        } else {
            console.log('Syllabus was not valid');
        }
        return response
    }
    const validateInput = () => {
        //checks if all the neccesary fields have been field
        let validation: boolean = true;
        for (const property in tempSyllabus) {
            if (property != 'id') {
                tempSyllabus[ property ] == null ? validation = false : null;
            }
            return validation
        }
    }
    return (
        <div>
            <label htmlFor="my-modal-4" className="btn" >crear nueva carta</label >
            {/* Put this part before </body> tag */}
            < input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold">Datos de la nueva carta</h3>
                    <p className="py-4">Llena los datos base de la nueva carta</p>

                    <div className="flex flex-col flex-wrap gap-2 items-center w-auto h-auto">
                        <div className="form-control w-auto">
                            <label className="label" htmlFor="NOMBRE_CARTA">
                                <span className="label-text">Nombre de la carta</span>
                            </label>
                            <input className="Input input input-bordered w-auto max-w-xs" id="NOMBRE_CARTA" onChange={(e) => changeValue(e)} defaultValue="carta descriptiva..." />
                        </div>
                        <div className="form-control w-auto">
                            <label className="label" htmlFor="SEMESTRE">
                                <span className="label-text">Semestre</span>
                            </label>
                            <input type={'number'} className="Input input input-bordered w-auto " id="SEMESTRE" minLength={1} maxLength={6} onChange={(e) => changeValue(e)} defaultValue="0" />
                        </div>
                        <div className="form-control w-auto max-w-xs">
                            <label className="label" htmlFor="MATERIA">
                                <span className="label-text">Materia</span>
                            </label>
                            <input type={'text'} className="Input input input-bordered w-auto" id="MATERIA" onChange={(e) => changeValue(e)} defaultValue="Pociones" maxLength={100} minLength={1} />
                        </div>
                        <div className="form-control w-auto max-w-xs">
                            <label className="label" htmlFor="NOMBRE_CARRERA">
                                <span className="label-text">Carrera</span>
                            </label>
                            <input type={'text'} className="Input input input-bordered w-auto" id="NOMBRE_CARRERA" maxLength={100} minLength={1} onChange={(e) => changeValue(e)} defaultValue="futbolista 🤡" />
                        </div>
                        <div className="form-control w-auto max-w-xs">
                            <label className="label" htmlFor="AÑO_PROGRAMA">
                                <span className="label-text">Año del programa</span>
                            </label>
                            <input type={'number'} className="Input input input-bordered w-auto" id="ANIO_PROGRAMA" maxLength={4} minLength={4} onChange={(e) => changeValue(e)} defaultValue={new Date().getFullYear()} />
                        </div>
                        <div className="form-control w-auto max-w-xs">
                            <label className="label" htmlFor="PROFESOR">
                                <span className="label-text">Profesor</span>
                            </label>
                            <input type={'text'} className="Input input input-bordered w-auto" id="PROFESOR" maxLength={31} minLength={1} onChange={(e) => changeValue(e)} defaultValue="Hasbulla Magomedov" />
                        </div>
                        <button type='button' onClick={() => { validationProcess() }} className="btn flex btn-primary font-bold text-xl w-auto p-1 h-auto">Guardar Carta</button>
                    </div>
                </label>
            </label>
        </div>
    )

}

export default BotonNuevaCarta;
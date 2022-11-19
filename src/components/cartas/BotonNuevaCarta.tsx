// import * as React from 'React';
// import * as Popover from '@radix-ui/react-popover';
// import { useState } from 'react'
// import { Dialog } from '@headlessui/react'
// import { useQuery } from "@tanstack/react-query"

// const postCreateSyllabus = async () => {
//     return fetch('http://localhost:3000/api/db/cartas/create-syllabus', {
//         method: 'POST',
//         body: JSON.stringify({})
//     }).then(r => r.json());
// }

import React, { useState } from 'react';



const BotonNuevaCarta = () => {

    const [ dialogState, setdialogState ] = useState<boolean>(false);

    // if (dialogState === false) {
    //     return (
    //         <button type='button' className="btn btn-accent" onClick={() => { setdialogState(true) }}>
    //             crear nueva carta
    //         </button>
    //     )
    // } else if (dialogState === true)

    //     return (
    //         <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
    //             <div className="collapse-title text-xl font-medium">
    //                 Focus me to see content
    //             </div>
    //             <div className="collapse-content">
    //                 <div className="form-control w-full max-w-xs">
    //                     <label className="label" htmlFor="NOMBRE_CARTA">
    //                         <span className="label-text">Nombre de la carta</span>
    //                     </label>
    //                     <input className="input input-bordered w-full input-xs" id="NOMBRE_CARTA" defaultValue="carta descriptiva..." />
    //                 </div>


    //                 <div className="form-control w-full max-w-xs">
    //                     <label className=" font-bold" htmlFor="SEMESTRE">
    //                         Semestre
    //                     </label>
    //                     <input type={'number'} className="Input input input-bordered w-full max-w-xs" id="username" defaultValue="0" />
    //                 </div>
    //                 <div className="form-control w-full max-w-xs">
    //                     <label className=" font-bold" htmlFor="MATERIA">
    //                         Materia
    //                     </label>
    //                     <input type={'text'} className="Input input input-bordered w-full max-w-xs" id="MATERIA" defaultValue="Pociones" />
    //                 </div>
    //                 <div className="form-control w-full max-w-xs">
    //                     <label className=" font-bold" htmlFor="NOMBRE_CARRERA">
    //                         Carrera
    //                     </label>
    //                     <input type={'text'} className="Input input input-bordered w-full max-w-xs" id="NOMBRE_CARRERA" defaultValue="0" />
    //                 </div>
    //                 <div className="form-control w-full max-w-xs">
    //                     <label className=" font-bold" htmlFor="AÑO_PROGRAMA">
    //                         Año del programa
    //                     </label>
    //                     <input type={'number'} className="Input input input-bordered w-full max-w-xs" id="AÑO_PROGRAMA" defaultValue={new Date().getFullYear()} />
    //                 </div>
    //                 <div className="form-control w-full max-w-xs">
    //                     <label className=" font-bold" htmlFor="PROFESOR">
    //                         Profesor
    //                     </label>
    //                     <input type={'text'} className="Input input input-bordered w-full max-w-xs" id="PROFESOR" defaultValue="Hasbulla Magomedov" />
    //                 </div>
    //             </div>
    //         </div>
    //     )

    return (
        <div className="dropdown">
            <label tabIndex={0} className="btn m-1">Click</label>
            <div tabIndex={0} className="dropdown-content card card-compact w-64 p-2 shadow bg-primary text-primary-content">
                <div className="card-body">
                    <h3 className="card-title">Card title!</h3>
                    <p>you can use any element as a dropdown.</p>
                </div>
            </div>
        </div>
    )
}

export default BotonNuevaCarta;
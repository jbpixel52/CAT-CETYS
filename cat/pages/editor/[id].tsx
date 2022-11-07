import Head from "next/head";
import NavBar from "../../components/NavBar/navigationbar";

import { camposCartas } from '@prisma/client'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query';
import { Cartas, filasCartas } from '@prisma/client';
import Forms from "../../components/editor/fields";
import { useState } from "react";


const fetchCarta = async (id: string) => {
    const req: Cartas = await fetch('http://localhost:3000/api/db/cartas/get-syllabus', { method: 'POST', body: JSON.stringify({ "syllabusId": id }) }).then(r => r.json());
    return req;
};
const fetchFilas = async (filas: string[]) => {
    const filasData = [];
    for await (const iterator of filas) {
        const req: filasCartas = await fetch('http://localhost:3000/api/db/filas/getRow',
            {
                method: 'POST',
                body: JSON.stringify({ rowId: iterator }),
            }).then(r => r.json());
        filasData.push(<p key={req.id}>{req.filaJSON.toString()}</p>);
    }
    return filasData;
}


const createFilaAddFila = async (value: string) => {
    
}

export default function Editor() {
    const router = useRouter();
    const pid = router.query;
    const [ newField, setnewFields ] = useState('NUEVA SECCION');

    const { isLoading, error, data: syllabusData } = useQuery([ `${pid?.id}` ], () => fetchCarta(pid?.id?.toString()),);

    const { data: filasData, error: errorFilas, isLoading: loadingFilas, refetch:refetchFilas} = useQuery([ 'filas' ], () => fetchFilas(syllabusData?.IDs_FILAS_CARTAS), { enabled: !!syllabusData });



    return (<div>
        <Head>
            <title>Editor</title>
        </Head>
        <NavBar />

        <h1 className="text-5xl font-bold">Editor para la carta     {syllabusData ? syllabusData.NOMBRE_CARTA : '...'}</h1>
        <div className="bg-amber-100 flex flex-row space-x-10">

            <div className="bg-sky-200 w-1/2">
                {/* THE FORM FIELDS GO HERE*/}
                LEFT SIDE  FORM SIDE
                {filasData ? <Forms filas={syllabusData?.IDs_FILAS_CARTAS} /> : <></>}

                <form onSubmit={() => { }}>
                    <label>
                        Nueva Seccion
                        <input value={newField} onChange={(e) => setnewFields(e.target.value)} />
                        <input value={newField} onChange={(e) => setnewFields(e.target.value)} />
                    </label>
                    <input className="bg-amber-300" type="button" value="Agregar nueva seccion" onClick={() => refetchFilas()} />
                </form>
            </div>

            <div className="bg-slate-100 w-1/2">
                {/** THE CARD PREVIEW GOES HERE */}
                <h2>RIGHT SIDE PREVIEW SIDE</h2>
                <div>
                    {filasData ? filasData : null}
                </div>
            </div>
        </div>

    </div>);
}
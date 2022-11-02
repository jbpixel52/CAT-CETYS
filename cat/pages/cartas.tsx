import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { Cartas } from '@prisma/client';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';




export default function CartasPage() {
    const router = useRouter();
    const [ nuevaCartaQuery, setnuevaCartaQuery ] = useState(false);
    const { isLoading, error, data } = useQuery([ 'cartas' ], () => fetch('http://localhost:3000/api/db/cartas/get-syllabuses').then(r => r.json()));
    let listCartas: any = [];
    const { data: nuevaCartaData, refetch } = useQuery([ 'nuevaCarta' ], () => fetch('http://localhost:3000/api/db/cartas/create-syllabus', {
        method: 'POST'
    }).then(r => r.json()),
        {
            enabled: false,
            staleTime: 0,
            cacheTime: 0,
            refetchInterval: 0,
        });





    try {
        listCartas = (data.map((object: Cartas) => {
            return (
                <div key={object.id} className='bg-amber-200 p-1 m-2 rounded flex-row'>
                    <p>{object.NOMBRE_CARTA}</p>
                    <p>{object.NOMBRE_CARRERA}</p>
                    <p>{object.PROFESOR}</p>
                    <p>{object.SEMESTRE}</p>
                    <p>{object.id}</p>
                    <Link href={`/carta/${object.id}`}>
                        <button type="button" className="rounded bg-amber-300 p-1 m-1 hover:bg-amber-400 active:bg-amber-500 hover:font-bold drop-shadow-lg">VER CARTA</button>
                    </Link>
                </div>
            )
        }))
    } catch (error) { }
    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error;


    return (
        <div className="flex h-screen justify-between bg-amber-100 flex-col p-10">

            <div>
                <h1 className="text-5xl">CARTAS</h1>

                <div>
                    {listCartas}
                </div>


                <button type="button" className="rounded bg-amber-300 p-1 m-1 hover:bg-amber-400 active:bg-amber-500 hover:font-bold drop-shadow-lg" onClick={() => refetch}>CREAR NUEVA CARTA</button>

            </div>
        </div>
    )
}

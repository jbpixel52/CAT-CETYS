import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { useState } from 'react';
import { useRouter } from 'next/router';
import NavBar from '../components/NavBar/navigationbar';
import { Cartas } from '@prisma/client';
import Link from 'next/link';

const fetchMetadata = async () => {
    const res: Cartas[] = await fetch('http://localhost:3000/api/db/cartas/get-syllabuses').then(r => r.json());
    //console.log(res);
    return res;

}
const postCreateSyllabus = async () => {
    return fetch('http://localhost:3000/api/db/cartas/create-syllabus', {
        method: 'POST'
    }).then(r => r.json());

}

export default function CartasPage() {
    const router = useRouter();
    const [ listCartas, setlistCartas ] = useState([]);
    const [ nuevaCartaQuery, setnuevaCartaQuery ] = useState(false);
    const { isLoading, error, data } = useQuery([ 'cartas' ], () => fetchMetadata());
    const { data: nuevaCartaData, refetch } = useQuery([ 'nuevaCarta' ], () => postCreateSyllabus(),
        {
            enabled: false,
            staleTime: 0,
            cacheTime: 0,
            refetchInterval: 0,
        });


    if (data) {
        // listCartas = (data.map((object) => {



        // }
        // )
        // )

        data.forEach((obj) => {
            listCartas.push(
                <div key={obj.id} className='p-1 m-2 rounded flex  gap-2 w-fit'>
                    <input type="checkbox" />
                    <button >
                        <Link href={`/carta/${obj.id}`}>
                            <p className=' font-bold underline text-sky-600'>{obj.NOMBRE_CARTA}</p>
                        </Link>
                    </button>
                    <button>  <Link href={`/editor/${obj.id}`}>
                        <p className=' font-bold underline bg-amber-300'>EDITAR CARTA</p>
                    </Link></button>

                </div>
            )

        })
    }

    return (
        <div className="flex justify-between flex-col">
            <NavBar />
            <div className='p-4'>
                <h1 className="text-5xl">CARTAS</h1>

                <div className='bg-amber-200 w-fit'>
                    {listCartas}
                </div>


                <button type="button" className="rounded bg-amber-300 p-1 m-1 hover:bg-amber-400 active:bg-amber-500 hover:font-bold drop-shadow-lg" onClick={() => refetch}>CREAR NUEVA CARTA</button>

            </div>
        </div>
    )
}

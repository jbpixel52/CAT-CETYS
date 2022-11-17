import { useQuery } from '@tanstack/react-query'
import { useState } from 'react';
import NavBar from '../components/NavBar/navigationbar';
import { Cartas } from '@prisma/client';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Breadcrumbs from '../components/breadcrumbs/breadcrumbs';
import BotonNuevaCarta from '../components/cartas/BotonNuevaCarta';

const fetchMetadata = async () => {
    const res: Cartas[] = await fetch('http://localhost:3000/api/db/cartas/get-syllabuses').then(r => r.json());
    return res;
}


const CreateBlocksFC = (_props: Cartas) => {
    return (<div key={_props.id} className='p-1 m-2 rounded flex  gap-2 w-fit'>
        <input type="checkbox" />
        <Link href={`/cartas/${_props.id}`} className='btn'>{_props.NOMBRE_CARTA}</Link>
        <button className='btn flex'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
            </svg>

        </button>
    </div>)
}
const createBlocks = async (metadata: Cartas[]) => {
    let listCartas = [];
    listCartas = metadata.map((carta) => {
        return CreateBlocksFC(carta);
    });
    return listCartas
}

export default function CartasPage() {
    const [ nuevaCartaQuery, setnuevaCartaQuery ] = useState(false);
    const { isLoading, error, data } = useQuery([ 'cartas' ], () => fetchMetadata());
    const { data: nuevaCartaData, refetch } = useQuery([ 'nuevaCarta' ], () => postCreateSyllabus(),
        {
            enabled: false,
            staleTime: 0,
            cacheTime: 0,
            refetchInterval: 0,
        });

    const { data: blockElements, isLoading: loadingBlock, error: errorBlocks } = useQuery([ 'cartasBlocks' ], () => createBlocks(data), { enabled: !!data, })
    const callNuevaCarta = () => {

    }
    return (
        <div className="flex justify-between flex-col">
            <NavBar />
            {/* <Breadcrumbs/> */}
            <div className='p-4'>
                <h1 className="text-5xl">CARTAS</h1>

                <div className='w-fit'>
                    {loadingBlock ? "cargando lista de cartas..." :
                        errorBlocks ? 'error cargando cartas' : blockElements ? blockElements : null}
                </div>
                <BotonNuevaCarta />

            </div>
        </div>
    )
}

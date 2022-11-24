import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import NavBar from '../components/NavBar/navigationbar';
import { Cartas } from '@prisma/client';
import { useRouter } from 'next/router';
import Link from 'next/link';
import BotonNuevaCarta from '../components/cartas/BotonNuevaCarta';
import { QueryClient } from '@tanstack/react-query'

const fetchMetadata = async (): Promise<Cartas[]> => await fetch('http://localhost:3000/api/db/cartas/get-syllabuses').then(r => r.json());
const deleteSyllabus = async (ID: string) => await fetch('http://localhost:3000/api/db/cartas/delete-syllabus', {
    method: "POST", body: JSON.stringify({
        "syllabusId": ID
    })
}).then(r => r.json());



const CreateBlocksFC = (_props: Cartas): JSX.Element => {
    const { data: res, refetch } = useQuery([ 'deleteSyllabus' ], () => deleteSyllabus(_props.id), { enabled: false });

    const router = useRouter();
    const handleDeletionCallback = () => {
        refetch();
        if (res) { console.log(res) };
    }



    return (
        <div key={_props.id} className='p-1 m-2 rounded gap-5 justify-between items-center flex w-auto'>
            <input type="checkbox" />
            <Link href={`/carta/${_props.id}`} className={'text-center align-baseline self-center'}>{_props.NOMBRE_CARTA }</Link>
            <div className="btn-group">
                <button className='btn flex' type='button' onClick={() => { router.push(`/editor/${_props.id}`) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>
                </button>
                <button className='btn flex btn-warning' type='button' onClick={() => { handleDeletionCallback() }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </button>
            </div>

        </div>
    );
}
const createBlocks = async (metadata: Cartas[]) => {
    let listCartas = [];
    listCartas = metadata.map((carta) => {
        return (<CreateBlocksFC {...carta} key={carta.id} />)
    });
    return listCartas
}


// const OnMutate = async (ID: string) => {
//     const queryClient = useQueryClient();
//     await queryClient.cancelQueries([ 'cartas' ]);
//     let prevData: Cartas[] = queryClient.getQueryData([ 'cartas' ]);
//     let newData: (Cartas[]) = [];
//     if (prevData) {
//         newData = prevData?.map((carta: Cartas) => {
//             if (carta.id !== ID) {
//                 return carta;
//             }
//         })
//         queryClient.setQueryData([ 'cartas' ], [ ...newData, ]);
//     }
//     return newData;
// };

export default function CartasPage() {

    const { data } = useQuery([ 'cartas' ], () => fetchMetadata());

    // const { mutate } = useMutation(onMutate, {
    //     // options
    // });




    const { data: blockElements, isLoading: loadingBlock, error: errorBlocks } = useQuery([ 'cartasBlocks' ], () => createBlocks(data), { enabled: !!data, })
    return (
        <div className="flex justify-between flex-col">
            <NavBar />
            <div className='p-4'>
                <span className='flex flex-auto justify-between'>
                    <h1 className="text-3xl font-extrabold">CARTAS 🗃️</h1>
                    <BotonNuevaCarta />
                </span>
                <div className='w-fit'>
                    {loadingBlock ? "cargando lista de cartas..." :
                        errorBlocks ? 'error cargando cartas' : blockElements ? blockElements : null}
                </div>
            </div>
        </div>
    )
}


import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link';
import { Cartas } from '@prisma/client';
const fetchCarta = async (id: string) => {
    const req = await fetch('http://localhost:3000/api/db/cartas/get-syllabus', { method: 'POST', body: JSON.stringify({ "syllabusId": id }) }).then(r => r.json());
    return req;
};

const fetchFilas = async (filas: []) => {
    const filasData: string[] = [];
    for (const iterator of filas) {

        const req = await fetch('http://localhost:3000/api/db/filas/getRow', { method: 'POST', body: JSON.stringify({ "rowId": filas[ iterator ] }) }).then(r => r.json);
        console.log(req);
    }
    return filasData

}

const Carta = () => {
    const router = useRouter()
    const pid = router.query;
    //console.log(pid);
    const reqbody: object = { "syllabusId": pid.id };
    console.log(reqbody);
    const { isLoading, error, data } = useQuery([ 'syllabusData' ], () => fetchCarta(pid?.id?.toString()),);

   const { data: filas } = useQuery([ 'filas' ], () => { fetchFilas(data?.IDs_FILAS_CARTAS.toString()) }, { enabled: !!data })
    
    if (data) {
        console.log(data);
    }
    

    return (
        <div>
            <h1>Carta: {pid.id}</h1>

            <div>
                {data ? 'CARTA LOADED' : 'error loading carta'}
            </div>
        </div>
    )
}

export default Carta;


import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link';
import { Cartas, filasCartas } from '@prisma/client';

const fetchCarta = async (id: string) => {
    const req: Cartas = await fetch('http://localhost:3000/api/db/cartas/get-syllabus', { method: 'POST', body: JSON.stringify({ "syllabusId": id }) }).then(r => r.json());
    return req;
};

const fetchFilas = async (filas: string[]) => {
    const filasData = [];

    //console.log(filas);

    for await (const iterator of filas) {
        const req: filasCartas = await fetch('http://localhost:3000/api/db/filas/getRow',
            {
                method: 'POST',
                body: JSON.stringify({ rowId: iterator }),
            }).then(r => r.json());
       // console.log(req.filaJSON);
        filasData.push(<p key={req.id}>{req.filaJSON.toString()}</p>);

    }

    return filasData;
}

const Carta = () => {
    const router = useRouter()
    const pid = router.query;
    const reqbody: object = { "syllabusId": pid.id };
    const { isLoading, error, data: syllabusData } = useQuery([ 'syllabusData' ], () => fetchCarta(pid?.id?.toString()),);

    const { data: filas, error: errorFilas, isLoading: loadingFilas } = useQuery([ 'filas' ], () => fetchFilas(syllabusData?.IDs_FILAS_CARTAS), { enabled: !!syllabusData })


    if (syllabusData) {
        console.log(syllabusData);
        if (filas) {
            console.log(filas);
        }
    }




    return (
        <div>
            <h1>Carta: {pid.id}</h1>

            <div>
                {isLoading ? 'LOADING CARTA' :
                    (syllabusData ? 'Loaded CARTA' :
                        (error ? 'ERROR loading CARTA' : null))}

            </div>
            <div>
                {filas ? filas : null}
            </div>

        </div>
    )
}

export default Carta;


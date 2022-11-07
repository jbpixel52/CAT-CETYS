import Head from "next/head";
import NavBar from "../../components/NavBar/navigationbar";

import { camposCartas } from '@prisma/client'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query';
import { Cartas, filasCartas } from '@prisma/client';


const fetchCarta = async (id: string) => {
    const req: Cartas = await fetch('http://localhost:3000/api/db/cartas/get-syllabus', { method: 'POST', body: JSON.stringify({ "syllabusId": id }) }).then(r => r.json());
    return req;
};


export default function Editor() {
    const router = useRouter();
    const pid = router.query;
    const { isLoading, error, data: syllabusData } = useQuery([ 'syllabusData' ], () => fetchCarta(pid?.id?.toString()),);



    return (<div>
        <Head>
            <title>Editor</title>
        </Head>
        <NavBar />

        <h1 className="text-5xl font-bold">Editor para la carta     {syllabusData ? syllabusData.NOMBRE_CARTA : '...'}</h1>
        <div className="bg-amber-100 flex flex-row space-x-10">

            <div className="bg-sky-200">
                {/* THE FORM FIELDS GO HERE*/}
                LEFT SIDE  FORM SIDE
            </div>

            <div className="bg-slate-100">
                {/** THE CARD PREVIEW GOES HERE */}
                RIGHT SIDE PREVIEW SIDE
            </div>
        </div>

    </div>);
}
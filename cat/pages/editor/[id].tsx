import NavBar from "../../components/NavBar/navigationbar";
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query';
import { Cartas } from '@prisma/client';
import NewField from "../../components/editor/NewField";
import Preview from "../../components/editor/Preview";
const fetchCarta = async (id: string) => {
    const req: Cartas = await fetch('http://localhost:3000/api/db/cartas/get-syllabus', { method: 'POST', body: JSON.stringify({ "syllabusId": id }) }).then(r => r.json());
    return req;
};
export default function Editor() {
    const router = useRouter();
    const pid = router.query;
    const { data: syllabusData } = useQuery([ `${pid?.id}` ], () => fetchCarta(pid?.id?.toString()));
    return (<div>
        <NavBar />
        <h1 className="text-2xl font-bold m-2 underline">Editor para la carta     {syllabusData ? syllabusData.NOMBRE_CARTA : '...'}</h1>
        <div className="bg-amber-100 flex flex-row space-x-10">

            <div className="bg-sky-200 w-1/2">
                {/* THE FORM FIELDS GO HERE*/}
                LEFT SIDE  FORM SIDE
                <NewField syllabusData={syllabusData} />

            </div>

            <div className="bg-slate-100 w-1/2">
                {/** THE CARD PREVIEW GOES HERE */}
                <h2>RIGHT SIDE PREVIEW SIDE</h2>
                <div>
                    {syllabusData ? <Preview syllabusData={syllabusData} /> : <></>}
                </div>
            </div>
        </div>

    </div>);
}
import NavBar from "../../components/NavBar/navigationbar";
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query';
import { Cartas } from '@prisma/client';
import NewField from "../../components/editor/NewField";
import Preview from "../../components/editor/Preview";
import Forms from '../../components/editor/Forms'
const fetchCarta = async (id: string) => {
    const req: Cartas = await fetch('http://localhost:3000/api/db/cartas/get-syllabus', { method: 'POST', body: JSON.stringify({ "syllabusId": id }) }).then(r => r.json());
    return req;
};
export default function Editor() {
    const router = useRouter();
    const pid = router.query;
    const { data: syllabusData } = useQuery([ `${pid?.id}` ], () => fetchCarta(pid?.id?.toString()));

    return (<div className="p-2 h-screen ">
        <NavBar />
        <h1 className="text-2xl bg-amber-200 p-1 rounded-sm font-bold m-2">{syllabusData ? syllabusData.NOMBRE_CARTA : '...'}</h1>
        <div className=" flex flex-row space-x-10 place-content-center" >
            <div className=" w-3/5">
                {/* THE FORM FIELDS GO HERE*/}
                {syllabusData ? <Forms props={syllabusData} /> : null}
                <NewField syllabusData={syllabusData} />

            </div>

            <div className=" w-2/5">
                {/** THE CARD PREVIEW GOES HERE */}
                <h2>RIGHT SIDE PREVIEW SIDE</h2>
                <div>
                    {syllabusData ? <Preview syllabusData={syllabusData} /> : <></>}
                </div>
            </div>
        </div>

    </div>)


}
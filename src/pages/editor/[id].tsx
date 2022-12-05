import NavBar from "../../components/NavBar/navigationbar";
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query';
import type { Cartas } from '@prisma/client';
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

    return (
        <div className="">
            <NavBar />
            <span className="flex justify-evenly p-2">
                <h1 className="font-bold text-2xl p-2 shadow-xl">{syllabusData ? syllabusData.NOMBRE_CARTA : '...'}</h1>
                <div className="btn-group">
                    <button className="btn" type="button" onClick={() => router.push(`/historial/${pid?.id?.toString()}`)}>
                        Historial de la carta
                    </button>
                    <button className="btn" type="button" onClick={() => router.push(`/carta/${pid?.id?.toString()}`)}>
                        Ver carta
                    </button>
                </div>
            </span>

            <div className="flex"> {/**here starts the body of the page */}
                <section className="box m-auto">
                    {/* THE FORM FIELDS GO HERE*/}
                    {syllabusData ? <Forms props={syllabusData} /> : null}
                    <br />
                    <NewField syllabusData={syllabusData} />

                </section>
            </div>

        </div>
    )


}
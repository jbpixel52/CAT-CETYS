import { Cartas, filasCartas } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
type PreviewProps = { syllabusData: Cartas }
const fetchFila = async (ID: String) => { const req: filasCartas = await fetch("http://localhost:3000/api/db/filas/getRow", { method: "POST", body: JSON.stringify({ rowId: ID }) }).then(r => r.json()); return req; }

function Fila(ID: string) {
    const { data: filaData } = useQuery([ `filaData${ID}` ], () => fetchFila(ID));
    return filaData ? <p key={filaData.id}>{filaData.filaJSON}</p> : null
}

const Preview = ({ syllabusData }: PreviewProps) => {
    let previewHTMLblocks: JSX.Element[] = syllabusData?.IDs_FILAS_CARTAS.map(ID => Fila(ID));
    return (<>{previewHTMLblocks}</>);
}
export default Preview;
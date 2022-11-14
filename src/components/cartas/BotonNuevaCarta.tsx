import { useQuery } from "@tanstack/react-query"


export default function BotonNuevaCarta() {
    const { data } = useQuery([ 'nuevaCarta' ], () => fetch('http://localhost:3000/api/db/cartas/get-syllabuses').then(r => r.json()),
        {
            enabled: false,
        });
    return (
        <button type="button" className="" onClick={() => data()}>CREAR NUEVA CARTA</button>
    )
}
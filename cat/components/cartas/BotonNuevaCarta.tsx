import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { useState } from "react";

export default function BotonNuevaCarta() {
    const { isLoading, error, data } = useQuery([ 'nuevaCarta' ], () => fetch('http://localhost:3000/api/db/cartas/get-syllabuses').then(r => r.json()),
        {
            enabled: false,
        });



    return (
        <button type="button" className="rounded bg-amber-300 p-1 m-1 hover:bg-amber-400 active:bg-amber-500 hover:font-bold drop-shadow-lg" onClick={() => data()}>CREAR NUEVA CARTA</button>
    )
}
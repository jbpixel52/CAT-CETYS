import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { Cartas } from '@prisma/client'
import { useState } from 'react';

export default function cartas() {
    const { isLoading, error, data } = useQuery([ 'cartas' ], () => fetch('http://localhost:3000/api/db/cartas/get-syllabuses').then(r => r.json()))
    let listCartas: any = [];
    //    data.map((object) => console.log(object));

    try {
        listCartas = (data.map((object: Cartas) => {
            return (
                <div key={object.id} className='bg-amber-200 p-4'>
                    <p>{object.NOMBRE_CARTA}</p>
                    <p>{object.NOMBRE_CARRERA}</p>
                    <p>{object.PROFESOR}</p>
                    <p>{object.SEMESTRE}</p>
                    <p>{object.id}</p>
                </div>
            )
        }))
    } catch (error) {

    }
    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error;


    return (
        
        <div>
            <h1 className="text-5xl">CARTAS</h1>

            <div>
                {listCartas}
            </div>
        </div>
    )
}
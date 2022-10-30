// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
import { GetStaticPaths } from 'next'
import { Cartas } from '@prisma/client';

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const res = await fetch('http://localhost:3000/api/db/cartas/get-syllabuses', {
        method: 'GET'
    }).then(r => r.json());

    console.log(res);
    const data = JSON.parse(JSON.stringify(res));

    console.log(data);
    // const paths = data.map(carta => {
    //     return {
    //         params: { id: carta?.id.toString() }
    //     }
    // })

    /**
     * Error: Invalid `paths` value returned from getStaticPaths in /cartas/[id].
`paths` must be an array of strings or objects of shape { params: [key: string]: string }
     */
    const paths = [ '63538d17e66bd72d69f3868a' ];
    // const paths = { id: '63538d17e66bd72d69f3868a' };
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (ctx) => {
    const id = ctx.params.id;
    const res = await fetch('http://localhost:3000/api/db/cartas/get-syllabus', {
        method: 'GET',
        body: id
    }
    )

    const data = await res.json();
    return {
        props: { carta: data }
    }
}

export default function CartaPage(carta: Cartas) {
    return (
        <div>
            <h1 className='text-5xl'>{carta.NOMBRE_CARRERA}</h1>
        </div>
    )
}
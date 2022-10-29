import Login from '../components/login/login';
import Image from 'next/future/image'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react';

export default function BrandPage() {
    const router = useRouter();
    const { data: session, status } = useSession();


    return (
        <div className='w-full	flex  h-screen justify-between bg-amber-100 flex-col p-10'>
            <div className='flex flex-col w-auto h-auto'>
                <div className='flex flex-row h-auto justify-between'>
                    <h1 className="text-7xl w-auto h-auto font-bold font-sans">CAT😼</h1>
                    <div className='h-auto w-auto px-5'>
                        {session ? <button className="rounded bg-amber-300 p-1 m-1 hover:bg-amber-400 active:bg-amber-500 hover:font-bold drop-shadow-lg" >Abrir Escritorio</button> : <></>}
                        <Login />
                    </div>
                </div>
                <div className='flex flex-row h-auto justify-between'>
                    <div >
                        <h2 className='text-3xl font-semibold'>Cartas Académicas Transcritas</h2>
                        <p>Esta aplicacion permite generar cartas descriptivas de los distintos cursos de la escuela de ingenieria, hace lo siguiente:</p>
                        <p>Guardar la informacion de los cursos para verla en cualquier formato deseado</p>
                        <p>Generar cartas descriptivas con los formatos deseados por el usuario, disponiendo del formato CETYS, de CACEI y de WASC.
                        </p>
                        <p>El usuario puede generar sus propios formatos.
                        </p>
                        <p>Se podran exportar cartas de distintas materias o en distintos formatos de una sola vez.
                        </p>
                    </div>
                    <Image
                        width={400}
                        height={400}
                        src='/page_emoji.png'
                        alt="Pag with curl 3d emoji"
                    />
                </div>
            </div>

            <div className='flex justify-center'>
                <p>🐈 es un proyecto de estudiantes del CETYS campus Tijuana</p>
            </div>
        </div>
    )
}
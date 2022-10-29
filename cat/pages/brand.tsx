import Login from '../components/login/login';
import Image from 'next/future/image'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react';

export default function BrandPage() {
    const router = useRouter();
    const { data: session, status } = useSession();


    return (<div>
        <div>
            <div
            ><h1 className="text-3xl font-bold underline">CAT😼</h1>


                <div>
                    {session ? <button >Abrir Escritorio</button> : <></>}
                    <Login />

                </div>

            </div>
            <div>
                <div
                >
                    <p>
                        <i>Cartas Académicas Transcritas</i>
                    </p>

                    <p>Esta aplicacion permite generar cartas descriptivas de los distintos cursos de la escuela de ingenieria, hace lo siguiente:</p>
                    <ul>
                        <li><p>Guardar la informacion de los cursos para verla en cualquier formato deseado
                        </p></li>
                        <li>
                            <p>Generar cartas descriptivas con los formatos deseados por el usuario, disponiendo del formato CETYS, de CACEI y de WASC
                            </p>
                        </li>  <li>
                            <p>El usuario puede generar sus propios formatos
                            </p>
                        </li>  <li>
                            <p>Se podran exportar cartas de distintas materias o en distintos formatos de una sola vez.
                            </p>
                        </li>
                    </ul>
                </div>
                <Image
                    width={400}
                    height={400}
                    src='/page_emoji.png'
                    alt="Pag with curl 3d emoji"
                />
            </div>
        </div>
        <div
        >
            <p>MEOW🐈 (2022)</p>
        </div>
    </div>
    )
}
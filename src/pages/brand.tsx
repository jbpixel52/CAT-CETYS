import Login from '../components/login/login';
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react';
import { themeChange } from 'theme-change';
import { useEffect } from 'react';
import ThemeSelector from '../components/theme/themeSelector';
import Hero from '../components/brand/Hero';

export default function BrandPage() {
    const router = useRouter();
    const { data: session } = useSession();
    return (

        <div className='bg-base-200'>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("firedrill.gif")` }}>
                <div className="hero-overlay bg-opacity-60"></div>

                <div className="hero-content text-center text-neutral-content" >
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold p-5">CAT😼</h1>
                        <h2 className="text-3xl font-bold">Cartas Académicas Transcritas</h2>
                        <div className="py-10 ">
                            Esta aplicacion permite generar cartas descriptivas de los distintos cursos de la escuela de ingenieria, hace lo siguiente:
                            <ul>
                                <li>
                                    Guardar la informacion de los cursos para verla en cualquier formato deseado
                                </li>
                                <li>
                                    Generar cartas descriptivas con los formatos deseados por el usuario, disponiendo del formato CETYS y CACEI.
                                </li>
                                <li>
                                    Generar cartas descriptivas con los formatos deseados por el usuario, disponiendo del formato CETYS y CACEI.
                                </li>
                                <li>
                                    El usuario puede generar sus propios formatos.
                                </li>
                                <li>
                                    Se podran exportar cartas de distintas materias o en distintos formatos de una sola vez.
                                </li>
                            </ul>
                        </div>
                        <Login />
                    </div>
                </div>
            </div>

            <footer className='footer footer-center	'>
                <ThemeSelector />
            </footer>
        </div>
    )

}
import Image from 'next/image';
import { useRouter } from 'next/router';

const Historial = () => {
    const router = useRouter();

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md gap-10">
                    <h1 className="text-5xl font-bold">404</h1>
                    <p className="py-6">Página bajo construcción</p>
                    <Image className='rounded-full shadow-xl' src={'/404.png'} width={400} height={400} alt={'gato trabajando muy duro y estresado'}></Image>
                    <button type={'button'} className="btn btn-primary" onClick={() => { router.push('/') }} >
                        Regresar al escritorio
                    </button>
                </div>

            </div>
        </div>
    )
}
export default Historial
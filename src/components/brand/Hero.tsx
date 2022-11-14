import Login from "../login/login";

const Hero = (): JSX.Element => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">CAT😼</h1>
                    <h2 className="text-3xl font-bold">Cartas Académicas Transcritas</h2>

                    <p className="py-6">Esta aplicacion permite generar cartas descriptivas de los distintos cursos de la escuela de ingenieria, hace lo siguiente:
                        Guardar la informacion de los cursos para verla en cualquier formato deseado
                        Generar cartas descriptivas con los formatos deseados por el usuario, disponiendo del formato CETYS y CACEI.
                        El usuario puede generar sus propios formatos.
                        Se podran exportar cartas de distintas materias o en distintos formatos de una sola vez.</p>
                    <Login />
                </div>
            </div>
        </div>)
}

export default Hero;
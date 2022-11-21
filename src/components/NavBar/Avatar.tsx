import { useSession } from "next-auth/react";
import Image from "next/image";
import Login from "../login/login";
import ThemeSelector from "../theme/themeSelector";

export default function Avatar():JSX.Element {
    const { data: session } = useSession();
    return (

        <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost rounded-btn">
                <div className="avatar">
                    <div className="rounded-full">
                        <Image src={session ? session.user.image : '/favicon.ico'} alt={`Foto perfil de ${session?.user?.name}`} width={40} height={40}>
                        </Image>
                    </div>
                </div>
            </label>
            <ul tabIndex={0} className="menu dropdown-content flex p-2 shadow bg-base-100 rounded-box w-auto mt-4 align-top items-center">
                <li>{session ? session.user?.name : 'sin nombre'}</li>
                <li>{session ? session.user?.email : 'sin correo'}</li>
                <li><Login /></li>
                <li><ThemeSelector /></li>


            </ul>
        </div>



    )

}

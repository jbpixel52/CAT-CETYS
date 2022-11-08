import { useSession } from "next-auth/react";
import Image from "next/future/image";
import { Popover } from '@headlessui/react'
import Login from "../login/login";

export default function Avatar() {
    const { data: session } = useSession();

    return (
        <Popover className="relative">
            <Popover.Button className={"rounded-full overflow-clip"}><Image src={session ? session.user.image : '/favicon.ico'} alt={`Foto perfil de ${session?.user?.name}`} width={30} height={30}></Image></Popover.Button>

            <Popover.Panel className="absolute z-30">
                <div className="bg-pink-50  flex-row">

                        <Login></Login>                
                </div>


            </Popover.Panel>
        </Popover>
    )
}

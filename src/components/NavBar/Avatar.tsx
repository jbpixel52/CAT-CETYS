import { useSession } from "next-auth/react";
import Image from "next/image";
import { Popover } from '@headlessui/react'
import Login from "../login/login";
import { useState } from "react";

export default function Avatar() {
    const { data: session } = useSession();
    const [ open, setopen ] = useState(false);
    return (
        // <Popover className="relative">
        //     <Popover.Button className={"rounded-full overflow-clip"}>
        //         <div className="avatar">
        //             <div className="w-24 rounded-full">
        //                 <Image src={session ? session.user.image : '/favicon.ico'} alt={`Foto perfil de ${session?.user?.name}`} width={30} height={30}>
        //                 </Image>
        //             </div>
        //         </div>
        //     </Popover.Button>

        //     <Popover.Panel className="absolute z-30">
        //             <Login />
        //     </Popover.Panel>
        // </Popover>

        <div>
            <button onClick={() => { setopen(!open) }} className="btn">CLICK ME!</button>

            {open ?
                <div className="absolute">
                    <div className="">clicked the button</div>
                </div> :
                <></>}
        </div>
    )

}

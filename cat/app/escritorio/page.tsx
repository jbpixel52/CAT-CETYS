
'use client';

import { useSession } from 'next-auth/react'



export default function Desk() {

    const { data: session, status } = useSession();

    if (session) {
        return (<div>
            <p>
                Bienvenido a tu Escritorio
            </p>
        </div>)

    }
}

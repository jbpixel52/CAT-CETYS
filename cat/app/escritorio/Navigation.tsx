'use client';
import { useSession } from "next-auth/react";
export default function Navigation() {
    const { data } = useSession();
    if (data) {
        return (
            <div className=' w-full p-1 self-auto flex justify-between h-auto bg-amber-400'>
                Navigation Bar
                <a href="/escritorio/cartas">GO TO CARTAS</a>
                <p>NAVIGATION BAR</p>
            </div>
        )
    }
}
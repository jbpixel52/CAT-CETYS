import { useSession } from "next-auth/react";
import Image from 'next/image';

export default function AccountMenu() {
    const { data: session, status } = useSession();
    if (session) {
        return (
            <Image
            src={session?.user?.image}
            alt="Picture of the author"
            width={500}
            height={500}
        />
        );
    } else {
        return (
            <p>Failed to load image Profile </p>
        )
    }
}

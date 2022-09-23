import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/router'
import { useEffect } from "react";
const login = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    //IF user hits /login  , THEN redirect them to the login flow.

}


export default login;
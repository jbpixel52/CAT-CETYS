import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/router'
import { useEffect } from "react";
import { Header } from "../components/header/header";
import Login from "../components/login"
import Link from "next/link";
export default function Home() {
  const { data: session } = useSession();
  const router = useRouter()
  if (!session) {
    console.log('Client is logged out');
    return(<Login/>)
       
    }else{
      //  GO TO MAIN PAGE FOR THE USER
        router.push('/desk')
    }
}



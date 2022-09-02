import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/router'
import { useEffect } from "react";
import { Header } from "../components/header/header";
import Link from "next/link";
export default function Home() {
  const { data: session } = useSession();
  const router = useRouter()
  if (!session) {
    console.log('Client is logged out');// here we are supposed to redirect to ./login.tsx
    useEffect(()=>{
      router.push('/login')
    })
    }else{
      //continue to to main menu
    }
}



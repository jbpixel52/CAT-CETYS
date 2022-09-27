import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/router'
import Login from "../components/login/login"
import BrandPage from "./brand";
export default function Home() {
    return <BrandPage/>
    }




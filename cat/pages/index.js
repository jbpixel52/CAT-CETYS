import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/router'
import Login from "../components/login"
import BrandPage from "./brand";
export default function Home() {
  const { data: session } = useSession();
  const router = useRouter()
  if (!session) {
    return(
  <BrandPage/>
    // <Login/>
    )
       
    }else{
      //  GO TO MAIN PAGE FOR THE USER
        router.push('/desk')
    }
}



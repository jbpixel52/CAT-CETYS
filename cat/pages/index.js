import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/router'
import Login from "../components/login"
export default function Home() {
  const { data: session } = useSession();
  const router = useRouter()
  if (!session) {
    return(
    
    <Login/>
    )
       
    }else{
      //  GO TO MAIN PAGE FOR THE USER
        router.push('/desk')
    }
}



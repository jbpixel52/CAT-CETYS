import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { Header } from "../components/header/header";

export default function Login(){
    const { data: session } = useSession();
    const router = useRouter();

    if(session){
      router.push('/')

    //   return(    <>
    //     <Header title="CAT 😼"/>
    //       Signed in as {session?.user?.email} <br />
    //       <button onClick={() => signOut()}>Sign out</button>
    //     </>
    // )
    }else{

      return( <>
        <Header title="CAT 😿"/>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>)
       }
}

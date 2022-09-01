import { useSession, signIn, signOut } from "next-auth/react";
import { Header } from "../components/header/header";

export default function Login(){
    const { data: session } = useSession();
    if(session){return(    <>
        <Header title="CAT 😼"/>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
    )
    }else{
        <>
        <Header title="CAT 😿"/>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>}
}

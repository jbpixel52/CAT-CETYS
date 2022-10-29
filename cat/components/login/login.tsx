import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/router'

export default function Login() {
  const { data: session } = useSession();
  const signInParams = { callbackUrl: 'http://localhost:3000/escritorio' };
  if (session) {
    //CHANGE URL IN THE CALLBACK URL 
    return (
      <button className="rounded bg-amber-300 p-1 m-1 hover:bg-amber-400 active:bg-amber-500 hover:font-bold drop-shadow-lg" onClick={() => {
        signOut({ callbackUrl: 'http://localhost:3000/' })
      }
      }>Cerrar sesión</button>)
  }
  return (

    <button className="rounded bg-amber-300 p-1 m-1 hover:bg-amber-400 active:bg-amber-500 hover:font-bold drop-shadow-lg" type="button" onClick={() => signIn("google", signInParams)}>Iniciar sesión con Google</button>
  )
}

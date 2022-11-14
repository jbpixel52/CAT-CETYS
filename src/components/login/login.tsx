import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/router'

export default function Login() {
  const { data: session } = useSession();
  const signInParams = { callbackUrl: 'http://localhost:3000/escritorio' };
  if (session) {
    //CHANGE URL IN THE CALLBACK URL 
    return (
      <button className="btn-accent	" onClick={() => {
        signOut({ callbackUrl: 'http://localhost:3000/' })
      }
      }>Cerrar sesión</button>)
  }
  return (

    <button className="btn btn-outline" type="button" onClick={() => signIn("google", signInParams)}>Iniciar sesión con Google</button>
  )
}

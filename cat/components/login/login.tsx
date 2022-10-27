"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();
  const signInParams = { callbackUrl: 'http://localhost:3000/escritorio' };
  if (session) {
    //CHANGE URL IN THE CALLBACK URL
    return (
      <button className="bg-yellow-500	p-1 rounded ..." type="button" onClick={() => signOut({ callbackUrl: 'http://localhost:3000/' })}>
        Cerrar sesión
      </button >
    )
  }
  return (

    <button className="bg-yellow-500	p-1 rounded ..." onClick={() => signIn("google", signInParams)}>Iniciar sesión con Google</button>
  )
}

'use client';
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@mui/material";
import { useRouter } from 'next/router'

export default function Login() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const signInParams = { callbackUrl: 'http://localhost:3000/desk' };
  if (session) {
    //CHANGE URL IN THE CALLBACK URL 
    return (
      <Button variant="outlined" onClick={() => {
        signOut({ callbackUrl: 'http://localhost:3000/' })
      }
      }>Cerrar sesión</Button>)
  }
  return (

    <Button variant="contained" onClick={() => signIn("google", signInParams)}>Iniciar sesión con Google</Button>
  )
}

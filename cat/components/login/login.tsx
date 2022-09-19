import { useSession, signIn, signOut } from "next-auth/react";
import {Button } from "@mui/material";
import { useRouter } from 'next/router'


export default function Login() {
  const { data: session , status} = useSession();
  const router = useRouter();

  if (session) {
    return (
      <Button variant="outlined" onClick={() => {
        signOut();
      router.push('/')}
      }>Sign Out</Button>)
  }
  return (
    <Button variant="contained" onClick={() => signIn("google")}>Sign in with Google</Button>
  )
}

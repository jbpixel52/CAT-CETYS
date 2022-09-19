import { useSession, signIn, signOut } from "next-auth/react";
import {Button } from "@mui/material";


export default function Login() {
  const { data: session , status} = useSession();
  if (session) {
    //if logged in return user info [name, email and profile photo] and show the option to log out
    return (
      <Button variant="outlined" onClick={() => signOut()}>Sign Out</Button>)
  }
  return (
    <Button variant="contained" onClick={() => signIn(["google"])}>Sign in with Google</Button>
  )
}

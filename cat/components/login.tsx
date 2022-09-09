import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Image from 'next/image';
import { Avatar, Button, Paper,Typography } from "@mui/material";
export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    //if logged in return user info [name, email and profile photo] and show the option to log out
    return (
      <Button variant="outlined" onClick={() => signOut()}>Sign Out</Button>)
  } else {

    return (
      <Button variant="contained" onClick={() => signIn()}>Sign in</Button>
    )
  }
}

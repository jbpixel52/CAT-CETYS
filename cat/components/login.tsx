import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Image from 'next/image';
import { Avatar, Button } from "@mui/material";
export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    //if logged in return user info [name, email and profile photo] and show the option to log out
    return (
      <div>
        <p>Signed in as {session?.user?.name}</p>
        <p>Email is {session?.user?.email}</p>
        <Avatar  sx={{ width: "3em", height:"3em", alignContent:'center' }} alt={session?.user?.name} src={session?.user?.image!} />
        {/* The  !  post-fix expression operator may be used to assert that its operand is non-null and non-undefined in contexts where the type checker is unable to conclude that fact.*/ }
        <br />
        <Button variant="outlined" onClick={() => signOut()}>Sign Out</Button>
      </div>
    )
  } else {

    return (<div>
      Not signed in <br />
      <Button variant="contained" onClick={() => signIn()}>Sign in</Button>
    </div>)
  }
}

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Image from 'next/image';

export default function Login() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    //if logged in return user info [name, email and profile photo] and show the option to log out
    return (
      <div>
        <p>Signed in as {session?.user?.name}</p>
        <p>Email is {session?.user?.email}</p>
        <Image width={"100rem"} height={"100rem"} src={session?.user?.image!} /* The  !  post-fix expression operator may be used to assert that its operand is non-null and non-undefined in contexts where the type checker is unable to conclude that fact.*/ />

        <br />
        <button onClick={() => signOut()}>Sign out</button></div>

    )
  } else {

    return (<>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>)
  }
}

import { useSession, signIn, signOut } from "next-auth/react";
// eslint-disable-next-line no-undef
export default function Login(): JSX.Element {
  const { data: session } = useSession();
  const signInParams = { callbackUrl: 'http://localhost:3000/escritorio' };
  const signInCallback = () => (signIn("google", signInParams));
  const signOutCallback = () => (signOut({ callbackUrl: 'http://localhost:3000/' }));
  //TODO: FIND OUT WHY TAILWIND+DAISYUI cant theme the Login button
  return (!session ?
    <button type="button" className="btn rounded-full btn-xl" onClick={() => signInCallback()
    }> Iniciar sesion con Google</button> :
    <button type="button" className="btn btn-secondary" onClick={() => signOutCallback()}>cerrar sesion</button>);
}

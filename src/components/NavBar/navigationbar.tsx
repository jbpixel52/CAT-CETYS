import { useSession } from "next-auth/react";
import Link from "next/link";
import ThemeSelector from "../theme/themeSelector";
import Avatar from "./Avatar";
import NavBarButton from "./navBarButtons";

export default function NavBar() {

  const { data: session, status } = useSession();
  return (
    <div className="flex justify-evenly items-center w-screen item h-auto flex-grow">

      <div className="btn-group">
        <NavBarButton href="/cartas" label='Cartas' />
        <NavBarButton href="/historial" label='Historial' />
      </div>
      <Link href={'/'}>
        <h1 className="text-4xl font-bold">CAT😺</h1>
      </Link>
      <Avatar />
      <ThemeSelector />

    </div>
  )

}
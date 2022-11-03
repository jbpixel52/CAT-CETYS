import { useSession } from "next-auth/react";
import Link from "next/link";
import Avatar from "./Avatar";
import NavBarButton from "./navBarButtons";

export default function NavBar() {

  const { data: session, status } = useSession();
  return (
    <div className="bg-amber-200 h-min flex flex-auto flex-row p-3 content-between justify-around">
      <div className="font-bold text-4xl">
        <Link href={'/'}>
          CAT😺
        </Link>

      </div>

      <div className="flex flex-row">

        <NavBarButton href="/escritorio" label='Escritorio' />
        <NavBarButton href="/cartas" label='Cartas' />
        <NavBarButton href="/editor" label='Editor' />
        <NavBarButton href="/historial" label='Historial' />


      </div>
      <Avatar />
    </div>
  )

}
import { useSession } from "next-auth/react";
import NavBarButton from "./navBarButtons";

export default function NavBar() {

  const { data: session, status } = useSession();
  return (
    <div>
      <div>
        CAT😺
      </div>

      <div>

        <NavBarButton href="/escritorio" label='Escritorio' />
        <NavBarButton href="/cartas" label='Cartas' />
        <NavBarButton href="/editor" label='Editor' />
        <NavBarButton href="/historial" label='Historial' />


      </div>
    </div>
  )

}
import Link from "next/link";
import ThemeSelector from "../theme/themeSelector";
import Avatar from "./Avatar";
import NavBarButton from "./navBarButtons";

export default function NavBar() {
  return (
    <div className="w-screen p-1 m-2 rounded gap-5 justify-between items-center flex">
      <div className="btn-group">
        <NavBarButton href="/cartas" label='Cartas' />
        <NavBarButton href="/historial" label='Historial' />
      </div>
      <Link href={'/'}>
        CAT😺
      </Link>
      <div className="flex">
        <Avatar />
        <ThemeSelector />
      </div>

    </div>
  )

}
import Link from "next/link";
import Avatar from "./Avatar";
import NavBarButton from "./navBarButtons";
import SearchBar from "./SearchBar";

export default function NavBar(): JSX.Element {
  return (
    <div className=" rounded gap-10 justify-between items-center flex shadow-xl p-1">
      <div className="btn-group">
        <NavBarButton href="/cartas" label='Cartas' />
        <NavBarButton href="/historial/404" label='Historial' />
      </div>
      <Link href={'/'} >
        <p className="text-3xl font-bold text-center ">CAT😺</p>
      </Link>
      <span className="flex gap-1 w-fit">
        <SearchBar/>
        <Avatar />
      </span>
    </div>
  )

}
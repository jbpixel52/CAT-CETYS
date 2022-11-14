import Link from "next/link";
interface ButtonType {
    href: string,
    label: string
}
/**
 *
 *
 * @param {ButtonType} props
 * @return {*}  {JSX.Element}
 */
const NavBarButton = (props: ButtonType): JSX.Element => {
    return(<button className="btn btn-primary">
    <Link href={props.href}>
        <p>{props.label}</p>
    </Link>
</button>) 
}
export default NavBarButton
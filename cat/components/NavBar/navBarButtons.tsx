import Link from "next/link";


interface ButtonType {
    href: string,
    label: string
}
/**
 *
 *
 * @export
 * @param {ButtonType} props
 * @return {*} 
 */
export default function NavBarButton(props: ButtonType) {
    return (
        <Link href={props.href}>
            {props.label}
        </Link>
    )
}

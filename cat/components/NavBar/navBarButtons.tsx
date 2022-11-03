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
        <div className="bg-amber-300 rounded font-bold mx-2 p-1 hover:bg-amber-400">
            <Link href={props.href}>
                <div>{props.label}</div>
            </Link>
        </div>
    )
}

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
        <div className="bg-amber-300 rounded font-bold mx-2 p-1 content-center	 hover:bg-amber-400">
            <Link href={props.href}>
                <p>{props.label}</p>
            </Link>
        </div>
    )
}

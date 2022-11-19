import { useRouter } from 'next/router';
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
    const router = useRouter();
    return (
        <button onClick={() => router.push(props.href)} className='btn btn-accent' type='button'>
           {props.label}
        </button>
    )
}
export default NavBarButton
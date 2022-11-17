import { useRouter } from "next/router";

const Breadcrumbs = (): JSX.Element => {
    const { query, isReady } = useRouter();
    const { pid } = query;

    const BuildRoutes = () => {
        // pid can obly be string or string[] so we check for one or else we do otherwise
        if (typeof pid === 'string') {
            console.log('pid was a string');
            return (
                <li>
                    <a>
                        {pid}
                    </a>
                </li>)
        }
        else {
            console.log('pid was probably of type: string[]');
            return (
                <>
                    {() => pid?.map((slug) => <li key={`breadcrum_${slug}`}><a>{slug}</a></li>)}
                </>
            )
        }
    }
    if (isReady) {
        console.log(`Breadcrumbs know that the pid is ${pid}`);
        return (<BuildRoutes />);
    }

}

export default Breadcrumbs;
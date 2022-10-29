import Login from "../components/login/login";
import { useRouter } from "next/router";
import Head from "next/head";
import NavBar from "../components/NavBar/navigationbar";

export default function Editor() {
    const router = useRouter()
    return (<div>
        <NavBar></NavBar>
        <Head>
            <title>Admin</title>
        </Head>
        <div>
            <p>Admin</p>
            <Login />

            <div>
                <div></div>
                <div></div>
            </div>

        </div>
    </div>);
}
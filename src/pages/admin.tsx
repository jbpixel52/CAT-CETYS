import Login from "../components/login/login";
import Head from "next/head";
import NavBar from "../components/NavBar/navigationbar";

export default function Editor() {
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
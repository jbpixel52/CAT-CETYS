import { Paper, Typography } from "@mui/material";
import PersistentDrawerLeft from "../components/drawer/drawer";
import Login from "../components/login";
import { useRouter } from "next/router";
import Head from "next/head";

export default  function Editor(){
    const router = useRouter()

    return(<>
        
            <Head>
            <title>Editor</title>
            </Head>
        <Paper elevation={18} sx={{m:'5em'}}>
        <Typography>Editor Page</Typography>
        <Login/>
        <PersistentDrawerLeft></PersistentDrawerLeft>
        </Paper>
    </>);
}
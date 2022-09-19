import { Divider, Paper, Stack, Typography } from "@mui/material";
import PersistentDrawerLeft from "../components/drawer/drawer";
import Login from "../components/login";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Editor() {
    const router = useRouter()

    return (<>
        <PersistentDrawerLeft></PersistentDrawerLeft>
        <Head>
            <title>Admin</title>
        </Head>
        <Paper elevation={18} sx={{ m: '5%' }}>
            <Typography variant="h5" sx={{ m: "1em" }}>Admin</Typography>
            <Login />

            <Stack direction="row" justifyContent={"space-evenly"} spacing={3}  divider={<Divider orientation="vertical" flexItem />}   alignItems="flex-start"

>
                <Paper sx={{}}><Typography>LEFT SIDE</Typography></Paper>
                <Paper sx={{}}><Typography>RIGHT SIDE</Typography></Paper>
            </Stack>


        </Paper>
    </>);
}
import { Paper, Typography, Stack, Divider, Card, Box } from "@mui/material";
import PersistentDrawerLeft from "../components/drawer/drawer";
import Login from "../components/login/login";
import { useRouter } from "next/router";
import theme from "../styles/theme";
import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar/navigationbar"
export default function Editor() {

    return (<Box sx={{bgcolor:theme.palette.primary.light, width:'100vw', height:'100vh'}}>
        <Head>
            <title>Editor</title>
        </Head>
        <NavBar/>
        <Paper elevation={18} sx={{ m: '5%' }}>
            <Typography variant="h5" sx={{ m: "1em" }}>Editor</Typography>

            <Stack direction="row" justifyContent={"space-evenly"} spacing={3} divider={<Divider orientation="vertical" flexItem />} alignItems="flex-start">
                <Paper sx={{}}>
                    <Typography>LEFT SIDE</Typography>
                </Paper>
                <Card sx={{ width: "15em", height: "100dvh" }}>
                    <Typography>RIGHT SIDE (CARD LIVE PREVIEW)</Typography>
                    <Image src={"/syllabus_placeholder.png"} height={"100%"} width={"100%"} layout="responsive"></Image>
                </Card>
            </Stack>


        </Paper>
    </Box>);
}
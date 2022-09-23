import { Paper, Typography, Stack, Divider, Card, Box, TextField } from "@mui/material";
import PersistentDrawerLeft from "../components/drawer/drawer";
import Login from "../components/login/login";
import { useRouter } from "next/router";
import theme from "../styles/theme";
import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar/navigationbar"
import Container from "@mui/system/Container";
import Readme from './readme.mdx'
import React from 'react'
import ReactDom from 'react-dom'
import { rootCertificates } from "tls";

async function getFields() {

}

function BuildFunctions() {
    let fields = [ 'field 1', 'field2', 'field3', 'field 4 ', 'nombre', 'field 1', 'field2', 'field3', 'field 4 ', 'nombre' ]

    let componentGroup: JSX.Element = (
        <div>{fields.map((element) => <Stack direction={'row'} spacing={1}>
            <Typography>{element}</Typography>
            <TextField id="outlined-basic" label={"TextField for this " + element.toUpperCase()} variant="outlined" />
        </Stack>)}</div>
    )

    return componentGroup;
}
export default function Editor() {

    return (<Box sx={{ bgcolor: theme.palette.primary.light, width: '100vw', height: '100vh' }}>
        <Head>
            <title>Editor</title>
        </Head>
        <NavBar />
        <Paper elevation={18} sx={{ m: '3%' }}>
            <Typography variant="h5" sx={{ m: "1em" }}>Editor</Typography>

            <Stack direction="row" justifyContent={"space-evenly"} spacing={1} divider={<Divider orientation="vertical" flexItem />} alignItems="baseline">
                <Paper sx={{}}>
                    <Typography>LEFT SIDE</Typography>

                    <BuildFunctions />

                </Paper>
                <Card sx={{ width: "50%", height: "100dvh" }}>
                    <Typography><b>RIGHT SIDE (CARD LIVE PREVIEW)</b></Typography>
                    <Readme></Readme>


                </Card>
            </Stack>


        </Paper>
    </Box>);
}
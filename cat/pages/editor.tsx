import { Paper, Typography, Stack, Divider, Box, TextField, Button } from "@mui/material";
import Head from "next/head";
import NavBar from "../components/NavBar/navigationbar"
import { useEffect, useState } from 'react'
import { MakeRowRequest } from "../cat-db-management/cat-dbMaker/makeRowRequest";

import { camposCartas } from '@prisma/client'

type Fields = camposCartas;




export default function Editor() {

    useEffect(() => {

        async function renderForms() {
            //async function to update Forms
        }
        renderForms();


    }, [])



    return (<Box>
        <Head>
            <title>Editor</title>
        </Head>
        <NavBar />

        <Typography variant="h5" sx={{ m: "1em" }}>Editor</Typography>
        <Stack sx={{ mt: '1em' }} direction="row" justifyContent={"center"} spacing={1} divider={<Divider orientation="horizontal" flexItem />} alignItems="flex-start">

            <Paper elevation={18} sx={{}}>
                {/* THÉ FORM FIELDS GO HERE*/ }
            </Paper>

            <Paper elevation={18} sx={{ maxWidth: '50ch' }}>
                {/** THE CARD PREVIEW GOES HERE */}
            </Paper>
        </Stack>

    </Box>);
}
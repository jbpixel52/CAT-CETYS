/* eslint-disable react/jsx-key */
import { Paper, Typography, Stack, Divider, Card, Box, TextField, Button } from "@mui/material";

import Head from "next/head";
import NavBar from "../components/NavBar/navigationbar"
import { useState } from 'react'
import useSWR from "swr";


export default function Editor() {

    const { data, error } = useSWR('/api/db/test');
    console.log(JSON.stringify(data));



    function BuildFunctions() {
        let componentGroup: JSX.Element = (
            <div>{fields.map((element) => <Stack direction={'row'} spacing={3} sx={{ p: '0.5em' }}>
                <Typography>{element}</Typography>
                <TextField id="outlined-basic" label={"TextField for this " + element.toUpperCase()} variant="outlined" />
            </Stack>)}</div>
        )

        return componentGroup;
    }

    function updateField(newField: typeof newValue) {
        setNewFields(fields => [ ...fields, newField ]);
    }
    const [ fields, setNewFields ] = useState([ 'field 1', 'field2', 'field3', 'field 4 ', 'nombre', 'field 1', 'field2', 'field3', 'field 4 ', 'nombre' ]);
    const [ newValue, setNewValue ] = useState('');

    return (<Box>
        <Head>
            <title>Editor</title>
        </Head>
        <NavBar />

        <Stack sx={{mt:'1em'}} direction="row" justifyContent={"center"} spacing={1} divider={<Divider orientation="horizontal" flexItem />} alignItems="flex-start">
            <Paper elevation={18} sx={{}}>
                <Typography variant="h5" sx={{ m: "1em" }}>Editor</Typography>
                {BuildFunctions()}
            </Paper>

            <Paper elevation={18} sx={{maxWidth:'50ch'}}>
                <Typography><b>RIGHT SIDE (CARD LIVE PREVIEW)</b></Typography>


                {/* <Typography>{ JSON.stringify(data)}</Typography> */}



            </Paper>
        </Stack>

    </Box>);
}



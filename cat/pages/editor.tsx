import { Paper, Typography, Stack, Divider, Box, TextField, Button } from "@mui/material";
import Head from "next/head";
import NavBar from "../components/NavBar/navigationbar"
import { useState } from 'react'
import { MakeRowRequest } from "../cat-db-management/cat-dbMaker/makeRowRequest";




export default function Editor() {
    const [ lorem, setLorem ] = useState('');
    const postText = async () => {
        try {
            await fetch(`/api/db/filas/createRow`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(new MakeRowRequest(undefined, lorem)),
            })

        } catch (error) {
            console.log('CLIENT SIDE ERROR IS:' + error)
        }

    }
    function BuildFunctions() {
        let componentGroup: JSX.Element = (
            <div>{fields.map((element) => <Stack direction={'row'} spacing={3} sx={{ p: '0.5em' }}>
                <Typography>{element}</Typography>
                <TextField id="outlined-basic" label={"TextField for this " + element.toUpperCase()} variant="outlined" />
            </Stack>)}</div>
        )

        return componentGroup;
    }

    const [ fields, setNewFields ] = useState([ 'field 1', 'field2', 'field3', 'field 4 ', 'nombre', 'field 1', 'field2', 'field3', 'field 4 ', 'nombre' ]);

    return (<Box>
        <Head>
            <title>Editor</title>
        </Head>
        <NavBar />

        <Stack sx={{ mt: '1em' }} direction="row" justifyContent={"center"} spacing={1} divider={<Divider orientation="horizontal" flexItem />} alignItems="flex-start">
            <Paper elevation={18} sx={{}}>
                <Typography variant="h5" sx={{ m: "1em" }}>Editor</Typography>
                {BuildFunctions()}
            </Paper>

            <Paper elevation={18} sx={{ maxWidth: '50ch' }}>
                <Typography><b>RIGHT SIDE (CARD LIVE PREVIEW)</b></Typography>
                <TextField id="outlined-basic" label={lorem} variant="outlined" onChange={event => { setLorem(event.target.value)}} />
                <Button variant="contained" onClick={() => { postText() }}> SEND REQUEST</Button>





            </Paper>
        </Stack>

    </Box>);
}
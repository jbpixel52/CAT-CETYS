import { Paper, Typography, Stack, Divider, Box, TextField, Button } from "@mui/material";
import Head from "next/head";
import NavBar from "../components/NavBar/navigationbar"
import { useEffect, useState } from 'react'
import { MakeRowRequest } from "../cat-db-management/cat-dbMaker/makeRowRequest";

import { camposCartas } from '@prisma/client'

type Fields = camposCartas;


async function getFields() {
    try {
        const fields = await fetch('/api/db/templetes/getFields', {
            method: 'GET'
        });
        const json = await fields.json()
        return json;
    } catch (error) {
        console.log(error)
    }

}

function FieldItem(field) {
    return (
        <Stack direction={'row'} spacing={3} sx={{ p: '0.5em' }}>
            <Typography>{ }</Typography>
            <TextField variant="outlined" />
        </Stack>
    )
}
function FormBuilder(fields) {
    let fields_desc = [];

    for (const obj in fields) {
        fields_desc.push(obj[ 'DESCRIPCION_CAMPO' ]);
    }
    const field_Items = fields_desc.map((desc) => (<FieldItem field={desc} />));
    return field_Items;

}



export default function Editor() {
    const [ Forms, setForms ] = useState();
    const [ lorem, setLorem ] = useState('');
    useEffect(() => {

        async function renderForms() {
            const res = await getFields();
            const builder = FormBuilder(res);
            setForms(builder)
        }
        renderForms();


    }, [])



    return (<Box>
        <Head>
            <title>Editor</title>
        </Head>
        <NavBar />

        <Stack sx={{ mt: '1em' }} direction="row" justifyContent={"center"} spacing={1} divider={<Divider orientation="horizontal" flexItem />} alignItems="flex-start">
            <Paper elevation={18} sx={{}}>
                <Typography variant="h5" sx={{ m: "1em" }}>Editor</Typography>
                {Forms}
            </Paper>

            <Paper elevation={18} sx={{ maxWidth: '50ch' }}>
                <Typography><b>RIGHT SIDE (CARD LIVE PREVIEW)</b></Typography>
                <TextField id="outlined-basic" label={lorem} variant="outlined" onChange={event => { setLorem(event.target.value) }} />
                <Button variant="contained" > SEND REQUEST</Button>
            </Paper>
        </Stack>

    </Box>);
}
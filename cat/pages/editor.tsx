import { Paper, Typography, Stack, Divider, Card, Box, TextField, Button } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import theme from "../styles/theme";
import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar/navigationbar"
import Dynamic from './Dynamic.tsx'
import { useState } from 'react'




async function getFields() { }




export default function Editor() {
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

    return (<Box sx={{ bgcolor: theme.palette.primary.light }}>
        <Head>
            <title>Editor</title>
        </Head>
        <NavBar />
        <Paper elevation={18} sx={{ mx: 'auto', maxWidth: "95%"}}>
            <Typography variant="h5" sx={{ m: "1em" }}>Editor</Typography>
            <Stack direction="row" justifyContent={"space-evenly"} spacing={1} divider={<Divider orientation="vertical" flexItem />} alignItems="baseline">
                <Paper sx={{ width: '35%' }}>
                    <Typography><b>CAMPOS DE LA CARTA</b></Typography>
                    <BuildFunctions />
                    <TextField id="newField" label={"Add new field"} value={newValue} onChange={(e) => setNewValue(e.target.value)} />
                    <AddCircleIcon onClick={() => { setNewFields(fields => [ ...fields, newValue ]) }} />
                </Paper>
                <Paper>
                    <Typography><b>RIGHT SIDE (CARD LIVE PREVIEW)</b></Typography>
                    <Dynamic title={newValue}></Dynamic>
                </Paper>
            </Stack>

        </Paper>
    </Box>);
}
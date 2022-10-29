import { Paper, Typography, Stack, Divider, Box, TextField, Button } from "@mui/material";
import Head from "next/head";
import NavBar from "../components/NavBar/navigationbar"
import { useEffect, useState } from 'react'
import { MakeRowRequest } from "../cat-db-management/cat-dbMaker/makeRowRequest";
import fetcher from "../utils/fetcher";
import { camposCartas } from '@prisma/client'

type Fields = camposCartas;


const data = async () => {
    let res: JSON = await fetcher('api/db/cartas/getFields', 'GET');
    //console.log(res)
    return res;
}


export default function Editor() {
    const [ fields, setfields ] = useState();

    useEffect(() => {
        data();

    }, [])



    return (<div>
        <Head>
            <title>Editor</title>
        </Head>
        <NavBar />

        <h1>Editor</h1>
        <div>

            <div>
                {/* THE FORM FIELDS GO HERE*/}
            </div>

            <div>
                {/** THE CARD PREVIEW GOES HERE */}
            </div>
        </div>

    </div>);
}
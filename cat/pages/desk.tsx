import {Paper, Box } from '@mui/material'
import Button from '@mui/material/Button'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import NavBar from '../components/NavBar/navigationbar'
import theme from '../styles/theme'
export default function Desk() {
    const router = useRouter();
    const { data: session, status } = useSession();

    if (session) {
    //MAIN LANDING PAGE, Desk name is a reference to a desk as the first workspace.
    return(<Box sx={{bgcolor:theme.palette.primary.light, width:'100vw', height:'100vh'}}>
         <Head>
            <title>Desk</title>
            </Head>
        <NavBar/>
        <Paper elevation={5} sx={{m:'1em', p:'1em', height:'75%'}}>
    
        </Paper>
    </Box>)
        
    }
}
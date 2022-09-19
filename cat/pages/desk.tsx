import { Button, Paper, Box } from '@mui/material'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Login from '../components/login/login'
import NavBar from '../components/NavBar/navigationbar'
import theme from '../styles/theme'
export default function Desk() {
    const router = useRouter()

    //MAIN LANDING PAGE, Desk name is a reference to a desk as the first workspace.
    return(<Box sx={{bgcolor:theme.palette.primary.light, width:'100vw', height:'100vh'}}>
         <Head>
            <title>Desk</title>
            </Head>
        <NavBar/>
        <Paper elevation={5} sx={{m:'1em', p:'1em'}} >
        <p>Desk Page</p>
        <Button variant="contained" onClick={()=>router.push('/editor')}>GO TO EDITOR</Button>
        <Button variant="contained" onClick={()=>router.push('/my-mdx-page')}>GO TO /template</Button>
        <Button variant="contained" onClick={()=>router.push('/admin')}>GO TO Admin Page</Button>
        </Paper>
    </Box>)
}
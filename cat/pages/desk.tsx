import { Button, Paper } from '@mui/material'
import Head from 'next/head'
import { useRouter } from 'next/router'
import PersistentDrawerLeft from '../components/drawer/drawer'
import Login from '../components/login'
export default function Desk() {
    const router = useRouter()

    //MAIN LANDING PAGE, Desk name is a reference to a desk as the first workspace.
    return(<>
         <Head>
            <title>Desk</title>
            </Head>
        <Paper elevation={18} sx={{m:'5em'}}>
        <p>Desk Page</p>
        <Button variant="contained" onClick={()=>router.push('/editor')}>GO TO EDITOR</Button>
        <Button variant="contained" onClick={()=>router.push('/my-mdx-page')}>GO TO /template</Button>

        <Login/>
        <PersistentDrawerLeft></PersistentDrawerLeft>
        </Paper>
    </>)
}
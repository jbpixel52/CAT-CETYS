import { Paper } from '@mui/material'
import PersistentDrawerLeft from '../components/drawer/drawer'
import Login from '../components/login'
export default function Desk() {
    //MAIN LANDING PAGE, Desk name is a reference to a desk as the first workspace.
    return(
    <Paper elevation={18} sx={{m:'5em'}}>
    <p>Desk Page</p>
    <Login/>
    <PersistentDrawerLeft></PersistentDrawerLeft>
    </Paper>)
}
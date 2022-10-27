import { Divider, Paper, Stack, Typography, Box } from "@mui/material";
import Login from "../components/login/login";
import theme from "../styles/theme";
import Head from "next/head";
import NavBar from "../components/NavBar/navigationbar";




export default function Page() {
    //     return (<Box sx={{bgcolor:theme.palette.primary.light, width:'100vw', height:'100vh'}}>
    //         <NavBar></NavBar>
    //         <Head>
    //             <title>Admin</title>
    //         </Head>
    //         <Paper elevation={18} sx={{ m: '5%' }}>
    //             <Typography variant="h5" sx={{ m: "1em" }}>Admin</Typography>
    //             <Login />

    //             <Stack direction="row" justifyContent={"space-evenly"} spacing={3}  divider={<Divider orientation="vertical" flexItem />}   alignItems="flex-start"

    // >
    //                 <Paper sx={{}}><Typography>LEFT SIDE</Typography></Paper>
    //                 <Paper sx={{}}><Typography>RIGHT SIDE</Typography></Paper>
    //             </Stack>


    //         </Paper>
    //     </Box>);
    return (<>
        <div >
            <h1 className="text-3xl font-bold underline opacity-5">
                Hello world!💕
            </h1>
        </div>
    </>)
}
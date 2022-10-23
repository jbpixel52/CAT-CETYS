import { Paper, Box } from '@mui/material'
import Button from '@mui/material/Button'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next/types'
import NavBar from '../components/NavBar/navigationbar'



// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
// export const getServerSideProps: GetServerSideProps = async () => {

// }

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
    const res = await fetch('http://localhost:3000/api/db/filas/getRows', {
        method: 'GET'
    })
    let req_data = await JSON.parse(JSON.stringify(await res.json()));
    return {
        props: {
            data: req_data
        }
    };
}

export default function Desk({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
   //console.log(data)

    const router = useRouter();
    const { data: session, status } = useSession();

    if (session) {
        //MAIN LANDING PAGE, Desk name is a reference to a desk as the first workspace.
        return (<Box sx={{ width: '100vw', height: '100vh' }}>
            <Head>
                <title>Desk</title>
            </Head>
            <NavBar />
            <Paper elevation={5} sx={{ m: '1em', p: '1em', height: '75%' }}>

            </Paper>
        </Box>)

    }
}
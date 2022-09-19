import { Typography, Container, Box, Stack } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import Login from '../components/login';
import Image from 'next/future/image'
import theme from '../styles/theme';

export default function BrandPage() {
    return (<Box sx={{ alignItems: "flex-end", width: "100vw", height: "100vh", bgcolor: theme.palette.primary.light }}>
        <Box sx={{ px: '8em', py: '4em', bgcolor: theme.palette.primary.light }}>

            <Stack
                direction="row"
                justifyContent="space-between"
                spacing={3}
                alignItems='baseline'
            ><Typography variant='h1' gutterBottom >CAT😼</Typography>
                <Login /> </Stack>


            <Stack
                direction="row"
                justifyContent="space-evenly"
                spacing={3}
                alignItems='flex-start'
            >
                <Typography align='justify' sx={{ width: "100rem" }}>
                    <Typography variant="h3">What is this?</Typography>
                    <p>The app is to easily develop and control the collaborative editing for engineering syllabus documents for a school administatrion</p>
                    <ul>
                        <li>
                            tupu 2024!
                        </li>

                        <li>
                            El que quiera aventarse esto adelante.
                        </li>

                        <li>
                            Bush did 9/11. 619 Rey Misterio
                        </li>
                    </ul>

                </Typography>
                <Image
                    width={400}
                    height={400}
                    src='/page_emoji.png'
                    alt="Pag with curl 3d emoji"
                />
            </Stack>
        </Box>

        <Stack
            direction="row"
            justifyContent="space-evenly"
            spacing={3}
            alignItems='flex-end'
        >
            <Typography>CAT 2022</Typography>

        </Stack>
    </Box>
    )
}
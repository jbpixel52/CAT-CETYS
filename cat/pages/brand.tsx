import { Typography, Box, Stack } from '@mui/material';
import Login from '../components/login/login';
import Image from 'next/future/image'
import theme from '../styles/theme';


export default function BrandPage() {
    return (<Box sx={{ alignItems: "flex-end", width: "100vw", height: "100vh", bgcolor: theme.palette.primary.light }}>
        <Box sx={{ px: '8em', paddingTop: '4em', bgcolor: theme.palette.primary.light }}>
            <Stack
                direction="row"
                justifyContent="space-between"
                spacing={3}
                alignItems='baseline'
            ><Typography variant='h1' gutterBottom ><b>CAT😼</b></Typography>
                <Login /> 
                </Stack>
            <Stack
                direction="row"
                justifyContent="space-evenly"
                spacing={3}
                alignItems='flex-start'>
                <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={1}>
                    <Typography variant="h4" align='justify'>
                        Cartas Académicas Transcritas
                    </Typography>
                    <Typography paragraph variant='caption'>! do not mix emotion-css styled components with plain html components</Typography>
                </Stack>
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
            <Typography>MEOW🐈 (2022)</Typography>
        </Stack>
    </Box>
    )
}
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import {Box, Stack, Avatar} from '@mui/material'
import Login from '../login/login'
import theme from '../../styles/theme';
import { useSession } from "next-auth/react"


export default function NavBar(){
const { data: session, status } = useSession();
console.log(session?.user?.image)

return(<Box
    sx={{px:'2em', py:'1em'}}
>
<Stack
  direction="row"
  justifyContent="space-between"
  alignItems="flex-start"
  spacing={2}

> 

<Link href={'/'}>
        <Typography variant='h4'>
            <b>{session ? <>CAT😼</> : <>CAT😿</>}</b>
        </Typography>
    </Link>
<Stack
  direction="row"
  alignItems="flex-end"
  spacing={2}

> <Login/>


{session ?<Avatar alt={session?.user?.name} src={session?.user?.image}/> : <></> }
</Stack>

    
</Stack>

</Box>)    
}